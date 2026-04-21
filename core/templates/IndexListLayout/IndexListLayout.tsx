import styles from './IndexListLayout.module.scss'

export interface IndexListLayoutProps {
  readonly children: React.ReactNode
  readonly sidebar?: React.ReactNode
  readonly className?: string
}

/**
 * 記事一覧ページのレイアウト。
 * 中央カラム（main）+ 右サイドバー。レスポンシブで1カラムに畳む。
 */
export function IndexListLayout({ children, sidebar, className }: IndexListLayoutProps) {
  return (
    <div className={`${styles.root}${className ? ` ${className}` : ''}`}>
      <div className={styles.main}>{children}</div>
      {sidebar && <div className={styles.sidebar}>{sidebar}</div>}
    </div>
  )
}

export default IndexListLayout
