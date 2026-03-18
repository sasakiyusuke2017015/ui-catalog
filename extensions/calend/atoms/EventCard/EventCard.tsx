/**
 * EventCard コンポーネント
 * タイムライン（日・週）とコンパクト（月）の2モードで描画
 */
import type { ReactNode } from 'react'

interface EventCardBaseProps {
  readonly title: string
  readonly color: string
  readonly onDelete?: () => void
  readonly onClick?: () => void
  readonly onPointerDown?: (e: React.PointerEvent) => void
  readonly onMouseEnter?: (e: React.MouseEvent) => void
  readonly onMouseLeave?: (e: React.MouseEvent) => void
  readonly isDragging?: boolean
  readonly isHovered?: boolean
  readonly children?: ReactNode
  readonly className?: string
}

interface TimelineProps extends EventCardBaseProps {
  readonly variant?: 'timeline'
  readonly startLabel: string
  readonly endLabel: string
  readonly top: number
  readonly height: number
  readonly left?: number
  readonly right?: number
  readonly leftPercent?: number
  readonly widthPercent?: number
  readonly zColumn?: number
}

interface CompactProps extends EventCardBaseProps {
  readonly variant: 'compact'
}

type EventCardProps = TimelineProps | CompactProps

function DeleteButton({ onDelete }: { readonly onDelete: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onDelete()
      }}
      className="absolute top-0 right-0.5 opacity-0 hover:opacity-100 text-white/80 hover:text-white transition-opacity text-xs"
      aria-label="Delete event"
    >
      &times;
    </button>
  )
}

function CompactEventCard({
  title,
  color,
  onDelete,
  onClick,
  onPointerDown,
  isDragging = false,
  children,
  className = '',
}: CompactProps) {
  return (
    <div
      data-component="event-card"
      className={`rounded-xl px-2 py-0.5 text-white text-[10px] font-medium truncate hover:whitespace-normal hover:overflow-visible relative group transition-shadow hover:shadow-md ${
        isDragging ? 'cursor-grabbing opacity-50' : 'cursor-default'
      } ${className}`}
      style={{ backgroundColor: color, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }}
      title={title}
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      {title}
      {onDelete && <DeleteButton onDelete={onDelete} />}
      {children}
    </div>
  )
}

function TimelineEventCard({
  title,
  startLabel,
  endLabel,
  top,
  height,
  color,
  left = 68,
  right = 4,
  leftPercent,
  widthPercent,
  zColumn = 0,
  onDelete,
  onClick,
  onPointerDown,
  onMouseEnter,
  onMouseLeave,
  isDragging = false,
  isHovered = false,
  children,
  className = '',
}: TimelineProps) {
  const positionStyle = leftPercent !== undefined && widthPercent !== undefined
    ? {
        left: `calc(${leftPercent}% + 1px)`,
        width: `calc(${Math.min(widthPercent + 20, 100 - leftPercent)}% - 2px)`,
      }
    : {
        left: `${left}px`,
        right: `${right}px`,
      }

  return (
    <div
      data-component="event-card"
      className={`absolute rounded-xl px-2 py-1 text-white overflow-hidden transition-all group/card ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab hover:overflow-visible'
      } ${className}`}
      style={{
        backgroundColor: color,
        top: `${top + 1}px`,
        height: `${Math.max(height - 2, 14)}px`,
        zIndex: isDragging ? 25 : isHovered ? 20 + zColumn : 10 + zColumn,
        pointerEvents: 'auto',
        opacity: isDragging ? 0.7 : isHovered ? 0.85 : 1,
        filter: isHovered ? 'brightness(1.2)' : 'none',
        boxShadow: isHovered
          ? '0 4px 16px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.3)'
          : '0 1px 3px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.2)',
        ...positionStyle,
      }}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-[11px] font-semibold leading-tight line-clamp-3 break-all group-hover/card:line-clamp-none group-hover/card:whitespace-normal">
        {title}
      </span>
      {onDelete && <DeleteButton onDelete={onDelete} />}
      {children}
    </div>
  )
}

export function EventCard(props: EventCardProps) {
  if (props.variant === 'compact') {
    return <CompactEventCard {...props} />
  }
  return <TimelineEventCard {...props} />
}

export type { EventCardProps, TimelineProps, CompactProps }
