import{j as e}from"./iframe-CEBuvpRZ.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"カレンダー/CalendarEventCard",component:EventCard,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"タイムライン表示とコンパクト表示の2モードを持つイベントカード。"}}}},t={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"300px"},children:e.jsx(EventCardContainer,{title:"チームミーティング",startLabel:"10:00",endLabel:"11:00",top:0,height:80,color:"#4f46e5"})})},r={render:()=>e.jsxs("div",{style:{position:"relative",width:"400px",height:"300px"},children:[e.jsx(EventCardContainer,{title:"デザインレビュー",startLabel:"14:00",endLabel:"15:30",top:0,height:120,color:"#059669",leftPercent:0,widthPercent:50}),e.jsx(EventCardContainer,{title:"1on1",startLabel:"14:30",endLabel:"15:00",top:40,height:60,color:"#dc2626",leftPercent:50,widthPercent:50,zColumn:1})]})},i={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(EventCardContainer,{variant:"compact",title:"終日イベント",color:"#8b5cf6"})})},a={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(EventCardContainer,{variant:"compact",title:"削除可能なイベント",color:"#f59e0b",onDelete:()=>{}})})},o={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(EventCardContainer,{title:"ドラッグ中のイベント",startLabel:"09:00",endLabel:"10:00",top:0,height:80,color:"#4f46e5",isDragging:!0})})},n={render:()=>e.jsx("div",{style:{position:"relative",width:"400px",height:"200px"},children:e.jsx(EventCardContainer,{title:"ホバー中のイベント",startLabel:"09:00",endLabel:"10:00",top:0,height:80,color:"#4f46e5",isHovered:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px'
  }}>
      <EventCardContainer title="チームミーティング" startLabel="10:00" endLabel="11:00" top={0} height={80} color="#4f46e5" />
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px'
  }}>
      <EventCardContainer title="デザインレビュー" startLabel="14:00" endLabel="15:30" top={0} height={120} color="#059669" leftPercent={0} widthPercent={50} />
      <EventCardContainer title="1on1" startLabel="14:30" endLabel="15:00" top={40} height={60} color="#dc2626" leftPercent={50} widthPercent={50} zColumn={1} />
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <EventCardContainer variant="compact" title="終日イベント" color="#8b5cf6" />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <EventCardContainer variant="compact" title="削除可能なイベント" color="#f59e0b" onDelete={() => {}} />
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <EventCardContainer title="ドラッグ中のイベント" startLabel="09:00" endLabel="10:00" top={0} height={80} color="#4f46e5" isDragging />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '200px'
  }}>
      <EventCardContainer title="ホバー中のイベント" startLabel="09:00" endLabel="10:00" top={0} height={80} color="#4f46e5" isHovered />
    </div>
}`,...n.parameters?.docs?.source}}};const c=["Timeline","TimelineWithPosition","Compact","CompactWithDelete","Dragging","Hovered"];export{i as Compact,a as CompactWithDelete,o as Dragging,n as Hovered,t as Timeline,r as TimelineWithPosition,c as __namedExportsOrder,l as default};
