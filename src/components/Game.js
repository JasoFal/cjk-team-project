import React from 'react';
import StoryDisplay from './StoryDisplay';
import Choices from './Choices';

function Game({ currentScene, inventory, onChoice, }) {
  if (!currentScene) {
    return <div>Game Over!</div>; // TODO: add restart
  }
  let sceneText = currentScene.text;
  let sceneOptions = currentScene.options;

  return (
    <React.Fragment>
      <StoryDisplay text={sceneText} image={currentScene.image} />
      <Choices options={sceneOptions} onChoice={onChoice} />
    </React.Fragment>
  );
}

export default Game;