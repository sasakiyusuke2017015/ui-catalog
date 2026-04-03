import{r as n,j as e}from"./iframe-DWeAzsMr.js";import{C as c}from"./Checkbox-DafqBmkx.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-5hpxR7Xt.js";const N={title:"基本入力/Checkbox",component:c,parameters:{layout:"centered",docs:{description:{component:"チェックボックスコンポーネント。サイズ、バリアント、ラベルの有無などをカスタマイズできます。"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"チェックボックスに表示するラベル"},size:{control:"select",options:["small","medium","large"],description:"チェックボックスのサイズ",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["default","primary"],description:"チェックボックスのバリアント",table:{defaultValue:{summary:"default"}}},checked:{control:"boolean",description:"チェック状態"},disabled:{control:"boolean",description:"無効化状態"},className:{control:"text",description:"追加のCSSクラス"},onChange:{action:"changed"}}},b=t=>{const[o,s]=n.useState(t.checked||!1);return e.jsx(c,{...t,checked:o,onChange:r=>{s(r.target.checked),t.onChange&&t.onChange(r)}})},h={render:b,args:{},parameters:{docs:{description:{story:"基本的なチェックボックス"}}}},p={render:b,args:{label:"利用規約に同意する"},parameters:{docs:{description:{story:"ラベル付きチェックボックス"}}}},m={render:b,args:{checked:!0,label:"チェック済み"},parameters:{docs:{description:{story:"チェック済み状態のチェックボックス"}}}},k={render:()=>{const[t,o]=n.useState(!0),[s,r]=n.useState(!0),[d,l]=n.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{size:"small",label:"Small サイズ",checked:t,onChange:a=>o(a.target.checked)}),e.jsx(c,{size:"medium",label:"Medium サイズ（デフォルト）",checked:s,onChange:a=>r(a.target.checked)}),e.jsx(c,{size:"large",label:"Large サイズ",checked:d,onChange:a=>l(a.target.checked)})]})},parameters:{docs:{description:{story:"サイズバリエーション（small, medium, large）"}}}},u={render:()=>{const[t,o]=n.useState(!0),[s,r]=n.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{variant:"default",label:"Default バリアント（青）",checked:t,onChange:d=>o(d.target.checked)}),e.jsx(c,{variant:"primary",label:"Primary バリアント（ティール）",checked:s,onChange:d=>r(d.target.checked)})]})},parameters:{docs:{description:{story:"バリアントによる色の違い"}}}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{disabled:!0,label:"無効（未チェック）"}),e.jsx(c,{disabled:!0,checked:!0,label:"無効（チェック済み）"})]}),parameters:{docs:{description:{story:"無効化状態のチェックボックス"}}}},C={render:()=>{const[t,o]=n.useState(!1),[s,r]=n.useState(!0),[d,l]=n.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{checked:t,onChange:a=>o(a.target.checked)}),e.jsx(c,{checked:s,onChange:a=>r(a.target.checked)}),e.jsx(c,{checked:d,onChange:a=>l(a.target.checked)})]})},parameters:{docs:{description:{story:"ラベルなしのチェックボックス（テーブル等で使用）"}}}},x={render:()=>{const[t,o]=n.useState({option1:!1,option2:!0,option3:!1}),s=a=>i=>{o(f=>({...f,[a]:i.target.checked}))},r=Object.values(t).every(Boolean),d=Object.values(t).some(Boolean)&&!r,l=a=>{const i=a.target.checked;o({option1:i,option2:i,option3:i})};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"border-b pb-2",children:e.jsx(c,{label:"すべて選択",checked:r,onChange:l,className:d?"opacity-70":""})}),e.jsxs("div",{className:"ml-4 flex flex-col gap-2",children:[e.jsx(c,{label:"オプション 1",checked:t.option1,onChange:s("option1")}),e.jsx(c,{label:"オプション 2",checked:t.option2,onChange:s("option2")}),e.jsx(c,{label:"オプション 3",checked:t.option3,onChange:s("option3")})]}),e.jsxs("div",{className:"mt-2 text-fluid-sm text-gray-600",children:["選択中: ",Object.values(t).filter(Boolean).length," / 3"]})]})},parameters:{docs:{description:{story:"複数選択と全選択の連動例"}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: '基本的なチェックボックス'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: '利用規約に同意する'
  },
  parameters: {
    docs: {
      description: {
        story: 'ラベル付きチェックボックス'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: 'チェック済み'
  },
  parameters: {
    docs: {
      description: {
        story: 'チェック済み状態のチェックボックス'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checkedSmall, setCheckedSmall] = useState(true);
    const [checkedMedium, setCheckedMedium] = useState(true);
    const [checkedLarge, setCheckedLarge] = useState(true);
    return <div className="flex flex-col gap-4">
        <Checkbox size="small" label="Small サイズ" checked={checkedSmall} onChange={e => setCheckedSmall(e.target.checked)} />
        <Checkbox size="medium" label="Medium サイズ（デフォルト）" checked={checkedMedium} onChange={e => setCheckedMedium(e.target.checked)} />
        <Checkbox size="large" label="Large サイズ" checked={checkedLarge} onChange={e => setCheckedLarge(e.target.checked)} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'サイズバリエーション（small, medium, large）'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checkedDefault, setCheckedDefault] = useState(true);
    const [checkedPrimary, setCheckedPrimary] = useState(true);
    return <div className="flex flex-col gap-4">
        <Checkbox variant="default" label="Default バリアント（青）" checked={checkedDefault} onChange={e => setCheckedDefault(e.target.checked)} />
        <Checkbox variant="primary" label="Primary バリアント（ティール）" checked={checkedPrimary} onChange={e => setCheckedPrimary(e.target.checked)} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'バリアントによる色の違い'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Checkbox disabled label="無効（未チェック）" />
      <Checkbox disabled checked label="無効（チェック済み）" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '無効化状態のチェックボックス'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    return <div className="flex items-center gap-4">
        <Checkbox checked={checked1} onChange={e => setChecked1(e.target.checked)} />
        <Checkbox checked={checked2} onChange={e => setChecked2(e.target.checked)} />
        <Checkbox checked={checked3} onChange={e => setChecked3(e.target.checked)} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'ラベルなしのチェックボックス（テーブル等で使用）'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState({
      option1: false,
      option2: true,
      option3: false
    });
    const handleChange = (key: keyof typeof options) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setOptions(prev => ({
        ...prev,
        [key]: e.target.checked
      }));
    };
    const allChecked = Object.values(options).every(Boolean);
    const someChecked = Object.values(options).some(Boolean) && !allChecked;
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setOptions({
        option1: checked,
        option2: checked,
        option3: checked
      });
    };
    return <div className="flex flex-col gap-4">
        <div className="border-b pb-2">
          <Checkbox label="すべて選択" checked={allChecked} onChange={handleSelectAll} className={someChecked ? 'opacity-70' : ''} />
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <Checkbox label="オプション 1" checked={options.option1} onChange={handleChange('option1')} />
          <Checkbox label="オプション 2" checked={options.option2} onChange={handleChange('option2')} />
          <Checkbox label="オプション 3" checked={options.option3} onChange={handleChange('option3')} />
        </div>
        <div className="mt-2 text-fluid-sm text-gray-600">
          選択中: {Object.values(options).filter(Boolean).length} / 3
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '複数選択と全選択の連動例'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const L=["Default","WithLabel","Checked","Sizes","Variants","Disabled","WithoutLabel","Interactive"];export{m as Checked,h as Default,g as Disabled,x as Interactive,k as Sizes,u as Variants,p as WithLabel,C as WithoutLabel,L as __namedExportsOrder,N as default};
