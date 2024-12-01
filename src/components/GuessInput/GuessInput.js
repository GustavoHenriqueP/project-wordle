import React from 'react';

function GuessInput({ saveGuess, ...props }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleChange(event) {
    const inputType = event.nativeEvent.inputType;
    const value = event.target.value;

    // Block numbers
    if (!/^[a-zA-Z]+$/.test(value) && inputType !== 'deleteContentBackward') return;

    const upperCaseValue = value.toUpperCase();
    setTentativeGuess(upperCaseValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    saveGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess-input"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        title="5 letter word"
        {...props}
      />
    </form>
  );
}

export default GuessInput;
