import React from 'react';
import StoryDisplay from './StoryDisplay';
import Choices from './Choices';

function Game({ currentScene, inventory, onChoice, resetKey }) {

  // Check inventory to see if player has or lacks items
  // This is used to alter scene text or the available options
  const areConditionsMet = (conditions) => {
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
          default:
            throw Error("Improper condition type");
        }
      });
    }
    return valid;
  }

  // Combine slices of text as given by StoryData.json
  // String slices can be present or absent depending on the condition of the inventory
  const compileSceneText = (scene) => {
    const compiledText = scene.text.reduce((acc, currVal) => {
      return areConditionsMet(currVal.conditions) ? acc.concat(currVal.line) : acc
    }, "");
    return compiledText;
  }

  const sceneText = compileSceneText(currentScene);
  const sceneOptions = currentScene.options.filter((val) => areConditionsMet(val.conditions));

  return (
    <React.Fragment>
      <StoryDisplay newText={sceneText} newImage={currentScene.image} currentScene={currentScene} resetKey={resetKey} />
      <Choices options={sceneOptions} onChoice={onChoice} />
    </React.Fragment>
  );
}

export default Game;