import{K as m}from"./KeyButton-Bl4lzMii.js";import"./iframe-D9uhVg1b.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-ErRVKQo0.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-B7_qdoJ6.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const z={title:"基本入力/KeyButton",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
状態に応じてアクションが変化するインテリジェントボタン。以下の機能をサポート:

- **状態管理**: アプリケーションの現在状態に応じたアクション表示
- **自動有効化**: アクションの状態と現在状態が一致した場合のみ有効
- **複数アクション**: スラッシュ区切りで複数アクション表示
- **カスタマイズ**: サイズ、色、バリアントの設定

フォームやダッシュボードの状態依存アクションに最適化されています。
        `},source:{transform:(y,d)=>{const{args:t}=d,e=[];if(t.action)if(Array.isArray(t.action))e.push(`action={[
  ${t.action.map(o=>`{
    label: "${o.label}",
    state: ${Array.isArray(o.state)?`["${o.state.join('", "')}"]`:`"${o.state}"`},
    onClick: handleClick
  }`).join(`,
  `)}
]}`);else{const o=t.action;e.push(`action={{
  label: "${o.label}",
  state: ${Array.isArray(o.state)?`["${o.state.join('", "')}"]`:`"${o.state}"`},
  onClick: handleClick
}}`)}return t.currentState&&e.push(`currentState="${t.currentState}"`),t.variant&&t.variant!=="primary"&&e.push(`variant="${t.variant}"`),t.disabled&&e.push(`disabled={${t.disabled}}`),t.buttonSize&&t.buttonSize!=="w-20"&&e.push(`buttonSize="${t.buttonSize}"`),t.textSize&&t.textSize!=="text-fluid-xs"&&e.push(`textSize="${t.textSize}"`),`import KeyButton from './components/molecules/KeyButton';

<KeyButton${e.length>0?`
  `+e.join(`
  `)+`
`:""} />`}}}},argTypes:{action:{description:"ボタンのアクション設定(単一または複数)",control:!1},currentState:{description:"アプリケーションの現在状態",control:"select",options:["default","edit","confirm"]},variant:{description:"ボタンのバリアント",control:"select",options:["primary","secondary","danger","outline"]},disabled:{description:"ボタンの強制無効化",control:"boolean"},buttonSize:{description:"ボタンのサイズ(Tailwindクラス)",control:"text"},textSize:{description:"テキストのサイズ(Tailwindクラス)",control:"text"}}},u={label:"保存",state:"default",onClick:()=>window.alert("保存しました")},a={args:{action:u,currentState:"default"},parameters:{docs:{description:{story:"基本的なキーボタンの表示例。状態が一致しているためボタンが有効です"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default",
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
/>`}}}},r={args:{action:u,currentState:"edit"},parameters:{docs:{description:{story:"状態が一致しないためボタンが自動的に無効化された例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default", // 現在状態と不一致
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="edit" // 状態が不一致のため無効
/>`}}}},n={args:{action:u,currentState:"default",disabled:!0},parameters:{docs:{description:{story:"disabledプロプで強制的に無効化された例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default",
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  disabled={true} // 強制的に無効化
/>`}}}},p={label:"戻る",state:["default","edit","confirm"],onClick:()=>window.alert("前の画面に戻ります")},c={args:{action:p,currentState:"edit"},parameters:{docs:{description:{story:"複数の状態で有効なアクションの例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "戻る",
  state: ["default", "edit", "confirm"], // 複数状態で有効
  onClick: () => window.alert("前の画面に戻ります")
};

<KeyButton 
  action={action} 
  currentState="edit" 
/>`}}}},f=[{label:"保存",state:"edit",onClick:()=>window.alert("保存しました")},{label:"確認",state:"default",onClick:()=>window.alert("確認しました")}],i={args:{action:f,currentState:"default"},parameters:{docs:{description:{story:"複数のアクションをスラッシュ区切りで表示する例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const actions = [
  {
    label: "保存",
    state: "edit",
    onClick: () => window.alert("保存しました")
  },
  {
    label: "確認",
    state: "default",
    onClick: () => window.alert("確認しました")
  }
];

<KeyButton 
  action={actions} 
  currentState="default" 
/>`}}}},s={args:{action:{label:"スペースキー",state:"default",onClick:()=>window.alert("スペースキーが押されました")},currentState:"default",buttonSize:"w-48"},parameters:{docs:{description:{story:"サイズをカスタマイズした大きなボタンの例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "スペースキー",
  state: "default",
  onClick: () => window.alert("スペースキーが押されました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  buttonSize="w-48" 
/>`}}}},l={args:{action:{label:"削除",state:"default",onClick:()=>window.alert("削除しました")},currentState:"default",variant:"danger",textSize:"text-fluid-lg"},parameters:{docs:{description:{story:"バリアントとテキストサイズをカスタマイズした例"},source:{code:`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "削除",
  state: "default",
  onClick: () => window.alert("削除しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  variant="danger" 
  textSize="text-fluid-lg" 
/>`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: simpleAction,
    currentState: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: '基本的なキーボタンの表示例。状態が一致しているためボタンが有効です'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default",
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
/>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    action: simpleAction,
    currentState: 'edit' // currentStateがactionのstateと一致しないため無効
  },
  parameters: {
    docs: {
      description: {
        story: '状態が一致しないためボタンが自動的に無効化された例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default", // 現在状態と不一致
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="edit" // 状態が不一致のため無効
/>\`
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    action: simpleAction,
    currentState: 'default',
    disabled: true // 強制的に無効化
  },
  parameters: {
    docs: {
      description: {
        story: 'disabledプロプで強制的に無効化された例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "保存",
  state: "default",
  onClick: () => window.alert("保存しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  disabled={true} // 強制的に無効化
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    action: multiStateAction,
    currentState: 'edit'
  },
  parameters: {
    docs: {
      description: {
        story: '複数の状態で有効なアクションの例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "戻る",
  state: ["default", "edit", "confirm"], // 複数状態で有効
  onClick: () => window.alert("前の画面に戻ります")
};

<KeyButton 
  action={action} 
  currentState="edit" 
/>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: multipleActions,
    currentState: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: '複数のアクションをスラッシュ区切りで表示する例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const actions = [
  {
    label: "保存",
    state: "edit",
    onClick: () => window.alert("保存しました")
  },
  {
    label: "確認",
    state: "default",
    onClick: () => window.alert("確認しました")
  }
];

<KeyButton 
  action={actions} 
  currentState="default" 
/>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    action: {
      label: 'スペースキー',
      state: 'default',
      onClick: () => window.alert('スペースキーが押されました')
    },
    currentState: 'default',
    buttonSize: 'w-48'
  },
  parameters: {
    docs: {
      description: {
        story: 'サイズをカスタマイズした大きなボタンの例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "スペースキー",
  state: "default",
  onClick: () => window.alert("スペースキーが押されました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  buttonSize="w-48" 
/>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    action: {
      label: '削除',
      state: 'default',
      onClick: () => window.alert('削除しました')
    },
    currentState: 'default',
    variant: 'danger',
    textSize: 'text-fluid-lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'バリアントとテキストサイズをカスタマイズした例'
      },
      source: {
        code: \`import KeyButton from './components/molecules/KeyButton';

const action = {
  label: "削除",
  state: "default",
  onClick: () => window.alert("削除しました")
};

<KeyButton 
  action={action} 
  currentState="default" 
  variant="danger" 
  textSize="text-fluid-lg" 
/>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const A=["Default","Disabled","ForceDisabled","MultiState","MultipleActions","Large","CustomStyle"];export{l as CustomStyle,a as Default,r as Disabled,n as ForceDisabled,s as Large,c as MultiState,i as MultipleActions,A as __namedExportsOrder,z as default};
