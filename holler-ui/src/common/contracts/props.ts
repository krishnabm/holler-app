import { BackgroundStyle } from './BackgroundStyle';

export interface WelcomeProps {
  // Sentence to Holler!
  sentence: string;

  // background
  background: {
    style: BackgroundStyle;
    value: string;
  };
}
