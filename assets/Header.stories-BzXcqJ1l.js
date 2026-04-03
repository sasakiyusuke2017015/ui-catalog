import{j as e}from"./iframe-TXWPROLT.js";import"./preload-helper-PPVm8Dsz.js";const m="_header_iypme_1",h="_header__inner_iypme_8",g="_header__content_iypme_19",r={header:m,header__inner:h,header__content:g};function a({height:n,bgColor:s,textColor:l,borderColor:o,leftContent:d,centerContent:i,rightContent:F,className:c,style:C}){const p=[r.header,c].filter(Boolean).join(" ");return e.jsx("header",{className:p,style:{height:`${n}px`,backgroundColor:s,color:l,borderBottom:o?`3px solid ${o}`:void 0,...C},"data-component":"Header",children:e.jsx("div",{className:r.header__inner,children:e.jsxs("div",{className:r.header__content,children:[d,i,F]})})})}try{a.displayName="Header",a.__docgenInfo={description:`汎用ヘッダーコンポーネント

固定位置で画面上部に表示されるヘッダー。
スロット式で左・中央・右のコンテンツを自由に配置可能。`,displayName:"Header",props:{height:{defaultValue:null,description:"ヘッダーの高さ（px）",name:"height",required:!0,type:{name:"number"}},bgColor:{defaultValue:null,description:"背景色",name:"bgColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"テキスト色",name:"textColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"下部ボーダー色",name:"borderColor",required:!1,type:{name:"string"}},leftContent:{defaultValue:null,description:"左側コンテンツ（ロゴ、パンくずリストなど）",name:"leftContent",required:!1,type:{name:"ReactNode"}},centerContent:{defaultValue:null,description:"中央コンテンツ",name:"centerContent",required:!1,type:{name:"ReactNode"}},rightContent:{defaultValue:null,description:"右側コンテンツ（ユーザーメニューなど）",name:"rightContent",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"追加の className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"追加のスタイル",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const x={title:"テンプレート/Header",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}},u={args:{height:48,bgColor:"#4F46E5",textColor:"#FFFFFF",leftContent:e.jsx("span",{className:"font-bold text-lg",children:"MyApp"}),rightContent:e.jsx("span",{className:"text-sm",children:"ユーザー名"})}},t={args:{height:56,bgColor:"#1F2937",textColor:"#FFFFFF",borderColor:"#3B82F6",leftContent:e.jsx("span",{className:"font-bold",children:"Logo"}),centerContent:e.jsx("span",{className:"text-sm",children:"ダッシュボード"}),rightContent:e.jsx("button",{className:"rounded bg-white/20 px-3 py-1 text-sm hover:bg-white/30",children:"設定"})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    height: 48,
    bgColor: '#4F46E5',
    textColor: '#FFFFFF',
    leftContent: <span className="font-bold text-lg">MyApp</span>,
    rightContent: <span className="text-sm">ユーザー名</span>
  }
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    height: 56,
    bgColor: '#1F2937',
    textColor: '#FFFFFF',
    borderColor: '#3B82F6',
    leftContent: <span className="font-bold">Logo</span>,
    centerContent: <span className="text-sm">ダッシュボード</span>,
    rightContent: <button className="rounded bg-white/20 px-3 py-1 text-sm hover:bg-white/30">
        設定
      </button>
  }
}`,...t.parameters?.docs?.source}}};const E=["Default","WithCenter"];export{u as Default,t as WithCenter,E as __namedExportsOrder,x as default};
