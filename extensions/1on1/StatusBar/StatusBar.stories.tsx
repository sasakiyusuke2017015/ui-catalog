import type { Meta, StoryObj } from '@storybook/react';

import StatusBar from './StatusBar';

const meta: Meta<typeof StatusBar> = {
  title: 'フィードバック/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const Success: Story = {
  args: {
    message: '保存が完了しました。',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'エラーが発生しました。再試行してください。',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    message: 'データを読み込み中...',
    variant: 'info',
  },
};
