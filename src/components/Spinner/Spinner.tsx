import React from 'react';
import styles from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  size?: SpinnerSize;
  label?: string;
  className?: string;
}

export function Spinner({ size = 'md', label = 'Loading', className }: SpinnerProps) {
  const radius = 9;
  const circumference = 2 * Math.PI * radius;

  return (
    <span
      className={[styles.root, styles[size], className].filter(Boolean).join(' ')}
      role="status"
    >
      <svg viewBox="0 0 24 24" fill="none" className={styles.svg} aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.2"
        />
        <circle
          cx="12"
          cy="12"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.75}
          strokeLinecap="round"
          className={styles.spin}
        />
      </svg>
      <span className={styles.srOnly}>{label}</span>
    </span>
  );
}
