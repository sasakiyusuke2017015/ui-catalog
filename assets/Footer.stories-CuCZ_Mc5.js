import{j as a}from"./iframe-Dq39NNb-.js";import"./preload-helper-PPVm8Dsz.js";const m="_footer_d11hw_1",c={footer:m};function t({height:s,bottomOffset:o=0,leftOffset:n=0,children:r,className:l,style:f}){if(!r)return null;const i=[c.footer,l].filter(Boolean).join(" ");return a.jsx("footer",{className:i,style:{height:`${s}px`,bottom:`${o}px`,left:`${n}px`,...f},"data-component":"Footer",children:r})}try{t.displayName="Footer",t.__docgenInfo={description:`汎用フッターコンポーネント

固定位置で画面下部に表示されるフッター。
leftOffset / bottomOffset で SideNav や BottomTabBar との連携が可能。`,displayName:"Footer",props:{height:{defaultValue:null,description:"フッターの高さ（px）",name:"height",required:!0,type:{name:"number"}},bottomOffset:{defaultValue:{value:"0"},description:"下からのオフセット（BottomTabBar などがある場合）",name:"bottomOffset",required:!1,type:{name:"number"}},leftOffset:{defaultValue:{value:"0"},description:"左からのオフセット（SideNav の幅など）",name:"leftOffset",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"フッターコンテンツ",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"追加の className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"追加のスタイル",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const F={title:"テンプレート/Footer",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{height:40,children:a.jsx("span",{className:"text-sm text-gray-600",children:"フッターコンテンツ"})}},u={args:{height:40,leftOffset:200,bottomOffset:48,children:a.jsx("span",{className:"text-sm text-gray-600",children:"オフセット付きフッター"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    height: 40,
    children: <span className="text-sm text-gray-600">フッターコンテンツ</span>
  }
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    height: 40,
    leftOffset: 200,
    bottomOffset: 48,
    children: <span className="text-sm text-gray-600">オフセット付きフッター</span>
  }
}`,...u.parameters?.docs?.source}}};const B=["Default","WithOffset"];export{e as Default,u as WithOffset,B as __namedExportsOrder,F as default};
