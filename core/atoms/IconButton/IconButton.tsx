import { type ButtonHTMLAttributes } from 'react'
import { type IconName } from '../../constants'
import Icon from '../Icon'

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** アイコン名 */
  icon: IconName
  /** アイコンサイズ（px） */
  size?: number
  /** ツールチップ */
  label?: string
  /** バリアント */
  variant?: 'default' | 'danger'
}

export default function IconButton({
  icon,
  size = 14,
  label,
  variant = 'default',
  className = '',
  disabled,
  ...props
}: IconButtonProps) {
  const variantClass = variant === 'danger'
    ? 'hover:text-[var(--color-error)] hover:bg-[var(--color-error-bg)]'
    : 'hover:text-[var(--color-text)] hover:bg-[var(--color-hover-bg)]'

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      data-component="icon-button"
      className={`inline-flex items-center justify-center p-1 rounded text-[var(--color-text-muted)] transition-colors cursor-pointer ${
        disabled ? 'opacity-30 cursor-default' : variantClass
      } ${className}`}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  )
}
