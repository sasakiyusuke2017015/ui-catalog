import{j as e}from"./iframe-BwWmhw3u.js";import{C as n}from"./CalendarDragOverlay-B0vqRfoJ.js";import{c as t,d as o,P as s}from"./calendar-DG2j4q-6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tn2Qd_Gn.js";import"./index-D5eEF7s2.js";import"./IconLabel-CQ7akHYT.js";import"./Icon-DSv2CHnr.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./useDragGhost-BJKonX-c.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";const k={title:"カレンダー/ドラッグ/CalendarDragOverlay",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"ドラッグ操作中にカーソルに追従するゴーストカード。"}}}};function p(r={}){return{eventId:"1",mode:"move",originalEvent:{id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5"},currentStartTime:new Date(2026,2,20,10,0),currentEndTime:new Date(2026,2,20,11,0),pointerX:200,pointerY:300,...r}}const a={render:()=>{const r=t();return r.set(o,p()),e.jsx(s,{store:r,children:e.jsxs("div",{style:{height:"100vh",background:"#f0f0f0",position:"relative"},children:[e.jsx("p",{style:{padding:24},children:"移動ドラッグ中のゴーストカード"}),e.jsx(n,{})]})})}},i={render:()=>{const r=t();return r.set(o,p({mode:"resize-top",currentStartTime:new Date(2026,2,20,9,30)})),e.jsx(s,{store:r,children:e.jsxs("div",{style:{height:"100vh",background:"#f0f0f0",position:"relative"},children:[e.jsx("p",{style:{padding:24},children:"上端リサイズ中（開始時刻を9:30に変更）"}),e.jsx(n,{})]})})}},d={render:()=>{const r=t();return r.set(o,p({mode:"resize-bottom",currentEndTime:new Date(2026,2,20,12,0)})),e.jsx(s,{store:r,children:e.jsxs("div",{style:{height:"100vh",background:"#f0f0f0",position:"relative"},children:[e.jsx("p",{style:{padding:24},children:"下端リサイズ中（終了時刻を12:00に延長）"}),e.jsx(n,{})]})})}},c={render:()=>{const r=t();return r.set(o,p({originalEvent:{id:"2",title:"オフサイトミーティング",startTime:new Date(2026,2,20,9,0),endTime:new Date(2026,2,20,17,0),color:"#059669"},currentStartTime:new Date(2026,2,20,9,0),currentEndTime:new Date(2026,2,20,17,0)})),e.jsx(s,{store:r,children:e.jsxs("div",{style:{height:"100vh",background:"#f0f0f0",position:"relative"},children:[e.jsx("p",{style:{padding:24},children:"長時間イベントのドラッグ"}),e.jsx(n,{})]})})}},l={render:()=>{const r=t();return r.set(o,null),e.jsx(s,{store:r,children:e.jsxs("div",{style:{height:"100vh",background:"#f0f0f0"},children:[e.jsx("p",{style:{padding:24},children:"ドラッグ無し — ゴーストカードは表示されません。"}),e.jsx(n,{})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, makeDrag());
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0',
        position: 'relative'
      }}>
          <p style={{
          padding: 24
        }}>移動ドラッグ中のゴーストカード</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, makeDrag({
      mode: 'resize-top',
      currentStartTime: new Date(2026, 2, 20, 9, 30)
    }));
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0',
        position: 'relative'
      }}>
          <p style={{
          padding: 24
        }}>上端リサイズ中（開始時刻を9:30に変更）</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, makeDrag({
      mode: 'resize-bottom',
      currentEndTime: new Date(2026, 2, 20, 12, 0)
    }));
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0',
        position: 'relative'
      }}>
          <p style={{
          padding: 24
        }}>下端リサイズ中（終了時刻を12:00に延長）</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStore();
    store.set(dragAtom, makeDrag({
      originalEvent: {
        id: '2',
        title: 'オフサイトミーティング',
        startTime: new Date(2026, 2, 20, 9, 0),
        endTime: new Date(2026, 2, 20, 17, 0),
        color: '#059669'
      },
      currentStartTime: new Date(2026, 2, 20, 9, 0),
      currentEndTime: new Date(2026, 2, 20, 17, 0)
    }));
    return <Provider store={store}>
        <div style={{
        height: '100vh',
        background: '#f0f0f0',
        position: 'relative'
      }}>
          <p style={{
          padding: 24
        }}>長時間イベントのドラッグ</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        }}>ドラッグ無し — ゴーストカードは表示されません。</p>
          <CalendarDragOverlay />
        </div>
      </Provider>;
  }
}`,...l.parameters?.docs?.source}}};const b=["MoveMode","ResizeTopMode","ResizeBottomMode","LongEvent","NoDrag"];export{c as LongEvent,a as MoveMode,l as NoDrag,d as ResizeBottomMode,i as ResizeTopMode,b as __namedExportsOrder,k as default};
