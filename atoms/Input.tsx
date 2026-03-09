import {
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  forwardRef,
  useState,
} from 'react';

import { type IconName } from '../constants';

import Icon from './Icon';

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onKeyDown' | 'onFocus' | 'onBlur' | 'size'
  > {
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  variant?: 'default' | 'dark' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  onIconClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      className = '',
      placeholder = '',
      value = '',
      variant = 'default',
      size = 'medium',
      icon,
      iconPosition = 'right',
      iconClassName = '',
      onIconClick,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      disabled,
      borderRadius = '0.375rem', // デフォルト値
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const variantStyles = {
      dark: 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20',
      outlined:
        'bg-transparent border-2 border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500/20',
      default:
        'bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20',
    };

    const sizeStyles = {
      small: 'px-2 py-1 text-fluid-sm',
      large: 'px-4 py-3 text-fluid-lg',
      medium: 'px-3 py-2 text-fluid-base',
    };

    const iconSizes = {
      small: 16,
      medium: 20,
      large: 24,
    };

    const paddingWithIcon = icon
      ? {
          left:
            iconPosition === 'left'
              ? size === 'small'
                ? 'pl-8'
                : size === 'large'
                  ? 'pl-12'
                  : 'pl-10'
              : '',
          right:
            iconPosition === 'right'
              ? size === 'small'
                ? 'pr-8'
                : size === 'large'
                  ? 'pr-12'
                  : 'pr-10'
              : '',
        }
      : { left: '', right: '' };

    const placeholderSizeStyles = {
      small: '',
      medium: '',
      large: 'placeholder:text-fluid-base',
    };

    const inputClass = [
      'w-full transition-all duration-200 focus:outline-none focus:ring-2 shadow-sm hover:shadow-md',
      variantStyles[variant],
      sizeStyles[size],
      placeholderSizeStyles[size],
      paddingWithIcon[iconPosition],
      // ブラウザネイティブピッカーを非表示（PC・モバイル両対応）
      '[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:pointer-events-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden',
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // borderRadius とホバー効果を統合したスタイル
    const customStyle: React.CSSProperties = {
      ...(!disabled && isHovered ? { boxShadow: 'inset 0 0 0 2px rgba(59, 130, 246, 0.3)' } : {}),
      borderRadius,
    };

    const iconWrapperClass = `absolute inset-y-0 ${iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center ${onIconClick ? 'cursor-pointer' : 'pointer-events-none'}`;

    if (icon) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-component="input"
          data-variant={variant}
          data-size={size}
        >
          <input
            ref={ref}
            type={type}
            className={inputClass}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            style={customStyle}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
          />
          <div
            className={iconWrapperClass}
            onClick={onIconClick}
            onKeyDown={(e) => {
              if (onIconClick && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onIconClick();
              }
            }}
            role={onIconClick ? 'button' : undefined}
            tabIndex={onIconClick ? 0 : undefined}
            aria-label="Icon button"
          >
            <Icon
              name={icon}
              size={iconSizes[size]}
              className={`text-gray-400 ${iconClassName}`}
            />
          </div>
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        style={customStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        data-component="input"
        data-variant={variant}
        data-size={size}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
