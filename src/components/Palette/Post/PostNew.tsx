import React, { useState } from 'react';
import Axios from 'axios';

interface UserProps {
  name: string;
  email: string;
}

const PostNew = () => {
  const [formData, setFormData] = useState<UserProps>({
    name: '',
    email: '',
  });

  const [error, setError] = useState<string | null>(null);

  const postData = async () => {
    try {
      const response = await Axios.post(
        'https://reqres.in/api/users',
        formData,
        {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        }
      );

      console.log('success', response.data);
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error(error);
      setError('error posting data');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postData();
  };

  return (
    <div className="post-app">
      <h2>User Form</h2>

      <form>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInput}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleInput}
            value={formData.email}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostNew;
