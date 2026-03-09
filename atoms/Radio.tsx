import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary';
  className?: string;
  labelClassName?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      size = 'medium',
      variant = 'default',
      className = '',
      labelClassName = '',
      disabled = false,
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
        hoverShadow: 'inset 0 0 0 3px rgba(59, 130, 246, 0.4)',
      },
      primary: {
        base: 'border-teal-300 text-teal-600 focus:ring-teal-500 disabled:opacity-50',
        hoverShadow: 'inset 0 0 0 3px rgba(20, 184, 166, 0.4)',
      },
    };

    const labelSizeStyles = {
      small: 'text-fluid-xs',
      medium: 'text-fluid-sm',
      large: 'text-fluid-base',
    };

    const variantConfig = variantStyles[variant];

    const radioClass = [
      'cursor-pointer transition-all duration-200',
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

    const hoverStyle = !disabled && isHovered
      ? { boxShadow: variantConfig.hoverShadow }
      : {};

    const radioElement = (
      <input
        ref={ref}
        type="radio"
        className={radioClass}
        disabled={disabled}
        style={hoverStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-component="radio"
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
          data-component="radio"
          data-variant={variant}
        >
          {radioElement}
          <span className={labelClass}>{label}</span>
        </label>
      );
    }

    return radioElement;
  }
);

Radio.displayName = 'Radio';

export default Radio;
