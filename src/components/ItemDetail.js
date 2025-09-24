import React from 'react';

function ItemDetail({ item }) {

  return (
    <div className="z-1 position-absolute">
      <p>{item.desc}</p>
    </div>
  )
}

export default ItemDetail;