import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: boolean;
}

export function Radio({
  label,
  error = false,
  className,
  disabled,
  ...rest
}: RadioProps) {
  return (
    <label
      className={[styles.root, error ? styles.error : '', disabled ? styles.disabledLabel : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        type="radio"
        className={styles.nativeInput}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.control} aria-hidden="true" />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}
