import React from 'react';

// Currently static character sheet
function CharacterSheet() {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">Firstname Lastname</div>
      <div className="card-body">
        <p className="card-text">Just your average adventure protagonist.</p>
      </div>
    </ div>
  );
}

export default CharacterSheet;