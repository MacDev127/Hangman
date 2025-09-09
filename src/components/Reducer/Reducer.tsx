import React, { useReducer } from 'react';

const ReducerMock = () => {
  type State = { count: number; userInput: string };
  type Action =
    | { type: 'increase' }
    | { type: 'decrease' }
    | { type: 'userInput'; payload: string };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increase':
        return { ...state, count: state.count + 1 };
      case 'decrease':
        return { ...state, count: state.count - 1 };
      case 'userInput':
        return { ...state, userInput: action.payload };
      default:
        throw new Error('something went wrong');
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '' });

  return (
    <>
      <div>
        <h3>count = {state.count}</h3>
        <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
        <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>

        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Type something..."
            onChange={(e) =>
              dispatch({ type: 'userInput', payload: e.target.value })
            }
          />
          <div>{state.userInput}</div>
        </div>
      </div>
    </>
  );
};

export default ReducerMock;
