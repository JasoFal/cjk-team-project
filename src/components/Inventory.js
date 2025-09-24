import React from 'react';
import Item from './Item';

function Inventory({ content }) {

  return (
    <React.Fragment>
      <h4>Inventory:</h4>
      <ul className="list-group d-inline-flex">
        {content.map((item) =>
          <Item key={item.id} item={item} />
        )}
      </ul>
    </React.Fragment>
  );
}

export default Inventory;