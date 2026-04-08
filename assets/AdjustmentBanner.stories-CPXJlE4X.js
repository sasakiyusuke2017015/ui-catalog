import{j as e}from"./iframe-BwWmhw3u.js";import{A as o}from"./AdjustmentBanner-9gGPgfC5.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-C4hCqv5I.js";import"./Icon-DSv2CHnr.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Text-COLMc_YM.js";import"./colors-BiHXYRGc.js";const x={title:"表示/バナー/AdjustmentBanner",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
AdjustmentBannerコンポーネント。

- **固定タイトル**: 「調整中」というタイトルが自動設定
- **infoバリアント**: 青色のバナーで表示
- **簡潔なAPI**: messageプロパティのみで使用可能

調整中の機能やページで使用します。
        `}}},argTypes:{message:{control:"text",description:"説明文"},className:{control:"text",description:"追加のクラス名"}}},s={args:{message:"この機能は現在調整中です。しばらくお待ちください。"},parameters:{docs:{description:{story:"基本的な調整中バナー。"}}}},r={args:{message:"調整中の機能です。"},parameters:{docs:{description:{story:"短いメッセージでの表示例。"}}}},a={args:{message:"現在、この機能は調整作業を行っています。一部の機能が正常に動作しない場合があります。ご不便をおかけしますがご了承ください。"},parameters:{docs:{description:{story:"詳細な説明を含むメッセージ。"}}}},t={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx(o,{message:"レポート機能は現在調整中です。一時的にデータが正しく表示されない場合があります。",className:"mb-6"}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-bold text-gray-800",children:"レポート"}),e.jsx("p",{className:"text-gray-600",children:"調整中の機能に関する情報を上部バナーで表示しています。"})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ページ上部に配置して調整中であることを通知する例。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'この機能は現在調整中です。しばらくお待ちください。'
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な調整中バナー。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: '調整中の機能です。'
  },
  parameters: {
    docs: {
      description: {
        story: '短いメッセージでの表示例。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: '現在、この機能は調整作業を行っています。一部の機能が正常に動作しない場合があります。ご不便をおかけしますがご了承ください。'
  },
  parameters: {
    docs: {
      description: {
        story: '詳細な説明を含むメッセージ。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <AdjustmentBanner message="レポート機能は現在調整中です。一時的にデータが正しく表示されない場合があります。" className="mb-6" />
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-fluid-xl font-bold text-gray-800">レポート</h2>
        <p className="text-gray-600">
          調整中の機能に関する情報を上部バナーで表示しています。
        </p>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ページ上部に配置して調整中であることを通知する例。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const y=["Basic","ShortMessage","DetailedMessage","PageLayoutExample"];export{s as Basic,a as DetailedMessage,t as PageLayoutExample,r as ShortMessage,y as __namedExportsOrder,x as default};
