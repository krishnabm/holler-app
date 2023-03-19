import React, { useEffect, useState } from 'react';
import { RenderProps } from '../../common/contracts/Props';
import styles from './RenderHoller.module.scss';

export const RenderHoller = (props: RenderProps) => {
  let renderSentence = props.sentence.trim().replace(/\s{2,}/, ' ');
  let [renderWord, updateText] = useState('');

  // Apprach 0 - interval
  useEffect(() => {
    let wordList = renderSentence.split(' ');
    let curWordIdx = 0;
    let intervalId = setInterval(
      () => updateText(wordList[curWordIdx++]),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [renderSentence]);

  return (
    <div className="render-canvas">
      <span className={styles['rendered-word']}>{renderWord}</span>
    </div>
  );
};
