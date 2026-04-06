import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'ナビゲーション/タブ/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { id: 'overview', label: '概要', content: <p>概要コンテンツ</p> },
      { id: 'details', label: '詳細', content: <p>詳細コンテンツ</p> },
      { id: 'settings', label: '設定', content: <p>設定コンテンツ</p> },
    ],
  },
};

export const WithDefaultTab: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'タブ1', content: <p>タブ1のコンテンツ</p> },
      { id: 'tab2', label: 'タブ2', content: <p>タブ2のコンテンツ</p> },
      { id: 'tab3', label: 'タブ3', content: <p>タブ3のコンテンツ</p> },
    ],
    defaultTab: 'tab2',
  },
};
