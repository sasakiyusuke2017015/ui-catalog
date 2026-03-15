import type { Meta, StoryObj } from '@storybook/react';

import AuthFormCard from './AuthFormCard';

const meta: Meta<typeof AuthFormCard> = {
  title: 'レイアウト/AuthFormCard',
  component: AuthFormCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof AuthFormCard>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-center">ログイン</h2>
        <input type="email" placeholder="メールアドレス" className="w-full border rounded px-3 py-2" />
        <input type="password" placeholder="パスワード" className="w-full border rounded px-3 py-2" />
        <button className="w-full bg-blue-500 text-white rounded py-2">ログイン</button>
      </div>
    ),
  },
};

export const CustomCopyright: Story = {
  args: {
    copyrightText: '© 2026 My Company',
    children: <p className="text-center">フォームコンテンツ</p>,
  },
};
