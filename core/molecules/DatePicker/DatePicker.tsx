/**
 * DatePicker メインコンポーネント
 */
import { FC, useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Icon from '../../atoms/Icon';

import { useAlert } from '../../hooks/ui';
import { useOperationLog } from '../../../infra/devtools';
import { AlertDialog } from '../../organisms/AlertDialog';

import { useDatePickerState } from './useDatePickerState';
import { NavigationButton } from './NavigationButton';
import { MonthGrid } from './MonthGrid';
import { CalendarGrid } from './CalendarGrid';
import { formatDisplayValue, formatDateValue } from './format';
import {
  SIZE_STYLES, VARIANT_STYLES, ICON_SIZES,
  POPUP_WIDTH, ANIMATION_DURATION,
} from './constants';
import type { DatePickerProps } from './types';

const DatePicker: FC<DatePickerProps> = ({
  id,
  name: _name,
  pickerMode = 'date',
  variant = 'default',
  size = 'medium',
  showNavigation = false,
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
  const [flipDirection, setFlipDirection] = useState<'up' | 'down' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [targetYear, setTargetYear] = useState<number | null>(null);
  const { alertState, closeAlert } = useAlert();

  const log = useOperationLog('DatePicker');

  const {
    selectedDate, parsedSelectedDate,
    minDateObj, maxDateObj, viewYear, viewDate,
    setViewYear, setViewDate, updateDate, isInRange,
  } = useDatePickerState({ value, pickerMode, minDate, maxDate, recentMonths, onChange, onPeriodChange });

  // 有効な年の範囲
  const { minYear, maxYear } = useMemo(() => ({
    minYear: minDateObj ? minDateObj.getFullYear() : 1900,
    maxYear: maxDateObj ? maxDateObj.getFullYear() : 2099,
  }), [minDateObj, maxDateObj]);

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

  // ナビゲーション（空欄時・範囲外は disabled）
  const canNavigate = useCallback((direction: 'prev' | 'next'): boolean => {
    if (pickerMode !== 'month') return false;
    if (!selectedDate) return false;
    // 移動先の月が範囲内かチェック
    const [year, month] = selectedDate.split('-').map(Number);
    let newYear = year, newMonth = direction === 'prev' ? month - 1 : month + 1;
    if (newMonth < 1) { newMonth = 12; newYear -= 1; }
    else if (newMonth > 12) { newMonth = 1; newYear += 1; }
    const newValue = `${newYear}-${String(newMonth).padStart(2, '0')}`;
    return isInRange(newValue);
  }, [pickerMode, selectedDate, isInRange]);

  const navigateMonth = useCallback((direction: 'prev' | 'next') => {
    if (!canNavigate(direction) || isFlipping || !selectedDate) return;
    const [year, month] = selectedDate.split('-').map(Number);
    let newYear = year, newMonth = direction === 'prev' ? month - 1 : month + 1;
    if (newMonth < 1) { newMonth = 12; newYear -= 1; }
    else if (newMonth > 12) { newMonth = 1; newYear += 1; }
    const newValue = `${newYear}-${String(newMonth).padStart(2, '0')}`;
    updateDate(newValue);
  }, [canNavigate, isFlipping, selectedDate, updateDate]);

  // 年ナビゲーション（ポップアップ内）
  const canNavigateYear = useCallback((direction: 'prev' | 'next'): boolean => {
    return direction === 'prev' ? viewYear > minYear : viewYear < maxYear;
  }, [viewYear, minYear, maxYear]);

  const navigateYear = useCallback((direction: 'prev' | 'next') => {
    if (!canNavigateYear(direction) || isFlipping) return;
    const newYear = viewYear + (direction === 'prev' ? -1 : 1);
    setFlipDirection(direction === 'prev' ? 'up' : 'down');
    setTargetYear(newYear);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsFlipping(true)));
    setTimeout(() => {
      setViewYear(newYear);
      setIsFlipping(false);
      setFlipDirection(null);
      setTargetYear(null);
    }, ANIMATION_DURATION);
  }, [canNavigateYear, isFlipping, viewYear, setViewYear]);

  const handlePopupSelect = useCallback((date: Date) => {
    const newValue = formatDateValue(date, pickerMode);
    log('select', { pickerMode, value: newValue });
    updateDate(newValue, true);
    setIsPopupOpen(false);
  }, [pickerMode, updateDate, log]);

  const handleMonthNavigate = useCallback((direction: 'prev' | 'next') => {
    setViewDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
      return newDate;
    });
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
    <>
      <div
        id={id}
        ref={containerRef}
        className={`relative inline-flex items-center gap-2 ${className || ''}`}
        data-component="date-picker"
        data-picker-mode={pickerMode}
        {...props}
      >
        {showNavigation && pickerMode === 'month' && (
          <NavigationButton direction="prev" size={size} borderRadius={borderRadius} disabled={!canNavigate('prev')} onClick={() => navigateMonth('prev')} />
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
              className={`absolute top-full mt-2 z-50 bg-white border border-gray-200 shadow-xl overflow-hidden ${menuAlign === 'right' ? 'right-0' : 'left-0'}`}
              style={{ width: POPUP_WIDTH[pickerMode], borderRadius: dropdownRadius }}
            >
              {pickerMode === 'date' ? (
                <CalendarGrid
                  viewDate={viewDate}
                  selectedDate={parsedSelectedDate}
                  minDate={minDateObj}
                  maxDate={maxDateObj}
                  primaryBgColor={primaryBgColor}
                  borderRadius={borderRadius}
                  onSelect={handlePopupSelect}
                  onNavigate={handleMonthNavigate}
                />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => navigateYear('prev')}
                    disabled={!canNavigateYear('prev')}
                    className={`w-full py-2 flex items-center justify-center transition-colors ${canNavigateYear('prev') ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                    aria-label="前年"
                  >
                    <Icon name={'chevron-up'} size={20} />
                  </button>

                  <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
                    {flipDirection === 'up' ? (
                      <>
                        {targetYear !== null && (
                          <div className="absolute inset-0" style={{ zIndex: 1 }}>
                            <MonthGrid year={targetYear} selectedDate={parsedSelectedDate} minDate={minDateObj} maxDate={maxDateObj} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handlePopupSelect} />
                          </div>
                        )}
                        <div
                          className="relative"
                          style={{
                            zIndex: 2,
                            transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity ${ANIMATION_DURATION}ms ease-out`,
                            transformOrigin: 'left bottom',
                            transform: isFlipping ? 'rotate(-120deg) translateX(-30%)' : 'rotate(0deg) translateX(0)',
                            opacity: isFlipping ? 0 : 1,
                          }}
                        >
                          <MonthGrid year={viewYear} selectedDate={parsedSelectedDate} minDate={minDateObj} maxDate={maxDateObj} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handlePopupSelect} />
                        </div>
                      </>
                    ) : flipDirection === 'down' ? (
                      <>
                        <div className="absolute inset-0" style={{ zIndex: 1 }}>
                          <MonthGrid year={viewYear} selectedDate={parsedSelectedDate} minDate={minDateObj} maxDate={maxDateObj} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handlePopupSelect} />
                        </div>
                        {targetYear !== null && (
                          <div
                            className="relative"
                            style={{
                              zIndex: 2,
                              transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity ${ANIMATION_DURATION}ms ease-out`,
                              transformOrigin: 'left bottom',
                              transform: isFlipping ? 'rotate(0deg) translateX(0)' : 'rotate(-120deg) translateX(-30%)',
                              opacity: isFlipping ? 1 : 0,
                            }}
                          >
                            <MonthGrid year={targetYear} selectedDate={parsedSelectedDate} minDate={minDateObj} maxDate={maxDateObj} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handlePopupSelect} />
                          </div>
                        )}
                      </>
                    ) : (
                      <MonthGrid year={viewYear} selectedDate={parsedSelectedDate} minDate={minDateObj} maxDate={maxDateObj} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handlePopupSelect} />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateYear('next')}
                    disabled={!canNavigateYear('next')}
                    className={`w-full py-2 flex items-center justify-center transition-colors ${canNavigateYear('next') ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                    aria-label="次年"
                  >
                    <Icon name={'chevron-down'} size={20} />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {showNavigation && pickerMode === 'month' && (
          <NavigationButton direction="next" size={size} borderRadius={borderRadius} disabled={!canNavigate('next')} onClick={() => navigateMonth('next')} />
        )}
      </div>
      <AlertDialog {...alertState} onClose={closeAlert} />
    </>
  );
};

export default DatePicker;
