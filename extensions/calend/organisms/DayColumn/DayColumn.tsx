import { useCallback, useRef, useState } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { activeSlotAtom, eventModalAtom, dragAtom, selectedDateAtom, anyDragActiveAtom, hoveredEventAtom } from '../../state/calendar'
import { formatHour, isToday } from '../../utils/dates'
import { layoutEvents } from '../../utils/layoutEvents'
import { EventCard } from '../EventCard/EventCard'
import type { CalendarEvent } from '../../types'
import dcStyles from './DayColumn.module.scss'

const HOURS = Array.from({ length: 24 }, (_, i) => i)

interface DayColumnProps {
  readonly date: Date
  readonly events: readonly CalendarEvent[]
  readonly slotHeight: number
  readonly labelWidth?: number
  readonly columnWidth?: number
  readonly onDeleteEvent: (id: string) => void
  readonly onUpdateEvent: (event: CalendarEvent) => void
}

export function DayColumn({
  date,
  events,
  slotHeight,
  labelWidth = 0,
  columnWidth,
  onDeleteEvent,
  onUpdateEvent,
}: DayColumnProps) {
  const activeSlot = useAtomValue(activeSlotAtom)
  const setActiveSlot = useSetAtom(activeSlotAtom)
  const setModal = useSetAtom(eventModalAtom)
  const setSelectedDate = useSetAtom(selectedDateAtom)
  const drag = useAtomValue(dragAtom)
  const setAnyDrag = useSetAtom(anyDragActiveAtom)
  const setHovered = useSetAtom(hoveredEventAtom)

  const dateKey = date.toDateString()
  const today = isToday(date)

  const dayStart = new Date(date)
  dayStart.setHours(0, 0, 0, 0)

  const layouted = layoutEvents(events as CalendarEvent[])

  // Slot drag to create event
  const [slotDrag, setSlotDrag] = useState<{ startHour: number; currentHour: number } | null>(null)
  const slotDragRef = useRef(false)
  const columnRef = useRef<HTMLDivElement>(null)

  // Convert clientY to hour index within the column
  const clientYToHour = useCallback((clientY: number) => {
    const col = columnRef.current
    if (!col) return 0
    const rect = col.getBoundingClientRect()
    const y = clientY - rect.top
    return Math.max(0, Math.min(23, Math.floor(y / slotHeight)))
  }, [slotHeight])

  const handleDocPointerMove = useCallback(
    (e: PointerEvent) => {
      const hour = clientYToHour(e.clientY)
      setSlotDrag((prev) => {
        if (!prev || prev.currentHour === hour) return prev
        slotDragRef.current = true
        return { ...prev, currentHour: hour }
      })
    },
    [clientYToHour]
  )

  const handleDocPointerUp = useCallback(
    () => {
      document.removeEventListener('pointermove', handleDocPointerMove)
      document.removeEventListener('pointerup', handleDocPointerUp)

      setSlotDrag((prev) => {
        if (!prev) return null
        const startH = Math.min(prev.startHour, prev.currentHour)
        const endH = Math.max(prev.startHour, prev.currentHour) + 1

        if (slotDragRef.current) {
          setActiveSlot({ date: dateKey, hour: startH, endHour: Math.min(endH, 23) })
          setModal({ isOpen: true, date, hour: startH, endHour: Math.min(endH, 23) })
        } else {
          const isActive = activeSlot?.date === dateKey && activeSlot.hour === prev.startHour
          if (isActive) {
            setModal({ isOpen: true, date, hour: prev.startHour })
          }
        }
        return null
      })
      setAnyDrag(false)
    },
    [handleDocPointerMove, activeSlot, dateKey, date, setActiveSlot, setModal, setAnyDrag]
  )

  const handleSlotPointerDown = useCallback(
    (hour: number, e: React.PointerEvent) => {
      if (e.button !== 0 || drag) return
      e.preventDefault()
      setSelectedDate(date)
      setActiveSlot({ date: dateKey, hour })
      setSlotDrag({ startHour: hour, currentHour: hour })
      slotDragRef.current = false
      setHovered(null)
      setAnyDrag(true)
      document.addEventListener('pointermove', handleDocPointerMove)
      document.addEventListener('pointerup', handleDocPointerUp)
    },
    [drag, date, dateKey, setActiveSlot, setSelectedDate, setHovered, setAnyDrag, handleDocPointerMove, handleDocPointerUp]
  )

  const eventLeft = labelWidth > 0 ? `${labelWidth + 4}px` : '0'

  // Calculate slot drag highlight range
  const dragMin = slotDrag ? Math.min(slotDrag.startHour, slotDrag.currentHour) : -1
  const dragMax = slotDrag ? Math.max(slotDrag.startHour, slotDrag.currentHour) : -1

  return (
    <div data-component="DayColumn">
      <div className="relative" ref={columnRef}>
        {HOURS.map((hour) => {
          const isCurrentHour = today && new Date().getHours() === hour
          const isActive = activeSlot?.date === dateKey && (
            activeSlot.endHour !== undefined
              ? hour >= activeSlot.hour && hour < activeSlot.endHour
              : activeSlot.hour === hour
          )
          const inDragRange = hour >= dragMin && hour <= dragMax

          return (
            <div
              key={hour}
              className={`border-b border-border/50 transition-colors cursor-pointer select-none ${
                isActive && !slotDrag ? 'bg-primary/10' : ''
              } ${!inDragRange && isCurrentHour ? dcStyles.todaySlot : ''}`}
              style={{
                height: `${slotHeight}px`,
                ...(labelWidth > 0 ? { display: 'grid', gridTemplateColumns: `${labelWidth}px 1fr` } : {}),
                ...(inDragRange
                  ? { backgroundColor: 'rgba(79, 70, 229, 0.1)' }
                    : {}),
              }}
              onPointerDown={(e) => handleSlotPointerDown(hour, e)}
            >
              {labelWidth > 0 && (
                <div className="text-xs text-text-secondary py-2 pr-3 text-right select-none">
                  {formatHour(hour)}
                </div>
              )}
              <div className={labelWidth > 0 ? 'border-l border-border/50' : 'border-r border-border/50'} />
            </div>
          )
        })}

        {/* Drag range preview / Active slot overlay */}
        {(() => {
          const overlayMin = slotDrag && slotDragRef.current ? dragMin : (
            activeSlot?.date === dateKey ? activeSlot.hour : -1
          )
          const overlayMax = slotDrag && slotDragRef.current ? dragMax : (
            activeSlot?.date === dateKey ? (activeSlot.endHour !== undefined ? activeSlot.endHour - 1 : activeSlot.hour) : -1
          )
          if (overlayMin < 0) return null
          return (
            <div
              style={{
                position: 'absolute',
                top: `${overlayMin * slotHeight}px`,
                height: `${(overlayMax - overlayMin + 1) * slotHeight}px`,
                left: eventLeft,
                right: '0',
                border: '2px solid #4f46e5',
                borderRadius: '8px',
                pointerEvents: 'none',
                zIndex: 5,
                backgroundColor: 'rgba(79, 70, 229, 0.08)',
              }}
            />
          )
        })()}

        {/* Events overlay + current time indicator */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: eventLeft, right: '0', pointerEvents: 'none' }}
        >
          {today && (() => {
            const now = new Date()
            const nowMinutes = now.getHours() * 60 + now.getMinutes()
            const topPx = (nowMinutes / 60) * slotHeight
            return (
              <div className="absolute left-0 right-0" style={{ top: `${topPx}px`, zIndex: 25 }}>
                <div className="h-0.5 bg-red-500">
                  <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
                </div>
              </div>
            )
          })()}

          {layouted.map(({ event, column, columnSpan, totalColumns }) => (
            <EventCard
              key={event.id}
              event={event}
              dayStart={dayStart}
              slotHeight={slotHeight}
              column={column}
              columnSpan={columnSpan}
              totalColumns={totalColumns}
              columnWidth={columnWidth}
              onDelete={onDeleteEvent}
              onUpdate={onUpdateEvent}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
