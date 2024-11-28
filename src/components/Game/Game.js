import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  function handleChange(value) {
    // Block numbers
    if (!/^[a-zA-Z]+$/.test(value)) return;

    const upperCaseValue = value.toUpperCase();
    setGuess(upperCaseValue);
  }

  return (
    <>
      <GuessInput guess={guess} handleChange={handleChange} />
    </>
  );
}

export default Game;
