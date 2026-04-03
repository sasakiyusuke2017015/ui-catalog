import{j as e}from"./iframe-C6Pnx79y.js";import{B as r}from"./BackgroundTexture-0KwCEV8t.js";import"./preload-helper-PPVm8Dsz.js";import"./design-Dp13pu7_.js";const j={title:"背景効果/BackgroundTexture",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{theme:{control:"select",options:["wood","flooring","fabric","concrete","leather","marble","cream","lavender","sky"],description:"背景テーマ"}},decorators:[s=>e.jsx("div",{style:{width:"100vw",height:"400px",position:"relative"},children:e.jsx(s,{})})]},a={args:{theme:"wood"}},t={args:{theme:"flooring"}},o={args:{theme:"fabric"}},c={args:{theme:"concrete"}},d={args:{theme:"leather"}},i={args:{theme:"marble"}},l={args:{theme:"cream"}},m={args:{theme:"lavender"}},n={args:{theme:"sky"}},p={render:()=>{const s=["wood","flooring","fabric","concrete","leather","marble","cream","lavender","sky"],b={wood:"木目",flooring:"フロア",fabric:"布",concrete:"タイル",leather:"紙",marble:"ミント",cream:"クリーム",lavender:"ラベンダー",sky:"スカイ"};return e.jsx("div",{className:"grid grid-cols-3 gap-0",style:{height:"600px"},children:s.map(u=>e.jsxs("div",{className:"relative h-[200px]",children:[e.jsx(r,{theme:u}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"rounded-lg bg-white/80 px-4 py-2 text-sm font-medium shadow",children:b[u]})})]},u))})},decorators:[s=>e.jsx(s,{})]},h={args:{theme:"wood"},render:s=>e.jsxs("div",{className:"relative h-[500px] w-full",children:[e.jsx(r,{...s}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-8",children:e.jsxs("div",{className:"max-w-md rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"背景テクスチャ"}),e.jsx("p",{className:"mt-4 text-gray-600",children:"アプリケーション全体に統一感のある背景テクスチャを適用できます。 テーマを切り替えることで、異なる雰囲気を演出できます。"})]})})]}),decorators:[s=>e.jsx(s,{})]},x={args:{theme:"fabric"},render:s=>e.jsxs("div",{className:"relative min-h-[600px] w-full",children:[e.jsx(r,{...s}),e.jsxs("div",{className:"relative z-10 p-8",children:[e.jsx("h1",{className:"mb-6 text-3xl font-bold text-gray-800",children:"ダッシュボード"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"カード 1"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"コンテンツ"})]}),e.jsxs("div",{className:"rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"カード 2"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"コンテンツ"})]}),e.jsxs("div",{className:"rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"カード 3"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"コンテンツ"})]})]})]})]}),decorators:[s=>e.jsx(s,{})]},g={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-0",style:{height:"400px"},children:[e.jsxs("div",{className:"relative border-r",children:[e.jsx(r,{theme:"wood"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[e.jsx("span",{className:"mb-4 rounded bg-white/80 px-3 py-1 text-sm font-medium",children:"テクスチャ（木目）"}),e.jsxs("div",{className:"w-64 rounded-lg bg-white/90 p-4 shadow-lg",children:[e.jsx("h4",{className:"font-semibold",children:"テクスチャ背景"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"質感があり、温かみのある印象を与えます"})]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(r,{theme:"cream"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[e.jsx("span",{className:"mb-4 rounded bg-white/80 px-3 py-1 text-sm font-medium",children:"単色（クリーム）"}),e.jsxs("div",{className:"w-64 rounded-lg bg-white/90 p-4 shadow-lg",children:[e.jsx("h4",{className:"font-semibold",children:"単色背景"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"シンプルでクリーンな印象を与えます"})]})]})]})]}),decorators:[s=>e.jsx(s,{})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'wood'
  }
}`,...a.parameters?.docs?.source},description:{story:"木目テクスチャ",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'flooring'
  }
}`,...t.parameters?.docs?.source},description:{story:"フローリング",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'fabric'
  }
}`,...o.parameters?.docs?.source},description:{story:"布テクスチャ",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'concrete'
  }
}`,...c.parameters?.docs?.source},description:{story:"タイルパターン",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'leather'
  }
}`,...d.parameters?.docs?.source},description:{story:"紙テクスチャ",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'marble'
  }
}`,...i.parameters?.docs?.source},description:{story:"ミント（単色）",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'cream'
  }
}`,...l.parameters?.docs?.source},description:{story:"クリーム（単色）",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'lavender'
  }
}`,...m.parameters?.docs?.source},description:{story:"ラベンダー（単色）",...m.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'sky'
  }
}`,...n.parameters?.docs?.source},description:{story:"スカイ（単色）",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const themes: BackgroundTheme[] = ['wood', 'flooring', 'fabric', 'concrete', 'leather', 'marble', 'cream', 'lavender', 'sky'];
    const labels: Record<BackgroundTheme, string> = {
      wood: '木目',
      flooring: 'フロア',
      fabric: '布',
      concrete: 'タイル',
      leather: '紙',
      marble: 'ミント',
      cream: 'クリーム',
      lavender: 'ラベンダー',
      sky: 'スカイ'
    };
    return <div className="grid grid-cols-3 gap-0" style={{
      height: '600px'
    }}>
        {themes.map(theme => <div key={theme} className="relative h-[200px]">
            <BackgroundTexture theme={theme} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium shadow">
                {labels[theme]}
              </span>
            </div>
          </div>)}
      </div>;
  },
  decorators: [Story => <Story />]
}`,...p.parameters?.docs?.source},description:{story:"全テーマ一覧",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'wood'
  },
  render: args => <div className="relative h-[500px] w-full">
      <BackgroundTexture {...args} />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="max-w-md rounded-xl bg-white/90 p-8 text-center shadow-xl backdrop-blur">
          <h2 className="text-2xl font-bold text-gray-800">背景テクスチャ</h2>
          <p className="mt-4 text-gray-600">
            アプリケーション全体に統一感のある背景テクスチャを適用できます。
            テーマを切り替えることで、異なる雰囲気を演出できます。
          </p>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...h.parameters?.docs?.source},description:{story:"コンテンツと組み合わせ",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'fabric'
  },
  render: args => <div className="relative min-h-[600px] w-full">
      <BackgroundTexture {...args} />
      <div className="relative z-10 p-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">ダッシュボード</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur">
            <h3 className="text-lg font-semibold text-gray-800">カード 1</h3>
            <p className="mt-2 text-gray-600">コンテンツ</p>
          </div>
          <div className="rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur">
            <h3 className="text-lg font-semibold text-gray-800">カード 2</h3>
            <p className="mt-2 text-gray-600">コンテンツ</p>
          </div>
          <div className="rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur">
            <h3 className="text-lg font-semibold text-gray-800">カード 3</h3>
            <p className="mt-2 text-gray-600">コンテンツ</p>
          </div>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...x.parameters?.docs?.source},description:{story:"ダッシュボード風レイアウト",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-0" style={{
    height: '400px'
  }}>
      <div className="relative border-r">
        <BackgroundTexture theme="wood" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="mb-4 rounded bg-white/80 px-3 py-1 text-sm font-medium">
            テクスチャ（木目）
          </span>
          <div className="w-64 rounded-lg bg-white/90 p-4 shadow-lg">
            <h4 className="font-semibold">テクスチャ背景</h4>
            <p className="mt-2 text-sm text-gray-600">
              質感があり、温かみのある印象を与えます
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <BackgroundTexture theme="cream" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="mb-4 rounded bg-white/80 px-3 py-1 text-sm font-medium">
            単色（クリーム）
          </span>
          <div className="w-64 rounded-lg bg-white/90 p-4 shadow-lg">
            <h4 className="font-semibold">単色背景</h4>
            <p className="mt-2 text-sm text-gray-600">
              シンプルでクリーンな印象を与えます
            </p>
          </div>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...g.parameters?.docs?.source},description:{story:"テクスチャ vs 単色の比較",...g.parameters?.docs?.description}}};const w=["Wood","Flooring","Fabric","Concrete","Leather","Marble","Cream","Lavender","Sky","AllThemes","WithContent","DashboardLayout","TextureVsSolid"];export{p as AllThemes,c as Concrete,l as Cream,x as DashboardLayout,o as Fabric,t as Flooring,m as Lavender,d as Leather,i as Marble,n as Sky,g as TextureVsSolid,h as WithContent,a as Wood,w as __namedExportsOrder,j as default};
