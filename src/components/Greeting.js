import React, { useState } from 'react';

function Greeting() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {inputValue && <p>Hello {inputValue}!</p>}
    </div>
  );
}

export default Greeting;
