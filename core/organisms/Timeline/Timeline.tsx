import { useRef, useCallback, useState, useEffect, useMemo } from 'react'
import { useInfiniteTimeline } from '../../hooks/calend/useInfiniteTimeline'
import { DayFrame } from '../DayFrame/DayFrame'
import { CalendarDragOverlay } from '../CalendarDragOverlay/CalendarDragOverlay'
import type { CalendarEvent } from '../../types/calend'

// DayFrame の高さ: 24スロット × 56px + ヘッダー約60px = 約1404px
const DAY_FRAME_HEIGHT = 1404
// 前後何日分を追加でレンダリングするか（バッファ）
const RENDER_BUFFER = 3

interface CalendarStorageProps {
  readonly events: readonly CalendarEvent[]
  readonly headerVariant?: 'blur' | 'subtle'
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
  readonly removeEvent: (id: string) => Promise<void>
}

export function Timeline({ events, headerVariant, persistEvent, removeEvent }: CalendarStorageProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { dates } = useInfiniteTimeline(scrollRef)

  // 仮想スクロール: 表示範囲のインデックス
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 })

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await removeEvent(id)
      } catch (error) {
        throw new Error(`Failed to delete event: ${error}`)
      }
    },
    [removeEvent]
  )

  const handleUpdate = useCallback(
    async (event: CalendarEvent) => {
      try {
        await persistEvent(event)
      } catch (error) {
        throw new Error(`Failed to update event: ${error}`)
      }
    },
    [persistEvent]
  )

  // スクロール位置から表示範囲を計算
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function updateVisibleRange() {
      if (!el) return
      const scrollTop = el.scrollTop
      const viewportHeight = el.clientHeight

      // 現在表示されている最初と最後のインデックス
      const startIndex = Math.max(0, Math.floor(scrollTop / DAY_FRAME_HEIGHT) - RENDER_BUFFER)
      const endIndex = Math.min(
        dates.length - 1,
        Math.ceil((scrollTop + viewportHeight) / DAY_FRAME_HEIGHT) + RENDER_BUFFER
      )

      setVisibleRange((prev) => {
        if (prev.start === startIndex && prev.end === endIndex) return prev
        return { start: startIndex, end: endIndex }
      })
    }

    // 初回計算
    updateVisibleRange()

    el.addEventListener('scroll', updateVisibleRange, { passive: true })
    return () => el.removeEventListener('scroll', updateVisibleRange)
  }, [dates.length])

  // 全体の高さ
  const totalHeight = dates.length * DAY_FRAME_HEIGHT

  // レンダリングする日付
  const visibleDates = useMemo(() => {
    return dates.slice(visibleRange.start, visibleRange.end + 1)
  }, [dates, visibleRange.start, visibleRange.end])

  return (
    <div
      data-component="Timeline"
      ref={scrollRef}
      className="h-full overflow-y-auto"
    >
      {/* 仮想スクロール用コンテナ */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleDates.map((date, idx) => {
          const actualIndex = visibleRange.start + idx
          return (
            <div
              key={date.toISOString()}
              style={{
                position: 'absolute',
                top: actualIndex * DAY_FRAME_HEIGHT,
                left: 0,
                right: 0,
                height: DAY_FRAME_HEIGHT,
              }}
            >
              <DayFrame
                date={date}
                events={events}
                headerVariant={headerVariant}
                onDeleteEvent={handleDelete}
                onUpdateEvent={handleUpdate}
              />
            </div>
          )
        })}
      </div>
      <CalendarDragOverlay />
    </div>
  )
}
