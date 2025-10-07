import React from 'react';

function ItemDetail({ item }) {

  return (
    <div className="position-absolute z-1 card text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text">{item.desc}</p>
      </div>
    </div>
  )
}

export default ItemDetail;