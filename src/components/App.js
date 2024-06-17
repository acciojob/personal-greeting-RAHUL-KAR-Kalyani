import React, { useState } from 'react';
import './../styles/App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div>
			<p>Enter your name:</p>
			<input type="text" value={inputValue} onChange={handleInputChange}/>
			<p>Hello {inputValue}</p>
		</div>
	)
}

export default App;
