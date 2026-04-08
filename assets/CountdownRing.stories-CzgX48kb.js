import{j as r}from"./iframe-WcLOoCbh.js";import{C as d}from"./CountdownRing-arty7PtE.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"データ可視化/その他/CountdownRing",component:d,parameters:{layout:"centered",docs:{description:{component:`SVG円形カウントダウンリング

指定した時間でリングが減少し、秒数を表示するカウントダウンコンポーネントです。`}}},tags:["autodocs"],argTypes:{durationMs:{description:"カウントダウンの合計時間（ミリ秒）",control:{type:"number"}},startKey:{description:"アニメーション再開用のキー（変更すると再スタート）",control:{type:"text"}},radius:{description:"リングの半径（デフォルト: 18）",control:{type:"number"}},size:{description:"SVG viewBoxのサイズ（デフォルト: 48）",control:{type:"number"}},strokeWidth:{description:"ストロークの太さ（デフォルト: 3）",control:{type:"number"}},strokeColor:{description:'ストロークの色（デフォルト: "white"）',control:{type:"color"}},trackOpacity:{description:"トラックの透明度（デフォルト: 0.2）",control:{type:"range",min:0,max:1,step:.1}},numberClassName:{description:"数字表示の追加CSSクラス",control:{type:"text"}},className:{description:"ラッパーの追加CSSクラス",control:{type:"text"}}}},e={args:{durationMs:1e4,startKey:"default"},decorators:[o=>r.jsx("div",{style:{backgroundColor:"#334155",padding:24,borderRadius:8},children:r.jsx(o,{})})]},t={args:{durationMs:5e3,startKey:"short"},decorators:[o=>r.jsx("div",{style:{backgroundColor:"#334155",padding:24,borderRadius:8},children:r.jsx(o,{})})]},s={args:{durationMs:3e4,startKey:"long"},decorators:[o=>r.jsx("div",{style:{backgroundColor:"#334155",padding:24,borderRadius:8},children:r.jsx(o,{})})]},n={args:{durationMs:1e4,startKey:"large",radius:36,size:96,strokeWidth:5},decorators:[o=>r.jsx("div",{style:{backgroundColor:"#334155",padding:24,borderRadius:8},children:r.jsx(o,{})})]},a={args:{durationMs:15e3,startKey:"color",strokeColor:"#22d3ee",strokeWidth:4},decorators:[o=>r.jsx("div",{style:{backgroundColor:"#1e293b",padding:24,borderRadius:8},children:r.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    durationMs: 10000,
    startKey: 'default'
  },
  decorators: [Story => <div style={{
    backgroundColor: '#334155',
    padding: 24,
    borderRadius: 8
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    durationMs: 5000,
    startKey: 'short'
  },
  decorators: [Story => <div style={{
    backgroundColor: '#334155',
    padding: 24,
    borderRadius: 8
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    durationMs: 30000,
    startKey: 'long'
  },
  decorators: [Story => <div style={{
    backgroundColor: '#334155',
    padding: 24,
    borderRadius: 8
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    durationMs: 10000,
    startKey: 'large',
    radius: 36,
    size: 96,
    strokeWidth: 5
  },
  decorators: [Story => <div style={{
    backgroundColor: '#334155',
    padding: 24,
    borderRadius: 8
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    durationMs: 15000,
    startKey: 'color',
    strokeColor: '#22d3ee',
    strokeWidth: 4
  },
  decorators: [Story => <div style={{
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 8
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const l=["Default","Short","Long","Large","CustomColor"];export{a as CustomColor,e as Default,n as Large,s as Long,t as Short,l as __namedExportsOrder,p as default};
