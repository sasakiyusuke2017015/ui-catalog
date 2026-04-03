import{S as r}from"./Select-CocRAkzQ.js";import"./iframe-CEBuvpRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvtWZd3u.js";import"./index-CGjmC7Cz.js";import"./useOperationLog-5hpxR7Xt.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Checkbox-B-sv2F6N.js";import"./Icon-DDCqB1fE.js";const C={title:"基本入力/Select",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of options with value and label properties"},value:{control:"text",description:"Currently selected value"},onChange:{action:"changed",description:"Function called when selection changes"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},className:{control:"text",description:"Additional CSS classes"}}},t=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],e={args:{options:t,value:"",onChange:()=>{}}},a={args:{options:t,value:"",placeholder:"Please select an option",onChange:()=>{}}},o={args:{options:t,value:"option2",onChange:()=>{}}},n={args:{options:t,value:"",className:"w-64",onChange:()=>{}}},s={args:{options:[{value:"jp",label:"日本"},{value:"us",label:"アメリカ"},{value:"uk",label:"イギリス"},{value:"fr",label:"フランス"},{value:"de",label:"ドイツ"}],value:"",placeholder:"国を選択してください",onChange:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: '',
    onChange: () => {}
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: '',
    placeholder: 'Please select an option',
    onChange: () => {}
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: 'option2',
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: '',
    className: 'w-64',
    onChange: () => {}
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'jp',
      label: '日本'
    }, {
      value: 'us',
      label: 'アメリカ'
    }, {
      value: 'uk',
      label: 'イギリス'
    }, {
      value: 'fr',
      label: 'フランス'
    }, {
      value: 'de',
      label: 'ドイツ'
    }],
    value: '',
    placeholder: '国を選択してください',
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","WithPlaceholder","WithSelectedValue","WithCustomClass","ManyOptions"];export{e as Default,s as ManyOptions,n as WithCustomClass,a as WithPlaceholder,o as WithSelectedValue,b as __namedExportsOrder,C as default};
