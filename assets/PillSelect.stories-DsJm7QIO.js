import{r,j as e}from"./iframe-WcLOoCbh.js";import{P as s}from"./PillSelect-DWBergOe.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const v={title:"カレンダー/入力/PillSelect",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"ピル型のラジオセレクト。排他的な選択肢を等幅ボタンで表示する。"}}}},u=[{value:"normal",label:"時間指定"},{value:"allDay",label:"終日"},{value:"repeat",label:"繰り返し"}],a={render:()=>{const[n,l]=r.useState("normal");return e.jsxs("div",{style:{width:"340px"},children:[e.jsx(s,{options:u,value:n,onChange:l}),e.jsxs("p",{style:{marginTop:"12px",fontSize:"13px",color:"#6b7280"},children:["選択中: ",n]})]})}},t={render:()=>{const[n,l]=r.useState("on");return e.jsx("div",{style:{width:"240px"},children:e.jsx(s,{options:[{value:"on",label:"オン"},{value:"off",label:"オフ"}],value:n,onChange:l})})}},o={render:()=>{const[n,l]=r.useState("daily");return e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{options:[{value:"daily",label:"毎日"},{value:"weekly",label:"毎週"},{value:"monthly",label:"毎月"},{value:"yearly",label:"毎年"}],value:n,onChange:l})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('normal');
    return <div style={{
      width: '340px'
    }}>
        <PillSelect options={modeOptions} value={value} onChange={setValue} />
        <p style={{
        marginTop: '12px',
        fontSize: '13px',
        color: '#6b7280'
      }}>
          選択中: {value}
        </p>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('on');
    return <div style={{
      width: '240px'
    }}>
        <PillSelect options={[{
        value: 'on',
        label: 'オン'
      }, {
        value: 'off',
        label: 'オフ'
      }]} value={value} onChange={setValue} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('daily');
    return <div style={{
      width: '400px'
    }}>
        <PillSelect options={[{
        value: 'daily',
        label: '毎日'
      }, {
        value: 'weekly',
        label: '毎週'
      }, {
        value: 'monthly',
        label: '毎月'
      }, {
        value: 'yearly',
        label: '毎年'
      }]} value={value} onChange={setValue} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","TwoOptions","ManyOptions"];export{a as Default,o as ManyOptions,t as TwoOptions,m as __namedExportsOrder,v as default};
