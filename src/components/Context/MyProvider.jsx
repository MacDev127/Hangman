import React, { useState } from 'react';

import { MyContext } from './Context';
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello, Context!');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
