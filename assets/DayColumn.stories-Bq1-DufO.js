import{j as e}from"./iframe-WcLOoCbh.js";import{D as n}from"./DayColumn-D41K8v0M.js";import{P as o}from"./calendar-CcPESAMd.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./EventCardContainer-CJ7EFMNC.js";import"./CalendarEventCard-Dcxr-APm.js";import"./dom-CKarFDmb.js";import"./IconLabel-B8HYoVDf.js";import"./Icon-BFvk5KuG.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";const _={title:"カレンダー/日表示/DayColumn",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"1日分のタイムラインカラム。24時間のスロットとイベントを表示し、スロットドラッグによるイベント作成に対応。"}}}},r=new Date(2026,2,20),t=()=>{},v=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#059669"},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,20,14,0),endTime:new Date(2026,2,20,15,30),color:"#dc2626"}],s={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:r,events:v,slotHeight:56,labelWidth:64,onDeleteEvent:t,onUpdateEvent:t})})})},d={render:()=>{const a=[{id:"1",title:"ミーティングA",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,30),color:"#4f46e5"},{id:"2",title:"ミーティングB",startTime:new Date(2026,2,20,10,30),endTime:new Date(2026,2,20,12,0),color:"#059669"},{id:"3",title:"ミーティングC",startTime:new Date(2026,2,20,11,0),endTime:new Date(2026,2,20,11,45),color:"#dc2626"}];return e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:r,events:a,slotHeight:56,labelWidth:64,onDeleteEvent:t,onUpdateEvent:t})})})}},l={render:()=>{const a=Array.from({length:8},(h,i)=>({id:String(i+1),title:`イベント ${i+1}`,startTime:new Date(2026,2,20,8+i,0),endTime:new Date(2026,2,20,8+i,45),color:["#4f46e5","#059669","#dc2626","#8b5cf6","#f59e0b","#ec4899","#06b6d4","#84cc16"][i]}));return e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:r,events:a,slotHeight:56,labelWidth:64,onDeleteEvent:t,onUpdateEvent:t})})})}},c={render:()=>{const a=[{id:"1",title:"早朝ジョギング",startTime:new Date(2026,2,20,5,30),endTime:new Date(2026,2,20,6,30),color:"#06b6d4"},{id:"2",title:"朝食",startTime:new Date(2026,2,20,7,0),endTime:new Date(2026,2,20,7,30),color:"#f59e0b"}];return e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:r,events:a,slotHeight:56,labelWidth:64,onDeleteEvent:t,onUpdateEvent:t})})})}},p={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:r,events:[],slotHeight:56,labelWidth:64,onDeleteEvent:t,onUpdateEvent:t})})})},m={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"600px",overflow:"auto",width:"300px"},children:e.jsx(n,{date:r,events:v,slotHeight:56,onDeleteEvent:t,onUpdateEvent:t})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayColumn date={today} events={mockEvents} slotHeight={56} labelWidth={64} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const overlapping: CalendarEvent[] = [{
      id: '1',
      title: 'ミーティングA',
      startTime: new Date(2026, 2, 20, 10, 0),
      endTime: new Date(2026, 2, 20, 11, 30),
      color: '#4f46e5'
    }, {
      id: '2',
      title: 'ミーティングB',
      startTime: new Date(2026, 2, 20, 10, 30),
      endTime: new Date(2026, 2, 20, 12, 0),
      color: '#059669'
    }, {
      id: '3',
      title: 'ミーティングC',
      startTime: new Date(2026, 2, 20, 11, 0),
      endTime: new Date(2026, 2, 20, 11, 45),
      color: '#dc2626'
    }];
    return <Provider>
        <div style={{
        height: '600px',
        overflow: 'auto'
      }}>
          <DayColumn date={today} events={overlapping} slotHeight={56} labelWidth={64} onDeleteEvent={noop} onUpdateEvent={noop} />
        </div>
      </Provider>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const busy: CalendarEvent[] = Array.from({
      length: 8
    }, (_, i) => ({
      id: String(i + 1),
      title: \`イベント \${i + 1}\`,
      startTime: new Date(2026, 2, 20, 8 + i, 0),
      endTime: new Date(2026, 2, 20, 8 + i, 45),
      color: ['#4f46e5', '#059669', '#dc2626', '#8b5cf6', '#f59e0b', '#ec4899', '#06b6d4', '#84cc16'][i]
    }));
    return <Provider>
        <div style={{
        height: '600px',
        overflow: 'auto'
      }}>
          <DayColumn date={today} events={busy} slotHeight={56} labelWidth={64} onDeleteEvent={noop} onUpdateEvent={noop} />
        </div>
      </Provider>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const earlyEvents: CalendarEvent[] = [{
      id: '1',
      title: '早朝ジョギング',
      startTime: new Date(2026, 2, 20, 5, 30),
      endTime: new Date(2026, 2, 20, 6, 30),
      color: '#06b6d4'
    }, {
      id: '2',
      title: '朝食',
      startTime: new Date(2026, 2, 20, 7, 0),
      endTime: new Date(2026, 2, 20, 7, 30),
      color: '#f59e0b'
    }];
    return <Provider>
        <div style={{
        height: '600px',
        overflow: 'auto'
      }}>
          <DayColumn date={today} events={earlyEvents} slotHeight={56} labelWidth={64} onDeleteEvent={noop} onUpdateEvent={noop} />
        </div>
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayColumn date={today} events={[]} slotHeight={56} labelWidth={64} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto',
      width: '300px'
    }}>
        <DayColumn date={today} events={mockEvents} slotHeight={56} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...m.parameters?.docs?.source}}};const A=["Default","OverlappingEvents","BusyDay","EarlyMorning","Empty","WithoutLabels"];export{l as BusyDay,s as Default,c as EarlyMorning,p as Empty,d as OverlappingEvents,m as WithoutLabels,A as __namedExportsOrder,_ as default};
