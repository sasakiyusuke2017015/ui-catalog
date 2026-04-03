import{j as e}from"./iframe-DWeAzsMr.js";import{W as i}from"./WeekView-BPTruoaz.js";import{P as a,c as p,s as v}from"./calendar-CjdiwpG-.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-Cuj7-6DL.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-DWHz9Hdp.js";import"./CalendarEventCard-jakgwZFk.js";import"./dom-CznJ0sJH.js";import"./IconLabel-Bl4deThz.js";import"./Icon-DEMmUoH3.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";import"./CalendarDragOverlay-120zj7qV.js";import"./index-CYwZz33A.js";import"./index-BsLbGRGr.js";const b={title:"カレンダー/WeekView",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"週表示ビュー。7日分のDayColumnを横並びに表示し、終日イベントバー、時間ラベルを含む。"}}}},r=async()=>{};function c(t){const m=p();return m.set(v,t),m}const d=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,16,10,0),endTime:new Date(2026,2,16,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,17,12,0),endTime:new Date(2026,2,17,13,0),color:"#059669"},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,18,14,0),endTime:new Date(2026,2,18,15,30),color:"#dc2626"},{id:"4",title:"終日イベント",startTime:new Date(2026,2,19,0,0),endTime:new Date(2026,2,19,23,59,59,999),color:"#8b5cf6",allDay:!0},{id:"5",title:"1on1",startTime:new Date(2026,2,20,15,0),endTime:new Date(2026,2,20,15,30),color:"#f59e0b"}],o={render:()=>{const t=c(new Date(2026,2,18));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(i,{events:d,persistEvent:r,removeEvent:r})})})}},n={render:()=>{const t=c(new Date(2026,2,18));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(i,{events:d,showAllDayBar:!1,persistEvent:r,removeEvent:r})})})}},s={render:()=>{const t=c(new Date(2026,2,18));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(i,{events:[],persistEvent:r,removeEvent:r})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const C=["Default","WithoutAllDayBar","Empty"];export{o as Default,s as Empty,n as WithoutAllDayBar,C as __namedExportsOrder,b as default};
