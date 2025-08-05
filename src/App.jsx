import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import { useState } from 'react';

function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy".toLocaleUpperCase()} targetTime={1} />
        <TimerChallenge title={"Not Easy".toLocaleUpperCase()} targetTime={5} />
        <TimerChallenge title={"Getting Tough".toLocaleUpperCase()} targetTime={10} />
        <TimerChallenge title={"Pros Only".toLocaleUpperCase()} targetTime={15} />
      </div>
    </>
  );
}

export default App;
