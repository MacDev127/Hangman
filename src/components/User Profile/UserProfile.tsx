import { useState } from 'react';
import UserCard from './UserCard';
import './UserProfile.css';
import { useDropzone } from 'react-dropzone';

interface UserProfile {
  name: string;
  email: string;
  number: string;
  profilePicture: File | null; // Add profile picture to the user profile
}

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState<UserProfile>({
    name: '',
    email: '',
    number: '',
    profilePicture: null, // Initialize with null
  });
  const [submittedDetails, setSubmittedDetails] = useState<UserProfile[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  // React Dropzone logic
  const onDrop = (acceptedFiles: File[]) => {
    setUserDetails((prev) => ({
      ...prev,
      profilePicture: acceptedFiles[0], // Take the first file (single file upload)
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [], // Accept only image files
    },
    maxSize: 5 * 1024 * 1024, // 5MB file size limit
  });

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmittedDetails([...submittedDetails, userDetails]);
    setUserDetails({
      name: '',
      email: '',
      number: '',
      profilePicture: null,
    });
  };

  return (
    <div className="page">
      <div className="form_container">
        <h1>User Profile</h1>

        <form>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name..."
              onChange={handleInputChange}
              value={userDetails.name}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              onChange={handleInputChange}
              value={userDetails.email}
            />
          </div>

          <div className="field">
            <label htmlFor="number">Number</label>
            <input
              type="number"
              name="number"
              placeholder="Enter Number..."
              onChange={handleInputChange}
              value={userDetails.number}
            />
          </div>
          <div className="field">
            <label>Upload Profile Picture</label>
            <div
              {...getRootProps()}
              style={{
                border: '2px dashed #ccc',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: isDragActive ? '#e3f2fd' : '#fafafa',
              }}
            >
              <input {...getInputProps()} />
              {userDetails.profilePicture ? (
                <p>Selected: {userDetails.profilePicture.name}</p>
              ) : (
                <p>
                  Drag & drop a profile picture here, or click to select one
                </p>
              )}
            </div>
          </div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="card_container">
        {submittedDetails.map((details, index) => (
          // <div key={index} className="card">
          //   <h3>Name: {details.name}</h3>
          //   <p>Email: {details.email}</p>
          //   <p>Number: {details.number}</p>
          // </div>
          <UserCard key={index} {...details} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
