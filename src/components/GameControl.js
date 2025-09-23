import React, { useState } from 'react';
import Game from './Game';
import storyData from '../data/StoryData.json';
import itemData from '../data/ItemData.json';
import Inventory from './Inventory';

function GameControl() {
  const [currentSceneId, setCurrentSceneId] = useState("1");
  const [inventoryContent, setInventoryContent] = useState([]);
  const [inventoryVisible, setInventoryVisible] = useState(false);

  const handleChoice = (nextSceneId, inventoryChange) => {
    if (inventoryChange) handleInventoryChange(inventoryChange);
    setCurrentSceneId(nextSceneId);
  };

  const handleInventoryDisplayClick = () => {
    setInventoryVisible(!inventoryVisible);
  };

  const handleInventoryChange = ({ changeType, itemId }) => {
    switch (changeType) {
      case "ADD":
        setInventoryContent(inventoryContent.concat(itemData[itemId]));
        break;
      case "REMOVE":
        setInventoryContent(inventoryContent.filter(el => el.id !== itemId))
        break;
      case "CLEAR":
        setInventoryContent([]);
        break;
      default:
        throw Error("Improper inventory change type");
    }
  };

  const isInventoryEmpty = (inventory) => {
    let empty = true;
    inventory.forEach(item => {
      if (item.type !== "flag") {
        empty = false;
      }
    });
    return empty;
  }

  return (
    <React.Fragment>
      <Game
        currentScene={storyData[currentSceneId]}
        inventory={inventoryContent}
        onChoice={handleChoice}
      />
      <hr />
      <button onClick={handleInventoryDisplayClick}>{inventoryVisible ? "Hide" : "Show"} inventory</button>
      {inventoryVisible &&
        <div>
          {isInventoryEmpty(inventoryContent) ? <h4>Your inventory is empty!</h4> : <Inventory content={inventoryContent} />}
        </div>
      }
    </React.Fragment>
  );
}

export default GameControl;