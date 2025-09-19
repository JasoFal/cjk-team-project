import React from 'react';

function Choices({ options, onChoice }) {
  return (
    <React.Fragment>
      {options.map((option, index) => (
        <button key={index} onClick={() => onChoice(option.nextSceneId)}>
          {option.text}
        </button>
      ))}
    </React.Fragment>
  );
}

export default Choices;