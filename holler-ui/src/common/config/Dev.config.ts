import { BackgroundStyle } from '../contracts/BackgroundStyle';
import { HollerEnvConfig } from './HollerEnvironmentConfig';

export const hollerEnvconfig: HollerEnvConfig = {
  state: {
    background: {
      style: BackgroundStyle.hex,
      value: '#FFFFFF',
    },
    sentence: '',
  },
};
