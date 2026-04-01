import { Provider, createStore } from 'jotai'
import { CalendarDragOverlay } from './CalendarDragOverlay'
import { dragAtom } from '../../hooks/calend/calendar'
import type { DragState } from '../../hooks/calend/calendar'

export default {
  title: 'calend/DragOverlay',
  component: DragOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'ドラッグ操作中にカーソルに追従するゴーストカード。',
      },
    },
  },
}

const mockDrag: DragState = {
  eventId: '1',
  mode: 'move',
  originalEvent: {
    id: '1',
    title: 'チームミーティング',
    startTime: new Date(2026, 2, 20, 10, 0),
    endTime: new Date(2026, 2, 20, 11, 0),
    color: '#4f46e5',
  },
  currentStartTime: new Date(2026, 2, 20, 10, 0),
  currentEndTime: new Date(2026, 2, 20, 11, 0),
  pointerX: 200,
  pointerY: 300,
}

export const WithDrag = {
  render: () => {
    const store = createStore()
    store.set(dragAtom, mockDrag)
    return (
      <Provider store={store}>
        <div style={{ height: '100vh', background: '#f0f0f0', position: 'relative' }}>
          <p style={{ padding: 24 }}>ドラッグ中のゴーストカードが表示されています。</p>
          <CalendarDragOverlay />
        </div>
      </Provider>
    )
  },
}

export const NoDrag = {
  render: () => {
    const store = createStore()
    store.set(dragAtom, null)
    return (
      <Provider store={store}>
        <div style={{ height: '100vh', background: '#f0f0f0' }}>
          <p style={{ padding: 24 }}>ドラッグ無し - ゴーストカードは表示されません。</p>
          <CalendarDragOverlay />
        </div>
      </Provider>
    )
  },
}
