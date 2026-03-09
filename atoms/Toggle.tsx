import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary';
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  /** トグルスイッチの角丸（例: '8px', '25px'）。指定しない場合は完全な丸（9999px） */
  toggleRadius?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      size = 'medium',
      variant = 'default',
      className = '',
      labelClassName = '',
      containerClassName = '',
      toggleRadius,
      disabled = false,
      checked = false,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizeStyles = {
      small: {
        container: 'w-8 h-4',
        circle: 'h-3 w-3',
        translate: 'translate-x-4',
      },
      medium: {
        container: 'w-11 h-6',
        circle: 'h-5 w-5',
        translate: 'translate-x-5',
      },
      large: {
        container: 'w-14 h-7',
        circle: 'h-6 w-6',
        translate: 'translate-x-7',
      },
    };

    const variantStyles = {
      default: {
        bg: checked ? 'bg-blue-600' : 'bg-red-500',
        hover: checked ? 'hover:bg-blue-700' : 'hover:bg-red-600',
        hoverShadow: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
      },
      primary: {
        bg: checked ? 'bg-teal-600' : 'bg-red-500',
        hover: checked ? 'hover:bg-teal-700' : 'hover:bg-red-600',
        hoverShadow: 'inset 0 0 0 3px rgba(20, 184, 166, 0.4)',
      },
    };

    const labelSizeStyles = {
      small: 'text-fluid-xs',
      medium: 'text-fluid-sm',
      large: 'text-fluid-base',
    };

    const toggleClass = [
      'relative inline-flex items-center transition-colors duration-200 ease-in-out focus-within:ring-2 focus-within:ring-offset-2',
      !toggleRadius && 'rounded-full', // toggleRadius指定時はstyleで適用
      sizeStyles[size].container,
      variantStyles[variant].bg,
      !disabled && variantStyles[variant].hover,
      disabled && 'opacity-50 cursor-not-allowed',
      !disabled && 'cursor-pointer',
      variant === 'default' ? 'focus-within:ring-blue-500' : 'focus-within:ring-teal-500',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const circleClass = [
      'inline-block bg-white shadow-lg transform transition-transform duration-200 ease-in-out',
      !toggleRadius && 'rounded-full', // toggleRadius指定時はstyleで適用
      sizeStyles[size].circle,
      checked ? sizeStyles[size].translate : 'translate-x-0.5',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClass = [
      'select-none',
      labelSizeStyles[size],
      disabled ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer text-gray-700',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    // トグルコンテナのスタイル（hover効果 + 角丸）
    const toggleStyle: React.CSSProperties = {
      ...(!disabled && isHovered ? { boxShadow: variantStyles[variant].hoverShadow } : {}),
      ...(toggleRadius ? { borderRadius: toggleRadius } : {}),
    };

    // 中の丸のスタイル（角丸）
    const circleStyle: React.CSSProperties = toggleRadius
      ? { borderRadius: toggleRadius }
      : {};

    if (label) {
      return (
        <label
          className={`flex items-center gap-3 ${containerClassName}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-component="toggle"
          data-variant={variant}
        >
          <span className={labelClass}>{label}</span>
          <span className={toggleClass} style={toggleStyle}>
            <input
              ref={ref}
              type="checkbox"
              className="sr-only"
              disabled={disabled}
              checked={checked}
              {...props}
            />
            <span className={circleClass} style={circleStyle} />
          </span>
        </label>
      );
    }

    return (
      <span
        className={toggleClass}
        style={toggleStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-component="toggle"
        data-variant={variant}
      >
        <input
          ref={ref}
          type="checkbox"
          className="sr-only"
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <span className={circleClass} style={circleStyle} />
      </span>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
