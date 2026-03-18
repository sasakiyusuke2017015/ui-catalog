import { useState, useEffect, useRef, useCallback } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { eventModalAtom, activeSlotAtom } from '../../state/calendar'
import { format } from 'date-fns'
import { Modal } from '@ui-catalog/core/organisms'
import { Button, Input, TextArea, Checkbox } from '@ui-catalog/core/atoms'
import Icon from '@ui-catalog/core/atoms/Icon'
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

interface EventModalProps {
  readonly persistEvent: (event: CalendarEvent) => Promise<void>
}

export function EventModal({ persistEvent }: EventModalProps) {
  const [modal, setModal] = useAtom(eventModalAtom)
  const setActiveSlot = useSetAtom(activeSlotAtom)
  const titleRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState('')
  const [startDateStr, setStartDateStr] = useState('')
  const [endDateStr, setEndDateStr] = useState('')
  const [allDay, setAllDay] = useState(false)
  const [startHour, setStartHour] = useState(9)
  const [endHour, setEndHour] = useState(10)
  const [color, setColor] = useState(EVENT_COLORS[0]!.value)
  const [description, setDescription] = useState('')

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
          endTime.setHours(startHour + 1, 0, 0, 0)
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

  if (!modal.isOpen) return null

  return (
    <Modal
      isOpen={modal.isOpen}
      onClose={close}
      title={modal.editingEvent ? 'イベントを編集' : 'イベントを追加'}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            ref={titleRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タイトルを追加"
            size="large"
          />

          <div className="flex items-center gap-3">
            <Icon name="Calendar" size={20} className="text-text-secondary shrink-0" />
            <Input
              type="date"
              value={startDateStr}
              onChange={(e) => {
                setStartDateStr(e.target.value)
                if (e.target.value > endDateStr) setEndDateStr(e.target.value)
              }}
              size="small"
            />
            <span className="text-text-secondary">-</span>
            <Input
              type="date"
              value={endDateStr}
              min={startDateStr}
              onChange={(e) => setEndDateStr(e.target.value)}
              size="small"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5" />
            <Checkbox
              checked={allDay}
              onChange={(e) => setAllDay((e.target as HTMLInputElement).checked)}
              label="終日"
            />
          </div>

          {!allDay && (
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={20} className="text-text-secondary shrink-0" />
              <select
                value={startHour}
                onChange={(e) => {
                  const h = Number(e.target.value)
                  setStartHour(h)
                  if (endHour <= h) setEndHour(Math.min(h + 1, 23))
                }}
                className="text-sm px-3 py-2 rounded-lg border border-border bg-surface-hover text-text outline-none focus:border-primary transition-colors"
              >
                {HOUR_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <span className="text-text-secondary">-</span>
              <select
                value={endHour}
                onChange={(e) => setEndHour(Number(e.target.value))}
                className="text-sm px-3 py-2 rounded-lg border border-border bg-surface-hover text-text outline-none focus:border-primary transition-colors"
              >
                {HOUR_OPTIONS.filter((o) => o.value > startHour).map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Icon name="Palette" size={20} className="text-text-secondary shrink-0" />
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
                  title={c.label}
                />
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="FileText" size={20} className="text-text-secondary shrink-0 mt-2" />
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="説明を追加"
              rows={2}
              size="small"
            />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '8px',
          marginTop: '24px',
        }}>
          <Button variant="secondary" onClick={close}>
            キャンセル
          </Button>
          <button
            type="submit"
            disabled={!title.trim()}
            style={{
              padding: '8px 24px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'white',
              backgroundColor: !title.trim() ? '#a5b4fc' : '#4f46e5',
              borderRadius: '8px',
              border: 'none',
              cursor: !title.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            保存
          </button>
        </div>
      </form>
    </Modal>
  )
}
