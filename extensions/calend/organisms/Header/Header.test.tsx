import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'jotai'
import { Header } from './Header'

describe('Header', () => {
  it('renders without errors', () => {
    const { container } = render(
      <Provider>
        <Header />
      </Provider>
    )
    expect(container.querySelector('header')).toBeTruthy()
  })

  it('renders the Calendar title', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )
    expect(screen.getByText('Calendar')).toBeTruthy()
  })

  it('renders view mode buttons', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )
    expect(screen.getByText('日')).toBeTruthy()
    expect(screen.getByText('週')).toBeTruthy()
    expect(screen.getByText('月')).toBeTruthy()
  })

  it('renders Today button', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )
    expect(screen.getByText('Today')).toBeTruthy()
  })

  it('renders navigation buttons', () => {
    const { container } = render(
      <Provider>
        <Header />
      </Provider>
    )
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
  })

  it('renders header element', () => {
    const { container } = render(
      <Provider>
        <Header />
      </Provider>
    )
    const header = container.querySelector('header')
    expect(header).toBeTruthy()
    expect(header?.style.zIndex).toBe('50')
  })
})
