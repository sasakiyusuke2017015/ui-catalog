import { useState } from 'react'
import { cn } from '../../utils/cn'

export interface CheckboxItem {
  id: string
  label: string
  description?: string
}

export interface ModalCheckboxListProps {
  isOpen: boolean
  title: string
  description?: string
  items: CheckboxItem[]
  onConfirm: (selectedIds: string[]) => void
  onCancel: () => void
  confirmText?: string
  cancelText?: string
  requireSelection?: boolean
  className?: string
}

export default function ModalCheckboxList({
  isOpen,
  title,
  description,
  items,
  onConfirm,
  onCancel,
  confirmText = '確認',
  cancelText = 'キャンセル',
  requireSelection = false,
  className,
}: ModalCheckboxListProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  if (!isOpen) return null

  const handleToggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleSelectAll = () => {
    if (selected.size === items.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(items.map((item) => item.id)))
    }
  }

  const handleConfirm = () => {
    onConfirm([...selected])
    setSelected(new Set())
  }

  const handleCancel = () => {
    setSelected(new Set())
    onCancel()
  }

  const isConfirmDisabled = requireSelection && selected.size === 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleCancel}
      data-component="modal-checkbox-list"
    >
      <div
        className={cn(
          'bg-(--color-bg-surface) rounded-[12px] border border-(--color-border) shadow-xl',
          'w-[400px] max-h-[80vh] flex flex-col',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-(--color-border)">
          <h2 className="text-[15px] font-semibold text-(--color-text)">{title}</h2>
          {description && (
            <p className="mt-1 text-[12px] text-(--color-text-muted)">{description}</p>
          )}
        </div>

        {/* Select all */}
        <div className="px-5 py-2 border-b border-(--color-border)/50">
          <label className="flex items-center gap-2 cursor-pointer text-[12px] text-(--color-text-muted)">
            <input
              type="checkbox"
              checked={selected.size === items.length}
              onChange={handleSelectAll}
              className="w-3.5 h-3.5 rounded"
            />
            すべて選択
          </label>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-2">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-2.5 py-2 cursor-pointer hover:bg-(--color-hover-bg) rounded px-1 -mx-1"
            >
              <input
                type="checkbox"
                checked={selected.has(item.id)}
                onChange={() => handleToggle(item.id)}
                className="w-4 h-4 rounded mt-0.5 shrink-0"
              />
              <div>
                <span className="text-[13px] text-(--color-text)">{item.label}</span>
                {item.description && (
                  <p className="text-[11px] text-(--color-text-muted) mt-0.5">{item.description}</p>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-(--color-border)">
          <button
            type="button"
            className="px-3 py-1.5 text-[13px] rounded-[6px] border border-(--color-border) text-(--color-text) hover:bg-(--color-hover-bg) cursor-pointer"
            onClick={handleCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={cn(
              'px-3 py-1.5 text-[13px] rounded-[6px] font-medium cursor-pointer',
              isConfirmDisabled
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-(--color-accent) text-white hover:opacity-90',
            )}
            disabled={isConfirmDisabled}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
