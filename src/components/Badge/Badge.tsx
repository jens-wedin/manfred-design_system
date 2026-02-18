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

export function Badge({ variant = 'neutral', size = 'md', children, className }: BadgeProps) {
  return (
    <span
      className={[styles.root, styles[variant], styles[size], className].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  );
}
