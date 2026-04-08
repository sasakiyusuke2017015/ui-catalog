import{j as e,r as m}from"./iframe-BwWmhw3u.js";import"./preload-helper-PPVm8Dsz.js";const g="_sideNav_1cyb7_1",v="_sideNav__content_1cyb7_7",o={sideNav:g,sideNav__content:v};function a({width:u,topOffset:t,isOpen:n=!0,bgColor:d,children:i,className:l,style:c}){const p=[o.sideNav,l].filter(Boolean).join(" ");return e.jsx("div",{className:p,style:{width:`${u}px`,top:`${t}px`,left:n?0:`-${u}px`,backgroundColor:d,...c},"data-component":"SideNav",children:e.jsx("div",{className:o.sideNav__content,children:i})})}try{a.displayName="SideNav",a.__docgenInfo={description:`汎用サイドナビコンポーネント

固定位置で画面左側に表示されるサイドナビゲーション。
isOpen で開閉状態を制御可能。`,displayName:"SideNav",props:{width:{defaultValue:null,description:"サイドナビの幅（px）",name:"width",required:!0,type:{name:"number"}},topOffset:{defaultValue:null,description:"ヘッダーからのオフセット（px）",name:"topOffset",required:!0,type:{name:"number"}},isOpen:{defaultValue:{value:"true"},description:"開閉状態",name:"isOpen",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:null,description:"背景色",name:"bgColor",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"ナビゲーションアイテム",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"追加の className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"追加のスタイル",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const N={title:"テンプレート/SideNav",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={args:{width:240,topOffset:0,isOpen:!0,bgColor:"#F9FAFB",children:e.jsxs("nav",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"px-3 py-2 rounded hover:bg-gray-200 cursor-pointer",children:"ホーム"}),e.jsx("div",{className:"px-3 py-2 rounded hover:bg-gray-200 cursor-pointer",children:"設定"}),e.jsx("div",{className:"px-3 py-2 rounded hover:bg-gray-200 cursor-pointer",children:"ヘルプ"})]})}},y=()=>{const[u,t]=m.useState(!0);return e.jsxs("div",{style:{height:400},children:[e.jsx("button",{onClick:()=>t(!u),className:"fixed top-2 left-64 z-50 rounded bg-blue-500 px-3 py-1 text-white text-sm",children:u?"閉じる":"開く"}),e.jsx(a,{width:240,topOffset:0,isOpen:u,bgColor:"#F9FAFB",children:e.jsxs("nav",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"px-3 py-2 rounded hover:bg-gray-200 cursor-pointer",children:"メニュー1"}),e.jsx("div",{className:"px-3 py-2 rounded hover:bg-gray-200 cursor-pointer",children:"メニュー2"})]})})]})},s={render:()=>e.jsx(y,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: 240,
    topOffset: 0,
    isOpen: true,
    bgColor: '#F9FAFB',
    children: <nav className="p-4 space-y-2">
        <div className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer">ホーム</div>
        <div className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer">設定</div>
        <div className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer">ヘルプ</div>
      </nav>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleExample />
}`,...s.parameters?.docs?.source}}};const f=["Default","Toggleable"];export{r as Default,s as Toggleable,f as __namedExportsOrder,N as default};
