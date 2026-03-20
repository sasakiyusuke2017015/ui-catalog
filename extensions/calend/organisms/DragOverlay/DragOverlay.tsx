/**
 * DragOverlay - ghost card that follows the cursor during drag operations.
 * Uses ref-based DOM manipulation + rAF to avoid React re-renders on every pointermove.
 */
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAtomValue } from 'jotai'
import { format } from 'date-fns'
import { dragAtom } from '../../state/calendar'
import type { DragState } from '../../state/calendar'
import styles from './DragOverlay.module.scss'

function GhostCard({ drag }: { readonly drag: DragState }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const [visible, setVisible] = useState(false)

  // Entry animation: show after mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  // Set initial position from dragAtom pointer coords
  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    el.style.transform = `translate(${drag.pointerX}px, ${drag.pointerY - 16}px)`
  }, []) // intentionally run once for initial position

  // Track pointer via document events + rAF
  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    const handlePointerMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY - 16}px)`
      })
    }

    document.addEventListener('pointermove', handlePointerMove)
    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const startLabel = format(drag.currentStartTime, 'HH:mm')
  const endLabel = format(drag.currentEndTime, 'HH:mm')

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div
        className={`${styles.ghost} ${visible ? styles.ghostVisible : ''}`}
        style={{ backgroundColor: `${drag.originalEvent.color}e6` }}
      >
        <div className={styles.ghostTitle}>{drag.originalEvent.title}</div>
        <div className={styles.ghostTime}>
          {startLabel} - {endLabel}
        </div>
      </div>
    </div>
  )
}

export function DragOverlay() {
  const drag = useAtomValue(dragAtom)

  if (!drag || drag.mode !== 'move') return null

  return createPortal(
    <div data-component="DragOverlay">
      <GhostCard drag={drag} />
    </div>,
    document.body
  )
}
