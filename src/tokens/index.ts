/* --- Primitive tokens --- */
export { blue, neutral, warm } from './primitives';
export type { BlueScale, NeutralScale, WarmColor } from './primitives';

/* --- Brand raw colors (legacy flat object) --- */
export { colors } from './colors';
export type { ColorToken } from './colors';

/* --- Semantic tokens --- */
export {
  textColors,
  backgroundColors,
  borderColors,
  focusTokens,
  interactiveColors,
} from './semantic';
export type {
  TextColorToken,
  BackgroundColorToken,
  BorderColorToken,
  InteractiveVariant,
} from './semantic';

/* --- Typography & spacing primitives --- */
export { fontFamily, fontWeight, fontSize, lineHeight } from './typography';
export { spacing } from './spacing';
export type { FontWeightToken, FontSizeToken } from './typography';
export type { SpacingToken } from './spacing';
