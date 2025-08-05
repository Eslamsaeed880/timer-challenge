import Player from './components/Player.jsx';
import { useState } from 'react';

function App() {
  const [playerName, setPlayerName] = useState('');
  
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <Player name={playerName} onChange={handleNameChange} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
