import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { selectedDateAtom, activeSlotAtom, eventModalAtom, hoveredEventAtom, anyDragActiveAtom } from '../../state/calendar'
import {
  getMonthCalendarDates,
  getEventsForDay,
} from '../../utils/dates'
import { format, startOfDay, differenceInCalendarDays } from 'date-fns'
import { SpanningBar } from '../../molecules/SpanningBar/SpanningBar'
import { MonthDayCell } from '../../molecules/MonthDayCell/MonthDayCell'
import { layoutSpanningEvents, isMultiDayEvent } from '../../utils/layoutSpanning'
import { ja } from 'date-fns/locale'
import { useCallback, useRef, useState } from 'react'
import type { CalendarEvent } from '../../types'
import styles from './MonthView.module.scss'

const WEEKDAY_LABELS = ['日', '月', '火', '水', '木', '金', '土']
const LANE_H = 20
const DRAG_THRESHOLD = 5

/* ------------------------------------------------------------------ */

function findDateCellFromPoint(x: number, y: number): string | null {
  const els = document.elementsFromPoint(x, y)
  for (const el of els) {
    const dateAttr = (el as HTMLElement).dataset?.monthDate
    if (dateAttr) return dateAttr
  }
  return null
}

/* ------------------------------------------------------------------ */
/*  Drag state                                                        */
/* ------------------------------------------------------------------ */

type MonthDragMode = 'move' | 'resize-left' | 'resize-right'

interface MonthDragState {
  readonly event: CalendarEvent
  readonly originDate: Date
  readonly mode: MonthDragMode
  readonly startX: number
  readonly startY: number
  readonly started: boolean
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

interface CalendarStorageProps {
  readonly events: readonly CalendarEvent[]
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
  readonly removeEvent: (id: string) => Promise<void>
}

export function MonthView({ events, persistEvent, removeEvent }: CalendarStorageProps) {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom)
  const setHovered = useSetAtom(hoveredEventAtom)
  const setAnyDrag = useSetAtom(anyDragActiveAtom)
  const activeSlot = useAtomValue(activeSlotAtom)
  const setActiveSlot = useSetAtom(activeSlotAtom)
  const setModal = useSetAtom(eventModalAtom)
  const calendarDates = getMonthCalendarDates(selectedDate)

  const weeks: Date[][] = []
  for (let i = 0; i < calendarDates.length; i += 7) {
    weeks.push(calendarDates.slice(i, i + 7) as Date[])
  }

  // Drag state
  const [dragEventId, setDragEventId] = useState<string | null>(null)
  const [dropDateStr, setDropDateStr] = useState<string | null>(null)
  const dragRef = useRef<MonthDragState | null>(null)

  const dropDateRef = useRef<string | null>(null)

  const handlePointerMoveReal = useCallback((e: PointerEvent) => {
    const state = dragRef.current
    if (!state) return

    if (!state.started) {
      const dx = Math.abs(e.clientX - state.startX)
      const dy = Math.abs(e.clientY - state.startY)
      const threshold = state.mode === 'move' ? DRAG_THRESHOLD : 3
      if (dx < threshold && dy < threshold) return
      ;(dragRef.current as { started: boolean }).started = true
      setDragEventId(state.event.id)
      setHovered(null)
      setAnyDrag(true)
      document.body.style.cursor = state.mode === 'move' ? 'grabbing' : 'ew-resize'
      document.body.style.userSelect = 'none'
    }

    const dateStr = findDateCellFromPoint(e.clientX, e.clientY)
    dropDateRef.current = dateStr
    setDropDateStr(dateStr)
  }, [])

  const handlePointerUpReal = useCallback(() => {
    const state = dragRef.current
    dragRef.current = null
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
    document.removeEventListener('pointermove', handlePointerMoveReal)
    document.removeEventListener('pointerup', handlePointerUpReal)

    const targetStr = dropDateRef.current
    dropDateRef.current = null
    setDragEventId(null)
    setDropDateStr(null)
    setAnyDrag(false)

    if (!state?.started || !targetStr) return

    const targetDate = new Date(targetStr)
    const dayDelta = differenceInCalendarDays(targetDate, state.originDate)
    if (dayDelta === 0) return

    const DAY_MS = 24 * 60 * 60 * 1000

    if (state.mode === 'move') {
      const deltaMs = dayDelta * DAY_MS
      persistEvent({
        ...state.event,
        startTime: new Date(state.event.startTime.getTime() + deltaMs),
        endTime: new Date(state.event.endTime.getTime() + deltaMs),
      })
    } else if (state.mode === 'resize-left') {
      const newStart = new Date(state.event.startTime.getTime() + dayDelta * DAY_MS)
      if (newStart < state.event.endTime) {
        persistEvent({ ...state.event, startTime: newStart })
      }
    } else {
      const newEnd = new Date(state.event.endTime.getTime() + dayDelta * DAY_MS)
      if (newEnd > state.event.startTime) {
        persistEvent({ ...state.event, endTime: newEnd })
      }
    }
  }, [handlePointerMoveReal, persistEvent])

  const startEventDrag = useCallback(
    (event: CalendarEvent, originDate: Date, e: React.PointerEvent, mode: MonthDragMode = 'move') => {
      if (e.button !== 0) return
      e.stopPropagation()
      e.preventDefault()
      dragRef.current = {
        event,
        originDate: startOfDay(originDate),
        mode,
        startX: e.clientX,
        startY: e.clientY,
        started: false,
      }
      document.addEventListener('pointermove', handlePointerMoveReal)
      document.addEventListener('pointerup', handlePointerUpReal)
    },
    [handlePointerMoveReal, handlePointerUpReal]
  )

  const handleEventClick = useCallback(
    (event: CalendarEvent, clickedDate: Date, e: React.MouseEvent) => {
      e.stopPropagation()
      setModal({
        isOpen: true,
        date: clickedDate,
        hour: event.startTime.getHours(),
        editingEvent: event,
      })
    },
    [setModal]
  )

  const handleDayClick = useCallback(
    (date: Date) => {
      if (dragRef.current) return
      setSelectedDate(date)
      const dateKey = date.toDateString()
      if (activeSlot?.date === dateKey) {
        setModal({ isOpen: true, date, hour: 9 })
      } else {
        setActiveSlot({ date: dateKey, hour: -1 })
      }
    },
    [activeSlot, setActiveSlot, setModal, setSelectedDate]
  )

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

  return (
    <div className="h-full flex flex-col p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-text">
          {format(selectedDate, 'yyyy年M月', { locale: ja })}
        </h2>
      </div>

      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAY_LABELS.map((label, i) => (
          <div
            key={label}
            className={`text-center text-sm font-medium py-2 ${
              i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-text-secondary'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="flex-1 grid grid-rows-[repeat(auto-fill,1fr)]">
        {weeks.map((week, weekIdx) => {
          const { spanning, laneCount } = layoutSpanningEvents(events, week)
          const spanningIds = new Set(spanning.map((s) => s.event.id))
          const laneAreaH = laneCount * LANE_H

          return (
            <div key={weekIdx} className={`grid grid-cols-7 border-b border-border/50 relative overflow-hidden ${weekIdx % 2 === 0 ? styles.weekRowEven : ''}`}>
              {/* Spanning event bars */}
              {spanning.map(({ event, startCol, endCol, lane, continuesLeft, continuesRight }) => (
                <SpanningBar
                  key={event.id}
                  event={event}
                  startCol={startCol}
                  endCol={endCol}
                  lane={lane}
                  continuesLeft={continuesLeft}
                  continuesRight={continuesRight}
                  isDragging={dragEventId === event.id}
                  isDragActive={dragEventId !== null}
                  onClick={handleEventClick}
                  onDragStart={startEventDrag}
                  weekDates={week}
                />
              ))}

              {/* Day cells */}
              {week.map((date) => (
                <MonthDayCell
                  key={date.toISOString()}
                  date={date}
                  selectedDate={selectedDate}
                  events={getEventsForDay(events, date)}
                  spanningIds={spanningIds}
                  laneAreaH={laneAreaH}
                  isActive={activeSlot?.date === date.toDateString()}
                  isDropTarget={dragEventId !== null && dropDateStr === date.toISOString()}
                  dragEventId={dragEventId}
                  todayCellClass={styles.todayCell ?? ''}
                  dropTargetClass={styles.dropTarget ?? ''}
                  isMultiDayEvent={isMultiDayEvent}
                  onDayClick={handleDayClick}
                  onEventClick={handleEventClick}
                  onEventDragStart={startEventDrag}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
