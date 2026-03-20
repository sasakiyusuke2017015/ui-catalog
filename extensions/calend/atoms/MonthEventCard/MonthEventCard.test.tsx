import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MonthEventCard } from './MonthEventCard'
import type { CalendarEvent } from '../../types'

const mockEvent: CalendarEvent = {
  id: '1',
  title: 'Test Event',
  startTime: new Date('2026-03-20T09:00:00'),
  endTime: new Date('2026-03-20T10:00:00'),
  color: '#4f46e5',
}

describe('MonthEventCard', () => {
  const defaultProps = {
    event: mockEvent,
    isDragging: false,
    onClick: vi.fn(),
    onPointerDown: vi.fn(),
  }

  it('renders event title', () => {
    render(<MonthEventCard {...defaultProps} />)
    expect(screen.getByText('Test Event')).toBeTruthy()
  })

  it('has data-component attribute', () => {
    render(<MonthEventCard {...defaultProps} />)
    expect(screen.getByText('Test Event').closest('[data-component]')).toHaveAttribute('data-component', 'event-card')
  })

  it('displays formatted start and end times', () => {
    render(<MonthEventCard {...defaultProps} />)
    expect(screen.getByText('09:00 - 10:00')).toBeTruthy()
  })

  it('applies event color to the dot', () => {
    const { container } = render(<MonthEventCard {...defaultProps} />)
    const dot = container.querySelector('[class*="dot"]') as HTMLElement
    expect(dot.style.backgroundColor).toBe('rgb(79, 70, 229)')
  })

  it('applies reduced opacity when isDragging is true', () => {
    render(<MonthEventCard {...defaultProps} isDragging />)
    const card = screen.getByText('Test Event').closest('[data-component]') as HTMLElement
    expect(card.style.opacity).toBe('0.4')
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<MonthEventCard {...defaultProps} onClick={onClick} />)
    fireEvent.click(screen.getByText('Test Event').closest('[data-component]')!)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onPointerDown on pointer down', () => {
    const onPointerDown = vi.fn()
    render(<MonthEventCard {...defaultProps} onPointerDown={onPointerDown} />)
    fireEvent.pointerDown(screen.getByText('Test Event').closest('[data-component]')!)
    expect(onPointerDown).toHaveBeenCalledTimes(1)
  })
})
