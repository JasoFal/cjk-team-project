import React from 'react';

function Choices({ options, onChoice }) {
  return (
    <React.Fragment>
      {options.map((option, index) => (
        <button className="btn btn-outline-secondary me-1" key={index} onClick={() => onChoice(option.nextSceneId, option.inventoryChange)}>
          {option.text}
        </button>
      ))}
    </React.Fragment>
  );
}

export default Choices;