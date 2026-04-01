import { Provider } from 'jotai'
import { CalendarHeader } from './CalendarHeader'

export default {
  title: 'calend/CalendarHeader',
  component: CalendarHeader,
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
      <CalendarHeader />
    </Provider>
  ),
}
