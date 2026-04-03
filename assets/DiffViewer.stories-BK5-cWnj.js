import{D as n}from"./DiffViewer-pj0qysBx.js";import"./iframe-DWeAzsMr.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./IconButton-DRav08Zr.js";import"./Icon-DEMmUoH3.js";const c={title:"データ表示/DiffViewer",component:n,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{isOpen:!0,title:"変更内容",leftLabel:"変更前",rightLabel:"変更後",summary:{added:2,removed:1,changed:3,total:6},entries:[{path:"name",kind:"changed",old:"田中 太郎",new:"田中 太郎（更新）"},{path:"status",kind:"changed",old:"inactive",new:"active"},{path:"score",kind:"added",new:4.5},{path:"oldField",kind:"removed",old:"不要なフィールド"}],onClose:()=>{}}},e={args:{isOpen:!0,title:"コード差分",leftLabel:"main",rightLabel:"feature/update",summary:{added:3,removed:2,changed:0,total:5},entries:[{path:"Button.tsx",kind:"changed",lines:[{tag:" ",text:"export const Button = () => {"},{tag:"-",text:"  return <button>Click</button>"},{tag:"+",text:'  return <button className="btn">Click</button>'},{tag:" ",text:"}"}]}],onClose:()=>{}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Default","WithLineDiff"];export{t as Default,e as WithLineDiff,u as __namedExportsOrder,c as default};
