import{j as e}from"./iframe-Dr-9ywM0.js";import{T as a}from"./TimeBadge--EIWGwJS.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const o={title:"表示/コンテンツ/TimeBadge",component:a,parameters:{layout:"centered",docs:{description:{component:`時間範囲表示用バッジコンポーネント

時間範囲やタイムスタンプを表示するためのバッジです。
複数のカラーバリアントとサイズをサポートします。`}}},tags:["autodocs"],argTypes:{children:{description:"表示するテキスト（時間範囲など）",control:{type:"text"}},variant:{description:"カラーバリアント",control:{type:"select"},options:["teal","purple","orange","blue","gray"]},size:{description:"サイズ（sm: text-xs, md: text-sm）",control:{type:"select"},options:["sm","md"]},className:{description:"追加のCSSクラス",control:{type:"text"}}}},s={args:{children:"0:00 ~ 5:30",variant:"teal",size:"sm"}},r={render:()=>e.jsx("div",{className:"flex flex-wrap gap-3",children:["teal","purple","orange","blue","gray"].map(t=>e.jsxs(a,{variant:t,children:[t,": 0:00 ~ 5:30"]},t))})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"teal",size:"sm",children:"0:00 ~ 5:30"}),e.jsx("span",{className:"text-xs text-gray-500",children:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:"teal",size:"md",children:"0:00 ~ 5:30"}),e.jsx("span",{className:"text-xs text-gray-500",children:"md"})]})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"会議タイムライン"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"teal",children:"0:00 ~ 5:30"}),e.jsx(a,{variant:"purple",children:"5:30 ~ 15:00"}),e.jsx(a,{variant:"orange",children:"15:00 ~ 25:00"}),e.jsx(a,{variant:"blue",children:"25:00 ~ 30:00"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"ステータス表示"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"gray",size:"md",children:"未定"}),e.jsx(a,{variant:"blue",size:"md",children:"10:00 ~ 11:00"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: '0:00 ~ 5:30',
    variant: 'teal',
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      {(['teal', 'purple', 'orange', 'blue', 'gray'] as const).map(variant => <TimeBadge key={variant} variant={variant}>
          {variant}: 0:00 ~ 5:30
        </TimeBadge>)}
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <TimeBadge variant="teal" size="sm">0:00 ~ 5:30</TimeBadge>
        <span className="text-xs text-gray-500">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TimeBadge variant="teal" size="md">0:00 ~ 5:30</TimeBadge>
        <span className="text-xs text-gray-500">md</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">会議タイムライン</h3>
        <div className="flex flex-wrap gap-2">
          <TimeBadge variant="teal">0:00 ~ 5:30</TimeBadge>
          <TimeBadge variant="purple">5:30 ~ 15:00</TimeBadge>
          <TimeBadge variant="orange">15:00 ~ 25:00</TimeBadge>
          <TimeBadge variant="blue">25:00 ~ 30:00</TimeBadge>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">ステータス表示</h3>
        <div className="flex flex-wrap gap-2">
          <TimeBadge variant="gray" size="md">未定</TimeBadge>
          <TimeBadge variant="blue" size="md">10:00 ~ 11:00</TimeBadge>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const p=["Default","Variants","Sizes","UseCases"];export{s as Default,i as Sizes,n as UseCases,r as Variants,p as __namedExportsOrder,o as default};
