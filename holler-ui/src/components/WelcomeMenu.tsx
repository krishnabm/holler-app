import React, { SyntheticEvent, useRef } from 'react';
import { CirclePicker } from 'react-color';
import { PickerColor } from 'src/common/contracts/Color';
import { WelcomeProps } from 'src/common/contracts/props';

export const WelcomeMenu = (props: WelcomeProps) => {
  const sentenceInputRef = useRef(null);
  const handleBgChange = (color: PickerColor, event: SyntheticEvent) => {
    console.log('Picked color - ', color.hex);
  };

  const submitHandler = (event: SyntheticEvent) => {
    let sentence = sentenceInputRef.current;
  };

  return (
    <div className="welcome-menu">
      <textarea id="sentence-input" ref={sentenceInputRef}></textarea>
      <label>Background Color: </label>
      <CirclePicker onChangeComplete={handleBgChange} />
      <button type="button" onClick={submitHandler}>
        Go
      </button>
    </div>
  );
};
