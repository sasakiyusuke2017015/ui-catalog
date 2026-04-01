import { Provider, createStore } from 'jotai'
import { MonthView } from './MonthView'
import { selectedDateAtom } from '../../hooks/calend/calendar'
import type { CalendarEvent } from '../../types/calend'

export default {
  title: 'カレンダー/MonthView',
  component: MonthView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '月表示ビュー。カレンダーグリッド、複数日イベントのスパニングバー、イベントのドラッグ&ドロップに対応。',
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
    startTime: new Date(2026, 2, 20, 10, 0),
    endTime: new Date(2026, 2, 20, 11, 0),
    color: '#4f46e5',
  },
  {
    id: '2',
    title: '出張',
    startTime: new Date(2026, 2, 16, 0, 0),
    endTime: new Date(2026, 2, 19, 23, 59),
    color: '#059669',
    allDay: true,
  },
  {
    id: '3',
    title: 'デザインレビュー',
    startTime: new Date(2026, 2, 25, 14, 0),
    endTime: new Date(2026, 2, 25, 15, 30),
    color: '#dc2626',
  },
  {
    id: '4',
    title: 'スプリント計画',
    startTime: new Date(2026, 2, 23, 9, 0),
    endTime: new Date(2026, 2, 23, 10, 0),
    color: '#8b5cf6',
  },
]

export const Default = {
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 20))
    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <MonthView events={mockEvents} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>
    )
  },
}

export const Empty = {
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 20))
    return (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <MonthView events={[]} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>
    )
  },
}
