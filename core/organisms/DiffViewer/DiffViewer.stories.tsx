import type { Meta, StoryObj } from '@storybook/react'
import { DiffViewer } from './DiffViewer'

const meta: Meta<typeof DiffViewer> = {
  title: 'organisms/DiffViewer',
  component: DiffViewer,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DiffViewer>

export const Default: Story = {
  args: {
    isOpen: true,
    title: '変更内容',
    leftLabel: '変更前',
    rightLabel: '変更後',
    summary: { added: 2, removed: 1, changed: 3, total: 6 },
    entries: [
      { path: 'name', kind: 'changed', old: '田中 太郎', new: '田中 太郎（更新）' },
      { path: 'status', kind: 'changed', old: 'inactive', new: 'active' },
      { path: 'score', kind: 'added', new: 4.5 },
      { path: 'oldField', kind: 'removed', old: '不要なフィールド' },
    ],
    onClose: () => {},
  },
}

export const WithLineDiff: Story = {
  args: {
    isOpen: true,
    title: 'コード差分',
    leftLabel: 'main',
    rightLabel: 'feature/update',
    summary: { added: 3, removed: 2, changed: 0, total: 5 },
    entries: [
      {
        path: 'Button.tsx',
        kind: 'changed',
        lines: [
          { tag: ' ', text: 'export const Button = () => {' },
          { tag: '-', text: '  return <button>Click</button>' },
          { tag: '+', text: '  return <button className="btn">Click</button>' },
          { tag: ' ', text: '}' },
        ],
      },
    ],
    onClose: () => {},
  },
}
