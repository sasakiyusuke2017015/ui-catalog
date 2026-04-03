import{r as c,j as e}from"./iframe-C6Pnx79y.js";import{T as t}from"./TimeSelect-SJiocisy.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"カレンダー/TimeSelect",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"15分刻みの時刻選択セレクトボックス。値は分数（0-1425）で管理される。"}}}},s={render:()=>{const[r,n]=c.useState(540);return e.jsxs("div",{children:[e.jsx(t,{value:r,onChange:n}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"13px",color:"#6b7280"},children:["選択中: ",Math.floor(r/60),"時",r%60,"分"]})]})}},a={render:()=>{const[r,n]=c.useState(600);return e.jsxs("div",{children:[e.jsx(t,{value:r,onChange:n,error:!0}),e.jsx("p",{style:{marginTop:"8px",fontSize:"13px",color:"#dc2626"},children:"開始時刻より前の時刻が選択されています"})]})}},o={render:()=>{const[r,n]=c.useState(540),[l,d]=c.useState(600),i=l<=r;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(t,{value:r,onChange:n}),e.jsx("span",{style:{color:"#6b7280"},children:"-"}),e.jsx(t,{value:l,onChange:d,error:i})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(9 * 60);
    return <div>
        <TimeSelect value={value} onChange={setValue} />
        <p style={{
        marginTop: '8px',
        fontSize: '13px',
        color: '#6b7280'
      }}>
          選択中: {Math.floor(value / 60)}時{value % 60}分
        </p>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(10 * 60);
    return <div>
        <TimeSelect value={value} onChange={setValue} error />
        <p style={{
        marginTop: '8px',
        fontSize: '13px',
        color: '#dc2626'
      }}>
          開始時刻より前の時刻が選択されています
        </p>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [start, setStart] = useState(9 * 60);
    const [end, setEnd] = useState(10 * 60);
    const hasError = end <= start;
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <TimeSelect value={start} onChange={setStart} />
        <span style={{
        color: '#6b7280'
      }}>-</span>
        <TimeSelect value={end} onChange={setEnd} error={hasError} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const S=["Default","WithError","StartAndEnd"];export{s as Default,o as StartAndEnd,a as WithError,S as __namedExportsOrder,x as default};
