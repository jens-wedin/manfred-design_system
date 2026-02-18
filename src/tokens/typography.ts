export const fontFamily = {
  base: "'Host Grotesk', sans-serif",
} as const;

export const fontWeight = {
  light:     300,
  regular:   400,
  medium:    500,
  semibold:  600,
  bold:      700,
  extrabold: 800,
} as const;

export const fontSize = {
  xs:   '0.75rem',
  sm:   '0.875rem',
  md:   '1rem',
  lg:   '1.125rem',
  xl:   '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '5xl': '3.5rem',
} as const;

export const lineHeight = {
  tight:   1.1,
  snug:    1.3,
  normal:  1.5,
  relaxed: 1.7,
} as const;

export type FontWeightToken = keyof typeof fontWeight;
export type FontSizeToken = keyof typeof fontSize;
