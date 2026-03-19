import {
  addDays,
  addWeeks,
  addMonths,
  subDays,
  subWeeks,
  subMonths,
  startOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  eachHourOfInterval,
  startOfHour,
  endOfDay,
  getDay,
} from 'date-fns'
import { ja } from 'date-fns/locale'
import type { DayData, TimeSlot, CalendarEvent } from '../types'

export function generateDayData(
  date: Date,
  events: readonly CalendarEvent[]
): DayData {
  const dayStart = startOfDay(date)
  const dayEnd = endOfDay(date)
  const hours = eachHourOfInterval({ start: dayStart, end: dayEnd })

  const slots: TimeSlot[] = hours.map((hour) => {
    const hourStart = startOfHour(hour)
    const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000)

    const slotEvents = events.filter((event) => {
      return event.startTime < hourEnd && event.endTime > hourStart
    })

    return {
      date: dayStart,
      hour: hour.getHours(),
      events: slotEvents,
    }
  })

  return { date: dayStart, slots }
}

export function generateDateRange(
  centerDate: Date,
  daysBefore: number,
  daysAfter: number
): readonly Date[] {
  const dates: Date[] = []
  const start = subDays(startOfDay(centerDate), daysBefore)

  for (let i = 0; i < daysBefore + daysAfter + 1; i++) {
    dates.push(addDays(start, i))
  }

  return dates
}

export function extendDateRange(
  existingDates: readonly Date[],
  direction: 'past' | 'future',
  count: number
): readonly Date[] {
  if (existingDates.length === 0) {
    return generateDateRange(new Date(), count, count)
  }

  const newDates: Date[] = []

  if (direction === 'past') {
    const earliest = existingDates[0]!
    for (let i = count; i >= 1; i--) {
      newDates.push(subDays(earliest, i))
    }
    return [...newDates, ...existingDates]
  }

  const latest = existingDates[existingDates.length - 1]!
  for (let i = 1; i <= count; i++) {
    newDates.push(addDays(latest, i))
  }
  return [...existingDates, ...newDates]
}

export function formatDayHeader(date: Date): string {
  const dayOfWeek = format(date, 'E', { locale: ja })
  const dateStr = format(date, 'M/d')
  return `${dateStr} (${dayOfWeek})`
}

export function formatHour(hour: number): string {
  return `${hour.toString().padStart(2, '0')}:00`
}

export function getWeekDates(date: Date): readonly Date[] {
  const weekStart = startOfWeek(date, { weekStartsOn: 0 })
  const weekEnd = endOfWeek(date, { weekStartsOn: 0 })
  return eachDayOfInterval({ start: weekStart, end: weekEnd })
}

export function getMonthCalendarDates(date: Date): readonly Date[] {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })
  return eachDayOfInterval({ start: calendarStart, end: calendarEnd })
}

export function formatMonthHeader(date: Date): string {
  return format(date, 'yyyy年M月', { locale: ja })
}

export function navigateDate(
  date: Date,
  direction: 'prev' | 'next',
  mode: 'day' | 'week' | 'month'
): Date {
  const amount = direction === 'next' ? 1 : -1
  switch (mode) {
    case 'day':
      return amount > 0 ? addDays(date, 1) : subDays(date, 1)
    case 'week':
      return amount > 0 ? addWeeks(date, 1) : subWeeks(date, 1)
    case 'month':
      return amount > 0 ? addMonths(date, 1) : subMonths(date, 1)
  }
}

/**
 * その日においてイベントが全日をカバーしているか判定
 * 例: 3/10 23:30 ~ 3/13 09:00 の場合
 *   3/10 → false (23:30開始)
 *   3/11 → true  (0:00~24:00カバー)
 *   3/12 → true  (0:00~24:00カバー)
 *   3/13 → false (09:00終了)
 */
export function coversFullDay(event: CalendarEvent, date: Date): boolean {
  const dayStart = startOfDay(date)
  const dayEnd = endOfDay(date)
  return event.startTime <= dayStart && event.endTime >= dayEnd
}

export function getEventsForDay(
  events: readonly CalendarEvent[],
  date: Date
): readonly CalendarEvent[] {
  const ds = startOfDay(date)
  const de = endOfDay(date)
  return events.filter((e) => e.startTime <= de && e.endTime >= ds)
}

export { isSameDay, isSameMonth, isToday, getDay }
