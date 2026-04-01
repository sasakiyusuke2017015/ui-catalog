import { useState, useCallback, useRef, useEffect } from 'react'
import { useSetAtom, useStore } from 'jotai'
import { selectedDateAtom } from './calendar'
import { generateDateRange, extendDateRange } from '../../utils/calend/dates'

const INITIAL_DAYS_BEFORE = 7
const INITIAL_DAYS_AFTER = 30
const LOAD_MORE_COUNT = 14
const SCROLL_THRESHOLD = 500

export function useInfiniteTimeline(scrollRef: React.RefObject<HTMLDivElement | null>) {
  const store = useStore()
  const setSelectedDate = useSetAtom(selectedDateAtom)
  const initialDateRef = useRef(store.get(selectedDateAtom))

  const [dates, setDates] = useState<readonly Date[]>(() =>
    generateDateRange(initialDateRef.current, INITIAL_DAYS_BEFORE, INITIAL_DAYS_AFTER)
  )
  const isLoadingRef = useRef(false)
  const lastSyncedDateRef = useRef('')

  const loadMore = useCallback(
    (direction: 'past' | 'future') => {
      if (isLoadingRef.current) return
      isLoadingRef.current = true

      setDates((prev) => extendDateRange(prev, direction, LOAD_MORE_COUNT))

      requestAnimationFrame(() => {
        isLoadingRef.current = false
      })
    },
    []
  )

  // Scroll to selectedDate on mount
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    requestAnimationFrame(() => {
      const targetDateStr = initialDateRef.current.toDateString()
      const dayEls = el.querySelectorAll<HTMLElement>('[data-date]')
      for (const dayEl of dayEls) {
        const dateStr = dayEl.getAttribute('data-date')
        if (dateStr && new Date(dateStr).toDateString() === targetDateStr) {
          dayEl.scrollIntoView({ block: 'start' })
          break
        }
      }
    })
  }, [scrollRef])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function handleScroll() {
      if (!el) return

      if (el.scrollTop < SCROLL_THRESHOLD) {
        loadMore('past')
      }

      if (
        el.scrollHeight - el.scrollTop - el.clientHeight <
        SCROLL_THRESHOLD
      ) {
        loadMore('future')
      }

      // Sync selectedDate with visible day (debounced by checking if changed)
      const dayEls = el.querySelectorAll<HTMLElement>('[data-date]')
      const elRect = el.getBoundingClientRect()
      for (const dayEl of dayEls) {
        const rect = dayEl.getBoundingClientRect()
        if (rect.top <= elRect.top + 80 && rect.bottom > elRect.top + 80) {
          const dateStr = dayEl.getAttribute('data-date')
          if (dateStr && dateStr !== lastSyncedDateRef.current) {
            lastSyncedDateRef.current = dateStr
            setSelectedDate(new Date(dateStr))
          }
          break
        }
      }
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [scrollRef, loadMore, setSelectedDate])

  return { dates }
}
