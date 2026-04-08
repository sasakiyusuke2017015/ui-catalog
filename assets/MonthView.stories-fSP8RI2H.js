import{j as e}from"./iframe-CUmTO3gC.js";import{MonthView as s}from"./MonthView--wijyueh.js";import{P as a,c as D,s as h}from"./calendar-BLRXBA8u.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./SpanningBar-KASopX3M.js";import"./IconLabel-Dzdeglj2.js";import"./Icon-BESojGLS.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./MonthDragOverlay-DPmd7G3I.js";import"./index-DIiUaLAC.js";import"./index-DsqR-KQF.js";import"./useDragGhost-COBt4E0J.js";import"./MonthDayCell-BIENM8F7.js";import"./MonthEventCard-Dxnh1f2A.js";import"./isToday-BV7SHyy-.js";import"./repeatUtils-DcqmxUp3.js";const O={title:"カレンダー/月表示/MonthView",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"月表示ビュー。カレンダーグリッド、複数日イベントのスパニングバー、イベントのドラッグ&ドロップに対応。"}}}},n=async()=>{};function i(t){const r=D();return r.set(h,t),r}const l=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"出張",startTime:new Date(2026,2,16,0,0),endTime:new Date(2026,2,19,23,59),color:"#059669",allDay:!0},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,25,14,0),endTime:new Date(2026,2,25,15,30),color:"#dc2626"},{id:"4",title:"スプリント計画",startTime:new Date(2026,2,23,9,0),endTime:new Date(2026,2,23,10,0),color:"#8b5cf6"}],d={render:()=>{const t=i(new Date(2026,2,20));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:l,persistEvent:n,removeEvent:n})})})}},c={render:()=>{const t=[...l,{id:"5",title:"海外カンファレンス",startTime:new Date(2026,2,2,0,0),endTime:new Date(2026,2,6,23,59),color:"#f59e0b",allDay:!0},{id:"6",title:"リリーススプリント",startTime:new Date(2026,2,9,0,0),endTime:new Date(2026,2,13,23,59),color:"#ec4899",allDay:!0},{id:"7",title:"研修",startTime:new Date(2026,2,26,0,0),endTime:new Date(2026,2,28,23,59),color:"#06b6d4",allDay:!0}],r=i(new Date(2026,2,15));return e.jsx(a,{store:r,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:n,removeEvent:n})})})}},m={render:()=>{const t=Array.from({length:20},(w,o)=>({id:String(o+1),title:`予定 ${o+1}`,startTime:new Date(2026,2,1+o%28,9+o%8,0),endTime:new Date(2026,2,1+o%28,10+o%8,0),color:["#4f46e5","#059669","#dc2626","#8b5cf6","#f59e0b"][o%5]})),r=i(new Date(2026,2,15));return e.jsx(a,{store:r,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:n,removeEvent:n})})})}},p={render:()=>{const t=[{id:"repeat-1",title:"週次定例",startTime:new Date(2026,2,2,10,0),endTime:new Date(2026,2,2,11,0),color:"#4f46e5",repeat:[1],repeatPeriodStart:new Date(2026,2,1),repeatPeriodEnd:new Date(2026,2,31)},{id:"repeat-2",title:"朝会",startTime:new Date(2026,2,2,9,0),endTime:new Date(2026,2,2,9,15),color:"#059669",repeat:[1,2,3,4,5],repeatPeriodStart:new Date(2026,2,1),repeatPeriodEnd:new Date(2026,2,31)}],r=i(new Date(2026,2,15));return e.jsx(a,{store:r,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:n,removeEvent:n})})})}},v={render:()=>{const t=i(new Date(2026,2,20));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:[],persistEvent:n,removeEvent:n})})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 20));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <MonthView events={mockEvents} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [...mockEvents, {
      id: '5',
      title: '海外カンファレンス',
      startTime: new Date(2026, 2, 2, 0, 0),
      endTime: new Date(2026, 2, 6, 23, 59),
      color: '#f59e0b',
      allDay: true
    }, {
      id: '6',
      title: 'リリーススプリント',
      startTime: new Date(2026, 2, 9, 0, 0),
      endTime: new Date(2026, 2, 13, 23, 59),
      color: '#ec4899',
      allDay: true
    }, {
      id: '7',
      title: '研修',
      startTime: new Date(2026, 2, 26, 0, 0),
      endTime: new Date(2026, 2, 28, 23, 59),
      color: '#06b6d4',
      allDay: true
    }];
    const store = createStoreWithDate(new Date(2026, 2, 15));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <MonthView events={events} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const busy: CalendarEvent[] = Array.from({
      length: 20
    }, (_, i) => ({
      id: String(i + 1),
      title: \`予定 \${i + 1}\`,
      startTime: new Date(2026, 2, 1 + i % 28, 9 + i % 8, 0),
      endTime: new Date(2026, 2, 1 + i % 28, 10 + i % 8, 0),
      color: ['#4f46e5', '#059669', '#dc2626', '#8b5cf6', '#f59e0b'][i % 5]
    }));
    const store = createStoreWithDate(new Date(2026, 2, 15));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <MonthView events={busy} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [{
      id: 'repeat-1',
      title: '週次定例',
      startTime: new Date(2026, 2, 2, 10, 0),
      endTime: new Date(2026, 2, 2, 11, 0),
      color: '#4f46e5',
      repeat: [1] as const,
      repeatPeriodStart: new Date(2026, 2, 1),
      repeatPeriodEnd: new Date(2026, 2, 31)
    }, {
      id: 'repeat-2',
      title: '朝会',
      startTime: new Date(2026, 2, 2, 9, 0),
      endTime: new Date(2026, 2, 2, 9, 15),
      color: '#059669',
      repeat: [1, 2, 3, 4, 5] as const,
      repeatPeriodStart: new Date(2026, 2, 1),
      repeatPeriodEnd: new Date(2026, 2, 31)
    }];
    const store = createStoreWithDate(new Date(2026, 2, 15));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <MonthView events={events} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 20));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <MonthView events={[]} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...v.parameters?.docs?.source}}};const q=["Default","ManySpanningEvents","BusyMonth","RepeatEvents","Empty"];export{m as BusyMonth,d as Default,v as Empty,c as ManySpanningEvents,p as RepeatEvents,q as __namedExportsOrder,O as default};
