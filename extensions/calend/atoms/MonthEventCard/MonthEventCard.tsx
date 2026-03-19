import { format } from 'date-fns'
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
      style={{ opacity: isDragging ? 0.4 : 1 }}
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <div className={styles.dot} style={{ backgroundColor: event.color }} />
      <span className={styles.time}>
        {format(event.startTime, 'HH:mm')} - {format(event.endTime, 'HH:mm')}
      </span>
      <span className={styles.title}>
        {event.title}
      </span>
    </div>
  )
}
