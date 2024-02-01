import React, { useEffect, useState } from 'react';
import CardBlock from './CardBlock';
import Fade from '@mui/material/Fade';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Card = ({ card }) => {
  const [reversedCards, setReversedCards] = useState([]);
  const { targetRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setReversedCards(card.reverse());
  }, [card]);

  return (
    <Fade in={isVisible} timeout={500}>
      <div ref={targetRef} className="flex items-center justify-center">
        <div className="max-w-screen-lg w-full p-4">
          <CardBlock cards={reversedCards} />
        </div>
      </div>
    </Fade>
  );
};

export default Card;
