import React, { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>

      <h3>Count = {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => count >= 1 && setCount(count - 1)}
        style={{ marginRight: '6px', marginLeft: '6px' }}
      >
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default Counter;
