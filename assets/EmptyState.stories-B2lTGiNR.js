import{j as r}from"./iframe-87Bzd3j4.js";import{E as o}from"./EmptyState-Cw-Al2RJ.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"フィードバック/通知/EmptyState",component:o,tags:["autodocs"],parameters:{layout:"centered"}},t={args:{title:"データがありません",description:"新しいアイテムを追加してください。"}},e={args:{icon:r.jsx("span",{style:{fontSize:32},children:"📭"}),title:"メッセージはありません",description:"新しいメッセージが届くとここに表示されます。"}},s={args:{icon:r.jsx("span",{style:{fontSize:32},children:"📋"}),title:"項目がありません",description:"最初の項目を作成しましょう。",action:r.jsx("button",{className:"mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"新規作成"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'データがありません',
    description: '新しいアイテムを追加してください。'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <span style={{
      fontSize: 32
    }}>📭</span>,
    title: 'メッセージはありません',
    description: '新しいメッセージが届くとここに表示されます。'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <span style={{
      fontSize: 32
    }}>📋</span>,
    title: '項目がありません',
    description: '最初の項目を作成しましょう。',
    action: <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        新規作成
      </button>
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","WithIcon","WithAction"];export{t as Default,s as WithAction,e as WithIcon,p as __namedExportsOrder,c as default};
