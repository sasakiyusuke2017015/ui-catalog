import { format } from 'date-fns'
import type { CalendarEvent } from '../../types'

interface MonthEventCardProps {
  readonly event: CalendarEvent
  readonly isFullDay: boolean
  readonly isDragging: boolean
  readonly onClick: (e: React.MouseEvent) => void
  readonly onPointerDown: (e: React.PointerEvent) => void
}

export function MonthEventCard({ event, isFullDay, isDragging, onClick, onPointerDown }: MonthEventCardProps) {
  if (isFullDay) {
    return (
      <div
        data-component="event-card"
        className="rounded-lg px-2.5 py-0.5 text-white text-[10px] font-medium truncate cursor-grab hover:brightness-110 transition-shadow hover:shadow-md"
        style={{
          backgroundColor: event.color,
          boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.45)',
          opacity: isDragging ? 0.4 : 1,
        }}
        onClick={onClick}
        onPointerDown={onPointerDown}
      >
        {event.title}
      </div>
    )
  }

  return (
    <div
      data-component="event-card"
      className="flex items-center gap-1.5 px-1 py-0.5 rounded-lg cursor-grab hover:bg-surface-hover transition-colors truncate"
      style={{ opacity: isDragging ? 0.4 : 1 }}
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: event.color }}
      />
      <span className="text-[10px] text-text-secondary font-medium shrink-0" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {format(event.startTime, 'HH:mm')} - {format(event.endTime, 'HH:mm')}
      </span>
      <span className="text-[10px] text-text font-medium truncate ml-1">
        {event.title}
      </span>
    </div>
  )
}
