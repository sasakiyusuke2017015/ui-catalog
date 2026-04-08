import{j as a}from"./iframe-CUmTO3gC.js";import{M as e}from"./MonthDragOverlay-DPmd7G3I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIiUaLAC.js";import"./index-DsqR-KQF.js";import"./IconLabel-Dzdeglj2.js";import"./Icon-BESojGLS.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./useDragGhost-COBt4E0J.js";const x={title:"カレンダー/ドラッグ/MonthDragOverlay",component:e,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"ドラッグ中にポインタに追従するゴースト表示。createPortal で body 直下に描画される。"}}}},s={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},i={x:200,y:300},r={render:()=>a.jsx(e,{event:s,initialPointer:i})},t={render:()=>a.jsx(e,{event:{...s,id:"2",title:"締切",color:"#dc2626"},initialPointer:i})},n={render:()=>a.jsx(e,{event:{...s,id:"3",title:"ランチ",color:"#16a34a"},initialPointer:i})},o={render:()=>a.jsx(e,{event:null,initialPointer:i})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <MonthDragOverlay event={baseEvent} initialPointer={pointer} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <MonthDragOverlay event={{
    ...baseEvent,
    id: '2',
    title: '締切',
    color: '#dc2626'
  }} initialPointer={pointer} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <MonthDragOverlay event={{
    ...baseEvent,
    id: '3',
    title: 'ランチ',
    color: '#16a34a'
  }} initialPointer={pointer} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <MonthDragOverlay event={null} initialPointer={pointer} />
}`,...o.parameters?.docs?.source}}};const P=["Default","Red","Green","NoEvent"];export{r as Default,n as Green,o as NoEvent,t as Red,P as __namedExportsOrder,x as default};
