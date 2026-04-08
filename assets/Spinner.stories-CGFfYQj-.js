import{j as e}from"./iframe-BwWmhw3u.js";import{S as c}from"./Spinner-nB7SjsmH.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const d={title:"フィードバック/ローディング/Spinner",component:c,parameters:{layout:"centered",docs:{description:{component:`ローディングスピナーコンポーネント

サイズとバリアント（色）を指定できるシンプルなスピナーです。`}}},tags:["autodocs"],argTypes:{size:{description:"スピナーのサイズ",control:{type:"select"},options:["sm","md","lg"]},variant:{description:"スピナーのカラーバリアント",control:{type:"select"},options:["default","info","success","warning","error"]},className:{description:"追加のCSSクラス",control:{type:"text"}}}},a={args:{size:"md",variant:"info"}},r={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:["sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(c,{size:s,variant:"info"}),e.jsx("span",{className:"text-xs text-gray-500",children:s})]},s))})},t={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:["default","info","success","warning","error"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(c,{size:"lg",variant:s}),e.jsx("span",{className:"text-xs text-gray-500",children:s})]},s))})},n={args:{size:"sm",variant:"info"}},i={args:{size:"lg",variant:"success"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'info'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Spinner size={size} variant="info" />
          <span className="text-xs text-gray-500">{size}</span>
        </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {(['default', 'info', 'success', 'warning', 'error'] as const).map(variant => <div key={variant} className="flex flex-col items-center gap-2">
          <Spinner size="lg" variant={variant} />
          <span className="text-xs text-gray-500">{variant}</span>
        </div>)}
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'info'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'success'
  }
}`,...i.parameters?.docs?.source}}};const g=["Default","Sizes","Variants","Small","Large"];export{a as Default,i as Large,r as Sizes,n as Small,t as Variants,g as __namedExportsOrder,d as default};
