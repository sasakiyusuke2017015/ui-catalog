import { useState } from 'react';

import type { Meta } from '@storybook/react';

import TransferList from './TransferList';
import type { TransferListItem } from './types';

const meta: Meta<typeof TransferList> = {
  title: 'データ操作/TransferList',
  component: TransferList,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

const initialLeft: TransferListItem[] = [
  { id: '1', label: '田中太郎', subLabel: '営業部' },
  { id: '2', label: '鈴木花子', subLabel: '開発部' },
  { id: '3', label: '佐藤一郎', subLabel: '人事部' },
  { id: '4', label: '山田次郎', subLabel: '総務部', disabled: true, disabledReason: '管理者' },
];

const initialRight: TransferListItem[] = [
  { id: '5', label: '高橋三郎', subLabel: '営業部' },
];

const InteractiveExample = () => {
  const [left, setLeft] = useState(initialLeft);
  const [right, setRight] = useState(initialRight);

  return (
    <TransferList
      leftItems={left}
      rightItems={right}
      leftLabel="有効なユーザー"
      rightLabel="無効なユーザー"
      toRightLabel="無効化 \u2192"
      toLeftLabel="\u2190 有効化"
      onChange={(newLeft, newRight) => {
        setLeft(newLeft);
        setRight(newRight);
      }}
    />
  );
};

export const Default = {
  render: () => <InteractiveExample />,
};

const EmptyExample = () => {
  const [left, setLeft] = useState<TransferListItem[]>([]);
  const [right, setRight] = useState<TransferListItem[]>([]);

  return (
    <TransferList
      leftItems={left}
      rightItems={right}
      leftLabel="左リスト"
      rightLabel="右リスト"
      onChange={(newLeft, newRight) => {
        setLeft(newLeft);
        setRight(newRight);
      }}
    />
  );
};

export const Empty = {
  render: () => <EmptyExample />,
};
