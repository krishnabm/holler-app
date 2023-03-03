import React, { useState } from 'react';
import { delay, from, interval, map, take } from 'rxjs';
import { RenderProps } from '../common/contracts/Props';

export const RenderHoller = (props: RenderProps) => {
  let renderSentence = props.sentence.trim().replace(/\s{2,}/, ' ');
  let wordList = renderSentence.split(' ');

  let [renderWord, updateText] = useState('');

  // let durationInMs = wordList.length * 1000;

  for (let index = 0; index < wordList.length; index++) {
    setTimeout(() => {
      updateText(wordList[index]);
    }, index * 1000);
  }

  return (
    <div className="render-canvas">
      <span>{renderWord}</span>
    </div>
  );
};
