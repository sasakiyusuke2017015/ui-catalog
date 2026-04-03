import{j as e}from"./iframe-C6Pnx79y.js";import{N as s}from"./NumberTicker-Bi-q7pZd.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./use-in-view-BOoJYUqd.js";import"./proxy-DDVW2KvN.js";const b={title:"アニメーション/NumberTicker",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"number",description:"表示する数値"},direction:{control:"radio",options:["up","down"],description:"カウント方向"},delay:{control:"number",description:"アニメーション開始までの遅延（秒）"},decimalPlaces:{control:"number",description:"小数点以下の桁数"},prefix:{control:"text",description:"数値の前に付ける文字列"},suffix:{control:"text",description:"数値の後に付ける文字列"}}},a={args:{value:100,direction:"up"}},r={args:{value:100,direction:"down"}},n={args:{value:1234567,direction:"up"},render:t=>e.jsx("span",{className:"text-4xl font-bold",children:e.jsx(s,{...t})})},c={args:{value:99.99,decimalPlaces:2},render:t=>e.jsx("span",{className:"text-3xl font-semibold",children:e.jsx(s,{...t})})},l={args:{value:1500,prefix:"¥"},render:t=>e.jsx("span",{className:"text-3xl font-bold text-green-600",children:e.jsx(s,{...t})})},d={args:{value:87,suffix:"%"},render:t=>e.jsx("span",{className:"text-3xl font-bold text-blue-600",children:e.jsx(s,{...t})})},i={args:{value:500,delay:1},render:t=>e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-3xl font-bold",children:e.jsx(s,{...t})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"1秒後にアニメーション開始"})]})},o={render:()=>e.jsxs("div",{className:"flex gap-12",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-blue-600",children:e.jsx(s,{value:1234})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"ユーザー数"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-green-600",children:e.jsx(s,{value:567,delay:.2})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"プロジェクト"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl font-bold text-purple-600",children:e.jsx(s,{value:89,delay:.4,suffix:"%"})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"達成率"})]})]})},m={render:()=>e.jsxs("div",{className:"rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white",children:[e.jsx("p",{className:"text-lg",children:"月額料金"}),e.jsx("div",{className:"my-4 text-6xl font-bold",children:e.jsx(s,{value:2980,prefix:"¥"})}),e.jsx("p",{className:"text-sm opacity-80",children:"税込み"})]})},x={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"今月の売上"}),e.jsx("div",{className:"mt-2 text-3xl font-bold text-gray-800",children:e.jsx(s,{value:125e4,prefix:"¥"})}),e.jsx("p",{className:"mt-1 text-sm text-green-500",children:"+12.5% 前月比"})]}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"コンバージョン率"}),e.jsx("div",{className:"mt-2 text-3xl font-bold text-gray-800",children:e.jsx(s,{value:3.42,decimalPlaces:2,suffix:"%"})}),e.jsx("p",{className:"mt-1 text-sm text-green-500",children:"+0.8% 前月比"})]}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"アクティブユーザー"}),e.jsx("div",{className:"mt-2 text-3xl font-bold text-gray-800",children:e.jsx(s,{value:8765,delay:.3})}),e.jsx("p",{className:"mt-1 text-sm text-green-500",children:"+234 今週"})]}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"平均セッション時間"}),e.jsx("div",{className:"mt-2 text-3xl font-bold text-gray-800",children:e.jsx(s,{value:4.5,decimalPlaces:1,delay:.5,suffix:"分"})}),e.jsx("p",{className:"mt-1 text-sm text-red-500",children:"-0.3分 前月比"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    direction: 'up'
  }
}`,...a.parameters?.docs?.source},description:{story:"デフォルト（カウントアップ）",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    direction: 'down'
  }
}`,...r.parameters?.docs?.source},description:{story:"カウントダウン",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234567,
    direction: 'up'
  },
  render: args => <span className="text-4xl font-bold">
      <NumberTicker {...args} />
    </span>
}`,...n.parameters?.docs?.source},description:{story:"大きな数値",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 99.99,
    decimalPlaces: 2
  },
  render: args => <span className="text-3xl font-semibold">
      <NumberTicker {...args} />
    </span>
}`,...c.parameters?.docs?.source},description:{story:"小数点付き",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1500,
    prefix: '¥'
  },
  render: args => <span className="text-3xl font-bold text-green-600">
      <NumberTicker {...args} />
    </span>
}`,...l.parameters?.docs?.source},description:{story:"プレフィックス付き（通貨）",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 87,
    suffix: '%'
  },
  render: args => <span className="text-3xl font-bold text-blue-600">
      <NumberTicker {...args} />
    </span>
}`,...d.parameters?.docs?.source},description:{story:"サフィックス付き（パーセント）",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 500,
    delay: 1
  },
  render: args => <div className="text-center">
      <span className="text-3xl font-bold">
        <NumberTicker {...args} />
      </span>
      <p className="mt-2 text-sm text-gray-500">1秒後にアニメーション開始</p>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"遅延付き",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12">
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600">
          <NumberTicker value={1234} />
        </div>
        <p className="mt-2 text-sm text-gray-500">ユーザー数</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-green-600">
          <NumberTicker value={567} delay={0.2} />
        </div>
        <p className="mt-2 text-sm text-gray-500">プロジェクト</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-600">
          <NumberTicker value={89} delay={0.4} suffix="%" />
        </div>
        <p className="mt-2 text-sm text-gray-500">達成率</p>
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"統計表示例",...o.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white">
      <p className="text-lg">月額料金</p>
      <div className="my-4 text-6xl font-bold">
        <NumberTicker value={2980} prefix="¥" />
      </div>
      <p className="text-sm opacity-80">税込み</p>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"価格表示例",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="text-sm text-gray-500">今月の売上</p>
        <div className="mt-2 text-3xl font-bold text-gray-800">
          <NumberTicker value={1250000} prefix="¥" />
        </div>
        <p className="mt-1 text-sm text-green-500">+12.5% 前月比</p>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="text-sm text-gray-500">コンバージョン率</p>
        <div className="mt-2 text-3xl font-bold text-gray-800">
          <NumberTicker value={3.42} decimalPlaces={2} suffix="%" />
        </div>
        <p className="mt-1 text-sm text-green-500">+0.8% 前月比</p>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="text-sm text-gray-500">アクティブユーザー</p>
        <div className="mt-2 text-3xl font-bold text-gray-800">
          <NumberTicker value={8765} delay={0.3} />
        </div>
        <p className="mt-1 text-sm text-green-500">+234 今週</p>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="text-sm text-gray-500">平均セッション時間</p>
        <div className="mt-2 text-3xl font-bold text-gray-800">
          <NumberTicker value={4.5} decimalPlaces={1} delay={0.5} suffix="分" />
        </div>
        <p className="mt-1 text-sm text-red-500">-0.3分 前月比</p>
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"ダッシュボードカード例",...x.parameters?.docs?.description}}};const y=["Default","CountDown","LargeNumber","WithDecimals","WithPrefix","WithSuffix","WithDelay","Statistics","PriceDisplay","DashboardCards"];export{r as CountDown,x as DashboardCards,a as Default,n as LargeNumber,m as PriceDisplay,o as Statistics,c as WithDecimals,i as WithDelay,l as WithPrefix,d as WithSuffix,y as __namedExportsOrder,b as default};
