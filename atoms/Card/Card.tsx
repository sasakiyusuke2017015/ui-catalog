/**
 * Card コンポーネント
 *
 * 白背景のカードコンテナ
 * - onClick を指定するとクリッカブルなカードになる
 */

import { ReactNode, KeyboardEvent } from 'react'

import styles from './Card.module.scss'

export interface CardProps {
  children: ReactNode
  className?: string
  padding?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className = '',
  padding = true,
  onClick,
}: CardProps) {
  const cardClasses = [
    styles.card,
    padding && styles.padding,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      className={cardClasses}
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

export default Card
