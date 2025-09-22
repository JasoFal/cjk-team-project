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

  const handleInventoryDisplayClick = () => {
    setInventoryVisible(!inventoryVisible);
  };

  const handleInventoryChange = (changeType, data) => {
    switch (changeType) {
      case "ADD":
        setInventoryContent({ ...inventoryContent, ...data });
        break;
      case "REMOVE":
        setInventoryContent(Object.entries(inventoryContent).reduce((acc, [key, value]) => {
          return key === data ? acc : { ...acc, key: value }
        }, {}))
        break;
      case "CLEAR":
        setInventoryContent({});
        break;
    }
  };

  return (
    <React.Fragment>
      <Game
        currentScene={storyData[currentSceneId]}
        inventory={inventoryContent}
        onChoice={handleChoice}
        onInventoryChange={handleInventoryChange}
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