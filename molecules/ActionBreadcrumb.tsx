import { cn } from '../utils/cn'

export interface ActionBreadcrumbItem {
  label: string
  onClick?: () => void
}

export interface ActionBreadcrumbProps {
  items: ActionBreadcrumbItem[]
  separator?: string
  className?: string
}

export default function ActionBreadcrumb({
  items,
  separator = '/',
  className,
}: ActionBreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className={cn('flex items-center gap-1 text-sm', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-(--color-text-muted)">{separator}</span>}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="text-(--color-text-muted) hover:text-(--color-accent) cursor-pointer transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-(--color-text) font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
