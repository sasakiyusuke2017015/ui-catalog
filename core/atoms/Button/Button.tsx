import { FC, ReactNode, ButtonHTMLAttributes, useState } from 'react'

import { type IconName } from '../../constants'
import { useOperationLog } from '../../../infra/devtools'
import Icon from '../../atoms/Icon'

import styles from './Button.module.scss'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'default'
  | 'success'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
  className?: string
  leftIcon?: IconName
  rightIcon?: IconName
  iconSize?: number
  enableHopEffect?: boolean
  enableShimmer?: boolean
  triggerShake?: boolean
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = '',
  leftIcon,
  rightIcon,
  iconSize,
  enableHopEffect = false,
  enableShimmer = true,
  triggerShake: _triggerShake = false,
  borderRadius = '0.375rem',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const log = useOperationLog('Button')

  // バリアント別の内側陰影色
  const hoverShadowColors: Record<ButtonVariant, string> = {
    primary: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
    secondary: 'inset 0 0 0 3px rgba(107, 114, 128, 0.4)',
    outline: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
    danger: 'inset 0 0 0 3px rgba(239, 68, 68, 0.4)',
    default: 'inset 0 0 0 3px rgba(156, 163, 175, 0.4)',
    success: 'inset 0 0 0 3px rgba(34, 197, 94, 0.4)',
  }

  // アイコンサイズを決定
  const getIconSize = () => {
    if (iconSize) return iconSize
    switch (size) {
      case 'small':
        return 14
      case 'medium':
        return 16
      case 'large':
        return 18
      default:
        return 16
    }
  }

  // クラス名を構築
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    enableShimmer && styles.shimmer,
    enableHopEffect && styles.hopEffect,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // カスタムスタイル
  const customStyle: React.CSSProperties = {
    ...(!disabled && isHovered ? { boxShadow: hoverShadowColors[variant] } : {}),
    borderRadius,
  }

  const buttonElement = (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={enableHopEffect ? undefined : disabled ? undefined : () => {
        log('click', { variant, size, disabled })
        onClick?.()
      }}
      data-component="button"
      data-variant={variant}
      data-size={size}
      {...props}
    >
      <span className={styles.content}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={getIconSize()}
            className={styles.icon}
            hover="pop"
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            name={rightIcon}
            size={getIconSize()}
            className={styles.icon}
            hover="pop"
          />
        )}
      </span>
    </button>
  )

  // ホップ効果有効時はラッパーで囲んでクリック領域を確保
  if (enableHopEffect) {
    return (
      <div
        className={styles.hopWrapper}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? undefined : () => {
          log('click', { variant, size, disabled, hopEffect: true })
          onClick?.()
        }}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            onClick?.()
          }
        }}
      >
        <div className={styles.hopShadow} style={{ borderRadius }} />
        {buttonElement}
      </div>
    )
  }

  return buttonElement
}

export default Button
