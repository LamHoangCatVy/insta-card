import React, { useEffect, useState } from "react";
import CardBlock from "./CardBlock";

const Card = ({ card }) => {
  const [reversedCards, setReversedCards] = useState([]);

  useEffect(() => {
    setReversedCards(card.reverse());
  }, [card]);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-lg w-full p-4">
        <CardBlock cards={reversedCards} />
      </div>
    </div>
  );
};

export default Card;
