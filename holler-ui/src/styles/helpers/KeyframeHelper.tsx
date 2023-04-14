import { KeframeProps } from '../../common/contracts/props';
import React from 'react';
import { CSSObject } from '../../common/types';

const toCss = (cssObject: React.CSSProperties | string) =>
  typeof cssObject === 'string'
    ? cssObject
    : Object.keys(cssObject).reduce((accumulator, key) => {
        const cssKey = key.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`);
        const cssValue = (cssObject as any)[key].toString().replace("'", '');
        return `${accumulator}${cssKey}:${cssValue};`;
      }, '');

const generateKeyframes = (
  animation: CSSObject | Array<string | React.CSSProperties>
): string[] => {
  if (Array.isArray(animation)) {
    switch (animation.length) {
      case 0:
        return [];

      case 1:
        return [`from { ${toCss(animation[0])} }`];

      case 2:
        return [
          `from { ${toCss(animation[0])} }`,
          `to { ${toCss(animation[1])}`,
        ];

      default:
        let stepPercent = Math.round(10000 / (animation.length - 1)) / 100;

        let curPercent = 0;
        let ret: string[] = [];
        let curIdx = 0;
        while (curPercent < 100 && curIdx < animation.length) {
          ret.push(`${curPercent}% { ${toCss(animation[curIdx++])} }`);

          curPercent += stepPercent;
        }
        return ret;
    }
  } else {
    return Object.entries(animation).map(
      ([key, value]) => `${key} { ${toCss(value)} }`
    );
  }
};

export const KeyframeHelper = ({ name, animationProps }: KeframeProps) => {
  const cssRules = generateKeyframes(animationProps);
  return (
    <style>
      {`@keyframes ${name} {
        ${cssRules.join('\n')}
      }`}
    </style>
  );
};
