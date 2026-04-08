import{j as e}from"./iframe-BwfVzy39.js";import{C as t}from"./CalendarEventCard-Cvth5XGx.js";import"./preload-helper-PPVm8Dsz.js";import"./dom-CKarFDmb.js";import"./IconLabel-C7RoMPsB.js";import"./Icon-DGn345dX.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const D={title:"カレンダー/イベント/CalendarEventCard",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"タイムライン表示とコンパクト表示の2モードを持つイベントカード。"}}}},g=()=>{},r={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"300px"},children:e.jsx(t,{title:"チームミーティング",startLabel:"10:00",endLabel:"11:00",top:0,height:80,color:"#4f46e5"})})},o={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"300px"},children:e.jsx(t,{title:"デザインレビュー",startLabel:"14:00",endLabel:"15:30",top:0,height:120,color:"#059669",icon:"palette"})})},i={render:()=>e.jsxs("div",{style:{position:"relative",width:"400px",height:"300px"},children:[e.jsx(t,{title:"デザインレビュー",startLabel:"14:00",endLabel:"15:30",top:0,height:120,color:"#059669",leftPercent:0,widthPercent:50}),e.jsx(t,{title:"1on1",startLabel:"14:30",endLabel:"15:00",top:40,height:60,color:"#dc2626",leftPercent:50,widthPercent:50,zColumn:1})]})},a={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(t,{title:"15分のクイックコール",startLabel:"09:00",endLabel:"09:15",top:0,height:14,color:"#f59e0b"})})},l={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(t,{title:"ドラッグ中のイベント",startLabel:"09:00",endLabel:"10:00",top:0,height:80,color:"#4f46e5",isDragging:!0})})},s={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(t,{title:"ホバー中のイベント",startLabel:"09:00",endLabel:"10:00",top:0,height:80,color:"#4f46e5",isHovered:!0})})},c={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(t,{title:"削除可能なイベント",startLabel:"09:00",endLabel:"10:00",top:0,height:80,color:"#dc2626",onDelete:g})})},d={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{variant:"compact",title:"終日イベント",color:"#8b5cf6"})})},n={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{variant:"compact",title:"誕生日",color:"#ec4899",icon:"cake"})})},p={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{variant:"compact",title:"削除可能なイベント",color:"#f59e0b",onDelete:g})})},h={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{variant:"compact",title:"ドラッグ中",color:"#4f46e5",isDragging:!0})})},m={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{variant:"compact",title:"ホバー中",color:"#059669",isHovered:!0})})},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"200px"},children:[{title:"インディゴ",color:"#4f46e5"},{title:"エメラルド",color:"#059669"},{title:"レッド",color:"#dc2626"},{title:"パープル",color:"#8b5cf6"},{title:"アンバー",color:"#f59e0b"},{title:"ピンク",color:"#ec4899"},{title:"シアン",color:"#06b6d4"}].map(({title:u,color:x})=>e.jsx(t,{variant:"compact",title:u,color:x},x))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px'
  }}>
      <CalendarEventCard title="チームミーティング" startLabel="10:00" endLabel="11:00" top={0} height={80} color="#4f46e5" />
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px'
  }}>
      <CalendarEventCard title="デザインレビュー" startLabel="14:00" endLabel="15:30" top={0} height={120} color="#059669" icon="palette" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px'
  }}>
      <CalendarEventCard title="デザインレビュー" startLabel="14:00" endLabel="15:30" top={0} height={120} color="#059669" leftPercent={0} widthPercent={50} />
      <CalendarEventCard title="1on1" startLabel="14:30" endLabel="15:00" top={40} height={60} color="#dc2626" leftPercent={50} widthPercent={50} zColumn={1} />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <CalendarEventCard title="15分のクイックコール" startLabel="09:00" endLabel="09:15" top={0} height={14} color="#f59e0b" />
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <CalendarEventCard title="ドラッグ中のイベント" startLabel="09:00" endLabel="10:00" top={0} height={80} color="#4f46e5" isDragging />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <CalendarEventCard title="ホバー中のイベント" startLabel="09:00" endLabel="10:00" top={0} height={80} color="#4f46e5" isHovered />
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <CalendarEventCard title="削除可能なイベント" startLabel="09:00" endLabel="10:00" top={0} height={80} color="#dc2626" onDelete={noop} />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <CalendarEventCard variant="compact" title="終日イベント" color="#8b5cf6" />
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <CalendarEventCard variant="compact" title="誕生日" color="#ec4899" icon="cake" />
    </div>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <CalendarEventCard variant="compact" title="削除可能なイベント" color="#f59e0b" onDelete={noop} />
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <CalendarEventCard variant="compact" title="ドラッグ中" color="#4f46e5" isDragging />
    </div>
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <CalendarEventCard variant="compact" title="ホバー中" color="#059669" isHovered />
    </div>
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '200px'
  }}>
      {[{
      title: 'インディゴ',
      color: '#4f46e5'
    }, {
      title: 'エメラルド',
      color: '#059669'
    }, {
      title: 'レッド',
      color: '#dc2626'
    }, {
      title: 'パープル',
      color: '#8b5cf6'
    }, {
      title: 'アンバー',
      color: '#f59e0b'
    }, {
      title: 'ピンク',
      color: '#ec4899'
    }, {
      title: 'シアン',
      color: '#06b6d4'
    }].map(({
      title,
      color
    }) => <CalendarEventCard key={color} variant="compact" title={title} color={color} />)}
    </div>
}`,...v.parameters?.docs?.source}}};const S=["Timeline","TimelineWithIcon","TimelineOverlapping","TimelineShort","TimelineDragging","TimelineHovered","TimelineWithDelete","Compact","CompactWithIcon","CompactWithDelete","CompactDragging","CompactHovered","ColorVariants"];export{v as ColorVariants,d as Compact,h as CompactDragging,m as CompactHovered,p as CompactWithDelete,n as CompactWithIcon,r as Timeline,l as TimelineDragging,s as TimelineHovered,i as TimelineOverlapping,a as TimelineShort,c as TimelineWithDelete,o as TimelineWithIcon,S as __namedExportsOrder,D as default};
