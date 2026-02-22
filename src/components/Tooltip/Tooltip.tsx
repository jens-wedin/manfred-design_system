import React, { useState, useRef, useCallback, useId } from 'react';
import ReactDOM from 'react-dom';
import styles from './Tooltip.module.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  children: React.ReactElement;
}

interface Position {
  top: number;
  left: number;
}

function computePosition(
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  placement: TooltipPlacement,
  gap = 8,
): Position {
  switch (placement) {
    case 'top':
      return {
        top: triggerRect.top - tooltipRect.height - gap,
        left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
      };
    case 'bottom':
      return {
        top: triggerRect.bottom + gap,
        left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
      };
    case 'left':
      return {
        top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        left: triggerRect.left - tooltipRect.width - gap,
      };
    case 'right':
      return {
        top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        left: triggerRect.right + gap,
      };
  }
}

export function Tooltip({ content, placement = 'top', delay = 200, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    timerRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        // Use a temp measurement (approximate) before first render
        const tooltipRect = tooltipRef.current?.getBoundingClientRect() ?? {
          width: 120,
          height: 32,
        } as DOMRect;
        setPosition(computePosition(triggerRect, tooltipRect, placement));
        setVisible(true);
      }
    }, delay);
  }, [delay, placement]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  const trigger = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: (e: React.MouseEvent) => {
      children.props.onMouseEnter?.(e);
      show();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      children.props.onMouseLeave?.(e);
      hide();
    },
    onFocus: (e: React.FocusEvent) => {
      children.props.onFocus?.(e);
      show();
    },
    onBlur: (e: React.FocusEvent) => {
      children.props.onBlur?.(e);
      hide();
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      children.props.onKeyDown?.(e);
      if (e.key === 'Escape') hide();
    },
    'aria-describedby': tooltipId,
  });

  if (typeof document === 'undefined') return trigger;

  return (
    <>
      {trigger}
      {ReactDOM.createPortal(
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className={[
            styles.tooltip,
            styles[placement],
            visible ? styles.visible : styles.hidden,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ top: position.top, left: position.left }}
        >
          {content}
        </div>,
        document.body,
      )}
    </>
  );
}
