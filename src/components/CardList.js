import React, { useState, useRef } from "react";
import { PropTypes } from "prop-types";

const CardList = ({ cards }) => {
    if(!cards) return null;
    
  return (
    <ul className="list-unstyled">
      {cards && cards.map((card) => {
        return (
          <li key={`${card.suit}-${card.value}`}>
            {card.value} {card.suit}
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};
