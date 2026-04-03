import{j as e}from"./iframe-CEBuvpRZ.js";import{T as o}from"./Tooltip-BPb1I_F1.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"フィードバック/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text",description:"ツールチップに表示するテキスト"},position:{control:"select",options:["top","bottom","left","right"],description:"ツールチップの表示位置"}}},r={args:{content:"これはツールチップです",position:"bottom"},render:t=>e.jsx(o,{...t,children:e.jsx("button",{className:"rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"ホバーしてください"})})},s={args:{content:"上に表示されます",position:"top"},render:t=>e.jsx("div",{style:{marginTop:"60px"},children:e.jsx(o,{...t,children:e.jsx("button",{className:"rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600",children:"上方向"})})})},n={args:{content:"左に表示されます",position:"left"},render:t=>e.jsx("div",{style:{marginLeft:"150px"},children:e.jsx(o,{...t,children:e.jsx("button",{className:"rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600",children:"左方向"})})})},i={args:{content:"右に表示されます",position:"right"},render:t=>e.jsx(o,{...t,children:e.jsx("button",{className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"右方向"})})},a={args:{content:"これは長いツールチップテキストです。複数行にわたる説明文を表示することもできます。",position:"bottom"},render:t=>e.jsx(o,{...t,children:e.jsx("span",{className:"cursor-help text-blue-600 underline",children:"長いツールチップを表示"})})},p={args:{content:"ヘルプ情報",position:"top"},render:t=>e.jsx("div",{style:{marginTop:"50px"},children:e.jsx(o,{...t,children:e.jsx("span",{className:"inline-flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600",children:"?"})})})},c={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-8",style:{padding:"80px"},children:[e.jsx(o,{content:"上に表示",position:"top",children:e.jsx("button",{className:"rounded bg-blue-500 px-4 py-2 text-white",children:"Top"})}),e.jsxs("div",{className:"flex gap-16",children:[e.jsx(o,{content:"左に表示",position:"left",children:e.jsx("button",{className:"rounded bg-green-500 px-4 py-2 text-white",children:"Left"})}),e.jsx(o,{content:"右に表示",position:"right",children:e.jsx("button",{className:"rounded bg-purple-500 px-4 py-2 text-white",children:"Right"})})]}),e.jsx(o,{content:"下に表示",position:"bottom",children:e.jsx("button",{className:"rounded bg-orange-500 px-4 py-2 text-white",children:"Bottom"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'これはツールチップです',
    position: 'bottom'
  },
  render: args => <Tooltip {...args}>
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        ホバーしてください
      </button>
    </Tooltip>
}`,...r.parameters?.docs?.source},description:{story:"デフォルトのツールチップ（下方向）",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: '上に表示されます',
    position: 'top'
  },
  render: args => <div style={{
    marginTop: '60px'
  }}>
      <Tooltip {...args}>
        <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
          上方向
        </button>
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"上方向に表示",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: '左に表示されます',
    position: 'left'
  },
  render: args => <div style={{
    marginLeft: '150px'
  }}>
      <Tooltip {...args}>
        <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          左方向
        </button>
      </Tooltip>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"左方向に表示",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: '右に表示されます',
    position: 'right'
  },
  render: args => <Tooltip {...args}>
      <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
        右方向
      </button>
    </Tooltip>
}`,...i.parameters?.docs?.source},description:{story:"右方向に表示",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'これは長いツールチップテキストです。複数行にわたる説明文を表示することもできます。',
    position: 'bottom'
  },
  render: args => <Tooltip {...args}>
      <span className="cursor-help text-blue-600 underline">
        長いツールチップを表示
      </span>
    </Tooltip>
}`,...a.parameters?.docs?.source},description:{story:"長いテキスト",...a.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'ヘルプ情報',
    position: 'top'
  },
  render: args => <div style={{
    marginTop: '50px'
  }}>
      <Tooltip {...args}>
        <span className="inline-flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600">
          ?
        </span>
      </Tooltip>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"アイコンと組み合わせ",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-8" style={{
    padding: '80px'
  }}>
      <Tooltip content="上に表示" position="top">
        <button className="rounded bg-blue-500 px-4 py-2 text-white">Top</button>
      </Tooltip>

      <div className="flex gap-16">
        <Tooltip content="左に表示" position="left">
          <button className="rounded bg-green-500 px-4 py-2 text-white">
            Left
          </button>
        </Tooltip>

        <Tooltip content="右に表示" position="right">
          <button className="rounded bg-purple-500 px-4 py-2 text-white">
            Right
          </button>
        </Tooltip>
      </div>

      <Tooltip content="下に表示" position="bottom">
        <button className="rounded bg-orange-500 px-4 py-2 text-white">
          Bottom
        </button>
      </Tooltip>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"全方向の比較",...c.parameters?.docs?.description}}};const m=["Default","Top","Left","Right","LongContent","WithIcon","AllPositions"];export{c as AllPositions,r as Default,n as Left,a as LongContent,i as Right,s as Top,p as WithIcon,m as __namedExportsOrder,u as default};
