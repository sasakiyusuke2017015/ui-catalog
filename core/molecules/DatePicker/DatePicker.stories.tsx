import DatePicker from './DatePicker';

/**
 * 日付入力コンポーネント
 *
 * HTML5のdate入力フィールドをベースとした日付選択コンポーネントです。
 * min/max制限やバリデーション機能を含みます。
 */
export default {
  title: 'フォーム/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
日付入力に特化した入力コンポーネント。以下の機能をサポート:

- **日付選択**: HTML5のdate型inputを使用した日付選択
- **制限設定**: minDate/maxDateによる選択可能範囲の制限
- **バリデーション**: 入力値の妥当性チェック
- **イベント処理**: onChange、onFocus、onBlurのイベントハンドリング

業務アプリケーションの日付入力に最適化されています。
        `,
      },
      source: {
        transform: (code: string, storyContext: { args: Record<string, unknown> }) => {
          const { args } = storyContext;
          const props = [];

          // name
          if (args.name) {
            props.push(`name="${args.name}"`);
          }

          // value
          if (args.value) {
            props.push(`value="${args.value}"`);
          }

          // minDate
          if (args.minDate) {
            props.push(`minDate="${args.minDate}"`);
          }

          // maxDate
          if (args.maxDate) {
            props.push(`maxDate="${args.maxDate}"`);
          }

          // onChange
          if (args.onChange) {
            props.push(`onChange={handleChange}`);
          }

          // onFocus
          if (args.onFocus) {
            props.push(`onFocus={handleFocus}`);
          }

          // onBlur
          if (args.onBlur) {
            props.push(`onBlur={handleBlur}`);
          }

          const propsString = props.length > 0 ? ' ' + props.join(' ') : '';

          return `import DatePicker from './components/molecules/DatePicker';

<DatePicker${propsString} />`;
        },
      },
    },
  },
  argTypes: {
    name: {
      description: 'フィールドの名前',
      control: 'text',
    },
    value: {
      description: '選択された日付(YYYY-MM-DD形式)',
      control: 'text',
    },
    minDate: {
      description: '選択可能な最小日付(YYYY-MM-DD形式)',
      control: 'text',
    },
    maxDate: {
      description: '選択可能な最大日付(YYYY-MM-DD形式)',
      control: 'text',
    },
    onChange: {
      description: '日付変更時のコールバック関数',
      action: 'date changed',
    },
    onFocus: {
      description: 'フォーカス時のコールバック関数',
      action: 'focused',
    },
    onBlur: {
      description: 'ブラー時のコールバック関数',
      action: 'blurred',
    },
  },
};

export const Default = {
  args: {
    name: 'date',
    value: '2025-05-26',
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な日付入力フィールドの表示例',
      },
      source: {
        code: `import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  onChange={handleChange} 
/>`,
      },
    },
  },
};

export const Empty = {
  args: {
    name: 'date',
    value: '',
  },
  parameters: {
    docs: {
      description: {
        story: '値が設定されていない空の状態',
      },
      source: {
        code: `import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="" 
  onChange={handleChange} 
/>`,
      },
    },
  },
};

export const WithMinDate = {
  args: {
    name: 'date',
    value: '2025-05-26',
    minDate: '2025-01-01',
  },
  parameters: {
    docs: {
      description: {
        story: '最小日付制限を設定した例。2025年1月1日以前は選択できません',
      },
      source: {
        code: `import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  minDate="2025-01-01" 
  onChange={handleChange} 
/>`,
      },
    },
  },
};

export const PastDate = {
  args: {
    name: 'date',
    value: '2024-12-25',
    minDate: '2020-01-01',
  },
  parameters: {
    docs: {
      description: {
        story: '過去の日付が選択された状態。最小日付制限内での過去日付選択例',
      },
      source: {
        code: `import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2024-12-25" 
  minDate="2020-01-01" 
  onChange={handleChange} 
/>`,
      },
    },
  },
};
