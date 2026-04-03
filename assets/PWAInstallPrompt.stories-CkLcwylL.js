import{j as e}from"./iframe-TXWPROLT.js";import{P as a}from"./PWAInstallPrompt-Dwk3soG1.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DxjadS22.js";import"./useOperationLog-5hpxR7Xt.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const x={title:"フィードバック/PWAInstallPrompt",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
PWAInstallPromptコンポーネント。

- **自動表示**: beforeinstallpromptイベントで自動表示
- **インストール促進**: ホーム画面に追加を促す
- **閉じる機能**: ユーザーが後で決められる
- **スタンドアロン検出**: 既にインストール済みなら非表示

PWAアプリでのインストール体験向上に使用します。
        `}}}},s={render:()=>e.jsxs("div",{className:"relative h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6",children:[e.jsxs("div",{className:"mx-auto max-w-4xl",children:[e.jsxs("header",{className:"mb-6 rounded-lg bg-white p-6 shadow",children:[e.jsx("h1",{className:"text-fluid-2xl font-bold text-gray-800",children:"サンプルアプリケーション"}),e.jsx("p",{className:"mt-2 text-fluid-sm text-gray-600",children:"ホーム画面に追加してアプリのように使用できます"})]}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-semibold text-gray-800",children:"コンテンツ"}),e.jsx("p",{className:"text-gray-600",children:"通常、このプロンプトはbeforeinstallpromptイベントで自動的に表示されます。"})]})]}),e.jsx("div",{className:"fixed bottom-4 right-4 z-50 animate-fade-in",children:e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-fluid-sm font-semibold text-gray-900 dark:text-white",children:"アプリをインストール"}),e.jsx("p",{className:"mt-1 text-fluid-xs text-gray-600 dark:text-gray-300",children:"ホーム画面に追加して、アプリのように使用できます"})]}),e.jsx("button",{className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-200","aria-label":"閉じる",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{className:"rounded bg-blue-600 px-4 py-2 text-fluid-sm font-medium text-white hover:bg-blue-700",children:"インストール"}),e.jsx("button",{className:"rounded border border-gray-300 bg-white px-4 py-2 text-fluid-sm font-medium text-gray-700 hover:bg-gray-50",children:"後で"})]})]})})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"PWAインストールプロンプトの表示例。実際はbeforeinstallpromptイベントで自動表示されます。"}}}},t={render:()=>e.jsxs("div",{className:"relative h-screen bg-gray-50 p-6",children:[e.jsx("div",{className:"mx-auto max-w-4xl",children:e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-semibold text-gray-800",children:"PWAインストールプロンプトについて"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsxs("p",{children:["このコンポーネントは、ブラウザが発火する",e.jsx("code",{className:"rounded bg-gray-100 px-1 py-0.5",children:"beforeinstallprompt"}),"イベントをハンドリングして、カスタムUIでインストールを促します。"]}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsx("li",{children:"ユーザーがアプリをPWAとしてインストール可能な場合に表示"}),e.jsx("li",{children:"既にインストール済みの場合は表示されない"}),e.jsx("li",{children:"インストールボタンでネイティブプロンプトを表示"}),e.jsx("li",{children:"後でボタンまたは閉じるボタンで非表示"})]}),e.jsx("p",{className:"text-fluid-sm text-gray-500",children:"※ 実際の動作はPWA対応ブラウザでのみ確認できます。"})]})]})}),e.jsx(a,{})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"PWAインストールプロンプトの仕組みを説明する例。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 rounded-lg bg-white p-6 shadow">
          <h1 className="text-fluid-2xl font-bold text-gray-800">
            サンプルアプリケーション
          </h1>
          <p className="mt-2 text-fluid-sm text-gray-600">
            ホーム画面に追加してアプリのように使用できます
          </p>
        </header>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-fluid-xl font-semibold text-gray-800">
            コンテンツ
          </h2>
          <p className="text-gray-600">
            通常、このプロンプトはbeforeinstallpromptイベントで自動的に表示されます。
          </p>
        </div>
      </div>

      {/* モックプロンプト（実際はイベント駆動で表示） */}
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
        <div className="rounded-lg bg-white p-4 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-fluid-sm font-semibold text-gray-900 dark:text-white">
                アプリをインストール
              </h3>
              <p className="mt-1 text-fluid-xs text-gray-600 dark:text-gray-300">
                ホーム画面に追加して、アプリのように使用できます
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="閉じる">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="rounded bg-blue-600 px-4 py-2 text-fluid-sm font-medium text-white hover:bg-blue-700">
              インストール
            </button>
            <button className="rounded border border-gray-300 bg-white px-4 py-2 text-fluid-sm font-medium text-gray-700 hover:bg-gray-50">
              後で
            </button>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'PWAインストールプロンプトの表示例。実際はbeforeinstallpromptイベントで自動表示されます。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-fluid-xl font-semibold text-gray-800">
            PWAインストールプロンプトについて
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              このコンポーネントは、ブラウザが発火する
              <code className="rounded bg-gray-100 px-1 py-0.5">
                beforeinstallprompt
              </code>
              イベントをハンドリングして、カスタムUIでインストールを促します。
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>ユーザーがアプリをPWAとしてインストール可能な場合に表示</li>
              <li>既にインストール済みの場合は表示されない</li>
              <li>インストールボタンでネイティブプロンプトを表示</li>
              <li>後でボタンまたは閉じるボタンで非表示</li>
            </ul>
            <p className="text-fluid-sm text-gray-500">
              ※ 実際の動作はPWA対応ブラウザでのみ確認できます。
            </p>
          </div>
        </div>
      </div>
      <PWAInstallPrompt />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'PWAインストールプロンプトの仕組みを説明する例。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const p=["Basic","WithExplanation"];export{s as Basic,t as WithExplanation,p as __namedExportsOrder,x as default};
