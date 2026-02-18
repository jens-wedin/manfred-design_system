/**
 * Sizing tokens — fixed dimensions on the 4px base grid.
 * Use for widths, heights, icon sizes, and container max-widths.
 * Spacing (padding/margin) lives in spacing.ts.
 */

export const size = {
  1:  '0.25rem',  /*   4px */
  2:  '0.5rem',   /*   8px */
  3:  '0.75rem',  /*  12px */
  4:  '1rem',     /*  16px */
  5:  '1.25rem',  /*  20px */
  6:  '1.5rem',   /*  24px */
  8:  '2rem',     /*  32px */
  10: '2.5rem',   /*  40px */
  12: '3rem',     /*  48px */
  16: '4rem',     /*  64px */
  20: '5rem',     /*  80px */
  24: '6rem',     /*  96px */
  32: '8rem',     /* 128px */
  40: '10rem',    /* 160px */
  48: '12rem',    /* 192px */
  64: '16rem',    /* 256px */
  80: '20rem',    /* 320px */
  96: '24rem',    /* 384px */
} as const;

/** Semantic heights for interactive controls (inputs, buttons). */
export const controlSize = {
  sm: 'var(--size-control-sm)',  /* 32px */
  md: 'var(--size-control-md)',  /* 40px */
  lg: 'var(--size-control-lg)',  /* 48px */
} as const;

/** Semantic sizes for icons. */
export const iconSize = {
  xs: 'var(--size-icon-xs)',  /* 12px */
  sm: 'var(--size-icon-sm)',  /* 16px */
  md: 'var(--size-icon-md)',  /* 20px */
  lg: 'var(--size-icon-lg)',  /* 24px */
  xl: 'var(--size-icon-xl)',  /* 32px */
} as const;

/** Semantic max-widths for layout containers. */
export const containerSize = {
  sm:  'var(--size-container-sm)',   /* 640px */
  md:  'var(--size-container-md)',   /* 768px */
  lg:  'var(--size-container-lg)',   /* 1024px */
  xl:  'var(--size-container-xl)',   /* 1280px */
  '2xl': 'var(--size-container-2xl)', /* 1536px */
} as const;

export type SizeToken        = keyof typeof size;
export type ControlSizeToken = keyof typeof controlSize;
export type IconSizeToken    = keyof typeof iconSize;
export type ContainerSizeToken = keyof typeof containerSize;
