/**
 * MemberCard - 汎用メンバーカードコンポーネント
 *
 * スコア、ステータス、日付などを表示するカード
 * データは props で注入し、ロジックは apps 側で持つ
 */
import { FC, memo } from 'react'

import { Badge } from '../../../core/atoms/Badge'
import { Icon } from '../../../core/atoms'
import { useOperationLog } from '../../../infra/devtools'
import ScoreBadge from '../ScoreBadge/ScoreBadge'

import type { MemberCardProps, ScoreItem as ScoreItemType, StatusItem } from './types'

/**
 * スコア表示用コンポーネント
 */
const ScoreItemDisplay: FC<{ item: ScoreItemType }> = ({ item }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-fluid-xs text-gray-500">{item.label}</span>
    {item.value === null ? (
      <span className="text-gray-400 text-fluid-sm">-</span>
    ) : (
      <ScoreBadge score={item.value} size="small" />
    )}
  </div>
)

/**
 * ステータスバッジ表示用コンポーネント
 */
const StatusBadgeDisplay: FC<{ item: StatusItem }> = ({ item }) => {
  const def = item.value ? item.definitions[item.value] : null
  return (
    <div className="flex items-center gap-1">
      <span className="text-fluid-xs text-gray-500">{item.label}:</span>
      <Badge
        value={def?.shortLabel || item.defaultLabel}
        styleVariant="solid"
        color={def?.color || 'gray'}
        size="small"
      />
    </div>
  )
}

/**
 * 選択インジケーター（チェックマーク）
 */
const SelectionIndicator: FC = () => (
  <div
    data-testid="selection-indicator"
    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-sm"
  >
    <Icon
      name="check"
      size={14}
      stroke="white"
      strokeWidth={3}
      fill="none"
    />
  </div>
)

/**
 * 汎用メンバーカードコンポーネント
 */
const MemberCard: FC<MemberCardProps> = memo(({
  data,
  selected = false,
  onSelectionChange,
  onClick,
  cardRadius = '0.5rem',
  cellRadius = '0.375rem',
}) => {
  const log = useOperationLog('MemberCard')

  const handleCardClick = () => {
    log('click', { id: data.id, name: data.name, selected: !selected })
    if (onSelectionChange) {
      onSelectionChange(!selected)
    }
    onClick?.()
  }

  // カードのスタイルを決定
  const getCardStyle = () => {
    if (data.isAlert) {
      return selected
        ? 'border-2 border-red-400 bg-red-50'
        : 'border border-red-300 bg-red-50/50 hover:border-red-400'
    }
    return selected
      ? 'border-2 border-blue-500 bg-blue-50'
      : 'border border-gray-100 hover:border-gray-200'
  }

  return (
    <div
      data-component="member-card"
      data-testid="member-card"
      className={`
        relative bg-white p-4 shadow-sm transition-all duration-200
        cursor-pointer hover:shadow-md hover:-translate-y-1
        ${getCardStyle()}
      `}
      style={{ borderRadius: cardRadius }}
      onClick={handleCardClick}
    >
      {/* 選択インジケーター（右上バッジ） */}
      {selected && <SelectionIndicator />}

      {/* ヘッダー: 名前 + サブ情報 */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-800 truncate">
            {data.name}
          </div>
          {data.subtitle && (
            <div className="text-fluid-xs text-gray-500 truncate">
              {data.subtitle}
            </div>
          )}
        </div>
      </div>

      {/* スコアセクション */}
      {data.scores && data.scores.length > 0 && (
        <div
          className={`grid gap-2 mb-3 py-2 bg-gray-50`}
          style={{
            borderRadius: cellRadius,
            gridTemplateColumns: `repeat(${data.scores.length}, minmax(0, 1fr))`,
          }}
        >
          {data.scores.map((item, idx) => (
            <ScoreItemDisplay key={idx} item={item} />
          ))}
        </div>
      )}

      {/* ステータスセクション */}
      {data.statuses && data.statuses.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {data.statuses.map((item, idx) => (
            <StatusBadgeDisplay key={idx} item={item} />
          ))}
        </div>
      )}

      {/* 日付セクション */}
      {data.dates && data.dates.length > 0 && (
        <div className="flex gap-4 text-fluid-xs text-gray-500 border-t border-gray-100 pt-2">
          {data.dates.map((item, idx) => (
            <span key={idx}>{item.label}: {item.value || '-'}</span>
          ))}
        </div>
      )}

      {/* 追加バッジ・メモ */}
      {(data.badges?.length || data.memo) && (
        <div className="mt-2 pt-2 border-t border-gray-100 text-fluid-xs text-gray-500">
          {data.badges?.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-1 mb-1">
              <span>{badge.label}:</span>
              <Badge
                value={badge.value}
                styleVariant="solid"
                color={badge.color}
                size="small"
              />
            </div>
          ))}
          {data.memo && (
            <div className="truncate" title={data.memo}>
              メモ: {data.memo.length > 30 ? `${data.memo.slice(0, 30)}...` : data.memo}
            </div>
          )}
        </div>
      )}
    </div>
  )
})

MemberCard.displayName = 'MemberCard'

export default MemberCard
