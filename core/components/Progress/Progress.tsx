import { FC } from 'react'

import styles from './Progress.module.scss'

export type ProgressSize = 'small' | 'medium' | 'large'
export type ProgressColor = 'blue' | 'green' | 'red' | 'yellow' | 'gray' | 'orange'

export interface ProgressProps {
  value: number
  max?: number
  size?: ProgressSize
  color?: ProgressColor
  className?: string
  showLabel?: boolean
}

const Progress: FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'medium',
  color = 'blue',
  className = '',
  showLabel = false,
}) => {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100)
  const capitalColor = color.charAt(0).toUpperCase() + color.slice(1)

  const trackClasses = [
    styles.track,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const indicatorClasses = [
    styles.indicator,
    styles[`color${capitalColor}`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={trackClasses}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      data-component="progress"
    >
      <div
        className={indicatorClasses}
        style={{ width: `${percent}%` }}
      />
      {showLabel && (
        <span className={styles.label}>{Math.round(percent)}%</span>
      )}
    </div>
  )
}

export default Progress
