/**
 * Card コンポーネント
 *
 * 白背景のカードコンテナ
 * - onClick を指定するとクリッカブルなカードになる
 */

import { ReactNode, KeyboardEvent } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  padding?: boolean
  onClick?: () => void
}

export function Card({ children, className = '', padding = true, onClick }: CardProps) {
  const paddingClass = padding ? 'p-3 sm:p-6' : ''
  const clickableClass = onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      className={`bg-white shadow rounded-lg ${paddingClass} ${clickableClass} ${className}`}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      data-component="card"
    >
      {children}
    </div>
  )
}
