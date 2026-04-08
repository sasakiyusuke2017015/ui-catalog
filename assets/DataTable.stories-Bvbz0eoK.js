import{D as n}from"./DataTable-DDiEaaql.js";import"./iframe-BwWmhw3u.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Input-CV2VZjXl.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-DSv2CHnr.js";import"./Button-CHwaDt7F.js";import"./Spinner-nB7SjsmH.js";import"./colors-BiHXYRGc.js";import"./Checkbox-DZN1BESc.js";const L={title:"データ表示/テーブル/DataTable",component:n,parameters:{layout:"padded"},tags:["autodocs"]},t=["name","status","score","date"],r=[["田中 太郎","active","4.5","2024-01-15"],["佐藤 花子","inactive","3.2","2024-02-20"],["鈴木 一郎","active","5.0","2024-03-01"],["高橋 美咲","pending","2.8","2024-03-10"],["伊藤 健太","active","4.1","2024-03-15"]],e={args:{headers:t,rows:r}},a={args:{headers:t,rows:r,headerLabels:{name:"氏名",status:"ステータス",score:"スコア",date:"日付"},cellLabels:{status:{active:"有効",inactive:"無効",pending:"保留中"}}}},s={args:{headers:t,rows:r,selectable:!0,headerLabels:{name:"氏名",status:"ステータス",score:"スコア",date:"日付"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows,
    headerLabels: {
      name: '氏名',
      status: 'ステータス',
      score: 'スコア',
      date: '日付'
    },
    cellLabels: {
      status: {
        active: '有効',
        inactive: '無効',
        pending: '保留中'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows,
    selectable: true,
    headerLabels: {
      name: '氏名',
      status: 'ステータス',
      score: 'スコア',
      date: '日付'
    }
  }
}`,...s.parameters?.docs?.source}}};const D=["Default","WithLabels","Selectable"];export{e as Default,s as Selectable,a as WithLabels,D as __namedExportsOrder,L as default};
