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
  | 'nav'
  | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  /** ローディング状態（スピナー表示） */
  loading?: boolean
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
  /** 選択状態（nav variant 用） */
  selected?: boolean
  /** フルワイド表示 */
  fullWidth?: boolean
  /** 左ボーダーのアクセントカラー（nav variant 用） */
  accentColor?: 'blue' | 'yellow' | 'orange' | 'green' | 'gray' | 'purple'
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  disabled = false,
  loading = false,
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
  selected = false,
  fullWidth = false,
  accentColor,
  ...props
}) => {
  const isDisabled = disabled || loading
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
    nav: 'none',
    ghost: 'none',
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
    enableShimmer && variant !== 'nav' && variant !== 'ghost' && styles.shimmer,
    enableHopEffect && styles.hopEffect,
    isDisabled && styles.disabled,
    selected && styles.selected,
    fullWidth && styles.fullWidth,
    accentColor && styles[`accent-${accentColor}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // カスタムスタイル
  const customStyle: React.CSSProperties = {
    ...(!isDisabled && isHovered ? { boxShadow: hoverShadowColors[variant] } : {}),
    borderRadius,
  }

  // ローディングスピナー
  const LoadingSpinner = () => (
    <svg
      data-testid="loading-spinner"
      className={styles.spinner}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        style={{ opacity: 0.25 }}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        style={{ opacity: 0.75 }}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  const buttonElement = (
    <button
      type="button"
      className={buttonClasses}
      disabled={isDisabled}
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={enableHopEffect ? undefined : isDisabled ? undefined : () => {
        log('click', { variant, size, disabled, loading })
        onClick?.()
      }}
      data-component="button"
      data-variant={variant}
      data-size={size}
      data-loading={loading || undefined}
      {...props}
    >
      <span className={styles.content}>
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && (
          <Icon
            name={leftIcon}
            size={getIconSize()}
            className={styles.icon}
            hover="pop"
          />
        )}
        {children}
        {!loading && rightIcon && (
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
        tabIndex={isDisabled ? -1 : 0}
        onClick={isDisabled ? undefined : () => {
          log('click', { variant, size, disabled, loading, hopEffect: true })
          onClick?.()
        }}
        onKeyDown={(e) => {
          if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
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
