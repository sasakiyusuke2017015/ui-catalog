const TIME_OPTIONS = Array.from({ length: 96 }, (_, i) => {
  const h = Math.floor(i / 4)
  const m = (i % 4) * 15
  return {
    value: h * 60 + m,
    label: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`,
  }
})

interface TimeSelectProps {
  readonly value: number
  readonly onChange: (minutes: number) => void
  readonly error?: boolean
  readonly className?: string
}

export function TimeSelect({ value, onChange, error = false, className = '' }: TimeSelectProps) {
  return (
    <select
      data-component="TimeSelect"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`text-sm px-3 py-2 rounded-lg border bg-surface-hover text-text outline-none focus:border-primary transition-colors ${
        error ? 'border-danger' : 'border-border'
      } ${className}`}
      style={error ? { borderColor: '#dc2626' } : undefined}
    >
      {TIME_OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}
