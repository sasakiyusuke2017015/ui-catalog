import { EventCard } from './EventCard'

export default {
  title: 'calend/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'タイムライン表示とコンパクト表示の2モードを持つイベントカード。',
      },
    },
  },
}

export const Timeline = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '300px' }}>
      <EventCard
        title="チームミーティング"
        startLabel="10:00"
        endLabel="11:00"
        top={0}
        height={80}
        color="#4f46e5"
      />
    </div>
  ),
}

export const TimelineWithPosition = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '300px' }}>
      <EventCard
        title="デザインレビュー"
        startLabel="14:00"
        endLabel="15:30"
        top={0}
        height={120}
        color="#059669"
        leftPercent={0}
        widthPercent={50}
      />
      <EventCard
        title="1on1"
        startLabel="14:30"
        endLabel="15:00"
        top={40}
        height={60}
        color="#dc2626"
        leftPercent={50}
        widthPercent={50}
        zColumn={1}
      />
    </div>
  ),
}

export const Compact = {
  render: () => (
    <div style={{ width: '200px' }}>
      <EventCard
        variant="compact"
        title="終日イベント"
        color="#8b5cf6"
      />
    </div>
  ),
}

export const CompactWithDelete = {
  render: () => (
    <div style={{ width: '200px' }}>
      <EventCard
        variant="compact"
        title="削除可能なイベント"
        color="#f59e0b"
        onDelete={() => {}}
      />
    </div>
  ),
}

export const Dragging = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EventCard
        title="ドラッグ中のイベント"
        startLabel="09:00"
        endLabel="10:00"
        top={0}
        height={80}
        color="#4f46e5"
        isDragging
      />
    </div>
  ),
}

export const Hovered = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EventCard
        title="ホバー中のイベント"
        startLabel="09:00"
        endLabel="10:00"
        top={0}
        height={80}
        color="#4f46e5"
        isHovered
      />
    </div>
  ),
}
