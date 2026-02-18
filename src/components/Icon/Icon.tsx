import React from 'react';
import styles from './Icon.module.css';
import { iconPaths } from './iconPaths';

export type IconName =
  | 'check'
  | 'x'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'search'
  | 'info'
  | 'warning'
  | 'alert-circle'
  | 'check-circle'
  | 'x-circle'
  | 'eye'
  | 'eye-off'
  | 'plus'
  | 'minus'
  | 'arrow-left'
  | 'arrow-right'
  | 'bell'
  | 'external-link'
  | 'loader';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  label?: string;
  className?: string;
}

export function Icon({ name, size = 'md', label, className }: IconProps) {
  const path = iconPaths[name];

  return (
    <svg
      className={[styles.root, styles[size], className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {path && <path d={path} />}
    </svg>
  );
}
