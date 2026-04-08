import{j as e,r as t}from"./iframe-CAHZyj7a.js";import{S as a}from"./Segment-Cl72-EUf.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-B9P1-3Zv.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./proxy-CwEQ4o8n.js";const E={title:"入力/選択/Segment",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Segmentコンポーネント。以下の機能をサポート:

- **framer-motion アニメーション**: 滑らかなスプリングアニメーション
- **等間隔幅**: ボタンが均等に配置
- **Green系統の立体的デザイン**: 多層シャドウとグラデーション
- **アイコン + ラベル表示**: アイコンとテキストの組み合わせ可能
- **完全な左右対称アニメーション**: 自然な動き
- **3つのサイズ**: small, medium, large

表示モード切り替え、フィルター選択、タブUIなどに使用します。
        `}}},argTypes:{value:{control:"text",description:"現在選択されている値"},onChange:{action:"changed",description:"値変更時のコールバック"},size:{control:{type:"select"},options:["small","medium","large"],description:"サイズ",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"無効化",table:{defaultValue:{summary:!1}}},borderRadius:{control:"text",description:"角丸"}}},x=()=>{const[s,o]=t.useState("table");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"表示モード切り替え"}),e.jsx(a,{value:s,onChange:o,options:[{value:"table",label:"テーブル",icon:"list"},{value:"card",label:"カード",icon:"dashboard"}],size:"medium"})]}),e.jsx("div",{className:"rounded-lg bg-gray-50 p-4",children:e.jsxs("p",{className:"text-fluid-sm text-gray-600",children:["現在の表示モード: ",e.jsx("span",{className:"font-semibold",children:s})]})})]})},d={render:()=>e.jsx(x,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:`
基本的なセグメントコントロール。2つの選択肢（テーブル/カード）を切り替えます。

特徴:
- framer-motionによる滑らかなアニメーション
- 等間隔幅のボタン配置
- Green系統の立体的なデザイン
- アイコン + ラベル表示対応
- 完全な左右対称アニメーション
        `}}}},h=()=>{const[s,o]=t.useState("list");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"表示形式"}),e.jsx(a,{value:s,onChange:o,options:[{value:"list",label:"リスト",icon:"list"},{value:"grid",label:"グリッド",icon:"dashboard"},{value:"timeline",label:"タイムライン",icon:"calendar"}],size:"medium"})]}),e.jsx("div",{className:"rounded-lg bg-gray-50 p-4",children:e.jsxs("p",{className:"text-fluid-sm text-gray-600",children:["選択中: ",e.jsx("span",{className:"font-semibold",children:s})]})})]})},m={render:()=>e.jsx(h,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"3つの選択肢を持つセグメントコントロール。左右対称なアニメーションを確認できます。"}}}},c={render:()=>{const[s,o]=t.useState("option1"),[n,l]=t.useState("option1"),[r,i]=t.useState("option1");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"Small"}),e.jsx(a,{value:s,onChange:o,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"small"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"Medium"}),e.jsx(a,{value:n,onChange:l,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"Large"}),e.jsx(a,{value:r,onChange:i,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"large"})]})]})},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"セグメントコントロールの3つのサイズ（small, medium, large）を比較できます。"}}}},g=()=>{const[s,o]=t.useState("all");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"フィルター"}),e.jsx(a,{value:s,onChange:o,options:[{value:"all",label:"すべて"},{value:"active",label:"アクティブ"},{value:"archived",label:"アーカイブ"}],size:"medium"})]}),e.jsx("div",{className:"rounded-lg bg-gray-50 p-4",children:e.jsxs("p",{className:"text-fluid-sm text-gray-600",children:["フィルター: ",e.jsx("span",{className:"font-semibold",children:s})]})})]})},u={render:()=>e.jsx(g,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"アイコンなしのセグメントコントロール。テキストのみで表示します。"}}}},p={render:()=>{const[s,o]=t.useState("option1");return e.jsx("div",{className:"space-y-4",children:e.jsx(a,{value:s,onChange:o,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"medium",disabled:!0})})},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"無効化されたセグメントコントロール。選択を変更できません。"}}}},v={render:()=>{const[s,o]=t.useState("option1"),[n,l]=t.useState("option1"),[r,i]=t.useState("option1");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"デフォルト（0.375rem）"}),e.jsx(a,{value:s,onChange:o,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"角丸（8px）"}),e.jsx(a,{value:n,onChange:l,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"medium",borderRadius:"8px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 text-fluid-sm font-semibold",children:"完全な丸（50px）"}),e.jsx(a,{value:r,onChange:i,options:[{value:"option1",label:"オプション1"},{value:"option2",label:"オプション2"}],size:"medium",borderRadius:"50px"})]})]})},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"borderRadiusで角丸をカスタマイズできます。"}}}},j=()=>{const[s,o]=t.useState("table"),[n,l]=t.useState("asc"),[r,i]=t.useState("none");return e.jsxs("div",{className:"w-96 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"表示設定"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-fluid-sm font-medium text-gray-700",children:"表示モード"}),e.jsx(a,{value:s,onChange:o,options:[{value:"table",label:"テーブル",icon:"list"},{value:"card",label:"カード",icon:"dashboard"}],size:"medium"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-fluid-sm font-medium text-gray-700",children:"並び順"}),e.jsx(a,{value:n,onChange:l,options:[{value:"asc",label:"昇順"},{value:"desc",label:"降順"}],size:"medium"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-fluid-sm font-medium text-gray-700",children:"グループ化"}),e.jsx(a,{value:r,onChange:i,options:[{value:"none",label:"なし"},{value:"date",label:"日付"},{value:"category",label:"カテゴリ"}],size:"medium"})]})]})]})},b={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"設定パネルでの使用例。複数のセグメントコントロールを組み合わせます。"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: \`
基本的なセグメントコントロール。2つの選択肢（テーブル/カード）を切り替えます。

特徴:
- framer-motionによる滑らかなアニメーション
- 等間隔幅のボタン配置
- Green系統の立体的なデザイン
- アイコン + ラベル表示対応
- 完全な左右対称アニメーション
        \`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ThreeOptionsExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '3つの選択肢を持つセグメントコントロール。左右対称なアニメーションを確認できます。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [small, setSmall] = useState('option1');
    const [medium, setMedium] = useState('option1');
    const [large, setLarge] = useState('option1');
    return <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">Small</h4>
          <Segment value={small} onChange={setSmall} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="small" />
        </div>
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">Medium</h4>
          <Segment value={medium} onChange={setMedium} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="medium" />
        </div>
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">Large</h4>
          <Segment value={large} onChange={setLarge} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="large" />
        </div>
      </div>;
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'セグメントコントロールの3つのサイズ（small, medium, large）を比較できます。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <NoIconExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'アイコンなしのセグメントコントロール。テキストのみで表示します。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <div className="space-y-4">
        <Segment value={value} onChange={setValue} options={[{
        value: 'option1',
        label: 'オプション1'
      }, {
        value: 'option2',
        label: 'オプション2'
      }]} size="medium" disabled />
      </div>;
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '無効化されたセグメントコントロール。選択を変更できません。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('option1');
    const [value2, setValue2] = useState('option1');
    const [value3, setValue3] = useState('option1');
    return <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">デフォルト（0.375rem）</h4>
          <Segment value={value1} onChange={setValue1} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="medium" />
        </div>
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">角丸（8px）</h4>
          <Segment value={value2} onChange={setValue2} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="medium" borderRadius="8px" />
        </div>
        <div>
          <h4 className="mb-2 text-fluid-sm font-semibold">完全な丸（50px）</h4>
          <Segment value={value3} onChange={setValue3} options={[{
          value: 'option1',
          label: 'オプション1'
        }, {
          value: 'option2',
          label: 'オプション2'
        }]} size="medium" borderRadius="50px" />
        </div>
      </div>;
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'borderRadiusで角丸をカスタマイズできます。'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsPanelExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '設定パネルでの使用例。複数のセグメントコントロールを組み合わせます。'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const M=["Basic","ThreeOptions","Sizes","NoIcon","Disabled","CustomRadius","SettingsPanel"];export{d as Basic,v as CustomRadius,p as Disabled,u as NoIcon,b as SettingsPanel,c as Sizes,m as ThreeOptions,M as __namedExportsOrder,E as default};
