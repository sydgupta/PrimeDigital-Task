import { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [reversedValue, setReversedValue] = useState('');

  function clearInput() {
    setInputValue('');
  }

  function reverseString(value) {
    setInputValue(value);
    let reversedVal = value.split('').reverse().join('');
    setReversedValue(reversedVal);
    highlightVowels(reversedVal);
  }

  function highlightVowels(value) {
    let matchingInstances = value.match(/[aeiou]/gi);
    let newVal = value.replace(new RegExp(/[aeiou]/gi), (match) => `<span>${match}</span>`);
    if (matchingInstances) {    
        setReversedValue(newVal);
    } else {
        console.log('No Vowels');
    }

  }

  return (
    <div className="app">
      <h2>Reverse String & Highlight Vowels</h2>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Text ..." value={inputValue} onChange={event => reverseString(event.target.value)}/>
        <button type="button" onClick={clearInput}>Clear</button>
      </div>
      <h3 dangerouslySetInnerHTML={{__html: reversedValue}}></h3>
    </div>
  );
}

export default App;
