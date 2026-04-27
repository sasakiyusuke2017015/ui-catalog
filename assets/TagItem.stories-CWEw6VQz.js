import{j as c}from"./iframe-2z8Hl2jC.js";import{T as i}from"./TagItem-BHCVMbSv.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-DiKVwfBQ.js";import"./animations-BTPozNpH.js";import"./proxy-D2q8fW0u.js";import"./Box-vSr-FtGW.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-CyI7bMM7.js";import"./Text-BNefPDJW.js";import"./colors-BiHXYRGc.js";import"./Icon-DQoCPfk-.js";import"./TextArea-DNgGTYXq.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-tRofR98d.js";import"./Radio-CmS11KZQ.js";import"./Toggle-DIv1VVMU.js";import"./Slider-Bxyh9GhF.js";import"./Badge-HPLyWBSF.js";import"./Progress-DT6cceg9.js";import"./StatisticItem-D30gMPud.js";import"./Tooltip-C1ZG45pA.js";import"./TimeBadge-DQ4BLkVC.js";import"./Spinner-CgsV25FN.js";import"./ListItem-DH9_rkVi.js";import"./FileLink-BHoY4q78.js";import"./BackgroundImage-Dusbk-XJ.js";import"./Media-C-P5Z0gU.js";import"./ResponsiveContainer-Bm9Mcb2K.js";import"./CountdownRing-HsedSIP5.js";import"./MathView-Cmr4G22g.js";import"./TimeSlotRow-_E1UlQyY.js";import"./NumberTicker-CdzePp82.js";import"./use-in-view-Me8I1QLt.js";import"./CheckBadge-5eRrlO2D.js";const K={title:"ナビゲーション/メニュー/TagItem",component:i,parameters:{layout:"centered",docs:{description:{component:`タグアイテムコンポーネント

ドラッグ可能なタグアイテム。チェックボックス風の選択UIとカラードット表示を備えます。`}}},tags:["autodocs"],argTypes:{tag:{description:"タグデータ（id, name, color）",control:{type:"object"}},selected:{description:"選択状態",control:{type:"boolean"}},isDragging:{description:"ドラッグ中状態",control:{type:"boolean"}},isDragOver:{description:"ドラッグオーバー状態",control:{type:"boolean"}},checkColor:{description:"チェックマークのアクセントカラー",control:{type:"select"},options:["blue","purple"]}}},r={args:{tag:{id:"1",name:"重要",color:"red"},selected:!1,onClick:()=>{}}},o={args:{tag:{id:"1",name:"重要",color:"red"},selected:!0,onClick:()=>{}}},t={args:{tag:{id:"2",name:"アイデア",color:"purple"},selected:!0,checkColor:"purple",onClick:()=>{}}},a={args:{tag:{id:"3",name:"一時的",color:"orange"},selected:!1,onClick:()=>{},onDelete:()=>{}}},n={render:()=>{const l=["red","blue","green","orange","purple","teal","pink","indigo","yellow"];return c.jsx("div",{className:"flex flex-col gap-1",children:l.map(e=>c.jsx(i,{tag:{id:e,name:e,color:e},selected:!1,onClick:()=>{}},e))})}},s={render:()=>{const l=[{id:"1",name:"重要",color:"red"},{id:"2",name:"進行中",color:"blue"},{id:"3",name:"完了",color:"green"},{id:"4",name:"保留",color:"gray"}];return c.jsx("div",{className:"flex flex-col gap-1 w-56",children:l.map((e,p)=>c.jsx(i,{tag:e,selected:p<2,onClick:()=>{},onDelete:()=>{}},e.id))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tag: {
      id: '1',
      name: '重要',
      color: 'red'
    },
    selected: false,
    onClick: () => {}
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tag: {
      id: '1',
      name: '重要',
      color: 'red'
    },
    selected: true,
    onClick: () => {}
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tag: {
      id: '2',
      name: 'アイデア',
      color: 'purple'
    },
    selected: true,
    checkColor: 'purple',
    onClick: () => {}
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tag: {
      id: '3',
      name: '一時的',
      color: 'orange'
    },
    selected: false,
    onClick: () => {},
    onDelete: () => {}
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'teal', 'pink', 'indigo', 'yellow'];
    return <div className="flex flex-col gap-1">
        {colors.map(color => <TagItem key={color} tag={{
        id: color,
        name: color,
        color
      }} selected={false} onClick={() => {}} />)}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tags = [{
      id: '1',
      name: '重要',
      color: 'red'
    }, {
      id: '2',
      name: '進行中',
      color: 'blue'
    }, {
      id: '3',
      name: '完了',
      color: 'green'
    }, {
      id: '4',
      name: '保留',
      color: 'gray'
    }];
    return <div className="flex flex-col gap-1 w-56">
        {tags.map((tag, i) => <TagItem key={tag.id} tag={tag} selected={i < 2} onClick={() => {}} onDelete={() => {}} />)}
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const M=["Default","Selected","PurpleCheck","WithDelete","ColorVariations","SelectionList"];export{n as ColorVariations,r as Default,t as PurpleCheck,o as Selected,s as SelectionList,a as WithDelete,M as __namedExportsOrder,K as default};
