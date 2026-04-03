import{j as e}from"./iframe-BMSfDgIj.js";import{P as s}from"./Progress-DMpuI8FU.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"フィードバック/Progress",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"現在の値",control:{type:"range",min:0,max:100,step:1}},max:{description:"最大値",control:{type:"number"}},size:{description:"サイズ",control:{type:"select"},options:["small","medium","large"]},color:{description:"色",control:{type:"select"},options:["blue","green","red","yellow","gray","orange"]},showLabel:{description:"パーセントラベルを表示",control:{type:"boolean"}}}},o={args:{value:60,size:"medium",color:"blue"},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},l={render:()=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"16px"},children:["small","medium","large"].map(r=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:r}),e.jsx(s,{value:65,size:r})]},r))})},n={render:()=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:["blue","green","red","yellow","orange","gray"].map(r=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",marginBottom:"4px",display:"block"},children:r}),e.jsx(s,{value:70,color:r})]},r))})},a={args:{value:75,size:"large",color:"green",showLabel:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},i={name:"食材HP表示例",render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"安全 (80%)"}),e.jsx(s,{value:80,size:"small",color:"green"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"注意 (35%)"}),e.jsx(s,{value:35,size:"small",color:"yellow"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"危険 (10%)"}),e.jsx(s,{value:10,size:"small",color:"red"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'medium',
    color: 'blue'
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'large',
    color: 'green',
    showLabel: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const m=["Default","Sizes","Colors","WithLabel","FoodHPExample"];export{n as Colors,o as Default,i as FoodHPExample,l as Sizes,a as WithLabel,m as __namedExportsOrder,p as default};
