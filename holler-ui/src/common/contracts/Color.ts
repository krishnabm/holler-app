export interface PickerColor {
  hex: string;
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
  oldHue: number;
  rgb: { r: number; g: number; b: number };
  source: string;
}
