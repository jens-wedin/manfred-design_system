/**
 * Primitive Tokens — raw values with no semantic meaning.
 * Named after what they are, not what they do.
 */

export const blue = {
  50:  '#eaeafd',
  100: '#d5d4fb',
  200: '#aba9f7',
  300: '#807ef4',
  400: '#5653f0',
  500: '#2c28ec',  /* Business Blue — brand */
  600: '#2320bd',
  700: '#1a188e',
  800: '#12105e',
  900: '#09082f',
} as const;

export const neutral = {
  50:  '#f5f5f6',
  100: '#e8e8ea',
  200: '#d1d1d4',
  300: '#ababaf',
  400: '#7c7c82',
  500: '#56565c',
  600: '#3f3f45',
  700: '#2e2e34',
  800: '#1e1e24',  /* Almost Black — brand */
  900: '#111116',
} as const;

/** Warm brand palette — flat, no scale needed */
export const warm = {
  pink:       '#efd6d3',  /* Human Pink */
  beige:      '#e6dcc8',  /* Beige */
  beigeLight: '#f4f3e8',  /* Light Beige */
  white:      '#ffffff',
} as const;

export type BlueScale    = keyof typeof blue;
export type NeutralScale = keyof typeof neutral;
export type WarmColor    = keyof typeof warm;
