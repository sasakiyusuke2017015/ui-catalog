import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface DiffEntry {
  path: string
  kind: string
  value?: unknown
  old?: unknown
  new?: unknown
}

export interface DiffSummary {
  added: number
  removed: number
  changed: number
  total: number
}

export interface DiffViewerProps {
  isOpen: boolean
  entries: DiffEntry[]
  summary: DiffSummary
  leftLabel: string
  rightLabel: string
  onClose: () => void
  title?: string
  className?: string
}

function kindBadge(kind: string): ReactNode {
  const styles: Record<string, string> = {
    added: 'bg-green-100 text-green-800',
    removed: 'bg-red-100 text-red-800',
    changed: 'bg-amber-100 text-amber-800',
  }
  return (
    <span className={cn('px-1.5 py-0.5 rounded text-[10px] font-medium', styles[kind] ?? 'bg-gray-100 text-gray-600')}>
      {kind}
    </span>
  )
}

function formatValue(value: unknown): string {
  if (value === undefined || value === null) return ''
  if (typeof value === 'string') return value
  return JSON.stringify(value, null, 2)
}

export default function DiffViewer({
  isOpen,
  entries,
  summary,
  leftLabel,
  rightLabel,
  onClose,
  title = '差分ビューア',
  className,
}: DiffViewerProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      data-component="diff-viewer"
    >
      <div
        className={cn(
          'bg-(--color-bg-surface) rounded-[12px] border border-(--color-border) shadow-xl',
          'w-[90vw] max-w-[900px] max-h-[80vh] flex flex-col',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-(--color-border)">
          <div className="flex items-center gap-3">
            <h2 className="text-[15px] font-semibold text-(--color-text)">{title}</h2>
            <div className="flex gap-2 text-[11px]">
              <span className="text-green-600">+{summary.added}</span>
              <span className="text-red-600">-{summary.removed}</span>
              <span className="text-amber-600">~{summary.changed}</span>
            </div>
          </div>
          <button
            type="button"
            className="text-(--color-text-muted) hover:text-(--color-text) cursor-pointer text-[18px] leading-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 px-5 py-2 border-b border-(--color-border) text-[11px] font-medium text-(--color-text-muted)">
          <span>パス</span>
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>

        {/* Entries */}
        <div className="flex-1 overflow-y-auto">
          {entries.length === 0 ? (
            <div className="flex items-center justify-center py-12 text-[13px] text-(--color-text-muted)">
              差分はありません
            </div>
          ) : (
            entries.map((entry, i) => (
              <div
                key={i}
                className={cn(
                  'grid grid-cols-[1fr_1fr_1fr] gap-2 px-5 py-2 text-[12px] border-b border-(--color-border)/50',
                  i % 2 === 0 ? 'bg-transparent' : 'bg-(--color-bg)',
                )}
              >
                <div className="flex items-start gap-1.5">
                  {kindBadge(entry.kind)}
                  <span className="font-mono text-(--color-text) break-all">{entry.path}</span>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-(--color-text-muted) overflow-hidden">
                  {entry.kind === 'added' ? '' : formatValue(entry.old ?? entry.value)}
                </pre>
                <pre className="whitespace-pre-wrap font-mono text-(--color-text-muted) overflow-hidden">
                  {entry.kind === 'removed' ? '' : formatValue(entry.new ?? entry.value)}
                </pre>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
