import React, { useState } from 'react';
import Game from './Game';
import storyData from '../data/StoryData.json';
import Inventory from './Inventory';

function GameControl() {
  const [currentSceneId, setCurrentSceneId] = useState("0");
  const [inventoryContent, setInventoryContent] = useState({});
  const [inventoryVisible, setInventoryVisible] = useState(false);

  const handleChoice = (nextSceneId) => {
    setCurrentSceneId(nextSceneId);
  };

  const handleInventoryClick = () => {
    setInventoryVisible(!inventoryVisible);
  };

  return (
    <React.Fragment>
      <Game
        currentScene={storyData[currentSceneId]}
        onChoice={handleChoice}
      />
      <hr />
      <button onClick={handleInventoryClick}>{inventoryVisible ? "Hide" : "Show"} inventory</button>
      {inventoryVisible &&
        <Inventory />
      }
    </React.Fragment>
  );
}

export default GameControl;