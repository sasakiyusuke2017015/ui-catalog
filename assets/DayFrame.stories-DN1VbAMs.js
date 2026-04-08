import{j as e}from"./iframe-Dr-9ywM0.js";import{D as n}from"./DayFrame-B4oLQy7z.js";import{P as r}from"./calendar-ByRGoo5r.js";import"./preload-helper-PPVm8Dsz.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-Ob2IG1Fl.js";import"./EventCardContainer-xdLRvAL9.js";import"./CalendarEventCard-rVEsRofs.js";import"./dom-CKarFDmb.js";import"./IconLabel-DnTyRgXz.js";import"./Icon-B4-Rqhyi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";const A={title:"カレンダー/日表示/DayFrame",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"1日分のフレーム。日付ヘッダーとDayColumnを含み、スティッキーヘッダー対応。blur/subtleの2つのヘッダーバリアントを持つ。"}}}},t=()=>{},l=[{id:"1",title:"モーニングスタンドアップ",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,9,30),color:"#4f46e5"},{id:"2",title:"プロジェクトレビュー",startTime:new Date(2026,2,20,14,0),endTime:new Date(2026,2,20,15,30),color:"#059669"}],a={render:()=>e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date(2026,2,20),events:l,onDeleteEvent:t,onUpdateEvent:t})})})},s={render:()=>e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date(2026,2,20),events:l,headerVariant:"subtle",onDeleteEvent:t,onUpdateEvent:t})})})},d={render:()=>e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date,events:l,onDeleteEvent:t,onUpdateEvent:t})})})},i={render:()=>e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date(2026,2,22),events:[],onDeleteEvent:t,onUpdateEvent:t})})})},p={render:()=>{const c=Array.from({length:6},(m,o)=>({id:String(o+1),title:["スタンドアップ","企画会議","ランチ","コードレビュー","1on1","振り返り"][o],startTime:new Date(2026,2,20,9+o*1.5,0),endTime:new Date(2026,2,20,9+o*1.5+1,0),color:["#4f46e5","#059669","#f59e0b","#dc2626","#8b5cf6","#06b6d4"][o]}));return e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date(2026,2,20),events:c,onDeleteEvent:t,onUpdateEvent:t})})})}},v={render:()=>e.jsx(r,{children:e.jsx("div",{style:{height:"600px",overflow:"auto"},children:e.jsx(n,{date:new Date(2026,2,20),events:[],onDeleteEvent:t,onUpdateEvent:t})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={new Date(2026, 2, 20)} events={mockEvents} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={new Date(2026, 2, 20)} events={mockEvents} headerVariant="subtle" onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={new Date()} events={mockEvents} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={new Date(2026, 2, 22)} events={[]} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const busy: CalendarEvent[] = Array.from({
      length: 6
    }, (_, i) => ({
      id: String(i + 1),
      title: ['スタンドアップ', '企画会議', 'ランチ', 'コードレビュー', '1on1', '振り返り'][i],
      startTime: new Date(2026, 2, 20, 9 + i * 1.5, 0),
      endTime: new Date(2026, 2, 20, 9 + i * 1.5 + 1, 0),
      color: ['#4f46e5', '#059669', '#f59e0b', '#dc2626', '#8b5cf6', '#06b6d4'][i]
    }));
    return <Provider>
        <div style={{
        height: '600px',
        overflow: 'auto'
      }}>
          <DayFrame date={new Date(2026, 2, 20)} events={busy} onDeleteEvent={noop} onUpdateEvent={noop} />
        </div>
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '600px',
      overflow: 'auto'
    }}>
        <DayFrame date={new Date(2026, 2, 20)} events={[]} onDeleteEvent={noop} onUpdateEvent={noop} />
      </div>
    </Provider>
}`,...v.parameters?.docs?.source}}};const B=["Default","SubtleHeader","Today","Weekend","BusyDay","Empty"];export{p as BusyDay,a as Default,v as Empty,s as SubtleHeader,d as Today,i as Weekend,B as __namedExportsOrder,A as default};
