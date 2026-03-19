import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { selectedDateAtom, activeSlotAtom, eventModalAtom, hoveredEventAtom, anyDragActiveAtom } from '../../state/calendar'
import {
  getMonthCalendarDates,
  isToday,
  isSameMonth,
  coversFullDay,
} from '../../utils/dates'
import { format, startOfDay, differenceInCalendarDays } from 'date-fns'
import { ja } from 'date-fns/locale'
import { useCallback, useRef, useState } from 'react'
import type { CalendarEvent } from '../../types'
import styles from './MonthView.module.scss'

const WEEKDAY_LABELS = ['日', '月', '火', '水', '木', '金', '土']
const LANE_H = 20
const MAX_SINGLE_PER_DAY = 2
const DRAG_THRESHOLD = 5

/* ------------------------------------------------------------------ */
/*  Multi-day event layout                                            */
/* ------------------------------------------------------------------ */

interface SpanningEvent {
  readonly event: CalendarEvent
  readonly startCol: number
  readonly endCol: number
  readonly lane: number
  readonly continuesLeft: boolean
  readonly continuesRight: boolean
}

function isMultiDayEvent(event: CalendarEvent): boolean {
  const s = startOfDay(event.startTime).getTime()
  const e = startOfDay(event.endTime).getTime()
  return s !== e
}

function layoutSpanningEvents(
  events: readonly CalendarEvent[],
  weekDates: readonly Date[]
): { readonly spanning: readonly SpanningEvent[]; readonly laneCount: number } {
  const weekStartMs = startOfDay(weekDates[0]!).getTime()
  const weekEndMs = startOfDay(weekDates[6]!).getTime()

  const multiDay = events.filter((ev) => {
    const evStartMs = startOfDay(ev.startTime).getTime()
    const evEndMs = startOfDay(ev.endTime).getTime()
    if (evStartMs > weekEndMs || evEndMs < weekStartMs) return false
    return isMultiDayEvent(ev)
  })

  const sorted = [...multiDay].sort((a, b) => {
    const d = a.startTime.getTime() - b.startTime.getTime()
    if (d !== 0) return d
    return (b.endTime.getTime() - b.startTime.getTime()) - (a.endTime.getTime() - a.startTime.getTime())
  })

  const lanes: (string | null)[][] = []
  const result: SpanningEvent[] = []

  for (const event of sorted) {
    const evStartMs = startOfDay(event.startTime).getTime()
    const evEndMs = startOfDay(event.endTime).getTime()

    let startCol = 0
    let endCol = 6

    for (let i = 0; i < 7; i++) {
      if (startOfDay(weekDates[i]!).getTime() >= evStartMs) {
        startCol = i
        break
      }
    }

    for (let i = 6; i >= 0; i--) {
      if (startOfDay(weekDates[i]!).getTime() <= evEndMs) {
        endCol = i
        break
      }
    }

    const continuesLeft = evStartMs < weekStartMs
    const continuesRight = evEndMs > weekEndMs

    let lane = -1
    for (let l = 0; l < lanes.length; l++) {
      let free = true
      for (let c = startCol; c <= endCol; c++) {
        if (lanes[l]![c] !== null) { free = false; break }
      }
      if (free) { lane = l; break }
    }
    if (lane === -1) {
      lane = lanes.length
      lanes.push(Array(7).fill(null))
    }

    for (let c = startCol; c <= endCol; c++) {
      lanes[lane]![c] = event.id
    }

    result.push({ event, startCol, endCol, lane, continuesLeft, continuesRight })
  }

  return { spanning: result, laneCount: lanes.length }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

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
      if (dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) return
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
            <div key={weekIdx} className="grid grid-cols-7 border-b border-border/50 relative overflow-hidden">
              {/* Spanning event bars */}
              {spanning.map(({ event, startCol, endCol, lane, continuesLeft, continuesRight }) => {
                  const padL = continuesLeft ? 0 : 2
                  const padR = continuesRight ? 0 : 2
                  const isDragging = dragEventId === event.id
                  return (
                    <div
                      key={event.id}
                      style={{
                        position: 'absolute',
                        left: `calc(${(startCol / 7) * 100}% + ${padL}px)`,
                        width: `calc(${((endCol - startCol + 1) / 7) * 100}% - ${padL + padR}px)`,
                        top: `${28 + lane * LANE_H}px`,
                        height: `${LANE_H - 2}px`,
                        zIndex: isDragging ? 20 : 2,
                        opacity: isDragging ? 0.4 : 1,
                      }}
                    >
                      <div
                        className="h-full flex items-center px-4 text-white text-[10px] font-medium truncate cursor-grab hover:brightness-110 relative group/span"
                        style={{
                          backgroundColor: event.color,
                          borderRadius: `${continuesLeft ? 0 : 10}px ${continuesRight ? 0 : 10}px ${continuesRight ? 0 : 10}px ${continuesLeft ? 0 : 10}px`,
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)',
                        }}
                        onClick={(e) => handleEventClick(event, week[startCol]!, e)}
                        onPointerDown={(e) => startEventDrag(event, week[startCol]!, e)}
                      >
                        {event.title}
                        {/* Left resize handle */}
                        {!continuesLeft && (
                          <div
                            className="absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize opacity-0 group-hover/span:opacity-100 transition-opacity"
                            style={{ borderRadius: '10px 0 0 10px', background: 'rgba(255,255,255,0.3)' }}
                            onPointerDown={(e) => {
                              e.stopPropagation()
                              startEventDrag(event, startOfDay(event.startTime), e, 'resize-left')
                            }}
                          />
                        )}
                        {/* Right resize handle */}
                        {!continuesRight && (
                          <div
                            className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize opacity-0 group-hover/span:opacity-100 transition-opacity"
                            style={{ borderRadius: '0 10px 10px 0', background: 'rgba(255,255,255,0.3)' }}
                            onPointerDown={(e) => {
                              e.stopPropagation()
                              startEventDrag(event, startOfDay(event.endTime), e, 'resize-right')
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )
                })}

              {/* Day cells */}
              {week.map((date, colIdx) => {
                const today = isToday(date)
                const inMonth = isSameMonth(date, selectedDate)
                const dayEvents = getEventsForDay(events, date)
                const singleDayEvents = dayEvents.filter(
                  (e) => !spanningIds.has(e.id) && !isMultiDayEvent(e)
                )
                const singleAllDay = singleDayEvents.filter((e) => coversFullDay(e, date))
                const singleTimed = singleDayEvents.filter((e) => !coversFullDay(e, date))
                const dayOfWeek = date.getDay()
                const isActive = activeSlot?.date === date.toDateString()
                const isDropTarget = dragEventId !== null && dropDateStr === date.toISOString()

                const orderedSingle = [...singleAllDay, ...singleTimed]
                const visibleSingle = orderedSingle.slice(0, MAX_SINGLE_PER_DAY)
                const hiddenCount = orderedSingle.length - visibleSingle.length

                return (
                  <div
                    key={date.toISOString()}
                    data-month-date={date.toISOString()}
                    onClick={() => handleDayClick(date)}
                    className={`relative min-h-[80px] p-1 border-r border-border/50 cursor-pointer transition-colors hover:bg-surface-hover ${
                      !inMonth ? 'opacity-40' : ''
                    } ${today ? styles.todayCell : ''} ${isDropTarget ? styles.dropTarget : ''}`}
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
                      {visibleSingle.map((event) => {
                        const isDragging = dragEventId === event.id
                        return coversFullDay(event, date) ? (
                          <div
                            key={event.id}
                            data-component="event-card"
                            className="rounded-lg px-2.5 py-0.5 text-white text-[10px] font-medium truncate cursor-grab hover:brightness-110 transition-shadow hover:shadow-md"
                            style={{
                              backgroundColor: event.color,
                              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)',
                              opacity: isDragging ? 0.4 : 1,
                            }}
                            title={event.title}
                            onClick={(e) => handleEventClick(event, date, e)}
                            onPointerDown={(e) => startEventDrag(event, date, e)}
                          >
                            {event.title}
                          </div>
                        ) : (
                          <div
                            key={event.id}
                            data-component="event-card"
                            className="flex items-center gap-1.5 px-1 py-0.5 rounded-lg cursor-grab hover:bg-surface-hover transition-colors truncate"
                            style={{ opacity: isDragging ? 0.4 : 1 }}
                            onClick={(e) => handleEventClick(event, date, e)}
                            onPointerDown={(e) => startEventDrag(event, date, e)}
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
                      })}
                      {hiddenCount > 0 && (
                        <div className="text-[10px] text-text-secondary px-1">
                          +{hiddenCount} 件
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
