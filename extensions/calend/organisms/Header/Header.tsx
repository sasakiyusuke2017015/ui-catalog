import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { useAtom } from 'jotai'
import { viewModeAtom, selectedDateAtom } from '../../state/calendar'
import { navigateDate } from '../../utils/dates'
import { Button } from '@ui-catalog/core/atoms'
import type { ViewMode } from '../../types'

const VIEW_MODES: { readonly value: ViewMode; readonly label: string }[] = [
  { value: 'day', label: '日' },
  { value: 'week', label: '週' },
  { value: 'month', label: '月' },
]

export function Header() {
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

  function handlePrev() {
    setSelectedDate((prev) => navigateDate(prev, 'prev', viewMode))
  }

  function handleNext() {
    setSelectedDate((prev) => navigateDate(prev, 'next', viewMode))
  }

  return (
    <header className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-border bg-surface" style={{ position: 'relative', zIndex: 50 }}>
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-primary tracking-tight">
          Calendar
        </h1>

        <div className="flex items-center gap-1">
          <Button
            variant="default"
            size="small"
            onClick={handlePrev}
            leftIcon="ChevronLeft"
            iconSize={16}
          >
            {''}
          </Button>
          <span className="text-sm text-text-secondary min-w-[100px] text-center">
            {format(selectedDate, 'yyyy年M月d日', { locale: ja })}
          </span>
          <Button
            variant="default"
            size="small"
            onClick={handleNext}
            leftIcon="ChevronRight"
            iconSize={16}
          >
            {''}
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex rounded-lg border border-border overflow-hidden">
          {VIEW_MODES.map((mode) => (
            <Button
              key={mode.value}
              variant={viewMode === mode.value ? 'primary' : 'default'}
              size="small"
              onClick={() => setViewMode(mode.value)}
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
