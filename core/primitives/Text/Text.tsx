import { FC, ReactNode, CSSProperties, HTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type TextAlign = 'left' | 'center' | 'right'

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  /** テキストサイズ */
  size?: TextSize
  /** フォントウェイト */
  weight?: TextWeight
  /** テキスト配置 */
  align?: TextAlign
  /** 色 (Tailwind色名 or カラーコード) */
  color?: string
  /** 切り詰め */
  truncate?: boolean
  /** as element */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'div'
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
}

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const alignClasses: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

/**
 * Text - テキスト表示プリミティブ
 * サイズ、ウェイト、配置、色を簡潔に指定可能
 */
const Text: FC<TextProps> = ({
  children,
  className,
  style,
  size = 'base',
  weight = 'normal',
  align,
  color,
  truncate,
  as: Tag = 'span',
  ...props
}) => {
  const classes = cn(
    sizeClasses[size],
    weightClasses[weight],
    align && alignClasses[align],
    truncate && 'truncate',
    className,
  )

  const computedStyle: CSSProperties = {
    ...(color && { color: color.startsWith('#') || color.startsWith('rgb') ? color : undefined }),
    ...style,
  }

  // Tailwind色クラスの場合はclassNameに追加
  const colorClass = color && !color.startsWith('#') && !color.startsWith('rgb') ? `text-${color}` : ''

  return (
    <Tag
      className={cn(classes, colorClass)}
      style={computedStyle}
      data-component="text"
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Text
