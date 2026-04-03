import{j as e,r as l}from"./iframe-TXWPROLT.js";import{T as c}from"./TabBar-j-kDTSqW.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-B4LZ7B4G.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./useOperationLog-5hpxR7Xt.js";const M={title:"ナビゲーション/TabBar",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
TabBarコンポーネント。以下の機能をサポート:

- **タブ切り替え**: アクティブタブの表示切り替え
- **閉じるボタン**: 各タブを閉じる機能（オプション）
- **カラーテーマ**: green, blue, tealの3種類
- **ラベル省略**: 長いラベルは自動的に省略
- **キーボード対応**: Enter/Spaceキーでタブ選択

複数のドキュメントやビューを管理する場面に使用します。
        `}}},argTypes:{tabs:{control:"object",description:"タブの配列"},activeTabId:{control:"text",description:"アクティブなタブのID"},onSelectTab:{action:"tab selected",description:"タブ選択時のコールバック"},onCloseTab:{action:"tab closed",description:"タブを閉じる時のコールバック"},activeColor:{control:{type:"select"},options:["green","blue","teal"],description:"アクティブタブのカラーテーマ",table:{defaultValue:{summary:"green"}}},maxLabelWidth:{control:"number",description:"ラベルの最大幅（px）",table:{defaultValue:{summary:150}}}}},j=()=>{const[s,t]=l.useState([{id:"tab-1",label:"ダッシュボード"},{id:"tab-2",label:"レポート"},{id:"tab-3",label:"設定"}]),[a,o]=l.useState("tab-1"),i=n=>{const r=s.filter(b=>b.id!==n);t(r),a===n&&r.length>0&&o(r[0].id)};return e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[e.jsx(c,{tabs:s,activeTabId:a,onSelectTab:o,onCloseTab:i}),e.jsxs("div",{className:"mt-4 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:s.find(n=>n.id===a)?.label}),e.jsx("p",{className:"mt-2 text-gray-600",children:"アクティブなタブのコンテンツがここに表示されます。"})]})]})},x={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"基本的なタブバー。タブを選択したり閉じたりできます。"}}}},N=()=>{const[s]=l.useState([{id:"overview",label:"概要"},{id:"details",label:"詳細"},{id:"history",label:"履歴"}]),[t,a]=l.useState("overview");return e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[e.jsx(c,{tabs:s,activeTabId:t,onSelectTab:a}),e.jsxs("div",{className:"mt-4 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:s.find(o=>o.id===t)?.label}),e.jsx("p",{className:"mt-2 text-gray-600",children:"固定タブの場合は閉じるボタンを表示しません。"})]})]})},p={render:()=>e.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"onCloseTabを指定しない場合、閉じるボタンは表示されません。"}}}},f=()=>{const s=[{id:"green-1",label:"Green Tab 1"},{id:"green-2",label:"Green Tab 2"}],t=[{id:"blue-1",label:"Blue Tab 1"},{id:"blue-2",label:"Blue Tab 2"}],a=[{id:"teal-1",label:"Teal Tab 1"},{id:"teal-2",label:"Teal Tab 2"}];return e.jsxs("div",{className:"w-full max-w-2xl space-y-6 rounded-lg bg-gray-50 p-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Green Theme (デフォルト)"}),e.jsx(c,{tabs:s,activeTabId:"green-1",onSelectTab:()=>{},activeColor:"green"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Blue Theme"}),e.jsx(c,{tabs:t,activeTabId:"blue-1",onSelectTab:()=>{},activeColor:"blue"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Teal Theme"}),e.jsx(c,{tabs:a,activeTabId:"teal-1",onSelectTab:()=>{},activeColor:"teal"})]})]})},u={render:()=>e.jsx(f,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"3種類のカラーテーマ（green, blue, teal）を比較できます。"}}}},v=()=>{const[s]=l.useState([{id:"tab-1",label:"とても長いタブのラベルテキストの例です"},{id:"tab-2",label:"Short"},{id:"tab-3",label:"これも非常に長いラベルでスペースが足りません"}]),[t,a]=l.useState("tab-1");return e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[e.jsx(c,{tabs:s,activeTabId:t,onSelectTab:a,maxLabelWidth:150}),e.jsx("div",{className:"mt-4 rounded-lg bg-white p-6 shadow",children:e.jsxs("p",{className:"text-fluid-sm text-gray-600",children:["maxLabelWidth=",150,"で長いラベルが省略されます。"]})})]})},g={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"maxLabelWidthで指定した幅を超えるラベルは省略されます（...表示）。"}}}},C=()=>{const[s,t]=l.useState(Array.from({length:10},(n,r)=>({id:`doc-${r+1}`,label:`Document ${r+1}`}))),[a,o]=l.useState("doc-1"),i=n=>{const r=s.filter(b=>b.id!==n);if(t(r),a===n&&r.length>0){const b=s.findIndex(m=>m.id===n),d=Math.min(b,r.length-1);o(r[d].id)}};return e.jsxs("div",{className:"w-full max-w-4xl rounded-lg bg-gray-50 p-6",children:[e.jsx(c,{tabs:s,activeTabId:a,onSelectTab:o,onCloseTab:i}),e.jsxs("div",{className:"mt-4 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:s.find(n=>n.id===a)?.label}),e.jsx("p",{className:"mt-2 text-gray-600",children:"多数のタブがある場合は横スクロール可能です。"})]})]})},h={render:()=>e.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"多数のタブを開いている場合の表示例。横スクロールで対応できます。"}}}},w=()=>{const[s,t]=l.useState([{id:"tab-1",label:"タブ 1"}]),[a,o]=l.useState("tab-1"),[i,n]=l.useState(2),r=()=>{const d={id:`tab-${i}`,label:`タブ ${i}`};t([...s,d]),o(d.id),n(i+1)},b=d=>{const m=s.filter(y=>y.id!==d);t(m),a===d&&m.length>0&&o(m[m.length-1].id)};return e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-gray-50 p-6",children:[e.jsxs("div",{className:"mb-4 flex justify-between",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:"動的タブ管理"}),e.jsx("button",{onClick:r,className:"rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600",children:"+ タブを追加"})]}),e.jsx(c,{tabs:s,activeTabId:a,onSelectTab:o,onCloseTab:b,activeColor:"teal"}),e.jsxs("div",{className:"mt-4 rounded-lg bg-white p-6 shadow",children:[e.jsx("h4",{className:"text-md font-semibold text-gray-800",children:s.find(d=>d.id===a)?.label}),e.jsxs("p",{className:"mt-2 text-fluid-sm text-gray-600",children:["現在 ",s.length," 個のタブが開いています。"]})]})]})},T={render:()=>e.jsx(w,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"タブを動的に追加・削除できるインタラクティブな例。"}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '基本的なタブバー。タブを選択したり閉じたりできます。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <NoCloseButtonExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'onCloseTabを指定しない場合、閉じるボタンは表示されません。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ColorThemesExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '3種類のカラーテーマ（green, blue, teal）を比較できます。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LongLabelsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'maxLabelWidthで指定した幅を超えるラベルは省略されます（...表示）。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ManyTabsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '多数のタブを開いている場合の表示例。横スクロールで対応できます。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DynamicTabsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'タブを動的に追加・削除できるインタラクティブな例。'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};const _=["Basic","NoCloseButton","ColorThemes","LongLabels","ManyTabs","DynamicTabs"];export{x as Basic,u as ColorThemes,T as DynamicTabs,g as LongLabels,h as ManyTabs,p as NoCloseButton,_ as __namedExportsOrder,M as default};
