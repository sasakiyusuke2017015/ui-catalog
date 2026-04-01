import { Provider } from 'jotai'
import { DayColumn } from './DayColumn'
import type { CalendarEvent } from '../../types/calend'

export default {
  title: 'カレンダー/DayColumn',
  component: DayColumn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '1日分のタイムラインカラム。24時間のスロットとイベントを表示し、スロットドラッグによるイベント作成に対応。',
      },
    },
  },
}

const today = new Date(2026, 2, 20)

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
    title: 'ランチ',
    startTime: new Date(2026, 2, 20, 12, 0),
    endTime: new Date(2026, 2, 20, 13, 0),
    color: '#059669',
  },
  {
    id: '3',
    title: 'デザインレビュー',
    startTime: new Date(2026, 2, 20, 14, 0),
    endTime: new Date(2026, 2, 20, 15, 30),
    color: '#dc2626',
  },
]

const noop = () => {}

export const Default = {
  render: () => (
    <Provider>
      <div style={{ height: '600px', overflow: 'auto' }}>
        <DayColumn
          date={today}
          events={mockEvents}
          slotHeight={56}
          labelWidth={64}
          onDeleteEvent={noop}
          onUpdateEvent={noop}
        />
      </div>
    </Provider>
  ),
}

export const Empty = {
  render: () => (
    <Provider>
      <div style={{ height: '600px', overflow: 'auto' }}>
        <DayColumn
          date={today}
          events={[]}
          slotHeight={56}
          labelWidth={64}
          onDeleteEvent={noop}
          onUpdateEvent={noop}
        />
      </div>
    </Provider>
  ),
}

export const WithoutLabels = {
  render: () => (
    <Provider>
      <div style={{ height: '600px', overflow: 'auto', width: '300px' }}>
        <DayColumn
          date={today}
          events={mockEvents}
          slotHeight={56}
          onDeleteEvent={noop}
          onUpdateEvent={noop}
        />
      </div>
    </Provider>
  ),
}
