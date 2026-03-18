import { useCallback, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { dragAtom } from '../state/calendar'
import {
  pxToMinutes,
  snapToInterval,
  applyMoveDelta,
  applyResizeDelta,
} from '../utils/dragUtils'
import type { CalendarEvent } from '../types'

const DRAG_THRESHOLD = 5

interface UseDragEventOptions {
  readonly event: CalendarEvent
  readonly slotHeight: number
  /** Day column width in px. Required for cross-day dragging. */
  readonly columnWidth?: number
  readonly onCommit: (updated: CalendarEvent) => void
}

export function useDragEvent({ event, slotHeight, columnWidth, onCommit }: UseDragEventOptions) {
  const setDrag = useSetAtom(dragAtom)
  const stateRef = useRef<{
    mode: 'move' | 'resize-top' | 'resize-bottom'
    startX: number
    startY: number
    started: boolean
  } | null>(null)

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const state = stateRef.current
      if (!state) return

      const deltaX = e.clientX - state.startX
      const deltaY = e.clientY - state.startY

      if (!state.started) {
        if (Math.abs(deltaY) < DRAG_THRESHOLD && Math.abs(deltaX) < DRAG_THRESHOLD) return
        state.started = true
        document.body.style.cursor =
          state.mode === 'move' ? 'grabbing' : state.mode === 'resize-top' ? 'n-resize' : 's-resize'
        document.body.style.userSelect = 'none'
      }

      const rawMinutes = pxToMinutes(deltaY, slotHeight)
      const snappedMinutes = snapToInterval(rawMinutes, 15)
      const dayOffset = columnWidth && state.mode === 'move'
        ? Math.round(deltaX / columnWidth)
        : 0

      const newTimes =
        state.mode === 'move'
          ? applyMoveDelta(event, snappedMinutes, dayOffset)
          : applyResizeDelta(event, state.mode === 'resize-top' ? 'top' : 'bottom', snappedMinutes)

      setDrag({
        eventId: event.id,
        mode: state.mode,
        originalEvent: event,
        currentStartTime: newTimes.startTime,
        currentEndTime: newTimes.endTime,
        pointerX: e.clientX,
        pointerY: e.clientY,
      })
    },
    [event, slotHeight, columnWidth, setDrag]
  )

  const handlePointerUp = useCallback(
    () => {
      const state = stateRef.current
      stateRef.current = null

      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerup', handlePointerUp)

      if (!state?.started) {
        setDrag(null)
        return
      }

      setDrag((current) => {
        if (current && current.eventId === event.id) {
          const hasChanged =
            current.currentStartTime.getTime() !== event.startTime.getTime() ||
            current.currentEndTime.getTime() !== event.endTime.getTime()

          if (hasChanged) {
            onCommit({
              ...event,
              startTime: current.currentStartTime,
              endTime: current.currentEndTime,
            })
          }
        }
        return null
      })
    },
    [event, handlePointerMove, setDrag, onCommit]
  )

  const startDrag = useCallback(
    (mode: 'move' | 'resize-top' | 'resize-bottom') =>
      (e: React.PointerEvent) => {
        e.stopPropagation()
        e.preventDefault()

        stateRef.current = {
          mode,
          startX: e.clientX,
          startY: e.clientY,
          started: false,
        }

        document.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('pointerup', handlePointerUp)
      },
    [handlePointerMove, handlePointerUp]
  )

  return {
    handleMoveStart: startDrag('move'),
    handleResizeTopStart: startDrag('resize-top'),
    handleResizeBottomStart: startDrag('resize-bottom'),
  }
}
