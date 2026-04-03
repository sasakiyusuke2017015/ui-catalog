import{j as e}from"./iframe-BOXgkPL4.js";import{M as s}from"./MonthView-VMcJek4O.js";import{P as a,c,s as p}from"./calendar-Da7EYaVv.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-Cuj7-6DL.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./SpanningBar-P4tuTRSn.js";import"./IconLabel-BXwjMYtl.js";import"./Icon-ClaZw29e.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./MonthDragOverlay-Dog6CcMi.js";import"./index-XQ1puMiJ.js";import"./index-mZCw7rg-.js";import"./MonthDayCell-DgMLIGZz.js";import"./MonthEventCard-CewfNZ6G.js";import"./isToday-BV7SHyy-.js";import"./repeatUtils-DcqmxUp3.js";const b={title:"カレンダー/MonthView",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"月表示ビュー。カレンダーグリッド、複数日イベントのスパニングバー、イベントのドラッグ&ドロップに対応。"}}}},n=async()=>{};function m(t){const i=c();return i.set(p,t),i}const d=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"出張",startTime:new Date(2026,2,16,0,0),endTime:new Date(2026,2,19,23,59),color:"#059669",allDay:!0},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,25,14,0),endTime:new Date(2026,2,25,15,30),color:"#dc2626"},{id:"4",title:"スプリント計画",startTime:new Date(2026,2,23,9,0),endTime:new Date(2026,2,23,10,0),color:"#8b5cf6"}],r={render:()=>{const t=m(new Date(2026,2,20));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:d,persistEvent:n,removeEvent:n})})})}},o={render:()=>{const t=m(new Date(2026,2,20));return e.jsx(a,{store:t,children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(s,{events:[],persistEvent:n,removeEvent:n})})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Default","Empty"];export{r as Default,o as Empty,A as __namedExportsOrder,b as default};
