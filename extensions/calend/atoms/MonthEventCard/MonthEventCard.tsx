import { format } from 'date-fns'
import Icon from '@ui-catalog/core/atoms/Icon'
import type { IconName } from '@ui-catalog/core/constants'
import type { CalendarEvent } from '../../types'
import styles from './MonthEventCard.module.scss'

interface MonthEventCardProps {
  readonly event: CalendarEvent
  readonly isDragging: boolean
  readonly onClick: (e: React.MouseEvent) => void
  readonly onPointerDown: (e: React.PointerEvent) => void
}

/**
 * 月表示の時間指定イベントカード（ドット + 時刻 + タイトル）
 * 全日イベントは SpanningBar で表示される
 */
export function MonthEventCard({ event, isDragging, onClick, onPointerDown }: MonthEventCardProps) {
  return (
    <div
      data-component="event-card"
      className={styles.card}
      style={{
        opacity: isDragging ? 0.3 : 1,
        filter: isDragging ? 'grayscale(0.4)' : 'none',
        transition: 'opacity 150ms ease, filter 150ms ease',
      }}
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <Icon name={(event.icon ?? 'dot') as IconName} size={12} className="shrink-0" style={{ color: event.color }} />
      <span className={styles.time}>
        {format(event.startTime, 'HH:mm')} - {format(event.endTime, 'HH:mm')}
      </span>
      <span className={styles.title}>
        {event.title}
      </span>
    </div>
  )
}
