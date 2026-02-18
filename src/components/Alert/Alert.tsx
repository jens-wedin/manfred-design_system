import React from 'react';
import styles from './Alert.module.css';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  icon?: boolean;
  className?: string;
}

const iconMap: Record<AlertVariant, IconName> = {
  info: 'info',
  success: 'check-circle',
  warning: 'warning',
  error: 'alert-circle',
};

export function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  icon = true,
  className,
}: AlertProps) {
  return (
    <div
      role="alert"
      className={[styles.root, styles[variant], className].filter(Boolean).join(' ')}
    >
      {icon && (
        <span className={styles.iconSlot} aria-hidden="true">
          <Icon name={iconMap[variant]} size="md" />
        </span>
      )}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.message}>{children}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          <Icon name="x" size="sm" />
        </button>
      )}
    </div>
  );
}
