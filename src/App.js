import React from 'react';
import GameControl from './components/GameControl';
import './component css/Background.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
  <h1 className="main-title">Text Adventure</h1>
        <GameControl />
      </div>
    </React.Fragment>
  );
}

export default App;