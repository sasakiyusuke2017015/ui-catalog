import { useState } from 'react';

import type { Meta } from '@storybook/react';

import FloatingMenuButton from './FloatingMenuButton';

const meta: Meta<typeof FloatingMenuButton> = {
  title: 'ナビゲーション/FloatingMenuButton',
  component: FloatingMenuButton,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

const InteractiveExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <p className="p-4 text-gray-600">
        ボタンの状態: {isOpen ? '開' : '閉'}
      </p>
      <FloatingMenuButton
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export const Default = {
  render: () => <InteractiveExample />,
};

const CustomColorsExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <FloatingMenuButton
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        backgroundColor="#3B82F6"
        borderColor="#2563EB"
        color="#ffffff"
        position="bottom-right"
        size={32}
      />
    </div>
  );
};

export const CustomColors = {
  render: () => <CustomColorsExample />,
};
