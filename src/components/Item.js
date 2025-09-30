import React, { useState } from 'react';
import ItemDetail from './ItemDetail';

function Item({ item }) {
  // state used to display or hide popup details on mouseover
  const [showingDetails, setShowingDetails] = useState(false);

  return (
    <li
      className="list-group-item list-group-item-action"
      onMouseEnter={() => setShowingDetails(true)}
      onMouseLeave={() => setShowingDetails(false)}>
      <p className="m-0">{item.name}</p>
      {showingDetails &&
        <ItemDetail item={item} />
      }
    </li>
  );
}

export default Item;