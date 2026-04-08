import{j as e}from"./iframe-LfAIox-3.js";import{T as r}from"./TimeSlotRow-Cpd0J9jz.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"カレンダー/日表示/TimeSlotRow",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"タイムラインの1時間分のスロットを描画するコンポーネント。"}}}},t={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"09:00"})})},s={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"10:00",isActive:!0})})},o={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"14:00",isCurrentHour:!0})})},i={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"11:00",slotHeight:80})})},a={render:()=>{const c=["08:00","09:00","10:00","11:00","12:00"];return e.jsx("div",{style:{width:"400px"},children:c.map((l,d)=>e.jsx(r,{label:l,isActive:d===1,isCurrentHour:d===3},l))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <TimeSlotRow label="09:00" />
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <TimeSlotRow label="10:00" isActive />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <TimeSlotRow label="14:00" isCurrentHour />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <TimeSlotRow label="11:00" slotHeight={80} />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const hours = ['08:00', '09:00', '10:00', '11:00', '12:00'];
    return <div style={{
      width: '400px'
    }}>
        {hours.map((label, i) => <TimeSlotRow key={label} label={label} isActive={i === 1} isCurrentHour={i === 3} />)}
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","Active","CurrentHour","CustomHeight","MultipleSlots"];export{s as Active,o as CurrentHour,i as CustomHeight,t as Default,a as MultipleSlots,x as __namedExportsOrder,m as default};
