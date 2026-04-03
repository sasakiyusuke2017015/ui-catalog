import{j as r,r as s}from"./iframe-Dq39NNb-.js";import{S as g}from"./SortableToggleList-DZgjFTHk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9nu_x0-.js";import"./index-nak_duPe.js";import"./Toggle-CsNBqbU-.js";import"./useOperationLog-5hpxR7Xt.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const B={title:"データ操作/SortableToggleList",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
SortableToggleListコンポーネント。以下の機能をサポート:

- **ドラッグ&ドロップ**: dnd-kitによる直感的な並び替え
- **トグルスイッチ**: 各項目のON/OFF切り替え
- **無効化**: 特定項目の操作を無効化可能
- **カスタマイズ**: 角丸などのスタイル調整

ダッシュボードのウィジェット表示順や、
表示列のカスタマイズなどに使用します。
        `}}},argTypes:{items:{control:"object",description:"表示するアイテムのリスト"},order:{control:"object",description:"現在の表示順序（ID配列）"},onOrderChange:{action:"order changed",description:"順序変更時のコールバック"},onItemToggle:{action:"item toggled",description:"トグル切り替え時のコールバック"},itemRadius:{control:"text",description:"アイテムコンテナの角丸",table:{defaultValue:{summary:"8px"}}},toggleRadius:{control:"text",description:"トグルスイッチの角丸",table:{defaultValue:{summary:"9999px"}}}}},j=()=>{const[o]=s.useState([{id:"item-1",label:"売上推移",checked:!0},{id:"item-2",label:"部署別統計",checked:!0},{id:"item-3",label:"アラート一覧",checked:!1},{id:"item-4",label:"満足度分析",checked:!0}]),[c,d]=s.useState(["item-1","item-2","item-3","item-4"]),[l,i]=s.useState({"item-1":!0,"item-2":!0,"item-3":!1,"item-4":!0}),a=e=>{i(t=>({...t,[e]:!t[e]}))},n=o.map(e=>({...e,checked:l[e.id]??e.checked}));return r.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[r.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"ダッシュボード表示項目"}),r.jsx(g,{items:n,order:c,onOrderChange:d,onItemToggle:a})]})},p={render:()=>r.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ドラッグ&ドロップで順序を変更し、トグルでON/OFFを切り替えられます。"}}}},N=()=>{const[o]=s.useState([{id:"item-1",label:"必須項目（固定）",checked:!0,disabled:!0},{id:"item-2",label:"カスタム項目A",checked:!0},{id:"item-3",label:"カスタム項目B",checked:!1},{id:"item-4",label:"カスタム項目C",checked:!0}]),[c,d]=s.useState(["item-1","item-2","item-3","item-4"]),[l,i]=s.useState({"item-1":!0,"item-2":!0,"item-3":!1,"item-4":!0}),a=e=>{i(t=>({...t,[e]:!t[e]}))},n=o.map(e=>({...e,checked:l[e.id]??e.checked}));return r.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[r.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"表示列のカスタマイズ"}),r.jsx("p",{className:"mb-4 text-fluid-sm text-gray-600",children:"必須項目は無効化されており、変更できません。"}),r.jsx(g,{items:n,order:c,onOrderChange:d,onItemToggle:a})]})},h={render:()=>r.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"無効化された項目を含む例。必須項目などを固定できます。"}}}},E=()=>{const[o]=s.useState([{id:"widget-1",label:"ウィジェット1",checked:!0},{id:"widget-2",label:"ウィジェット2",checked:!1},{id:"widget-3",label:"ウィジェット3",checked:!0}]),[c,d]=s.useState(["widget-1","widget-2","widget-3"]),[l,i]=s.useState({"widget-1":!0,"widget-2":!1,"widget-3":!0}),a=e=>{i(t=>({...t,[e]:!t[e]}))},n=o.map(e=>({...e,checked:l[e.id]??e.checked}));return r.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6",children:[r.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"カスタムスタイル"}),r.jsx(g,{items:n,order:c,onOrderChange:d,onItemToggle:a,itemRadius:"16px",toggleRadius:"4px"})]})},x={render:()=>r.jsx(E,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"itemRadiusとtoggleRadiusプロパティでスタイルをカスタマイズできます。"}}}},I=()=>{const[o]=s.useState(Array.from({length:12},(e,t)=>({id:`metric-${t+1}`,label:`指標${t+1}`,checked:t%3!==0}))),[c,d]=s.useState(Array.from({length:12},(e,t)=>`metric-${t+1}`)),[l,i]=s.useState(Object.fromEntries(Array.from({length:12},(e,t)=>[`metric-${t+1}`,t%3!==0]))),a=e=>{i(t=>({...t,[e]:!t[e]}))},n=o.map(e=>({...e,checked:l[e.id]??e.checked}));return r.jsxs("div",{className:"w-full max-w-4xl rounded-lg bg-gray-50 p-6",children:[r.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"多数の指標を管理"}),r.jsx(g,{items:n,order:c,onOrderChange:d,onItemToggle:a})]})},b={render:()=>r.jsx(I,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"多数のアイテムがある場合の表示例。自動的に折り返されます。"}}}},C=()=>{const[o]=s.useState([{id:"col-1",label:"名前",checked:!0},{id:"col-2",label:"部署",checked:!0},{id:"col-3",label:"ステータス",checked:!1},{id:"col-4",label:"最終更新",checked:!0}]),[c,d]=s.useState(["col-1","col-2","col-3","col-4"]),[l,i]=s.useState({"col-1":!0,"col-2":!0,"col-3":!1,"col-4":!0}),[a,n]=s.useState(""),e=m=>{i(u=>({...u,[m]:!u[m]}))},t=m=>{const u=o.find(k=>k.id===m);n(`ドラッグ中: ${u?.label}`)},f=()=>{n("")},y=o.map(m=>({...m,checked:l[m.id]??m.checked}));return r.jsxs("div",{className:"w-full max-w-2xl space-y-4 rounded-lg bg-gray-50 p-6",children:[r.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:"テーブル表示列の設定"}),a&&r.jsx("div",{className:"rounded-lg bg-blue-100 p-3 text-fluid-sm font-medium text-blue-800",children:a}),r.jsx(g,{items:y,order:c,onOrderChange:d,onItemToggle:e,onDragStart:t,onDragEnd:f})]})},S={render:()=>r.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"onDragStartとonDragEndコールバックでドラッグイベントを監視できます。"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ドラッグ&ドロップで順序を変更し、トグルでON/OFFを切り替えられます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DisabledItemsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '無効化された項目を含む例。必須項目などを固定できます。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <CustomStyleExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'itemRadiusとtoggleRadiusプロパティでスタイルをカスタマイズできます。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ManyItemsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '多数のアイテムがある場合の表示例。自動的に折り返されます。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <DragEventsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'onDragStartとonDragEndコールバックでドラッグイベントを監視できます。'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const $=["Basic","WithDisabledItems","CustomStyle","ManyItems","DragEvents"];export{p as Basic,x as CustomStyle,S as DragEvents,b as ManyItems,h as WithDisabledItems,$ as __namedExportsOrder,B as default};
