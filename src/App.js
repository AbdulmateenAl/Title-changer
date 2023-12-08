import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState("");

  const handleChange = ({target}) => {
    setName(target.value);
  };

  return (
    <div className="App">
      <h1>Hi, I am {name}</h1>
      <input
      value={name}
      type='text'
      onChange={handleChange} />
    </div>
  );
}

