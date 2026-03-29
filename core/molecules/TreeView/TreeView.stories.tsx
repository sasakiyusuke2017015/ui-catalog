import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TreeView, type TreeNode } from './TreeView'

const meta: Meta<typeof TreeView> = {
  title: 'molecules/TreeView',
  component: TreeView,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TreeView>

const sampleNodes: TreeNode[] = [
  {
    id: '1',
    label: 'src',
    children: [
      {
        id: '2',
        label: 'components',
        children: [
          { id: '3', label: 'Button.tsx', children: [] },
          { id: '4', label: 'Input.tsx', children: [] },
        ],
      },
      { id: '5', label: 'App.tsx', children: [] },
    ],
  },
  {
    id: '6',
    label: 'public',
    children: [{ id: '7', label: 'index.html', children: [] }],
  },
]

const TreeViewDemo = () => {
  const [expandedIds, setExpandedIds] = useState(new Set<string | number>(['1']))
  const [selectedId, setSelectedId] = useState<string | number | null>(null)

  return (
    <div style={{ width: 240, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <TreeView
        nodes={sampleNodes}
        expandedIds={expandedIds}
        selectedId={selectedId}
        onToggle={(id) =>
          setExpandedIds((prev) => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
          })
        }
        onSelect={(node) => setSelectedId(node.id)}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <TreeViewDemo />,
}
