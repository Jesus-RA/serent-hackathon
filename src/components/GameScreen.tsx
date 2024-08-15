import React, { useEffect, useState } from 'react';
import '../styles/GameScreen.css';
import Card from './Card'; // import the Card component

/*
    This is the GameScreen component that will be displayed when the game is in progress.
    It will display the grid of cards and a button to end the game.
    Optionally, we can add a timer, a score, and other game-related information here.
    We need to keep track of the state of each card, the number of cards, and the type of cards
    and implement the logic to check if two cards are a match. If they are a match, we can
    update the state of the cards to indicate that they are matched. If they are not a match,
    we can flip the cards back over.
*/

interface Props {
  // keep track of the number of cards in the x and y grid
  x: number;
  y: number;
  onEndGame: () => void; // Prop function to end the game
}

interface CardState {
  cardNumber: number | null;
  cardIndex: number | null;
}

const GameScreen: React.FC<Props> = ({ x, y, onEndGame }) => {
  const [MATCHES, setMatches] = useState(new Set<number>());
  const [tries, setTries] = useState(0);
  const [gameScreenClasses, setGameScreenClasses] = useState('gamescreen show-all');

  setTimeout(() => {
    setGameScreenClasses('gamescreen');
  }, 2000);

  const [cards] = useState<number[]>(shuffle(fillWithPairs(x * y)));
  const [cardsState, setCardsState] = useState<{ [key: number]: boolean }>({});

  const [firstCard, setFirstCard] = useState<CardState>({ cardNumber: null, cardIndex: null });
  const [secondCard, setSecondCard] = useState<CardState>({ cardNumber: null, cardIndex: null });

  function handleCardClick(cardNumber: number, cardIndex: number){
    // Do nothing if same card is clicked more than
    if(firstCard.cardIndex === cardIndex){
      return;
    }
    
    //Processing two cards, cannot process more thant two cards at a time
    if(firstCard.cardIndex !== null && secondCard.cardIndex !== null){
      return;
    }

    updateCardState(cardIndex);

    // If the first card is not set, set it
    if(firstCard.cardNumber === null){
      setFirstCard({ cardNumber, cardIndex });
    } else {// Otherwise check if match
      setSecondCard({cardNumber, cardIndex});

      // Copilot says that a setTimeout is necessary to access the updated state
      setTimeout(() => {
        // Add card to MATCHES if it matches
        if(firstCard.cardNumber === cardNumber && firstCard.cardIndex !== cardIndex){
          //setMatches(new Set<number>([...MATCHES, cardNumber]));
          setMatches(prevState => prevState.add(cardNumber));
          resetSelectedCards();
        } else {// Otherwise, flip the cards back over
          setTimeout(() => {
            setTries(tries + 1);

            console.log({firstCard})
            // Flip the cards back over
            if(firstCard.cardIndex !== null){
              updateCardState(firstCard.cardIndex);
            }
            updateCardState(cardIndex);

            resetSelectedCards();
          }, 1000);
        }
      }, 0)
    }

  }

  // Check if all cards are matched
  useEffect(() => {
    setTimeout(() => {
      if(MATCHES.size === (x * y)/2){
        alert("Congratulations! You have won the game!");
        resetSelectedCards();
        setCardsState({});
        setMatches(new Set());
        onEndGame();
      }
    }, 500);
  }, [MATCHES]);

  function resetSelectedCards(){
    setFirstCard({ cardNumber: null, cardIndex: null });
    setSecondCard({ cardNumber: null, cardIndex: null });
  }

  function updateCardState(cardIndex: number){
    // Handling cards state
    setCardsState( prevState => ({
      ...prevState,
      [cardIndex]: !prevState[cardIndex],
    }));
  }

  // Create a function that given a total number of cards, will return an array of pairs of cards
  function fillWithPairs(cardsTotal: number) {
    const pairs = [];
    for (let i = 1; i <= cardsTotal / 2; i++) {
      pairs.push(i, i);
    }
    return pairs;
  }

  function shuffle(array: number[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <>
    <span>Tries: {tries}</span>

    <div className={gameScreenClasses} style={{ gridTemplateColumns: `repeat(${x}, minmax(100px, 1fr))` }}>
      {cards.map((card, idx) => (
        <Card
          key={idx}
          cardNumber={card}
          cardIndex={idx}
          isClicked={cardsState[idx]}
          onCardClick={handleCardClick}
          />
      ))}
      <button onClick={onEndGame}>End Game</button>
    </div>
    </>
  );
};

export default GameScreen;