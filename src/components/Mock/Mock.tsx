import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';
import './Mock.css';

interface UserProps {
  name: string;
  username: string;
  id: number;
  email: string;
  website: string;
  completed: boolean;
}

const Mock = () => {
  type Action = { type: 'userInput'; payload: string };
  type State = { userInput: string };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'userInput':
        return { ...state, userInput: action.payload };
    }
  };

  const [userData, setUserData] = useState<UserProps[]>([]);
  const [error, setError] = useState<null | string>(null);

  const [state, dispatch] = useReducer(reducer, { userInput: '' });

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

  const filterUser = userData.filter(
    (filterItem) =>
      filterItem.name.toLowerCase().includes(state.userInput.toLowerCase()) ||
      filterItem.email.toLowerCase().includes(state.userInput.toLowerCase())
  );

  const handleComplete = (id: number) => {
    setUserData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="user-app">
      <h3>User App</h3>
      <div className="wrapper">
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) =>
            dispatch({ type: 'userInput', payload: e.target.value })
          }
          value={state.userInput}
        />
        {error && <p className="error-message">{error}</p>}

        {state.userInput && (
          <div>
            {filterUser.map((item) => (
              <div
                className="user-card"
                key={item.id}
                style={{ background: item.completed ? 'lightGreen' : 'none' }}
              >
                <h2>{`Name: ${item.name}`}</h2>
                <h3>{`Username: ${item.username}`}</h3>
                <h4>{`Email: ${item.email}`}</h4>
                <h5>{`Website: ${item.website}`}</h5>
                <button onClick={() => handleComplete(item.id)}>
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mock;
