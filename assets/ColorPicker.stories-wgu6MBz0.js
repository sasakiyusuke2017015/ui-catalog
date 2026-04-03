import{r as s,j as r}from"./iframe-Cs_9Z8TU.js";import{C as t,E as u}from"./ColorPicker-C75H_qIJ.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"カレンダー/ColorPicker",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"カラーパレットから色を選択するピッカー。丸いスウォッチをクリックして選択する。"}}}},n={render:()=>{const[e,a]=s.useState(u[0].value);return r.jsxs("div",{children:[r.jsx(t,{value:e,onChange:a}),r.jsxs("p",{style:{marginTop:"12px",fontSize:"13px",color:"#6b7280"},children:["選択中: ",e]})]})}},l={render:()=>{const e=[{value:"#ef4444",label:"Red"},{value:"#f97316",label:"Orange"},{value:"#eab308",label:"Yellow"},{value:"#22c55e",label:"Green"},{value:"#3b82f6",label:"Blue"}],[a,c]=s.useState(e[0].value);return r.jsx(t,{value:a,onChange:c,colors:e})}},o={render:()=>{const[e,a]=s.useState(u[0].value);return r.jsx(t,{value:e,onChange:a,size:40})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(EVENT_COLORS[0]!.value);
    return <div>
        <ColorPicker value={value} onChange={setValue} />
        <p style={{
        marginTop: '12px',
        fontSize: '13px',
        color: '#6b7280'
      }}>
          選択中: {value}
        </p>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const palette = [{
      value: '#ef4444',
      label: 'Red'
    }, {
      value: '#f97316',
      label: 'Orange'
    }, {
      value: '#eab308',
      label: 'Yellow'
    }, {
      value: '#22c55e',
      label: 'Green'
    }, {
      value: '#3b82f6',
      label: 'Blue'
    }];
    const [value, setValue] = useState(palette[0]!.value);
    return <ColorPicker value={value} onChange={setValue} colors={palette} />;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(EVENT_COLORS[0]!.value);
    return <ColorPicker value={value} onChange={setValue} size={40} />;
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","CustomColors","LargeSize"];export{l as CustomColors,n as Default,o as LargeSize,m as __namedExportsOrder,d as default};
