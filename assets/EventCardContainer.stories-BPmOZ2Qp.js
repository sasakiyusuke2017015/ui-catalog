import{j as t}from"./iframe-WnPGq7kF.js";import{E as r}from"./EventCardContainer-C5YkmjUF.js";import{P as i,c as h,j as u}from"./calendar-DXX8tA9L.js";import"./preload-helper-PPVm8Dsz.js";import"./CalendarEventCard-CLWLiGqD.js";import"./dom-CKarFDmb.js";import"./IconLabel-CohXJBOT.js";import"./Icon-EuWHROt9.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./repeatUtils-DcqmxUp3.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";const P={title:"カレンダー/イベント/EventCardContainer",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"イベントカードのコンテナ。レイアウト計算、ドラッグ（移動/リサイズ）、ホバー/ポップオーバー制御を担当。"}}}},s=new Date(2026,2,20),n=()=>{},a={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"};function d(e){const o=h();return o.set(u,e),o}const l={render:()=>{const e=d([a]);return t.jsx(i,{store:e,children:t.jsx("div",{style:{position:"relative",width:"400px",height:"800px"},children:t.jsx(r,{event:a,dayStart:s,slotHeight:56,onDelete:n,onUpdate:n})})})}},c={render:()=>{const e={...a,icon:"users",title:"アイコン付きイベント"},o=d([e]);return t.jsx(i,{store:o,children:t.jsx("div",{style:{position:"relative",width:"400px",height:"800px"},children:t.jsx(r,{event:e,dayStart:s,slotHeight:56,onDelete:n,onUpdate:n})})})}},p={render:()=>{const e=[{...a,id:"1",title:"ミーティングA",color:"#4f46e5"},{id:"2",title:"ミーティングB",startTime:new Date(2026,2,20,10,30),endTime:new Date(2026,2,20,11,30),color:"#059669"},{id:"3",title:"ミーティングC",startTime:new Date(2026,2,20,10,15),endTime:new Date(2026,2,20,10,45),color:"#dc2626"}],o=d(e);return t.jsx(i,{store:o,children:t.jsxs("div",{style:{position:"relative",width:"400px",height:"800px"},children:[t.jsx(r,{event:e[0],dayStart:s,slotHeight:56,column:0,totalColumns:3,columnSpan:1,onDelete:n,onUpdate:n}),t.jsx(r,{event:e[1],dayStart:s,slotHeight:56,column:1,totalColumns:3,columnSpan:1,onDelete:n,onUpdate:n}),t.jsx(r,{event:e[2],dayStart:s,slotHeight:56,column:2,totalColumns:3,columnSpan:1,onDelete:n,onUpdate:n})]})})}},v={render:()=>{const e={...a,title:"15分ミーティング",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,9,15)},o=d([e]);return t.jsx(i,{store:o,children:t.jsx("div",{style:{position:"relative",width:"400px",height:"800px"},children:t.jsx(r,{event:e,dayStart:s,slotHeight:56,onDelete:n,onUpdate:n})})})}},m={render:()=>{const e={...a,title:"終日ワークショップ",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,18,0),color:"#8b5cf6"},o=d([e]);return t.jsx(i,{store:o,children:t.jsx("div",{style:{position:"relative",width:"400px",height:"1400px"},children:t.jsx(r,{event:e,dayStart:s,slotHeight:56,onDelete:n,onUpdate:n})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithEvents([baseEvent]);
    return <Provider store={store}>
        <div style={{
        position: 'relative',
        width: '400px',
        height: '800px'
      }}>
          <EventCardContainer event={baseEvent} dayStart={today} slotHeight={56} onDelete={noop} onUpdate={noop} />
        </div>
      </Provider>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const event: CalendarEvent = {
      ...baseEvent,
      icon: 'users',
      title: 'アイコン付きイベント'
    };
    const store = createStoreWithEvents([event]);
    return <Provider store={store}>
        <div style={{
        position: 'relative',
        width: '400px',
        height: '800px'
      }}>
          <EventCardContainer event={event} dayStart={today} slotHeight={56} onDelete={noop} onUpdate={noop} />
        </div>
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [{
      ...baseEvent,
      id: '1',
      title: 'ミーティングA',
      color: '#4f46e5'
    }, {
      id: '2',
      title: 'ミーティングB',
      startTime: new Date(2026, 2, 20, 10, 30),
      endTime: new Date(2026, 2, 20, 11, 30),
      color: '#059669'
    }, {
      id: '3',
      title: 'ミーティングC',
      startTime: new Date(2026, 2, 20, 10, 15),
      endTime: new Date(2026, 2, 20, 10, 45),
      color: '#dc2626'
    }];
    const store = createStoreWithEvents(events);
    return <Provider store={store}>
        <div style={{
        position: 'relative',
        width: '400px',
        height: '800px'
      }}>
          <EventCardContainer event={events[0]} dayStart={today} slotHeight={56} column={0} totalColumns={3} columnSpan={1} onDelete={noop} onUpdate={noop} />
          <EventCardContainer event={events[1]} dayStart={today} slotHeight={56} column={1} totalColumns={3} columnSpan={1} onDelete={noop} onUpdate={noop} />
          <EventCardContainer event={events[2]} dayStart={today} slotHeight={56} column={2} totalColumns={3} columnSpan={1} onDelete={noop} onUpdate={noop} />
        </div>
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const event: CalendarEvent = {
      ...baseEvent,
      title: '15分ミーティング',
      startTime: new Date(2026, 2, 20, 9, 0),
      endTime: new Date(2026, 2, 20, 9, 15)
    };
    const store = createStoreWithEvents([event]);
    return <Provider store={store}>
        <div style={{
        position: 'relative',
        width: '400px',
        height: '800px'
      }}>
          <EventCardContainer event={event} dayStart={today} slotHeight={56} onDelete={noop} onUpdate={noop} />
        </div>
      </Provider>;
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const event: CalendarEvent = {
      ...baseEvent,
      title: '終日ワークショップ',
      startTime: new Date(2026, 2, 20, 9, 0),
      endTime: new Date(2026, 2, 20, 18, 0),
      color: '#8b5cf6'
    };
    const store = createStoreWithEvents([event]);
    return <Provider store={store}>
        <div style={{
        position: 'relative',
        width: '400px',
        height: '1400px'
      }}>
          <EventCardContainer event={event} dayStart={today} slotHeight={56} onDelete={noop} onUpdate={noop} />
        </div>
      </Provider>;
  }
}`,...m.parameters?.docs?.source}}};const b=["Default","WithIcon","MultipleColumns","ShortEvent","LongEvent"];export{l as Default,m as LongEvent,p as MultipleColumns,v as ShortEvent,c as WithIcon,b as __namedExportsOrder,P as default};
