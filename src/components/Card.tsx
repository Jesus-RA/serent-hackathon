import React, { useEffect, useState } from 'react';
import '../styles/Card.css';

interface CardProps {
  /*
    This is the Card component that represents a single card in the game. We need to
    track the state of the card to determine if it has been flipped or matched. We also
    need to track the type of card to check if two cards are a match. If the cards are a match,
    we can update the state of the cards to indicate that they are matched. If they are not a match,
    we can flip the cards back over.
  */
  cardNumber: number;
  cardIndex: number;
  isClicked: boolean;
  onCardClick: (cardNumber: number, cardIndex: number) => void; // Prop function to handle card click
}

const Card: React.FC<CardProps> = ({ cardNumber, cardIndex, isClicked, onCardClick }) => {
  const handleClick = () => {
    onCardClick(cardNumber, cardIndex);
  };

  const [cardClass, setCardClass] = useState('card');

  useEffect(() => {
    if(isClicked){
      setCardClass('card reveal-card');
    }else if(cardClass.includes('reveal-card')){
      setCardClass('card hide-card');
      setTimeout(() => {
        setCardClass('card');
      }, 200);
    }
  }, [isClicked]);

  return (
    <div className={cardClass} onClick={handleClick}>
      <p>{cardNumber}</p>
    </div>
  );
};

export default Card;