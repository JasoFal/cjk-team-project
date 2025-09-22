import React from 'react';

function Inventory({ content }) {

  return (
    <React.Fragment>
      <h4>Inventory:</h4>
      {content.map((item) =>
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default Inventory;