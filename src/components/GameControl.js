import React, { useState } from 'react';
import Game from './Game';
import storyData from '../data/StoryData.json';
import itemData from '../data/ItemData.json';
import Inventory from './Inventory';
import CharacterSheet from './CharacterSheet';

function GameControl() {
  const [currentSceneId, setCurrentSceneId] = useState("1");
  const [inventoryContent, setInventoryContent] = useState([]);
  const [inventoryVisible, setInventoryVisible] = useState(false);
  const [characterSheetVisible, setCharacterSheetVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Update inventory and/or go to next scene upon selecting a scene option
  const handleChoice = (nextSceneId, inventoryChange) => {
    if (inventoryChange) handleInventoryChange(inventoryChange);
    // If restarting game, increment resetKey
    if (nextSceneId === "1" && currentSceneId === "0") {
      setResetKey(prev => prev + 1);
    }
    setCurrentSceneId(nextSceneId);
  };

  // Toggle inventory visibility
  const handleInventoryDisplayClick = () => {
    setInventoryVisible(!inventoryVisible);
  };

  // Toggle character sheet visibility
  const handleCharacterSheetDisplayClick = () => {
    setCharacterSheetVisible(!characterSheetVisible);
  };

  // Change InventoryContent by adding items from InventoryData.json or removing them
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

  // Helper function to check for an inventory empty of visible items
  // 'flag' items are invisible items which can be used for internal condition logic
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
        resetKey={resetKey}
      />
      <hr />
      <button className="btn btn-success mb-1" onClick={handleInventoryDisplayClick}>{inventoryVisible ? "Hide" : "Show"} inventory</button>
      {inventoryVisible &&
        <div className="mt-1 mb-3">
          {isInventoryEmpty(inventoryContent) ? <h4>Your inventory is empty!</h4> : <Inventory content={inventoryContent} />}
        </div>
      }
      <div>
        <button className="btn btn-primary mb-2" onClick={handleCharacterSheetDisplayClick}>{characterSheetVisible ? "Hide" : "Show"} character sheet</button>
        {
          characterSheetVisible &&
          <CharacterSheet />

        }
      </div>
    </React.Fragment>
  );
}

export default GameControl;