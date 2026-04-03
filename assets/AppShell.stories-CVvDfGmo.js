import{j as e}from"./iframe-BMSfDgIj.js";import"./preload-helper-PPVm8Dsz.js";const p="_appShell_kr9vc_1",o="_appShell__body_kr9vc_8",m="_appShell__main_kr9vc_13",u={appShell:p,appShell__body:o,appShell__main:m};function t({header:r,sidebar:l,statusBar:n,children:d,className:i}){const c=[u.appShell,i].filter(Boolean).join(" ");return e.jsxs("div",{className:c,"data-component":"AppShell",children:[r,e.jsxs("div",{className:u.appShell__body,children:[l,e.jsx("main",{className:u.appShell__main,children:d})]}),n]})}try{t.displayName="AppShell",t.__docgenInfo={description:`アプリケーションシェルレイアウト

header + sidebar + main + statusBar の4スロット構成。
デスクトップアプリやダッシュボードの基本レイアウトとして使用。`,displayName:"AppShell",props:{header:{defaultValue:null,description:"ヘッダースロット",name:"header",required:!0,type:{name:"ReactNode"}},sidebar:{defaultValue:null,description:"サイドバースロット",name:"sidebar",required:!0,type:{name:"ReactNode"}},statusBar:{defaultValue:null,description:"ステータスバースロット（オプション）",name:"statusBar",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"メインコンテンツ",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"追加の className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g={title:"テンプレート/AppShell",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{header:e.jsx("div",{className:"h-12 bg-indigo-600 text-white flex items-center px-4 font-bold",children:"ヘッダー"}),sidebar:e.jsx("div",{className:"w-48 bg-gray-100 border-r p-4 text-sm text-gray-600",children:"サイドバー"}),children:e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-xl font-bold mb-4",children:"メインコンテンツ"}),e.jsx("p",{children:"ここにアプリケーションのメインコンテンツが表示されます。"})]})}},s={args:{header:e.jsx("div",{className:"h-12 bg-indigo-600 text-white flex items-center px-4 font-bold",children:"ヘッダー"}),sidebar:e.jsx("div",{className:"w-48 bg-gray-100 border-r p-4 text-sm text-gray-600",children:"サイドバー"}),statusBar:e.jsx("div",{className:"h-6 bg-green-100 text-green-700 text-xs flex items-center px-4",children:"接続済み"}),children:e.jsx("div",{className:"p-6",children:e.jsx("p",{children:"ステータスバー付きのレイアウト"})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div className="h-12 bg-indigo-600 text-white flex items-center px-4 font-bold">
        ヘッダー
      </div>,
    sidebar: <div className="w-48 bg-gray-100 border-r p-4 text-sm text-gray-600">
        サイドバー
      </div>,
    children: <div className="p-6">
        <h1 className="text-xl font-bold mb-4">メインコンテンツ</h1>
        <p>ここにアプリケーションのメインコンテンツが表示されます。</p>
      </div>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div className="h-12 bg-indigo-600 text-white flex items-center px-4 font-bold">
        ヘッダー
      </div>,
    sidebar: <div className="w-48 bg-gray-100 border-r p-4 text-sm text-gray-600">
        サイドバー
      </div>,
    statusBar: <div className="h-6 bg-green-100 text-green-700 text-xs flex items-center px-4">
        接続済み
      </div>,
    children: <div className="p-6">
        <p>ステータスバー付きのレイアウト</p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","WithStatusBar"];export{a as Default,s as WithStatusBar,_ as __namedExportsOrder,g as default};
