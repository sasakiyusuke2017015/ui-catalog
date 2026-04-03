import{j as e}from"./iframe-BOXgkPL4.js";import{D as s}from"./DotPattern-BWAFSL8f.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const f={title:"背景効果/DotPattern",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{width:{control:{type:"number",min:8,max:64,step:4},description:"パターンの幅"},height:{control:{type:"number",min:8,max:64,step:4},description:"パターンの高さ"},cr:{control:{type:"number",min:.5,max:5,step:.5},description:"ドットの半径"}},decorators:[t=>e.jsx("div",{style:{width:"100vw",height:"400px",position:"relative"},children:e.jsx(t,{})})]},r={args:{}},a={args:{width:10,height:10,cr:.8}},n={args:{width:32,height:32,cr:1.5}},i={args:{width:24,height:24,cr:3}},l={render:()=>e.jsxs("div",{className:"grid h-96 grid-cols-3",children:[e.jsxs("div",{className:"relative bg-white",children:[e.jsx(s,{className:"fill-blue-400/50"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-blue-600",children:"Blue"})})]}),e.jsxs("div",{className:"relative bg-gray-900",children:[e.jsx(s,{className:"fill-green-400/50"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-green-400",children:"Green"})})]}),e.jsxs("div",{className:"relative bg-purple-50",children:[e.jsx(s,{className:"fill-purple-400/50"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-purple-600",children:"Purple"})})]})]}),decorators:[t=>e.jsx(t,{})]},o={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-white",children:[e.jsx(s,{className:"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"中心にフォーカス"})})]}),decorators:[t=>e.jsx(t,{})]},c={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-gray-50",children:[e.jsx(s,{className:"fill-gray-300/60"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"ドットパターン背景"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"背景にドットパターンを使用してテクスチャを追加"})]})})]}),decorators:[t=>e.jsx(t,{})]},d={render:()=>e.jsxs("div",{className:"relative h-[500px] w-full bg-gradient-to-br from-blue-50 to-indigo-100",children:[e.jsx(s,{width:20,height:20,cr:1,className:"fill-blue-500/30 [mask-image:linear-gradient(to_bottom,white,transparent)]"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-6",children:[e.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Welcome"}),e.jsx("p",{className:"max-w-md text-center text-lg text-gray-600",children:"ドットパターンで視覚的な深みを追加"}),e.jsx("button",{className:"rounded-full bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700",children:"始める"})]})]}),decorators:[t=>e.jsx(t,{})]},m={render:()=>e.jsx("div",{className:"flex h-96 items-center justify-center bg-gray-100 p-8",children:e.jsxs("div",{className:"relative w-80 overflow-hidden rounded-2xl bg-white shadow-xl",children:[e.jsx(s,{width:12,height:12,cr:.6,className:"fill-gray-200/80"}),e.jsxs("div",{className:"relative z-10 p-6",children:[e.jsx("div",{className:"mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:"カードタイトル"}),e.jsx("p",{className:"mt-2 text-gray-500",children:"ドットパターンを背景に使用したカードコンポーネント"})]})]})}),decorators:[t=>e.jsx(t,{})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source},description:{story:"デフォルト",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: 10,
    height: 10,
    cr: 0.8
  }
}`,...a.parameters?.docs?.source},description:{story:"密なドット",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: 32,
    height: 32,
    cr: 1.5
  }
}`,...n.parameters?.docs?.source},description:{story:"疎なドット",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 24,
    height: 24,
    cr: 3
  }
}`,...i.parameters?.docs?.source},description:{story:"大きなドット",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid h-96 grid-cols-3">
      <div className="relative bg-white">
        <DotPattern className="fill-blue-400/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-blue-600">Blue</span>
        </div>
      </div>
      <div className="relative bg-gray-900">
        <DotPattern className="fill-green-400/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-green-400">Green</span>
        </div>
      </div>
      <div className="relative bg-purple-50">
        <DotPattern className="fill-purple-400/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-purple-600">Purple</span>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...l.parameters?.docs?.source},description:{story:"カラーバリエーション",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-white">
      <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">中心にフォーカス</h2>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...o.parameters?.docs?.source},description:{story:"グラデーションマスク付き",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-gray-50">
      <DotPattern className="fill-gray-300/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold text-gray-800">ドットパターン背景</h2>
          <p className="mt-2 text-gray-600">
            背景にドットパターンを使用してテクスチャを追加
          </p>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...c.parameters?.docs?.source},description:{story:"コンテンツと組み合わせ",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-[500px] w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <DotPattern width={20} height={20} cr={1} className="fill-blue-500/30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-gray-900">Welcome</h1>
        <p className="max-w-md text-center text-lg text-gray-600">
          ドットパターンで視覚的な深みを追加
        </p>
        <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700">
          始める
        </button>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...d.parameters?.docs?.source},description:{story:"ヒーローセクション風",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-96 items-center justify-center bg-gray-100 p-8">
      <div className="relative w-80 overflow-hidden rounded-2xl bg-white shadow-xl">
        <DotPattern width={12} height={12} cr={0.6} className="fill-gray-200/80" />
        <div className="relative z-10 p-6">
          <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <h3 className="text-xl font-semibold text-gray-800">カードタイトル</h3>
          <p className="mt-2 text-gray-500">
            ドットパターンを背景に使用したカードコンポーネント
          </p>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...m.parameters?.docs?.source},description:{story:"カード背景",...m.parameters?.docs?.description}}};const b=["Default","Dense","Sparse","LargeDots","ColorVariations","WithGradientMask","WithContent","HeroSection","CardBackground"];export{m as CardBackground,l as ColorVariations,r as Default,a as Dense,d as HeroSection,i as LargeDots,n as Sparse,c as WithContent,o as WithGradientMask,b as __namedExportsOrder,f as default};
