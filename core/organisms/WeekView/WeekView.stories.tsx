import { Provider, createStore } from 'jotai'
import { WeekView } from './WeekView'
import { selectedDateAtom } from '../../hooks/calendar/calendar'
import type { CalendarEvent } from '../../types/calendar'

export default {
  title: 'カレンダー/WeekView',
  component: WeekView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '週表示ビュー。7日分のDayColumnを横並びに表示し、終日イベントバー、時間ラベルを含む。',
      },
    },
  },
}

const noop = async () => {}

function createStoreWithDate(date: Date) {
  const store = createStore()
  store.set(selectedDateAtom, date)
  return store
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'チームミーティング',
    startTime: new Date(2026, 2, 16, 10, 0),
    endTime: new Date(2026, 2, 16, 11, 0),
    color: '#4f46e5',
  },
  {
    id: '2',
    title: 'ランチ',
    startTime: new Date(2026, 2, 17, 12, 0),
    endTime: new Date(2026, 2, 17, 13, 0),
    color: '#059669',
  },
  {
    id: '3',
    title: 'デザインレビュー',
    startTime: new Date(2026, 2, 18, 14, 0),
    endTime: new Date(2026, 2, 18, 15, 30),
    color: '#dc2626',
  },
  {
    id: '4',
    title: '終日イベント',
    startTime: new Date(2026, 2, 19, 0, 0),
    endTime: new Date(2026, 2, 19, 23, 59, 59, 999),
    color: '#8b5cf6',
    allDay: true,
  },
  {
    id: '5',
    title: '1on1',
    startTime: new Date(2026, 2, 20, 15, 0),
    endTime: new Date(2026, 2, 20, 15, 30),
    color: '#f59e0b',
  },
]

export const Default = {
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18))
    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <WeekView events={mockEvents} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>
    )
  },
}

export const WithoutAllDayBar = {
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18))
    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <WeekView events={mockEvents} showAllDayBar={false} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>
    )
  },
}

export const Empty = {
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18))
    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <WeekView events={[]} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>
    )
  },
}
