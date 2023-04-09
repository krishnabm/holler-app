import React, { SyntheticEvent, useRef, useState } from 'react';
import { CirclePicker } from 'react-color';
import { BackgroundStyle } from '../../common/contracts/BackgroundStyle';
import { PickerColor } from '../../common/contracts/Color';
import { HollerSubmitDto } from '../../common/contracts/Dto';
import { WelcomeProps } from '../../common/contracts/props';
import styles from './WelcomeMenu.module.scss';

export const WelcomeMenu = (props: WelcomeProps) => {
  //#region State & Refs
  let [pickedColor, updatePickedColor] = useState(props.textColor);
  const sentenceInputRef = useRef<HTMLTextAreaElement>(null);
  let [isSubmitHovered, updateHovered] = useState(false);
  //#endregion

  //#region Handlers
  const handleBgChange = (color: PickerColor, _event: SyntheticEvent) => {
    updatePickedColor(color.hex);
  };

  const submitHovered = () => {
    updateHovered(true);
  };
  const submitUnhovered = () => {
    updateHovered(false);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    let sentence: string = sentenceInputRef.current!.value;
    sentence = sentence ? sentence : '';

    props.onHollerSubmit({
      sentence,
      textColor: pickedColor,
    } as HollerSubmitDto);
  };
  //#endregion
  return (
    <div className={styles['welcome-menu']}>
      <form onSubmit={submitHandler} className={styles['main-form']}>
        <h2 className={styles['holler-title']} style={{ color: pickedColor }}>
          Holler
        </h2>
        <textarea
          className={styles['sentence-input']}
          ref={sentenceInputRef}
          defaultValue={props.sentence}
          style={{ border: `2px solid ${pickedColor}` }}
        ></textarea>
        <label>Text Color</label>
        <CirclePicker color={pickedColor} onChangeComplete={handleBgChange} />
        <button
          type="submit"
          className={styles['submit-holler']}
          style={{
            border: `2px solid ${pickedColor}`,
            color: isSubmitHovered ? 'white' : `${pickedColor}`,
            backgroundColor: isSubmitHovered ? `${pickedColor}` : 'white',
          }}
          onMouseEnter={submitHovered}
          onMouseLeave={submitUnhovered}
        >
          Go
        </button>
      </form>
    </div>
  );
};
