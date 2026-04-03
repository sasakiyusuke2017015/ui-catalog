import{j as e}from"./iframe-BMSfDgIj.js";import{B as r}from"./BlurFade-Cn_ClxTw.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./use-in-view-9pVCs3Is.js";import"./proxy-C00ARwc7.js";const v={title:"アニメーション/BlurFade",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{duration:{control:{type:"number",min:.1,max:2,step:.1},description:"アニメーション時間（秒）"},delay:{control:{type:"number",min:0,max:2,step:.1},description:"遅延時間（秒）"},yOffset:{control:{type:"number",min:0,max:50,step:2},description:"Y軸オフセット（px）"},blur:{control:"text",description:'ブラーの強さ（例: "6px"）'},inView:{control:"boolean",description:"ビューポート内に入った時にアニメーション開始"}}},s={args:{children:e.jsxs("div",{className:"rounded-lg bg-blue-100 p-8 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold text-blue-800",children:"BlurFade"}),e.jsx("p",{className:"mt-2 text-blue-600",children:"ブラーしながらフェードイン"})]})}},d={args:{children:e.jsxs("div",{className:"max-w-md text-center",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"ようこそ"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"このコンポーネントはブラーエフェクトと共にフェードインします。 視覚的に魅力的な登場アニメーションを実現します。"})]}),duration:.6}},l={args:{children:e.jsxs("div",{className:"w-80 rounded-xl bg-white p-6 shadow-xl",children:[e.jsx("div",{className:"mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"}),e.jsx("h3",{className:"text-xl font-semibold",children:"機能カード"}),e.jsx("p",{className:"mt-2 text-gray-500",children:"BlurFadeを使用して、カードが美しく表示されます。"})]})}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{delay:0,children:e.jsx("div",{className:"rounded-lg bg-red-100 p-4",children:"Item 1 (delay: 0)"})}),e.jsx(r,{delay:.2,children:e.jsx("div",{className:"rounded-lg bg-orange-100 p-4",children:"Item 2 (delay: 0.2s)"})}),e.jsx(r,{delay:.4,children:e.jsx("div",{className:"rounded-lg bg-yellow-100 p-4",children:"Item 3 (delay: 0.4s)"})}),e.jsx(r,{delay:.6,children:e.jsx("div",{className:"rounded-lg bg-green-100 p-4",children:"Item 4 (delay: 0.6s)"})}),e.jsx(r,{delay:.8,children:e.jsx("div",{className:"rounded-lg bg-blue-100 p-4",children:"Item 5 (delay: 0.8s)"})})]})},t={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[...Array(9)].map((p,a)=>e.jsx(r,{delay:a*.1,children:e.jsx("div",{className:"flex h-24 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg",children:a+1})},a))})},i={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx("div",{className:"text-center",children:e.jsx(r,{blur:"2px",delay:0,children:e.jsx("div",{className:"rounded-lg bg-blue-100 p-6",children:"Subtle (2px)"})})}),e.jsx("div",{className:"text-center",children:e.jsx(r,{blur:"6px",delay:.2,children:e.jsx("div",{className:"rounded-lg bg-blue-100 p-6",children:"Normal (6px)"})})}),e.jsx("div",{className:"text-center",children:e.jsx(r,{blur:"12px",delay:.4,children:e.jsx("div",{className:"rounded-lg bg-blue-100 p-6",children:"Strong (12px)"})})})]})},c={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(r,{yOffset:0,delay:0,children:e.jsx("div",{className:"rounded-lg bg-green-100 p-6",children:"No offset (0)"})}),e.jsx(r,{yOffset:10,delay:.2,children:e.jsx("div",{className:"rounded-lg bg-green-100 p-6",children:"Small (10px)"})}),e.jsx(r,{yOffset:20,delay:.4,children:e.jsx("div",{className:"rounded-lg bg-green-100 p-6",children:"Large (20px)"})})]})},o={render:()=>e.jsxs("div",{className:"space-y-6 text-center",children:[e.jsx(r,{delay:0,children:e.jsx("span",{className:"rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700",children:"New Release"})}),e.jsx(r,{delay:.1,children:e.jsxs("h1",{className:"text-5xl font-bold text-gray-900",children:["Build faster with",e.jsx("br",{}),e.jsx("span",{className:"text-blue-600",children:"Modern UI"})]})}),e.jsx(r,{delay:.2,children:e.jsx("p",{className:"mx-auto max-w-lg text-lg text-gray-600",children:"美しいアニメーションとモダンなデザインで、 ユーザー体験を向上させましょう。"})}),e.jsx(r,{delay:.3,children:e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx("button",{className:"rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700",children:"始める"}),e.jsx("button",{className:"rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50",children:"詳細を見る"})]})})]})},m={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[...Array(6)].map((p,a)=>e.jsx(r,{delay:a*.15,children:e.jsx("div",{className:"aspect-square rounded-xl bg-gradient-to-br shadow-lg",style:{backgroundImage:`linear-gradient(135deg, hsl(${a*60}, 70%, 60%), hsl(${a*60+30}, 70%, 50%))`}})},a))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="rounded-lg bg-blue-100 p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800">BlurFade</h2>
        <p className="mt-2 text-blue-600">ブラーしながらフェードイン</p>
      </div>
  }
}`,...s.parameters?.docs?.source},description:{story:"デフォルト",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">ようこそ</h1>
        <p className="mt-4 text-gray-600">
          このコンポーネントはブラーエフェクトと共にフェードインします。
          視覚的に魅力的な登場アニメーションを実現します。
        </p>
      </div>,
    duration: 0.6
  }
}`,...d.parameters?.docs?.source},description:{story:"テキストコンテンツ",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="w-80 rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <h3 className="text-xl font-semibold">機能カード</h3>
        <p className="mt-2 text-gray-500">
          BlurFadeを使用して、カードが美しく表示されます。
        </p>
      </div>
  }
}`,...l.parameters?.docs?.source},description:{story:"カード",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <BlurFade delay={0}>
        <div className="rounded-lg bg-red-100 p-4">Item 1 (delay: 0)</div>
      </BlurFade>
      <BlurFade delay={0.2}>
        <div className="rounded-lg bg-orange-100 p-4">Item 2 (delay: 0.2s)</div>
      </BlurFade>
      <BlurFade delay={0.4}>
        <div className="rounded-lg bg-yellow-100 p-4">Item 3 (delay: 0.4s)</div>
      </BlurFade>
      <BlurFade delay={0.6}>
        <div className="rounded-lg bg-green-100 p-4">Item 4 (delay: 0.6s)</div>
      </BlurFade>
      <BlurFade delay={0.8}>
        <div className="rounded-lg bg-blue-100 p-4">Item 5 (delay: 0.8s)</div>
      </BlurFade>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"遅延バリエーション",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, i) => <BlurFade key={i} delay={i * 0.1}>
          <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
            {i + 1}
          </div>
        </BlurFade>)}
    </div>
}`,...t.parameters?.docs?.source},description:{story:"グリッドレイアウト",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <div className="text-center">
        <BlurFade blur="2px" delay={0}>
          <div className="rounded-lg bg-blue-100 p-6">Subtle (2px)</div>
        </BlurFade>
      </div>
      <div className="text-center">
        <BlurFade blur="6px" delay={0.2}>
          <div className="rounded-lg bg-blue-100 p-6">Normal (6px)</div>
        </BlurFade>
      </div>
      <div className="text-center">
        <BlurFade blur="12px" delay={0.4}>
          <div className="rounded-lg bg-blue-100 p-6">Strong (12px)</div>
        </BlurFade>
      </div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"ブラー強度バリエーション",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <BlurFade yOffset={0} delay={0}>
        <div className="rounded-lg bg-green-100 p-6">No offset (0)</div>
      </BlurFade>
      <BlurFade yOffset={10} delay={0.2}>
        <div className="rounded-lg bg-green-100 p-6">Small (10px)</div>
      </BlurFade>
      <BlurFade yOffset={20} delay={0.4}>
        <div className="rounded-lg bg-green-100 p-6">Large (20px)</div>
      </BlurFade>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Y オフセットバリエーション",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 text-center">
      <BlurFade delay={0}>
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          New Release
        </span>
      </BlurFade>
      <BlurFade delay={0.1}>
        <h1 className="text-5xl font-bold text-gray-900">
          Build faster with
          <br />
          <span className="text-blue-600">Modern UI</span>
        </h1>
      </BlurFade>
      <BlurFade delay={0.2}>
        <p className="mx-auto max-w-lg text-lg text-gray-600">
          美しいアニメーションとモダンなデザインで、
          ユーザー体験を向上させましょう。
        </p>
      </BlurFade>
      <BlurFade delay={0.3}>
        <div className="flex justify-center gap-4">
          <button className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
            始める
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
            詳細を見る
          </button>
        </div>
      </BlurFade>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"ヒーローセクション例",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => <BlurFade key={i} delay={i * 0.15}>
          <div className="aspect-square rounded-xl bg-gradient-to-br shadow-lg" style={{
        backgroundImage: \`linear-gradient(135deg, hsl(\${i * 60}, 70%, 60%), hsl(\${i * 60 + 30}, 70%, 50%))\`
      }} />
        </BlurFade>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"画像ギャラリー例",...m.parameters?.docs?.description}}};const f=["Default","TextContent","Card","StaggeredItems","GridLayout","BlurIntensity","YOffsetVariations","HeroSection","ImageGallery"];export{i as BlurIntensity,l as Card,s as Default,t as GridLayout,o as HeroSection,m as ImageGallery,n as StaggeredItems,d as TextContent,c as YOffsetVariations,f as __namedExportsOrder,v as default};
