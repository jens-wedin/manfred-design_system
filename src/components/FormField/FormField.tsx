import React from 'react';
import styles from './FormField.module.css';
import { Icon } from '../Icon';

export type FormFieldStatus = 'default' | 'error' | 'success' | 'hint';

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  status?: FormFieldStatus;
  message?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const statusIconMap = {
  error: 'alert-circle',
  success: 'check-circle',
  hint: 'info',
} as const;

export function FormField({
  label,
  htmlFor,
  status = 'default',
  message,
  required = false,
  children,
  className,
}: FormFieldProps) {
  const iconName = status !== 'default' ? statusIconMap[status] : undefined;

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        {required && <span className={styles.required} aria-hidden="true">*</span>}
      </label>
      {children}
      {message && (
        <span
          role={status === 'error' ? 'alert' : undefined}
          aria-live={status === 'success' || status === 'hint' ? 'polite' : undefined}
          className={[styles.message, status !== 'default' ? styles[status] : styles.hint].filter(Boolean).join(' ')}
        >
          {iconName && <Icon name={iconName} size="xs" />}
          {message}
        </span>
      )}
    </div>
  );
}
