import { Provider } from 'jotai'
import { CalendHeader } from './Header'

export default {
  title: 'calend/CalendHeader',
  component: CalendHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'カレンダーのヘッダー。表示モード切替（日/週/月）、日付ナビゲーション、Today ボタンを含む。',
      },
    },
  },
}

export const Default = {
  render: () => (
    <Provider>
      <CalendHeader />
    </Provider>
  ),
}
