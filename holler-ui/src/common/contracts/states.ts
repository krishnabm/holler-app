import { BackgroundStyle } from './BackgroundStyle';

export interface AppState {
  // Sentence to Holler!
  sentence: string;

  // background
  background: {
    style: BackgroundStyle;
    value: string;
  };

  textColor: string;
  pageState: 'form' | 'holler';
}
