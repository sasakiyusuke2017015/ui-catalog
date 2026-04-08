import{j as c}from"./iframe-BZQgagrY.js";import{T as i}from"./TagItem-DRXBaaYH.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-DglLkT8m.js";import"./animations-BTPozNpH.js";import"./proxy-B2yeVycW.js";import"./Box-DPdWulhY.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-BgjDjQTH.js";import"./Text-BL7P6Gkt.js";import"./colors-BiHXYRGc.js";import"./Icon-Dg6vjmHa.js";import"./TextArea-Ct6Bc-TR.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-DY0lfu3y.js";import"./Radio-CIC25yZJ.js";import"./Toggle-DU3L2c_f.js";import"./Slider-BI4ky6Bf.js";import"./Badge-BSpc0QGZ.js";import"./Progress-BjiE0tpU.js";import"./StatisticItem-D_b1bPBG.js";import"./Tooltip-BGY5ZseL.js";import"./TimeBadge-BdG6PMJJ.js";import"./Spinner-Djy16Wd3.js";import"./ListItem-C9nxSxyo.js";import"./FileLink-BuBBOq_N.js";import"./BackgroundImage-CM_rc5gL.js";import"./Media-Dd1hwBI_.js";import"./ResponsiveContainer-C2MmdXmP.js";import"./CountdownRing-msh8jADn.js";import"./MathView-CBwfGM_6.js";import"./TimeSlotRow-QFUjdT6W.js";import"./NumberTicker-BZs-JZ9K.js";import"./use-in-view-Df2DYaRE.js";const J={title:"ナビゲーション/メニュー/TagItem",component:i,parameters:{layout:"centered",docs:{description:{component:`タグアイテムコンポーネント

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
}`,...s.parameters?.docs?.source}}};const K=["Default","Selected","PurpleCheck","WithDelete","ColorVariations","SelectionList"];export{n as ColorVariations,r as Default,t as PurpleCheck,o as Selected,s as SelectionList,a as WithDelete,K as __namedExportsOrder,J as default};
