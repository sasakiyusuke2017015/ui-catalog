/**
 * @ui-catalog/core/calend
 *
 * calend カレンダーモジュール
 */

// Calendar atoms (presentational)
export { EventCard } from './atoms/EventCard/EventCard'
export type { EventCardProps } from './atoms/EventCard/EventCard'
export { IconLabel } from './atoms/IconLabel/IconLabel'
export { MonthEventCard } from './atoms/MonthEventCard/MonthEventCard'
export { TimeSlotRow } from './atoms/TimeSlotRow/TimeSlotRow'
export type { TimeSlotRowProps } from './atoms/TimeSlotRow/TimeSlotRow'

// Types
export type { CalendarEvent, TimeSlot, DayData, DateRange as CalendDateRange, ViewMode, DayOfWeek, EventMode } from './types'

// State (Jotai atoms)
export {
  eventsAtom,
  selectedDateAtom,
  viewModeAtom,
  hoveredEventAtom,
  activeSlotAtom,
  dragAtom,
  anyDragActiveAtom,
  eventModalAtom,
} from './state/calendar'
export type { ModalState, HoveredEvent, ActiveSlot, DragState } from './state/calendar'

// Hooks
export { useDragEvent } from './hooks/useDragEvent'
export { useInfiniteTimeline } from './hooks/useInfiniteTimeline'

// Utils
export {
  generateDayData,
  generateDateRange,
  extendDateRange,
  formatDayHeader,
  formatHour,
  getWeekDates,
  getMonthCalendarDates,
  formatMonthHeader,
  navigateDate,
  isSameDay,
  isSameMonth,
  isToday,
  getDay,
} from './utils/dates'
export { layoutEvents } from './utils/layoutEvents'
export type { LayoutedEvent } from './utils/layoutEvents'
export {
  snapToInterval,
  pxToMinutes,
  applyMoveDelta,
  applyResizeDelta,
  clampToDay,
} from './utils/dragUtils'
export { resolveOriginalEvent, getEffectiveDayOffset } from './utils/repeatUtils'

// Organisms
export { Timeline } from './organisms/Timeline/Timeline'
export { WeekView } from './organisms/WeekView/WeekView'
export { MonthView } from './organisms/MonthView/MonthView'
export { EventModal } from './organisms/EventModal/EventModal'
export { CalendHeader } from './organisms/Header/Header'

// Molecules
export { EventPopover } from './molecules/EventPopover/EventPopover'
export { SpanningBar } from './molecules/SpanningBar/SpanningBar'
export { PillSelect } from './molecules/PillSelect/PillSelect'
export { DayOfWeekPicker } from './molecules/DayOfWeekPicker/DayOfWeekPicker'
export { ColorPicker, EVENT_COLORS } from './molecules/ColorPicker/ColorPicker'
export type { ColorOption } from './molecules/ColorPicker/ColorPicker'
export { IconPicker, EVENT_ICONS } from './molecules/IconPicker/IconPicker'
export { MonthDayCell } from './molecules/MonthDayCell/MonthDayCell'
export { TimeSelect } from './molecules/TimeSelect/TimeSelect'
