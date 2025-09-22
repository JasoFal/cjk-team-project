import React, { useState } from 'react';
import Game from './Game';
import storyData from '../data/StoryData.json';
import Inventory from './Inventory';

function GameControl() {
  const [currentSceneId, setCurrentSceneId] = useState("0");
  const [inventoryContent, setInventoryContent] = useState([]);
  const [inventoryVisible, setInventoryVisible] = useState(false);

  const handleChoice = (nextSceneId, inventoryChange) => {
    if (inventoryChange) handleInventoryChange(inventoryChange);
    setCurrentSceneId(nextSceneId);
  };

  const handleInventoryDisplayClick = () => {
    setInventoryVisible(!inventoryVisible);
  };

  const handleInventoryChange = ({ changeType, data }) => {
    switch (changeType) {
      case "ADD":
        setInventoryContent(inventoryContent.concat(data));
        break;
      case "REMOVE":
        setInventoryContent(inventoryContent.filter(el => el.id !== data.id))
        break;
      case "CLEAR":
        setInventoryContent([]);
        break;
    }
  };

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
        <Inventory content={inventoryContent} />
      }
    </React.Fragment>
  );
}

export default GameControl;