import { useState, useRef } from 'react';

export default function Player({ name, onChange }) {
  const [inputValue, setInputValue] = useState('unknown entity');
  const inputRef = useRef();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {inputValue}</h2>
      <p>
        <input type="text" onChange={onChange} ref = {inputRef} />
        <button onClick = {() => setInputValue(name)}>Set Name</button>
      </p>
    </section>
  );
}
