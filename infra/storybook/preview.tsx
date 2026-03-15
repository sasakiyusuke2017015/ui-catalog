/**
 * Storybook Preview 共通設定
 *
 * デコレーターとパラメーターの共通定義
 */
import type { Preview, Decorator } from '@storybook/react'

/**
 * 基本デコレーター
 * - ダークモード対応
 * - パディング追加
 */
export const baseDecorators: Decorator[] = [
  (Story) => (
    <div className="p-4">
      <Story />
    </div>
  ),
]

/**
 * 基本パラメーター
 */
export const baseParameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1a1a1a' },
      { name: 'gray', value: '#f5f5f5' },
    ],
  },
}
