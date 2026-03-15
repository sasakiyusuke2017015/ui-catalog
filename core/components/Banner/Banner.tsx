// src/components/common/atoms/Banner.tsx
import { cn } from '../../utils/cn';

export type BannerVariant = 'info' | 'warning' | 'success' | 'error';

interface BannerProps {
  /** バナーの種類 */
  variant: BannerVariant;
  /** タイトル（省略可） */
  title?: string;
  /** メッセージ */
  message: string;
  /** 追加のクラス名 */
  className?: string;
}

// バリアントごとのスタイル定義
const variantStyles: Record<BannerVariant, { bg: string; border: string; title: string; text: string }> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    title: 'text-blue-600',
    text: 'text-blue-700',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    title: 'text-amber-600',
    text: 'text-amber-700',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    title: 'text-green-600',
    text: 'text-green-700',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    title: 'text-red-600',
    text: 'text-red-700',
  },
};

/**
 * 汎用バナーコンポーネント
 */
export default function Banner({ variant, title, message, className }: BannerProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn('p-4 border rounded-lg', styles.bg, styles.border, className)}
      data-component="banner"
      data-variant={variant}
    >
      <div className="flex items-center gap-2">
        {title && <span className={cn('font-medium', styles.title)}>{title}</span>}
        <span className={cn('text-fluid-sm', styles.text)}>{message}</span>
      </div>
    </div>
  );
}
