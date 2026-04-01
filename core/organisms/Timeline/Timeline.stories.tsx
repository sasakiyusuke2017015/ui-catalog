import { Provider } from 'jotai'
import { Timeline } from './Timeline'
import type { CalendarEvent } from '../../types/calend'

export default {
  title: 'カレンダー/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '無限スクロール対応のタイムラインビュー。DayFrameを連続表示し、日単位でイベントを描画する。',
      },
    },
  },
}

const noop = async () => {}

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
    startTime: new Date(2026, 2, 21, 14, 0),
    endTime: new Date(2026, 2, 21, 15, 30),
    color: '#dc2626',
  },
]

export const Default = {
  render: () => (
    <Provider>
      <div style={{ height: '100vh' }}>
        <Timeline events={mockEvents} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
  ),
}

export const SubtleHeader = {
  render: () => (
    <Provider>
      <div style={{ height: '100vh' }}>
        <Timeline events={mockEvents} headerVariant="subtle" persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
  ),
}

export const Empty = {
  render: () => (
    <Provider>
      <div style={{ height: '100vh' }}>
        <Timeline events={[]} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
  ),
}
