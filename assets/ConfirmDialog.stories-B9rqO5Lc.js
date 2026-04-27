import{j as e,R as l}from"./iframe-2z8Hl2jC.js";import{C as u}from"./ConfirmDialog-DuJ104WA.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-Lh6Kh60A.js";import"./index-ceUOm_iH.js";import"./index-DpVMA5hu.js";import"./Button-DuIKyBC0.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-DQoCPfk-.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Spinner-CgsV25FN.js";import"./colors-BiHXYRGc.js";import"./Text-BNefPDJW.js";const L={title:"フィードバック/ダイアログ/ConfirmDialog",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
window.confirmの代替として使用する確認ダイアログコンポーネント。
• 4種類のタイプ(info, warning, error, danger)
• Escキーでキャンセル可能
• 背景クリックでキャンセル可能
• 確認とキャンセルの2つのボタン`}}},argTypes:{isOpen:{control:{type:"boolean"},description:"ダイアログの表示状態",table:{defaultValue:{summary:!1}}},type:{control:{type:"select"},options:["info","warning","error","danger"],description:"確認ダイアログのタイプ",table:{defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"ダイアログのタイトル"},message:{control:{type:"text"},description:"確認メッセージ"},confirmText:{control:{type:"text"},description:"確認ボタンのテキスト",table:{defaultValue:{summary:"確定"}}},cancelText:{control:{type:"text"},description:"キャンセルボタンのテキスト",table:{defaultValue:{summary:"キャンセル"}}},onConfirm:{action:"confirmed",description:"確認ボタンクリック時のハンドラ"},onCancel:{action:"cancelled",description:"キャンセルボタンクリック時のハンドラ"}}},o={args:{isOpen:!0,type:"info",title:"確認",message:"この操作を続行してもよろしいですか？",confirmText:"続行する",cancelText:"キャンセル"},parameters:{docs:{description:{story:"標準的な確認ダイアログ"}}}},t={args:{isOpen:!0,type:"warning",title:"警告",message:"この操作は取り消せません。続行しますか？",confirmText:"続行",cancelText:"キャンセル"},parameters:{docs:{description:{story:"注意が必要な操作の確認"}}}},s={args:{isOpen:!0,type:"error",title:"エラー",message:"エラーが発生しました。再試行しますか？",confirmText:"再試行",cancelText:"キャンセル"},parameters:{docs:{description:{story:"エラー発生時の確認"}}}},a={args:{isOpen:!0,type:"danger",title:"削除の確認",message:"このアイテムを完全に削除します。この操作は取り消せません。",confirmText:"削除する",cancelText:"キャンセル"},parameters:{docs:{description:{story:"削除など危険な操作の確認（確認ボタンが赤色）"}}}},i={args:{isOpen:!0,type:"info",message:"変更を保存しますか？",confirmText:"保存",cancelText:"キャンセル"},parameters:{docs:{description:{story:"タイトルを省略したシンプルな確認ダイアログ"}}}},c={args:{isOpen:!0,type:"warning",title:"重要な確認",message:`この操作により、以下の変更が適用されます：

• すべてのデータが初期化されます
• 現在の設定が失われます
• 復元することはできません

本当に続行してもよろしいですか？`,confirmText:"続行",cancelText:"キャンセル"},parameters:{docs:{description:{story:"長いメッセージや複数行のメッセージを表示する例"}}}},C=()=>{const[f,m]=l.useState(!1),[r,y]=l.useState("info"),[g,d]=l.useState(""),n=b=>{y(b),m(!0),d("")},x=()=>{d("確認されました"),m(!1)},T=()=>{d("キャンセルされました"),m(!1)};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>n("info"),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"情報確認"}),e.jsx("button",{onClick:()=>n("warning"),style:{padding:"0.5rem 1rem",backgroundColor:"#eab308",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"警告確認"}),e.jsx("button",{onClick:()=>n("error"),style:{padding:"0.5rem 1rem",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"エラー確認"}),e.jsx("button",{onClick:()=>n("danger"),style:{padding:"0.5rem 1rem",backgroundColor:"#dc2626",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"危険な操作"})]}),g&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f3f4f6",borderRadius:"0.25rem"},children:["結果: ",g]}),e.jsx(u,{isOpen:f,onConfirm:x,onCancel:T,type:r,title:r==="info"?"確認":r==="warning"?"警告":r==="error"?"エラー":"削除の確認",message:`${r}タイプの確認ダイアログです。続行しますか？`,confirmText:r==="danger"?"削除する":"続行する"})]})},p={render:()=>e.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ボタンをクリックして各タイプの確認ダイアログを表示するデモ"}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'info',
    title: '確認',
    message: 'この操作を続行してもよろしいですか？',
    confirmText: '続行する',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: '標準的な確認ダイアログ'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'warning',
    title: '警告',
    message: 'この操作は取り消せません。続行しますか？',
    confirmText: '続行',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: '注意が必要な操作の確認'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'error',
    title: 'エラー',
    message: 'エラーが発生しました。再試行しますか？',
    confirmText: '再試行',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー発生時の確認'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'danger',
    title: '削除の確認',
    message: 'このアイテムを完全に削除します。この操作は取り消せません。',
    confirmText: '削除する',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: '削除など危険な操作の確認（確認ボタンが赤色）'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'info',
    message: '変更を保存しますか？',
    confirmText: '保存',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: 'タイトルを省略したシンプルな確認ダイアログ'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'warning',
    title: '重要な確認',
    message: \`この操作により、以下の変更が適用されます：

• すべてのデータが初期化されます
• 現在の設定が失われます
• 復元することはできません

本当に続行してもよろしいですか？\`,
    confirmText: '続行',
    cancelText: 'キャンセル'
  },
  parameters: {
    docs: {
      description: {
        story: '長いメッセージや複数行のメッセージを表示する例'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmDialogDemo />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ボタンをクリックして各タイプの確認ダイアログを表示するデモ'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const M=["Info","Warning","Error","Danger","WithoutTitle","LongMessage","InteractiveDemo"];export{a as Danger,s as Error,o as Info,p as InteractiveDemo,c as LongMessage,t as Warning,i as WithoutTitle,M as __namedExportsOrder,L as default};
