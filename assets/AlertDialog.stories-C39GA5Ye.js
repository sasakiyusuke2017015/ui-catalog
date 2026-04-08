import{j as e,R as d}from"./iframe-BwfVzy39.js";import{A as l}from"./AlertDialog-CtsN_igf.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-ffj2acwm.js";import"./index-MInDop0f.js";import"./index-DG8aQvK0.js";import"./Button-DghHDH7f.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-DGn345dX.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Spinner-Bt2LJ0PM.js";import"./colors-BiHXYRGc.js";import"./Text-zVgKvV8g.js";const E={title:"フィードバック/ダイアログ/AlertDialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
window.alertの代替として使用するアラートダイアログコンポーネント。
• 4種類のタイプ(info, warning, error, success)
• Escキーまたはエンターキーで閉じることが可能
• 背景クリックで閉じることが可能`}}},argTypes:{isOpen:{control:{type:"boolean"},description:"ダイアログの表示状態",table:{defaultValue:{summary:!1}}},type:{control:{type:"select"},options:["info","warning","error","success"],description:"アラートのタイプ",table:{defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"ダイアログのタイトル"},message:{control:{type:"text"},description:"アラートメッセージ"},confirmText:{control:{type:"text"},description:"確認ボタンのテキスト",table:{defaultValue:{summary:"OK"}}},onClose:{action:"closed",description:"閉じるときのハンドラ"}}},n={args:{isOpen:!0,type:"info",title:"情報",message:"これは情報メッセージです。",confirmText:"OK"},parameters:{docs:{description:{story:"情報を表示する標準的なアラート"}}}},o={args:{isOpen:!0,type:"warning",title:"警告",message:"この操作には注意が必要です。",confirmText:"了解"},parameters:{docs:{description:{story:"注意を促す警告アラート"}}}},t={args:{isOpen:!0,type:"error",title:"エラー",message:"エラーが発生しました。もう一度お試しください。",confirmText:"閉じる"},parameters:{docs:{description:{story:"エラーを通知するアラート"}}}},a={args:{isOpen:!0,type:"success",title:"成功",message:"操作が正常に完了しました。",confirmText:"OK"},parameters:{docs:{description:{story:"成功を通知するアラート"}}}},i={args:{isOpen:!0,type:"info",message:"タイトルなしのシンプルなアラートです。"},parameters:{docs:{description:{story:"タイトルを省略したシンプルなアラート"}}}},c={args:{isOpen:!0,type:"info",title:"お知らせ",message:`これは長いメッセージの例です。
複数行にわたるテキストも適切に表示されます。

改行も正しく反映されます。`},parameters:{docs:{description:{story:"長いメッセージや複数行のメッセージを表示する例"}}}},f=()=>{const[u,m]=d.useState(!1),[r,g]=d.useState("info"),s=y=>{g(y),m(!0)};return e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>s("info"),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"情報アラートを表示"}),e.jsx("button",{onClick:()=>s("warning"),style:{padding:"0.5rem 1rem",backgroundColor:"#eab308",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"警告アラートを表示"}),e.jsx("button",{onClick:()=>s("error"),style:{padding:"0.5rem 1rem",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"エラーアラートを表示"}),e.jsx("button",{onClick:()=>s("success"),style:{padding:"0.5rem 1rem",backgroundColor:"#22c55e",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"成功アラートを表示"}),e.jsx(l,{isOpen:u,onClose:()=>m(!1),type:r,title:r==="info"?"情報":r==="warning"?"警告":r==="error"?"エラー":"成功",message:`${r}タイプのアラートダイアログです。`})]})},p={render:()=>e.jsx(f,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ボタンをクリックして各タイプのアラートを表示するデモ"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'info',
    title: '情報',
    message: 'これは情報メッセージです。',
    confirmText: 'OK'
  },
  parameters: {
    docs: {
      description: {
        story: '情報を表示する標準的なアラート'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'warning',
    title: '警告',
    message: 'この操作には注意が必要です。',
    confirmText: '了解'
  },
  parameters: {
    docs: {
      description: {
        story: '注意を促す警告アラート'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'error',
    title: 'エラー',
    message: 'エラーが発生しました。もう一度お試しください。',
    confirmText: '閉じる'
  },
  parameters: {
    docs: {
      description: {
        story: 'エラーを通知するアラート'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'success',
    title: '成功',
    message: '操作が正常に完了しました。',
    confirmText: 'OK'
  },
  parameters: {
    docs: {
      description: {
        story: '成功を通知するアラート'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'info',
    message: 'タイトルなしのシンプルなアラートです。'
  },
  parameters: {
    docs: {
      description: {
        story: 'タイトルを省略したシンプルなアラート'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    type: 'info',
    title: 'お知らせ',
    message: \`これは長いメッセージの例です。
複数行にわたるテキストも適切に表示されます。

改行も正しく反映されます。\`
  },
  parameters: {
    docs: {
      description: {
        story: '長いメッセージや複数行のメッセージを表示する例'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialogDemo />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ボタンをクリックして各タイプのアラートを表示するデモ'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const I=["Info","Warning","Error","Success","WithoutTitle","LongMessage","InteractiveDemo"];export{t as Error,n as Info,p as InteractiveDemo,c as LongMessage,a as Success,o as Warning,i as WithoutTitle,I as __namedExportsOrder,E as default};
