/**
 * ナビゲーションボタン（variant 対応）
 */
import { FC, memo } from 'react';
import Icon from '../../atoms/Icon';

import { NAV_ICON_SIZES } from './constants';
import type { DatePickerSize, DatePickerVariant } from './types';

/** サイズ別の横 padding（高さは self-stretch で DatePicker に合わせる） */
const NAV_PX: Record<DatePickerSize, string> = {
  small: 'px-1.5',
  medium: 'px-2',
  large: 'px-2.5',
};

const VARIANT_BUTTON_STYLES: Record<DatePickerVariant, { normal: string; disabled: string }> = {
  default: {
    normal: 'bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 hover:shadow-md',
    disabled: 'cursor-not-allowed bg-gray-100 text-gray-300 border border-gray-200 opacity-60',
  },
  dark: {
    normal: 'bg-gray-800 text-white border border-gray-600 shadow-sm hover:bg-gray-700 hover:border-gray-500 hover:shadow-md',
    disabled: 'cursor-not-allowed bg-gray-700 text-gray-400 border border-gray-600 opacity-60',
  },
  outlined: {
    normal: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50',
    disabled: 'cursor-not-allowed text-gray-300 border border-gray-200 opacity-60',
  },
  minimal: {
    normal: 'bg-transparent text-gray-500 border-none hover:text-gray-700 hover:bg-gray-100',
    disabled: 'cursor-not-allowed text-gray-300 border-none opacity-60',
  },
};

interface Props {
  direction: 'prev' | 'next';
  /** ダブルシェブロン（◀◀/▶▶） */
  double?: boolean;
  size: DatePickerSize;
  variant?: DatePickerVariant;
  borderRadius: string;
  disabled: boolean;
  title?: string;
  onClick: () => void;
}

export const NavigationButton: FC<Props> = memo(({
  direction, double = false, size, variant = 'default', borderRadius, disabled, title, onClick,
}) => {
  const iconName = double
    ? (direction === 'prev' ? 'chevrons-left' : 'chevrons-right')
    : (direction === 'prev' ? 'chevron-left' : 'chevron-right');

  const styles = VARIANT_BUTTON_STYLES[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        self-stretch flex items-center ${NAV_PX[size]} transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500/20
        ${disabled ? styles.disabled : styles.normal}
      `}
      style={{ borderRadius }}
      title={title}
      aria-label={title ?? (direction === 'prev' ? '前へ' : '次へ')}
    >
      <Icon
        name={iconName}
        size={NAV_ICON_SIZES[size]}
        className="transition-colors duration-200"
      />
    </button>
  );
});

NavigationButton.displayName = 'NavigationButton';
