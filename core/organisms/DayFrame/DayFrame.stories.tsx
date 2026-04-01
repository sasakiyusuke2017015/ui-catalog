import { Provider } from 'jotai'
import { DayFrame } from './DayFrame'
import type { CalendarEvent } from '../../types/calend'

export default {
  title: 'calend/DayFrame',
  component: DayFrame,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '1日分のフレーム。日付ヘッダーとDayColumnを含み、スティッキーヘッダー対応。blur/subtleの2つのヘッダーバリアントを持つ。',
      },
    },
  },
}

const today = new Date(2026, 2, 20)

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'モーニングスタンドアップ',
    startTime: new Date(2026, 2, 20, 9, 0),
    endTime: new Date(2026, 2, 20, 9, 30),
    color: '#4f46e5',
  },
  {
    id: '2',
    title: 'プロジェクトレビュー',
    startTime: new Date(2026, 2, 20, 14, 0),
    endTime: new Date(2026, 2, 20, 15, 30),
    color: '#059669',
  },
]

const noop = () => {}

export const Default = {
  render: () => (
    <Provider>
      <div style={{ height: '600px', overflow: 'auto' }}>
        <DayFrame
          date={today}
          events={mockEvents}
          onDeleteEvent={noop}
          onUpdateEvent={noop}
        />
      </div>
    </Provider>
  ),
}

export const SubtleHeader = {
  render: () => (
    <Provider>
      <div style={{ height: '600px', overflow: 'auto' }}>
        <DayFrame
          date={today}
          events={mockEvents}
          headerVariant="subtle"
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
        <DayFrame
          date={today}
          events={[]}
          onDeleteEvent={noop}
          onUpdateEvent={noop}
        />
      </div>
    </Provider>
  ),
}
