import{j as d}from"./iframe-Dr-9ywM0.js";import{E as t}from"./EventPopover-BROdrJNW.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";import"./IconLabel-DnTyRgXz.js";import"./Icon-B4-Rqhyi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./dom-CKarFDmb.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";const f={title:"カレンダー/イベント/EventPopover",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントカードにホバーした際に表示されるポップオーバー。イベントの詳細情報を表示する。"}}}},r={event:{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"プロジェクトの進捗確認と次のスプリント計画について話し合います。"},rect:{top:200,left:100,right:300,bottom:280,width:200}},n={render:()=>d.jsx(t,{hovered:r})},o={render:()=>{const e={...r,event:{...r.event,description:void 0}};return d.jsx(t,{hovered:e})}},s={render:()=>{const e={...r,event:{id:"2",title:"休暇",startTime:new Date(2026,2,20,0,0),endTime:new Date(2026,2,20,23,59),color:"#059669",allDay:!0}};return d.jsx(t,{hovered:e})}},a={render:()=>{const e={...r,event:{id:"3",title:"出張",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,22,18,0),color:"#dc2626",description:"東京オフィスでのクライアントミーティング"}};return d.jsx(t,{hovered:e})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <EventPopover hovered={baseHovered} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const hovered: HoveredEvent = {
      ...baseHovered,
      event: {
        ...baseHovered.event,
        description: undefined
      }
    };
    return <EventPopover hovered={hovered} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const hovered: HoveredEvent = {
      ...baseHovered,
      event: {
        id: '2',
        title: '休暇',
        startTime: new Date(2026, 2, 20, 0, 0),
        endTime: new Date(2026, 2, 20, 23, 59),
        color: '#059669',
        allDay: true
      }
    };
    return <EventPopover hovered={hovered} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const hovered: HoveredEvent = {
      ...baseHovered,
      event: {
        id: '3',
        title: '出張',
        startTime: new Date(2026, 2, 20, 9, 0),
        endTime: new Date(2026, 2, 22, 18, 0),
        color: '#dc2626',
        description: '東京オフィスでのクライアントミーティング'
      }
    };
    return <EventPopover hovered={hovered} />;
  }
}`,...a.parameters?.docs?.source}}};const H=["Default","WithoutDescription","AllDayEvent","MultiDayEvent"];export{s as AllDayEvent,n as Default,a as MultiDayEvent,o as WithoutDescription,H as __namedExportsOrder,f as default};
