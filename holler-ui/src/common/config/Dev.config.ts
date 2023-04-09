import { BackgroundStyle } from '../contracts/BackgroundStyle';
import { HollerEnvConfig } from './HollerEnvConfig';

export const hollerEnvconfig: HollerEnvConfig = {
  state: {
    background: {
      style: BackgroundStyle.hex,
      value: '#FFFFFF',
    },
    sentence: '',
    pageState: 'form',
    textColor: '#3f51b5',
  },
};
