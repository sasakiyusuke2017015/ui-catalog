import { useCallback } from 'react'
import { format } from 'date-fns'
import { useAtom } from 'jotai'
import { viewModeAtom, selectedDateAtom } from '../../hooks/calendar/calendar'
import { navigateDate } from '../../utils/calendar/dates'
import { Button, DatePicker } from '../../molecules'
import type { ViewMode } from '../../types/calendar'
import styles from './CalendarHeader.module.scss'

const VIEW_MODES: { readonly value: ViewMode; readonly label: string }[] = [
  { value: 'day', label: '日' },
  { value: 'week', label: '週' },
  { value: 'month', label: '月' },
  { value: 'agenda', label: '予定' },
]

interface CalendarHeaderProps {
  readonly onViewModeChange?: (mode: ViewMode) => void
}

export function CalendarHeader({ onViewModeChange }: CalendarHeaderProps = {}) {
  const [viewMode, setViewMode] = useAtom(viewModeAtom)
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom)

  function handleToday() {
    setSelectedDate(new Date())

    if (viewMode === 'day') {
      const allEls = document.querySelectorAll('[data-date]')
      const today = new Date()
      for (const el of allEls) {
        const elDate = new Date(el.getAttribute('data-date') ?? '')
        if (elDate.toDateString() === today.toDateString()) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          break
        }
      }
    }
  }

  const handleDateChange = useCallback((value: string) => {
    if (value) {
      setSelectedDate(new Date(value))
    }
  }, [setSelectedDate])

  function handlePrev() {
    setSelectedDate((prev) => navigateDate(prev, 'prev', viewMode))
  }

  function handleNext() {
    setSelectedDate((prev) => navigateDate(prev, 'next', viewMode))
  }


  return (
    <header data-component="CalendarHeader" className={styles.header} style={{ backgroundColor: 'transparent' }}>
      <div className={styles.leftSection}>
        <div className={styles.navButtons}>
          {viewMode === 'week' && (
            <Button
              variant="ghost"
              size="small"
              onClick={handlePrev}
              leftIcon="chevrons-left"
              iconSize={16}
              title="1週間前"
            >
              {''}
            </Button>
          )}
          <DatePicker
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={handleDateChange}
            size="small"
            variant="minimal"
            showNavigation
          />
          {viewMode === 'week' && (
            <Button
              variant="ghost"
              size="small"
              onClick={handleNext}
              leftIcon="chevrons-right"
              iconSize={16}
              title="1週間後"
            >
              {''}
            </Button>
          )}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.viewModeGroup}>
          {VIEW_MODES.map((mode) => (
            <Button
              key={mode.value}
              variant={viewMode === mode.value ? 'primary' : 'default'}
              size="small"
              onClick={() => { setViewMode(mode.value); onViewModeChange?.(mode.value) }}
              borderRadius="0"
            >
              {mode.label}
            </Button>
          ))}
        </div>

        <Button variant="primary" size="small" onClick={handleToday}>
          Today
        </Button>
      </div>
    </header>
  )
}
