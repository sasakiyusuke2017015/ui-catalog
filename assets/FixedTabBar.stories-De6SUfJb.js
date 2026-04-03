import{j as e,r as n}from"./iframe-DWeAzsMr.js";import{F as t}from"./FixedTabBar-CU8SsEe3.js";import"./preload-helper-PPVm8Dsz.js";import"./app-6-fm8tV2.js";const m={title:"ナビゲーション/FixedTabBar",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
FixedTabBarコンポーネント。以下の機能をサポート:

- **固定位置**: SubHeaderと同じ高さに固定表示
- **レスポンシブ**: 左ペインの開閉に応じて自動調整
- **高さ自動計算**: CSS変数として高さを設定
- **カスタマイズ可能**: borderRadiusなどのスタイルをpropsで制御

ページ内でタブ切り替えが必要な場面に使用します。
        `}}},argTypes:{isLeftPaneOpen:{control:{type:"boolean"},description:"左ペインが開いているか",table:{defaultValue:{summary:!1}}},tabBorderRadius:{control:{type:"text"},description:"タブの角丸設定",table:{defaultValue:{summary:"0.5rem"}}},className:{control:{type:"text"},description:"カスタムクラス名"}}},l={args:{isLeftPaneOpen:!1},render:a=>e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx("div",{className:"fixed left-0 right-0 top-0 z-30 h-16 bg-blue-600 shadow-md",children:e.jsx("div",{className:"flex h-full items-center px-6",children:e.jsx("h1",{className:"text-fluid-xl font-bold text-white",children:"メインヘッダー"})})}),e.jsx(t,{...a,children:e.jsxs("div",{className:"flex gap-4 bg-white p-4",children:[e.jsx("button",{className:"rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"タブ1"}),e.jsx("button",{className:"rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300",children:"タブ2"}),e.jsx("button",{className:"rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300",children:"タブ3"})]})}),e.jsx("div",{className:"pt-32 px-6",children:e.jsx("p",{className:"text-gray-700",children:"メインコンテンツがここに表示されます。"})})]}),parameters:{docs:{description:{story:"基本的なFixedTabBar。ヘッダーの下に固定表示されます。"}}}},c=a=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx("div",{className:"fixed left-0 right-0 top-0 z-30 h-16 bg-blue-600 shadow-md",children:e.jsxs("div",{className:"flex h-full items-center justify-between px-6",children:[e.jsx("h1",{className:"text-fluid-xl font-bold text-white",children:"メインヘッダー"}),e.jsx("button",{onClick:()=>r(!s),className:"rounded-lg bg-white/20 px-4 py-2 text-white hover:bg-white/30",children:s?"左ペインを閉じる":"左ペインを開く"})]})}),s&&e.jsx("div",{className:"fixed left-0 top-16 z-20 h-full w-64 bg-gray-800 shadow-lg",children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-white",children:"左ペインコンテンツ"})})}),e.jsx(t,{...a,isLeftPaneOpen:s,children:e.jsxs("div",{className:"flex gap-4 bg-white p-4",children:[e.jsx("button",{className:"rounded-lg bg-teal-500 px-4 py-2 text-white hover:bg-teal-600",children:"ダッシュボード"}),e.jsx("button",{className:"rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300",children:"レポート"}),e.jsx("button",{className:"rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300",children:"設定"})]})}),e.jsxs("div",{className:"pt-32 px-6 transition-all duration-300",style:{marginLeft:s?"16rem":"0"},children:[e.jsx("h2",{className:"mb-4 text-fluid-2xl font-bold text-gray-800",children:"メインコンテンツ"}),e.jsx("p",{className:"text-gray-700",children:"左ペインの開閉に応じてタブバーの位置が自動調整されます。"})]})]})},d={render:a=>e.jsx(c,{...a}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"左ペインの開閉に連動するデモ。ボタンをクリックして動作を確認できます。"}}}},i={args:{isLeftPaneOpen:!1,tabBorderRadius:"1.5rem"},render:a=>e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx("div",{className:"fixed left-0 right-0 top-0 z-30 h-16 bg-purple-600 shadow-md",children:e.jsx("div",{className:"flex h-full items-center px-6",children:e.jsx("h1",{className:"text-fluid-xl font-bold text-white",children:"カスタムスタイル"})})}),e.jsx(t,{...a,children:e.jsxs("div",{className:"flex gap-4 bg-white p-4",children:[e.jsx("button",{className:"rounded-full bg-purple-500 px-6 py-2 text-white hover:bg-purple-600",children:"Tab A"}),e.jsx("button",{className:"rounded-full bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300",children:"Tab B"}),e.jsx("button",{className:"rounded-full bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300",children:"Tab C"})]})}),e.jsx("div",{className:"pt-32 px-6",children:e.jsx("p",{className:"text-gray-700",children:"カスタム角丸（1.5rem）が適用されています。"})})]}),parameters:{docs:{description:{story:"tabBorderRadiusプロパティでタブバーの角丸をカスタマイズできます。"}}}},o={args:{isLeftPaneOpen:!1},render:a=>e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx("div",{className:"fixed left-0 right-0 top-0 z-30 h-16 bg-green-600 shadow-md",children:e.jsx("div",{className:"flex h-full items-center px-6",children:e.jsx("h1",{className:"text-fluid-xl font-bold text-white",children:"多数のタブ"})})}),e.jsx(t,{...a,children:e.jsx("div",{className:"flex gap-2 overflow-x-auto bg-white p-4",children:Array.from({length:10},(s,r)=>e.jsxs("button",{className:`whitespace-nowrap rounded-lg px-4 py-2 ${r===0?"bg-green-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["タブ ",r+1]},r))})}),e.jsx("div",{className:"pt-32 px-6",children:e.jsx("p",{className:"text-gray-700",children:"多数のタブがある場合は横スクロール可能です。"})})]}),parameters:{docs:{description:{story:"タブが多い場合の表示例。横スクロールで対応できます。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLeftPaneOpen: false
  },
  render: (args: FixedTabBarProps) => <div className="min-h-screen bg-gray-100">
      <div className="fixed left-0 right-0 top-0 z-30 h-16 bg-blue-600 shadow-md">
        <div className="flex h-full items-center px-6">
          <h1 className="text-fluid-xl font-bold text-white">メインヘッダー</h1>
        </div>
      </div>
      <FixedTabBar {...args}>
        <div className="flex gap-4 bg-white p-4">
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            タブ1
          </button>
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
            タブ2
          </button>
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
            タブ3
          </button>
        </div>
      </FixedTabBar>
      <div className="pt-32 px-6">
        <p className="text-gray-700">メインコンテンツがここに表示されます。</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '基本的なFixedTabBar。ヘッダーの下に固定表示されます。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: FixedTabBarProps) => <LeftPaneDemo {...args} />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '左ペインの開閉に連動するデモ。ボタンをクリックして動作を確認できます。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isLeftPaneOpen: false,
    tabBorderRadius: '1.5rem'
  },
  render: (args: FixedTabBarProps) => <div className="min-h-screen bg-gray-100">
      <div className="fixed left-0 right-0 top-0 z-30 h-16 bg-purple-600 shadow-md">
        <div className="flex h-full items-center px-6">
          <h1 className="text-fluid-xl font-bold text-white">カスタムスタイル</h1>
        </div>
      </div>
      <FixedTabBar {...args}>
        <div className="flex gap-4 bg-white p-4">
          <button className="rounded-full bg-purple-500 px-6 py-2 text-white hover:bg-purple-600">
            Tab A
          </button>
          <button className="rounded-full bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300">
            Tab B
          </button>
          <button className="rounded-full bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300">
            Tab C
          </button>
        </div>
      </FixedTabBar>
      <div className="pt-32 px-6">
        <p className="text-gray-700">カスタム角丸（1.5rem）が適用されています。</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'tabBorderRadiusプロパティでタブバーの角丸をカスタマイズできます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isLeftPaneOpen: false
  },
  render: (args: FixedTabBarProps) => <div className="min-h-screen bg-gray-100">
      <div className="fixed left-0 right-0 top-0 z-30 h-16 bg-green-600 shadow-md">
        <div className="flex h-full items-center px-6">
          <h1 className="text-fluid-xl font-bold text-white">多数のタブ</h1>
        </div>
      </div>
      <FixedTabBar {...args}>
        <div className="flex gap-2 overflow-x-auto bg-white p-4">
          {Array.from({
          length: 10
        }, (_, i) => <button key={i} className={\`whitespace-nowrap rounded-lg px-4 py-2 \${i === 0 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}>
              タブ {i + 1}
            </button>)}
        </div>
      </FixedTabBar>
      <div className="pt-32 px-6">
        <p className="text-gray-700">多数のタブがある場合は横スクロール可能です。</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'タブが多い場合の表示例。横スクロールで対応できます。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const b=["Basic","WithLeftPane","CustomBorderRadius","ManyTabs"];export{l as Basic,i as CustomBorderRadius,o as ManyTabs,d as WithLeftPane,b as __namedExportsOrder,m as default};
