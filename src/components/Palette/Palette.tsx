import { useState } from 'react';
import colors from './color';

interface ColorProps {
  hex: string;
  name: string;
}
const Palette = () => {
  const [hexColor, setHexColor] = useState<ColorProps | null>(null);

  const handleSubmit = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setHexColor(randomColor);
  };

  return (
    <div className="container">
      {hexColor && (
        <>
          <h3>{hexColor.name}</h3>
          <h3>{hexColor.hex}</h3>
          <div
            style={{
              display: 'flex',
              width: '100px',
              height: '100px',
              backgroundColor: hexColor.hex,
              marginBottom: '1rem',
            }}
          ></div>
        </>
      )}

      <button onClick={handleSubmit}>Get a Color</button>
    </div>
  );
};

export default Palette;
