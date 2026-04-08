import{j as n}from"./iframe-CUmTO3gC.js";import{C as a}from"./ContextMenu-Bw8RJvL_.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"ナビゲーション/メニュー/ContextMenu",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{position:{control:"object",description:"メニューの表示位置 { x, y }"},items:{control:"object",description:"メニュー項目の配列"},onClose:{action:"onClose",description:"メニューを閉じるコールバック"}}},o={args:{position:{x:50,y:50},items:[{label:"編集",onClick:()=>{}},{label:"コピー",onClick:()=>{}},{label:"貼り付け",onClick:()=>{}}],onClose:()=>{}},decorators:[e=>n.jsx("div",{style:{position:"relative",width:"300px",height:"200px"},children:n.jsx(e,{})})]},t={name:"危険項目あり",args:{position:{x:50,y:50},items:[{label:"編集",onClick:()=>{}},{label:"移動",onClick:()=>{}},{label:"削除",onClick:()=>{},variant:"danger"}],onClose:()=>{}},decorators:[e=>n.jsx("div",{style:{position:"relative",width:"300px",height:"200px"},children:n.jsx(e,{})})]},i={name:"単一項目",args:{position:{x:50,y:50},items:[{label:"詳細を表示",onClick:()=>{}}],onClose:()=>{}},decorators:[e=>n.jsx("div",{style:{position:"relative",width:"300px",height:"200px"},children:n.jsx(e,{})})]},s={name:"多数の項目",args:{position:{x:50,y:50},items:[{label:"名前変更",onClick:()=>{}},{label:"複製",onClick:()=>{}},{label:"移動",onClick:()=>{}},{label:"共有",onClick:()=>{}},{label:"ダウンロード",onClick:()=>{}},{label:"削除",onClick:()=>{},variant:"danger"}],onClose:()=>{}},decorators:[e=>n.jsx("div",{style:{position:"relative",width:"300px",height:"300px"},children:n.jsx(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    position: {
      x: 50,
      y: 50
    },
    items: [{
      label: '編集',
      onClick: () => {}
    }, {
      label: 'コピー',
      onClick: () => {}
    }, {
      label: '貼り付け',
      onClick: () => {}
    }],
    onClose: () => {}
  },
  decorators: [Story => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '危険項目あり',
  args: {
    position: {
      x: 50,
      y: 50
    },
    items: [{
      label: '編集',
      onClick: () => {}
    }, {
      label: '移動',
      onClick: () => {}
    }, {
      label: '削除',
      onClick: () => {},
      variant: 'danger'
    }],
    onClose: () => {}
  },
  decorators: [Story => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}><Story /></div>]
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '単一項目',
  args: {
    position: {
      x: 50,
      y: 50
    },
    items: [{
      label: '詳細を表示',
      onClick: () => {}
    }],
    onClose: () => {}
  },
  decorators: [Story => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}><Story /></div>]
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '多数の項目',
  args: {
    position: {
      x: 50,
      y: 50
    },
    items: [{
      label: '名前変更',
      onClick: () => {}
    }, {
      label: '複製',
      onClick: () => {}
    }, {
      label: '移動',
      onClick: () => {}
    }, {
      label: '共有',
      onClick: () => {}
    }, {
      label: 'ダウンロード',
      onClick: () => {}
    }, {
      label: '削除',
      onClick: () => {},
      variant: 'danger'
    }],
    onClose: () => {}
  },
  decorators: [Story => <div style={{
    position: 'relative',
    width: '300px',
    height: '300px'
  }}><Story /></div>]
}`,...s.parameters?.docs?.source}}};const d=["Default","WithDangerItem","SingleItem","ManyItems"];export{o as Default,s as ManyItems,i as SingleItem,t as WithDangerItem,d as __namedExportsOrder,p as default};
