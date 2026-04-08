import{j as e}from"./iframe-LfAIox-3.js";import{P as r}from"./Progress-Dsr5dGzc.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"フィードバック/通知/Progress",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"現在の値",control:{type:"range",min:0,max:100,step:1}},max:{description:"最大値",control:{type:"number"}},size:{description:"サイズ",control:{type:"select"},options:["small","medium","large"]},color:{description:"色",control:{type:"select"},options:["blue","green","red","yellow","gray","orange"]},showLabel:{description:"パーセントラベルを表示",control:{type:"boolean"}},isStalled:{description:"停滞状態（警告色に自動変更）",control:{type:"boolean"}},animation:{description:"アニメーション種類",control:{type:"select"},options:["none","pulse","shimmer"]}}},o={args:{value:60,size:"medium",color:"blue"},decorators:[s=>e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{})})]},n={render:()=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:["small","medium","large"].map(s=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:s}),e.jsx(r,{value:65,size:s})]},s))})},a={render:()=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:["blue","green","red","yellow","orange","gray"].map(s=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:s}),e.jsx(r,{value:70,color:s})]},s))})},l={args:{value:75,size:"large",color:"green",showLabel:!0},decorators:[s=>e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{})})]},i={name:"停滞状態",args:{value:45,size:"medium",isStalled:!0},decorators:[s=>e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{})})]},t={name:"アニメーション",render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:"none（静止）"}),e.jsx(r,{value:60,animation:"none"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:"pulse（点滅）"}),e.jsx(r,{value:60,animation:"pulse"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:"shimmer（流れる光）"}),e.jsx(r,{value:60,animation:"shimmer"})]})]})},d={name:"食材HP表示例",render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"安全 (80%)"}),e.jsx(r,{value:80,size:"small",color:"green"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"注意 (35%)"}),e.jsx(r,{value:35,size:"small",color:"yellow"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"危険 (10%)"}),e.jsx(r,{value:10,size:"small",color:"red"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'medium',
    color: 'blue'
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size}>
          <span style={{
        fontSize: '0.75rem',
        marginBottom: '4px',
        display: 'block'
      }}>{size}</span>
          <Progress value={65} size={size} />
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {(['blue', 'green', 'red', 'yellow', 'orange', 'gray'] as const).map(color => <div key={color}>
          <span style={{
        fontSize: '0.75rem',
        marginBottom: '4px',
        display: 'block'
      }}>{color}</span>
          <Progress value={70} color={color} />
        </div>)}
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'large',
    color: 'green',
    showLabel: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '停滞状態',
  args: {
    value: 45,
    size: 'medium',
    isStalled: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'アニメーション',
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <span style={{
        fontSize: '0.75rem',
        marginBottom: '4px',
        display: 'block'
      }}>none（静止）</span>
        <Progress value={60} animation="none" />
      </div>
      <div>
        <span style={{
        fontSize: '0.75rem',
        marginBottom: '4px',
        display: 'block'
      }}>pulse（点滅）</span>
        <Progress value={60} animation="pulse" />
      </div>
      <div>
        <span style={{
        fontSize: '0.75rem',
        marginBottom: '4px',
        display: 'block'
      }}>shimmer（流れる光）</span>
        <Progress value={60} animation="shimmer" />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '食材HP表示例',
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div>
        <span style={{
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>安全 (80%)</span>
        <Progress value={80} size="small" color="green" />
      </div>
      <div>
        <span style={{
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>注意 (35%)</span>
        <Progress value={35} size="small" color="yellow" />
      </div>
      <div>
        <span style={{
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>危険 (10%)</span>
        <Progress value={10} size="small" color="red" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const u=["Default","Sizes","Colors","WithLabel","Stalled","Animations","FoodHPExample"];export{t as Animations,a as Colors,o as Default,d as FoodHPExample,n as Sizes,i as Stalled,l as WithLabel,u as __namedExportsOrder,x as default};
