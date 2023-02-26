import { BackgroundStyle } from './BackgroundStyle';

export interface HollerSubmitDto {
  sentence: string;
  background: { style: BackgroundStyle; value: string };
}
