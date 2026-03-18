export interface CalendarEvent {
  readonly id: string
  readonly title: string
  readonly startTime: Date
  readonly endTime: Date
  readonly color: string
  readonly description?: string
  readonly allDay?: boolean
}

export interface TimeSlot {
  readonly date: Date
  readonly hour: number
  readonly events: readonly CalendarEvent[]
}

export interface DayData {
  readonly date: Date
  readonly slots: readonly TimeSlot[]
}

export interface DateRange {
  readonly start: Date
  readonly end: Date
}

export type ViewMode = 'day' | 'week' | 'month'
