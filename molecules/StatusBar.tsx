import { cn } from '../utils/cn'

export interface StatusBarProps {
  message: string
  variant?: 'success' | 'error' | 'info'
  className?: string
}

export default function StatusBar({
  message,
  variant = 'success',
  className,
}: StatusBarProps) {
  if (!message) return null

  const variantStyles = {
    success: 'bg-(--color-success-bg) text-(--color-success) border-(--color-success)/20',
    error: 'bg-(--color-error-bg) text-(--color-error) border-(--color-error)/20',
    info: 'bg-(--color-accent-bg) text-(--color-accent) border-(--color-accent)/20',
  }

  return (
    <footer
      className={cn(
        'shrink-0 px-4 py-1.5 text-xs font-medium border-t',
        variantStyles[variant],
        className,
      )}
    >
      {message}
    </footer>
  )
}
