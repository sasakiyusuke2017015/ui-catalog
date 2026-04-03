import { useRef } from 'react'
import Icon from '../../atoms/Icon'
import type { IconName } from '../../constants'
import styles from './ViewModeToggle.module.scss'
import { cn } from '../../utils'

export interface ViewModeOption<T extends string = string> {
  value: T
  label: string
  icon: IconName
}

export interface ViewModeToggleProps<T extends string = string> {
  value: T
  onChange: (value: T) => void
  options: ViewModeOption<T>[]
  showLabel?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'primary' | 'teal' | 'dark'
  className?: string
}

export const ViewModeToggle = <T extends string = string>({
  value,
  onChange,
  options,
  showLabel = false,
  size = 'medium',
  variant = 'default',
  className,
}: ViewModeToggleProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeIdx = options.findIndex((o) => o.value === value)
  const count = options.length

  // Slider position: percentage-based
  const sliderLeft = count > 0 ? `${(activeIdx / count) * 100}%` : '0%'
  const sliderWidth = count > 0 ? `${100 / count}%` : '100%'

  return (
    <div
      ref={containerRef}
      className={cn(styles.container, styles[variant], className)}
    >
      {/* Sliding background */}
      <div
        className={styles.slider}
        style={{ left: sliderLeft, width: sliderWidth }}
      />

      {/* Buttons */}
      {options.map((option) => {
        const isActive = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              styles.button,
              styles[size],
              isActive && styles.active,
            )}
            title={option.label}
          >
            <span className={styles.icon}>
              <Icon
                name={option.icon}
                size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
              />
            </span>
            {showLabel && option.label && (
              <span className={styles.label}>{option.label}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
