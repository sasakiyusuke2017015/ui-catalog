import{j as s,r as i}from"./iframe-TXWPROLT.js";import{P as p}from"./PasswordValidation-DsTDRkFK.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"フォーム/PasswordValidation",component:p,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{password:"MySecurePass123",showValidation:!0}},a={args:{password:"short",showValidation:!0}},e={args:{password:"MySecurePass123",confirmPassword:"MySecurePass123",showValidation:!0}},o={args:{password:"MySecurePass123",confirmPassword:"DifferentPass",showValidation:!0}},m=()=>{const[n,u]=i.useState(""),[c,l]=i.useState("");return s.jsxs("div",{className:"space-y-3 w-64",children:[s.jsx("input",{type:"password",placeholder:"パスワード",value:n,onChange:d=>u(d.target.value),className:"w-full border rounded px-3 py-2"}),s.jsx("input",{type:"password",placeholder:"確認用パスワード",value:c,onChange:d=>l(d.target.value),className:"w-full border rounded px-3 py-2"}),s.jsx(p,{password:n,confirmPassword:c,showValidation:n.length>0})]})},t={render:()=>s.jsx(m,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'MySecurePass123',
    showValidation: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'short',
    showValidation: true
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'MySecurePass123',
    confirmPassword: 'MySecurePass123',
    showValidation: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'MySecurePass123',
    confirmPassword: 'DifferentPass',
    showValidation: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveExample />
}`,...t.parameters?.docs?.source}}};const f=["AllPassed","PartiallyPassed","WithConfirmPassword","MismatchedPasswords","Interactive"];export{r as AllPassed,t as Interactive,o as MismatchedPasswords,a as PartiallyPassed,e as WithConfirmPassword,f as __namedExportsOrder,g as default};
