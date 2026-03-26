/**
 * TagItem - タグアイテム
 *
 * ドラッグ可能なタグアイテム。
 * チェックボックス風の選択UI、カラードット表示。
 */

import { Icon } from '@ui-catalog/core/atoms'

/** タグの背景色マッピング */
const TAG_BG_COLORS: Record<string, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  teal: 'bg-teal-500',
  pink: 'bg-pink-500',
  indigo: 'bg-indigo-500',
  yellow: 'bg-yellow-500',
  gray: 'bg-gray-400',
}

export interface TagItemTag {
  id: string
  name: string
  color: string
}

export interface TagItemProps {
  /** タグデータ */
  tag: TagItemTag
  /** 選択状態 */
  selected?: boolean
  /** クリックハンドラ */
  onClick: () => void
  /** ダブルクリックハンドラ（名前編集開始など） */
  onDoubleClick?: () => void
  /** キーダウンハンドラ */
  onKeyDown?: (e: React.KeyboardEvent) => void
  /** 右クリックハンドラ */
  onContextMenu?: (e: React.MouseEvent) => void
  /** D&D: ドラッグ開始 */
  onDragStart?: (e: React.DragEvent) => void
  /** D&D: ドラッグオーバー */
  onDragOver?: (e: React.DragEvent) => void
  /** D&D: ドロップ */
  onDrop?: (e: React.DragEvent) => void
  /** 削除ハンドラ */
  onDelete?: () => void
  /** ドラッグ中状態 */
  isDragging?: boolean
  /** ドラッグオーバー状態 */
  isDragOver?: boolean
  /** チェックマークのアクセントカラー */
  checkColor?: 'blue' | 'purple'
}

export function TagItem({
  tag,
  selected = false,
  onClick,
  onDoubleClick,
  onKeyDown,
  onContextMenu,
  onDragStart,
  onDragOver,
  onDrop,
  onDelete,
  isDragging = false,
  isDragOver = false,
  checkColor = 'blue',
}: TagItemProps) {
  const checkBgClass = checkColor === 'purple' ? 'bg-purple-500 border-purple-500' : 'bg-blue-500 border-blue-500'

  return (
    <div data-component="TagItem" className="group relative">
      <button
        draggable
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        onContextMenu={onContextMenu}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`
          w-full flex items-center gap-2 px-2.5 py-1.5 pr-6 rounded-md
          transition-colors duration-150 cursor-pointer
          text-slate-300 hover:bg-slate-700
          ${isDragging ? 'opacity-50' : ''}
          ${isDragOver ? 'ring-2 ring-blue-400 ring-inset' : ''}
        `}
      >
        {/* チェックマーク */}
        <span className={`w-3.5 h-3.5 flex items-center justify-center shrink-0 rounded border transition-colors ${
          selected
            ? checkBgClass
            : 'border-slate-500'
        }`}>
          {selected && (
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        {/* カラードット */}
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${TAG_BG_COLORS[tag.color] ?? 'bg-gray-400'}`} />
        {/* タグ名 */}
        <span className="text-xs font-medium truncate">{tag.name}</span>
      </button>
      {/* 削除ボタン */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
            w-5 h-5 flex items-center justify-center text-slate-400 hover:text-red-400 transition-all"
        >
          <Icon name="trash" size={12} />
        </button>
      )}
    </div>
  )
}

/** 利用可能なタグ色オプション */
export const TAG_COLOR_OPTIONS = ['red', 'blue', 'green', 'orange', 'purple', 'teal', 'pink', 'indigo', 'yellow']

/** タグ背景色クラスを取得 */
export function getTagBgColor(color: string): string {
  return TAG_BG_COLORS[color] ?? 'bg-gray-400'
}
