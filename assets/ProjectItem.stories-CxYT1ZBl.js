import{j as e}from"./iframe-Dr-9ywM0.js";import{P as n}from"./ProjectItem-CrXMQu2x.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-BNSYKcWA.js";import"./animations-BTPozNpH.js";import"./proxy-Dm_49UVS.js";import"./Box-BKJ5kh32.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-iFrq6eC_.js";import"./Text-D-hslIek.js";import"./colors-BiHXYRGc.js";import"./Icon-B4-Rqhyi.js";import"./TextArea-BIXb-YYj.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-BYHyqDz3.js";import"./Radio-B0k9cAzX.js";import"./Toggle-Cx72CI8r.js";import"./Slider-sSIstm-y.js";import"./Badge-C3UJg6Fe.js";import"./Progress-OQeivF29.js";import"./StatisticItem-CP_IO5zi.js";import"./Tooltip-Cu-RouHS.js";import"./TimeBadge--EIWGwJS.js";import"./Spinner-BXB5YNzl.js";import"./ListItem-BowoOZtE.js";import"./FileLink-Dys97VJC.js";import"./BackgroundImage-bw95sVn5.js";import"./Media-vlhw8acs.js";import"./ResponsiveContainer-DZMS4-9-.js";import"./CountdownRing-C2itTIPE.js";import"./MathView-B2dBOEvJ.js";import"./TimeSlotRow-B5gnCj2Y.js";import"./NumberTicker-7CF492NZ.js";import"./use-in-view-DOApYpyw.js";const H={title:"ナビゲーション/メニュー/ProjectItem",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{selected:{control:"boolean",description:"選択状態"},isDragging:{control:"boolean",description:"ドラッグ中状態"},isDragOver:{control:"boolean",description:"ドラッグオーバー状態"},isDropTarget:{control:"boolean",description:"ドロップターゲット状態"},isMeetingDropTarget:{control:"boolean",description:"ミーティングのドロップターゲット状態"},isLastChild:{control:"boolean",description:"同階層の最後の子かどうか"},onClick:{action:"onClick",description:"クリックハンドラ"},onDoubleClick:{action:"onDoubleClick",description:"ダブルクリックハンドラ"},onContextMenu:{action:"onContextMenu",description:"右クリックハンドラ"},onDelete:{action:"onDelete",description:"削除ハンドラ"}}},r={args:{project:{id:"1",name:"プロジェクト A",depth:0},selected:!1,onClick:()=>{}},decorators:[t=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"4px"},children:e.jsx(t,{})})]},o={name:"選択状態",args:{project:{id:"1",name:"プロジェクト A",depth:0},selected:!0,onClick:()=>{}},decorators:[t=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"4px"},children:e.jsx(t,{})})]},i={name:"削除ボタン付き",args:{project:{id:"1",name:"プロジェクト A",depth:0},selected:!1,onClick:()=>{},onDelete:()=>{}},decorators:[t=>e.jsx("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"4px"},children:e.jsx(t,{})})]},d={name:"ツリー構造",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"4px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{project:{id:"1",name:"親プロジェクト",depth:0},selected:!0,onClick:()=>{}}),e.jsx(n,{project:{id:"2",name:"子プロジェクト 1",depth:1,parent_id:"1"},onClick:()=>{}}),e.jsx(n,{project:{id:"3",name:"子プロジェクト 2",depth:1,parent_id:"1"},isLastChild:!0,onClick:()=>{}})]})},a={name:"深いネスト",render:()=>e.jsxs("div",{style:{width:"280px",backgroundColor:"#1e293b",padding:"4px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{project:{id:"1",name:"ルート",depth:0},onClick:()=>{}}),e.jsx(n,{project:{id:"2",name:"レベル 1",depth:1,parent_id:"1"},onClick:()=>{}}),e.jsx(n,{project:{id:"3",name:"レベル 2",depth:2,parent_id:"2"},onClick:()=>{}}),e.jsx(n,{project:{id:"4",name:"レベル 3",depth:3,parent_id:"3"},selected:!0,isLastChild:!0,onClick:()=>{}})]})},p={name:"ドラッグ状態",render:()=>e.jsxs("div",{style:{width:"220px",backgroundColor:"#1e293b",padding:"4px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(n,{project:{id:"1",name:"通常",depth:0},onClick:()=>{}}),e.jsx(n,{project:{id:"2",name:"ドラッグ中",depth:0},isDragging:!0,onClick:()=>{}}),e.jsx(n,{project:{id:"3",name:"ドラッグオーバー",depth:0},isDragOver:!0,onClick:()=>{}}),e.jsx(n,{project:{id:"4",name:"ドロップターゲット",depth:0},isDropTarget:!0,onClick:()=>{}})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      id: '1',
      name: 'プロジェクト A',
      depth: 0
    },
    selected: false,
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '4px'
  }}><Story /></div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '選択状態',
  args: {
    project: {
      id: '1',
      name: 'プロジェクト A',
      depth: 0
    },
    selected: true,
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '4px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '削除ボタン付き',
  args: {
    project: {
      id: '1',
      name: 'プロジェクト A',
      depth: 0
    },
    selected: false,
    onClick: () => {},
    onDelete: () => {}
  },
  decorators: [Story => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '4px'
  }}><Story /></div>]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'ツリー構造',
  render: () => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column'
  }}>
      <ProjectItem project={{
      id: '1',
      name: '親プロジェクト',
      depth: 0
    }} selected onClick={() => {}} />
      <ProjectItem project={{
      id: '2',
      name: '子プロジェクト 1',
      depth: 1,
      parent_id: '1'
    }} onClick={() => {}} />
      <ProjectItem project={{
      id: '3',
      name: '子プロジェクト 2',
      depth: 1,
      parent_id: '1'
    }} isLastChild onClick={() => {}} />
    </div>
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '深いネスト',
  render: () => <div style={{
    width: '280px',
    backgroundColor: '#1e293b',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column'
  }}>
      <ProjectItem project={{
      id: '1',
      name: 'ルート',
      depth: 0
    }} onClick={() => {}} />
      <ProjectItem project={{
      id: '2',
      name: 'レベル 1',
      depth: 1,
      parent_id: '1'
    }} onClick={() => {}} />
      <ProjectItem project={{
      id: '3',
      name: 'レベル 2',
      depth: 2,
      parent_id: '2'
    }} onClick={() => {}} />
      <ProjectItem project={{
      id: '4',
      name: 'レベル 3',
      depth: 3,
      parent_id: '3'
    }} selected isLastChild onClick={() => {}} />
    </div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'ドラッグ状態',
  render: () => <div style={{
    width: '220px',
    backgroundColor: '#1e293b',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }}>
      <ProjectItem project={{
      id: '1',
      name: '通常',
      depth: 0
    }} onClick={() => {}} />
      <ProjectItem project={{
      id: '2',
      name: 'ドラッグ中',
      depth: 0
    }} isDragging onClick={() => {}} />
      <ProjectItem project={{
      id: '3',
      name: 'ドラッグオーバー',
      depth: 0
    }} isDragOver onClick={() => {}} />
      <ProjectItem project={{
      id: '4',
      name: 'ドロップターゲット',
      depth: 0
    }} isDropTarget onClick={() => {}} />
    </div>
}`,...p.parameters?.docs?.source}}};const J=["Default","Selected","WithDeleteButton","TreeStructure","DeepNesting","DragStates"];export{a as DeepNesting,r as Default,p as DragStates,o as Selected,d as TreeStructure,i as WithDeleteButton,J as __namedExportsOrder,H as default};
