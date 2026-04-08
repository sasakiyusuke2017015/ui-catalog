import{j as e}from"./iframe-BZQgagrY.js";import{N as o}from"./NavItem-D4eBYWzu.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-DglLkT8m.js";import"./animations-BTPozNpH.js";import"./proxy-B2yeVycW.js";import"./Box-DPdWulhY.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-BgjDjQTH.js";import"./Text-BL7P6Gkt.js";import"./colors-BiHXYRGc.js";import"./Icon-Dg6vjmHa.js";import"./TextArea-Ct6Bc-TR.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-DY0lfu3y.js";import"./Radio-CIC25yZJ.js";import"./Toggle-DU3L2c_f.js";import"./Slider-BI4ky6Bf.js";import"./Badge-BSpc0QGZ.js";import"./Progress-BjiE0tpU.js";import"./StatisticItem-D_b1bPBG.js";import"./Tooltip-BGY5ZseL.js";import"./TimeBadge-BdG6PMJJ.js";import"./Spinner-Djy16Wd3.js";import"./ListItem-C9nxSxyo.js";import"./FileLink-BuBBOq_N.js";import"./BackgroundImage-CM_rc5gL.js";import"./Media-Dd1hwBI_.js";import"./ResponsiveContainer-C2MmdXmP.js";import"./CountdownRing-msh8jADn.js";import"./MathView-CBwfGM_6.js";import"./TimeSlotRow-QFUjdT6W.js";import"./NumberTicker-BZs-JZ9K.js";import"./use-in-view-Df2DYaRE.js";const F={title:"ナビゲーション/リンク/NavItem",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"表示ラベル"},iconName:{control:"select",options:["home","folder","calendar","settings","users","search","star","bell"],description:"アイコン名"},selected:{control:"boolean",description:"選択状態"},accentColor:{control:"select",options:["blue","yellow","orange","green","gray","purple"],description:"アクセントカラー"},badge:{control:"text",description:"バッジ（件数表示など）"},isMeetingDropTarget:{control:"boolean",description:"ミーティングのドロップターゲット状態"},isProjectDropTarget:{control:"boolean",description:"プロジェクトのドロップターゲット状態"},onClick:{action:"onClick",description:"クリックハンドラ"},onContextMenu:{action:"onContextMenu",description:"右クリックハンドラ"}}},l={args:{label:"ホーム",iconName:"home",selected:!1,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},a={name:"選択状態",args:{label:"ホーム",iconName:"home",selected:!0,accentColor:"blue",onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},n={name:"バッジ付き",args:{label:"通知",iconName:"bell",selected:!1,badge:5,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},t={name:"アクセントカラー一覧",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(o,{label:"Blue",iconName:"folder",selected:!0,accentColor:"blue",onClick:()=>{}}),e.jsx(o,{label:"Green",iconName:"folder",selected:!0,accentColor:"green",onClick:()=>{}}),e.jsx(o,{label:"Yellow",iconName:"folder",selected:!0,accentColor:"yellow",onClick:()=>{}}),e.jsx(o,{label:"Orange",iconName:"folder",selected:!0,accentColor:"orange",onClick:()=>{}}),e.jsx(o,{label:"Purple",iconName:"folder",selected:!0,accentColor:"purple",onClick:()=>{}}),e.jsx(o,{label:"Gray",iconName:"folder",selected:!0,accentColor:"gray",onClick:()=>{}})]})},c={name:"サイドバー例",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsx(o,{label:"ホーム",iconName:"home",selected:!0,onClick:()=>{}}),e.jsx(o,{label:"カレンダー",iconName:"calendar",onClick:()=>{}}),e.jsx(o,{label:"メンバー",iconName:"users",onClick:()=>{},badge:3}),e.jsx(o,{label:"設定",iconName:"settings",onClick:()=>{}})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'ホーム',
    iconName: 'home',
    selected: false,
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '8px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '選択状態',
  args: {
    label: 'ホーム',
    iconName: 'home',
    selected: true,
    accentColor: 'blue',
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '8px'
  }}><Story /></div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'バッジ付き',
  args: {
    label: '通知',
    iconName: 'bell',
    selected: false,
    badge: 5,
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '8px'
  }}><Story /></div>]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'アクセントカラー一覧',
  render: () => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }}>
      <NavItem label="Blue" iconName="folder" selected accentColor="blue" onClick={() => {}} />
      <NavItem label="Green" iconName="folder" selected accentColor="green" onClick={() => {}} />
      <NavItem label="Yellow" iconName="folder" selected accentColor="yellow" onClick={() => {}} />
      <NavItem label="Orange" iconName="folder" selected accentColor="orange" onClick={() => {}} />
      <NavItem label="Purple" iconName="folder" selected accentColor="purple" onClick={() => {}} />
      <NavItem label="Gray" iconName="folder" selected accentColor="gray" onClick={() => {}} />
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'サイドバー例',
  render: () => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  }}>
      <NavItem label="ホーム" iconName="home" selected onClick={() => {}} />
      <NavItem label="カレンダー" iconName="calendar" onClick={() => {}} />
      <NavItem label="メンバー" iconName="users" onClick={() => {}} badge={3} />
      <NavItem label="設定" iconName="settings" onClick={() => {}} />
    </div>
}`,...c.parameters?.docs?.source}}};const H=["Default","Selected","WithBadge","AccentColors","SidebarExample"];export{t as AccentColors,l as Default,a as Selected,c as SidebarExample,n as WithBadge,H as __namedExportsOrder,F as default};
