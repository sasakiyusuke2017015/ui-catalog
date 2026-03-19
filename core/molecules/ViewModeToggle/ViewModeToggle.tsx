import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../../atoms/Icon'
import type { IconName } from '../../constants'
import styles from './ViewModeToggle.module.scss'
import { cn } from '../../utils'

/**
 * 表示モードの選択肢
 */
export interface ViewModeOption<T extends string = string> {
  /** モードの値 */
  value: T
  /** 表示ラベル */
  label: string
  /** アイコン名 */
  icon: IconName
}

export interface ViewModeToggleProps<T extends string = string> {
  /** 現在選択されているモード */
  value: T
  /** モード変更時のコールバック */
  onChange: (value: T) => void
  /** 選択肢の配列 */
  options: ViewModeOption<T>[]
  /** ラベルを常に表示するか（false: lg以上で表示） */
  showLabel?: boolean
  /** サイズ */
  size?: 'small' | 'medium' | 'large'
  /** バリアント */
  variant?: 'default' | 'primary' | 'teal'
  /** 追加のクラス名 */
  className?: string
}

/**
 * 表示モード切り替えトグル
 *
 * テーブル/カード表示などの切り替えに使用
 * ホバー時にパルスグローアニメーション、
 * 選択時にシマー（きらめき）エフェクトを表示
 */
export const ViewModeToggle = <T extends string = string>({
  value,
  onChange,
  options,
  showLabel = false,
  size = 'medium',
  variant = 'default',
  className,
}: ViewModeToggleProps<T>) => {
  return (
    <div className={cn(styles.container, className)}>
      <AnimatePresence mode="wait">
        {options.map((option) => {
          const isActive = value === option.value
          return (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                styles.button,
                styles.buttonWrapper,
                styles[size],
                styles[variant],
                isActive ? styles.active : styles.inactive
              )}
              title={option.label}
              whileHover={{ scale: isActive ? 1 : 1.02 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {/* アクティブ時のバックグラウンドスライダー */}
              {isActive && (
                <motion.div
                  className={styles.activeBackground}
                  layoutId="activeBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className={styles.icon}>
                <Icon
                  name={option.icon}
                  size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
                  hoverPreset={isActive ? undefined : 'pop'}
                  glow={isActive}
                />
              </span>
              <span className={cn(styles.label, !showLabel && styles.labelHidden)}>
                {option.label}
              </span>
            </motion.button>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
