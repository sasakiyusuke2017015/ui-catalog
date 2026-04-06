import{j as s}from"./iframe-87Bzd3j4.js";import{L as o}from"./LoginButton-DcUkZOcu.js";import"./preload-helper-PPVm8Dsz.js";import"./ShimmerButton-CoJE9i1L.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Icon-C2T7xtHb.js";const g={title:"アクション/LoginButton",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"}}},e={args:{state:"ready",children:"ログイン"}},t={args:{state:"authenticating",children:"ログイン",loadingText:"認証中..."}},r={args:{state:"authenticated",children:"ログイン"}},a={args:{state:"ready",children:"ログイン",fullWidth:!0,size:"lg"},decorators:[n=>s.jsx("div",{style:{width:320},children:s.jsx(n,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'ready',
    children: 'ログイン'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'authenticating',
    children: 'ログイン',
    loadingText: '認証中...'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'authenticated',
    children: 'ログイン'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'ready',
    children: 'ログイン',
    fullWidth: true,
    size: 'lg'
  },
  decorators: [Story => <div style={{
    width: 320
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const h=["Ready","Authenticating","Authenticated","FullWidth"];export{r as Authenticated,t as Authenticating,a as FullWidth,e as Ready,h as __namedExportsOrder,g as default};
