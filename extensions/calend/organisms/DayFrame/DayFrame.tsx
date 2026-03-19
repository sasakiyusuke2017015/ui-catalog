import { useRef, useCallback } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { hoveredEventAtom, anyDragActiveAtom } from '../../state/calendar'
import { formatDayHeader, isToday, coversFullDay, getEventsForDay } from '../../utils/dates'
import { DayColumn } from '../DayColumn/DayColumn'
import { EventCard as EventCardBase } from '../../atoms/EventCard/EventCard'
import type { CalendarEvent } from '../../types'
import styles from './DayFrame.module.scss'

const SLOT_HEIGHT = 56
const LABEL_WIDTH = 64

interface DayFrameProps {
  readonly date: Date
  readonly events: readonly CalendarEvent[]
  readonly onDeleteEvent: (id: string) => void
  readonly onUpdateEvent: (event: CalendarEvent) => void
}

export function DayFrame({ date, events, onDeleteEvent, onUpdateEvent }: DayFrameProps) {
  const hovered = useAtomValue(hoveredEventAtom)
  const setHovered = useSetAtom(hoveredEventAtom)
  const anyDrag = useAtomValue(anyDragActiveAtom)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const today = isToday(date)
  const dayEvents = getEventsForDay(events, date)
  const dow = date.getDay()

  const headerClass = today
    ? styles.todayHeader
    : dow === 0
      ? styles.sundayHeader
      : dow === 6
        ? styles.saturdayHeader
        : 'bg-surface/90'

  const textClass = today
    ? 'text-primary'
    : dow === 0
      ? 'text-red-500'
      : dow === 6
        ? 'text-blue-500'
        : 'text-text'

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }, [])

  const handleEventMouseEnter = useCallback(
    (event: CalendarEvent, e: React.MouseEvent) => {
      if (anyDrag) return
      clearHoverTimer()
      hoverTimerRef.current = setTimeout(() => {
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        setHovered({
          event,
          rect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width },
        })
      }, 300)
    },
    [anyDrag, clearHoverTimer, setHovered]
  )

  const handleEventMouseLeave = useCallback(() => {
    clearHoverTimer()
    setHovered(null)
  }, [clearHoverTimer, setHovered])

  const allDayEvents = dayEvents.filter((e) => coversFullDay(e, date))

  return (
    <div
      className="min-h-screen"
      data-date={date.toISOString()}
    >
      <div
        className={`sticky top-0 z-20 backdrop-blur-md border-b border-border py-3 px-4 ${headerClass}`}
      >
        <h2 className={`text-lg font-bold ${textClass}`}>
          {formatDayHeader(date)}
          {today && (
            <span className="ml-2 text-xs font-normal bg-primary text-white px-2 py-0.5 rounded-full">
              TODAY
            </span>
          )}
        </h2>
      </div>

      {allDayEvents.length > 0 && (
        <div
          className="flex flex-wrap gap-1 px-2 py-1 border-b border-border/50 bg-surface-hover/30"
          style={{ paddingLeft: `${LABEL_WIDTH + 12}px` }}
        >
          {allDayEvents.map((event) => (
            <EventCardBase
              key={event.id}
              variant="compact"
              title={event.title}
              color={event.color}
              isHovered={hovered?.event.id === event.id}
              onMouseEnter={(e) => handleEventMouseEnter(event, e)}
              onMouseLeave={handleEventMouseLeave}
              onDelete={() => onDeleteEvent(event.id)}
            />
          ))}
        </div>
      )}

      <div className="px-2">
        <DayColumn
          date={date}
          events={dayEvents}
          slotHeight={SLOT_HEIGHT}
          labelWidth={LABEL_WIDTH}
          onDeleteEvent={onDeleteEvent}
          onUpdateEvent={onUpdateEvent}
        />
      </div>
    </div>
  )
}
