import{j as e}from"./iframe-Cs_9Z8TU.js";import{C as o,a as i,b as c,c as l}from"./Card-BwAXImF_.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"表示/Card",component:o,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{children:"カードのコンテンツです。"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},s={args:{children:"パディングなしのカード",padding:!1},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},a={args:{children:"クリック可能なカード",onClick:()=>{}},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},t={name:"サブコンポーネント付き",render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsxs(o,{padding:!1,children:[e.jsxs(i,{children:[e.jsx("h3",{style:{fontWeight:600},children:"タイトル"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"説明テキスト"})]}),e.jsx(c,{children:e.jsx("p",{children:"メインコンテンツがここに入ります。"})}),e.jsx(l,{children:e.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"フッター"})})]})})},d={name:"Header + Content",render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsxs(o,{padding:!1,children:[e.jsx(i,{children:e.jsx("h3",{style:{fontWeight:600},children:"食材カード"})}),e.jsxs(c,{children:[e.jsx("p",{children:"鶏むね肉 - 冷蔵 / カット済み"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"#6b7280",marginTop:"4px"},children:"残り 2日 12時間"})]})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'カードのコンテンツです。'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'パディングなしのカード',
    padding: false
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'クリック可能なカード',
    onClick: () => {}
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'サブコンポーネント付き',
  render: () => <div style={{
    width: '320px'
  }}>
      <Card padding={false}>
        <CardHeader>
          <h3 style={{
          fontWeight: 600
        }}>タイトル</h3>
          <p style={{
          fontSize: '0.75rem',
          color: '#6b7280'
        }}>説明テキスト</p>
        </CardHeader>
        <CardContent>
          <p>メインコンテンツがここに入ります。</p>
        </CardContent>
        <CardFooter>
          <span style={{
          fontSize: '0.75rem',
          color: '#6b7280'
        }}>フッター</span>
        </CardFooter>
      </Card>
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Header + Content',
  render: () => <div style={{
    width: '320px'
  }}>
      <Card padding={false}>
        <CardHeader>
          <h3 style={{
          fontWeight: 600
        }}>食材カード</h3>
        </CardHeader>
        <CardContent>
          <p>鶏むね肉 - 冷蔵 / カット済み</p>
          <p style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          marginTop: '4px'
        }}>残り 2日 12時間</p>
        </CardContent>
      </Card>
    </div>
}`,...d.parameters?.docs?.source}}};const C=["Default","NoPadding","Clickable","WithSubComponents","HeaderContentOnly"];export{a as Clickable,n as Default,d as HeaderContentOnly,s as NoPadding,t as WithSubComponents,C as __namedExportsOrder,x as default};
