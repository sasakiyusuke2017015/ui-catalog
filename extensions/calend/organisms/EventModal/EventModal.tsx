import { useState, useEffect, useRef, useCallback } from 'react'
import { useAtom, useSetAtom, useAtomValue } from 'jotai'
import { eventModalAtom, activeSlotAtom, viewModeAtom } from '../../state/calendar'
import { format } from 'date-fns'
import { Button, Input, TextArea, Checkbox } from '@ui-catalog/core/atoms'
import type { CalendarEvent } from '../../types'

const EVENT_COLORS = [
  { value: '#4f46e5', label: 'Indigo' },
  { value: '#059669', label: 'Green' },
  { value: '#d97706', label: 'Amber' },
  { value: '#dc2626', label: 'Red' },
  { value: '#7c3aed', label: 'Purple' },
  { value: '#0891b2', label: 'Cyan' },
  { value: '#be185d', label: 'Pink' },
]

const HOUR_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  value: i,
  label: `${i.toString().padStart(2, '0')}:00`,
}))

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

const selectClass = 'text-sm px-3 py-2 rounded-lg border border-border bg-surface-hover text-text outline-none focus:border-primary transition-colors'
const labelClass = 'text-xs text-text-secondary font-medium'

interface EventModalProps {
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
}

export function EventModal({ persistEvent }: EventModalProps) {
  const [modal, setModal] = useAtom(eventModalAtom)
  const setActiveSlot = useSetAtom(activeSlotAtom)
  const activeSlot = useAtomValue(activeSlotAtom)
  const viewMode = useAtomValue(viewModeAtom)
  const titleRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const [title, setTitle] = useState('')
  const [startDateStr, setStartDateStr] = useState('')
  const [endDateStr, setEndDateStr] = useState('')
  const [allDay, setAllDay] = useState(false)
  const [startHour, setStartHour] = useState(9)
  const [endHour, setEndHour] = useState(10)
  const [color, setColor] = useState(EVENT_COLORS[0]!.value)
  const [description, setDescription] = useState('')
  const [panelPos, setPanelPos] = useState<{ top?: number; left?: number; right?: number } | null>(null)
  const [posReady, setPosReady] = useState(false)

  // Calculate position to avoid covering the target column
  useEffect(() => {
    if (!modal.isOpen) {
      setPanelPos(null)
      setPosReady(false)
      return
    }
    setPosReady(false)

    // Wait for panel to render so we can measure it
    requestAnimationFrame(() => {
      const panel = panelRef.current
      if (!panel) return

      const panelW = panel.offsetWidth
      const panelH = panel.offsetHeight
      const vw = window.innerWidth
      const vh = window.innerHeight
      const margin = 12

      // Find the column to avoid by matching the modal's target date
      const targetDate = modal.editingEvent
        ? modal.editingEvent.startTime
        : modal.date
      const targetDay = targetDate.toDateString()

      let targetRect: DOMRect | null = null

      // Find column by data-date attribute (week/day view)
      const dateCols = document.querySelectorAll('[data-date]')
      for (const col of dateCols) {
        const colDate = new Date((col as HTMLElement).dataset.date!)
        if (colDate.toDateString() === targetDay) {
          targetRect = col.getBoundingClientRect()
          break
        }
      }

      // Find cell by data-month-date attribute (month view)
      if (!targetRect) {
        const monthCells = document.querySelectorAll('[data-month-date]')
        for (const cell of monthCells) {
          const cellDate = new Date((cell as HTMLElement).dataset.monthDate!)
          if (cellDate.toDateString() === targetDay) {
            targetRect = cell.getBoundingClientRect()
            break
          }
        }
      }

      // Fallback: find active slot border
      if (!targetRect) {
        const activeSlotEl = document.querySelector('.border-primary')
        if (activeSlotEl) {
          targetRect = activeSlotEl.getBoundingClientRect()
        }
      }

      if (!targetRect) {
        setPanelPos(null)
        requestAnimationFrame(() => setPosReady(true))
        return
      }

      const anchorY = Math.max(margin, Math.min(targetRect.top, vh - panelH - margin))

      // Try right side of target
      if (targetRect.right + margin + panelW < vw) {
        setPanelPos({ top: anchorY, left: targetRect.right + margin })
      } else if (targetRect.left - margin - panelW > 0) {
        // Try left side of target
        setPanelPos({ top: anchorY, right: vw - targetRect.left + margin })
      } else {
        // Fallback: center
        setPanelPos(null)
      }

      requestAnimationFrame(() => setPosReady(true))
    })
  }, [modal.isOpen, modal.editingEvent, activeSlot, viewMode])

  useEffect(() => {
    if (modal.isOpen) {
      const editing = modal.editingEvent
      if (editing) {
        setTitle(editing.title)
        setStartDateStr(format(editing.startTime, 'yyyy-MM-dd'))
        setEndDateStr(format(editing.endTime, 'yyyy-MM-dd'))
        setAllDay(editing.allDay ?? false)
        setStartHour(editing.startTime.getHours())
        setEndHour(editing.endTime.getHours())
        setColor(editing.color)
        setDescription(editing.description ?? '')
      } else {
        const d = format(modal.date, 'yyyy-MM-dd')
        setTitle('')
        setStartDateStr(d)
        setEndDateStr(d)
        setAllDay(false)
        setStartHour(modal.hour)
        setEndHour(modal.endHour ?? Math.min(modal.hour + 1, 23))
        setColor(EVENT_COLORS[0]!.value)
        setDescription('')
      }

      requestAnimationFrame(() => titleRef.current?.focus())
    }
  }, [modal.isOpen, modal.date, modal.hour, modal.editingEvent])

  const close = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }))
    setActiveSlot(null)
  }, [setModal, setActiveSlot])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!title.trim()) return

      const startTime = new Date(startDateStr)
      const endTime = new Date(endDateStr)

      if (allDay) {
        startTime.setHours(0, 0, 0, 0)
        endTime.setHours(23, 59, 59, 999)
      } else {
        startTime.setHours(startHour, 0, 0, 0)
        endTime.setHours(endHour, 0, 0, 0)
        if (endTime <= startTime) {
          endTime.setDate(endTime.getDate() + 1)
        }
      }

      const event = {
        id: modal.editingEvent?.id ?? generateId(),
        title: title.trim(),
        startTime,
        endTime,
        color,
        allDay: allDay || undefined,
        description: description.trim() || undefined,
      }

      try {
        await persistEvent(event)
        close()
      } catch (error) {
        throw new Error(`Failed to save event: ${error}`)
      }
    },
    [title, startDateStr, endDateStr, allDay, startHour, endHour, color, description, modal.editingEvent, persistEvent, close]
  )

  // ESC to close
  useEffect(() => {
    if (!modal.isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modal.isOpen, close])

  if (!modal.isOpen) return null

  // Validation
  const hasTitle = title.trim().length > 0
  const isDateInvalid = !allDay && startDateStr === endDateStr && endHour <= startHour
  const isDateRangeInvalid = startDateStr > endDateStr
  const canSubmit = hasTitle && !isDateInvalid && !isDateRangeInvalid

  const panelStyle: React.CSSProperties = panelPos
    ? {
        position: 'fixed',
        top: panelPos.top !== undefined ? `${panelPos.top}px` : undefined,
        left: panelPos.left !== undefined ? `${panelPos.left}px` : undefined,
        right: panelPos.right !== undefined ? `${panelPos.right}px` : undefined,
        width: '380px',
        maxHeight: '80vh',
        zIndex: 10000,
      }
    : {
        width: '380px',
        maxHeight: '80vh',
      }

  const panelContent = (
    <div
      ref={panelRef}
      style={{
        ...panelStyle,
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        opacity: posReady ? 1 : 0,
        transform: posReady ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(6px)',
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', margin: 0 }}>
          {modal.editingEvent ? 'イベントを編集' : 'イベントを追加'}
        </h3>
        <button
          onClick={close}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            border: 'none',
            background: 'none',
            color: '#64748b',
            cursor: 'pointer',
            borderRadius: '8px',
            fontSize: '18px',
          }}
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 24px', overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* タイトル */}
            <div>
              <div className={labelClass} style={{ marginBottom: '4px' }}>タイトル</div>
              <Input
                ref={titleRef}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="タイトルを追加"
                size="large"
              />
            </div>

            {/* 終日チェック */}
            <Checkbox
              checked={allDay}
              onChange={(e) => setAllDay((e.target as HTMLInputElement).checked)}
              label="終日"
            />

            {/* 日時 */}
            {allDay ? (
              <div>
                <div className={labelClass} style={{ marginBottom: '4px' }}>期間</div>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={startDateStr}
                    onChange={(e) => {
                      setStartDateStr(e.target.value)
                      if (e.target.value > endDateStr) setEndDateStr(e.target.value)
                    }}
                    size="small"
                  />
                  <span className="text-text-secondary text-sm">-</span>
                  <Input
                    type="date"
                    value={endDateStr}
                    min={startDateStr}
                    onChange={(e) => setEndDateStr(e.target.value)}
                    size="small"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className={labelClass} style={{ marginBottom: '4px' }}>開始</div>
                <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                  <Input
                    type="date"
                    value={startDateStr}
                    onChange={(e) => {
                      setStartDateStr(e.target.value)
                      if (e.target.value > endDateStr) setEndDateStr(e.target.value)
                    }}
                    size="small"
                  />
                  <select
                    value={startHour}
                    onChange={(e) => {
                      const h = Number(e.target.value)
                      setStartHour(h)
                      if (endHour <= h && startDateStr === endDateStr) {
                        setEndHour(Math.min(h + 1, 23))
                      }
                    }}
                    className={selectClass}
                  >
                    {HOUR_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div className={labelClass} style={{ marginBottom: '4px', color: isDateInvalid || isDateRangeInvalid ? '#dc2626' : undefined }}>
                  終了 {(isDateInvalid || isDateRangeInvalid) && <span style={{ fontSize: '11px' }}>※ 開始より後にしてください</span>}
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={endDateStr}
                    min={startDateStr}
                    onChange={(e) => setEndDateStr(e.target.value)}
                    size="small"
                  />
                  <select
                    value={endHour}
                    onChange={(e) => setEndHour(Number(e.target.value))}
                    className={selectClass}
                    style={(isDateInvalid) ? { borderColor: '#dc2626' } : undefined}
                  >
                    {HOUR_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* カラー */}
            <div>
              <div className={labelClass} style={{ marginBottom: '4px' }}>カラー</div>
              <div className="flex gap-2">
                {EVENT_COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setColor(c.value)}
                    className={`w-7 h-7 rounded-full transition-all ${
                      color === c.value
                        ? 'ring-2 ring-offset-2 ring-primary scale-110'
                        : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
            </div>

            {/* 説明 */}
            <div>
              <div className={labelClass} style={{ marginBottom: '4px' }}>説明</div>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="説明を追加"
                rows={4}
                size="small"
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px',
            marginTop: '20px',
          }}>
            <Button variant="secondary" onClick={close}>
              キャンセル
            </Button>
            <button
              type="submit"
              disabled={!canSubmit}
              style={{
                padding: '8px 24px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'white',
                backgroundColor: !canSubmit ? '#a5b4fc' : '#4f46e5',
                borderRadius: '8px',
                border: 'none',
                cursor: !canSubmit ? 'not-allowed' : 'pointer',
              }}
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: panelPos ? 'flex-start' : 'center',
        justifyContent: panelPos ? 'flex-start' : 'center',
        backgroundColor: posReady ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 0.2s ease-out',
        zIndex: 10000,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      {panelContent}
    </div>
  )
}
