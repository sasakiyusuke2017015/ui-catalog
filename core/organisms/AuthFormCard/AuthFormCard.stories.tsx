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

export const PasswordReset: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-center">パスワードリセット</h2>
        <p className="text-sm text-gray-500 text-center">
          登録済みのメールアドレスを入力してください
        </p>
        <input type="email" placeholder="メールアドレス" className="w-full border rounded px-3 py-2" />
        <button className="w-full bg-blue-500 text-white rounded py-2">リセットリンクを送信</button>
        <p className="text-xs text-center text-blue-500 cursor-pointer">ログインに戻る</p>
      </div>
    ),
  },
};

export const SignUp: Story = {
  args: {
    copyrightText: '© 2026 SMS DataTech',
    children: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-center">新規登録</h2>
        <input type="text" placeholder="ユーザー名" className="w-full border rounded px-3 py-2" />
        <input type="email" placeholder="メールアドレス" className="w-full border rounded px-3 py-2" />
        <input type="password" placeholder="パスワード" className="w-full border rounded px-3 py-2" />
        <input type="password" placeholder="パスワード（確認）" className="w-full border rounded px-3 py-2" />
        <button className="w-full bg-green-600 text-white rounded py-2">アカウントを作成</button>
      </div>
    ),
  },
};
