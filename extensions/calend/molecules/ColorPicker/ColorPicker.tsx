const EVENT_COLORS = [
  { value: '#059669', label: 'Green' },
  { value: '#d97706', label: 'Amber' },
  { value: '#dc2626', label: 'Red' },
  { value: '#7c3aed', label: 'Purple' },
  { value: '#0891b2', label: 'Cyan' },
  { value: '#be185d', label: 'Pink' },
  { value: '#0284c7', label: 'Sky' },   
  { value: '#e11d48', label: 'Rose' },  
  { value: '#ea580c', label: 'Orange' },
  { value: '#4f46e5', label: 'Indigo' },
  { value: '#65a30d', label: 'Lime' },  
  { value: '#475569', label: 'Slate' }, 
] as const

type ColorOption = { readonly value: string; readonly label: string }

interface ColorPickerProps {
  readonly value: string
  readonly onChange: (color: string) => void
  readonly colors?: readonly ColorOption[]
  readonly size?: number
}

export function ColorPicker({ value, onChange, colors = EVENT_COLORS, size = 28 }: ColorPickerProps) {
  return (
    <div data-component="ColorPicker" role="radiogroup" aria-label="カラー選択" className="flex gap-2">
      {colors.map((c) => {
        const selected = value === c.value
        return (
          <button
            key={c.value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={c.label}
            onClick={() => onChange(c.value)}
            className={`rounded-full transition-all ${
              selected
                ? 'ring-2 ring-offset-2 ring-primary scale-110'
                : 'hover:scale-110'
            }`}
            style={{ width: size, height: size, backgroundColor: c.value }}
          />
        )
      })}
    </div>
  )
}

export { EVENT_COLORS }
export type { ColorOption }
