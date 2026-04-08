import{j as e}from"./iframe-LfAIox-3.js";import{M as d}from"./MemberCard-BL2nHhZk.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-gnBUJvO0.js";import"./Animated-7fVUIoTr.js";import"./animations-BTPozNpH.js";import"./proxy-D7P4lcb2.js";import"./Box-YrVfSem7.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-CTthPAWA.js";import"./Text-C9sD4FkI.js";import"./colors-BiHXYRGc.js";import"./Icon-CN73ewXh.js";import"./TextArea-C6dbNmgi.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-DojRGbgr.js";import"./Radio-CLmYfIs8.js";import"./Toggle-EDKVLcwC.js";import"./Slider-D3kqjl4M.js";import"./Progress-Dsr5dGzc.js";import"./StatisticItem-CtUe6lVl.js";import"./Tooltip-DMrO9HtK.js";import"./TimeBadge-CAvd5Cui.js";import"./Spinner-BwSB1wOr.js";import"./ListItem-BzddaHrb.js";import"./FileLink-CXn5uzX4.js";import"./BackgroundImage-Dzmtqn5N.js";import"./Media-DV55p2Vd.js";import"./ResponsiveContainer-Cfsc6XxI.js";import"./CountdownRing-CLRKI4qg.js";import"./MathView-tZBzztFf.js";import"./TimeSlotRow-Cpd0J9jz.js";import"./NumberTicker-DuMpyQfW.js";import"./use-in-view-eI5YJMkf.js";const K={title:"表示/カード/MemberCard",component:d,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{selected:{control:"boolean",description:"選択状態"},cardRadius:{control:"text",description:"カードの角丸"},cellRadius:{control:"text",description:"セル（スコアエリア）の角丸"},onSelectionChange:{action:"onSelectionChange",description:"選択変更ハンドラ"},onClick:{action:"onClick",description:"カードクリックハンドラ"}}},i={id:"1",name:"山田 太郎",subtitle:"エンジニア部",scores:[{label:"技術",value:4.2},{label:"コミュニケーション",value:3.8},{label:"リーダーシップ",value:3}],statuses:[{label:"進捗",value:"active",definitions:{active:{shortLabel:"進行中",color:"green"},pending:{shortLabel:"保留",color:"yellow"},done:{shortLabel:"完了",color:"blue"}},defaultLabel:"未設定"}],dates:[{label:"開始日",value:"2025-04-01"},{label:"終了日",value:"2025-06-30"}]},r={args:{data:i,selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},t={name:"選択状態",args:{data:i,selected:!0},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},s={name:"アラート状態",args:{data:{...i,id:"2",name:"佐藤 花子",isAlert:!0,scores:[{label:"技術",value:1.2},{label:"コミュニケーション",value:1.5},{label:"リーダーシップ",value:1}]},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},o={name:"バッジ・メモ付き",args:{data:{...i,id:"3",name:"鈴木 一郎",badges:[{label:"形式",value:"オンライン",color:"blue"},{label:"優先度",value:"高",color:"red"}],memo:"フォローアップが必要。来週までに再確認してください。"},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},n={name:"最小データ",args:{data:{id:"4",name:"田中 次郎"},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},l={name:"スコア未評価",args:{data:{id:"5",name:"高橋 美咲",subtitle:"新入社員",scores:[{label:"技術",value:null},{label:"コミュニケーション",value:null},{label:"リーダーシップ",value:null}]},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: baseData,
    selected: false
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '選択状態',
  args: {
    data: baseData,
    selected: true
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'アラート状態',
  args: {
    data: {
      ...baseData,
      id: '2',
      name: '佐藤 花子',
      isAlert: true,
      scores: [{
        label: '技術',
        value: 1.2
      }, {
        label: 'コミュニケーション',
        value: 1.5
      }, {
        label: 'リーダーシップ',
        value: 1.0
      }]
    },
    selected: false
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'バッジ・メモ付き',
  args: {
    data: {
      ...baseData,
      id: '3',
      name: '鈴木 一郎',
      badges: [{
        label: '形式',
        value: 'オンライン',
        color: 'blue'
      }, {
        label: '優先度',
        value: '高',
        color: 'red'
      }],
      memo: 'フォローアップが必要。来週までに再確認してください。'
    },
    selected: false
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '最小データ',
  args: {
    data: {
      id: '4',
      name: '田中 次郎'
    },
    selected: false
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'スコア未評価',
  args: {
    data: {
      id: '5',
      name: '高橋 美咲',
      subtitle: '新入社員',
      scores: [{
        label: '技術',
        value: null
      }, {
        label: 'コミュニケーション',
        value: null
      }, {
        label: 'リーダーシップ',
        value: null
      }]
    },
    selected: false
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source}}};const P=["Default","Selected","WithAlert","WithBadgesAndMemo","MinimalData","NullScores"];export{r as Default,n as MinimalData,l as NullScores,t as Selected,s as WithAlert,o as WithBadgesAndMemo,P as __namedExportsOrder,K as default};
