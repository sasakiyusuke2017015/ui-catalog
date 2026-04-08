import{j as e}from"./iframe-LfAIox-3.js";import{Timeline as n}from"./Timeline-CC4uG2-I.js";import{P as o}from"./calendar-CFZV-tqz.js";import"./preload-helper-PPVm8Dsz.js";import"./DayFrame-WNgCHRqs.js";import"./dates-DjlI8THW.js";import"./startOfDay-Bun0zCfR.js";import"./format-RPpwwwsr.js";import"./ja-C4YpDXmo.js";import"./DayColumn-X2wO5sJC.js";import"./EventCardContainer-D0tolXjx.js";import"./CalendarEventCard-MOg7xioH.js";import"./dom-CKarFDmb.js";import"./IconLabel--ioNCOsE.js";import"./Icon-CN73ewXh.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./isToday-BV7SHyy-.js";import"./CalendarDragOverlay-Bcc8WEsa.js";import"./index-BfxoDBbu.js";import"./index-C1U9pztA.js";import"./useDragGhost-CGZBY-8l.js";const H={title:"カレンダー/日表示/Timeline",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"無限スクロール対応のタイムラインビュー。DayFrameを連続表示し、日単位でイベントを描画する。"}}}},t=async()=>{},p=[{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},{id:"2",title:"ランチ",startTime:new Date(2026,2,20,12,0),endTime:new Date(2026,2,20,13,0),color:"#059669"},{id:"3",title:"デザインレビュー",startTime:new Date(2026,2,21,14,0),endTime:new Date(2026,2,21,15,30),color:"#dc2626"}],s={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:p,persistEvent:t,removeEvent:t})})})},i={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:p,headerVariant:"subtle",persistEvent:t,removeEvent:t})})})},a={render:()=>{const v=Array.from({length:15},(c,r)=>({id:String(r+1),title:["スタンドアップ","企画会議","ランチ","コードレビュー","1on1"][r%5],startTime:new Date(2026,2,18+Math.floor(r/3),9+r%3*2,0),endTime:new Date(2026,2,18+Math.floor(r/3),10+r%3*2,0),color:["#4f46e5","#059669","#dc2626","#8b5cf6","#f59e0b"][r%5]}));return e.jsx(o,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:v,persistEvent:t,removeEvent:t})})})}},d={render:()=>{const v=[...p,{id:"repeat-1",title:"朝会（毎日）",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,9,15),color:"#f59e0b",repeat:[1,2,3,4,5],repeatPeriodStart:new Date(2026,2,1),repeatPeriodEnd:new Date(2026,3,30)}];return e.jsx(o,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:v,persistEvent:t,removeEvent:t})})})}},m={render:()=>e.jsx(o,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{events:[],persistEvent:t,removeEvent:t})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={mockEvents} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={mockEvents} headerVariant="subtle" persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const busy: CalendarEvent[] = Array.from({
      length: 15
    }, (_, i) => ({
      id: String(i + 1),
      title: ['スタンドアップ', '企画会議', 'ランチ', 'コードレビュー', '1on1'][i % 5],
      startTime: new Date(2026, 2, 18 + Math.floor(i / 3), 9 + i % 3 * 2, 0),
      endTime: new Date(2026, 2, 18 + Math.floor(i / 3), 10 + i % 3 * 2, 0),
      color: ['#4f46e5', '#059669', '#dc2626', '#8b5cf6', '#f59e0b'][i % 5]
    }));
    return <Provider>
        <div style={{
        height: '100vh'
      }}>
          <Timeline events={busy} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [...mockEvents, {
      id: 'repeat-1',
      title: '朝会（毎日）',
      startTime: new Date(2026, 2, 20, 9, 0),
      endTime: new Date(2026, 2, 20, 9, 15),
      color: '#f59e0b',
      repeat: [1, 2, 3, 4, 5] as const,
      repeatPeriodStart: new Date(2026, 2, 1),
      repeatPeriodEnd: new Date(2026, 3, 30)
    }];
    return <Provider>
        <div style={{
        height: '100vh'
      }}>
          <Timeline events={events} persistEvent={noop} removeEvent={noop} />
        </div>
      </Provider>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Provider>
      <div style={{
      height: '100vh'
    }}>
        <Timeline events={[]} persistEvent={noop} removeEvent={noop} />
      </div>
    </Provider>
}`,...m.parameters?.docs?.source}}};const V=["Default","SubtleHeader","BusyWeek","WithRepeatEvents","Empty"];export{a as BusyWeek,s as Default,m as Empty,i as SubtleHeader,d as WithRepeatEvents,V as __namedExportsOrder,H as default};
