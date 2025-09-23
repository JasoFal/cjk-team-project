import React from 'react';

function Inventory({ content }) {

  return (
    <React.Fragment>
      <h4>Inventory:</h4>
      <ul className="list-group">
        {content.map((item) =>
          <li className="list-group-item" key={item.id}>{item.name}</li>
        )}
      </ul>
    </React.Fragment>
  );
}

export default Inventory;