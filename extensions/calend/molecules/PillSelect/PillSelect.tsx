import { colors } from '@ui-catalog/core/tokens'

interface PillOption {
  readonly value: string
  readonly label: string
}

interface PillSelectProps {
  readonly options: readonly PillOption[]
  readonly value: string
  readonly onChange: (value: string) => void
}

export function PillSelect({ options, value, onChange }: PillSelectProps) {
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      {options.map(({ value: v, label }) => {
        const active = value === v
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            style={{
              flex: 1,
              padding: '8px 4px',
              fontSize: '12px',
              fontWeight: active ? 600 : 400,
              color: active ? '#4f46e5' : colors.text.secondary,
              backgroundColor: active ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
              border: active ? '1.5px solid rgba(79, 70, 229, 0.3)' : '1.5px solid transparent',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
