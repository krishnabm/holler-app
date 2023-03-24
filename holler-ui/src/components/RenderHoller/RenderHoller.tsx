import React, { useEffect, useState } from 'react';
import { RenderProps } from '../../common/contracts/Props';
import styles from './RenderHoller.module.scss';
import { KeyframeHelper } from '../../styles/helpers/KeyframeHelper';

export const RenderHoller = (props: RenderProps) => {
  let renderSentence = props.sentence.trim().replace(/\s{2,}/, ' ');

  let [keyframeSteps, updateKeyframes] = useState([] as React.CSSProperties[]);

  // let [renderWord, updateText] = useState('');

  useEffect(() => {
    let wordList = renderSentence.split(' ').reverse();
    let keyframeStepsObj: React.CSSProperties[] = [];
    let onUnmount = () => {};

    if (wordList.length < 1) {
      updateKeyframes(keyframeStepsObj);
      return onUnmount;
    }

    while (wordList.length) {
      const word = wordList.pop();

      keyframeStepsObj.push(
        {
          content: `${word}`,
          opacity: '100%',
        },
        {
          opacity: '0%',
        }
      );
    }
    updateKeyframes(keyframeStepsObj);
  }, [renderSentence]);

  return (
    <div className="render-canvas">
      <KeyframeHelper
        name="renderHollerAnimation"
        animationProps={keyframeSteps}
      ></KeyframeHelper>
      <span className={styles['rendered-word']}></span>
    </div>
  );
};
