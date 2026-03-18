/**
 * @ui-catalog/core/extensions/calend
 *
 * calend プロジェクト固有のコンポーネント
 */

// Calendar atoms (presentational)
export { EventCard } from './atoms/EventCard/EventCard'
export type { EventCardProps } from './atoms/EventCard/EventCard'
export { TimeSlotRow } from './atoms/TimeSlotRow/TimeSlotRow'
export type { TimeSlotRowProps } from './atoms/TimeSlotRow/TimeSlotRow'

// Types
export type { CalendarEvent, TimeSlot, DayData, DateRange, ViewMode } from './types'

// State (Jotai atoms)
export {
  eventsAtom,
  selectedDateAtom,
  viewModeAtom,
  editingEventAtom,
  hoveredEventAtom,
  activeSlotAtom,
  dragAtom,
  eventModalAtom,
  addEventAtom,
  updateEventAtom,
  removeEventAtom,
  eventsForDateAtom,
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

// Organisms
export { EventCard as EventCardOrganism } from './organisms/EventCard/EventCard'
export { DayColumn } from './organisms/DayColumn/DayColumn'
export { Timeline } from './organisms/Timeline/Timeline'
export { WeekView } from './organisms/WeekView/WeekView'
export { MonthView } from './organisms/MonthView/MonthView'
export { EventModal } from './organisms/EventModal/EventModal'
export { Header } from './organisms/Header/Header'

// Molecules
export { EventPopover } from './molecules/EventPopover/EventPopover'
