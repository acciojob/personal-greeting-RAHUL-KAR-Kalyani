
import React from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div>Enter your name</div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>Hello {inputValue}</div>
    </div>
  )
}

export default App
