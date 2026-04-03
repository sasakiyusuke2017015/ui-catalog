import{Q as o}from"./QACardList-CSUhVS7l.js";import"./iframe-TXWPROLT.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const d={title:"データ表示/QACardList",component:o,tags:["autodocs"],parameters:{layout:"padded"}},t=[{question:"今日の業務で最も成果があったことは何ですか？",answer:"プロジェクトの設計レビューを完了しました。"},{question:"改善したい点はありますか？",answer:"コードレビューのスピードを上げたいです。"},{question:"明日の目標は？",answer:"テストカバレッジを80%以上にする。"}],e={args:{items:t}},s={args:{items:t,variant:"blue"}},a={args:{items:t,infoMessage:"回答内容を確認してください。送信後の変更はできません。"}},r={args:{items:t,aiComment:"全体的に具体的な目標が設定されており、良い振り返りです。明日のテストカバレッジ目標も明確ですね。"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'blue'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    infoMessage: '回答内容を確認してください。送信後の変更はできません。'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    aiComment: '全体的に具体的な目標が設定されており、良い振り返りです。明日のテストカバレッジ目標も明確ですね。'
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","BlueVariant","WithInfoMessage","WithAIComment"];export{s as BlueVariant,e as Default,r as WithAIComment,a as WithInfoMessage,l as __namedExportsOrder,d as default};
