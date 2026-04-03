import{r as c,j as a}from"./iframe-DWeAzsMr.js";import{D as r}from"./DayOfWeekPicker-CZaJ9Cc-.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const m={title:"カレンダー/DayOfWeekPicker",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"曜日選択ピッカー。丸型トグルボタンで複数曜日を選択可能。日曜は赤、土曜は青、平日はindigoで色分け。"}}}},n={render:()=>{const[e,s]=c.useState([]);return a.jsxs("div",{children:[a.jsx(r,{value:e,onChange:s}),a.jsxs("p",{style:{marginTop:"12px",fontSize:"13px",color:"#6b7280"},children:["選択中: ",e.length===0?"なし":e.map(y=>["日","月","火","水","木","金","土"][y]).join(", ")]})]})}},t={render:()=>{const[e,s]=c.useState([1,2,3,4,5]);return a.jsx(r,{value:e,onChange:s})}},o={render:()=>{const[e,s]=c.useState([0,6]);return a.jsx(r,{value:e,onChange:s})}},d={render:()=>{const[e,s]=c.useState([0,1,2,3,4,5,6]);return a.jsx(r,{value:e,onChange:s})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [days, setDays] = useState<readonly DayOfWeek[]>([]);
    return <div>
        <DayOfWeekPicker value={days} onChange={setDays} />
        <p style={{
        marginTop: '12px',
        fontSize: '13px',
        color: '#6b7280'
      }}>
          選択中: {days.length === 0 ? 'なし' : days.map(d => ['日', '月', '火', '水', '木', '金', '土'][d]).join(', ')}
        </p>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [days, setDays] = useState<readonly DayOfWeek[]>([1, 2, 3, 4, 5]);
    return <DayOfWeekPicker value={days} onChange={setDays} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [days, setDays] = useState<readonly DayOfWeek[]>([0, 6]);
    return <DayOfWeekPicker value={days} onChange={setDays} />;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [days, setDays] = useState<readonly DayOfWeek[]>([0, 1, 2, 3, 4, 5, 6]);
    return <DayOfWeekPicker value={days} onChange={setDays} />;
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","Weekdays","Weekend","AllDays"];export{d as AllDays,n as Default,t as Weekdays,o as Weekend,D as __namedExportsOrder,m as default};
