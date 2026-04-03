import{S as o}from"./StatusBar-mgdKzm0f.js";import"./iframe-TXWPROLT.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"フィードバック/StatusBar",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{message:{control:"text"},variant:{control:"select",options:["success","error","info"]}}},r={args:{message:"保存しました",variant:"success"}},s={args:{message:"エラーが発生しました",variant:"error"}},e={args:{message:"処理中です...",variant:"info"}},a={args:{message:""}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存しました',
    variant: 'success'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'エラーが発生しました',
    variant: 'error'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    message: '処理中です...',
    variant: 'info'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: ''
  }
}`,...a.parameters?.docs?.source}}};const p=["Success","Error","Info","Empty"];export{a as Empty,s as Error,e as Info,r as Success,p as __namedExportsOrder,m as default};
