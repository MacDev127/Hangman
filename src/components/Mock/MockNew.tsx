import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';
import './Mock.css';

interface UserProps {
  name: string;
  username: string;
  id: string;
  email: string;
  onComplete: (id: string) => void;
  completed: boolean;
}

const MockNew = () => {
  const [userData, setUserData] = useState<UserProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchterm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
        setError('error fetching data');
      }
    };

    fetchData();
  }, []);

  const handleComplete = (id: string) => {
    setUserData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterUser = userData.filter(
    (filterItem) =>
      filterItem.name.toLowerCase().includes(searchterm.toLowerCase()) ||
      filterItem.username.toLowerCase().includes(searchterm.toLowerCase()) ||
      filterItem.email.toLowerCase().includes(searchterm.toLowerCase())
  );

  return (
    <div className="user-app">
      <div>
        <input
          type="text"
          placeholder="enter name.."
          onChange={handleSearch}
          value={searchterm}
        />
      </div>
      {filterUser.length > 0 && searchterm.trim() && (
        <div>
          {filterUser.map((item) => (
            <div
              className="container"
              key={item.id}
              style={{ background: item.completed ? 'lightGreen' : '' }}
            >
              <h3>{`Name: ${item.name}`}</h3>
              <h4>{`Username: ${item.username}`}</h4>
              <h5>{`Email: ${item.email}`}</h5>
              <button onClick={() => handleComplete(item.id)}>
                {item.completed ? 'Undo' : 'Complete'}
              </button>{' '}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MockNew;
