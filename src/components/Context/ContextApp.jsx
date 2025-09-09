import React from 'react';

import MyComponent from './MyComponent';
import MyProvider from './MyProvider';

const ContextApp = () => {
  return (
    <div>
      <MyProvider>
        <MyComponent />
      </MyProvider>
    </div>
  );
};

export default ContextApp;
