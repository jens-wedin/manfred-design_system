import React from 'react';
import styles from './Breadcrumb.module.css';
import { Icon } from '../Icon';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: 'chevron' | 'slash';
  className?: string;
}

export function Breadcrumb({ items, separator = 'chevron', className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={[styles.root, className].filter(Boolean).join(' ')}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className={styles.separatorItem} aria-hidden="true">
                  {separator === 'chevron' ? (
                    <Icon name="chevron-right" size="xs" />
                  ) : (
                    <span className={styles.slash}>/</span>
                  )}
                </li>
              )}
              <li className={styles.item}>
                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.link}>{item.label}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
