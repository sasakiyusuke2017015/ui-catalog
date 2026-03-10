import type { ReactNode } from 'react'

import { cn } from '../utils/cn'

export interface AppShellProps {
  /** ヘッダースロット */
  header: ReactNode
  /** サイドバースロット */
  sidebar: ReactNode
  /** ステータスバースロット（オプション） */
  statusBar?: ReactNode
  /** メインコンテンツ */
  children: ReactNode
  /** 追加の className */
  className?: string
}

/**
 * アプリケーションシェルレイアウト
 *
 * header + sidebar + main + statusBar の4スロット構成。
 * デスクトップアプリやダッシュボードの基本レイアウトとして使用。
 */
export function AppShell({
  header,
  sidebar,
  statusBar,
  children,
  className,
}: AppShellProps) {
  return (
    <div
      className={cn('flex flex-col h-screen bg-(--color-bg) text-(--color-text)', className)}
      data-component="AppShell"
    >
      {header}
      <div className="flex flex-1 overflow-hidden">
        {sidebar}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      {statusBar}
    </div>
  )
}

export default AppShell
