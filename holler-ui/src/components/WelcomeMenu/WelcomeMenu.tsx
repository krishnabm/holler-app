import React, { SyntheticEvent, useRef, useState } from 'react';
import { CirclePicker } from 'react-color';
import { BackgroundStyle } from '../../common/contracts/BackgroundStyle';
import { PickerColor } from '../../common/contracts/Color';
import { HollerSubmitDto } from '../../common/contracts/Dto';
import { WelcomeProps } from '../../common/contracts/props';

export const WelcomeMenu = (props: WelcomeProps) => {
  //#region State & Refs
  let [pickedColor, updatePickedColor] = useState(props.textColor);
  const sentenceInputRef = useRef<HTMLTextAreaElement>(null);
  //#endregion

  //#region Handlers
  const handleBgChange = (color: PickerColor, _event: SyntheticEvent) => {
    updatePickedColor(color.hex);
  };
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    let sentence: string = sentenceInputRef.current!.value;
    sentence = sentence ? sentence : '';

    props.onHollerSubmit({
      sentence,
      background: pickedBgColor,
    } as HollerSubmitDto);
  };
  //#endregion
  return (
    <div className="welcome-menu">
      <form onSubmit={submitHandler}>
        <textarea
          id="sentence-input"
          ref={sentenceInputRef}
          defaultValue={props.sentence}
        ></textarea>
        <label>Text Color: </label>
        <CirclePicker color={pickedBgColor} onChangeComplete={handleBgChange} />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};
