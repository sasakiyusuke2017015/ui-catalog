/**
 * EventCard コンポーネント
 * タイムライン（日・週）とコンパクト（月）の2モードで描画
 */
import { useRef, useEffect, useState, useCallback, type ReactNode } from 'react'
import { getStickyBottom } from '../../utils/dom'
import { IconLabel } from '../IconLabel/IconLabel'

interface EventCardBaseProps {
  readonly title: string
  readonly color: string
  readonly icon?: string
  readonly onDelete?: () => void
  readonly onClick?: (e: React.MouseEvent) => void
  readonly onPointerDown?: (e: React.PointerEvent) => void
  readonly onMouseEnter?: (e: React.MouseEvent) => void
  readonly onMouseLeave?: (e: React.MouseEvent) => void
  readonly isDragging?: boolean
  readonly isHovered?: boolean
  readonly children?: ReactNode
  readonly className?: string
}

interface TimelineProps extends EventCardBaseProps {
  readonly variant?: 'timeline'
  readonly startLabel: string
  readonly endLabel: string
  readonly top: number
  readonly height: number
  readonly left?: number
  readonly right?: number
  readonly leftPercent?: number
  readonly widthPercent?: number
  readonly zColumn?: number
}

interface CompactProps extends EventCardBaseProps {
  readonly variant: 'compact'
}

type EventCardProps = TimelineProps | CompactProps

function DeleteButton({ onDelete }: { readonly onDelete: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onDelete()
      }}
      className="absolute top-0 right-0.5 opacity-0 hover:opacity-100 text-white/80 hover:text-white transition-opacity text-xs"
      aria-label="Delete event"
    >
      &times;
    </button>
  )
}

function CompactEventCard({
  title,
  color,
  icon,
  onDelete,
  onClick,
  onPointerDown,
  onMouseEnter,
  onMouseLeave,
  isDragging = false,
  isHovered = false,
  children,
  className = '',
}: CompactProps) {
  return (
    <div
      data-component="event-card"
      className={`rounded-xl px-2 py-0.5 text-white text-[10px] font-medium truncate relative group transition-all flex items-center gap-0.5 ${
        isDragging ? 'cursor-grabbing' : 'cursor-pointer'
      } ${className}`}
      style={{
        backgroundColor: color,
        boxShadow: isHovered
          ? `0 4px 12px rgba(0,0,0,0.2), inset 0 0 0 1.5px rgba(255,255,255,0.6), 0 0 0 2px ${color}`
          : 'inset 0 0 0 1.5px rgba(255,255,255,0.45)',
        opacity: isDragging ? 0.3 : 1,
        filter: isDragging ? 'grayscale(0.3)' : isHovered ? 'brightness(1.15)' : 'none',
        transition: 'opacity 150ms ease, filter 150ms ease',
      }}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IconLabel icon={icon} iconSize={12}><span className="truncate">{title}</span></IconLabel>
      {onDelete && <DeleteButton onDelete={onDelete} />}
      {children}
    </div>
  )
}

/**
 * スクロール停止時にタイトルが見切れていたら
 * ぬるっとスライドして表示内に入るアニメーション
 */
function useStickyTitle(cardRef: React.RefObject<HTMLDivElement | null>) {
  const [offsetY, setOffsetY] = useState(0)
  const [animating, setAnimating] = useState(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const recalc = useCallback(() => {
    const el = cardRef.current
    if (!el) return

    const cardRect = el.getBoundingClientRect()
    const clipped = getStickyBottom() - cardRect.top

    if (clipped > 0 && clipped < cardRect.height - 20) {
      setOffsetY(clipped + 4)
    } else {
      setOffsetY(0)
    }
  }, [cardRef])

  useEffect(() => {
    const onScroll = () => {
      // スクロール停止後、アニメーション付きで新しい位置へ
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
      scrollTimerRef.current = setTimeout(() => {
        setAnimating(true)
        recalc()
      }, 150)
    }

    window.addEventListener('scroll', onScroll, { capture: true, passive: true })
    recalc()

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true })
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    }
  }, [recalc])

  return { offsetY, animating }
}

function TimelineEventCard({
  title,
  icon,
  startLabel,
  endLabel,
  top,
  height,
  color,
  left = 68,
  right = 4,
  leftPercent,
  widthPercent,
  zColumn = 0,
  onDelete,
  onClick,
  onPointerDown,
  onMouseEnter,
  onMouseLeave,
  isDragging = false,
  isHovered = false,
  children,
  className = '',
}: TimelineProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { offsetY, animating } = useStickyTitle(cardRef)

  const positionStyle = leftPercent !== undefined && widthPercent !== undefined
    ? {
        left: `calc(${leftPercent}% + 1px)`,
        width: `calc(${Math.min(widthPercent + 20, 100 - leftPercent)}% - 2px)`,
      }
    : {
        left: `${left}px`,
        right: `${right}px`,
      }

  return (
    <div
      ref={cardRef}
      data-component="event-card"
      className={`absolute rounded-xl px-2 py-1 text-white overflow-hidden transition-all group/card ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab hover:overflow-visible'
      } ${className}`}
      style={{
        backgroundColor: color,
        top: `${top + 1}px`,
        height: `${Math.max(height - 2, 14)}px`,
        zIndex: isDragging ? 20 : isHovered ? Math.min(10 + zColumn, 19) : Math.min(1 + zColumn, 9),
        pointerEvents: 'auto',
        opacity: isDragging ? 0.35 : isHovered ? 0.85 : 1,
        filter: isDragging ? 'grayscale(0.3)' : isHovered ? 'brightness(1.2)' : 'none',
        transition: 'opacity 150ms ease, filter 150ms ease',
        boxShadow: isHovered
          ? `0 4px 16px rgba(0,0,0,0.2), inset 0 0 0 1.5px rgba(255,255,255,0.6), 0 0 0 2px ${color}`
          : '0 1px 3px rgba(0,0,0,0.12), inset 0 0 0 1.5px rgba(255,255,255,0.45)',
        ...positionStyle,
      }}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: animating ? 'transform 0.3s ease-out' : 'none',
        }}
      >
        <IconLabel icon={icon} iconSize={14}>
          <span className="text-[11px] font-semibold leading-tight line-clamp-3 break-all group-hover/card:line-clamp-none group-hover/card:whitespace-normal">
            {title}
          </span>
        </IconLabel>
      </div>
      {onDelete && <DeleteButton onDelete={onDelete} />}
      {children}
    </div>
  )
}

export function EventCard(props: EventCardProps) {
  if (props.variant === 'compact') {
    return <CompactEventCard {...props} />
  }
  return <TimelineEventCard {...props} />
}

export type { EventCardProps, TimelineProps, CompactProps }
