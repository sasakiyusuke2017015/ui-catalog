import{j as l}from"./iframe-2z8Hl2jC.js";import{AgendaView as v}from"./AgendaView-CIDrru6k.js";import{P as D}from"./calendar-DULoJ3WQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-HPLyWBSF.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./Icon-DQoCPfk-.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./isToday-BV7SHyy-.js";const R={title:"Organisms/AgendaView",component:v,decorators:[r=>l.jsx(D,{children:l.jsx("div",{style:{height:"600px"},children:l.jsx(r,{})})})],parameters:{layout:"fullscreen"}},d=new Date,e=d.getDate(),t=d.getMonth(),n=d.getFullYear(),p=[{id:"1",title:"朝会",startTime:new Date(n,t,e,9,0),endTime:new Date(n,t,e,9,30),color:"#3b82f6",description:"チーム全体の朝礼",icon:"users-group"},{id:"2",title:"プロジェクト進捗確認",startTime:new Date(n,t,e,10,0),endTime:new Date(n,t,e,11,0),color:"#8b5cf6",description:"週次の進捗確認MTG"},{id:"3",title:"ランチMTG",startTime:new Date(n,t,e,12,0),endTime:new Date(n,t,e,13,0),color:"#10b981",description:"新メンバー歓迎ランチ",icon:"chat"},{id:"4",title:"コードレビュー",startTime:new Date(n,t,e,15,0),endTime:new Date(n,t,e,16,0),color:"#f59e0b",description:"PR #123 のレビュー",icon:"file"},{id:"5",title:"1on1面談",startTime:new Date(n,t,e+1,14,0),endTime:new Date(n,t,e+1,15,0),color:"#ec4899",description:"月次1on1面談",icon:"person"},{id:"6",title:"リリース準備",startTime:new Date(n,t,e+2,0,0),endTime:new Date(n,t,e+2,23,59),color:"#f59e0b",allDay:!0,description:"v2.0リリース準備作業"},{id:"7",title:"部門会議",startTime:new Date(n,t,e+2,13,0),endTime:new Date(n,t,e+2,14,30),color:"#3b82f6",description:"月次部門全体会議",icon:"users-group"},{id:"8",title:"スプリントレビュー",startTime:new Date(n,t,e+3,15,0),endTime:new Date(n,t,e+3,16,30),color:"#8b5cf6",description:"スプリント成果発表"},{id:"9",title:"顧客訪問",startTime:new Date(n,t,e+7,10,0),endTime:new Date(n,t,e+7,12,0),color:"#10b981",description:"A社様への提案",icon:"arrow-up-right"},{id:"10",title:"技術勉強会",startTime:new Date(n,t,e+8,17,0),endTime:new Date(n,t,e+8,18,30),color:"#f59e0b",description:"React 19新機能について",icon:"list"}],c=async r=>{console.log("persistEvent:",r)},m=async r=>{console.log("removeEvent:",r)},o={args:{events:p,persistEvent:c,removeEvent:m}},s={args:{events:[],persistEvent:c,removeEvent:m}},i={args:{events:p.slice(0,4),persistEvent:c,removeEvent:m}},a={args:{events:[{id:"1",title:"プロジェクトキックオフ",startTime:new Date(n,t,e,0,0),endTime:new Date(n,t,e,23,59),color:"#3b82f6",allDay:!0},{id:"2",title:"リリース日",startTime:new Date(n,t,e+1,0,0),endTime:new Date(n,t,e+1,23,59),color:"#f59e0b",allDay:!0}],persistEvent:c,removeEvent:m}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    events: mockEvents,
    persistEvent: mockPersistEvent,
    removeEvent: mockRemoveEvent
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    persistEvent: mockPersistEvent,
    removeEvent: mockRemoveEvent
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    events: mockEvents.slice(0, 4),
    persistEvent: mockPersistEvent,
    removeEvent: mockRemoveEvent
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      title: 'プロジェクトキックオフ',
      startTime: new Date(currentYear, currentMonth, today, 0, 0),
      endTime: new Date(currentYear, currentMonth, today, 23, 59),
      color: '#3b82f6',
      allDay: true
    }, {
      id: '2',
      title: 'リリース日',
      startTime: new Date(currentYear, currentMonth, today + 1, 0, 0),
      endTime: new Date(currentYear, currentMonth, today + 1, 23, 59),
      color: '#f59e0b',
      allDay: true
    }],
    persistEvent: mockPersistEvent,
    removeEvent: mockRemoveEvent
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","Empty","SingleDay","AllDayEvents"];export{a as AllDayEvents,o as Default,s as Empty,i as SingleDay,S as __namedExportsOrder,R as default};
