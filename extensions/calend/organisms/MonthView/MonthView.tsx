import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { selectedDateAtom, activeSlotAtom, eventModalAtom } from '../../state/calendar'
import {
  getMonthCalendarDates,
  isToday,
  isSameMonth,
} from '../../utils/dates'
import { EventCard as EventCardBase } from '../../atoms/EventCard/EventCard'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { useCallback } from 'react'
import type { CalendarEvent } from '../../types'

const WEEKDAY_LABELS = ['日', '月', '火', '水', '木', '金', '土']

function getEventsForDay(
  events: readonly CalendarEvent[],
  date: Date
): readonly CalendarEvent[] {
  const dayStart = new Date(date)
  dayStart.setHours(0, 0, 0, 0)
  const dayEnd = new Date(date)
  dayEnd.setHours(23, 59, 59, 999)

  return events.filter((e) => e.startTime <= dayEnd && e.endTime >= dayStart)
}

interface CalendarStorageProps {
  readonly events: readonly CalendarEvent[]
  readonly removeEvent: (id: string) => Promise<void>
}

export function MonthView({ events, removeEvent }: CalendarStorageProps) {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom)
  const activeSlot = useAtomValue(activeSlotAtom)
  const setActiveSlot = useSetAtom(activeSlotAtom)
  const setModal = useSetAtom(eventModalAtom)
  const calendarDates = getMonthCalendarDates(selectedDate)

  const weeks: Date[][] = []
  for (let i = 0; i < calendarDates.length; i += 7) {
    weeks.push(calendarDates.slice(i, i + 7) as Date[])
  }

  const handleDayClick = useCallback(
    (date: Date) => {
      setSelectedDate(date)
      const dateKey = date.toDateString()
      if (activeSlot?.date === dateKey) {
        setModal({ isOpen: true, date, hour: 9 })
      } else {
        setActiveSlot({ date: dateKey, hour: -1 })
      }
    },
    [activeSlot, setActiveSlot, setModal, setSelectedDate]
  )

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await removeEvent(id)
      } catch (error) {
        throw new Error(`Failed to delete event: ${error}`)
      }
    },
    [removeEvent]
  )

  return (
    <div className="h-full flex flex-col p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-text">
          {format(selectedDate, 'yyyy年M月', { locale: ja })}
        </h2>
      </div>

      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAY_LABELS.map((label, i) => (
          <div
            key={label}
            className={`text-center text-sm font-medium py-2 ${
              i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-text-secondary'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="flex-1 grid grid-rows-[repeat(auto-fill,1fr)]">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 border-b border-border/50">
            {week.map((date) => {
              const today = isToday(date)
              const inMonth = isSameMonth(date, selectedDate)
              const dayEvents = getEventsForDay(events, date)
              const dayOfWeek = date.getDay()
              const isActive = activeSlot?.date === date.toDateString()

              return (
                <div
                  key={date.toISOString()}
                  onClick={() => handleDayClick(date)}
                  className={`relative min-h-[80px] p-1 border-r border-border/50 cursor-pointer transition-colors hover:bg-surface-hover ${
                    !inMonth ? 'opacity-40' : ''
                  } ${today ? 'bg-primary/5' : ''}`}
                >
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none z-20" />
                  )}
                  <div
                    className={`text-sm font-medium mb-1 w-7 h-7 flex items-center justify-center rounded-full ${
                      today
                        ? 'bg-primary text-white'
                        : dayOfWeek === 0
                          ? 'text-red-500'
                          : dayOfWeek === 6
                            ? 'text-blue-500'
                            : 'text-text'
                    }`}
                  >
                    {format(date, 'd')}
                  </div>

                  <div className="space-y-0.5">
                    {dayEvents.slice(0, 3).map((event) => (
                      <EventCardBase
                        key={event.id}
                        variant="compact"
                        title={event.title}
                        color={event.color}
                        onDelete={() => handleDelete(event.id)}
                      />
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-[10px] text-text-secondary px-1">
                        +{dayEvents.length - 3} 件
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
