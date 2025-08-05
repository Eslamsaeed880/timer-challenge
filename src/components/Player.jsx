import { useState, useRef } from 'react';

export default function Player({ name, onChange }) {
  const [inputValue, setInputValue] = useState('unknown entity');
  const playerName = useRef();

  function handleClick() {
    setInputValue(playerName.current.value || 'unknown entity');
  }

  return (
    <section id="player">
      <h2>Welcome {inputValue}</h2>
      <p>
        <input type="text" ref = {playerName} />
        <button onClick = {() => handleClick()}>Set Name</button>
      </p>
    </section>
  );
}
