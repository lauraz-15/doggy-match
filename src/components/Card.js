import React from 'react';

const Card = ({card, index, clickhandler}) => {
  return (
    <div className={`card ${card.status}`} onClick={() => clickhandler (index)}>
      <img src={card.img} />
    </div>
  );
};

export default Card;
