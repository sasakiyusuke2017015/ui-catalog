/**
 * DatePicker 型定義
 */
import type { HTMLAttributes, FocusEvent } from 'react';

export type PickerMode = 'date' | 'month';
export type DatePickerVariant = 'default' | 'dark' | 'outlined' | 'minimal';
export type DatePickerSize = 'small' | 'medium' | 'large';

/** ハイライト月の指定（複数色対応） */
export interface HighlightedMonth {
  month: string; // YYYY-MM形式
  colors: string[]; // Tailwindカラー名 (red, blue, green等) またはカラーコード (#ff0000等) の配列
}

export interface DateRange {
  minDate: string;
  maxDate: string;
}

export interface DatePickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  id?: string;
  name?: string;
  value?: string;
  pickerMode?: PickerMode;
  variant?: DatePickerVariant;
  size?: DatePickerSize;
  showNavigation?: boolean;
  minDate?: string;
  maxDate?: string;
  recentMonths?: number;
  allowClear?: boolean;
  menuAlign?: 'left' | 'right';
  borderRadius?: string;
  primaryBgColor?: string;
  dropdownRadius?: string;
  /** ハイライト表示する月の配列（色指定可能） */
  highlightedMonths?: HighlightedMonth[];
  onChange?: (value: string) => void;
  onPeriodChange?: (period: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}
