import{j as e}from"./iframe-Dr-9ywM0.js";import{WeekView as s}from"./WeekView-BoKzTfLy.js";import{P as i,c as D,s as u}from"./calendar-ByRGoo5r.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-Ob2IG1Fl.js";import"./EventCardContainer-xdLRvAL9.js";import"./CalendarEventCard-rVEsRofs.js";import"./dom-CKarFDmb.js";import"./IconLabel-DnTyRgXz.js";import"./Icon-B4-Rqhyi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";import"./CalendarDragOverlay-C3xZAkBu.js";import"./index-tM4jeXja.js";import"./index-D0y9h0Oi.js";import"./useDragGhost-OZCW3NsC.js";const z={title:"カレンダー/週表示/WeekView",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"週表示ビュー。7日分のDayColumnを横並びに表示し、終日イベントバー、時間ラベルを含む。"}}}},r=async()=>{};function a(t){const n=D();return n.set(u,t),n}const h=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,16,10,0),endTime:new Date(2026,2,16,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,17,12,0),endTime:new Date(2026,2,17,13,0),color:"#059669"},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,18,14,0),endTime:new Date(2026,2,18,15,30),color:"#dc2626"},{id:"4",title:"終日イベント",startTime:new Date(2026,2,19,0,0),endTime:new Date(2026,2,19,23,59,59,999),color:"#8b5cf6",allDay:!0},{id:"5",title:"1on1",startTime:new Date(2026,2,20,15,0),endTime:new Date(2026,2,20,15,30),color:"#f59e0b"}],c={render:()=>{const t=a(new Date(2026,2,18));return e.jsx(i,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:h,persistEvent:r,removeEvent:r})})})}},d={render:()=>{const t=[...h,{id:"6",title:"出張",startTime:new Date(2026,2,16,0,0),endTime:new Date(2026,2,18,23,59),color:"#ec4899",allDay:!0},{id:"7",title:"研修",startTime:new Date(2026,2,20,0,0),endTime:new Date(2026,2,21,23,59),color:"#06b6d4",allDay:!0}],n=a(new Date(2026,2,18));return e.jsx(i,{store:n,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:r,removeEvent:r})})})}},v={render:()=>{const t=Array.from({length:21},(w,o)=>({id:String(o+1),title:`予定 ${o+1}`,startTime:new Date(2026,2,15+o%7,8+Math.floor(o/7)*3,0),endTime:new Date(2026,2,15+o%7,9+Math.floor(o/7)*3,0),color:["#4f46e5","#059669","#dc2626","#8b5cf6","#f59e0b","#ec4899","#06b6d4"][o%7]})),n=a(new Date(2026,2,18));return e.jsx(i,{store:n,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:r,removeEvent:r})})})}},m={render:()=>{const t=a(new Date(2026,2,18));return e.jsx(i,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:h,showAllDayBar:!1,persistEvent:r,removeEvent:r})})})}},l={render:()=>{const t=[...h,{id:"repeat-1",title:"朝会",startTime:new Date(2026,2,16,9,0),endTime:new Date(2026,2,16,9,15),color:"#84cc16",repeat:[1,2,3,4,5],repeatPeriodStart:new Date(2026,2,1),repeatPeriodEnd:new Date(2026,2,31)}],n=a(new Date(2026,2,18));return e.jsx(i,{store:n,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:t,persistEvent:r,removeEvent:r})})})}},p={render:()=>{const t=a(new Date(2026,2,18));return e.jsx(i,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:[],persistEvent:r,removeEvent:r})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={mockEvents} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [...mockEvents, {
      id: '6',
      title: '出張',
      startTime: new Date(2026, 2, 16, 0, 0),
      endTime: new Date(2026, 2, 18, 23, 59),
      color: '#ec4899',
      allDay: true
    }, {
      id: '7',
      title: '研修',
      startTime: new Date(2026, 2, 20, 0, 0),
      endTime: new Date(2026, 2, 21, 23, 59),
      color: '#06b6d4',
      allDay: true
    }];
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={events} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const busy: CalendarEvent[] = Array.from({
      length: 21
    }, (_, i) => ({
      id: String(i + 1),
      title: \`予定 \${i + 1}\`,
      startTime: new Date(2026, 2, 15 + i % 7, 8 + Math.floor(i / 7) * 3, 0),
      endTime: new Date(2026, 2, 15 + i % 7, 9 + Math.floor(i / 7) * 3, 0),
      color: ['#4f46e5', '#059669', '#dc2626', '#8b5cf6', '#f59e0b', '#ec4899', '#06b6d4'][i % 7]
    }));
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={busy} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={mockEvents} showAllDayBar={false} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [...mockEvents, {
      id: 'repeat-1',
      title: '朝会',
      startTime: new Date(2026, 2, 16, 9, 0),
      endTime: new Date(2026, 2, 16, 9, 15),
      color: '#84cc16',
      repeat: [1, 2, 3, 4, 5] as const,
      repeatPeriodStart: new Date(2026, 2, 1),
      repeatPeriodEnd: new Date(2026, 2, 31)
    }];
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={events} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithDate(new Date(2026, 2, 18));
    return <Provider store={store}>
        <div style={{
        height: '100vh'
      }}>
          <WeekView events={[]} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};const F=["Default","MultipleAllDayEvents","BusyWeek","WithoutAllDayBar","WithRepeatEvents","Empty"];export{v as BusyWeek,c as Default,p as Empty,d as MultipleAllDayEvents,l as WithRepeatEvents,m as WithoutAllDayBar,F as __namedExportsOrder,z as default};
