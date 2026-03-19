import { format } from 'date-fns'
import { isToday, isSameMonth, coversFullDay } from '../../utils/dates'
import { MonthEventCard } from '../../atoms/MonthEventCard/MonthEventCard'
import type { CalendarEvent } from '../../types'

const MAX_SINGLE_PER_DAY = 2

interface MonthDayCellProps {
  readonly date: Date
  readonly selectedDate: Date
  readonly events: readonly CalendarEvent[]
  readonly spanningIds: ReadonlySet<string>
  readonly laneAreaH: number
  readonly isActive: boolean
  readonly isDropTarget: boolean
  readonly dragEventId: string | null
  readonly todayCellClass: string
  readonly dropTargetClass: string
  readonly isMultiDayEvent: (event: CalendarEvent) => boolean
  readonly onDayClick: (date: Date) => void
  readonly onEventClick: (event: CalendarEvent, date: Date, e: React.MouseEvent) => void
  readonly onEventDragStart: (event: CalendarEvent, date: Date, e: React.PointerEvent) => void
}

export function MonthDayCell({
  date,
  selectedDate,
  events,
  spanningIds,
  laneAreaH,
  isActive,
  isDropTarget,
  dragEventId,
  todayCellClass,
  dropTargetClass,
  isMultiDayEvent,
  onDayClick,
  onEventClick,
  onEventDragStart,
}: MonthDayCellProps) {
  const today = isToday(date)
  const inMonth = isSameMonth(date, selectedDate)
  const dayOfWeek = date.getDay()

  const singleDayEvents = events.filter(
    (e) => !spanningIds.has(e.id) && !isMultiDayEvent(e)
  )
  const singleAllDay = singleDayEvents.filter((e) => coversFullDay(e, date))
  const singleTimed = singleDayEvents.filter((e) => !coversFullDay(e, date))
  const orderedSingle = [...singleAllDay, ...singleTimed]
  const visibleSingle = orderedSingle.slice(0, MAX_SINGLE_PER_DAY)
  const hiddenCount = orderedSingle.length - visibleSingle.length

  return (
    <div
      data-month-date={date.toISOString()}
      onClick={() => onDayClick(date)}
      className={`relative min-h-[80px] p-1 border-r border-border/50 cursor-pointer ${
        !inMonth ? 'opacity-40' : ''
      } ${today ? todayCellClass : ''} ${isDropTarget ? dropTargetClass : ''}`}
    >
      {isActive && (
        <div className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none z-20" />
      )}
      <div
        className={`text-sm font-medium mb-1 ${
          today
            ? 'text-primary font-bold'
            : dayOfWeek === 0
              ? 'text-red-500'
              : dayOfWeek === 6
                ? 'text-blue-500'
                : 'text-text'
        }`}
      >
        {format(date, 'd')}
      </div>

      {laneAreaH > 0 && <div style={{ height: `${laneAreaH}px` }} />}

      <div className="space-y-0.5">
        {visibleSingle.map((event) => (
          <MonthEventCard
            key={event.id}
            event={event}
            isFullDay={coversFullDay(event, date)}
            isDragging={dragEventId === event.id}
            onClick={(e) => onEventClick(event, date, e)}
            onPointerDown={(e) => onEventDragStart(event, date, e)}
          />
        ))}
        {hiddenCount > 0 && (
          <div className="text-[10px] text-text-secondary px-1">
            +{hiddenCount} 件
          </div>
        )}
      </div>
    </div>
  )
}
