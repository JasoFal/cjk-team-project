import React from 'react';
import tavernMusic from './assets/Bg-tavern-music.mp3';
import GameControl from './components/GameControl';
import './component css/Background.css';

function App() {
  return (
    <React.Fragment>
      <audio src={tavernMusic} autoPlay loop volume={0.5} style={{ display: 'none' }} />
      <div className="container">
        <h1 className="main-title">Text Adventure</h1>
        <GameControl />
      </div>
    </React.Fragment>
  );
}

export default App;