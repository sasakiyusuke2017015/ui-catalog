import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary';
  className?: string;
  labelClassName?: string;
  forceHovered?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'medium',
      variant = 'default',
      className = '',
      labelClassName = '',
      disabled = false,
      forceHovered = false,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizeStyles = {
      small: 'h-3.5 w-3.5',
      medium: 'h-4 w-4',
      large: 'h-5 w-5',
    };

    const variantStyles = {
      default: {
        base: 'border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50',
        hoverShadow: '0 0 0 3px rgba(59, 130, 246, 0.3), inset 0 0 0 2px rgba(59, 130, 246, 0.5)',
      },
      primary: {
        base: 'border-teal-300 text-teal-600 focus:ring-teal-500 disabled:opacity-50',
        hoverShadow: '0 0 0 3px rgba(20, 184, 166, 0.3), inset 0 0 0 2px rgba(20, 184, 166, 0.5)',
      },
    };

    const labelSizeStyles = {
      small: 'text-fluid-xs',
      medium: 'text-fluid-sm',
      large: 'text-fluid-base',
    };

    const variantConfig = variantStyles[variant];

    const checkboxClass = [
      'rounded cursor-pointer transition-all duration-200 hover:scale-110',
      sizeStyles[size],
      variantConfig.base,
      disabled && 'cursor-not-allowed',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClass = [
      'cursor-pointer select-none',
      labelSizeStyles[size],
      disabled ? 'cursor-not-allowed text-gray-500' : 'text-gray-700',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const hoverStyle = !disabled && (isHovered || forceHovered)
      ? { boxShadow: variantConfig.hoverShadow }
      : {};

    const checkboxElement = (
      <input
        ref={ref}
        type="checkbox"
        className={checkboxClass}
        disabled={disabled}
        style={hoverStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-component="checkbox"
        data-variant={variant}
        {...props}
      />
    );

    if (label) {
      return (
        <label
          className="flex items-center gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-component="checkbox"
          data-variant={variant}
        >
          {checkboxElement}
          <span className={labelClass}>{label}</span>
        </label>
      );
    }

    return checkboxElement;
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
