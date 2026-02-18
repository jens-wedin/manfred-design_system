import React, { useEffect, useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Toast.module.css';
import { Alert } from '../Alert';
import type { AlertVariant } from '../Alert';

export interface ToastItem {
  id: string;
  variant: AlertVariant;
  title?: string;
  message: string;
  duration?: number;
}

export type ToastPosition = 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';

export interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
  position?: ToastPosition;
}

const positionClassMap: Record<ToastPosition, string> = {
  'top-right': styles.topRight,
  'top-center': styles.topCenter,
  'bottom-right': styles.bottomRight,
  'bottom-center': styles.bottomCenter,
};

function ToastEntry({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: (id: string) => void;
}) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => onDismiss(item.id), 250);
  }, [item.id, onDismiss]);

  useEffect(() => {
    const duration = item.duration ?? 4000;
    if (duration > 0) {
      timerRef.current = setTimeout(dismiss, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [item.duration, dismiss]);

  return (
    <div className={[styles.toastItem, exiting ? styles.exiting : ''].filter(Boolean).join(' ')}>
      <Alert
        variant={item.variant}
        title={item.title}
        onClose={dismiss}
      >
        {item.message}
      </Alert>
    </div>
  );
}

export function ToastContainer({ toasts, onDismiss, position = 'top-right' }: ToastContainerProps) {
  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div className={[styles.container, positionClassMap[position]].filter(Boolean).join(' ')}>
      {toasts.map((toast) => (
        <ToastEntry key={toast.id} item={toast} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body,
  );
}

// Simple hook for imperative usage
export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, show, dismiss };
}
