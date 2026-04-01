import{j as r}from"./iframe-DM_a6nxx.js";import{C as o}from"./CalendarDragOverlay-C_6oI5X4.js";import{c as a,d as s,P as i}from"./calendar-YVAZtuSR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYAnbN2j.js";import"./index-BM82MMPn.js";import"./IconLabel-DcdHBR2Z.js";import"./Icon-DF4Bw8wy.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";const j={title:"カレンダー/CalendarDragOverlay",component:DragOverlay,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"ドラッグ操作中にカーソルに追従するゴーストカード。"}}}},d={eventId:"1",mode:"move",originalEvent:{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},currentStartTime:new Date(2026,2,20,10,0),currentEndTime:new Date(2026,2,20,11,0),pointerX:200,pointerY:300},t={render:()=>{const e=a();return e.set(s,d),r.jsx(i,{store:e,children:r.jsxs("div",{style:{height:"100vh",background:"#f0f0f0",position:"relative"},children:[r.jsx("p",{style:{padding:24},children:"ドラッグ中のゴーストカードが表示されています。"}),r.jsx(o,{})]})})}},n={render:()=>{const e=a();return e.set(s,null),r.jsx(i,{store:e,children:r.jsxs("div",{style:{height:"100vh",background:"#f0f0f0"},children:[r.jsx("p",{style:{padding:24},children:"ドラッグ無し - ゴーストカードは表示されません。"}),r.jsx(o,{})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, mockDrag);
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0',
        position: 'relative'
      }}>
          <p style={{
          padding: 24
        }}>ドラッグ中のゴーストカードが表示されています。</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, null);
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0'
      }}>
          <p style={{
          padding: 24
        }}>ドラッグ無し - ゴーストカードは表示されません。</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...n.parameters?.docs?.source}}};const O=["WithDrag","NoDrag"];export{n as NoDrag,t as WithDrag,O as __namedExportsOrder,j as default};
