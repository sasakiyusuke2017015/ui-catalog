import{M as s}from"./ModalCheckboxList-CBPt9vNC.js";import"./iframe-CUmTO3gC.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Modal-BT_HYbp0.js";import"./IconButton-C7WD_K23.js";import"./Icon-BESojGLS.js";import"./Text-DWpUEgxO.js";import"./colors-BiHXYRGc.js";import"./useOperationLog-0HvfpEDm.js";import"./Button-Czt5DX9v.js";import"./Spinner-CaxhGNYr.js";import"./Checkbox-Yba5vTAs.js";const q={title:"フォーム/フィールド/ModalCheckboxList",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t=[{id:"1",label:"田中 太郎",description:"エンジニア"},{id:"2",label:"佐藤 花子",description:"デザイナー"},{id:"3",label:"鈴木 一郎",description:"PM"},{id:"4",label:"高橋 美咲",description:"QA"}],e={args:{isOpen:!0,title:"メンバーを選択",description:"参加するメンバーを選択してください",items:t,onConfirm:r=>console.log("confirmed",r),onCancel:()=>console.log("cancelled")}},o={args:{isOpen:!0,title:"メンバーを選択（必須）",items:t,requireSelection:!0,onConfirm:r=>console.log("confirmed",r),onCancel:()=>console.log("cancelled")}},n={args:{isOpen:!1,title:"非表示",items:t,onConfirm:()=>{},onCancel:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'メンバーを選択',
    description: '参加するメンバーを選択してください',
    items,
    onConfirm: ids => console.log('confirmed', ids),
    onCancel: () => console.log('cancelled')
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'メンバーを選択（必須）',
    items,
    requireSelection: true,
    onConfirm: ids => console.log('confirmed', ids),
    onCancel: () => console.log('cancelled')
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: '非表示',
    items,
    onConfirm: () => {},
    onCancel: () => {}
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","RequireSelection","Closed"];export{n as Closed,e as Default,o as RequireSelection,x as __namedExportsOrder,q as default};
