// src/components/common/atoms/Banner.tsx
import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import Icon from '../../primitives/Icon';
import type { IconName } from '../../constants';

export type BannerVariant = 'info' | 'warning' | 'success' | 'error';

interface BannerProps {
  /** バナーの種類 */
  variant: BannerVariant;
  /** タイトル（省略可） */
  title?: string;
  /** メッセージ（文字列または ReactNode） */
  message: string | ReactNode;
  /** アイコンを表示するか（デフォルト: true） */
  showIcon?: boolean;
  /** カスタムアイコン名（省略時は variant に応じたデフォルト） */
  icon?: IconName;
  /** 追加のクラス名 */
  className?: string;
}

// バリアントごとのスタイル定義
const variantStyles: Record<BannerVariant, {
  bg: string;
  border: string;
  title: string;
  text: string;
  iconColor: string;
  defaultIcon: IconName;
}> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    title: 'text-blue-600',
    text: 'text-blue-700',
    iconColor: '#3B82F6',
    defaultIcon: 'info-circle',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    title: 'text-amber-600',
    text: 'text-amber-700',
    iconColor: '#F59E0B',
    defaultIcon: 'info-triangle',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    title: 'text-green-600',
    text: 'text-green-700',
    iconColor: '#10B981',
    defaultIcon: 'check-circle',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    title: 'text-red-600',
    text: 'text-red-700',
    iconColor: '#EF4444',
    defaultIcon: 'x-circle',
  },
};

/**
 * 汎用バナーコンポーネント
 *
 * @example
 * // シンプルなエラーバナー
 * <Banner variant="error" message="エラーが発生しました" />
 *
 * // タイトル付き
 * <Banner variant="warning" title="注意" message="この操作は取り消せません" />
 *
 * // アイコンなし
 * <Banner variant="info" message="お知らせ" showIcon={false} />
 */
export default function Banner({
  variant,
  title,
  message,
  showIcon = true,
  icon,
  className,
}: BannerProps) {
  const styles = variantStyles[variant];
  const iconName = icon ?? styles.defaultIcon;

  return (
    <div
      className={cn('p-4 border rounded-lg', styles.bg, styles.border, className)}
      data-component="Banner"
      data-variant={variant}
    >
      <div className="flex items-start gap-3">
        {showIcon && (
          <div className="flex-shrink-0">
            <Icon
              name={iconName}
              size={20}
              fill={styles.iconColor}
              stroke={styles.iconColor}
            />
          </div>
        )}
        <div className="flex-1">
          {title && (
            <p className={cn('font-medium text-fluid-sm', styles.title)}>
              {title}
            </p>
          )}
          <div className={cn('text-fluid-sm', styles.text)}>
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
