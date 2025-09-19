import React, { useState } from 'react';
import Game from './Game';
import storyData from '../data/StoryData.json';

function App() {
  const [currentSceneId, setCurrentSceneId] = useState("0");

  const handleChoice = (nextSceneId) => {
    setCurrentSceneId(nextSceneId);
  };

  return (
    <React.Fragment>
      <h1>Text Adventure</h1>
      <Game
        currentScene={storyData[currentSceneId]}
        onChoice={handleChoice}
      />
    </React.Fragment>
  );
}

export default App;