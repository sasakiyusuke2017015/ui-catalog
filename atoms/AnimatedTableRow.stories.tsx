import type { Meta, StoryObj } from '@storybook/react';

import { Animated } from './Animated';
import ReplayButton from './ReplayButton';
import { useRemountKey } from '../hooks/useRemountKey';

const meta = {
  title: 'アニメーション/TableRow',
  component: Animated,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    show: true,
    children: null,
  },
  argTypes: {
    speed: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
      description: 'アニメーション速度倍率（1.0 = 通常、2.0 = 2倍速、0.5 = 半分速）',
    },
  },
} satisfies Meta<typeof Animated>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * TableRow - SlideDown
 * 上からバウンシーにスライドイン
 * InteractiveTable などで使用される標準的なアニメーション
 */
const SlideDownStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-4">
      <ReplayButton onClick={remount} label="再生" />
      <div className="space-y-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <Animated
            key={`${key}-${index}`}
            show={true}
            category="tableRow"
            variant="slideDown"
            index={index}
          >
            <div className="rounded bg-blue-100 px-4 py-3 text-fluid-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-900">行 {index + 1}</span>
                <span className="text-blue-700">データサンプル</span>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export const SlideDown: Story = {
  render: () => <SlideDownStory />,
};

/**
 * TableRow - Speed 比較
 * speed パラメータで速度を制御
 * 同じアニメーションを異なる速度で表示
 */
const SpeedComparisonStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-6">
      <ReplayButton onClick={remount} label="すべて再生" />

      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">通常速度 (speed = 1.0)</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`normal-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="slideDown"
                index={index}
                speed={1.0}
              >
                <div className="rounded bg-blue-100 px-3 py-2 text-fluid-xs text-blue-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">高速 (speed = 2.0)</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`fast-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="slideDown"
                index={index}
                speed={2.0}
              >
                <div className="rounded bg-green-100 px-3 py-2 text-fluid-xs text-green-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">低速 (speed = 0.5)</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`slow-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="slideDown"
                index={index}
                speed={0.5}
              >
                <div className="rounded bg-orange-100 px-3 py-2 text-fluid-xs text-orange-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SpeedComparison: Story = {
  render: () => <SpeedComparisonStory />,
};

/**
 * TableRow - FadeIn
 * シンプルなフェードインアニメーション
 */
const FadeInStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-4">
      <ReplayButton onClick={remount} label="再生" />
      <div className="space-y-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <Animated
            key={`${key}-${index}`}
            show={true}
            category="tableRow"
            variant="fadeIn"
            index={index}
          >
            <div className="rounded bg-green-100 px-4 py-3 text-fluid-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-green-900">行 {index + 1}</span>
                <span className="text-green-700">フェードイン</span>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export const FadeIn: Story = {
  render: () => <FadeInStory />,
};

/**
 * TableRow - SlideLeft
 * 右から左へスライドイン
 */
const SlideLeftStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-4">
      <ReplayButton onClick={remount} label="再生" />
      <div className="space-y-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <Animated
            key={`${key}-${index}`}
            show={true}
            category="tableRow"
            variant="slideLeft"
            index={index}
          >
            <div className="rounded bg-purple-100 px-4 py-3 text-fluid-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-purple-900">行 {index + 1}</span>
                <span className="text-purple-700">左からスライド</span>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
};

export const SlideLeft: Story = {
  render: () => <SlideLeftStory />,
};

/**
 * TableRow - 全バリアント比較
 * 3つのバリアントを同時に表示して動きの違いを比較
 */
const AllVariantsStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-6">
      <ReplayButton onClick={remount} label="すべて再生" />

      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">SlideDown</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`down-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="slideDown"
                index={index}
              >
                <div className="rounded bg-blue-100 px-3 py-2 text-fluid-xs text-blue-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">FadeIn</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`fade-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="fadeIn"
                index={index}
              >
                <div className="rounded bg-green-100 px-3 py-2 text-fluid-xs text-green-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">SlideLeft</h3>
          <div className="space-y-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <Animated
                key={`left-${key}-${index}`}
                show={true}
                category="tableRow"
                variant="slideLeft"
                index={index}
              >
                <div className="rounded bg-purple-100 px-3 py-2 text-fluid-xs text-purple-800">
                  行 {index + 1}
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  render: () => <AllVariantsStory />,
};
