/**
 * NavItem - サイドバーナビゲーションアイテム
 *
 * ダークテーマのサイドバー用ナビゲーションボタン。
 * D&D対応、選択状態、アクセントカラー対応。
 */

import { Icon } from '@ui-catalog/core/atoms'
import type { IconName } from '@ui-catalog/core/constants'

export interface NavItemProps {
  /** 表示ラベル */
  label: string
  /** アイコン名 */
  iconName: IconName
  /** 選択状態 */
  selected?: boolean
  /** クリックハンドラ */
  onClick: () => void
  /** 右クリックハンドラ */
  onContextMenu?: (e: React.MouseEvent) => void
  /** D&D: ドラッグオーバー */
  onDragOver?: (e: React.DragEvent) => void
  /** D&D: ドロップ */
  onDrop?: (e: React.DragEvent) => void
  /** D&D: ドラッグリーブ */
  onDragLeave?: (e: React.DragEvent) => void
  /** ミーティングのドロップターゲット状態 */
  isMeetingDropTarget?: boolean
  /** プロジェクトのドロップターゲット状態 */
  isProjectDropTarget?: boolean
  /** アクセントカラー（選択時の左ボーダー色） */
  accentColor?: 'blue' | 'yellow' | 'orange' | 'green' | 'gray' | 'purple'
  /** バッジ（件数表示など） */
  badge?: number | string
  /** 追加のクラス名 */
  className?: string
}

const accentColorClasses: Record<string, { border: string; text: string }> = {
  blue: { border: 'border-l-blue-400', text: 'text-blue-400' },
  yellow: { border: 'border-l-yellow-400', text: 'text-yellow-400' },
  orange: { border: 'border-l-orange-400', text: 'text-orange-400' },
  green: { border: 'border-l-green-400', text: 'text-green-400' },
  gray: { border: 'border-l-gray-400', text: 'text-gray-400' },
  purple: { border: 'border-l-purple-400', text: 'text-purple-400' },
}

export function NavItem({
  label,
  iconName,
  selected = false,
  onClick,
  onContextMenu,
  onDragOver,
  onDrop,
  onDragLeave,
  isMeetingDropTarget = false,
  isProjectDropTarget = false,
  accentColor = 'blue',
  badge,
  className = '',
}: NavItemProps) {
  const colors = accentColorClasses[accentColor] || accentColorClasses.blue

  return (
    <button
      data-component="NavItem"
      onClick={onClick}
      onContextMenu={onContextMenu}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      className={`
        w-full flex items-center gap-2 px-2.5 py-1.5 rounded-r-md
        transition-colors duration-150
        ${selected
          ? `border-l-2 ${colors.border} bg-slate-700/50 ${colors.text}`
          : 'border-l-2 border-l-transparent text-slate-300 hover:bg-slate-700'
        }
        ${isMeetingDropTarget ? 'ring-2 ring-green-400 ring-inset bg-slate-600' : ''}
        ${isProjectDropTarget ? 'ring-2 ring-blue-400 ring-inset bg-slate-600' : ''}
        ${className}
      `}
    >
      <Icon name={iconName} size={14} className="shrink-0" />
      <span className="text-xs font-medium truncate flex-1 text-left">{label}</span>
      {badge !== undefined && badge !== 0 && (
        <span className="text-slate-400 text-[10px]">{badge}</span>
      )}
    </button>
  )
}
