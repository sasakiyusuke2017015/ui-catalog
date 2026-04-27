import{j as e}from"./iframe-2z8Hl2jC.js";import{D as c}from"./DevelopmentBanner-oqTW9KzY.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-CVAUArl_.js";import"./Icon-DQoCPfk-.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Text-BNefPDJW.js";import"./colors-BiHXYRGc.js";const N={title:"表示/バナー/DevelopmentBanner",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
DevelopmentBannerコンポーネント。

- **固定タイトル**: 「開発中」というタイトルが自動設定
- **warningバリアント**: 黄色のバナーで注意を促す
- **簡潔なAPI**: messageプロパティのみで使用可能

開発中の機能やベータ版ページで使用します。
        `}}},argTypes:{message:{control:"text",description:"説明文"},className:{control:"text",description:"追加のクラス名"}}},s={args:{message:"この機能は現在開発中です。予期しない動作が発生する可能性があります。"},parameters:{docs:{description:{story:"基本的な開発中バナー。"}}}},r={args:{message:"開発中の機能です。"},parameters:{docs:{description:{story:"短いメッセージでの表示例。"}}}},a={args:{message:"この機能はベータ版です。フィードバックをお待ちしております。"},parameters:{docs:{description:{story:"ベータ版機能の通知に使用する例。"}}}},o={args:{message:"現在、この機能は開発中です。一部の機能が利用できない、または不安定な動作をする可能性があります。問題が発生した場合はサポートまでご連絡ください。"},parameters:{docs:{description:{story:"詳細な説明を含むメッセージ。"}}}},t={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx(c,{message:"新しいダッシュボードは現在開発中です。一部の機能が正常に動作しない場合があります。",className:"mb-6"}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-bold text-gray-800",children:"新しいダッシュボード"}),e.jsx("p",{className:"text-gray-600",children:"開発中の機能に関する注意事項を上部バナーで表示しています。"})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ページ上部に配置して開発中であることを警告する例。"}}}},n={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-3",children:[e.jsx(c,{message:"機能A: 開発中です。"}),e.jsx(c,{message:"機能B: ベータ版としてリリースしました。"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"複数の開発中機能を同時に通知する例。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'この機能は現在開発中です。予期しない動作が発生する可能性があります。'
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な開発中バナー。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: '開発中の機能です。'
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
    message: 'この機能はベータ版です。フィードバックをお待ちしております。'
  },
  parameters: {
    docs: {
      description: {
        story: 'ベータ版機能の通知に使用する例。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: '現在、この機能は開発中です。一部の機能が利用できない、または不安定な動作をする可能性があります。問題が発生した場合はサポートまでご連絡ください。'
  },
  parameters: {
    docs: {
      description: {
        story: '詳細な説明を含むメッセージ。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <DevelopmentBanner message="新しいダッシュボードは現在開発中です。一部の機能が正常に動作しない場合があります。" className="mb-6" />
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-fluid-xl font-bold text-gray-800">
          新しいダッシュボード
        </h2>
        <p className="text-gray-600">
          開発中の機能に関する注意事項を上部バナーで表示しています。
        </p>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ページ上部に配置して開発中であることを警告する例。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-3">
      <DevelopmentBanner message="機能A: 開発中です。" />
      <DevelopmentBanner message="機能B: ベータ版としてリリースしました。" />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '複数の開発中機能を同時に通知する例。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const h=["Basic","ShortMessage","BetaNotice","DetailedMessage","PageLayoutExample","MultipleBanners"];export{s as Basic,a as BetaNotice,o as DetailedMessage,n as MultipleBanners,t as PageLayoutExample,r as ShortMessage,h as __namedExportsOrder,N as default};
