import{j as e}from"./iframe-87Bzd3j4.js";import{L as h}from"./icons-Dmrlch0W.js";import{L as s}from"./LoadingZone-CDWQy9VN.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C2T7xtHb.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const N=["linear","ease","ease-in","ease-out","ease-in-out","cubic-bezier(0.34, 1.56, 0.64, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],S={title:"フィードバック/ローディング/LoadingZone",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["table","card","list","simple","overlay","inline"]},height:{control:"text"},message:{control:"text"},iconName:{control:{type:"select"},options:h},size:{control:{type:"range",min:16,max:64,step:4}},color:{control:"text"},duration:{control:{type:"range",min:.1,max:5,step:.1}},ease:{control:{type:"select"},options:N},repeat:{control:{type:"range",min:1,max:10,step:1}},fill:{control:"text"}}},r={args:{variant:"simple",message:"データを読み込み中...",iconName:"spinner",size:32,color:"text-indigo-600"}},n={args:{},render:()=>{const i=["table","card","list","simple","overlay","inline"];return e.jsx("div",{className:"space-y-8",children:i.map(a=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h3",{className:"text-fluid-lg font-semibold",children:["Type: ",a]}),e.jsx("div",{style:{height:a==="overlay"?"300px":"auto",position:"relative"},children:e.jsx(s,{variant:a,height:a==="inline"?"auto":"200px",message:`${a}タイプのローディング表示`,iconName:"spinner"})})]},a))})}},o={args:{},render:()=>{const i=["spinner","loading-dots-fade","loading-wave","loading-clock","loading-wifi","loading-orbit"];return e.jsx("div",{className:"grid grid-cols-2 gap-6",children:i.map(a=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-md font-medium",children:a}),e.jsx(s,{variant:"card",height:"150px",message:"読み込み中...",iconName:a,size:32})]},a))})}},t={args:{variant:"table",height:"400px",message:"テーブルデータを読み込み中...",iconName:"loading-wave",size:48}},l={args:{variant:"card",height:"200px",message:"カードデータを読み込み中...",iconName:"loading-pulse-ring",size:40,color:"text-blue-500"}},d={args:{variant:"list",height:"300px",message:"リストデータを読み込み中...",iconName:"loading-dots-fade",size:32,color:"text-gray-400"}},c={args:{variant:"simple",height:"150px",message:"シンプルローディング",iconName:"loading-bounce",size:32,color:"text-green-500"}},m={args:{variant:"inline",message:"インラインローディング",iconName:"loading-dots-fade",size:16,color:"text-gray-600"}},g={args:{},render:()=>e.jsxs("div",{style:{height:"400px",position:"relative",background:"#f3f4f6"},children:[e.jsxs("div",{className:"p-8",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-bold",children:"背景コンテンツ"}),e.jsx("p",{children:"このコンテンツの上にオーバーレイローディングが表示されます。"})]}),e.jsx(s,{variant:"overlay",message:"処理中です...",iconName:"loading-orbit",size:48,color:"text-indigo-600"})]})},p={args:{},render:()=>{const i=[16,24,32,48,64];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"サイズバリエーション"}),e.jsx("div",{className:"grid grid-cols-5 gap-4",children:i.map(a=>e.jsx("div",{className:"text-center",children:e.jsx(s,{variant:"simple",height:"120px",message:`${a}px`,iconName:"loading-clock",size:a})},a))})]})}},x={args:{},render:()=>{const i=[{name:"Indigo",class:"text-indigo-600"},{name:"Blue",class:"text-blue-600"},{name:"Green",class:"text-green-600"},{name:"Red",class:"text-red-600"},{name:"Purple",class:"text-purple-600"},{name:"Orange",class:"text-orange-600"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"カラーバリエーション"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:i.map(a=>e.jsx("div",{className:"text-center",children:e.jsx(s,{variant:"simple",height:"120px",message:a.name,iconName:"loading-wifi",size:32,color:a.class})},a.name))})]})}},u={args:{},render:()=>{const i=[{duration:.5,label:"高速"},{duration:1,label:"標準"},{duration:2,label:"低速"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"速度バリエーション"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:i.map(a=>e.jsx("div",{className:"text-center",children:e.jsx(s,{variant:"simple",height:"120px",message:`${a.label} (${a.duration}s)`,iconName:"loading-star",size:32,duration:a.duration})},a.duration))})]})}},v={args:{},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold",children:"使用例: テーブルローディング"}),e.jsx(s,{variant:"table",height:"300px",message:"従業員データを読み込み中...",iconName:"loading-wave",size:48})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold",children:"使用例: フォーム送信中"}),e.jsxs("div",{className:"relative rounded-lg border bg-white p-6",children:[e.jsxs("div",{className:"space-y-4 opacity-50",children:[e.jsx("input",{className:"w-full rounded border p-2",placeholder:"名前"}),e.jsx("input",{className:"w-full rounded border p-2",placeholder:"メールアドレス"}),e.jsx("button",{className:"rounded bg-blue-500 px-4 py-2 text-white",children:"送信"})]}),e.jsx(s,{variant:"overlay",message:"送信中...",iconName:"loading-orbit",size:40})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold",children:"使用例: インライン表示"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between rounded border p-4",children:[e.jsx("span",{children:"ユーザーデータ"}),e.jsx(s,{variant:"inline",message:"更新中...",iconName:"loading-dots-fade",size:16})]}),e.jsxs("div",{className:"flex items-center justify-between rounded border p-4",children:[e.jsx("span",{children:"ファイルアップロード"}),e.jsx(s,{variant:"inline",message:"アップロード中...",iconName:"loading-progress",size:16})]})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    message: 'データを読み込み中...',
    iconName: 'spinner',
    size: 32,
    color: 'text-indigo-600'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const types = ['table', 'card', 'list', 'simple', 'overlay', 'inline'] as const;
    return <div className="space-y-8">
        {types.map(variant => <div key={variant} className="space-y-2">
            <h3 className="text-fluid-lg font-semibold">Type: {variant}</h3>
            <div style={{
          height: variant === 'overlay' ? '300px' : 'auto',
          position: 'relative'
        }}>
              <LoadingZone variant={variant} height={variant === 'inline' ? 'auto' : '200px'} message={\`\${variant}タイプのローディング表示\`} iconName={'spinner'} />
            </div>
          </div>)}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const iconNames = ['spinner', 'loading-dots-fade', 'loading-wave', 'loading-clock', 'loading-wifi', 'loading-orbit'];
    return <div className="grid grid-cols-2 gap-6">
        {iconNames.map(iconName => <div key={iconName} className="space-y-2">
            <h4 className="text-md font-medium">{iconName}</h4>
            <LoadingZone variant="card" height="150px" message="読み込み中..." iconName={iconName} size={32} />
          </div>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'table',
    height: '400px',
    message: 'テーブルデータを読み込み中...',
    iconName: 'loading-wave',
    size: 48
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    height: '200px',
    message: 'カードデータを読み込み中...',
    iconName: 'loading-pulse-ring',
    size: 40,
    color: 'text-blue-500'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'list',
    height: '300px',
    message: 'リストデータを読み込み中...',
    iconName: 'loading-dots-fade',
    size: 32,
    color: 'text-gray-400'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    height: '150px',
    message: 'シンプルローディング',
    iconName: 'loading-bounce',
    size: 32,
    color: 'text-green-500'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    message: 'インラインローディング',
    iconName: 'loading-dots-fade',
    size: 16,
    color: 'text-gray-600'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    height: '400px',
    position: 'relative',
    background: '#f3f4f6'
  }}>
      <div className="p-8">
        <h2 className="mb-4 text-fluid-xl font-bold">背景コンテンツ</h2>
        <p>このコンテンツの上にオーバーレイローディングが表示されます。</p>
      </div>
      <LoadingZone variant="overlay" message="処理中です..." iconName={'loading-orbit'} size={48} color="text-indigo-600" />
    </div>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const sizes = [16, 24, 32, 48, 64];
    return <div className="space-y-6">
        <h3 className="text-fluid-lg font-semibold">サイズバリエーション</h3>
        <div className="grid grid-cols-5 gap-4">
          {sizes.map(size => <div key={size} className="text-center">
              <LoadingZone variant="simple" height="120px" message={\`\${size}px\`} iconName={'loading-clock'} size={size} />
            </div>)}
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const colors = [{
      name: 'Indigo',
      class: 'text-indigo-600'
    }, {
      name: 'Blue',
      class: 'text-blue-600'
    }, {
      name: 'Green',
      class: 'text-green-600'
    }, {
      name: 'Red',
      class: 'text-red-600'
    }, {
      name: 'Purple',
      class: 'text-purple-600'
    }, {
      name: 'Orange',
      class: 'text-orange-600'
    }];
    return <div className="space-y-6">
        <h3 className="text-fluid-lg font-semibold">カラーバリエーション</h3>
        <div className="grid grid-cols-3 gap-4">
          {colors.map(color => <div key={color.name} className="text-center">
              <LoadingZone variant="simple" height="120px" message={color.name} iconName={'loading-wifi'} size={32} color={color.class} />
            </div>)}
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const speeds = [{
      duration: 0.5,
      label: '高速'
    }, {
      duration: 1.0,
      label: '標準'
    }, {
      duration: 2.0,
      label: '低速'
    }];
    return <div className="space-y-6">
        <h3 className="text-fluid-lg font-semibold">速度バリエーション</h3>
        <div className="grid grid-cols-3 gap-4">
          {speeds.map(speed => <div key={speed.duration} className="text-center">
              <LoadingZone variant="simple" height="120px" message={\`\${speed.label} (\${speed.duration}s)\`} iconName={'loading-star'} size={32} duration={speed.duration} />
            </div>)}
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-fluid-lg font-semibold">
          使用例: テーブルローディング
        </h3>
        <LoadingZone variant="table" height="300px" message="従業員データを読み込み中..." iconName={'loading-wave'} size={48} />
      </div>

      <div>
        <h3 className="mb-4 text-fluid-lg font-semibold">使用例: フォーム送信中</h3>
        <div className="relative rounded-lg border bg-white p-6">
          <div className="space-y-4 opacity-50">
            <input className="w-full rounded border p-2" placeholder="名前" />
            <input className="w-full rounded border p-2" placeholder="メールアドレス" />
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              送信
            </button>
          </div>
          <LoadingZone variant="overlay" message="送信中..." iconName={'loading-orbit'} size={40} />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-fluid-lg font-semibold">使用例: インライン表示</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded border p-4">
            <span>ユーザーデータ</span>
            <LoadingZone variant="inline" message="更新中..." iconName={'loading-dots-fade'} size={16} />
          </div>
          <div className="flex items-center justify-between rounded border p-4">
            <span>ファイルアップロード</span>
            <LoadingZone variant="inline" message="アップロード中..." iconName={'loading-progress'} size={16} />
          </div>
        </div>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};const Z=["Default","AllTypes","DifferentIcons","TableLoading","CardLoading","ListLoading","SimpleLoading","InlineLoading","OverlayLoading","CustomSizes","CustomColors","SpeedVariations","UsageExamples"];export{n as AllTypes,l as CardLoading,x as CustomColors,p as CustomSizes,r as Default,o as DifferentIcons,m as InlineLoading,d as ListLoading,g as OverlayLoading,c as SimpleLoading,u as SpeedVariations,t as TableLoading,v as UsageExamples,Z as __namedExportsOrder,S as default};
