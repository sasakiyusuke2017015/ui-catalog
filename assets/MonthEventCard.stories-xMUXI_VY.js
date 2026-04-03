import{j as e}from"./iframe-TXWPROLT.js";import{M as o}from"./MonthEventCard-ziAjaM6O.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";const w={title:"カレンダー/MonthEventCard",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"月表示の時間指定イベントカード。ドット、時刻、タイトルを表示する。"}}}},a={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},n={render:()=>e.jsx("div",{style:{width:"180px"},children:e.jsx(o,{event:a,isDragging:!1,onClick:()=>{},onPointerDown:()=>{}})})},t={render:()=>e.jsx("div",{style:{width:"180px"},children:e.jsx(o,{event:a,isDragging:!0,onClick:()=>{},onPointerDown:()=>{}})})},r={render:()=>{const s=[{id:"1",title:"デザインレビュー",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,10,0),color:"#059669"},{id:"2",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#dc2626"},{id:"3",title:"1on1",startTime:new Date(2026,2,20,15,30),endTime:new Date(2026,2,20,16,0),color:"#8b5cf6"}];return e.jsx("div",{style:{width:"180px",display:"flex",flexDirection:"column",gap:"4px"},children:s.map(i=>e.jsx(o,{event:i,isDragging:!1,onClick:()=>{},onPointerDown:()=>{}},i.id))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '180px'
  }}>
      <MonthEventCard event={mockEvent} isDragging={false} onClick={() => {}} onPointerDown={() => {}} />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '180px'
  }}>
      <MonthEventCard event={mockEvent} isDragging={true} onClick={() => {}} onPointerDown={() => {}} />
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [{
      id: '1',
      title: 'デザインレビュー',
      startTime: new Date(2026, 2, 20, 9, 0),
      endTime: new Date(2026, 2, 20, 10, 0),
      color: '#059669'
    }, {
      id: '2',
      title: 'ランチ',
      startTime: new Date(2026, 2, 20, 12, 0),
      endTime: new Date(2026, 2, 20, 13, 0),
      color: '#dc2626'
    }, {
      id: '3',
      title: '1on1',
      startTime: new Date(2026, 2, 20, 15, 30),
      endTime: new Date(2026, 2, 20, 16, 0),
      color: '#8b5cf6'
    }];
    return <div style={{
      width: '180px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
        {events.map(event => <MonthEventCard key={event.id} event={event} isDragging={false} onClick={() => {}} onPointerDown={() => {}} />)}
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","Dragging","DifferentColors"];export{n as Default,r as DifferentColors,t as Dragging,x as __namedExportsOrder,w as default};
