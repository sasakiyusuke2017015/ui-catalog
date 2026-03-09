import type { Meta, StoryObj } from '@storybook/react';

import { Animated } from './Animated';
import ReplayButton from './ReplayButton';
import { useRemountKey } from '../hooks/useRemountKey';
import type { ComponentProps } from 'react';

const meta = {
  title: 'アニメーション/Animated',
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
    category: {
      control: 'select',
      options: ['framer', 'card', 'tableRow', 'dropMenu'],
      description: 'アニメーションカテゴリ（animations.ts の全バリアントに対応）',
    },
    variant: {
      control: 'text',
      description: 'アニメーションバリアント（カテゴリに応じて異なる: slideRight, slideRightFast, slideDownFast など）',
    },
    type: {
      control: 'select',
      options: ['collapse', 'fade', 'slide', 'scale', 'slideRight', 'slideDown'],
      description: '基本的なアニメーション用のシンプルAPI',
    },
    slideDirection: {
      control: 'select',
      options: ['left', 'right', 'up', 'down'],
    },
    duration: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
    },
    delay: {
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
    },
    maxHeight: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
    },
  },
} satisfies Meta<typeof Animated>;

export default meta;
type Story = StoryObj<typeof meta>;

type AnimatedProps = ComponentProps<typeof Animated>;

const SampleContent = () => (
  <div className="p-4 bg-blue-100 border border-blue-300 rounded">
    <h3 className="font-bold text-blue-900">アニメーションサンプル</h3>
    <p className="text-blue-700">
      これはアニメーションのデモコンテンツです。
      各アニメーションタイプの動きを確認できます。
    </p>
  </div>
);

const SimpleStory = (args: AnimatedProps) => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-4">
      <ReplayButton onClick={remount} />
      <Animated key={key} {...args} show={true}>
        <SampleContent />
      </Animated>
    </div>
  );
};

export const Collapse: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'collapse',
    duration: 0.3,
    maxHeight: 500,
  },
};

export const Fade: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'fade',
    duration: 0.3,
  },
};

export const SlideLeft: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slide',
    slideDirection: 'left',
    duration: 0.3,
  },
};

export const SlideRight: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slide',
    slideDirection: 'right',
    duration: 0.3,
  },
};

export const SlideUp: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slide',
    slideDirection: 'up',
    duration: 0.3,
  },
};

export const SlideDown: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slide',
    slideDirection: 'down',
    duration: 0.3,
  },
};

export const Scale: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'scale',
    duration: 0.3,
  },
};

export const CSSSlideRight: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slideRight',
    index: 0,
    speed: 1.0,
  },
};

export const CSSSlideDown: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'slideDown',
    index: 0,
    speed: 1.0,
  },
};

/**
 * インタラクティブトグル
 * ボタンでアニメーションを再生できます
 */
export const InteractiveToggle: Story = {
  render: (args) => <SimpleStory {...args} />,
  args: {
    type: 'collapse',
    duration: 0.3,
  },
};

/**
 * 全アニメーション一覧
 * すべてのアニメーションタイプを同時に確認できます
 */
const AllAnimationsStory = () => {
  const { key, remount } = useRemountKey();
  return (
    <div className="space-y-6">
      <ReplayButton onClick={remount} label="すべて再生" />
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Collapse</h3>
          <Animated key={`collapse-${key}`} show={true} type="collapse" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Fade</h3>
          <Animated key={`fade-${key}`} show={true} type="fade" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Left</h3>
          <Animated key={`slide-left-${key}`} show={true} type="slide" slideDirection="left" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Right</h3>
          <Animated key={`slide-right-${key}`} show={true} type="slide" slideDirection="right" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Up</h3>
          <Animated key={`slide-up-${key}`} show={true} type="slide" slideDirection="up" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Down</h3>
          <Animated key={`slide-down-${key}`} show={true} type="slide" slideDirection="down" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Scale</h3>
          <Animated key={`scale-${key}`} show={true} type="scale" duration={0.3}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">CSS Slide Right (Keyframes)</h3>
          <Animated key={`css-right-${key}`} show={true} type="slideRight" index={0}>
            <SampleContent />
          </Animated>
        </div>

        <div>
          <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">CSS Slide Down (Keyframes)</h3>
          <Animated key={`css-down-${key}`} show={true} type="slideDown" index={0}>
            <SampleContent />
          </Animated>
        </div>
      </div>
    </div>
  );
};

export const AllAnimations: Story = {
  render: () => <AllAnimationsStory />,
};
