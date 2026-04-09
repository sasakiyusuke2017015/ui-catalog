/**
 * DatePicker 型定義
 */
import type { HTMLAttributes, FocusEvent } from 'react';
import type { HighlightedMonth } from '../Calendar';

export type PickerMode = 'date' | 'month';
export type DatePickerVariant = 'default' | 'dark' | 'outlined' | 'minimal';
export type DatePickerSize = 'small' | 'medium' | 'large';

/**
 * ナビゲーションモード
 * - 'none': ナビゲーションなし（デフォルト）
 * - 'day':  ◀ ▶ 1日ずつ
 * - 'month': ◀ ▶ 1ヶ月ずつ
 * - 'week': ◀◀ ◀ ▶ ▶▶ （1日 + 1週間）
 */
export type NavigationMode = 'none' | 'day' | 'month' | 'week';

// Calendar から再 export
export type { HighlightedMonth };

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
  /** @deprecated navigationMode を使用 */
  showNavigation?: boolean;
  /** ナビゲーションモード（showNavigation より優先） */
  navigationMode?: NavigationMode;
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
