import { useState, type ReactNode } from 'react'
import { cn } from '../utils/cn'

export interface Tab {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  activeTab?: string
  onTabChange?: (id: string) => void
  className?: string
  tabClassName?: string
  panelClassName?: string
}

export default function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledActive,
  onTabChange,
  className,
  tabClassName,
  panelClassName,
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(defaultTab ?? tabs[0]?.id)
  const active = controlledActive ?? internalActive

  function handleSelect(id: string) {
    if (!controlledActive) setInternalActive(id)
    onTabChange?.(id)
  }

  const current = tabs.find((t) => t.id === active)

  return (
    <div className={cn(className)}>
      <div className="flex border-b border-(--color-border)" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => handleSelect(tab.id)}
            className={cn(
              'px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors border-b-2 -mb-px',
              active === tab.id
                ? 'border-(--color-accent) text-(--color-accent)'
                : 'border-transparent text-(--color-text-muted) hover:text-(--color-text-secondary)',
              tabClassName,
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className={cn('pt-4', panelClassName)}>
        {current?.content}
      </div>
    </div>
  )
}
