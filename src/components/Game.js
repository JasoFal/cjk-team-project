import React from 'react';
import StoryDisplay from './StoryDisplay';
import Choices from './Choices';

function Game({ currentScene, inventory, onChoice, }) {
  if (!currentScene) {
    return <div>Game Over!</div>; // TODO: add restart
  }

  const validOption = (conditions) => {
    let valid = true;
    if (conditions) {
      conditions.forEach(condition => {
        switch (condition[0]) {
          case "HAS":
            if (!inventory.some((item) => item.id === condition[1])) {
              valid = false;
            }
            break;
          case "LACKS":
            if (inventory.some((item) => item.id === condition[1])) {
              valid = false;
            }
            break;
        }
      });
    }
    return valid;
  }

  let sceneText = currentScene.text;
  const sceneOptions = currentScene.options.reduce((acc, currVal) => {
    return validOption(currVal.conditions) ? acc.concat(currVal) : acc;
  }, []);

  return (
    <React.Fragment>
      <StoryDisplay text={sceneText} image={currentScene.image} />
      <Choices options={sceneOptions} onChoice={onChoice} />
    </React.Fragment>
  );
}

export default Game;