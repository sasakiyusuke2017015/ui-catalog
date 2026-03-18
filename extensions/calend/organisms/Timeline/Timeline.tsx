import { useRef, useCallback } from 'react'
import { useInfiniteTimeline } from '../../hooks/useInfiniteTimeline'
import { formatDayHeader, isToday } from '../../utils/dates'
import { DayColumn } from '../DayColumn/DayColumn'
import { EventCard as EventCardBase } from '../../atoms/EventCard/EventCard'
import type { CalendarEvent } from '../../types'

const SLOT_HEIGHT = 56
const LABEL_WIDTH = 64

function getEventsForDay(
  events: readonly CalendarEvent[],
  date: Date
): readonly CalendarEvent[] {
  const dayStart = new Date(date)
  dayStart.setHours(0, 0, 0, 0)
  const dayEnd = new Date(date)
  dayEnd.setHours(23, 59, 59, 999)
  return events.filter((e) => e.startTime <= dayEnd && e.endTime >= dayStart)
}

interface CalendarStorageProps {
  readonly events: readonly CalendarEvent[]
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
  readonly removeEvent: (id: string) => Promise<void>
}

export function Timeline({ events, persistEvent, removeEvent }: CalendarStorageProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { dates } = useInfiniteTimeline(scrollRef)

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await removeEvent(id)
      } catch (error) {
        throw new Error(`Failed to delete event: ${error}`)
      }
    },
    [removeEvent]
  )

  const handleUpdate = useCallback(
    async (event: CalendarEvent) => {
      try {
        await persistEvent(event)
      } catch (error) {
        throw new Error(`Failed to update event: ${error}`)
      }
    },
    [persistEvent]
  )

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto"
    >
      {dates.map((date) => {
        const today = isToday(date)
        const dayEvents = getEventsForDay(events, date)

        return (
          <div
            key={date.toISOString()}
            className="min-h-screen"
            data-date={date.toISOString()}
          >
            <div
              className={`sticky top-0 z-20 backdrop-blur-md border-b border-border py-3 px-4 ${
                today ? 'bg-primary/10 border-primary/30' : 'bg-surface/90'
              }`}
            >
              <h2 className={`text-lg font-bold ${today ? 'text-primary' : 'text-text'}`}>
                {formatDayHeader(date)}
                {today && (
                  <span className="ml-2 text-xs font-normal bg-primary text-white px-2 py-0.5 rounded-full">
                    TODAY
                  </span>
                )}
              </h2>
            </div>

            {/* All-day events */}
            {dayEvents.some((e) => e.allDay) && (
              <div className="flex flex-wrap gap-1 px-2 py-1 border-b border-border/50 bg-surface-hover/30" style={{ paddingLeft: `${LABEL_WIDTH + 12}px` }}>
                {dayEvents.filter((e) => e.allDay).map((event) => (
                  <EventCardBase
                    key={event.id}
                    variant="compact"
                    title={event.title}
                    color={event.color}
                    onDelete={() => handleDelete(event.id)}
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
                onDeleteEvent={handleDelete}
                onUpdateEvent={handleUpdate}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
