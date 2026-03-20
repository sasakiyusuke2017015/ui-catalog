import { startOfDay } from 'date-fns'
import Icon from '@ui-catalog/core/atoms/Icon'
import type { IconName } from '@ui-catalog/core/constants'
import type { CalendarEvent } from '../../types'

const LANE_H = 20

interface SpanningBarProps {
  readonly event: CalendarEvent
  readonly startCol: number
  readonly endCol: number
  readonly lane: number
  readonly continuesLeft: boolean
  readonly continuesRight: boolean
  readonly isDragging: boolean
  readonly isDragActive: boolean
  readonly onClick: (event: CalendarEvent, clickedDate: Date, e: React.MouseEvent) => void
  readonly onDragStart: (event: CalendarEvent, originDate: Date, e: React.PointerEvent, mode?: 'move' | 'resize-left' | 'resize-right') => void
  readonly weekDates: readonly Date[]
}

export function SpanningBar({
  event,
  startCol,
  endCol,
  lane,
  continuesLeft,
  continuesRight,
  isDragging,
  isDragActive,
  onClick,
  onDragStart,
  weekDates,
}: SpanningBarProps) {
  const padL = continuesLeft ? 0 : 2
  const padR = continuesRight ? 0 : 2
  const borderRadius = `${continuesLeft ? 0 : 10}px ${continuesRight ? 0 : 10}px ${continuesRight ? 0 : 10}px ${continuesLeft ? 0 : 10}px`

  return (
    <div
      data-component="SpanningBar"
      style={{
        position: 'absolute',
        left: `calc(${(startCol / 7) * 100}% + ${padL}px)`,
        width: `calc(${((endCol - startCol + 1) / 7) * 100}% - ${padL + padR}px)`,
        top: `${28 + lane * LANE_H}px`,
        height: `${LANE_H - 2}px`,
        zIndex: isDragging ? 20 : 2,
        opacity: isDragging ? 0.3 : 1,
        filter: isDragging ? 'grayscale(0.4)' : 'none',
        transition: 'opacity 150ms ease, filter 150ms ease',
        pointerEvents: isDragActive ? 'none' : 'auto',
      }}
    >
      {/* Bar body */}
      <div
        className="h-full flex items-center gap-1 px-4 text-white text-[10px] font-medium truncate cursor-grab hover:brightness-110"
        style={{
          backgroundColor: event.color,
          borderRadius,
          boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.45)',
        }}
        onClick={(e) => onClick(event, weekDates[startCol]!, e)}
        onPointerDown={(e) => onDragStart(event, weekDates[startCol]!, e)}
      >
        {event.icon && <Icon name={event.icon as IconName} size={12} className="shrink-0" />}
        {event.title}
      </div>

      {/* Left resize handle */}
      {!continuesLeft && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '10px',
            cursor: 'ew-resize',
            borderRadius: '10px 0 0 10px',
            zIndex: 3,
          }}
          onPointerDown={(e) => {
            e.stopPropagation()
            onDragStart(event, startOfDay(event.startTime), e, 'resize-left')
          }}
        />
      )}

      {/* Right resize handle */}
      {!continuesRight && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '10px',
            cursor: 'ew-resize',
            borderRadius: '0 10px 10px 0',
            zIndex: 3,
          }}
          onPointerDown={(e) => {
            e.stopPropagation()
            onDragStart(event, startOfDay(event.endTime), e, 'resize-right')
          }}
        />
      )}
    </div>
  )
}
