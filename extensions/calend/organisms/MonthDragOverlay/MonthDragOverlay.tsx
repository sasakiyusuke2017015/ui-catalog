import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from '@ui-catalog/core/atoms/Icon'
import type { IconName } from '@ui-catalog/core/constants'
import type { CalendarEvent } from '../../types'
import styles from './MonthDragOverlay.module.scss'

interface MonthDragOverlayProps {
  readonly event: CalendarEvent | null
  readonly initialPointer: { x: number; y: number } | null
}

export function MonthDragOverlay({ event, initialPointer }: MonthDragOverlayProps) {
  const ghostRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number>(0)

  // Set initial position once on mount
  useEffect(() => {
    if (!ghostRef.current || !initialPointer) return
    ghostRef.current.style.transform = `translate(${initialPointer.x}px, ${initialPointer.y - 12}px)`
  }, []) // intentionally run once for initial position

  // Track pointer via document events + rAF (no React state re-renders)
  useEffect(() => {
    if (!event || !initialPointer) return

    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!ghostRef.current) return
        ghostRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY - 12}px)`
      })
    }

    document.addEventListener('pointermove', handleMove)
    return () => {
      document.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [event, initialPointer !== null])

  if (!event || !initialPointer) return null

  return createPortal(
    <div ref={ghostRef} className={styles.overlay} data-component="MonthDragOverlay">
      <div
        className={styles.ghost}
        style={{ borderLeftColor: event.color }}
      >
        <Icon name={(event.icon ?? 'dot') as IconName} size={12} className="shrink-0" style={{ color: event.color }} />
        <span className={styles.title}>{event.title}</span>
      </div>
    </div>,
    document.body,
  )
}
