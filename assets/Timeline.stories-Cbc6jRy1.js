import{j as e}from"./iframe-Dq39NNb-.js";import{T as n}from"./Timeline-BqMME4Nd.js";import{P as s}from"./calendar-D-CiF-pt.js";import"./preload-helper-PPVm8Dsz.js";import"./DayFrame-C2Fiol8F.js";import"./dates-Cuj7-6DL.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-BV12XF0n.js";import"./CalendarEventCard-CCG92pju.js";import"./dom-CznJ0sJH.js";import"./IconLabel-CkwJAnxG.js";import"./Icon-CkCT-6lM.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";import"./CalendarDragOverlay-Y6pkjhwZ.js";import"./index-D9nu_x0-.js";import"./index-nak_duPe.js";const _={title:"カレンダー/Timeline",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"無限スクロール対応のタイムラインビュー。DayFrameを連続表示し、日単位でイベントを描画する。"}}}},r=async()=>{},m=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#059669"},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,21,14,0),endTime:new Date(2026,2,21,15,30),color:"#dc2626"}],t={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:m,persistEvent:r,removeEvent:r})})})},o={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:m,headerVariant:"subtle",persistEvent:r,removeEvent:r})})})},i={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:[],persistEvent:r,removeEvent:r})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={mockEvents} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={mockEvents} headerVariant="subtle" persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={[]} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...i.parameters?.docs?.source}}};const H=["Default","SubtleHeader","Empty"];export{t as Default,i as Empty,o as SubtleHeader,H as __namedExportsOrder,_ as default};
