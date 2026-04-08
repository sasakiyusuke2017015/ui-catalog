import{j as e}from"./iframe-WnPGq7kF.js";import{S as r}from"./Stack-qgUbHqx9.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const B={title:"レイアウト/Stack",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:"radio",options:["row","column"],description:"スタックの方向"},gap:{control:"text",description:"要素間の間隔（数値はpx、文字列はそのまま）"},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"align-items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"justify-content"},wrap:{control:"boolean",description:"flex-wrap を有効にする"}}},o=({children:s,className:x=""})=>e.jsx("div",{className:`bg-blue-100 border border-blue-300 px-4 py-2 ${x}`,children:s}),t={args:{direction:"column",gap:8},render:s=>e.jsxs(r,{...s,children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})},n={args:{direction:"row",gap:16},render:s=>e.jsxs(r,{...s,children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})},a={render:()=>e.jsxs(r,{direction:"column",gap:24,children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"gap=4"}),e.jsxs(r,{direction:"row",gap:4,children:[e.jsx(o,{children:"A"}),e.jsx(o,{children:"B"}),e.jsx(o,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"gap=16"}),e.jsxs(r,{direction:"row",gap:16,children:[e.jsx(o,{children:"A"}),e.jsx(o,{children:"B"}),e.jsx(o,{children:"C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"gap=32"}),e.jsxs(r,{direction:"row",gap:32,children:[e.jsx(o,{children:"A"}),e.jsx(o,{children:"B"}),e.jsx(o,{children:"C"})]})]})]})},c={render:()=>e.jsx(r,{direction:"column",gap:24,children:["start","center","end","stretch","baseline"].map(s=>e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 text-sm font-semibold",children:['align="',s,'"']}),e.jsxs(r,{direction:"row",gap:8,align:s,className:"bg-gray-50 p-4 min-h-[80px] border",children:[e.jsx(o,{className:"h-8",children:"Short"}),e.jsx(o,{className:"h-16",children:"Tall"}),e.jsx(o,{className:"h-10",children:"Medium"})]})]},s))})},i={render:()=>e.jsx(r,{direction:"column",gap:24,children:["start","center","end","between","around","evenly"].map(s=>e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 text-sm font-semibold",children:['justify="',s,'"']}),e.jsxs(r,{direction:"row",gap:8,justify:s,className:"bg-gray-50 p-4 w-96 border",children:[e.jsx(o,{children:"A"}),e.jsx(o,{children:"B"}),e.jsx(o,{children:"C"})]})]},s))})},d={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(r,{direction:"row",gap:8,wrap:!0,children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"}),e.jsx(o,{children:"Item 4"}),e.jsx(o,{children:"Item 5"}),e.jsx(o,{children:"Item 6"}),e.jsx(o,{children:"Item 7"}),e.jsx(o,{children:"Item 8"})]})})},m={render:()=>e.jsxs(r,{direction:"column",gap:16,className:"p-4 bg-gray-100 rounded-lg",children:[e.jsx("h3",{className:"font-semibold",children:"メインコンテナ"}),e.jsxs(r,{direction:"row",gap:16,children:[e.jsxs(r,{direction:"column",gap:8,className:"bg-white p-4 rounded",children:[e.jsx(o,{children:"Left 1"}),e.jsx(o,{children:"Left 2"})]}),e.jsxs(r,{direction:"column",gap:8,className:"bg-white p-4 rounded flex-1",children:[e.jsx(o,{children:"Center 1"}),e.jsx(o,{children:"Center 2"}),e.jsx(o,{children:"Center 3"})]}),e.jsxs(r,{direction:"column",gap:8,className:"bg-white p-4 rounded",children:[e.jsx(o,{children:"Right 1"}),e.jsx(o,{children:"Right 2"})]})]})]})},l={render:()=>e.jsxs(r,{direction:"column",gap:16,className:"w-80 p-6 bg-white rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"ログイン"}),e.jsxs(r,{direction:"column",gap:4,children:[e.jsx("label",{className:"text-sm font-medium",children:"メールアドレス"}),e.jsx("input",{type:"email",className:"border rounded px-3 py-2",placeholder:"email@example.com"})]}),e.jsxs(r,{direction:"column",gap:4,children:[e.jsx("label",{className:"text-sm font-medium",children:"パスワード"}),e.jsx("input",{type:"password",className:"border rounded px-3 py-2",placeholder:"********"})]}),e.jsxs(r,{direction:"row",gap:8,justify:"end",children:[e.jsx("button",{className:"px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",children:"キャンセル"}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"ログイン"})]})]})},p={render:()=>e.jsxs(r,{direction:"row",align:"center",justify:"between",className:"w-full max-w-2xl bg-white p-4 shadow rounded-lg",children:[e.jsxs(r,{direction:"row",align:"center",gap:8,children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-full"}),e.jsx("span",{className:"font-semibold",children:"ロゴ"})]}),e.jsxs(r,{direction:"row",gap:16,children:[e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"ホーム"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"機能"}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900",children:"料金"})]}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"お問い合わせ"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 8
  },
  render: args => <Stack {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
}`,...t.parameters?.docs?.source},description:{story:"デフォルト（縦方向）",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 16
  },
  render: args => <Stack {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
}`,...n.parameters?.docs?.source},description:{story:"横方向（Row）",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={24}>
      <div>
        <p className="mb-2 text-sm font-semibold">gap=4</p>
        <Stack direction="row" gap={4}>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold">gap=16</p>
        <Stack direction="row" gap={16}>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold">gap=32</p>
        <Stack direction="row" gap={32}>
          <DemoBox>A</DemoBox>
          <DemoBox>B</DemoBox>
          <DemoBox>C</DemoBox>
        </Stack>
      </div>
    </Stack>
}`,...a.parameters?.docs?.source},description:{story:"ギャップの比較",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={24}>
      {(['start', 'center', 'end', 'stretch', 'baseline'] as const).map(align => <div key={align}>
          <p className="mb-2 text-sm font-semibold">align="{align}"</p>
          <Stack direction="row" gap={8} align={align} className="bg-gray-50 p-4 min-h-[80px] border">
            <DemoBox className="h-8">Short</DemoBox>
            <DemoBox className="h-16">Tall</DemoBox>
            <DemoBox className="h-10">Medium</DemoBox>
          </Stack>
        </div>)}
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"align-items のバリエーション",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={24}>
      {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map(justify => <div key={justify}>
          <p className="mb-2 text-sm font-semibold">justify="{justify}"</p>
          <Stack direction="row" gap={8} justify={justify} className="bg-gray-50 p-4 w-96 border">
            <DemoBox>A</DemoBox>
            <DemoBox>B</DemoBox>
            <DemoBox>C</DemoBox>
          </Stack>
        </div>)}
    </Stack>
}`,...i.parameters?.docs?.source},description:{story:"justify-content のバリエーション",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Stack direction="row" gap={8} wrap>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
        <DemoBox>Item 6</DemoBox>
        <DemoBox>Item 7</DemoBox>
        <DemoBox>Item 8</DemoBox>
      </Stack>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"wrap有効",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={16} className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-semibold">メインコンテナ</h3>
      <Stack direction="row" gap={16}>
        <Stack direction="column" gap={8} className="bg-white p-4 rounded">
          <DemoBox>Left 1</DemoBox>
          <DemoBox>Left 2</DemoBox>
        </Stack>
        <Stack direction="column" gap={8} className="bg-white p-4 rounded flex-1">
          <DemoBox>Center 1</DemoBox>
          <DemoBox>Center 2</DemoBox>
          <DemoBox>Center 3</DemoBox>
        </Stack>
        <Stack direction="column" gap={8} className="bg-white p-4 rounded">
          <DemoBox>Right 1</DemoBox>
          <DemoBox>Right 2</DemoBox>
        </Stack>
      </Stack>
    </Stack>
}`,...m.parameters?.docs?.source},description:{story:"ネスト使用例",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" gap={16} className="w-80 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold">ログイン</h3>
      <Stack direction="column" gap={4}>
        <label className="text-sm font-medium">メールアドレス</label>
        <input type="email" className="border rounded px-3 py-2" placeholder="email@example.com" />
      </Stack>
      <Stack direction="column" gap={4}>
        <label className="text-sm font-medium">パスワード</label>
        <input type="password" className="border rounded px-3 py-2" placeholder="********" />
      </Stack>
      <Stack direction="row" gap={8} justify="end">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">キャンセル</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          ログイン
        </button>
      </Stack>
    </Stack>
}`,...l.parameters?.docs?.source},description:{story:"フォームレイアウト例",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" align="center" justify="between" className="w-full max-w-2xl bg-white p-4 shadow rounded-lg">
      <Stack direction="row" align="center" gap={8}>
        <div className="w-10 h-10 bg-blue-500 rounded-full" />
        <span className="font-semibold">ロゴ</span>
      </Stack>
      <Stack direction="row" gap={16}>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          ホーム
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          機能
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          料金
        </a>
      </Stack>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        お問い合わせ
      </button>
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"ヘッダーレイアウト例",...p.parameters?.docs?.description}}};const D=["Default","Row","GapComparison","AlignItems","JustifyContent","WithWrap","Nested","FormLayout","HeaderLayout"];export{c as AlignItems,t as Default,l as FormLayout,a as GapComparison,p as HeaderLayout,i as JustifyContent,m as Nested,n as Row,d as WithWrap,D as __namedExportsOrder,B as default};
