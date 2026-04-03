import{j as r}from"./iframe-C6Pnx79y.js";import{S as e}from"./ShimmerButton-tKhjYUPR.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const g={title:"アニメーション/ShimmerButton",component:e,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a2e"},{name:"light",value:"#f5f5f5"}]}},tags:["autodocs"],argTypes:{shimmerColor:{control:"color",description:"シマーエフェクトの色"},shimmerSize:{control:"text",description:"シマーの大きさ"},shimmerDuration:{control:"text",description:"シマーアニメーションの持続時間"},borderRadius:{control:"text",description:"角丸"},background:{control:"text",description:"背景色"}}},a={args:{children:"Shimmer Button"}},o={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{shimmerColor:"#ffffff",background:"rgba(0, 0, 0, 1)",children:"Default"}),r.jsx(e,{shimmerColor:"#60a5fa",background:"rgba(30, 64, 175, 1)",children:"Blue"}),r.jsx(e,{shimmerColor:"#4ade80",background:"rgba(22, 101, 52, 1)",children:"Green"}),r.jsx(e,{shimmerColor:"#f472b6",background:"rgba(157, 23, 77, 1)",children:"Pink"}),r.jsx(e,{shimmerColor:"#fbbf24",background:"rgba(146, 64, 14, 1)",children:"Amber"})]})},s={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{borderRadius:"0px",children:"Square"}),r.jsx(e,{borderRadius:"8px",children:"Rounded 8px"}),r.jsx(e,{borderRadius:"16px",children:"Rounded 16px"}),r.jsx(e,{borderRadius:"100px",children:"Pill (default)"})]})},n={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{shimmerDuration:"1s",children:"Fast (1s)"}),r.jsx(e,{shimmerDuration:"3s",children:"Normal (3s)"}),r.jsx(e,{shimmerDuration:"6s",children:"Slow (6s)"})]})},t={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{shimmerSize:"0.02em",children:"Subtle"}),r.jsx(e,{shimmerSize:"0.05em",children:"Normal"}),r.jsx(e,{shimmerSize:"0.1em",children:"Large"})]})},i={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",shimmerColor:"#ffffff",children:"Purple Gradient"}),r.jsx(e,{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",shimmerColor:"#ffffff",children:"Pink Gradient"}),r.jsx(e,{background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",shimmerColor:"#ffffff",children:"Blue Gradient"})]})},m={render:()=>r.jsxs("div",{className:"flex flex-col items-center gap-6 p-8",children:[r.jsx("h2",{className:"text-2xl font-bold text-white",children:"今すぐ始めましょう"}),r.jsx("p",{className:"text-gray-300",children:"無料トライアルで体験できます"}),r.jsx(e,{shimmerColor:"#fbbf24",background:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",className:"text-lg font-semibold px-8 py-4",children:"無料で始める"})]})},d={parameters:{backgrounds:{default:"dark"}},render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(e,{shimmerColor:"#818cf8",background:"rgba(49, 46, 129, 0.8)",children:"Subscribe"}),r.jsx(e,{shimmerColor:"#34d399",background:"rgba(6, 78, 59, 0.8)",children:"Get Started"})]})},c={parameters:{backgrounds:{default:"light"}},render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(e,{shimmerColor:"#3b82f6",background:"rgba(255, 255, 255, 1)",className:"text-gray-800 border-gray-200",children:"Learn More"}),r.jsx(e,{shimmerColor:"#ffffff",background:"rgba(37, 99, 235, 1)",children:"Get Started"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Shimmer Button'
  }
}`,...a.parameters?.docs?.source},description:{story:"デフォルト（黒背景 + 白シマー）",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ShimmerButton shimmerColor="#ffffff" background="rgba(0, 0, 0, 1)">
        Default
      </ShimmerButton>
      <ShimmerButton shimmerColor="#60a5fa" background="rgba(30, 64, 175, 1)">
        Blue
      </ShimmerButton>
      <ShimmerButton shimmerColor="#4ade80" background="rgba(22, 101, 52, 1)">
        Green
      </ShimmerButton>
      <ShimmerButton shimmerColor="#f472b6" background="rgba(157, 23, 77, 1)">
        Pink
      </ShimmerButton>
      <ShimmerButton shimmerColor="#fbbf24" background="rgba(146, 64, 14, 1)">
        Amber
      </ShimmerButton>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"カラーバリエーション",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ShimmerButton borderRadius="0px">
        Square
      </ShimmerButton>
      <ShimmerButton borderRadius="8px">
        Rounded 8px
      </ShimmerButton>
      <ShimmerButton borderRadius="16px">
        Rounded 16px
      </ShimmerButton>
      <ShimmerButton borderRadius="100px">
        Pill (default)
      </ShimmerButton>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"角丸バリエーション",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ShimmerButton shimmerDuration="1s">
        Fast (1s)
      </ShimmerButton>
      <ShimmerButton shimmerDuration="3s">
        Normal (3s)
      </ShimmerButton>
      <ShimmerButton shimmerDuration="6s">
        Slow (6s)
      </ShimmerButton>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"アニメーション速度",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ShimmerButton shimmerSize="0.02em">
        Subtle
      </ShimmerButton>
      <ShimmerButton shimmerSize="0.05em">
        Normal
      </ShimmerButton>
      <ShimmerButton shimmerSize="0.1em">
        Large
      </ShimmerButton>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"シマーサイズ",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ShimmerButton background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" shimmerColor="#ffffff">
        Purple Gradient
      </ShimmerButton>
      <ShimmerButton background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" shimmerColor="#ffffff">
        Pink Gradient
      </ShimmerButton>
      <ShimmerButton background="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" shimmerColor="#ffffff">
        Blue Gradient
      </ShimmerButton>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"グラデーション背景",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-6 p-8">
      <h2 className="text-2xl font-bold text-white">今すぐ始めましょう</h2>
      <p className="text-gray-300">無料トライアルで体験できます</p>
      <ShimmerButton shimmerColor="#fbbf24" background="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" className="text-lg font-semibold px-8 py-4">
        無料で始める
      </ShimmerButton>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"CTA ボタン例",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => <div className="flex gap-4">
      <ShimmerButton shimmerColor="#818cf8" background="rgba(49, 46, 129, 0.8)">
        Subscribe
      </ShimmerButton>
      <ShimmerButton shimmerColor="#34d399" background="rgba(6, 78, 59, 0.8)">
        Get Started
      </ShimmerButton>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"ダークモード向け",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  render: () => <div className="flex gap-4">
      <ShimmerButton shimmerColor="#3b82f6" background="rgba(255, 255, 255, 1)" className="text-gray-800 border-gray-200">
        Learn More
      </ShimmerButton>
      <ShimmerButton shimmerColor="#ffffff" background="rgba(37, 99, 235, 1)">
        Get Started
      </ShimmerButton>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"ライトモード向け",...c.parameters?.docs?.description}}};const x=["Default","ColorVariations","BorderRadiusVariations","AnimationSpeed","ShimmerSizeVariations","GradientBackgrounds","CTAExample","ForDarkMode","ForLightMode"];export{n as AnimationSpeed,s as BorderRadiusVariations,m as CTAExample,o as ColorVariations,a as Default,d as ForDarkMode,c as ForLightMode,i as GradientBackgrounds,t as ShimmerSizeVariations,x as __namedExportsOrder,g as default};
