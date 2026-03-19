import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { ViewModeToggle, type ViewModeOption } from './ViewModeToggle'

const meta: Meta<typeof ViewModeToggle> = {
  title: 'コントロール/ViewModeToggle',
  component: ViewModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '現在選択されているモード',
    },
    showLabel: {
      control: 'boolean',
      description: 'ラベルを常に表示するか',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'サイズ',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'teal'],
      description: 'バリアント（カラーテーマ）',
    },
  },
}

export default meta
type Story = StoryObj<typeof ViewModeToggle>

type ViewMode = 'table' | 'card'
type DisplayMode = 'list' | 'grid' | 'timeline'

const tableCardOptions: ViewModeOption<ViewMode>[] = [
  { value: 'table', label: 'テーブル', icon: 'list' },
  { value: 'card', label: 'カード', icon: 'dashboard' },
]

const displayOptions: ViewModeOption<DisplayMode>[] = [
  { value: 'list', label: 'リスト', icon: 'list' },
  { value: 'grid', label: 'グリッド', icon: 'dashboard' },
  { value: 'timeline', label: 'タイムライン', icon: 'calendar' },
]

/**
 * インタラクティブなトグル
 */
const InteractiveToggle = () => {
  const [mode, setMode] = useState<ViewMode>('table')
  return (
    <div className="space-y-4">
      <ViewModeToggle
        value={mode}
        onChange={setMode}
        options={tableCardOptions}
      />
      <div className="text-sm text-gray-500">
        選択中: <span className="font-semibold">{mode}</span>
      </div>
    </div>
  )
}

/**
 * デフォルト
 */
export const Default: Story = {
  render: () => <InteractiveToggle />,
}

/**
 * ラベル表示
 */
export const WithLabel: Story = {
  render: () => {
    const WithLabelToggle = () => {
      const [mode, setMode] = useState<ViewMode>('card')
      return (
        <ViewModeToggle
          value={mode}
          onChange={setMode}
          options={tableCardOptions}
          showLabel
        />
      )
    }
    return <WithLabelToggle />
  },
}

/**
 * サイズバリエーション
 */
export const Sizes: Story = {
  render: () => {
    const SizeToggle = ({ size }: { size: 'small' | 'medium' | 'large' }) => {
      const [mode, setMode] = useState<ViewMode>('table')
      return (
        <ViewModeToggle
          value={mode}
          onChange={setMode}
          options={tableCardOptions}
          size={size}
          showLabel
        />
      )
    }
    return (
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold">Small</p>
          <SizeToggle size="small" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Medium (default)</p>
          <SizeToggle size="medium" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Large</p>
          <SizeToggle size="large" />
        </div>
      </div>
    )
  },
}

/**
 * バリアントカラー
 */
export const Variants: Story = {
  render: () => {
    const VariantToggle = ({ variant }: { variant: 'default' | 'primary' | 'teal' }) => {
      const [mode, setMode] = useState<ViewMode>('table')
      return (
        <ViewModeToggle
          value={mode}
          onChange={setMode}
          options={tableCardOptions}
          variant={variant}
          showLabel
        />
      )
    }
    return (
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold">Default</p>
          <VariantToggle variant="default" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Primary</p>
          <VariantToggle variant="primary" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Teal</p>
          <VariantToggle variant="teal" />
        </div>
      </div>
    )
  },
}

/**
 * 3つ以上の選択肢
 */
export const ThreeOptions: Story = {
  render: () => {
    const ThreeOptionsToggle = () => {
      const [mode, setMode] = useState<DisplayMode>('list')
      return (
        <div className="space-y-4">
          <ViewModeToggle
            value={mode}
            onChange={setMode}
            options={displayOptions}
            showLabel
          />
          <div className="text-sm text-gray-500">
            選択中: <span className="font-semibold">{mode}</span>
          </div>
        </div>
      )
    }
    return <ThreeOptionsToggle />
  },
}

/**
 * アイコンのみ（コンパクト）
 */
export const IconOnly: Story = {
  render: () => {
    const IconOnlyToggle = () => {
      const [mode, setMode] = useState<ViewMode>('table')
      return (
        <ViewModeToggle
          value={mode}
          onChange={setMode}
          options={tableCardOptions}
          showLabel={false}
        />
      )
    }
    return <IconOnlyToggle />
  },
}

/**
 * 実践例：ヘッダーバー内
 */
export const InHeaderBar: Story = {
  render: () => {
    const HeaderExample = () => {
      const [mode, setMode] = useState<ViewMode>('table')
      return (
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold">データ一覧</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">表示切替:</span>
            <ViewModeToggle
              value={mode}
              onChange={setMode}
              options={tableCardOptions}
              size="small"
            />
          </div>
        </div>
      )
    }
    return <HeaderExample />
  },
}

/**
 * 実践例：フィルターパネル
 */
export const InFilterPanel: Story = {
  render: () => {
    const FilterPanelExample = () => {
      const [viewMode, setViewMode] = useState<ViewMode>('card')
      const [displayMode, setDisplayMode] = useState<DisplayMode>('grid')
      return (
        <div className="w-80 space-y-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold">表示設定</h3>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              ビューモード
            </label>
            <ViewModeToggle
              value={viewMode}
              onChange={setViewMode}
              options={tableCardOptions}
              variant="primary"
              showLabel
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              レイアウト
            </label>
            <ViewModeToggle
              value={displayMode}
              onChange={setDisplayMode}
              options={displayOptions}
              variant="teal"
              showLabel
            />
          </div>
        </div>
      )
    }
    return <FilterPanelExample />
  },
}
