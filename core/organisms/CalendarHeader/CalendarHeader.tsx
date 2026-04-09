import { useCallback } from 'react'
import { format } from 'date-fns'
import { useAtom } from 'jotai'
import { viewModeAtom, selectedDateAtom } from '../../hooks/calendar/calendar'
import { Button, DatePicker } from '../../molecules'
import type { ViewMode } from '../../types/calendar'
import type { NavigationMode } from '../../molecules/DatePicker/types'
import styles from './CalendarHeader.module.scss'

const VIEW_MODES: { readonly value: ViewMode; readonly label: string }[] = [
  { value: 'day', label: '日' },
  { value: 'week', label: '週' },
  { value: 'month', label: '月' },
  { value: 'agenda', label: '予定' },
]

/** viewMode → DatePicker の navigationMode マッピング */
const VIEW_TO_NAV: Record<ViewMode, NavigationMode> = {
  day: 'day',
  week: 'week',
  month: 'month',
  agenda: 'month',
}

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

  return (
    <header data-component="CalendarHeader" className={styles.header} style={{ backgroundColor: 'transparent' }}>
      <div className={styles.leftSection}>
        <DatePicker
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={handleDateChange}
          size="small"
          variant="minimal"
          navigationMode={VIEW_TO_NAV[viewMode]}
        />
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
