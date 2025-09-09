import React, { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
  name: string;
  email: string;
};

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setData(response.data);
      } catch {
        console.error('error');
        setError('errro fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Test App</h1>

      <div>
        <input
          type="text"
          placeholder="enter name"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      <div>
        {inputValue && filteredUsers.length > 0 && (
          <div>
            {filteredUsers.map((user, index) => (
              <div key={index}>
                <p>{`Name: ${user.name} Email:${user.email}`}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <p>Error fetching data</p>}
    </div>
  );
};

export default Search;
