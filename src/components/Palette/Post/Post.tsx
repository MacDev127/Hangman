import React, { useState } from 'react';
import Axios from 'axios';

interface UserData {
  name: string;
  email: string;
}

const Post = () => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
  });

  const [error, setError] = useState<string | null>(null);

  const postData = async () => {
    try {
      const response = await Axios.post(
        'https://reqres.in/api/register',
        formData
      );
      console.log('Post successful:', response.data);

      // Reset form
      setFormData({ name: '', email: '' });
    } catch (error) {
      setError('Error posting data');
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Post;
