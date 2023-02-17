import React, { useState } from 'react';

export const InputForm = (props) => {
  let [text, setText] = useState('');

  let submitText = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <form onSubmit={submitText}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter some text"
          required
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};
