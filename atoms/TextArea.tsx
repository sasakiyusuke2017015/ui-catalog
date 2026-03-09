import {
  TextareaHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  forwardRef,
  useState,
} from 'react';

interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'onKeyDown' | 'onFocus' | 'onBlur' | 'size'
  > {
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  variant?: 'default' | 'dark' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      className = '',
      placeholder = '',
      value = '',
      variant = 'default',
      size = 'medium',
      error = false,
      errorMessage,
      required = false,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      rows = 4,
      id,
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

    const errorStyles = error
      ? 'border-2 border-red-500 focus:ring-red-500'
      : '';

    const textareaClass = [
      'w-full transition-all duration-200 focus:outline-none focus:ring-2 shadow-sm hover:shadow-md resize-vertical',
      error ? errorStyles : variantStyles[variant],
      sizeStyles[size],
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const textareaStyle: React.CSSProperties = {
      ...(!disabled && isHovered ? { boxShadow: 'inset 0 0 0 2px rgba(59, 130, 246, 0.3)' } : {}),
      borderRadius,
    };

    return (
      <div className="w-full" data-component="textarea" data-variant={variant} data-size={size}>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-fluid-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={textareaClass}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          style={textareaStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={rows}
          {...props}
        />
        {errorMessage && error && (
          <p className="mt-1 text-fluid-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
