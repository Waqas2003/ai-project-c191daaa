import React from 'react';

function CardComponent({ title, description }) {
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default CardComponent;