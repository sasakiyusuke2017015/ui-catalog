import type { FC } from 'react'
import { cn } from '../../utils/cn'
import styles from './DataTable.module.scss'

export interface DataTableProps {
  /** カラムヘッダー */
  headers: string[]
  /** 行データ（各行は headers と同じ順序の文字列配列） */
  rows: string[][]
  /** 追加クラス */
  className?: string
  /** 最大表示行数（省略時は全件） */
  maxRows?: number
}

const DataTable: FC<DataTableProps> = ({
  headers,
  rows,
  className,
  maxRows,
}) => {
  if (headers.length === 0) return null

  const displayRows = maxRows ? rows.slice(0, maxRows) : rows
  const hasMore = maxRows ? rows.length > maxRows : false

  return (
    <div className={cn(styles.wrapper, className)} data-component="data-table">
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className={styles.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row, ri) => (
            <tr key={ri} className={styles.tr}>
              {headers.map((_, ci) => (
                <td key={ci} className={styles.td}>
                  {row[ci] ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <div className={styles.moreIndicator}>
          他 {rows.length - maxRows!} 件
        </div>
      )}
    </div>
  )
}

export default DataTable
