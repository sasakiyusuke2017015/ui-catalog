import { useCallback, useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { useAtomValue, useSetAtom } from 'jotai'
import { EventCard as EventCardBase } from '../../atoms/EventCard/EventCard'
import { useDragEvent } from '../../hooks/useDragEvent'
import { dragAtom, hoveredEventAtom, eventModalAtom, anyDragActiveAtom, eventsAtom } from '../../state/calendar'
import type { CalendarEvent } from '../../types'
import { resolveOriginalEvent } from '../../utils/repeatUtils'

interface EventCardProps {
  readonly event: CalendarEvent
  readonly dayStart: Date
  readonly slotHeight: number
  readonly column?: number
  readonly columnSpan?: number
  readonly totalColumns?: number
  readonly columnWidth?: number
  readonly onDelete: (id: string) => void
  readonly onUpdate: (event: CalendarEvent) => void
}

export function EventCard({
  event,
  dayStart,
  slotHeight,
  column = 0,
  columnSpan = 1,
  totalColumns = 1,
  columnWidth,
  onDelete,
  onUpdate,
}: EventCardProps) {
  const drag = useAtomValue(dragAtom)
  const hovered = useAtomValue(hoveredEventAtom)
  const isDragging = drag?.eventId === event.id
  const isResizing = isDragging && drag?.mode !== 'move'
  const isHovered = hovered?.event.id === event.id
  const allEvents = useAtomValue(eventsAtom)
  const setHovered = useSetAtom(hoveredEventAtom)
  const setModal = useSetAtom(eventModalAtom)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = useCallback(() => {
    setHovered(null)
    const original = resolveOriginalEvent(event, allEvents)
    setModal({
      isOpen: true,
      date: dayStart,
      hour: original.startTime.getHours(),
      editingEvent: original,
    })
  }, [event, allEvents, dayStart, setHovered, setModal])

  const { handleMoveStart, handleResizeTopStart, handleResizeBottomStart } =
    useDragEvent({
      event,
      slotHeight,
      columnWidth,
      allEvents,
      onCommit: onUpdate,
      onClick: handleClick,
    })

  const anyDrag = useAtomValue(anyDragActiveAtom)

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (drag || anyDrag) return
    const el = e.currentTarget as HTMLElement
    hoverTimerRef.current = setTimeout(() => {
      const rect = el.getBoundingClientRect()
      setHovered({
        event,
        rect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width },
      })
    }, 300)
  }, [event, drag, anyDrag, setHovered])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
    setHovered(null)
  }, [setHovered])

  // Close popover on scroll
  useEffect(() => {
    if (!isHovered) return
    const close = () => setHovered(null)
    window.addEventListener('scroll', close, { capture: true })
    return () => window.removeEventListener('scroll', close, { capture: true })
  }, [isHovered, setHovered])

  const startLabel = format(event.startTime, 'HH:mm')
  const endLabel = format(event.endTime, 'HH:mm')

  const dayStartMs = dayStart.getTime()
  const dayEndMs = dayStartMs + 24 * 60 * 60 * 1000

  const clampedStart = Math.max(event.startTime.getTime(), dayStartMs)
  const clampedEnd = Math.min(event.endTime.getTime(), dayEndMs)

  const startHours = (clampedStart - dayStartMs) / (1000 * 60 * 60)
  const endHours = (clampedEnd - dayStartMs) / (1000 * 60 * 60)
  const durationHours = endHours - startHours

  const top = startHours * slotHeight
  const height = Math.max(durationHours * slotHeight, slotHeight / 2)

  const leftPercent = (column / totalColumns) * 100
  const widthPercent = (columnSpan / totalColumns) * 100

  return (
    <EventCardBase
      title={event.title}
      icon={event.icon}
      startLabel={startLabel}
      endLabel={endLabel}
      top={top}
      height={height}
      color={event.color}
      leftPercent={leftPercent}
      widthPercent={widthPercent}
      zColumn={isDragging ? 999 : column}
      onDelete={() => onDelete(event.id)}
      onPointerDown={handleMoveStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isDragging={isDragging && !isResizing}
      isHovered={isHovered}
    >
      {/* Resize handle: top */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 cursor-n-resize"
        onPointerDown={handleResizeTopStart}
      />
      {/* Resize handle: bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 cursor-s-resize"
        onPointerDown={handleResizeBottomStart}
      />
    </EventCardBase>
  )
}
