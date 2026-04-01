import{D as v}from"./DatePicker-35iCj4o5.js";import"./iframe-DM_a6nxx.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DF4Bw8wy.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./useOperationLog-5hpxR7Xt.js";import"./Calendar-COhFGBq0.js";const x={title:"フォーム/DatePicker",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
日付・月選択に特化した入力コンポーネント。以下の機能をサポート:

- **日付/月選択**: pickerModeで日付（date）または月（month）を選択
- **バリアント**: default（白背景）、dark（暗い背景）、outlined（透明・太枠）
- **ナビゲーション**: showNavigationで前後月への移動ボタンを表示
- **制限設定**: minDate/maxDateによる選択可能範囲の制限
- **クリア機能**: allowClearでクリアボタンを表示
- **ハイライト**: highlightedMonthsで特定月をマーク

業務アプリケーションの日付入力に最適化されています。
        `},source:{transform:(D,k)=>{const{args:e}=k,r=[];return e.name&&r.push(`name="${e.name}"`),e.value&&r.push(`value="${e.value}"`),e.minDate&&r.push(`minDate="${e.minDate}"`),e.maxDate&&r.push(`maxDate="${e.maxDate}"`),e.onChange&&r.push("onChange={handleChange}"),e.onFocus&&r.push("onFocus={handleFocus}"),e.onBlur&&r.push("onBlur={handleBlur}"),`import DatePicker from './components/molecules/DatePicker';

<DatePicker${r.length>0?" "+r.join(" "):""} />`}}}},argTypes:{pickerMode:{description:"選択モード",control:"select",options:["date","month"]},variant:{description:"バリアント（外観）",control:"select",options:["default","dark","outlined"]},size:{description:"サイズ",control:"select",options:["small","medium","large"]},showNavigation:{description:"前後月ナビゲーションボタンを表示（monthモードのみ）",control:"boolean"},allowClear:{description:"クリアボタンを表示",control:"boolean"},name:{description:"フィールドの名前",control:"text"},value:{description:"選択された日付(YYYY-MM-DD形式またはYYYY-MM形式)",control:"text"},minDate:{description:"選択可能な最小日付",control:"text"},maxDate:{description:"選択可能な最大日付",control:"text"},menuAlign:{description:"ポップアップの配置",control:"select",options:["left","right"]},onChange:{description:"日付変更時のコールバック関数",action:"date changed"}}},a={args:{name:"date",value:"2025-05-26"},parameters:{docs:{description:{story:"基本的な日付入力フィールドの表示例"},source:{code:`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  onChange={handleChange} 
/>`}}}},o={args:{name:"date",value:""},parameters:{docs:{description:{story:"値が設定されていない空の状態"},source:{code:`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="" 
  onChange={handleChange} 
/>`}}}},t={args:{name:"date",value:"2025-05-26",minDate:"2025-01-01"},parameters:{docs:{description:{story:"最小日付制限を設定した例。2025年1月1日以前は選択できません"},source:{code:`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  minDate="2025-01-01" 
  onChange={handleChange} 
/>`}}}},n={args:{name:"date",value:"2024-12-25",minDate:"2020-01-01"},parameters:{docs:{description:{story:"過去の日付が選択された状態。最小日付制限内での過去日付選択例"},source:{code:`import DatePicker from './components/molecules/DatePicker';

<DatePicker
  name="date"
  value="2024-12-25"
  minDate="2020-01-01"
  onChange={handleChange}
/>`}}}},s={args:{pickerMode:"month",value:"2025-03"},parameters:{docs:{description:{story:"月選択モード。日付ではなく年月を選択"}}}},i={args:{pickerMode:"month",value:"2025-03",showNavigation:!0},parameters:{docs:{description:{story:"月選択 + 前後月ナビゲーションボタン付き"}}}},c={args:{variant:"dark",value:"2025-03-19"},parameters:{docs:{description:{story:"ダークバリアント。暗い背景に白文字"}}}},m={args:{variant:"outlined",value:"2025-03-19"},parameters:{docs:{description:{story:"アウトラインバリアント。透明背景に太枠"}}}},d={args:{size:"small",value:"2025-03-19"},parameters:{docs:{description:{story:"小サイズ"}}}},p={args:{size:"large",value:"2025-03-19"},parameters:{docs:{description:{story:"大サイズ"}}}},l={args:{value:"2025-03-19",allowClear:!0},parameters:{docs:{description:{story:"クリアボタン付き。×ボタンで日付をクリア可能"}}}},u={args:{value:"2025-03-19",menuAlign:"right"},parameters:{docs:{description:{story:"ポップアップを右寄せで表示"}}}},g={args:{pickerMode:"month",variant:"dark",size:"medium",showNavigation:!0,allowClear:!0,value:"2025-03"},parameters:{backgrounds:{default:"dark"},docs:{description:{story:`
**1on1プロジェクトでの実使用例**

回答一覧画面で使用されている構成:
- 月選択モード（pickerMode="month"）
- ダークバリアント（variant="dark"）
- ナビゲーション付き（showNavigation）
- クリア可能（allowClear）
        `}}}},h={args:{pickerMode:"month",variant:"dark",size:"medium",showNavigation:!0,allowClear:!0,value:"2025-03",highlightedMonths:[{month:"2025-01",colors:["blue"]},{month:"2025-03",colors:["green"]},{month:"2025-06",colors:["red","blue"]}]},parameters:{backgrounds:{default:"dark"},docs:{description:{story:`
**ハイライト月付きの実使用例**

特定の月にドットマーカーを表示。バッチ開始月などをマークする際に使用。
複数色を指定すると複数のドットが表示される。
        `}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'date',
    value: '2025-05-26'
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な日付入力フィールドの表示例'
      },
      source: {
        code: \`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  onChange={handleChange} 
/>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'date',
    value: ''
  },
  parameters: {
    docs: {
      description: {
        story: '値が設定されていない空の状態'
      },
      source: {
        code: \`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="" 
  onChange={handleChange} 
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'date',
    value: '2025-05-26',
    minDate: '2025-01-01'
  },
  parameters: {
    docs: {
      description: {
        story: '最小日付制限を設定した例。2025年1月1日以前は選択できません'
      },
      source: {
        code: \`import DatePicker from './components/molecules/DatePicker';

<DatePicker 
  name="date" 
  value="2025-05-26" 
  minDate="2025-01-01" 
  onChange={handleChange} 
/>\`
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'date',
    value: '2024-12-25',
    minDate: '2020-01-01'
  },
  parameters: {
    docs: {
      description: {
        story: '過去の日付が選択された状態。最小日付制限内での過去日付選択例'
      },
      source: {
        code: \`import DatePicker from './components/molecules/DatePicker';

<DatePicker
  name="date"
  value="2024-12-25"
  minDate="2020-01-01"
  onChange={handleChange}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    pickerMode: 'month',
    value: '2025-03'
  },
  parameters: {
    docs: {
      description: {
        story: '月選択モード。日付ではなく年月を選択'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pickerMode: 'month',
    value: '2025-03',
    showNavigation: true
  },
  parameters: {
    docs: {
      description: {
        story: '月選択 + 前後月ナビゲーションボタン付き'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    value: '2025-03-19'
  },
  parameters: {
    docs: {
      description: {
        story: 'ダークバリアント。暗い背景に白文字'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    value: '2025-03-19'
  },
  parameters: {
    docs: {
      description: {
        story: 'アウトラインバリアント。透明背景に太枠'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    value: '2025-03-19'
  },
  parameters: {
    docs: {
      description: {
        story: '小サイズ'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    value: '2025-03-19'
  },
  parameters: {
    docs: {
      description: {
        story: '大サイズ'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '2025-03-19',
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'クリアボタン付き。×ボタンで日付をクリア可能'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: '2025-03-19',
    menuAlign: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'ポップアップを右寄せで表示'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    pickerMode: 'month',
    variant: 'dark',
    size: 'medium',
    showNavigation: true,
    allowClear: true,
    value: '2025-03'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: \`
**1on1プロジェクトでの実使用例**

回答一覧画面で使用されている構成:
- 月選択モード（pickerMode="month"）
- ダークバリアント（variant="dark"）
- ナビゲーション付き（showNavigation）
- クリア可能（allowClear）
        \`
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    pickerMode: 'month',
    variant: 'dark',
    size: 'medium',
    showNavigation: true,
    allowClear: true,
    value: '2025-03',
    highlightedMonths: [{
      month: '2025-01',
      colors: ['blue']
    }, {
      month: '2025-03',
      colors: ['green']
    }, {
      month: '2025-06',
      colors: ['red', 'blue']
    }]
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: \`
**ハイライト月付きの実使用例**

特定の月にドットマーカーを表示。バッチ開始月などをマークする際に使用。
複数色を指定すると複数のドットが表示される。
        \`
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const b=["Default","Empty","WithMinDate","PastDate","MonthPicker","MonthPickerWithNavigation","DarkVariant","OutlinedVariant","SmallSize","LargeSize","WithClearButton","RightAligned","ProjectUsage","ProjectUsageWithHighlight"];export{c as DarkVariant,a as Default,o as Empty,p as LargeSize,s as MonthPicker,i as MonthPickerWithNavigation,m as OutlinedVariant,n as PastDate,g as ProjectUsage,h as ProjectUsageWithHighlight,u as RightAligned,d as SmallSize,l as WithClearButton,t as WithMinDate,b as __namedExportsOrder,x as default};
