import React, { useState, useEffect } from 'react';
import Axios from 'axios';

interface UserData {
  name: string;
  email: string;
}

const User = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setData(response.data);
    } catch (error) {
      console.error('error');
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
        value={searchTerm}
      />

      {searchTerm && filteredUsers.length > 0 && (
        <div>
          {filteredUsers.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              {/* <p style={{ fontWeight: 'bold' }}>{item.email}</p> */}
            </div>
          ))}
        </div>
      )}

      {error && <p>Error</p>}
    </div>
  );
};

export default User;
