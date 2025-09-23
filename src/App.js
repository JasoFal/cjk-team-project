import React from 'react';
import GameControl from './components/GameControl'

function App() {

  return (
    <React.Fragment>
      <div className="container ">
        <h1>Text Adventure</h1>
        <GameControl />
      </div>
    </React.Fragment>
  );
}

export default App;