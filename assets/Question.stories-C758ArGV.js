import{j as e,r as o}from"./iframe-Dq39NNb-.js";import{Q as a}from"./Question-ChpP-Siy.js";import"./preload-helper-PPVm8Dsz.js";const q={title:"フォーム/Question",component:a,tags:["autodocs"],parameters:{layout:"padded"}},x=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"textbox",questionId:1,title:"お名前",content:"フルネームを入力してください。",required:!0,value:r,onChange:t})},s={render:()=>e.jsx(x,{})},p=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"textarea",questionId:2,title:"自由記述",content:"ご意見をお聞かせください。",required:!1,value:r,onChange:t})},n={render:()=>e.jsx(p,{})},l=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"radio",questionId:3,title:"満足度",content:"サービスの満足度を選択してください。",required:!0,value:r,onChange:t,options:["とても満足","満足","普通","不満","とても不満"]})},c={render:()=>e.jsx(l,{})},m=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"select",questionId:4,title:"部署",content:"所属部署を選択してください。",required:!0,value:r,onChange:t,options:["営業部","開発部","人事部","総務部"]})},u={render:()=>e.jsx(m,{})},E=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"checkbox",questionId:5,title:"興味のある分野",content:"該当するものをすべて選択してください。",required:!1,value:r,onChange:t,options:["フロントエンド","バックエンド","インフラ","デザイン","マネジメント"]})},i={render:()=>e.jsx(E,{})},S=()=>{const[r,t]=o.useState("");return e.jsx(a,{variant:"textbox",questionId:6,title:"メールアドレス",content:"有効なメールアドレスを入力してください。",required:!0,value:r,onChange:t,error:"メールアドレスの形式が正しくありません。"})},d={render:()=>e.jsx(S,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TextboxExample />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TextareaExample />
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <RadioExample />
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SelectExample />
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxExample />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <WithErrorExample />
}`,...d.parameters?.docs?.source}}};const v=["Textbox","Textarea","Radio","Select","Checkbox","WithError"];export{i as Checkbox,c as Radio,u as Select,n as Textarea,s as Textbox,d as WithError,v as __namedExportsOrder,q as default};
