import{r as g,j as h}from"./iframe-CUmTO3gC.js";import{I as m}from"./Input-CORhAtC7.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-BESojGLS.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const T={title:"入力/テキスト/Input",component:m,parameters:{layout:"centered",docs:{description:{component:"汎用的な入力フィールドコンポーネント。テキスト、パスワード、メール、数値など様々な入力タイプに対応しています。"},source:{transform:(a,i)=>{const{args:e}=i,r=[];e.type&&e.type!=="text"&&r.push(`type="${e.type}"`),e.placeholder&&r.push(`placeholder="${e.placeholder}"`),e.value?r.push(`value="${e.value}"`):e.defaultValue&&r.push(`defaultValue="${e.defaultValue}"`),e.disabled&&r.push("disabled");const u=["sdt-input",e.className].filter(Boolean).join(" ");return r.push(`className="${u}"`),e.onChange&&r.push("onChange={handleChange}"),`import { Input } from './components/atoms/Input/Input';

<Input${r.length>0?" "+r.join(" "):""} />`}}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number","tel","url"],description:"入力フィールドのタイプ",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"プレースホルダーテキスト"},value:{control:"text",description:"入力値(制御されたコンポーネント)"},defaultValue:{control:"text",description:"初期値(非制御コンポーネント)"},disabled:{control:"boolean",description:"無効化状態"},className:{control:"text",description:"追加のCSSクラス(sdt-inputを含めない)"},onChange:{action:"changed"},onKeyDown:{action:"keyPressed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}}},s=a=>{const[i,e]=g.useState(a.defaultValue||"");return h.jsx(m,{...a,value:i,onChange:r=>{e(r.target.value),a.onChange&&a.onChange(r)}})},n={render:s,args:{placeholder:"テキストを入力してください",className:""},parameters:{docs:{description:{story:"基本的なテキスト入力フィールド"}}}},o={render:s,args:{defaultValue:"入力済みのテキスト",placeholder:"テキストを入力してください",className:""},parameters:{docs:{description:{story:"初期値が設定された入力フィールド"}}}},t={render:s,args:{type:"password",placeholder:"パスワードを入力してください",className:""},parameters:{docs:{description:{story:"パスワード入力用フィールド(文字がマスクされます)"}}}},c={render:s,args:{type:"email",placeholder:"メールアドレスを入力してください",className:""},parameters:{docs:{description:{story:"メールアドレス入力用フィールド(ブラウザのバリデーション機能付き)"}}}},p={render:s,args:{type:"number",placeholder:"数値を入力してください",className:""},parameters:{docs:{description:{story:"数値入力用フィールド(スピナーコントロール付き)"}}}},l={render:s,args:{value:"編集不可のテキスト",disabled:!0,className:""},parameters:{docs:{description:{story:"無効化された入力フィールド(操作不可)"}}}},d={render:s,args:{placeholder:"カスタムスタイル付き",className:"border-blue-500 focus:ring-blue-500"},parameters:{docs:{description:{story:"カスタムCSSクラスでスタイルをカスタマイズした例"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'テキストを入力してください',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '基本的なテキスト入力フィールド'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    defaultValue: '入力済みのテキスト',
    placeholder: 'テキストを入力してください',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '初期値が設定された入力フィールド'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'password',
    placeholder: 'パスワードを入力してください',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'パスワード入力用フィールド(文字がマスクされます)'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'email',
    placeholder: 'メールアドレスを入力してください',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'メールアドレス入力用フィールド(ブラウザのバリデーション機能付き)'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    type: 'number',
    placeholder: '数値を入力してください',
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '数値入力用フィールド(スピナーコントロール付き)'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: '編集不可のテキスト',
    disabled: true,
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: '無効化された入力フィールド(操作不可)'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    placeholder: 'カスタムスタイル付き',
    className: 'border-blue-500 focus:ring-blue-500'
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムCSSクラスでスタイルをカスタマイズした例'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const v=["Default","WithValue","Password","Email","Number","Disabled","CustomStyle"];export{d as CustomStyle,n as Default,l as Disabled,c as Email,p as Number,t as Password,o as WithValue,v as __namedExportsOrder,T as default};
