import{j as e}from"./iframe-BwfVzy39.js";import{G as t}from"./GridPattern-B43PrHEI.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const v={title:"背景効果/GridPattern",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{width:{control:{type:"number",min:10,max:100,step:5},description:"グリッドセルの幅"},height:{control:{type:"number",min:10,max:100,step:5},description:"グリッドセルの高さ"},strokeDasharray:{control:"text",description:"線のダッシュパターン"}},decorators:[s=>e.jsx("div",{style:{width:"100vw",height:"400px",position:"relative"},children:e.jsx(s,{})})]},r={args:{}},a={args:{width:20,height:20}},i={args:{width:80,height:80}},n={args:{strokeDasharray:"4 4"}},o={args:{strokeDasharray:"1 6"}},l={args:{width:40,height:40,squares:[[1,1],[2,3],[4,2],[3,4],[5,5]]}},c={render:()=>e.jsxs("div",{className:"grid h-96 grid-cols-3",children:[e.jsxs("div",{className:"relative bg-white",children:[e.jsx(t,{className:"stroke-blue-300/50 fill-blue-200/30"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-blue-600",children:"Blue"})})]}),e.jsxs("div",{className:"relative bg-gray-900",children:[e.jsx(t,{className:"stroke-green-500/40 fill-green-400/20"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-green-400",children:"Green"})})]}),e.jsxs("div",{className:"relative bg-purple-50",children:[e.jsx(t,{className:"stroke-purple-400/50 fill-purple-300/30"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-lg font-medium text-purple-600",children:"Purple"})})]})]}),decorators:[s=>e.jsx(s,{})]},d={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-white",children:[e.jsx(t,{width:30,height:30,className:"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"中心から広がるグリッド"})})]}),decorators:[s=>e.jsx(s,{})]},m={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-slate-50",children:[e.jsx(t,{className:"stroke-slate-200 fill-slate-100/50"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"グリッドパターン背景"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"技術系・モダンなデザインに適した背景パターン"})]})})]}),decorators:[s=>e.jsx(s,{})]},p={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-gray-900",children:[e.jsx(t,{width:50,height:50,className:"stroke-gray-700/50 fill-transparent"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h2",{className:"text-3xl font-bold text-white",children:"Dark Mode Grid"})})]}),decorators:[s=>e.jsx(s,{})]},h={render:()=>e.jsxs("div",{className:"relative h-[500px] w-full bg-gradient-to-br from-indigo-50 to-blue-100",children:[e.jsx(t,{width:40,height:40,className:"stroke-indigo-200/60 fill-transparent [mask-image:linear-gradient(to_bottom,white_50%,transparent)]"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-6",children:[e.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Technical Docs"}),e.jsx("p",{className:"max-w-md text-center text-lg text-gray-600",children:"グリッドパターンで技術的な印象を演出"}),e.jsx("button",{className:"rounded-full bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700",children:"ドキュメントを見る"})]})]}),decorators:[s=>e.jsx(s,{})]},u={render:()=>e.jsxs("div",{className:"relative h-96 w-full bg-blue-900",children:[e.jsx(t,{width:25,height:25,className:"stroke-blue-400/40 fill-transparent"}),e.jsx(t,{width:100,height:100,className:"stroke-blue-300/50 fill-transparent"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("h2",{className:"text-3xl font-bold text-blue-100",children:"Blueprint Style"})})]}),decorators:[s=>e.jsx(s,{})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source},description:{story:"デフォルト",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: 20,
    height: 20
  }
}`,...a.parameters?.docs?.source},description:{story:"小さいグリッド",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 80,
    height: 80
  }
}`,...i.parameters?.docs?.source},description:{story:"大きいグリッド",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    strokeDasharray: '4 4'
  }
}`,...n.parameters?.docs?.source},description:{story:"ダッシュライン",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    strokeDasharray: '1 6'
  }
}`,...o.parameters?.docs?.source},description:{story:"点線",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    width: 40,
    height: 40,
    squares: [[1, 1], [2, 3], [4, 2], [3, 4], [5, 5]]
  }
}`,...l.parameters?.docs?.source},description:{story:"ハイライトセル付き",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid h-96 grid-cols-3">
      <div className="relative bg-white">
        <GridPattern className="stroke-blue-300/50 fill-blue-200/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-blue-600">Blue</span>
        </div>
      </div>
      <div className="relative bg-gray-900">
        <GridPattern className="stroke-green-500/40 fill-green-400/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-green-400">Green</span>
        </div>
      </div>
      <div className="relative bg-purple-50">
        <GridPattern className="stroke-purple-400/50 fill-purple-300/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-purple-600">Purple</span>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...c.parameters?.docs?.source},description:{story:"カラーバリエーション",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-white">
      <GridPattern width={30} height={30} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">中心から広がるグリッド</h2>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...d.parameters?.docs?.source},description:{story:"グラデーションマスク付き",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-slate-50">
      <GridPattern className="stroke-slate-200 fill-slate-100/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold text-gray-800">グリッドパターン背景</h2>
          <p className="mt-2 text-gray-600">
            技術系・モダンなデザインに適した背景パターン
          </p>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...m.parameters?.docs?.source},description:{story:"コンテンツと組み合わせ",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-gray-900">
      <GridPattern width={50} height={50} className="stroke-gray-700/50 fill-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Dark Mode Grid</h2>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...p.parameters?.docs?.source},description:{story:"ダークモード向け",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-[500px] w-full bg-gradient-to-br from-indigo-50 to-blue-100">
      <GridPattern width={40} height={40} className="stroke-indigo-200/60 fill-transparent [mask-image:linear-gradient(to_bottom,white_50%,transparent)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-gray-900">Technical Docs</h1>
        <p className="max-w-md text-center text-lg text-gray-600">
          グリッドパターンで技術的な印象を演出
        </p>
        <button className="rounded-full bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700">
          ドキュメントを見る
        </button>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...h.parameters?.docs?.source},description:{story:"ヒーローセクション風",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full bg-blue-900">
      <GridPattern width={25} height={25} className="stroke-blue-400/40 fill-transparent" />
      <GridPattern width={100} height={100} className="stroke-blue-300/50 fill-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-blue-100">Blueprint Style</h2>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...u.parameters?.docs?.source},description:{story:"ブループリント風",...u.parameters?.docs?.description}}};const y=["Default","SmallGrid","LargeGrid","Dashed","Dotted","WithSquares","ColorVariations","WithGradientMask","WithContent","DarkMode","HeroSection","Blueprint"];export{u as Blueprint,c as ColorVariations,p as DarkMode,n as Dashed,r as Default,o as Dotted,h as HeroSection,i as LargeGrid,a as SmallGrid,m as WithContent,d as WithGradientMask,l as WithSquares,y as __namedExportsOrder,v as default};
