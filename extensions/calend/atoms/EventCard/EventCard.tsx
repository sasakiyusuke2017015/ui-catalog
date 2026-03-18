/**
 * EventCard コンポーネント
 * 時間ベースのイベントをタイムライン上に絶対配置で表示する
 */

interface EventCardProps {
  /** イベントのタイトル */
  readonly title: string
  /** 表示用の開始時刻文字列（例: "09:00"） */
  readonly startLabel: string
  /** 表示用の終了時刻文字列（例: "10:00"） */
  readonly endLabel: string
  /** 上端からのオフセット（px） */
  readonly top: number
  /** カードの高さ（px） */
  readonly height: number
  /** 背景色 */
  readonly color: string
  /** 左端からのオフセット（px）。デフォルト: 68 */
  readonly left?: number
  /** 右端からのオフセット（px）。デフォルト: 4 */
  readonly right?: number
  /** 削除ボタン押下時のコールバック */
  readonly onDelete?: () => void
  /** クリック時のコールバック */
  readonly onClick?: () => void
  /** 追加の className */
  readonly className?: string
}

export function EventCard({
  title,
  startLabel,
  endLabel,
  top,
  height,
  color,
  left = 68,
  right = 4,
  onDelete,
  onClick,
  className = '',
}: EventCardProps) {
  return (
    <div
      data-component="event-card"
      className={`absolute rounded-md px-2 py-1 text-xs text-white shadow-sm cursor-pointer overflow-hidden hover:shadow-md transition-shadow z-10 ${className}`}
      style={{
        backgroundColor: color,
        top: `${top}px`,
        height: `${height}px`,
        left: `${left}px`,
        right: `${right}px`,
      }}
      title={`${title}\n${startLabel} - ${endLabel}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-1">
        <span className="font-semibold truncate">{title}</span>
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onDelete()
            }}
            className="shrink-0 opacity-0 hover:opacity-100 text-white/80 hover:text-white transition-opacity"
            aria-label="Delete event"
          >
            &times;
          </button>
        )}
      </div>
      <div className="text-white/80 text-[10px]">
        {startLabel} - {endLabel}
      </div>
    </div>
  )
}

export type { EventCardProps }
