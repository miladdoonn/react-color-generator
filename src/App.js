import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: color,
          padding: 80,
          height: 80,
          margin: 100,
        }}
      >
        <br />
        <button onClick={() => setColor(randomColor)}>Generate</button>
      </div>
    </div>
  );
}
