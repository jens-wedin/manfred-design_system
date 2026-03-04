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
      {/* aria-invalid is not supported on role="radio" per ARIA spec.
          Error state is communicated visually and at the group/FormField level
          via aria-describedby on the containing fieldset or form field. */}
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
