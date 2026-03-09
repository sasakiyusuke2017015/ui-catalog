import { cn } from '../utils/cn'

export interface ChatFabProps {
  onClick: () => void
  hasMessages?: boolean
  icon?: string
  className?: string
  ariaLabel?: string
}

export default function ChatFab({
  onClick,
  hasMessages = false,
  icon = '💬',
  className,
  ariaLabel = 'チャットを開く',
}: ChatFabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full',
        'bg-(--color-accent) text-white shadow-lg hover:bg-(--color-accent-hover)',
        'transition-colors cursor-pointer flex items-center justify-center',
        className,
      )}
      aria-label={ariaLabel}
    >
      <span className="text-lg">{icon}</span>
      {hasMessages && (
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-(--color-error) border-2 border-(--color-bg-surface)" />
      )}
    </button>
  )
}
