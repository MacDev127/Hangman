import React, { useState } from 'react';

const CheckBoxes = () => {
  const devices = [
    { id: 1, name: 'MacBook Pro' },
    { id: 2, name: 'iPhone 14' },
    { id: 3, name: 'iPad Air' },
  ];

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {devices.map((item) => (
        <div style={{ display: 'flex' }} key={item.id}>
          <p>{item.name}</p>
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        </div>
      ))}
    </div>
  );
};

export default CheckBoxes;
