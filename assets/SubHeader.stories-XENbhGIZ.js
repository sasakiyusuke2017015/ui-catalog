import{j as e}from"./iframe-BwWmhw3u.js";import"./preload-helper-PPVm8Dsz.js";const p="_subHeader_ipnv4_1",i={subHeader:p};function s({topOffset:a,leftOffset:r=0,children:n,className:l,style:o,innerRef:d}){const c=[i.subHeader,l].filter(Boolean).join(" ");return e.jsx("div",{ref:d,className:c,style:{top:`${a}px`,left:`${r}px`,...o},"data-component":"SubHeader",children:n})}try{s.displayName="SubHeader",s.__docgenInfo={description:`汎用サブヘッダーコンポーネント

Header の下に固定位置で表示されるサブヘッダー。
タブやフィルター、追加のコントロールなどを配置可能。`,displayName:"SubHeader",props:{topOffset:{defaultValue:null,description:"ヘッダーからのオフセット（px）",name:"topOffset",required:!0,type:{name:"number"}},leftOffset:{defaultValue:{value:"0"},description:"左からのオフセット（SideNav の幅など）",name:"leftOffset",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"サブヘッダーのコンテンツ",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"追加の className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"追加のスタイル",name:"style",required:!1,type:{name:"CSSProperties"}},innerRef:{defaultValue:null,description:"DOM参照用のref",name:"innerRef",required:!1,type:{name:"RefObject<HTMLDivElement | null>"}}}}}catch{}const f={title:"テンプレート/SubHeader",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},u={args:{topOffset:0,children:e.jsxs("div",{className:"flex items-center gap-4 bg-white border-b px-4 py-2 shadow-sm",children:[e.jsx("button",{className:"text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1",children:"概要"}),e.jsx("button",{className:"text-sm text-gray-500 hover:text-gray-700 pb-1",children:"詳細"}),e.jsx("button",{className:"text-sm text-gray-500 hover:text-gray-700 pb-1",children:"履歴"})]})}},t={args:{topOffset:48,leftOffset:240,children:e.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 border-b px-4 py-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"フィルター:"}),e.jsx("button",{className:"rounded bg-blue-100 px-2 py-1 text-xs text-blue-700",children:"全て"}),e.jsx("button",{className:"rounded bg-gray-100 px-2 py-1 text-xs text-gray-600",children:"アクティブ"})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    topOffset: 0,
    children: <div className="flex items-center gap-4 bg-white border-b px-4 py-2 shadow-sm">
        <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">概要</button>
        <button className="text-sm text-gray-500 hover:text-gray-700 pb-1">詳細</button>
        <button className="text-sm text-gray-500 hover:text-gray-700 pb-1">履歴</button>
      </div>
  }
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    topOffset: 48,
    leftOffset: 240,
    children: <div className="flex items-center gap-2 bg-gray-50 border-b px-4 py-2">
        <span className="text-sm text-gray-600">フィルター:</span>
        <button className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">全て</button>
        <button className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">アクティブ</button>
      </div>
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","WithLeftOffset"];export{u as Default,t as WithLeftOffset,x as __namedExportsOrder,f as default};
