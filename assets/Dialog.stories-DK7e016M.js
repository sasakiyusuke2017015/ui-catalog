import{j as e,r as s}from"./iframe-WnPGq7kF.js";import{D as o}from"./Dialog-B27BBsgu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn_LjSlA.js";import"./index-DrjLiS1X.js";import"./Button-BsFv_1g2.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-EuWHROt9.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Spinner-SGqrW4ZB.js";import"./colors-BiHXYRGc.js";import"./Text-DSdFP45B.js";const U={title:"フィードバック/ダイアログ/Dialog",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Dialogコンポーネント。以下の機能をサポート:

- **2つのバリアント**: alert (OKのみ), confirm (OK+キャンセル)
- **5つのタイプ**: info, warning, error, success, danger
- **キーボード対応**: Escキーで閉じる、Enterキー(alert)で確定
- **背景クリック**: 背景クリックで閉じる
- **カスタマイズ**: borderRadiusで角丸を調整

window.alert/confirmの代替として使用します。
        `}}},argTypes:{isOpen:{description:"ダイアログの表示/非表示",control:"boolean"},title:{description:"ダイアログのタイトル（省略可）",control:"text"},message:{description:"ダイアログのメッセージ",control:"text"},type:{description:"ダイアログのタイプ（色・アイコンが変わる）",control:"select",options:["info","warning","error","success","danger"]},variant:{description:"alert: OKのみ, confirm: OK+キャンセル",control:"select",options:["alert","confirm"]},confirmText:{description:"確定ボタンのラベル",control:"text"},cancelText:{description:"キャンセルボタンのラベル（confirmのみ）",control:"text"},borderRadius:{description:"角丸のサイズ（Tailwindクラス）",control:"text"},onClose:{action:"closed"},onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}}},h=()=>{const[n,r]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"情報ダイアログを開く"}),e.jsx(o,{isOpen:n,onClose:()=>r(!1),title:"お知らせ",message:"データの保存が完了しました。",type:"info",variant:"alert"})]})},i={render:()=>e.jsx(h,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"情報を通知するアラートダイアログ（青色）。"}}}},b=()=>{const[n,r]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600",children:"警告ダイアログを開く"}),e.jsx(o,{isOpen:n,onClose:()=>r(!1),title:"警告",message:"入力内容に不備があります。確認してください。",type:"warning",variant:"alert"})]})},c={render:()=>e.jsx(b,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"警告を表示するアラートダイアログ（黄色）。"}}}},C=()=>{const[n,r]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600",children:"エラーダイアログを開く"}),e.jsx(o,{isOpen:n,onClose:()=>r(!1),title:"エラー",message:"データの読み込みに失敗しました。再試行してください。",type:"error",variant:"alert"})]})},l={render:()=>e.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"エラーを通知するアラートダイアログ（赤色）。"}}}},y=()=>{const[n,r]=s.useState(!1),[t,a]=s.useState(""),x=()=>{a("削除が実行されました"),r(!1)},f=()=>{a("キャンセルされました"),r(!1)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{a(""),r(!0)},className:"rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700",children:"削除確認ダイアログを開く"}),t&&e.jsxs("p",{className:"mt-2 text-fluid-sm text-gray-600",children:["結果: ",t]}),e.jsx(o,{isOpen:n,onConfirm:x,onCancel:f,title:"確認",message:"このデータを削除しますか？この操作は取り消せません。",type:"danger",variant:"confirm"})]})},d={render:()=>e.jsx(y,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"危険な操作の確認ダイアログ。確定ボタンが赤色になります。"}}}},v=()=>{const[n,r]=s.useState(!1),[t,a]=s.useState(""),x=()=>{a("保存されました"),r(!1)},f=()=>{a("キャンセルされました"),r(!1)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{a(""),r(!0)},className:"rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",children:"保存確認ダイアログを開く"}),t&&e.jsxs("p",{className:"mt-2 text-fluid-sm text-gray-600",children:["結果: ",t]}),e.jsx(o,{isOpen:n,onConfirm:x,onCancel:f,title:"保存確認",message:"変更を保存しますか？",type:"info",variant:"confirm"})]})},p={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"一般的な確認ダイアログ。保存やアップロードなどに使用します。"}}}},j=()=>{const[n,r]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600",children:"カスタムラベルダイアログを開く"}),e.jsx(o,{isOpen:n,onConfirm:()=>r(!1),onCancel:()=>r(!1),message:"ファイルをダウンロードしますか？",type:"success",variant:"confirm",confirmText:"ダウンロード",cancelText:"後で"})]})},m={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"confirmText/cancelTextでボタンラベルをカスタマイズできます。"}}}},w=()=>{const[n,r]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600",children:"タイトルなしダイアログを開く"}),e.jsx(o,{isOpen:n,onClose:()=>r(!1),message:"タイトルがない場合は、アイコンが中央に大きく表示されます。",type:"info",variant:"alert"})]})},u={render:()=>e.jsx(w,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"タイトルを省略した場合、アイコンが中央に表示されます。"}}}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>window.alert("これはブラウザ標準のalertです（比較用）"),className:"w-full rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500",children:"標準alert（比較用）"}),["info","warning","error","success","danger"].map(n=>{const[r,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>t(!0),className:`w-full rounded px-4 py-2 text-white ${n==="info"?"bg-blue-500 hover:bg-blue-600":n==="warning"?"bg-yellow-500 hover:bg-yellow-600":n==="error"?"bg-red-500 hover:bg-red-600":n==="success"?"bg-green-500 hover:bg-green-600":"bg-red-600 hover:bg-red-700"}`,children:[n.toUpperCase(),"タイプを開く"]}),e.jsx(o,{isOpen:r,onClose:()=>t(!1),title:n.toUpperCase(),message:`${n}タイプのダイアログです。`,type:n,variant:"alert"})]},n)})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"5種類のタイプを比較できます。"}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <AlertInfoExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '情報を通知するアラートダイアログ（青色）。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AlertWarningExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '警告を表示するアラートダイアログ（黄色）。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AlertErrorExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'エラーを通知するアラートダイアログ（赤色）。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmDangerExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '危険な操作の確認ダイアログ。確定ボタンが赤色になります。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmInfoExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '一般的な確認ダイアログ。保存やアップロードなどに使用します。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CustomLabelsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'confirmText/cancelTextでボタンラベルをカスタマイズできます。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <NoTitleExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'タイトルを省略した場合、アイコンが中央に表示されます。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <button onClick={() => window.alert('これはブラウザ標準のalertです（比較用）')} className="w-full rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500">
        標準alert（比較用）
      </button>
      {(['info', 'warning', 'error', 'success', 'danger'] as const).map(type => {
      const [isOpen, setIsOpen] = useState(false);
      return <div key={type}>
              <button onClick={() => setIsOpen(true)} className={\`w-full rounded px-4 py-2 text-white \${type === 'info' ? 'bg-blue-500 hover:bg-blue-600' : type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' : type === 'error' ? 'bg-red-500 hover:bg-red-600' : type === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-600 hover:bg-red-700'}\`}>
                {type.toUpperCase()}タイプを開く
              </button>
              <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title={type.toUpperCase()} message={\`\${type}タイプのダイアログです。\`} type={type} variant="alert" />
            </div>;
    })}
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '5種類のタイプを比較できます。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const $=["AlertInfo","AlertWarning","AlertError","ConfirmDanger","ConfirmInfo","CustomLabels","NoTitle","AllTypes"];export{l as AlertError,i as AlertInfo,c as AlertWarning,g as AllTypes,d as ConfirmDanger,p as ConfirmInfo,m as CustomLabels,u as NoTitle,$ as __namedExportsOrder,U as default};
