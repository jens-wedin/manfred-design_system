import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.module.css';
import { Icon } from '../Icon';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  indeterminate?: boolean;
  error?: boolean;
}

export function Checkbox({
  label,
  indeterminate = false,
  error = false,
  className,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  ...rest
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={[styles.root, error ? styles.error : '', disabled ? styles.disabledLabel : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className={styles.nativeInput}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        id={id}
        {...rest}
      />
      <span className={styles.control} aria-hidden="true">
        {indeterminate ? (
          <Icon name="minus" size="xs" className={styles.checkIcon} />
        ) : (
          <Icon name="check" size="xs" className={styles.checkIcon} />
        )}
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}
