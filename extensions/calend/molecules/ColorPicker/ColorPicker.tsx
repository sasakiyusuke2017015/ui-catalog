const EVENT_COLORS = [
  { value: '#4f46e5', label: 'Indigo' },
  { value: '#059669', label: 'Green' },
  { value: '#d97706', label: 'Amber' },
  { value: '#dc2626', label: 'Red' },
  { value: '#7c3aed', label: 'Purple' },
  { value: '#0891b2', label: 'Cyan' },
  { value: '#be185d', label: 'Pink' },
] as const

interface ColorPickerProps {
  readonly value: string
  readonly onChange: (color: string) => void
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {EVENT_COLORS.map((c) => (
        <button
          key={c.value}
          type="button"
          onClick={() => onChange(c.value)}
          className={`w-7 h-7 rounded-full transition-all ${
            value === c.value
              ? 'ring-2 ring-offset-2 ring-primary scale-110'
              : 'hover:scale-110'
          }`}
          style={{ backgroundColor: c.value }}
        />
      ))}
    </div>
  )
}

export { EVENT_COLORS }
