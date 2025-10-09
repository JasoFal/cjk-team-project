import React from 'react';

function Choices({ options, onChoice }) {
  return (
    <React.Fragment>
      {options.map((option, index) => (
        <button className="choice-btn" key={index} onClick={() => onChoice(option.nextSceneId, option.inventoryChange)}>
          {option.text}
        </button>
      ))}
    </React.Fragment>
  );
}

export default Choices;