import{r as x,j as s}from"./iframe-87Bzd3j4.js";import{T as y}from"./TextArea-BZEDgclP.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";const w={title:"入力/テキスト/TextArea",component:y,parameters:{layout:"centered",docs:{description:{component:"複数行のテキスト入力が可能なテキストエリアコンポーネント。メモや説明文など長文の入力に対応しています。"},source:{transform:(n,o)=>{const{args:e}=o,r=[];e.placeholder&&r.push(`placeholder="${e.placeholder}"`),e.value?r.push(`value="${e.value}"`):e.defaultValue&&r.push(`defaultValue="${e.defaultValue}"`),e.rows&&e.rows!==4&&r.push(`rows={${e.rows}}`),e.disabled&&r.push("disabled"),e.error&&r.push("error"),e.variant&&e.variant!=="default"&&r.push(`variant="${e.variant}"`),e.size&&e.size!=="medium"&&r.push(`size="${e.size}"`);const t=["sdt-textarea",e.className].filter(Boolean).join(" ");return r.push(`className="${t}"`),e.onChange&&r.push("onChange={handleChange}"),`import { TextArea } from './components/atoms/TextArea/TextArea';

<TextArea${r.length>0?" "+r.join(" "):""} />`}}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"プレースホルダーテキスト"},value:{control:"text",description:"入力値(制御されたコンポーネント)"},defaultValue:{control:"text",description:"初期値(非制御コンポーネント)"},rows:{control:"number",description:"表示行数",table:{defaultValue:{summary:"4"}}},variant:{control:"select",options:["default","dark","outlined"],description:"スタイルバリアント",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"サイズ",table:{defaultValue:{summary:"medium"}}},error:{control:"boolean",description:"エラー状態",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"無効化状態"},className:{control:"text",description:"追加のCSSクラス(sdt-textareaを含めない)"},onChange:{action:"changed"},onKeyDown:{action:"keyPressed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}}},a=n=>{const[o,e]=x.useState(n.defaultValue||"");return s.jsx("div",{className:"w-96",children:s.jsx(y,{...n,value:o,onChange:r=>{e(r.target.value),n.onChange&&n.onChange(r)}})})},c={render:a,args:{placeholder:"テキストを入力してください...",className:""},parameters:{docs:{description:{story:"基本的なテキストエリア"}}}},l={render:a,args:{defaultValue:`入力済みのテキスト
複数行のテキストが入力できます。`,placeholder:"テキストを入力してください...",className:""},parameters:{docs:{description:{story:"初期値が設定されたテキストエリア"}}}},d={render:a,args:{placeholder:"エラー状態のテキストエリア",error:!0,className:""},parameters:{docs:{description:{story:"エラー状態のテキストエリア(赤い枠線で表示)"}}}},i={render:a,args:{placeholder:"表示行数を変更した例",rows:8,className:""},parameters:{docs:{description:{story:"表示行数を8行に設定した例"}}}},p={render:a,args:{placeholder:"小サイズのテキストエリア",size:"small",className:""},parameters:{docs:{description:{story:"小サイズのテキストエリア"}}}},m={render:a,args:{placeholder:"大サイズのテキストエリア",size:"large",className:""},parameters:{docs:{description:{story:"大サイズのテキストエリア"}}}},u={render:a,args:{placeholder:"ダークテーマのテキストエリア",variant:"dark",className:""},parameters:{docs:{description:{story:"ダークテーマスタイルのテキストエリア"}},backgrounds:{default:"dark"}}},h={render:a,args:{placeholder:"アウトラインスタイルのテキストエリア",variant:"outlined",className:""},parameters:{docs:{description:{story:"アウトラインスタイルのテキストエリア"}}}},g={render:a,args:{value:`編集不可のテキスト
複数行のテキストです。`,disabled:!0,className:""},parameters:{docs:{description:{story:"無効化されたテキストエリア(操作不可)"}}}},N=()=>{const[n,o]=x.useState(""),[e,r]=x.useState(!1);return s.jsxs("div",{className:"w-96",children:[s.jsxs("label",{htmlFor:"interview-memo",className:"mb-2 block text-fluid-sm font-medium text-gray-700",children:["面談メモ",s.jsx("span",{className:"ml-1 text-red-500",children:"*"})]}),s.jsx(y,{id:"interview-memo",value:n,onChange:t=>{o(t.target.value),r(t.target.value.length===0)},placeholder:"面談の内容やメモを入力してください...",error:e,rows:4}),e&&s.jsx("p",{className:"mt-1 text-fluid-sm text-red-600",children:"この項目は必須です"})]})},f={render:()=>s.jsx(N,{}),parameters:{docs:{description:{story:"FormFieldと組み合わせた実用例（ラベルとエラーメッセージ付き）"}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'テキストを入力してください...',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '基本的なテキストエリア'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    defaultValue: '入力済みのテキスト\\n複数行のテキストが入力できます。',
    placeholder: 'テキストを入力してください...',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '初期値が設定されたテキストエリア'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'エラー状態のテキストエリア',
    error: true,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー状態のテキストエリア(赤い枠線で表示)'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: '表示行数を変更した例',
    rows: 8,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '表示行数を8行に設定した例'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: '小サイズのテキストエリア',
    size: 'small',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '小サイズのテキストエリア'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: '大サイズのテキストエリア',
    size: 'large',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '大サイズのテキストエリア'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'ダークテーマのテキストエリア',
    variant: 'dark',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'ダークテーマスタイルのテキストエリア'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'アウトラインスタイルのテキストエリア',
    variant: 'outlined',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'アウトラインスタイルのテキストエリア'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: '編集不可のテキスト\\n複数行のテキストです。',
    disabled: true,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '無効化されたテキストエリア(操作不可)'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <WithFormFieldComponent />,
  parameters: {
    docs: {
      description: {
        story: 'FormFieldと組み合わせた実用例（ラベルとエラーメッセージ付き）'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const F=["Default","WithValue","WithError","CustomRows","SmallSize","LargeSize","DarkVariant","OutlinedVariant","Disabled","WithFormField"];export{i as CustomRows,u as DarkVariant,c as Default,g as Disabled,m as LargeSize,h as OutlinedVariant,p as SmallSize,d as WithError,f as WithFormField,l as WithValue,F as __namedExportsOrder,w as default};
