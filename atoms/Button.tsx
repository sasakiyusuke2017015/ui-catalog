import { FC, ReactNode, ButtonHTMLAttributes, useState } from 'react';

import { type IconName } from '../constants';

import Icon from './Icon';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'default'
  | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: number;
  enableHopEffect?: boolean;
  enableShimmer?: boolean;
  triggerShake?: boolean;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
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
  borderRadius = '0.375rem', // デフォルト値（Tailwind の rounded-md 相当）
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // バリアント別の内側陰影色
  const hoverShadowColors: Record<ButtonVariant, string> = {
    primary: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
    secondary: 'inset 0 0 0 3px rgba(107, 114, 128, 0.4)',
    outline: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
    danger: 'inset 0 0 0 3px rgba(239, 68, 68, 0.4)',
    default: 'inset 0 0 0 3px rgba(156, 163, 175, 0.4)',
    success: 'inset 0 0 0 3px rgba(34, 197, 94, 0.4)',
  };

  // ベースクラス：共通スタイル + 劇的なアニメーション効果
  const baseClass =
    'inline-flex items-center justify-center font-medium transition-all duration-300 transform focus:outline-none focus:ring-4 active:scale-95 relative overflow-hidden';

  // バリアントスタイル：美しいグラデーション + シャドウ効果
  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600
      hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700
      text-white shadow-xl hover:shadow-2xl
      focus:ring-blue-300 focus:ring-opacity-50
    `,
    secondary: `
      bg-gradient-to-r from-gray-900 via-black to-gray-900
      hover:from-black hover:via-gray-800 hover:to-black
      text-white shadow-xl hover:shadow-2xl
      focus:ring-gray-500 border-2 border-gray-900 hover:border-black
    `,
    default: `
      bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50
      hover:from-gray-100 hover:via-gray-200 hover:to-gray-100
      text-gray-800 shadow-lg hover:shadow-xl
      focus:ring-gray-300 border border-gray-200 hover:border-gray-300
    `,
    outline: `
      border-2 border-blue-600 text-blue-600 bg-transparent
      hover:bg-blue-600 hover:text-white hover:border-blue-700
      shadow-lg hover:shadow-xl focus:ring-blue-300
    `,
    danger: `
      bg-gradient-to-r from-red-600 via-red-700 to-red-800
      hover:from-red-700 hover:via-red-800 hover:to-red-900
      text-white shadow-xl hover:shadow-2xl
      focus:ring-red-300 focus:ring-opacity-50
    `,
    success: `
      bg-gradient-to-r from-green-600 via-green-700 to-emerald-600
      hover:from-green-700 hover:via-green-800 hover:to-emerald-700
      text-white shadow-xl hover:shadow-2xl
      focus:ring-green-300 focus:ring-opacity-50
    `,
  };

  // シマー効果クラス
  const shimmerClass = enableShimmer
    ? `before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
       before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700`
    : '';

  // サイズクラス：レスポンシブ対応
  const sizeClasses = {
    small: 'px-2 py-1 text-fluid-sm min-w-[80px]',
    medium: 'px-5 py-2 text-fluid-base min-w-[100px]',
    large: 'px-8 py-3 text-fluid-lg min-w-[120px]',
  };

  // 無効状態 + ホバー効果
  const disabledClass = disabled
    ? 'opacity-50 cursor-not-allowed transform-none hover:shadow-none'
    : enableHopEffect
      ? 'hover:-translate-y-1 hover:scale-120'
      : '';

  // アイコンサイズを決定
  const getIconSize = () => {
    if (iconSize) return iconSize;
    switch (size) {
      case 'small':
        return 14;
      case 'medium':
        return 16;
      case 'large':
        return 18;
      default:
        return 16;
    }
  };

  // 全クラスを結合
  const buttonClasses = [
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    shimmerClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // カスタムスタイル
  const customStyle: React.CSSProperties = {
    ...(!disabled && isHovered ? { boxShadow: hoverShadowColors[variant] } : {}),
    borderRadius,
  };

  const buttonElement = (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      style={customStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={enableHopEffect ? undefined : disabled ? undefined : onClick}
      data-component="button"
      data-variant={variant}
      data-size={size}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={getIconSize()}
            className="flex-shrink-0"
            animationTrigger="hover"
            hoverScale={1.1}
            tapScale={0.85}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            name={rightIcon}
            size={getIconSize()}
            className="flex-shrink-0"
            animationTrigger="hover"
            hoverScale={1.1}
            tapScale={0.85}
          />
        )}
      </span>
    </button>
  );

  // ホップ効果有効時はラッパーで囲んでクリック領域を確保
  if (enableHopEffect) {
    return (
      <div
        className="group relative inline-flex"
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? undefined : onClick}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick?.();
          }
        }}
      >
        {/* ホバー時に元の位置に控えめな影を表示 */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-200/30 to-gray-300/40 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderRadius }}
        />
        {buttonElement}
      </div>
    );
  }

  return buttonElement;
};

export default Button;
