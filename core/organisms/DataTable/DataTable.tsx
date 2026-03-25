import { type FC, useState, useRef, useEffect } from 'react'
import { cn } from '../../utils/cn'
import styles from './DataTable.module.scss'

export interface DataTableProps {
  /** 全カラムヘッダー */
  headers: string[]
  /** 行データ（各行は headers と同じ順序の文字列配列） */
  rows: string[][]
  /** 表示するカラム名（省略時は全カラム） */
  visibleColumns?: string[]
  /** カラム表示変更時のコールバック */
  onColumnsChange?: (columns: string[]) => void
  /** 追加クラス */
  className?: string
  /** 最大表示行数（省略時は全件） */
  maxRows?: number
}

const DataTable: FC<DataTableProps> = ({
  headers,
  rows,
  visibleColumns,
  onColumnsChange,
  className,
  maxRows,
}) => {
  const [showColumnPicker, setShowColumnPicker] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  // 表示カラムのインデックスを計算
  const activeColumns = visibleColumns ?? headers
  const columnIndices = activeColumns
    .map((col) => headers.indexOf(col))
    .filter((i) => i !== -1)

  // 外側クリックで閉じる
  useEffect(() => {
    if (!showColumnPicker) return
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowColumnPicker(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showColumnPicker])

  if (headers.length === 0) return null

  const displayRows = maxRows ? rows.slice(0, maxRows) : rows
  const hasMore = maxRows ? rows.length > maxRows : false

  function toggleColumn(col: string) {
    if (!onColumnsChange) return
    const current = visibleColumns ?? headers
    const next = current.includes(col)
      ? current.filter((c) => c !== col)
      : [...current, col]
    onColumnsChange(next)
  }

  return (
    <div className={cn(styles.wrapper, className)} data-component="data-table">
      {/* ツールバー */}
      <div className={styles.toolbar}>
        <span className={styles.rowCount}>{rows.length} 件</span>
        {onColumnsChange && (
          <div className={styles.pickerContainer} ref={pickerRef}>
            <button
              type="button"
              className={styles.gearButton}
              onClick={() => setShowColumnPicker((v) => !v)}
              title="表示カラム設定"
            >
              ⚙
            </button>
            {showColumnPicker && (
              <div className={styles.picker}>
                {headers.map((h) => (
                  <label key={h} className={styles.pickerItem}>
                    <input
                      type="checkbox"
                      checked={activeColumns.includes(h)}
                      onChange={() => toggleColumn(h)}
                    />
                    <span>{h}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* テーブル */}
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columnIndices.map((ci) => (
                <th key={ci} className={styles.th}>{headers[ci]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row, ri) => (
              <tr key={ri} className={styles.tr}>
                {columnIndices.map((ci) => (
                  <td key={ci} className={styles.td}>
                    {row[ci] ?? ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hasMore && (
        <div className={styles.moreIndicator}>
          他 {rows.length - maxRows!} 件
        </div>
      )}
    </div>
  )
}

export default DataTable
