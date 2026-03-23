/**
 * Calendar コンポーネント
 *
 * 日付/月選択カレンダー。単体でも DatePicker 内でも利用可能。
 */
import { FC, useState, useCallback, useMemo } from 'react';
import Icon from '../../atoms/Icon';

import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { MonthGrid } from './MonthGrid';
import { DEFAULTS, ANIMATION_DURATION } from './constants';
import type { CalendarProps } from './types';

const Calendar: FC<CalendarProps> = ({
  mode = 'date',
  viewDate: initialViewDate,
  selectedDate = null,
  minDate = null,
  maxDate = null,
  primaryBgColor = DEFAULTS.PRIMARY_BG_COLOR,
  borderRadius = DEFAULTS.BORDER_RADIUS,
  highlightedMonths,
  onSelect,
  onNavigate,
  className,
}) => {
  const [viewDate, setViewDate] = useState<Date>(() => {
    if (initialViewDate) return initialViewDate;
    if (selectedDate) return selectedDate;
    return new Date();
  });

  // 年ナビゲーション用（monthモード）
  const [flipDirection, setFlipDirection] = useState<'up' | 'down' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [targetYear, setTargetYear] = useState<number | null>(null);

  const viewYear = viewDate.getFullYear();

  // 有効な年の範囲
  const { minYear, maxYear } = useMemo(() => ({
    minYear: minDate ? minDate.getFullYear() : 1900,
    maxYear: maxDate ? maxDate.getFullYear() : 2099,
  }), [minDate, maxDate]);

  const canNavigateYear = useCallback((direction: 'prev' | 'next'): boolean => {
    return direction === 'prev' ? viewYear > minYear : viewYear < maxYear;
  }, [viewYear, minYear, maxYear]);

  // 月ナビゲーション（dateモード）
  const handleMonthNavigate = useCallback((direction: 'prev' | 'next') => {
    setViewDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
      onNavigate?.(newDate);
      return newDate;
    });
  }, [onNavigate]);

  // 年ナビゲーション（monthモード）
  const handleYearNavigate = useCallback((direction: 'prev' | 'next') => {
    if (!canNavigateYear(direction) || isFlipping) return;
    const newYear = viewYear + (direction === 'prev' ? -1 : 1);
    setFlipDirection(direction === 'prev' ? 'up' : 'down');
    setTargetYear(newYear);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsFlipping(true)));
    setTimeout(() => {
      setViewDate(prev => {
        const newDate = new Date(prev);
        newDate.setFullYear(newYear);
        onNavigate?.(newDate);
        return newDate;
      });
      setIsFlipping(false);
      setFlipDirection(null);
      setTargetYear(null);
    }, ANIMATION_DURATION);
  }, [canNavigateYear, isFlipping, viewYear, onNavigate]);

  const handleSelect = useCallback((date: Date) => {
    onSelect?.(date);
  }, [onSelect]);

  const containerStyle = useMemo(() => ({
    borderRadius,
  }), [borderRadius]);

  return (
    <div
      className={`bg-white border border-gray-200 shadow-lg overflow-hidden ${className || ''}`}
      style={containerStyle}
      data-component="calendar"
      data-mode={mode}
    >
      {mode === 'date' ? (
        <>
          <CalendarHeader
            viewDate={viewDate}
            primaryBgColor={primaryBgColor}
            borderRadius={borderRadius}
            onNavigate={handleMonthNavigate}
          />
          <CalendarGrid
            viewDate={viewDate}
            selectedDate={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            primaryBgColor={primaryBgColor}
            borderRadius={borderRadius}
            onSelect={handleSelect}
          />
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => handleYearNavigate('prev')}
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
                    <div className="text-center text-fluid-sm font-bold py-2 text-white" style={{ backgroundColor: primaryBgColor }}>
                      {targetYear}年
                    </div>
                    <MonthGrid year={targetYear} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handleSelect} />
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
                  <div className="text-center text-fluid-sm font-bold py-2 text-white" style={{ backgroundColor: primaryBgColor }}>
                    {viewYear}年
                  </div>
                  <MonthGrid year={viewYear} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handleSelect} />
                </div>
              </>
            ) : flipDirection === 'down' ? (
              <>
                <div className="absolute inset-0" style={{ zIndex: 1 }}>
                  <div className="text-center text-fluid-sm font-bold py-2 text-white" style={{ backgroundColor: primaryBgColor }}>
                    {viewYear}年
                  </div>
                  <MonthGrid year={viewYear} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handleSelect} />
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
                    <div className="text-center text-fluid-sm font-bold py-2 text-white" style={{ backgroundColor: primaryBgColor }}>
                      {targetYear}年
                    </div>
                    <MonthGrid year={targetYear} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handleSelect} />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-center text-fluid-sm font-bold py-2 text-white" style={{ backgroundColor: primaryBgColor }}>
                  {viewYear}年
                </div>
                <MonthGrid year={viewYear} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} primaryBgColor={primaryBgColor} borderRadius={borderRadius} highlightedMonths={highlightedMonths} onSelect={handleSelect} />
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleYearNavigate('next')}
            disabled={!canNavigateYear('next')}
            className={`w-full py-2 flex items-center justify-center transition-colors ${canNavigateYear('next') ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
            aria-label="次年"
          >
            <Icon name={'chevron-down'} size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default Calendar;
