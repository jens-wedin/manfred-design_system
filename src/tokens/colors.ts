export const colors = {
  almostBlack:  '#1e1e24',
  businessBlue: '#2c28ec',
  humanPink:    '#efd6d3',
  beige:        '#e6dcc8',
  lightBeige:   '#f4f3e8',
  white:        '#ffffff',
} as const;

export type ColorToken = keyof typeof colors;
