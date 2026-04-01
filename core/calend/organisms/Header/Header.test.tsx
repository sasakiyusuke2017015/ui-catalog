import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'jotai'
import { CalendHeader } from './Header'

describe('CalendHeader', () => {
  it('renders without errors', () => {
    const { container } = render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    expect(container.querySelector('header')).toBeTruthy()
  })

  it('renders the Calendar title', () => {
    render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    expect(screen.getByText('Calendar')).toBeTruthy()
  })

  it('renders view mode buttons', () => {
    render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    expect(screen.getByText('日')).toBeTruthy()
    expect(screen.getByText('週')).toBeTruthy()
    expect(screen.getByText('月')).toBeTruthy()
  })

  it('renders Today button', () => {
    render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    expect(screen.getByText('Today')).toBeTruthy()
  })

  it('renders navigation buttons', () => {
    const { container } = render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
  })

  it('renders header element', () => {
    const { container } = render(
      <Provider>
        <CalendHeader />
      </Provider>
    )
    const header = container.querySelector('header')
    expect(header).toBeTruthy()
  })
})
