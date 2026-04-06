import{j as e,r as o}from"./iframe-87Bzd3j4.js";import{T as n}from"./Toast-Jcre-u-K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHBFzJQ7.js";import"./index-DbsjK_Ct.js";import"./useOperationLog-0HvfpEDm.js";import"./Button-CrEffx-7.js";import"./Icon-C2T7xtHb.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const R={title:"フィードバック/通知/Toast",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
Toastコンポーネント。以下の機能をサポート:

- **4つのタイプ**: info, warning, error, success
- **4つの位置**: top-right, top-left, bottom-right, bottom-left
- **自動クローズ**: durationで自動的に閉じる時間を設定
- **アニメーション**: スライドイン/アウトのアニメーション
- **カスタマイズ**: borderRadiusで角丸を調整

成功通知、エラーメッセージ、情報表示などに使用します。
        `}}},argTypes:{isOpen:{description:"トーストの表示/非表示",control:"boolean"},message:{description:"トーストに表示するメッセージ",control:"text"},type:{description:"トーストのタイプ（色・アイコンが変わる）",control:"select",options:["info","warning","error","success"]},duration:{description:"自動クローズまでの時間(ms)。0で自動クローズ無効",control:"number"},position:{description:"トーストの表示位置",control:"select",options:["top-right","top-left","bottom-right","bottom-left"]},borderRadius:{description:"角丸のサイズ（CSS値）",control:"text"},onClose:{action:"closed"}}},y=()=>{const[t,s]=o.useState(!1);return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsx("button",{onClick:()=>s(!0),className:"rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600",children:"情報トーストを表示"}),e.jsx(n,{isOpen:t,onClose:()=>s(!1),message:"データの読み込みが完了しました。",type:"info",duration:3e3})]})},l={render:()=>e.jsx(y,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"情報を通知する青色のトースト（3秒後に自動で閉じる）。"}}}},j=()=>{const[t,s]=o.useState(!1);return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsx("button",{onClick:()=>s(!0),className:"rounded bg-green-500 px-6 py-3 text-white hover:bg-green-600",children:"成功トーストを表示"}),e.jsx(n,{isOpen:t,onClose:()=>s(!1),message:"保存が完了しました。",type:"success",duration:3e3})]})},p={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"成功を通知する緑色のトースト。"}}}},N=()=>{const[t,s]=o.useState(!1);return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsx("button",{onClick:()=>s(!0),className:"rounded bg-yellow-500 px-6 py-3 text-white hover:bg-yellow-600",children:"警告トーストを表示"}),e.jsx(n,{isOpen:t,onClose:()=>s(!1),message:"ネットワーク接続が不安定です。",type:"warning",duration:3e3})]})},d={render:()=>e.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"警告を表示する黄色のトースト。"}}}},C=()=>{const[t,s]=o.useState(!1);return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsx("button",{onClick:()=>s(!0),className:"rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600",children:"エラートーストを表示"}),e.jsx(n,{isOpen:t,onClose:()=>s(!1),message:"エラーが発生しました。もう一度お試しください。",type:"error",duration:3e3})]})},u={render:()=>e.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"エラーを通知する赤色のトースト。"}}}},v=()=>{const[t,s]=o.useState("top-right"),[h,a]=o.useState(!1),i=r=>{s(r),a(!0)};return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-center text-fluid-xl font-bold text-gray-800",children:"表示位置を選択"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("button",{onClick:()=>i("top-left"),className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"左上"}),e.jsx("button",{onClick:()=>i("top-right"),className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"右上"}),e.jsx("button",{onClick:()=>i("bottom-left"),className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"左下"}),e.jsx("button",{onClick:()=>i("bottom-right"),className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"右下"})]})]}),e.jsx(n,{isOpen:h,onClose:()=>a(!1),message:`トーストが${t==="top-right"?"右上":t==="top-left"?"左上":t==="bottom-right"?"右下":"左下"}に表示されました`,type:"info",position:t,duration:3e3})]})},m={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"4つの表示位置（top-right, top-left, bottom-right, bottom-left）。"}}}},T=()=>{const[t,s]=o.useState(!1);return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsx("button",{onClick:()=>s(!0),className:"rounded bg-teal-500 px-6 py-3 text-white hover:bg-teal-600",children:"自動クローズなし"}),e.jsx(n,{isOpen:t,onClose:()=>s(!1),message:"このトーストは手動で閉じるまで表示され続けます。",type:"info",duration:0})]})},x={render:()=>e.jsx(T,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"duration=0で自動クローズを無効化。手動で閉じる必要があります。"}}}},E=()=>{const[t,s]=o.useState([]);let h=0;const a=(r,c)=>{const b=h++;s(f=>[...f,{id:b,message:r,type:c}])},i=r=>{s(c=>c.filter(b=>b.id!==r))};return e.jsxs("div",{className:"flex h-screen items-center justify-center bg-gray-100",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-center text-fluid-xl font-bold text-gray-800",children:"複数トーストのテスト"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>a("情報が追加されました","info"),className:"rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"情報を追加"}),e.jsx("button",{onClick:()=>a("保存に成功しました","success"),className:"rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600",children:"成功を追加"}),e.jsx("button",{onClick:()=>a("エラーが発生しました","error"),className:"rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600",children:"エラーを追加"})]})]}),t.map((r,c)=>e.jsx(n,{isOpen:!0,onClose:()=>i(r.id),message:r.message,type:r.type,position:"bottom-right",duration:3e3},r.id))]})},g={render:()=>e.jsx(E,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"複数のトーストを表示する例。重なって表示される可能性があるため、実装時は位置調整が必要です。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <InfoToastExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '情報を通知する青色のトースト（3秒後に自動で閉じる）。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SuccessToastExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '成功を通知する緑色のトースト。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <WarningToastExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '警告を表示する黄色のトースト。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorToastExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'エラーを通知する赤色のトースト。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PositionsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '4つの表示位置（top-right, top-left, bottom-right, bottom-left）。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <NoAutoCloseExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'duration=0で自動クローズを無効化。手動で閉じる必要があります。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleToastsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '複数のトーストを表示する例。重なって表示される可能性があるため、実装時は位置調整が必要です。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const $=["Info","Success","Warning","Error","Positions","NoAutoClose","MultipleToasts"];export{u as Error,l as Info,g as MultipleToasts,x as NoAutoClose,m as Positions,p as Success,d as Warning,$ as __namedExportsOrder,R as default};
