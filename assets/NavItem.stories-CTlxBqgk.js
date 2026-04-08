import{j as e}from"./iframe-CUmTO3gC.js";import{N as o}from"./NavItem-MYPpcLJN.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-CTtbIw7S.js";import"./animations-BTPozNpH.js";import"./proxy-XulV9mT3.js";import"./Box-SJTekFBi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-skjwuxGb.js";import"./Text-DWpUEgxO.js";import"./colors-BiHXYRGc.js";import"./Icon-BESojGLS.js";import"./TextArea-Cm255Y0X.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-Yba5vTAs.js";import"./Radio-Cn7_uWtO.js";import"./Toggle-C7sxMY8L.js";import"./Slider-C9ycPfa5.js";import"./Badge-Dp5VlpYr.js";import"./Progress-CRbQ8tBb.js";import"./StatisticItem-9IvWmAdS.js";import"./Tooltip-C1tpuylh.js";import"./TimeBadge-84DdBoYX.js";import"./Spinner-CaxhGNYr.js";import"./ListItem-BhpwRdoP.js";import"./FileLink-D8-o6yXE.js";import"./BackgroundImage-DhjnbE9v.js";import"./Media-D-YHoZuI.js";import"./ResponsiveContainer-Csu5_sMY.js";import"./CountdownRing-CSUVc_Uk.js";import"./MathView-DZZiEF-G.js";import"./TimeSlotRow-CevkO0d9.js";import"./NumberTicker-B9c8Em_p.js";import"./use-in-view-FmCEOafx.js";const F={title:"ナビゲーション/リンク/NavItem",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"表示ラベル"},iconName:{control:"select",options:["home","folder","calendar","settings","users","search","star","bell"],description:"アイコン名"},selected:{control:"boolean",description:"選択状態"},accentColor:{control:"select",options:["blue","yellow","orange","green","gray","purple"],description:"アクセントカラー"},badge:{control:"text",description:"バッジ（件数表示など）"},isMeetingDropTarget:{control:"boolean",description:"ミーティングのドロップターゲット状態"},isProjectDropTarget:{control:"boolean",description:"プロジェクトのドロップターゲット状態"},onClick:{action:"onClick",description:"クリックハンドラ"},onContextMenu:{action:"onContextMenu",description:"右クリックハンドラ"}}},l={args:{label:"ホーム",iconName:"home",selected:!1,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},a={name:"選択状態",args:{label:"ホーム",iconName:"home",selected:!0,accentColor:"blue",onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},n={name:"バッジ付き",args:{label:"通知",iconName:"bell",selected:!1,badge:5,onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px"},children:e.jsx(r,{})})]},t={name:"アクセントカラー一覧",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(o,{label:"Blue",iconName:"folder",selected:!0,accentColor:"blue",onClick:()=>{}}),e.jsx(o,{label:"Green",iconName:"folder",selected:!0,accentColor:"green",onClick:()=>{}}),e.jsx(o,{label:"Yellow",iconName:"folder",selected:!0,accentColor:"yellow",onClick:()=>{}}),e.jsx(o,{label:"Orange",iconName:"folder",selected:!0,accentColor:"orange",onClick:()=>{}}),e.jsx(o,{label:"Purple",iconName:"folder",selected:!0,accentColor:"purple",onClick:()=>{}}),e.jsx(o,{label:"Gray",iconName:"folder",selected:!0,accentColor:"gray",onClick:()=>{}})]})},c={name:"サイドバー例",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"8px",display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsx(o,{label:"ホーム",iconName:"home",selected:!0,onClick:()=>{}}),e.jsx(o,{label:"カレンダー",iconName:"calendar",onClick:()=>{}}),e.jsx(o,{label:"メンバー",iconName:"users",onClick:()=>{},badge:3}),e.jsx(o,{label:"設定",iconName:"settings",onClick:()=>{}})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
