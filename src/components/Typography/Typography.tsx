import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'large'
  | 'body'
  | 'bodySmall'
  | 'label'
  | 'caption';

export type TypographyColor = 'default' | 'inverse' | 'brand' | 'muted';

type TypographyAs =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div' | 'label';

export interface TypographyProps {
  variant: TypographyVariant;
  as?: TypographyAs;
  color?: TypographyColor;
  children: React.ReactNode;
  className?: string;
}

const defaultElement: Record<TypographyVariant, TypographyAs> = {
  headline1: 'h1',
  headline2: 'h2',
  headline3: 'h3',
  headline4: 'h4',
  large:     'p',
  body:      'p',
  bodySmall: 'p',
  label:     'span',
  caption:   'span',
};

export function Typography({
  variant,
  as,
  color = 'default',
  children,
  className,
}: TypographyProps) {
  const Tag = as ?? defaultElement[variant];

  return (
    <Tag
      className={[
        styles.root,
        styles[variant],
        styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
