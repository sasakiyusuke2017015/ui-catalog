import{A as l}from"./ActionBreadcrumb-BdqyNu7g.js";import"./iframe-BwfVzy39.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";const i={title:"ナビゲーション/パンくず/ActionBreadcrumb",component:l,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{items:[{label:"ホーム",onClick:()=>{}},{label:"設定",onClick:()=>{}},{label:"詳細"}]}},a={args:{items:[{label:"トップ",onClick:()=>{}},{label:"カテゴリ",onClick:()=>{}},{label:"アイテム"}],separator:">"}},r={args:{items:[{label:"ダッシュボード"}]}},n={args:{items:[{label:"ホーム",onClick:()=>{}},{label:"管理",onClick:()=>{}},{label:"ユーザー",onClick:()=>{}},{label:"ロール設定",onClick:()=>{}},{label:"権限詳細"}],separator:"/"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'ホーム',
      onClick: () => {}
    }, {
      label: '設定',
      onClick: () => {}
    }, {
      label: '詳細'
    }]
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'トップ',
      onClick: () => {}
    }, {
      label: 'カテゴリ',
      onClick: () => {}
    }, {
      label: 'アイテム'
    }],
    separator: '>'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'ダッシュボード'
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'ホーム',
      onClick: () => {}
    }, {
      label: '管理',
      onClick: () => {}
    }, {
      label: 'ユーザー',
      onClick: () => {}
    }, {
      label: 'ロール設定',
      onClick: () => {}
    }, {
      label: '権限詳細'
    }],
    separator: '/'
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","CustomSeparator","SingleItem","DeepHierarchy"];export{a as CustomSeparator,n as DeepHierarchy,e as Default,r as SingleItem,m as __namedExportsOrder,i as default};
