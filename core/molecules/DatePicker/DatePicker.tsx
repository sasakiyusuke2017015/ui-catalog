/**
 * DatePicker メインコンポーネント
 */
import { FC, useRef, useState, useEffect, useCallback } from 'react';
import Icon from '../../atoms/Icon';

import { useOperationLog } from '../../../infra/devtools';

import { useDatePickerState } from './useDatePickerState';
import { NavigationButton } from './NavigationButton';
import { Calendar } from '../Calendar';
import { formatDisplayValue, formatDateValue } from './format';
import {
  SIZE_STYLES, VARIANT_STYLES, ICON_SIZES,
  POPUP_WIDTH,
} from './constants';
import type { DatePickerProps, NavigationMode } from './types';

const DatePicker: FC<DatePickerProps> = ({
  id,
  name: _name,
  pickerMode = 'date',
  variant = 'default',
  size = 'medium',
  navigationMode: navigationModeProp,
  borderRadius = '0.375rem',
  menuAlign = 'left',
  primaryBgColor = '#3b82f6',
  dropdownRadius = '0.5rem',
  allowClear = false,
  highlightedMonths,
  className,
  value = '',
  minDate,
  maxDate,
  recentMonths,
  onChange,
  onPeriodChange,
  onFocus: _onFocus,
  onBlur: _onBlur,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const log = useOperationLog('DatePicker');

  const {
    selectedDate, parsedSelectedDate,
    minDateObj, maxDateObj, viewDate,
    setViewDate, updateDate, isInRange,
  } = useDatePickerState({ value, pickerMode, minDate, maxDate, recentMonths, onChange, onPeriodChange });

  // 外部クリックでポップアップを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    };
    if (isPopupOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPopupOpen]);

  const navMode: NavigationMode = navigationModeProp ?? 'none';
  const hasNav = navMode !== 'none';
  const hasDoubleNav = navMode === 'week';

  // ナビゲーション
  const canNavigate = useCallback((): boolean => {
    return !!selectedDate;
  }, [selectedDate]);

  /** 小ステップ移動（day/week モード: 1日、month モード: 1ヶ月） */
  const navigateSmall = useCallback((direction: 'prev' | 'next') => {
    if (!selectedDate) return;
    if (navMode === 'month') {
      const [year, month] = selectedDate.split('-').map(Number);
      let ny = year, nm = direction === 'prev' ? month - 1 : month + 1;
      if (nm < 1) { nm = 12; ny -= 1; }
      else if (nm > 12) { nm = 1; ny += 1; }
      updateDate(`${ny}-${String(nm).padStart(2, '0')}`);
    } else {
      const d = new Date(selectedDate);
      d.setDate(d.getDate() + (direction === 'prev' ? -1 : 1));
      updateDate(formatDateValue(d, pickerMode));
    }
  }, [selectedDate, navMode, pickerMode, updateDate]);

  /** 大ステップ移動（week モード: 7日） */
  const navigateLarge = useCallback((direction: 'prev' | 'next') => {
    if (!selectedDate) return;
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + (direction === 'prev' ? -7 : 7));
    updateDate(formatDateValue(d, pickerMode));
  }, [selectedDate, pickerMode, updateDate]);

  const handlePopupSelect = useCallback((date: Date) => {
    const newValue = formatDateValue(date, pickerMode);
    log('select', { pickerMode, value: newValue });
    updateDate(newValue, true);
    setIsPopupOpen(false);
  }, [pickerMode, updateDate, log]);

  const handleCalendarNavigate = useCallback((newDate: Date) => {
    setViewDate(newDate);
  }, [setViewDate]);

  const handleClear = useCallback(() => {
    log('clear', { pickerMode });
    updateDate('');
  }, [updateDate, log, pickerMode]);

  const handleTogglePopup = useCallback(() => {
    const newState = !isPopupOpen;
    log(newState ? 'open' : 'close', { pickerMode });
    setIsPopupOpen(newState);
  }, [isPopupOpen, log, pickerMode]);

  return (
      <div
        id={id}
        ref={containerRef}
        className={`relative inline-flex items-stretch gap-1 ${className || ''}`}
        data-component="date-picker"
        data-picker-mode={pickerMode}
        {...props}
      >
        {hasDoubleNav && (
          <NavigationButton direction="prev" double size={size} variant={variant} borderRadius={borderRadius} disabled={!canNavigate()} title="1週間前" onClick={() => navigateLarge('prev')} />
        )}
        {hasNav && (
          <NavigationButton direction="prev" size={size} variant={variant} borderRadius={borderRadius} disabled={!canNavigate()} onClick={() => navigateSmall('prev')} />
        )}

        <div className="relative">
          <div
            className={`text-left transition-all duration-200 focus:outline-none focus:ring-2 shadow-sm hover:shadow-md backdrop-blur-sm font-mono tabular-nums ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]}`}
            style={{ borderRadius }}
          >
            {(() => {
              const display = formatDisplayValue(selectedDate, pickerMode);
              const numClass = display.isEmpty ? 'text-transparent' : '';
              return pickerMode === 'month' ? (
                <><span className={numClass}>{display.year}</span>年<span className={numClass}>{display.month}</span>月</>
              ) : (
                <><span className={numClass}>{display.year}</span>年<span className={numClass}>{display.month}</span>月<span className={numClass}>{display.day}</span>日</>
              );
            })()}
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
            {allowClear && selectedDate && (
              <button
                type="button"
                onClick={handleClear}
                className={`p-0.5 rounded-full transition-colors ${
                  variant === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-600'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                title="日付をクリア"
              >
                <Icon name={'x'} size={ICON_SIZES[size] - 2} hover="pop" />
              </button>
            )}
            <button
              type="button"
              onClick={handleTogglePopup}
              className={`transition-colors ${
                variant === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              title="カレンダーを開く"
            >
              <Icon name={'calendar'} size={ICON_SIZES[size]} hover="pop" />
            </button>
          </div>

          {isPopupOpen && (
            <div
              className={`absolute top-full mt-2 z-50 ${menuAlign === 'right' ? 'right-0' : 'left-0'}`}
              style={{ width: POPUP_WIDTH[pickerMode] }}
            >
              <Calendar
                mode={pickerMode}
                viewDate={viewDate}
                selectedDate={parsedSelectedDate}
                minDate={minDateObj}
                maxDate={maxDateObj}
                primaryBgColor={primaryBgColor}
                borderRadius={dropdownRadius}
                highlightedMonths={highlightedMonths}
                onSelect={handlePopupSelect}
                onNavigate={handleCalendarNavigate}
              />
            </div>
          )}
        </div>

        {hasNav && (
          <NavigationButton direction="next" size={size} variant={variant} borderRadius={borderRadius} disabled={!canNavigate()} onClick={() => navigateSmall('next')} />
        )}
        {hasDoubleNav && (
          <NavigationButton direction="next" double size={size} variant={variant} borderRadius={borderRadius} disabled={!canNavigate()} title="1週間後" onClick={() => navigateLarge('next')} />
        )}
      </div>
  );
};

export default DatePicker;
