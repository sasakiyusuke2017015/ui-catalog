/**
 * ContextMenu - 右クリックコンテキストメニュー
 *
 * 任意の位置に表示できる汎用コンテキストメニュー。
 * クリックまたはEscapeで閉じる。
 */

import { useEffect } from 'react'

export interface ContextMenuItem {
  label: string
  onClick: () => void
  variant?: 'default' | 'danger'
}

export interface ContextMenuProps {
  /** メニューの表示位置 */
  position: { x: number; y: number }
  /** メニュー項目 */
  items: ContextMenuItem[]
  /** メニューを閉じるコールバック */
  onClose: () => void
}

export function ContextMenu({ position, items, onClose }: ContextMenuProps) {
  useEffect(() => {
    const handleClick = () => onClose()
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      data-component="ContextMenu"
      className="fixed z-50 bg-slate-700 border border-slate-600 rounded-md shadow-lg py-1 min-w-[120px]"
      style={{ left: position.x, top: position.y }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => {
            item.onClick()
            onClose()
          }}
          className={`
            w-full text-left px-3 py-1.5 text-xs transition-colors
            ${item.variant === 'danger'
              ? 'text-red-400 hover:bg-red-500/20'
              : 'text-slate-200 hover:bg-slate-600'
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
