import { BackgroundStyle } from './BackgroundStyle';
import { HollerSubmitDto } from './Dto';
import { CSSObject } from '../types';
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

export interface KeframeProps {
  name: string;
  animationProps: CSSObject | Array<React.CSSProperties | string>;
}
