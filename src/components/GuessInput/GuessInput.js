import React from 'react';

function GuessInput({ guess, handleChange }) {
  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });
    handleChange('');
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
        value={guess}
        onChange={(e) => handleChange(e.target.value)}
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
