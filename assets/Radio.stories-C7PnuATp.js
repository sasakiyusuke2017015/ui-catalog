import{j as e,r as p}from"./iframe-CUmTO3gC.js";import{R as s}from"./Radio-Cn7_uWtO.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";const x={title:"入力/選択/Radio",component:s,parameters:{layout:"centered",docs:{description:{component:"ラジオボタンコンポーネント。サイズ、バリアント、ラベルの有無などをカスタマイズできます。"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"ラジオボタンに表示するラベル"},size:{control:"select",options:["small","medium","large"],description:"ラジオボタンのサイズ",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["default","primary"],description:"ラジオボタンのバリアント",table:{defaultValue:{summary:"default"}}},checked:{control:"boolean",description:"選択状態"},disabled:{control:"boolean",description:"無効化状態"},className:{control:"text",description:"追加のCSSクラス"},onChange:{action:"changed"}}},t={args:{},parameters:{docs:{description:{story:"基本的なラジオボタン"}}}},o={args:{label:"オプション1",name:"option"},parameters:{docs:{description:{story:"ラベル付きラジオボタン"}}}},d={args:{checked:!0,label:"選択済み",name:"checked-option",readOnly:!0},parameters:{docs:{description:{story:"選択済み状態のラジオボタン"}}}},n={render:()=>{const[a,r]=p.useState("medium");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{size:"small",label:"Small サイズ",name:"size-demo",value:"small",checked:a==="small",onChange:()=>r("small")}),e.jsx(s,{size:"medium",label:"Medium サイズ（デフォルト）",name:"size-demo",value:"medium",checked:a==="medium",onChange:()=>r("medium")}),e.jsx(s,{size:"large",label:"Large サイズ",name:"size-demo",value:"large",checked:a==="large",onChange:()=>r("large")})]})},parameters:{docs:{description:{story:"サイズバリエーション（small, medium, large）"}}}},c={render:()=>{const[a,r]=p.useState("default");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{variant:"default",label:"Default バリアント（青）",name:"variant-demo",value:"default",checked:a==="default",onChange:()=>r("default")}),e.jsx(s,{variant:"primary",label:"Primary バリアント（ティール）",name:"variant-demo",value:"primary",checked:a==="primary",onChange:()=>r("primary")})]})},parameters:{docs:{description:{story:"バリアントによる色の違い"}}}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{disabled:!0,label:"無効（未選択）",name:"disabled-demo-1"}),e.jsx(s,{disabled:!0,checked:!0,label:"無効（選択済み）",name:"disabled-demo-2",readOnly:!0})]}),parameters:{docs:{description:{story:"無効化状態のラジオボタン"}}}},m={render:()=>{const[a,r]=p.useState("option2"),u=[{value:"option1",label:"オプション 1"},{value:"option2",label:"オプション 2"},{value:"option3",label:"オプション 3"},{value:"option4",label:"オプション 4（無効）",disabled:!0}];return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-fluid-sm font-medium text-gray-700",children:"お好みのオプションを選択してください："}),u.map(l=>e.jsx(s,{name:"radio-group",value:l.value,label:l.label,checked:a===l.value,onChange:()=>r(l.value),disabled:l.disabled},l.value)),e.jsxs("p",{className:"mt-2 text-fluid-sm text-gray-600",children:["選択中: ",u.find(l=>l.value===a)?.label||"未選択"]})]})},parameters:{docs:{description:{story:"ラジオボタングループの例"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: '基本的なラジオボタン'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'オプション1',
    name: 'option'
  },
  parameters: {
    docs: {
      description: {
        story: 'ラベル付きラジオボタン'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '選択済み',
    name: 'checked-option',
    readOnly: true
  },
  parameters: {
    docs: {
      description: {
        story: '選択済み状態のラジオボタン'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('medium');
    return <div className="flex flex-col gap-4">
        <Radio size="small" label="Small サイズ" name="size-demo" value="small" checked={selected === 'small'} onChange={() => setSelected('small')} />
        <Radio size="medium" label="Medium サイズ（デフォルト）" name="size-demo" value="medium" checked={selected === 'medium'} onChange={() => setSelected('medium')} />
        <Radio size="large" label="Large サイズ" name="size-demo" value="large" checked={selected === 'large'} onChange={() => setSelected('large')} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'サイズバリエーション（small, medium, large）'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('default');
    return <div className="flex flex-col gap-4">
        <Radio variant="default" label="Default バリアント（青）" name="variant-demo" value="default" checked={selected === 'default'} onChange={() => setSelected('default')} />
        <Radio variant="primary" label="Primary バリアント（ティール）" name="variant-demo" value="primary" checked={selected === 'primary'} onChange={() => setSelected('primary')} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'バリアントによる色の違い'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Radio disabled label="無効（未選択）" name="disabled-demo-1" />
      <Radio disabled checked label="無効（選択済み）" name="disabled-demo-2" readOnly />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '無効化状態のラジオボタン'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option2');
    const options = [{
      value: 'option1',
      label: 'オプション 1'
    }, {
      value: 'option2',
      label: 'オプション 2'
    }, {
      value: 'option3',
      label: 'オプション 3'
    }, {
      value: 'option4',
      label: 'オプション 4（無効）',
      disabled: true
    }];
    return <div className="flex flex-col gap-3">
        <p className="text-fluid-sm font-medium text-gray-700">お好みのオプションを選択してください：</p>
        {options.map(option => <Radio key={option.value} name="radio-group" value={option.value} label={option.label} checked={selected === option.value} onChange={() => setSelected(option.value)} disabled={option.disabled} />)}
        <p className="mt-2 text-fluid-sm text-gray-600">
          選択中: {options.find(o => o.value === selected)?.label || '未選択'}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'ラジオボタングループの例'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const h=["Default","WithLabel","Checked","Sizes","Variants","Disabled","RadioGroup"];export{d as Checked,t as Default,i as Disabled,m as RadioGroup,n as Sizes,c as Variants,o as WithLabel,h as __namedExportsOrder,x as default};
