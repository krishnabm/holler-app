import React, { SyntheticEvent, useRef } from 'react';
import { CirclePicker } from 'react-color';
import { BackgroundStyle } from 'src/common/contracts/BackgroundStyle';
import { PickerColor } from 'src/common/contracts/Color';
import { HollerSubmitDto } from 'src/common/contracts/Dto';
import { WelcomeProps } from 'src/common/contracts/Props';

export const WelcomeMenu = (props: WelcomeProps) => {
  //#region State & Refs
  let pickedBgColor: { style: BackgroundStyle; value: string } =
    props.background;
  const sentenceInputRef = useRef(null);
  //#endregion

  //#region Handlers
  const handleBgChange = (color: PickerColor, event: SyntheticEvent) => {
    pickedBgColor.style = BackgroundStyle.hex;
    pickedBgColor.value = color.hex;
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    let sentence: string = sentenceInputRef.current!;
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
        <label>Background Color: </label>
        <CirclePicker color={pickedBgColor} onChangeComplete={handleBgChange} />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};
