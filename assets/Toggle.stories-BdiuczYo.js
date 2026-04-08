import{j as e,r as l}from"./iframe-BZQgagrY.js";import{T as a}from"./Toggle-DU3L2c_f.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";const S={title:"入力/選択/Toggle",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Toggleコンポーネント。以下の機能をサポート:

- **2つのバリアント**: default (blue/red), primary (teal/red)
- **3つのサイズ**: small, medium, large
- **ラベル**: オプショナルなラベル表示
- **カスタム角丸**: toggleRadiusで形状を変更可能

設定のON/OFF、フィーチャーフラグ、表示切り替えなどに使用します。
        `}}},argTypes:{label:{control:"text",description:"ラベルテキスト"},checked:{control:"boolean",description:"チェック状態",table:{defaultValue:{summary:!1}}},onChange:{action:"changed",description:"変更時のコールバック"},size:{control:{type:"select"},options:["small","medium","large"],description:"サイズ",table:{defaultValue:{summary:"medium"}}},variant:{control:{type:"select"},options:["default","primary"],description:"バリアント",table:{defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"無効化",table:{defaultValue:{summary:!1}}},toggleRadius:{control:"text",description:"トグルスイッチの角丸"}}},f=()=>{const[s,t]=l.useState(!1);return e.jsx(a,{label:"通知を有効にする",checked:s,onChange:r=>t(r.target.checked)})},n={render:()=>e.jsx(f,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"基本的なトグルスイッチ。ON/OFFを切り替えられます。"}}}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Small",size:"small",checked:!0}),e.jsx(a,{label:"Medium",size:"medium",checked:!0}),e.jsx(a,{label:"Large",size:"large",checked:!0})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"3つのサイズ（small, medium, large）を比較できます。"}}}},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Default (Blue/Red)",variant:"default",checked:!0}),e.jsx(a,{label:"Primary (Teal/Red)",variant:"primary",checked:!0})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"2つのバリアント（default, primary）を比較できます。"}}}},u={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"無効化（OFF）",disabled:!0,checked:!1}),e.jsx(a,{label:"無効化（ON）",disabled:!0,checked:!0})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"無効化されたトグル。状態を変更できません。"}}}},p={render:()=>{const[s,t]=l.useState(!0);return e.jsx(a,{checked:s,onChange:r=>t(r.target.checked)})},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ラベルなしのトグル。アイコンとして使用できます。"}}}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"デフォルト（丸）",checked:!0,toggleRadius:"9999px"}),e.jsx(a,{label:"角丸（8px）",checked:!0,toggleRadius:"8px"}),e.jsx(a,{label:"角丸（4px）",checked:!0,toggleRadius:"4px"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"toggleRadiusで角丸をカスタマイズできます。"}}}},k=()=>{const[s,t]=l.useState(!0),[r,c]=l.useState(!1),[d,y]=l.useState(!0);return e.jsxs("div",{className:"w-96 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"設定"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"通知を有効にする",checked:s,onChange:o=>t(o.target.checked)}),e.jsx(a,{label:"ダークモード",checked:r,onChange:o=>c(o.target.checked)}),e.jsx(a,{label:"自動保存",checked:d,onChange:o=>y(o.target.checked)})]})]})},h={render:()=>e.jsx(k,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"設定画面での使用例。複数のトグルスイッチを組み合わせます。"}}}},v=()=>{const[s,t]=l.useState({newDashboard:!0,experimentalUI:!1,betaFeatures:!1}),r=c=>{t(d=>({...d,[c]:!d[c]}))};return e.jsxs("div",{className:"w-96 rounded-lg bg-gray-50 p-6",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"機能フラグ"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{label:"新しいダッシュボード",variant:"primary",checked:s.newDashboard,onChange:()=>r("newDashboard")}),e.jsx("p",{className:"ml-8 mt-1 text-fluid-xs text-gray-600",children:"新しいダッシュボードUIを使用します"})]}),e.jsxs("div",{children:[e.jsx(a,{label:"実験的UI",variant:"primary",checked:s.experimentalUI,onChange:()=>r("experimentalUI")}),e.jsx("p",{className:"ml-8 mt-1 text-fluid-xs text-gray-600",children:"最新の実験的な機能を試せます"})]}),e.jsxs("div",{children:[e.jsx(a,{label:"ベータ機能",variant:"primary",checked:s.betaFeatures,onChange:()=>r("betaFeatures")}),e.jsx("p",{className:"ml-8 mt-1 text-fluid-xs text-gray-600",children:"ベータ版の機能にアクセスできます"})]})]})]})},b={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"機能フラグ管理画面の例。説明テキスト付き。"}}}},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"Default Variant"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"OFF",variant:"default",checked:!1}),e.jsx(a,{label:"ON",variant:"default",checked:!0}),e.jsx(a,{label:"OFF (Disabled)",variant:"default",checked:!1,disabled:!0}),e.jsx(a,{label:"ON (Disabled)",variant:"default",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"Primary Variant"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"OFF",variant:"primary",checked:!1}),e.jsx(a,{label:"ON",variant:"primary",checked:!0}),e.jsx(a,{label:"OFF (Disabled)",variant:"primary",checked:!1,disabled:!0}),e.jsx(a,{label:"ON (Disabled)",variant:"primary",checked:!0,disabled:!0})]})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"すべてのバリアントと状態を一覧表示。"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '基本的なトグルスイッチ。ON/OFFを切り替えられます。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toggle label="Small" size="small" checked />
      <Toggle label="Medium" size="medium" checked />
      <Toggle label="Large" size="large" checked />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '3つのサイズ（small, medium, large）を比較できます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toggle label="Default (Blue/Red)" variant="default" checked />
      <Toggle label="Primary (Teal/Red)" variant="primary" checked />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '2つのバリアント（default, primary）を比較できます。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toggle label="無効化（OFF）" disabled checked={false} />
      <Toggle label="無効化（ON）" disabled checked={true} />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '無効化されたトグル。状態を変更できません。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Toggle checked={checked} onChange={e => setChecked(e.target.checked)} />;
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ラベルなしのトグル。アイコンとして使用できます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Toggle label="デフォルト（丸）" checked toggleRadius="9999px" />
      <Toggle label="角丸（8px）" checked toggleRadius="8px" />
      <Toggle label="角丸（4px）" checked toggleRadius="4px" />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'toggleRadiusで角丸をカスタマイズできます。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '設定画面での使用例。複数のトグルスイッチを組み合わせます。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FeatureFlagsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '機能フラグ管理画面の例。説明テキスト付き。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-fluid-sm font-semibold">Default Variant</h4>
        <div className="space-y-2">
          <Toggle label="OFF" variant="default" checked={false} />
          <Toggle label="ON" variant="default" checked={true} />
          <Toggle label="OFF (Disabled)" variant="default" checked={false} disabled />
          <Toggle label="ON (Disabled)" variant="default" checked={true} disabled />
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-fluid-sm font-semibold">Primary Variant</h4>
        <div className="space-y-2">
          <Toggle label="OFF" variant="primary" checked={false} />
          <Toggle label="ON" variant="primary" checked={true} />
          <Toggle label="OFF (Disabled)" variant="primary" checked={false} disabled />
          <Toggle label="ON (Disabled)" variant="primary" checked={true} disabled />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'すべてのバリアントと状態を一覧表示。'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const O=["Basic","Sizes","Variants","Disabled","WithoutLabel","CustomRadius","SettingsPanel","FeatureFlags","AllStates"];export{x as AllStates,n as Basic,g as CustomRadius,u as Disabled,b as FeatureFlags,h as SettingsPanel,i as Sizes,m as Variants,p as WithoutLabel,O as __namedExportsOrder,S as default};
