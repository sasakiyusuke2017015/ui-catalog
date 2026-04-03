import{F as l}from"./FormField-_jwbNCGv.js";import"./iframe-C6Pnx79y.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-Bl5hBXoy.js";import"./useOperationLog-5hpxR7Xt.js";import"./Icon-BgpW1Y_U.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const b={title:"フォーム/FormField",component:l,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{label:{control:"text",description:"フィールドのラベル"},error:{control:"text",description:"エラーメッセージ"},required:{control:"boolean",description:"必須項目かどうか"},type:{control:"select",options:["text","email","password","number","tel"],description:"入力タイプ"},placeholder:{control:"text",description:"プレースホルダーテキスト"}}},e={args:{label:"お名前",placeholder:"お名前を入力してください"}},r={args:{label:"メールアドレス",type:"email",placeholder:"example@example.com",required:!0}},a={args:{label:"パスワード",type:"password",placeholder:"パスワードを入力",required:!0,error:"パスワードは8文字以上で入力してください"}},o={args:{label:"年齢",type:"number",placeholder:"年齢を入力",required:!0}},t={args:{label:"電話番号",type:"tel",placeholder:"090-1234-5678"}},s={args:{placeholder:"ラベルなしの入力フィールド"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'お名前',
    placeholder: 'お名前を入力してください'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'メールアドレス',
    type: 'email',
    placeholder: 'example@example.com',
    required: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'パスワード',
    type: 'password',
    placeholder: 'パスワードを入力',
    required: true,
    error: 'パスワードは8文字以上で入力してください'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: '年齢',
    type: 'number',
    placeholder: '年齢を入力',
    required: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: '電話番号',
    type: 'tel',
    placeholder: '090-1234-5678'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'ラベルなしの入力フィールド'
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","Required","WithError","NumberInput","PhoneInput","WithoutLabel"];export{e as Default,o as NumberInput,t as PhoneInput,r as Required,a as WithError,s as WithoutLabel,h as __namedExportsOrder,b as default};
