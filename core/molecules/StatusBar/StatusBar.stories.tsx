import type { Meta, StoryObj } from '@storybook/react'
import StatusBar from './StatusBar'

const meta: Meta<typeof StatusBar> = {
  title: 'molecules/StatusBar',
  component: StatusBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    variant: { control: 'select', options: ['success', 'error', 'info'] },
  },
}

export default meta
type Story = StoryObj<typeof StatusBar>

export const Success: Story = {
  args: { message: '保存しました', variant: 'success' },
}

export const Error: Story = {
  args: { message: 'エラーが発生しました', variant: 'error' },
}

export const Info: Story = {
  args: { message: '処理中です...', variant: 'info' },
}

export const Empty: Story = {
  args: { message: '' },
}
