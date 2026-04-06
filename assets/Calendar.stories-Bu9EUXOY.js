import{C as m}from"./Calendar-D3W0nc5O.js";import"./iframe-D9uhVg1b.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-B7_qdoJ6.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const h={title:"フォーム/Calendar",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
日付/月選択カレンダーコンポーネント。以下の機能をサポート:

- **モード切替**: \`mode="date"\`（日選択）/ \`mode="month"\`（月選択）
- **ナビゲーション**: 前月/次月、前年/次年への移動
- **範囲制限**: minDate/maxDateで選択可能範囲を制限
- **今日ハイライト**: 今日の日付をリング表示
- **曜日色分け**: 日曜(赤)、土曜(青)
- **月ハイライト**: 特定月にドットマーカーを表示（monthモード）

DatePickerのポップアップなしで、埋め込み型カレンダーとして使用可能。
        `}}},argTypes:{mode:{description:"選択モード",control:"select",options:["date","month"]},selectedDate:{description:"選択中の日付",control:"date"},minDate:{description:"選択可能な最小日付",control:"date"},maxDate:{description:"選択可能な最大日付",control:"date"},primaryBgColor:{description:"ヘッダー背景色",control:"color"},borderRadius:{description:"角丸",control:"text"},onSelect:{description:"日付/月選択時のコールバック",action:"selected"},onNavigate:{description:"月/年変更時のコールバック",action:"navigated"}}},e={args:{mode:"date",selectedDate:new Date},parameters:{docs:{description:{story:"日選択モード。カレンダーで日付を選択。"}}}},t={args:{mode:"date",selectedDate:null},parameters:{docs:{description:{story:"日付が選択されていない状態。今日がリングでハイライトされる。"}}}},o={args:{mode:"date",selectedDate:new Date(2025,2,15),minDate:new Date(2025,2,1),maxDate:new Date(2025,2,31)},parameters:{docs:{description:{story:"選択可能範囲を制限。範囲外の日付はグレーアウトされ選択不可。"}}}},r={args:{mode:"month",selectedDate:new Date(2025,2,1)},parameters:{docs:{description:{story:"月選択モード。年ごとに12ヶ月のグリッドを表示。"}}}},n={args:{mode:"month",selectedDate:new Date(2025,2,1),highlightedMonths:[{month:"2025-01",colors:["blue"]},{month:"2025-03",colors:["green"]},{month:"2025-06",colors:["red","blue"]}]},parameters:{docs:{description:{story:"特定月にドットマーカーを表示。複数色指定可能。"}}}},a={args:{mode:"month",selectedDate:new Date(2025,2,1),minDate:new Date(2024,0,1),maxDate:new Date(2025,11,31)},parameters:{docs:{description:{story:"年範囲を制限。2024年〜2025年のみ選択可能。"}}}},s={args:{mode:"date",selectedDate:new Date,primaryBgColor:"#10b981"},parameters:{docs:{description:{story:"ヘッダー背景色をカスタマイズ（緑）。"}}}},d={args:{mode:"month",selectedDate:new Date(2025,2,1),primaryBgColor:"#8b5cf6"},parameters:{docs:{description:{story:"月選択モードでヘッダー背景色をカスタマイズ（紫）。"}}}},c={args:{mode:"date",selectedDate:new Date,borderRadius:"1rem"},parameters:{docs:{description:{story:"角丸を大きくしたバリエーション。"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'date',
    selectedDate: new Date()
  },
  parameters: {
    docs: {
      description: {
        story: '日選択モード。カレンダーで日付を選択。'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'date',
    selectedDate: null
  },
  parameters: {
    docs: {
      description: {
        story: '日付が選択されていない状態。今日がリングでハイライトされる。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'date',
    selectedDate: new Date(2025, 2, 15),
    minDate: new Date(2025, 2, 1),
    maxDate: new Date(2025, 2, 31)
  },
  parameters: {
    docs: {
      description: {
        story: '選択可能範囲を制限。範囲外の日付はグレーアウトされ選択不可。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'month',
    selectedDate: new Date(2025, 2, 1)
  },
  parameters: {
    docs: {
      description: {
        story: '月選択モード。年ごとに12ヶ月のグリッドを表示。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'month',
    selectedDate: new Date(2025, 2, 1),
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
    docs: {
      description: {
        story: '特定月にドットマーカーを表示。複数色指定可能。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'month',
    selectedDate: new Date(2025, 2, 1),
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2025, 11, 31)
  },
  parameters: {
    docs: {
      description: {
        story: '年範囲を制限。2024年〜2025年のみ選択可能。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'date',
    selectedDate: new Date(),
    primaryBgColor: '#10b981'
  },
  parameters: {
    docs: {
      description: {
        story: 'ヘッダー背景色をカスタマイズ（緑）。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'month',
    selectedDate: new Date(2025, 2, 1),
    primaryBgColor: '#8b5cf6'
  },
  parameters: {
    docs: {
      description: {
        story: '月選択モードでヘッダー背景色をカスタマイズ（紫）。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'date',
    selectedDate: new Date(),
    borderRadius: '1rem'
  },
  parameters: {
    docs: {
      description: {
        story: '角丸を大きくしたバリエーション。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const y=["DateMode","DateModeNoSelection","DateModeWithRange","MonthMode","MonthModeWithHighlight","MonthModeWithRange","CustomColors","CustomColorsMonth","LargeBorderRadius"];export{s as CustomColors,d as CustomColorsMonth,e as DateMode,t as DateModeNoSelection,o as DateModeWithRange,c as LargeBorderRadius,r as MonthMode,n as MonthModeWithHighlight,a as MonthModeWithRange,y as __namedExportsOrder,h as default};
