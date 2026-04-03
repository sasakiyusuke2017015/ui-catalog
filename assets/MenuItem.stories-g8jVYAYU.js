import{j as e}from"./iframe-C6Pnx79y.js";import{M as r}from"./MenuItem-B8F4gZOa.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-5hpxR7Xt.js";import"./Icon-BgpW1Y_U.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const h={title:"ナビゲーション/MenuItem",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light"}},decorators:[i=>e.jsx("div",{className:"w-64 rounded-lg border border-gray-200 bg-white shadow-sm",children:e.jsx(i,{})})],argTypes:{icon:{control:"text",description:"アイコン名またはReactNode"},label:{control:"text",description:"メニュー項目のラベル"},onClick:{action:"clicked",description:"クリック時のコールバック"},onClose:{action:"closed",description:"メニューを閉じる際のコールバック"}}},o={args:{icon:"home",label:"HOME"}},s={args:{icon:"settings"}},a={args:{label:"プロフィール設定"}},n={args:{icon:"user",label:"ユーザー管理"}},t={args:{icon:"file",label:"ドキュメント"}},c={args:{icon:"logout",label:"ログアウト"}},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"home",label:"HOME"}),e.jsx(r,{icon:"user",label:"プロフィール"}),e.jsx(r,{icon:"settings",label:"設定"}),e.jsx(r,{icon:"logout",label:"ログアウト"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'HOME'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'settings'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'プロフィール設定'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'ユーザー管理'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'file',
    label: 'ドキュメント'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'logout',
    label: 'ログアウト'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <MenuItem icon="home" label="HOME" />
      <MenuItem icon="user" label="プロフィール" />
      <MenuItem icon="settings" label="設定" />
      <MenuItem icon="logout" label="ログアウト" />
    </>
}`,...l.parameters?.docs?.source}}};const x=["Default","IconOnly","LabelOnly","WithUserIcon","WithFileIcon","WithLogoutIcon","MultipleItems"];export{o as Default,s as IconOnly,a as LabelOnly,l as MultipleItems,t as WithFileIcon,c as WithLogoutIcon,n as WithUserIcon,x as __namedExportsOrder,h as default};
