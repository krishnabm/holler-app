import { BackgroundStyle } from './BackgroundStyle';
import { HollerSubmitDto } from './Dto';

interface BaseHollerProps {
  // Sentence to Holler!
  sentence: string;

  // background
  background: {
    style: BackgroundStyle;
    value: string;
  };
}
export interface WelcomeProps extends BaseHollerProps {
  onHollerSubmit: (submitData: HollerSubmitDto) => void;
}

export interface RenderProps extends BaseHollerProps {}
