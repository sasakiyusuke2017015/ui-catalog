import{j as c}from"./iframe-WnPGq7kF.js";import{T as i}from"./TagItem-DIaqYy31.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-CZwmtmwI.js";import"./animations-BTPozNpH.js";import"./proxy-CXbHDkMu.js";import"./Box-CZGIYLV6.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-qgUbHqx9.js";import"./Text-DSdFP45B.js";import"./colors-BiHXYRGc.js";import"./Icon-EuWHROt9.js";import"./TextArea-Cd0qk_TS.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-D6bCYP9q.js";import"./Radio-BDBClZcb.js";import"./Toggle-BRdkjcBy.js";import"./Slider-Bq7BVncf.js";import"./Badge-BoX7G1fO.js";import"./Progress-BofALiIZ.js";import"./StatisticItem-4uPAgoLI.js";import"./Tooltip-DI-3Nrd5.js";import"./TimeBadge-B1Dz09ep.js";import"./Spinner-SGqrW4ZB.js";import"./ListItem-DEEb1-03.js";import"./FileLink-TrXV4gZO.js";import"./BackgroundImage-tLihA5hE.js";import"./Media-wP_IGF2P.js";import"./ResponsiveContainer-B7drH46Y.js";import"./CountdownRing-BwRUBT1v.js";import"./MathView-suinxcch.js";import"./TimeSlotRow-dUHwTYbi.js";import"./NumberTicker-9ihSdE21.js";import"./use-in-view-CawCBvyU.js";const J={title:"ナビゲーション/メニュー/TagItem",component:i,parameters:{layout:"centered",docs:{description:{component:`タグアイテムコンポーネント

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
