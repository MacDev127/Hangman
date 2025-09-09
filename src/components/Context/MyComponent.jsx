import React, { useContext } from 'react';
import { MyContext } from './Context';
const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue('Updated Value!')}>Update Context</button>
    </div>
  );
};

export default MyComponent;
