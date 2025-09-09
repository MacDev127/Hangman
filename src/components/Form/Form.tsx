import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState<null | typeof inputValue>(
    null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('Form submitted:', inputValue);

    // Store submitted data to show on screen
    setSubmittedData(inputValue);

    // Reset form
    setInputValue({
      firstName: '',
      lastName: '',
      email: '',
    });
  };

  return (
    <>
      <div className="form">
        <form>
          <div className="form_input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleInputChange}
              value={inputValue.firstName}
            />
          </div>
          <div className="form_input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleInputChange}
              value={inputValue.lastName}
            />
          </div>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={inputValue.email}
            />
          </div>
          <div className="form__button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        {submittedData && (
          <div>
            <h2>Form Submission</h2>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
