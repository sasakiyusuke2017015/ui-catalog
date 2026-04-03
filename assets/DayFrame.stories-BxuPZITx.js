import{j as e}from"./iframe-TXWPROLT.js";import{D as a}from"./DayFrame-CMUQCcpd.js";import{P as s}from"./calendar-DvnAj4vC.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-Cuj7-6DL.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-BREYsQL3.js";import"./CalendarEventCard-DiTxQQcM.js";import"./dom-CznJ0sJH.js";import"./IconLabel-BvR4x20W.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";const F={title:"カレンダー/DayFrame",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"1日分のフレーム。日付ヘッダーとDayColumnを含み、スティッキーヘッダー対応。blur/subtleの2つのヘッダーバリアントを持つ。"}}}},d=new Date(2026,2,20),i=[{id:"1",title:"モーニングスタンドアップ",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,9,30),color:"#4f46e5"},{id:"2",title:"プロジェクトレビュー",startTime:new Date(2026,2,20,14,0),endTime:new Date(2026,2,20,15,30),color:"#059669"}],t=()=>{},o={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(a,{date:d,events:i,onDeleteEvent:t,onUpdateEvent:t})})})},r={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(a,{date:d,events:i,headerVariant:"subtle",onDeleteEvent:t,onUpdateEvent:t})})})},n={render:()=>e.jsx(s,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(a,{date:d,events:[],onDeleteEvent:t,onUpdateEvent:t})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={today} events={mockEvents} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={today} events={mockEvents} headerVariant="subtle" onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={today} events={[]} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...n.parameters?.docs?.source}}};const U=["Default","SubtleHeader","Empty"];export{o as Default,n as Empty,r as SubtleHeader,U as __namedExportsOrder,F as default};
