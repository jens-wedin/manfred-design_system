import React from 'react';
import styles from './TextInput.module.css';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

export type TextInputSize = 'sm' | 'md' | 'lg';
export type TextInputStatus = 'default' | 'error' | 'success';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: TextInputSize;
  status?: TextInputStatus;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  fullWidth?: boolean;
}

export function TextInput({
  size = 'md',
  status = 'default',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  className,
  disabled,
  ...rest
}: TextInputProps) {
  const iconSize = size === 'lg' ? 'md' : 'sm';

  return (
    <div
      className={[
        styles.root,
        styles[size],
        status !== 'default' ? styles[status] : '',
        leadingIcon ? styles.hasLeadingIcon : '',
        trailingIcon ? styles.hasTrailingIcon : '',
        fullWidth ? styles.fullWidth : '',
        disabled ? styles.disabled : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {leadingIcon && (
        <span className={styles.iconLeading} aria-hidden="true">
          <Icon name={leadingIcon} size={iconSize} />
        </span>
      )}
      <input
        className={[styles.input, styles[`input-${size}`]].filter(Boolean).join(' ')}
        disabled={disabled}
        {...rest}
      />
      {trailingIcon && (
        <span className={styles.iconTrailing} aria-hidden="true">
          <Icon name={trailingIcon} size={iconSize} />
        </span>
      )}
    </div>
  );
}
