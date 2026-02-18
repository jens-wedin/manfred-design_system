/**
 * Semantic Tokens — context-aware aliases that reference CSS custom properties.
 * Named after what they do, not what they look like.
 *
 * Use these in TypeScript/React when you need to apply semantic colors
 * programmatically (e.g. inline styles). For CSS use the custom properties
 * directly (e.g. var(--color-text-primary)).
 */

export const textColors = {
  primary:   'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  muted:     'var(--color-text-muted)',
  disabled:  'var(--color-text-disabled)',
  inverse:   'var(--color-text-inverse)',
  brand:     'var(--color-text-brand)',
  onBrand:   'var(--color-text-on-brand)',
} as const;

export const backgroundColors = {
  default:   'var(--color-bg-default)',
  subtle:    'var(--color-bg-subtle)',
  muted:     'var(--color-bg-muted)',
  inverse:   'var(--color-bg-inverse)',
  brand:     'var(--color-bg-brand)',
  warm:      'var(--color-bg-warm)',
  warmMuted: 'var(--color-bg-warm-muted)',
  accent:    'var(--color-bg-accent)',
} as const;

export const borderColors = {
  default: 'var(--color-border-default)',
  strong:  'var(--color-border-strong)',
  brand:   'var(--color-border-brand)',
  focus:   'var(--color-border-focus)',
} as const;

export const focusTokens = {
  ring:   'var(--color-focus-ring)',
  shadow: 'var(--shadow-focus)',
} as const;

/**
 * Interactive variant tokens.
 * Four variants, each with their state-specific values.
 */
export const interactiveColors = {
  /** Dark-fill button / primary action */
  primary: {
    bg:       'var(--color-interactive-primary-bg)',
    bgHover:  'var(--color-interactive-primary-bg-hover)',
    bgActive: 'var(--color-interactive-primary-bg-active)',
    fg:       'var(--color-interactive-primary-fg)',
  },
  /** Blue-fill button / brand action */
  brand: {
    bg:       'var(--color-interactive-brand-bg)',
    bgHover:  'var(--color-interactive-brand-bg-hover)',
    bgActive: 'var(--color-interactive-brand-bg-active)',
    fg:       'var(--color-interactive-brand-fg)',
  },
  /** Transparent with visible border */
  outline: {
    border:      'var(--color-interactive-outline-border)',
    borderHover: 'var(--color-interactive-outline-border-hover)',
    bgHover:     'var(--color-interactive-outline-bg-hover)',
  },
  /** Transparent, no border */
  ghost: {
    bgHover: 'var(--color-interactive-ghost-bg-hover)',
  },
  /** White fill for use on brand/dark backgrounds */
  inverse: {
    bg:       'var(--color-interactive-inverse-bg)',
    bgHover:  'var(--color-interactive-inverse-bg-hover)',
    bgActive: 'var(--color-interactive-inverse-bg-active)',
    fg:       'var(--color-interactive-inverse-fg)',
  },
} as const;

export type TextColorToken       = keyof typeof textColors;
export type BackgroundColorToken = keyof typeof backgroundColors;
export type BorderColorToken     = keyof typeof borderColors;
export type InteractiveVariant   = keyof typeof interactiveColors;
