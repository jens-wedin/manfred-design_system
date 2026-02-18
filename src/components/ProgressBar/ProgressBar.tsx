import React from 'react';
import styles from './ProgressBar.module.css';

export type ProgressBarVariant = 'default' | 'brand' | 'success' | 'warning' | 'error';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  value: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  variant = 'brand',
  size = 'md',
  label,
  showValue = false,
  animated = false,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{clamped}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className={[styles.track, styles[size]].filter(Boolean).join(' ')}
      >
        <div
          className={[styles.fill, styles[variant], animated ? styles.animated : '']
            .filter(Boolean)
            .join(' ')}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
