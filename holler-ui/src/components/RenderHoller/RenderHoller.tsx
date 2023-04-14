import React, { useEffect, useState } from 'react';
import { RenderProps } from '../../common/contracts/props';
import styles from './RenderHoller.module.scss';
import { interval, map, take } from 'rxjs';
import fitty from 'fitty';
import Color from 'color';
var complementaryColors = require('complementary-colors');

export const RenderHoller = (props: RenderProps) => {
  let renderSentence = props.sentence.trim().replace(/\s{2,}/, ' ');
  let [renderWord, updateText] = useState('');

  let fontColor = Color(props.textColor);

  var pallete: any[] = new complementaryColors(fontColor.hex())
    .square()
    .map((rgbColorObj) => Color(rgbColorObj).desaturate(0.5).lightness(70));

  //#region Dynamic styles
  const renderWordStyles = {
    color: fontColor.hex(),
  };
  //#endregion

  useEffect(() => {
    let wordList = renderSentence.split(/[\s]+/);

    interval(1000)
      .pipe(
        take(wordList.length),
        map((i) => wordList[i])
      )
      .subscribe({
        next: (word) => {
          updateText(word);
          fitty('#rendered-word-element', {
            minSize: 16,
            multiLine: true,
          });

          updateBodyBgColor(pallete.slice(1));
        },
        error: (_) => console.log('error'),
      });
  }, [renderSentence]);

  return (
    <div className={styles['render-canvas']}>
      <span
        className={styles['rendered-word']}
        style={renderWordStyles}
        id="rendered-word-element"
      >
        {renderWord}
      </span>
    </div>
  );
};

// helper
function updateBodyBgColor(bgOptionsColor: any[]) {
  let bgIdx = Math.round(Math.random() * (bgOptionsColor.length - 1));
  let currentBGHex =
    document.documentElement.style.getPropertyValue('--bodyBgColor');

  if (
    currentBGHex.toLowerCase() === bgOptionsColor[bgIdx].hex().toLowerCase()
  ) {
    bgIdx = (bgIdx + 1) % bgOptionsColor.length;
  }
  document.documentElement.style.setProperty(
    '--bodyBgColor',
    bgOptionsColor[bgIdx].hex()
  );
}
