import { useState } from 'react';

import type { Meta } from '@storybook/react';

import Question from './Question';

const meta: Meta<typeof Question> = {
  title: 'フォーム/Question',
  component: Question,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

const TextboxExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="textbox"
      questionId={1}
      title="お名前"
      content="フルネームを入力してください。"
      required={true}
      value={value}
      onChange={setValue}
    />
  );
};

export const Textbox = {
  render: () => <TextboxExample />,
};

const TextareaExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="textarea"
      questionId={2}
      title="自由記述"
      content="ご意見をお聞かせください。"
      required={false}
      value={value}
      onChange={setValue}
    />
  );
};

export const Textarea = {
  render: () => <TextareaExample />,
};

const RadioExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="radio"
      questionId={3}
      title="満足度"
      content="サービスの満足度を選択してください。"
      required={true}
      value={value}
      onChange={setValue}
      options={['とても満足', '満足', '普通', '不満', 'とても不満']}
    />
  );
};

export const Radio = {
  render: () => <RadioExample />,
};

const SelectExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="select"
      questionId={4}
      title="部署"
      content="所属部署を選択してください。"
      required={true}
      value={value}
      onChange={setValue}
      options={['営業部', '開発部', '人事部', '総務部']}
    />
  );
};

export const Select = {
  render: () => <SelectExample />,
};

const CheckboxExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="checkbox"
      questionId={5}
      title="興味のある分野"
      content="該当するものをすべて選択してください。"
      required={false}
      value={value}
      onChange={setValue}
      options={['フロントエンド', 'バックエンド', 'インフラ', 'デザイン', 'マネジメント']}
    />
  );
};

export const Checkbox = {
  render: () => <CheckboxExample />,
};

const WithErrorExample = () => {
  const [value, setValue] = useState('');
  return (
    <Question
      variant="textbox"
      questionId={6}
      title="メールアドレス"
      content="有効なメールアドレスを入力してください。"
      required={true}
      value={value}
      onChange={setValue}
      error="メールアドレスの形式が正しくありません。"
    />
  );
};

export const WithError = {
  render: () => <WithErrorExample />,
};
