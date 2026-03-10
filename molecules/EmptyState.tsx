import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

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
  return (
    <div data-component="empty-state" className={cn('flex flex-col items-center justify-center py-12 text-center', className)}>
      {icon && <div className="text-[32px] mb-3">{icon}</div>}
      <h3 className="text-base font-semibold text-(--color-text) mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-(--color-text-muted) mb-4 max-w-xs">{description}</p>
      )}
      {action}
    </div>
  )
}
