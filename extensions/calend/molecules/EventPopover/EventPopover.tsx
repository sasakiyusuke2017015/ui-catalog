import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import type { HoveredEvent } from '../../state/calendar'

interface EventPopoverProps {
  readonly hovered: HoveredEvent
}

type Placement = 'right' | 'left' | 'bottom' | 'top'

const POP_W = 280
const POP_H_EST = 180
const ARROW_DEPTH = 12
const ARROW_HALF = 6
const GAP = ARROW_DEPTH - 4

function getPlacement(rect: HoveredEvent['rect']): Placement {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const headerEl = document.querySelector('header')
  const minTop = (headerEl?.getBoundingClientRect().bottom ?? 60) + 4

  // Can the popover fit to the right AND vertically overlap with the card?
  const canRight = rect.right + GAP + POP_W < vw
  const canLeft = rect.left - GAP - POP_W > 0

  if (canRight || canLeft) {
    // Check: would the popover's vertical range overlap with the card?
    const visTop = Math.max(rect.top, minTop)
    const popTop = Math.max(minTop, visTop)
    const popBottom = popTop + POP_H_EST
    // If the card's visible top is within the popover's range, side placement works
    if (visTop < popBottom && rect.bottom > popTop) {
      return canRight ? 'right' : 'left'
    }
  }

  // Card is too low/high for side placement — use top or bottom
  if (rect.top - POP_H_EST > minTop) return 'top'
  if (rect.bottom + POP_H_EST < vh) return 'bottom'
  return canRight ? 'right' : 'top'
}

function computeLayout(rect: HoveredEvent['rect'], placement: Placement) {
  const cardCenterX = (rect.left + rect.right) / 2
  const vh = window.innerHeight

  // Find the bottom of the topmost sticky area (header + week header + allDay banner)
  const stickyEls = document.querySelectorAll('header, [class*="sticky"]')
  let minTop = 60
  for (const el of stickyEls) {
    const b = el.getBoundingClientRect().bottom
    if (b > minTop) minTop = b
  }
  minTop += 4

  // Clamp card rect to visible content area
  const visTop = Math.max(rect.top, minTop)
  const visBottom = Math.min(rect.bottom, vh)
  const visH = Math.max(visBottom - visTop, 20)

  switch (placement) {
    case 'right': {
      const popLeft = rect.right + GAP
      const anchor = visTop + visH * 0.2
      const popTop = Math.max(minTop, Math.min(anchor - 20, vh - POP_H_EST - 8))
      const arrowTop = Math.max(14, Math.min(anchor - popTop, POP_H_EST - 30))
      return { popLeft, popTop, popBottom: undefined, arrowTop, arrowLeft: undefined }
    }
    case 'left': {
      const popLeft = rect.left - POP_W - GAP
      const anchor = visTop + visH * 0.2
      const popTop = Math.max(minTop, Math.min(anchor - 20, vh - POP_H_EST - 8))
      const arrowTop = Math.max(14, Math.min(anchor - popTop, POP_H_EST - 30))
      return { popLeft, popTop, popBottom: undefined, arrowTop, arrowLeft: undefined }
    }
    case 'bottom': {
      const popLeft = Math.max(8, Math.min(cardCenterX - POP_W / 2, window.innerWidth - POP_W - 8))
      const popTop = rect.bottom + GAP
      const arrowLeft = Math.max(16, Math.min(cardCenterX - popLeft, POP_W - 32))
      return { popLeft, popTop, popBottom: undefined, arrowTop: undefined, arrowLeft }
    }
    case 'top': {
      const popLeft = Math.max(8, Math.min(cardCenterX - POP_W / 2, window.innerWidth - POP_W - 8))
      // Use bottom-anchored: popover bottom = card top - (GAP - ARROW_DEPTH) so arrow tip touches card
      const popBottom = vh - rect.top + (GAP - ARROW_DEPTH)
      const arrowLeft = Math.max(16, Math.min(cardCenterX - popLeft, POP_W - 32))
      return { popLeft, popTop: undefined, popBottom, arrowTop: undefined, arrowLeft}

    }
  }
}

function Arrow({ placement, arrowTop, arrowLeft }: {
  placement: Placement
  arrowTop?: number
  arrowLeft?: number
}) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 0,
    height: 0,
  }

  switch (placement) {
    case 'right':
      return <div style={{
        ...base,
        left: -ARROW_DEPTH,
        top: `${arrowTop}px`,
        borderTop: `${ARROW_HALF}px solid transparent`,
        borderBottom: `${ARROW_HALF}px solid transparent`,
        borderRight: `${ARROW_DEPTH}px solid #e2e5eb`,
        filter: 'drop-shadow(-2px 0 2px rgba(0,0,0,0.06))',
      }} />
    case 'left':
      return <div style={{
        ...base,
        right: -ARROW_DEPTH,
        top: `${arrowTop}px`,
        borderTop: `${ARROW_HALF}px solid transparent`,
        borderBottom: `${ARROW_HALF}px solid transparent`,
        borderLeft: `${ARROW_DEPTH}px solid #e2e5eb`,
        filter: 'drop-shadow(2px 0 2px rgba(0,0,0,0.06))',
      }} />
    case 'bottom':
      return <div style={{
        ...base,
        top: -ARROW_DEPTH,
        left: `${arrowLeft}px`,
        borderLeft: `${ARROW_HALF}px solid transparent`,
        borderRight: `${ARROW_HALF}px solid transparent`,
        borderBottom: `${ARROW_DEPTH}px solid #e2e5eb`,
        filter: 'drop-shadow(0 -2px 2px rgba(0,0,0,0.06))',
      }} />
    case 'top':
      return <div style={{
        ...base,
        bottom: -ARROW_DEPTH,
        left: `${arrowLeft}px`,
        borderLeft: `${ARROW_HALF}px solid transparent`,
        borderRight: `${ARROW_HALF}px solid transparent`,
        borderTop: `${ARROW_DEPTH}px solid #e2e5eb`,
        filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.06))',
      }} />
  }
}

export function EventPopover({ hovered }: EventPopoverProps) {
  const { event, rect } = hovered

  const startDate = format(event.startTime, 'M月d日(E)', { locale: ja })
  const startTime = format(event.startTime, 'HH:mm')
  const endTime = format(event.endTime, 'HH:mm')
  const endDate = format(event.endTime, 'M月d日(E)', { locale: ja })
  const sameDay = event.startTime.toDateString() === event.endTime.toDateString()

  const placement = getPlacement(rect)
  const layout = computeLayout(rect, placement)

  const stickyEls2 = document.querySelectorAll('header, [class*="sticky"]')
  let minTopForRender = 60
  for (const el of stickyEls2) {
    const b = el.getBoundingClientRect().bottom
    if (b > minTopForRender) minTopForRender = b
  }
  minTopForRender += 4
  const vh = window.innerHeight

  const posStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${layout.popLeft}px`,
    width: `${POP_W}px`,
    zIndex: 28,
    pointerEvents: 'none',
    animation: 'popover-in 0.15s ease-out',
  }

  if (layout.popBottom !== undefined) {
    posStyle.bottom = `${layout.popBottom}px`
    // Don't let it extend above the header
    const maxH = vh - layout.popBottom - minTopForRender
    if (maxH > 0) {
      posStyle.maxHeight = `${maxH}px`
      posStyle.overflow = 'hidden'
    }
  } else if (layout.popTop !== undefined) {
    posStyle.top = `${Math.max(layout.popTop, minTopForRender)}px`
  }

  return (
    <div style={posStyle}>
      <Arrow placement={placement} arrowTop={layout.arrowTop} arrowLeft={layout.arrowLeft} />

      <div style={{
        background: '#e2e5eb',
        borderRadius: '14px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}>
        <div style={{ height: '4px', background: event.color }} />

        <div style={{ padding: '14px 18px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', lineHeight: 1.3, marginBottom: '10px' }}>
            {event.title}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '3px', background: event.color, flexShrink: 0 }} />
            <div style={{ fontSize: '13px', color: '#64748b' }}>
              {event.allDay ? (
                sameDay ? `${startDate} 終日` : `${startDate} - ${endDate}`
              ) : (
                sameDay
                  ? `${startDate} ${startTime} - ${endTime}`
                  : `${startDate} ${startTime} - ${endDate} ${endTime}`
              )}
            </div>
          </div>

          {event.description && (
            <div style={{
              fontSize: '13px',
              color: '#475569',
              lineHeight: 1.5,
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid #f1f5f9',
              whiteSpace: 'pre-wrap',
              maxHeight: '80px',
              overflow: 'auto',
            }}>
              {event.description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
