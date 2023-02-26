import { BackgroundStyle } from './BackgroundStyle';
import { HollerSubmitDto } from './Dto';

export interface WelcomeProps {
  // Sentence to Holler!
  sentence: string;

  // background
  background: {
    style: BackgroundStyle;
    value: string;
  };

  onHollerSubmit: (submitData: HollerSubmitDto) => {};
}
