import { useRef, useCallback } from 'react'
import { useInfiniteTimeline } from '../../hooks/useInfiniteTimeline'
import { DayFrame } from '../DayFrame/DayFrame'
import { DragOverlay } from '../DragOverlay/DragOverlay'
import type { CalendarEvent } from '../../types'
import styles from './Timeline.module.scss'

interface CalendarStorageProps {
  readonly events: readonly CalendarEvent[]
  readonly headerVariant?: 'blur' | 'subtle'
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
  readonly removeEvent: (id: string) => Promise<void>
}

export function Timeline({ events, headerVariant, persistEvent, removeEvent }: CalendarStorageProps) {
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
      data-component="Timeline"
      ref={scrollRef}
      className={styles.container}
    >
      {dates.map((date) => (
        <DayFrame
          key={date.toISOString()}
          date={date}
          events={events}
          headerVariant={headerVariant}
          onDeleteEvent={handleDelete}
          onUpdateEvent={handleUpdate}
        />
      ))}
      <DragOverlay />
    </div>
  )
}
