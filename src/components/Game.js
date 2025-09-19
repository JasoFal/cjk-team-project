import React from 'react';
import StoryDisplay from './StoryDisplay';
import Choices from './Choices';

function Game({ currentScene, onChoice }) {
  if (!currentScene) {
    return <div>Game Over!</div>; // TODO: add restart
  }

  return (
    <React.Fragment>
      <StoryDisplay text={currentScene.text} image={currentScene.image} />
      <Choices options={currentScene.options} onChoice={onChoice} />
    </React.Fragment>
  );
}

export default Game;