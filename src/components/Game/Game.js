import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function saveGuess(tentativeGuess) {
    setGuesses((currentGuesses) => {
      const nextResult = { id: Math.random(), value: tentativeGuess };

      return [...currentGuesses, nextResult];
    });
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput saveGuess={saveGuess} />
    </>
  );
}

export default Game;
