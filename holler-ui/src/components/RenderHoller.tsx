import React, { useEffect, useState } from 'react';
import { delay, from, interval, map, take } from 'rxjs';
import { RenderProps } from '../common/contracts/Props';

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

  // Approach 1 - setTimeOut
  // for (let index = 0; index < wordList.length; index++) {
  //   setTimeout(() => {
  //     updateText(wordList[index]);
  //   }, index * 1000);
  // }

  // Approach 2 - RxJS
  // interval(1000).pipe(
  //   take(wordList.length),
  //   map(i => wordList[i])
  // ).subscribe({
  //   next: (word) => updateText(word),
  //   error: _ => console.log('error'),
  // });

  return (
    <div className="render-canvas">
      <span>{renderWord}</span>
    </div>
  );
};
