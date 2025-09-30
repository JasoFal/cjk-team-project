import React from 'react';
import Item from './Item';

function Inventory({ content }) {
  // return unordered list element of all non-flag items
  return (
    <React.Fragment>
      <ul className="list-group d-inline-flex">
        {content
          .filter((item) => item.type !== "flag")
          .map((item) =>
            <Item key={item.id} item={item} />
          )}
      </ul>
    </React.Fragment>
  );
}

export default Inventory;