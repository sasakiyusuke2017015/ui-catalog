import type { ReactNode } from 'react'
import styles from './EmptyState.module.scss'

export interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  const containerClasses = [styles.emptyState, className].filter(Boolean).join(' ')

  return (
    <div data-component="empty-state" className={containerClasses}>
      {icon && <div className={styles.emptyState__icon}>{icon}</div>}
      <h3 className={styles.emptyState__title}>{title}</h3>
      {description && (
        <p className={styles.emptyState__description}>{description}</p>
      )}
      {action}
    </div>
  )
}
