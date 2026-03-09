
import StatisticPanel from './StatisticPanel';

/**
 * StatisticPanel コンポーネントの Storybook 設定
 */
export default {
  title: 'データ可視化/StatisticPanel',
  component: StatisticPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
統計情報パネルコンポーネント。
• PieChart（オプション）+ StatisticList を表示
• ローディング状態の管理
• データがない場合のメッセージ表示`,
      },
    },
  },
  argTypes: {
    pieChartData: {
      control: { type: 'object' },
      description: 'PieChartのデータ',
    },
    statisticsItems: {
      control: { type: 'object' },
      description: '統計項目のリスト',
    },
    totalLabel: {
      control: { type: 'text' },
      description: '合計のラベル',
    },
    totalValue: {
      control: { type: 'number' },
      description: '合計の値',
    },
    totalUnit: {
      control: { type: 'text' },
      description: '合計の単位',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'ローディング状態',
      table: { defaultValue: { summary: false } },
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'データがない場合のメッセージ',
      table: { defaultValue: { summary: '該当データなし' } },
    },
  },
};

// 基本的な統計パネル
export const Default = {
  args: {
    pieChartData: [
      { name: '男性', value: 120, color: '#3b82f6' },
      { name: '女性', value: 95, color: '#ec4899' },
    ],
    statisticsItems: [
      {
        dotColor: 'bg-blue-500',
        label: '男性',
        labelColor: 'text-blue-600',
        value: 120,
        unit: '名',
      },
      {
        dotColor: 'bg-pink-500',
        label: '女性',
        labelColor: 'text-pink-600',
        value: 95,
        unit: '名',
      },
    ],
    totalLabel: '全',
    totalValue: 215,
    totalUnit: '名',
  },
  parameters: {
    docs: {
      description: {
        story: 'PieChartと統計リストを組み合わせた基本的な表示',
      },
    },
  },
};

// PieChartなし
export const WithoutPieChart = {
  args: {
    statisticsItems: [
      {
        dotColor: 'bg-green-500',
        label: '完了',
        labelColor: 'text-green-600',
        value: 85,
        unit: '件',
      },
      {
        dotColor: 'bg-yellow-500',
        label: '処理中',
        labelColor: 'text-yellow-600',
        value: 15,
        unit: '件',
      },
      {
        dotColor: 'bg-red-500',
        label: 'エラー',
        labelColor: 'text-red-600',
        value: 3,
        unit: '件',
      },
    ],
    totalLabel: '全',
    totalValue: 103,
    totalUnit: '件',
  },
  parameters: {
    docs: {
      description: {
        story: 'PieChartを表示せず、統計リストのみの表示',
      },
    },
  },
};

// ローディング状態
export const Loading = {
  args: {
    statisticsItems: [],
    loading: true,
    totalValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'データ読み込み中の表示',
      },
    },
  },
};

// データなし
export const Empty = {
  args: {
    statisticsItems: [],
    totalValue: 0,
    emptyMessage: 'データがありません',
  },
  parameters: {
    docs: {
      description: {
        story: 'データがない場合の表示',
      },
    },
  },
};

// 年代別統計
export const AgeStatistics = {
  args: {
    pieChartData: [
      { name: '10代', value: 25, color: '#a855f7' },
      { name: '20代', value: 78, color: '#3b82f6' },
      { name: '30代', value: 92, color: '#22c55e' },
      { name: '40代', value: 65, color: '#eab308' },
      { name: '50代', value: 43, color: '#f97316' },
      { name: '60代以上', value: 27, color: '#ef4444' },
    ],
    statisticsItems: [
      {
        dotColor: 'bg-purple-500',
        label: '10代',
        labelColor: 'text-purple-600',
        value: 25,
        unit: '名',
      },
      {
        dotColor: 'bg-blue-500',
        label: '20代',
        labelColor: 'text-blue-600',
        value: 78,
        unit: '名',
      },
      {
        dotColor: 'bg-green-500',
        label: '30代',
        labelColor: 'text-green-600',
        value: 92,
        unit: '名',
      },
      {
        dotColor: 'bg-yellow-500',
        label: '40代',
        labelColor: 'text-yellow-600',
        value: 65,
        unit: '名',
      },
      {
        dotColor: 'bg-orange-500',
        label: '50代',
        labelColor: 'text-orange-600',
        value: 43,
        unit: '名',
      },
      {
        dotColor: 'bg-red-500',
        label: '60代以上',
        labelColor: 'text-red-600',
        value: 27,
        unit: '名',
      },
    ],
    totalLabel: '全',
    totalValue: 330,
    totalUnit: '名',
  },
  parameters: {
    docs: {
      description: {
        story: '年代別の統計情報を表示する例',
      },
    },
  },
};

// ステータス別統計
export const StatusStatistics = {
  args: {
    pieChartData: [
      { name: '新規', value: 45, color: '#3b82f6' },
      { name: '受付済', value: 30, color: '#06b6d4' },
      { name: '処理中', value: 20, color: '#22c55e' },
      { name: '保留', value: 12, color: '#eab308' },
      { name: '確認待ち', value: 8, color: '#f97316' },
      { name: 'キャンセル', value: 5, color: '#ef4444' },
    ],
    statisticsItems: [
      {
        dotColor: 'bg-blue-500',
        label: '新規',
        labelColor: 'text-blue-600',
        value: 45,
        unit: '件',
      },
      {
        dotColor: 'bg-cyan-500',
        label: '受付済',
        labelColor: 'text-cyan-600',
        value: 30,
        unit: '件',
      },
      {
        dotColor: 'bg-green-500',
        label: '処理中',
        labelColor: 'text-green-600',
        value: 20,
        unit: '件',
      },
      {
        dotColor: 'bg-yellow-500',
        label: '保留',
        labelColor: 'text-yellow-600',
        value: 12,
        unit: '件',
      },
      {
        dotColor: 'bg-orange-500',
        label: '確認待ち',
        labelColor: 'text-orange-600',
        value: 8,
        unit: '件',
      },
      {
        dotColor: 'bg-red-500',
        label: 'キャンセル',
        labelColor: 'text-red-600',
        value: 5,
        unit: '件',
      },
    ],
    totalLabel: '全',
    totalValue: 120,
    totalUnit: '件',
  },
  parameters: {
    docs: {
      description: {
        story: 'ステータス別の統計情報を表示する例',
      },
    },
  },
};
