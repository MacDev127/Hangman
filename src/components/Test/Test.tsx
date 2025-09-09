import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Users {
  name: string;
  username: string;
  email: string;
  id: number;
}

const Test = () => {
  const [userData, setUserData] = useState<Users[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUserData(response.data);
      } catch {
        console.error('error');
        setError('Error fetching data!');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredUsers = userData.filter(
    (userItem) =>
      userItem.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      userItem.email.toLowerCase().includes(inputValue.toLowerCase()) ||
      userItem.username.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="enter search term"
        onChange={handleInput}
        value={inputValue}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && filteredUsers.length > 0 && inputValue && (
        <>
          <div>
            {filteredUsers.map((user) => (
              <div key={user.id}>
                <p>{`Name: ${user.name}, Email: ${user.email}, UserName: ${user.username}`}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
