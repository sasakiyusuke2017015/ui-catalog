import{j as n}from"./iframe-DWeAzsMr.js";import{S as t}from"./SpanningBar-D5ferB6m.js";import"./preload-helper-PPVm8Dsz.js";import"./IconLabel-Bl4deThz.js";import"./Icon-DEMmUoH3.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./startOfDay-Bun0zCfR.js";const x={title:"カレンダー/SpanningBar",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"月表示で複数日にまたがるイベントを横長バーとして表示するコンポーネント。リサイズハンドル付き。"}}}},o=Array.from({length:7},(g,p)=>new Date(2026,2,15+p)),s={id:"1",title:"出張",startTime:new Date(2026,2,16,0,0),endTime:new Date(2026,2,19,23,59),color:"#4f46e5",allDay:!0},e=()=>{},a={render:()=>n.jsx("div",{style:{position:"relative",width:"700px",height:"80px"},children:n.jsx(t,{event:s,startCol:1,endCol:4,lane:0,continuesLeft:!1,continuesRight:!1,isDragging:!1,isDragActive:!1,isHovered:!1,onClick:e,onDragStart:e,onMouseEnter:e,onMouseLeave:e,weekDates:o})})},i={render:()=>n.jsx("div",{style:{position:"relative",width:"700px",height:"80px"},children:n.jsx(t,{event:{...s,title:"前週から続く予定"},startCol:0,endCol:2,lane:0,continuesLeft:!0,continuesRight:!1,isDragging:!1,isDragActive:!1,isHovered:!1,onClick:e,onDragStart:e,onMouseEnter:e,onMouseLeave:e,weekDates:o})})},r={render:()=>n.jsx("div",{style:{position:"relative",width:"700px",height:"80px"},children:n.jsx(t,{event:{...s,title:"来週へ続く予定"},startCol:4,endCol:6,lane:0,continuesLeft:!1,continuesRight:!0,isDragging:!1,isDragActive:!1,isHovered:!1,onClick:e,onDragStart:e,onMouseEnter:e,onMouseLeave:e,weekDates:o})})},l={render:()=>{const g={id:"2",title:"休暇",startTime:new Date(2026,2,17,0,0),endTime:new Date(2026,2,20,23,59),color:"#059669",allDay:!0};return n.jsxs("div",{style:{position:"relative",width:"700px",height:"100px"},children:[n.jsx(t,{event:s,startCol:1,endCol:4,lane:0,continuesLeft:!1,continuesRight:!1,isDragging:!1,isDragActive:!1,onClick:e,onDragStart:e,weekDates:o}),n.jsx(t,{event:g,startCol:2,endCol:5,lane:1,continuesLeft:!1,continuesRight:!1,isDragging:!1,isDragActive:!1,onClick:e,onDragStart:e,weekDates:o})]})}},c={render:()=>n.jsx("div",{style:{position:"relative",width:"700px",height:"80px"},children:n.jsx(t,{event:s,startCol:1,endCol:4,lane:0,continuesLeft:!1,continuesRight:!1,isDragging:!0,isDragActive:!0,isHovered:!1,onClick:e,onDragStart:e,onMouseEnter:e,onMouseLeave:e,weekDates:o})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '700px',
    height: '80px'
  }}>
      <SpanningBar event={mockEvent} startCol={1} endCol={4} lane={0} continuesLeft={false} continuesRight={false} isDragging={false} isDragActive={false} isHovered={false} onClick={noop} onDragStart={noop} onMouseEnter={noop} onMouseLeave={noop} weekDates={weekDates} />
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '700px',
    height: '80px'
  }}>
      <SpanningBar event={{
      ...mockEvent,
      title: '前週から続く予定'
    }} startCol={0} endCol={2} lane={0} continuesLeft={true} continuesRight={false} isDragging={false} isDragActive={false} isHovered={false} onClick={noop} onDragStart={noop} onMouseEnter={noop} onMouseLeave={noop} weekDates={weekDates} />
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '700px',
    height: '80px'
  }}>
      <SpanningBar event={{
      ...mockEvent,
      title: '来週へ続く予定'
    }} startCol={4} endCol={6} lane={0} continuesLeft={false} continuesRight={true} isDragging={false} isDragActive={false} isHovered={false} onClick={noop} onDragStart={noop} onMouseEnter={noop} onMouseLeave={noop} weekDates={weekDates} />
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const event2: CalendarEvent = {
      id: '2',
      title: '休暇',
      startTime: new Date(2026, 2, 17, 0, 0),
      endTime: new Date(2026, 2, 20, 23, 59),
      color: '#059669',
      allDay: true
    };
    return <div style={{
      position: 'relative',
      width: '700px',
      height: '100px'
    }}>
        <SpanningBar event={mockEvent} startCol={1} endCol={4} lane={0} continuesLeft={false} continuesRight={false} isDragging={false} isDragActive={false} onClick={noop} onDragStart={noop} weekDates={weekDates} />
        <SpanningBar event={event2} startCol={2} endCol={5} lane={1} continuesLeft={false} continuesRight={false} isDragging={false} isDragActive={false} onClick={noop} onDragStart={noop} weekDates={weekDates} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '700px',
    height: '80px'
  }}>
      <SpanningBar event={mockEvent} startCol={1} endCol={4} lane={0} continuesLeft={false} continuesRight={false} isDragging={true} isDragActive={true} isHovered={false} onClick={noop} onDragStart={noop} onMouseEnter={noop} onMouseLeave={noop} weekDates={weekDates} />
    </div>
}`,...c.parameters?.docs?.source}}};const k=["Default","ContinuesLeft","ContinuesRight","MultipleLanes","Dragging"];export{i as ContinuesLeft,r as ContinuesRight,a as Default,c as Dragging,l as MultipleLanes,k as __namedExportsOrder,x as default};
