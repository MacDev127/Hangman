import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserProps {
  name: string;
  email: string;
  id: number;
  username: string;
}

const NewUser = () => {
  const [userData, setUserData] = useState<UserProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users{`something${somehtingElse}`}'
        );
        setUserData(response.data);
      } catch {
        console.error(error);
        setError('error fetching data');
      } finally {
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filterData = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.username.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="new-user">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInput}
        value={inputValue}
      />
      {isLoading && <p>loading...</p>}
      <p>
        {!isLoading && !error && inputValue && filterData.length > 0 && (
          <div>
            {filterData.map((item, index) => (
              <div key={index}>
                <h3>{`Name: ${item.name}`}</h3>
                <h3>{`Email: ${item.email}`}</h3>
                <h3>{`Username: ${item.username}`}</h3>
              </div>
            ))}
          </div>
        )}
      </p>
    </div>
  );
};

export default NewUser;
