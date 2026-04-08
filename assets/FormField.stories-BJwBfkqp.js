import{F as c}from"./FormField-CIjvcRtx.js";import"./iframe-Dr-9ywM0.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-DJm5h_uR.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-B4-Rqhyi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Text-D-hslIek.js";import"./colors-BiHXYRGc.js";const S={title:"フォーム/フィールド/FormField",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{label:{control:"text",description:"フィールドのラベル"},error:{control:"text",description:"エラーメッセージ"},required:{control:"boolean",description:"必須項目かどうか"},type:{control:"select",options:["text","email","password","number","tel"],description:"入力タイプ"},placeholder:{control:"text",description:"プレースホルダーテキスト"}}},e={args:{label:"お名前",placeholder:"お名前を入力してください"}},r={args:{label:"メールアドレス",type:"email",placeholder:"example@example.com",required:!0}},a={args:{label:"パスワード",type:"password",placeholder:"パスワードを入力",required:!0,error:"パスワードは8文字以上で入力してください"}},o={args:{label:"年齢",type:"number",placeholder:"年齢を入力",required:!0}},t={args:{label:"電話番号",type:"tel",placeholder:"090-1234-5678"}},s={args:{placeholder:"ラベルなしの入力フィールド"}},n={args:{variant:"question",label:"お名前を教えてください",description:"フルネームでご記入ください。",placeholder:"山田 太郎",required:!0}},l={args:{variant:"question",label:"ご意見・ご要望",description:"改善してほしい点があれば自由にご記入ください。",placeholder:"自由にご記入ください"}},p={args:{variant:"question",label:"メールアドレス",description:"確認メールの送信先として使用します。",type:"email",placeholder:"example@example.com",required:!0,error:"有効なメールアドレスを入力してください"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'question',
    label: 'お名前を教えてください',
    description: 'フルネームでご記入ください。',
    placeholder: '山田 太郎',
    required: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'question',
    label: 'ご意見・ご要望',
    description: '改善してほしい点があれば自由にご記入ください。',
    placeholder: '自由にご記入ください'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'question',
    label: 'メールアドレス',
    description: '確認メールの送信先として使用します。',
    type: 'email',
    placeholder: 'example@example.com',
    required: true,
    error: '有効なメールアドレスを入力してください'
  }
}`,...p.parameters?.docs?.source}}};const F=["Default","Required","WithError","NumberInput","PhoneInput","WithoutLabel","QuestionRequired","QuestionOptional","QuestionWithError"];export{e as Default,o as NumberInput,t as PhoneInput,l as QuestionOptional,n as QuestionRequired,p as QuestionWithError,r as Required,a as WithError,s as WithoutLabel,F as __namedExportsOrder,S as default};
