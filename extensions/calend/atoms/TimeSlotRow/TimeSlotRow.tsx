/**
 * TimeSlotRow コンポーネント
 * タイムラインの1時間分のスロットを描画する
 */

interface TimeSlotRowProps {
  /** 表示用の時刻ラベル（例: "09:00"） */
  readonly label: string
  /** アクティブ（選択中）状態 */
  readonly isActive?: boolean
  /** 現在の時間帯かどうか */
  readonly isCurrentHour?: boolean
  /** スロット高さ（px）。デフォルト: 56 */
  readonly slotHeight?: number
  /** ラベル列幅（px）。デフォルト: 64 */
  readonly labelWidth?: number
  /** クリック時のコールバック */
  readonly onClick?: () => void
  /** 追加の className */
  readonly className?: string
}

export function TimeSlotRow({
  label,
  isActive = false,
  isCurrentHour = false,
  slotHeight = 56,
  labelWidth = 64,
  onClick,
  className = '',
}: TimeSlotRowProps) {
  return (
    <div
      data-component="time-slot-row"
      className={`grid border-b border-border/50 cursor-pointer ${className}`}
      style={{
        gridTemplateColumns: `${labelWidth}px 1fr`,
        height: `${slotHeight}px`,
      }}
      onClick={onClick}
    >
      <div className="text-xs text-text-secondary py-2 pr-3 text-right select-none">
        {label}
      </div>

      <div
        className={`relative border-l border-border/50 hover:bg-surface-hover transition-colors ${
          isCurrentHour ? 'bg-primary/5' : ''
        } ${isActive ? 'bg-primary/5' : ''}`}
      >
        {isActive && (
          <div className="absolute inset-0 border-2 border-primary rounded-sm pointer-events-none z-20" />
        )}
        {isCurrentHour && (
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-500 z-5 pointer-events-none">
            <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </div>
        )}
      </div>
    </div>
  )
}

export type { TimeSlotRowProps }
