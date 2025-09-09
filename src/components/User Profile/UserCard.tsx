import React from 'react';

interface CardProps {
  name: string;
  number: string;
  email: string;
  profilePicture?: File | null;
}

const UserCard: React.FC<CardProps> = ({
  name,
  number,
  email,
  profilePicture,
}) => {
  return (
    <div className="card">
      {profilePicture && (
        <img
          src={URL.createObjectURL(profilePicture)} // Display the image preview
          alt={`${name}'s Profile`}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '16px',
          }}
        />
      )}
      <h2>Name: {name}</h2>
      <p>Number: {number}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
