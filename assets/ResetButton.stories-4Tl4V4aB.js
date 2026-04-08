import{j as e,r as n}from"./iframe-WnPGq7kF.js";import{R as s}from"./ResetButton-C9aycghn.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BsFv_1g2.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-EuWHROt9.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Spinner-SGqrW4ZB.js";import"./colors-BiHXYRGc.js";const E={title:"入力/ボタン/ResetButton",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
ResetButtonコンポーネント。以下の特徴があります:

- **統一デザイン**: dangerバリアント + smallサイズで統一
- **回転アイコン**: リセット用のアイコンを自動表示
- **簡潔なAPI**: onClick と label のみで使用可能

フォームのリセットやフィルターのクリアに使用します。
        `}}},argTypes:{onClick:{action:"clicked",description:"クリック時のハンドラ"},label:{control:"text",description:"ボタンラベル",table:{defaultValue:{summary:"リセット"}}},disabled:{control:"boolean",description:"無効化状態",table:{defaultValue:{summary:!1}}}}},l={args:{onClick:()=>alert("リセットされました")},parameters:{docs:{description:{story:"基本的なリセットボタン。デフォルトラベルは「リセット」。"}}}},c={args:{label:"クリア",onClick:()=>alert("クリアされました")},parameters:{docs:{description:{story:"labelプロパティでテキストをカスタマイズできます。"}}}},i={args:{disabled:!0,onClick:()=>{}},parameters:{docs:{description:{story:"無効化されたリセットボタン。クリックできません。"}}}},y=()=>{const[u,t]=n.useState("山田太郎"),[x,a]=n.useState("yamada@example.com"),b=()=>{t(""),a("")};return e.jsxs("div",{className:"w-80 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"ユーザー情報入力"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-fluid-sm font-medium text-gray-700",children:"名前"}),e.jsx("input",{type:"text",value:u,onChange:r=>t(r.target.value),className:"w-full rounded border border-gray-300 px-3 py-2"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-fluid-sm font-medium text-gray-700",children:"メールアドレス"}),e.jsx("input",{type:"email",value:x,onChange:r=>a(r.target.value),className:"w-full rounded border border-gray-300 px-3 py-2"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(s,{onClick:b}),e.jsx("button",{className:"rounded bg-blue-500 px-4 py-2 text-fluid-sm text-white hover:bg-blue-600",children:"保存"})]})]})]})},d={render:()=>e.jsx(y,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"フォーム入力をリセットする実用例。"}}}},h=()=>{const[u,t]=n.useState("検索ワード"),[x,a]=n.useState("カテゴリA"),[b,r]=n.useState("アクティブ"),g=()=>{t(""),a(""),r("")};return e.jsxs("div",{className:"w-96 rounded-lg bg-gray-50 p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:"検索フィルター"}),e.jsx(s,{label:"フィルターをクリア",onClick:g})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-fluid-xs font-semibold text-gray-600",children:"検索"}),e.jsx("input",{type:"text",value:u,onChange:o=>t(o.target.value),className:"w-full rounded border border-gray-300 px-3 py-2 text-fluid-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-fluid-xs font-semibold text-gray-600",children:"カテゴリ"}),e.jsx("input",{type:"text",value:x,onChange:o=>a(o.target.value),className:"w-full rounded border border-gray-300 px-3 py-2 text-fluid-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-fluid-xs font-semibold text-gray-600",children:"ステータス"}),e.jsx("input",{type:"text",value:b,onChange:o=>r(o.target.value),className:"w-full rounded border border-gray-300 px-3 py-2 text-fluid-sm"})]})]})]})},m={render:()=>e.jsx(h,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"フィルター条件をクリアする実用例。"}}}},p={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{label:"リセット",onClick:()=>{}}),e.jsx(s,{label:"クリア",onClick:()=>{}}),e.jsx(s,{label:"初期化",onClick:()=>{}}),e.jsx(s,{label:"元に戻す",onClick:()=>{}})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"様々なラベルのバリエーション。用途に応じて選択できます。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('リセットされました')
  },
  parameters: {
    docs: {
      description: {
        story: '基本的なリセットボタン。デフォルトラベルは「リセット」。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'クリア',
    onClick: () => alert('クリアされました')
  },
  parameters: {
    docs: {
      description: {
        story: 'labelプロパティでテキストをカスタマイズできます。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onClick: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: '無効化されたリセットボタン。クリックできません。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FormResetExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'フォーム入力をリセットする実用例。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FilterClearExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'フィルター条件をクリアする実用例。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <ResetButton label="リセット" onClick={() => {}} />
      <ResetButton label="クリア" onClick={() => {}} />
      <ResetButton label="初期化" onClick={() => {}} />
      <ResetButton label="元に戻す" onClick={() => {}} />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '様々なラベルのバリエーション。用途に応じて選択できます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const F=["Basic","CustomLabel","Disabled","FormReset","FilterClear","LabelVariations"];export{l as Basic,c as CustomLabel,i as Disabled,m as FilterClear,d as FormReset,p as LabelVariations,F as __namedExportsOrder,E as default};
