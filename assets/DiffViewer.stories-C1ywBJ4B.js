import{D as d}from"./DiffViewer-LgUpF0fe.js";import"./iframe-BZQgagrY.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./IconButton-Di0Yw2Ya.js";import"./Icon-Dg6vjmHa.js";const p={title:"データ表示/その他/DiffViewer",component:d,parameters:{layout:"padded"},tags:["autodocs"]},e={args:{isOpen:!0,title:"変更内容",leftLabel:"変更前",rightLabel:"変更後",summary:{added:2,removed:1,changed:3,total:6},entries:[{path:"name",kind:"changed",old:"田中 太郎",new:"田中 太郎（更新）"},{path:"status",kind:"changed",old:"inactive",new:"active"},{path:"score",kind:"added",new:4.5},{path:"oldField",kind:"removed",old:"不要なフィールド"}],onClose:()=>{}}},n={args:{isOpen:!0,title:"コード差分",leftLabel:"main",rightLabel:"feature/update",summary:{added:3,removed:2,changed:0,total:5},entries:[{path:"Button.tsx",kind:"changed",lines:[{tag:" ",text:"export const Button = () => {"},{tag:"-",text:"  return <button>Click</button>"},{tag:"+",text:'  return <button className="btn">Click</button>'},{tag:" ",text:"}"}]}],onClose:()=>{}}},t={args:{isOpen:!0,title:"差分なし",leftLabel:"変更前",rightLabel:"変更後",summary:{added:0,removed:0,changed:0,total:0},entries:[],onClose:()=>{}}},a={args:{isOpen:!0,title:"大規模変更レビュー",leftLabel:"本番",rightLabel:"ステージング",summary:{added:3,removed:2,changed:3,total:8},entries:[{path:"config.database.host",kind:"changed",old:"db-prod-01",new:"db-stg-01"},{path:"config.database.port",kind:"changed",old:"5432",new:"5433"},{path:"config.cache.enabled",kind:"changed",old:"true",new:"false"},{path:"config.logging.level",kind:"added",new:"debug"},{path:"config.feature.newUI",kind:"added",new:"true"},{path:"config.feature.betaAccess",kind:"added",new:"true"},{path:"config.legacy.endpoint",kind:"removed",old:"/api/v1/old"},{path:"config.legacy.timeout",kind:"removed",old:"30000"}],onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '変更内容',
    leftLabel: '変更前',
    rightLabel: '変更後',
    summary: {
      added: 2,
      removed: 1,
      changed: 3,
      total: 6
    },
    entries: [{
      path: 'name',
      kind: 'changed',
      old: '田中 太郎',
      new: '田中 太郎（更新）'
    }, {
      path: 'status',
      kind: 'changed',
      old: 'inactive',
      new: 'active'
    }, {
      path: 'score',
      kind: 'added',
      new: 4.5
    }, {
      path: 'oldField',
      kind: 'removed',
      old: '不要なフィールド'
    }],
    onClose: () => {}
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'コード差分',
    leftLabel: 'main',
    rightLabel: 'feature/update',
    summary: {
      added: 3,
      removed: 2,
      changed: 0,
      total: 5
    },
    entries: [{
      path: 'Button.tsx',
      kind: 'changed',
      lines: [{
        tag: ' ',
        text: 'export const Button = () => {'
      }, {
        tag: '-',
        text: '  return <button>Click</button>'
      }, {
        tag: '+',
        text: '  return <button className="btn">Click</button>'
      }, {
        tag: ' ',
        text: '}'
      }]
    }],
    onClose: () => {}
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '差分なし',
    leftLabel: '変更前',
    rightLabel: '変更後',
    summary: {
      added: 0,
      removed: 0,
      changed: 0,
      total: 0
    },
    entries: [],
    onClose: () => {}
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '大規模変更レビュー',
    leftLabel: '本番',
    rightLabel: 'ステージング',
    summary: {
      added: 3,
      removed: 2,
      changed: 3,
      total: 8
    },
    entries: [{
      path: 'config.database.host',
      kind: 'changed',
      old: 'db-prod-01',
      new: 'db-stg-01'
    }, {
      path: 'config.database.port',
      kind: 'changed',
      old: '5432',
      new: '5433'
    }, {
      path: 'config.cache.enabled',
      kind: 'changed',
      old: 'true',
      new: 'false'
    }, {
      path: 'config.logging.level',
      kind: 'added',
      new: 'debug'
    }, {
      path: 'config.feature.newUI',
      kind: 'added',
      new: 'true'
    }, {
      path: 'config.feature.betaAccess',
      kind: 'added',
      new: 'true'
    }, {
      path: 'config.legacy.endpoint',
      kind: 'removed',
      old: '/api/v1/old'
    }, {
      path: 'config.legacy.timeout',
      kind: 'removed',
      old: '30000'
    }],
    onClose: () => {}
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","WithLineDiff","NoDiff","ManyEntries"];export{e as Default,a as ManyEntries,t as NoDiff,n as WithLineDiff,u as __namedExportsOrder,p as default};
