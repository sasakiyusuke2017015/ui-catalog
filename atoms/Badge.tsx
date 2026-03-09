import { FC, CSSProperties, ReactNode } from 'react';

export type BadgeAppearance = 'default' | 'metric' | 'score' | 'status';
export type BadgeStyleVariant = 'solid' | 'gradient' | 'compact';
export type BadgeSemanticVariant = 'default' | 'success' | 'warning' | 'error' | 'secondary';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeColor = 'blue' | 'green' | 'red' | 'yellow' | 'gray' | 'orange';

// セマンティック variant から color へのマッピング
const SEMANTIC_TO_COLOR: Record<BadgeSemanticVariant, BadgeColor> = {
  default: 'gray',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  secondary: 'gray',
};

const BADGE_COLORS = {
  solid: {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    gray: 'bg-gray-500 text-white',
    orange: 'bg-orange-500 text-white',
  },
  gradient: {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200',
    green: 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-green-200',
    red: 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-red-200',
    yellow: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-yellow-200',
    gray: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-200',
    orange: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-200',
  },
} as const;

interface BadgeProps {
  /** 表示する値（value または children のどちらかを指定） */
  value?: string | number;
  /** 子要素（value の代わりに使用可能） */
  children?: ReactNode;
  appearance?: BadgeAppearance;
  /** スタイルバリアント（solid, gradient, compact） */
  styleVariant?: BadgeStyleVariant;
  /** セマンティックバリアント（success, warning, error など） - color を自動設定 */
  variant?: BadgeSemanticVariant;
  /** 直接色を指定（variant より優先） */
  color?: BadgeColor;
  size?: BadgeSize;
  width?: string;
  className?: string;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
}

const Badge: FC<BadgeProps> = ({
  value,
  children,
  appearance = 'default',
  styleVariant = 'solid',
  variant,
  color,
  size = 'medium',
  width,
  className = '',
  borderRadius = '0.375rem', // デフォルト値（Tailwind の rounded-md 相当）
}) => {
  // 表示コンテンツ（children 優先、なければ value）
  const content = children ?? value;

  // 色の決定: color > variant > デフォルト(blue)
  const resolvedColor = color ?? (variant ? SEMANTIC_TO_COLOR[variant] : 'blue');

  // タグ選択
  const Tag = appearance === 'metric' ? 'div' : 'span';

  // 基本スタイル
  const baseClasses = 'font-medium text-center inline-block';

  // 外観別スタイル
  const appearanceClasses = {
    default: 'inline-block',
    metric: 'font-semibold text-center block',
    score: 'inline-flex items-center justify-center font-medium',
    status: 'inline-block font-medium text-center',
  };

  // サイズ別スタイル
  const sizeClasses = {
    small: {
      default: 'text-fluid-xs py-0.5 px-2',
      metric: 'text-fluid-xs px-2 py-1',
      score: 'text-fluid-xs w-8 h-5',
      status: 'text-fluid-xs py-0.5 px-2',
    },
    medium: {
      default: 'text-fluid-sm px-3 py-1',
      metric: 'text-fluid-sm px-3 py-1.5',
      score: 'text-fluid-sm w-10 h-6',
      status: 'text-fluid-xs px-3 py-1',
    },
    large: {
      default: 'text-fluid-base px-4 py-1.5',
      metric: 'text-fluid-base px-4 py-2',
      score: 'text-fluid-base w-12 h-8',
      status: 'text-fluid-sm px-4 py-1.5',
    },
  };

  // グラデーント用の追加効果
  const gradientExtras = styleVariant === 'gradient' ? 'shadow-lg' : '';
  const metricGradientExtras =
    styleVariant === 'gradient' && appearance === 'metric'
      ? 'transition-all duration-200 hover:scale-105 hover:shadow-xl'
      : '';

  const colorClasses =
    styleVariant === 'solid' || styleVariant === 'compact'
      ? BADGE_COLORS.solid[resolvedColor]
      : BADGE_COLORS.gradient[resolvedColor];

  const classNames = [
    baseClasses,
    appearanceClasses[appearance],
    sizeClasses[size][appearance],
    colorClasses,
    gradientExtras,
    metricGradientExtras,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: CSSProperties = {
    ...(width ? { width } : {}),
    borderRadius,
  };

  return (
    <Tag className={classNames} style={style} data-component="badge" data-appearance={appearance} data-variant={variant || styleVariant}>
      {content}
    </Tag>
  );
};

export default Badge;
