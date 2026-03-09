import StarRating from './StarRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'データ可視化/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '0.5単位で星評価を表示するコンポーネント。値×2→四捨五入→÷2のロジックで0.5刻みの評価を実現します。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: '評価値(0-5)',
    },
    maxStars: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: '最大星数',
    },
    size: {
      control: { type: 'number', min: 10, max: 50, step: 2 },
      description: '星のサイズ(px)',
    },
    showValue: {
      control: 'boolean',
      description: '評価値を数値で表示するかどうか',
    },
    className: {
      control: 'text',
      description: 'カスタムCSSクラス',
    },
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的な使用例
export const Default: Story = {
  args: {
    rating: 3.2,
    showValue: true,
  },
};

// 様々な評価値のパターン
export const RatingExamples: Story = {
  args: { rating: 3.0 },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">様々な評価値(0.5単位での四捨五入)</h3>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">1.0:</span>
            <StarRating rating={1.0} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">1.7:</span>
            <StarRating rating={1.7} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">2.3:</span>
            <StarRating rating={2.3} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">2.8:</span>
            <StarRating rating={2.8} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">3.2:</span>
            <StarRating rating={3.2} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">3.8:</span>
            <StarRating rating={3.8} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">4.4:</span>
            <StarRating rating={4.4} showValue={true} />
          </div>
          <div className="flex w-80 items-center justify-between">
            <span className="w-20">5.0:</span>
            <StarRating rating={5.0} showValue={true} />
          </div>
        </div>
      </div>
    </div>
  ),
};

// 数値表示なし
export const WithoutValue: Story = {
  args: {
    rating: 3.8,
    showValue: false,
  },
};

// 異なるサイズ
export const DifferentSizes: Story = {
  args: { rating: 3.5 },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">異なるサイズ</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-16">小 (16px):</span>
            <StarRating rating={3.5} size={16} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-16">中 (24px):</span>
            <StarRating rating={3.5} size={24} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-16">大 (32px):</span>
            <StarRating rating={3.5} size={32} showValue={true} />
          </div>
        </div>
      </div>
    </div>
  ),
};

// 異なる最大星数
export const DifferentMaxStars: Story = {
  args: { rating: 3.0 },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">異なる最大星数</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-16">3つ星:</span>
            <StarRating rating={2.3} maxStars={3} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-16">5つ星:</span>
            <StarRating rating={3.8} maxStars={5} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-16">10つ星:</span>
            <StarRating rating={7.2} maxStars={10} showValue={true} />
          </div>
        </div>
      </div>
    </div>
  ),
};

// 使用例：メンバー評価システム
export const EmployeeEvaluation: Story = {
  args: { rating: 4.0 },
  render: () => (
    <div className="max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-fluid-lg font-semibold">メンバー評価</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="text-center">
          <div className="mb-2 text-fluid-sm text-gray-500">満足度</div>
          <StarRating rating={4.2} size={24} showValue={true} />
        </div>
        <div className="text-center">
          <div className="mb-2 text-fluid-sm text-gray-500">業務負荷</div>
          <StarRating rating={2.8} size={24} showValue={true} />
        </div>
        <div className="text-center">
          <div className="mb-2 text-fluid-sm text-gray-500">職場環境</div>
          <StarRating rating={3.7} size={24} showValue={true} />
        </div>
        <div className="text-center">
          <div className="mb-2 text-fluid-sm text-gray-500">人間関係</div>
          <StarRating rating={4.1} size={24} showValue={true} />
        </div>
        <div className="text-center">
          <div className="mb-2 text-fluid-sm text-gray-500">ストレス</div>
          <StarRating rating={3.3} size={24} showValue={true} />
        </div>
      </div>
    </div>
  ),
};

// エッジケース
export const EdgeCases: Story = {
  args: { rating: 2.5 },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">エッジケース</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-20">0.0:</span>
            <StarRating rating={0.0} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20">0.24:</span>
            <StarRating rating={0.24} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20">0.25:</span>
            <StarRating rating={0.25} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20">0.74:</span>
            <StarRating rating={0.74} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20">0.75:</span>
            <StarRating rating={0.75} showValue={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20">5.0:</span>
            <StarRating rating={5.0} showValue={true} />
          </div>
        </div>
      </div>
    </div>
  ),
};
