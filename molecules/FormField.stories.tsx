import FormField from './FormField';

export default {
  title: 'フォーム/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'フィールドのラベル',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
    required: {
      control: 'boolean',
      description: '必須項目かどうか',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
      description: '入力タイプ',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
  },
};

// デフォルト状態
export const Default = {
  args: {
    label: 'お名前',
    placeholder: 'お名前を入力してください',
  },
};

// 必須項目
export const Required = {
  args: {
    label: 'メールアドレス',
    type: 'email',
    placeholder: 'example@example.com',
    required: true,
  },
};

// エラー状態
export const WithError = {
  args: {
    label: 'パスワード',
    type: 'password',
    placeholder: 'パスワードを入力',
    required: true,
    error: 'パスワードは8文字以上で入力してください',
  },
};

// 数値入力
export const NumberInput = {
  args: {
    label: '年齢',
    type: 'number',
    placeholder: '年齢を入力',
    required: true,
  },
};

// 電話番号
export const PhoneInput = {
  args: {
    label: '電話番号',
    type: 'tel',
    placeholder: '090-1234-5678',
  },
};

// ラベルなし
export const WithoutLabel = {
  args: {
    placeholder: 'ラベルなしの入力フィールド',
  },
};
