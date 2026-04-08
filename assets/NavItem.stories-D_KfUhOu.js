import{j as e}from"./iframe-LfAIox-3.js";import{N as o}from"./NavItem-BmNQ_A6L.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-7fVUIoTr.js";import"./animations-BTPozNpH.js";import"./proxy-D7P4lcb2.js";import"./Box-YrVfSem7.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-CTthPAWA.js";import"./Text-C9sD4FkI.js";import"./colors-BiHXYRGc.js";import"./Icon-CN73ewXh.js";import"./TextArea-C6dbNmgi.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-DojRGbgr.js";import"./Radio-CLmYfIs8.js";import"./Toggle-EDKVLcwC.js";import"./Slider-D3kqjl4M.js";import"./Badge-gnBUJvO0.js";import"./Progress-Dsr5dGzc.js";import"./StatisticItem-CtUe6lVl.js";import"./Tooltip-DMrO9HtK.js";import"./TimeBadge-CAvd5Cui.js";import"./Spinner-BwSB1wOr.js";import"./ListItem-BzddaHrb.js";import"./FileLink-CXn5uzX4.js";import"./BackgroundImage-Dzmtqn5N.js";import"./Media-DV55p2Vd.js";import"./ResponsiveContainer-Cfsc6XxI.js";import"./CountdownRing-CLRKI4qg.js";import"./MathView-tZBzztFf.js";import"./TimeSlotRow-Cpd0J9jz.js";import"./NumberTicker-DuMpyQfW.js";import"./use-in-view-eI5YJMkf.js";const F={title:"ナビゲーション/リンク/NavItem",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"表示ラベル"},iconName:{control:"select",options:["home","folder","calendar","settings","users","search","star","bell"],description:"アイコン名"},selected:{control:"boolean",description:"選択状態"},accentColor:{control:"select",options:["blue","yellow","orange","green","gray","purple"],description:"アクセントカラー"},badge:{control:"text",description:"バッジ（件数表示など）"},isMeetingDropTarget:{control:"boolean",description:"ミーティングのドロップターゲット状態"},isProjectDropTarget:{control:"boolean",description:"プロジェクトのドロップターゲット状態"},onClick:{action:"onClick",description:"クリックハンドラ"},onContextMenu:{action:"onContextMenu",description:"右クリックハンドラ"}}},l={args:{label:"ホーム",iconName:"home",selected:!1,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},a={name:"選択状態",args:{label:"ホーム",iconName:"home",selected:!0,accentColor:"blue",onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},n={name:"バッジ付き",args:{label:"通知",iconName:"bell",selected:!1,badge:5,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},t={name:"アクセントカラー一覧",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(o,{label:"Blue",iconName:"folder",selected:!0,accentColor:"blue",onClick:()=>{}}),e.jsx(o,{label:"Green",iconName:"folder",selected:!0,accentColor:"green",onClick:()=>{}}),e.jsx(o,{label:"Yellow",iconName:"folder",selected:!0,accentColor:"yellow",onClick:()=>{}}),e.jsx(o,{label:"Orange",iconName:"folder",selected:!0,accentColor:"orange",onClick:()=>{}}),e.jsx(o,{label:"Purple",iconName:"folder",selected:!0,accentColor:"purple",onClick:()=>{}}),e.jsx(o,{label:"Gray",iconName:"folder",selected:!0,accentColor:"gray",onClick:()=>{}})]})},c={name:"サイドバー例",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsx(o,{label:"ホーム",iconName:"home",selected:!0,onClick:()=>{}}),e.jsx(o,{label:"カレンダー",iconName:"calendar",onClick:()=>{}}),e.jsx(o,{label:"メンバー",iconName:"users",onClick:()=>{},badge:3}),e.jsx(o,{label:"設定",iconName:"settings",onClick:()=>{}})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
