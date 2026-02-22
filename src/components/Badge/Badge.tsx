import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

const STATUS_VARIANTS: BadgeVariant[] = ['success', 'warning', 'error', 'info'];

export function Badge({ variant = 'neutral', size = 'md', children, className }: BadgeProps) {
  const hasStatusPrefix = STATUS_VARIANTS.includes(variant);

  return (
    <span
      className={[styles.root, styles[variant], styles[size], className].filter(Boolean).join(' ')}
    >
      {hasStatusPrefix && <span className={styles.srOnly}>{variant}: </span>}
      {children}
    </span>
  );
}
