import { FC, ReactNode } from 'react';

import { Input } from '../../atoms/Input';

interface FormFieldProps {
  id?: string;
  label?: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
  className?: string;
  // Input-related props for backward compatibility
  type?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  // Div attributes (manually added to avoid conflicts)
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

const FormField: FC<FormFieldProps> = ({
  id,
  label,
  error,
  required = false,
  children,
  className = '',
  type,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  // FormField固有のpropsを除外してInputに渡す
  const { style, onClick, onMouseEnter, onMouseLeave } = props;
  const inputProps = { type, value, onChange, placeholder };

  return (
    <div
      id={id}
      className={`mb-4 ${className}`}
      style={style}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      data-component="form-field"
    >
      {label && (
        <label className="mb-2 block text-fluid-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {children || <Input {...inputProps} />}

      {error && <p className="mt-1 text-fluid-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
