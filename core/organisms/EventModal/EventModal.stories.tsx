import { Provider, createStore } from 'jotai'
import { EventModal } from './EventModal'
import { eventModalAtom } from '../../hooks/calend/calendar'
import type { CalendarEvent } from '../../types/calend'

export default {
  title: 'calend/EventModal',
  component: EventModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。',
      },
    },
  },
}

const noop = async () => {}

function createStoreWithModal(overrides: Partial<{ date: Date; hour: number; endHour?: number; editingEvent?: CalendarEvent }> = {}) {
  const store = createStore()
  store.set(eventModalAtom, {
    isOpen: true,
    date: overrides.date ?? new Date(2026, 2, 20),
    hour: overrides.hour ?? 9,
    endHour: overrides.endHour,
    editingEvent: overrides.editingEvent,
  })
  return store
}

export const CreateNew = {
  render: () => {
    const store = createStoreWithModal()
    return (
      <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>
    )
  },
}

export const EditExisting = {
  render: () => {
    const existingEvent: CalendarEvent = {
      id: '1',
      title: 'チームミーティング',
      startTime: new Date(2026, 2, 20, 10, 0),
      endTime: new Date(2026, 2, 20, 11, 0),
      color: '#4f46e5',
      description: 'スプリントの振り返りと次の計画を話し合います。',
    }
    const store = createStoreWithModal({
      date: new Date(2026, 2, 20),
      hour: 10,
      editingEvent: existingEvent,
    })
    return (
      <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>
    )
  },
}

export const WithTimeRange = {
  render: () => {
    const store = createStoreWithModal({
      hour: 14,
      endHour: 16,
    })
    return (
      <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>
    )
  },
}
