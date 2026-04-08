import{j as t}from"./iframe-CAHZyj7a.js";import{M as n}from"./MonthDayCell-i5w0ABw-.js";import"./preload-helper-PPVm8Dsz.js";import"./MonthEventCard-DQB8ei3x.js";import"./Icon-B9P1-3Zv.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./isToday-BV7SHyy-.js";const h={title:"カレンダー/月表示/MonthDayCell",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"月表示の1日分のセル。日付ラベル、イベントカード、展開/折りたたみ機能を持つ。"}}}},a=new Date(2026,2,20),i=[{id:"1",title:"ミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#059669"}],e=()=>{},s={render:()=>t.jsx("div",{style:{width:"160px",height:"140px"},children:t.jsx(n,{date:a,selectedDate:a,events:i,spanningIds:new Set,laneAreaH:0,isActive:!1,isDropTarget:!1,dragEventId:null,todayCellClass:"",dropTargetClass:"",onDayClick:e,onEventClick:e,onEventDragStart:e})})},r={render:()=>t.jsx("div",{style:{width:"160px",height:"140px"},children:t.jsx(n,{date:a,selectedDate:a,events:i,spanningIds:new Set,laneAreaH:0,isActive:!0,isDropTarget:!1,dragEventId:null,todayCellClass:"",dropTargetClass:"",onDayClick:e,onEventClick:e,onEventDragStart:e})})},o={render:()=>{const d=[{id:"1",title:"朝会",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,9,30),color:"#4f46e5"},{id:"2",title:"レビュー",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#059669"},{id:"3",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#dc2626"},{id:"4",title:"1on1",startTime:new Date(2026,2,20,15,0),endTime:new Date(2026,2,20,15,30),color:"#8b5cf6"},{id:"5",title:"夕会",startTime:new Date(2026,2,20,17,0),endTime:new Date(2026,2,20,17,30),color:"#f59e0b"}];return t.jsx("div",{style:{width:"160px",height:"200px"},children:t.jsx(n,{date:a,selectedDate:a,events:d,spanningIds:new Set,laneAreaH:0,isActive:!1,isDropTarget:!1,dragEventId:null,todayCellClass:"",dropTargetClass:"",onDayClick:e,onEventClick:e,onEventDragStart:e})})}},l={render:()=>t.jsx("div",{style:{width:"160px",height:"100px"},children:t.jsx(n,{date:a,selectedDate:a,events:[],spanningIds:new Set,laneAreaH:0,isActive:!1,isDropTarget:!1,dragEventId:null,todayCellClass:"",dropTargetClass:"",onDayClick:e,onEventClick:e,onEventDragStart:e})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '160px',
    height: '140px'
  }}>
      <MonthDayCell date={today} selectedDate={today} events={mockEvents} spanningIds={new Set()} laneAreaH={0} isActive={false} isDropTarget={false} dragEventId={null} todayCellClass="" dropTargetClass="" onDayClick={noop} onEventClick={noop} onEventDragStart={noop} />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '160px',
    height: '140px'
  }}>
      <MonthDayCell date={today} selectedDate={today} events={mockEvents} spanningIds={new Set()} laneAreaH={0} isActive={true} isDropTarget={false} dragEventId={null} todayCellClass="" dropTargetClass="" onDayClick={noop} onEventClick={noop} onEventDragStart={noop} />
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [{
      id: '1',
      title: '朝会',
      startTime: new Date(2026, 2, 20, 9, 0),
      endTime: new Date(2026, 2, 20, 9, 30),
      color: '#4f46e5'
    }, {
      id: '2',
      title: 'レビュー',
      startTime: new Date(2026, 2, 20, 10, 0),
      endTime: new Date(2026, 2, 20, 11, 0),
      color: '#059669'
    }, {
      id: '3',
      title: 'ランチ',
      startTime: new Date(2026, 2, 20, 12, 0),
      endTime: new Date(2026, 2, 20, 13, 0),
      color: '#dc2626'
    }, {
      id: '4',
      title: '1on1',
      startTime: new Date(2026, 2, 20, 15, 0),
      endTime: new Date(2026, 2, 20, 15, 30),
      color: '#8b5cf6'
    }, {
      id: '5',
      title: '夕会',
      startTime: new Date(2026, 2, 20, 17, 0),
      endTime: new Date(2026, 2, 20, 17, 30),
      color: '#f59e0b'
    }];
    return <div style={{
      width: '160px',
      height: '200px'
    }}>
        <MonthDayCell date={today} selectedDate={today} events={events} spanningIds={new Set()} laneAreaH={0} isActive={false} isDropTarget={false} dragEventId={null} todayCellClass="" dropTargetClass="" onDayClick={noop} onEventClick={noop} onEventDragStart={noop} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '160px',
    height: '100px'
  }}>
      <MonthDayCell date={today} selectedDate={today} events={[]} spanningIds={new Set()} laneAreaH={0} isActive={false} isDropTarget={false} dragEventId={null} todayCellClass="" dropTargetClass="" onDayClick={noop} onEventClick={noop} onEventDragStart={noop} />
    </div>
}`,...l.parameters?.docs?.source}}};const E=["Default","Active","ManyEvents","Empty"];export{r as Active,s as Default,l as Empty,o as ManyEvents,E as __namedExportsOrder,h as default};
