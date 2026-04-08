import{j as e}from"./iframe-BZQgagrY.js";import{M as d}from"./MemberCard-cYqIKJtB.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-BSpc0QGZ.js";import"./Animated-DglLkT8m.js";import"./animations-BTPozNpH.js";import"./proxy-B2yeVycW.js";import"./Box-DPdWulhY.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Stack-BgjDjQTH.js";import"./Text-BL7P6Gkt.js";import"./colors-BiHXYRGc.js";import"./Icon-Dg6vjmHa.js";import"./TextArea-Ct6Bc-TR.js";import"./useOperationLog-0HvfpEDm.js";import"./Checkbox-DY0lfu3y.js";import"./Radio-CIC25yZJ.js";import"./Toggle-DU3L2c_f.js";import"./Slider-BI4ky6Bf.js";import"./Progress-BjiE0tpU.js";import"./StatisticItem-D_b1bPBG.js";import"./Tooltip-BGY5ZseL.js";import"./TimeBadge-BdG6PMJJ.js";import"./Spinner-Djy16Wd3.js";import"./ListItem-C9nxSxyo.js";import"./FileLink-BuBBOq_N.js";import"./BackgroundImage-CM_rc5gL.js";import"./Media-Dd1hwBI_.js";import"./ResponsiveContainer-C2MmdXmP.js";import"./CountdownRing-msh8jADn.js";import"./MathView-CBwfGM_6.js";import"./TimeSlotRow-QFUjdT6W.js";import"./NumberTicker-BZs-JZ9K.js";import"./use-in-view-Df2DYaRE.js";const K={title:"表示/カード/MemberCard",component:d,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{selected:{control:"boolean",description:"選択状態"},cardRadius:{control:"text",description:"カードの角丸"},cellRadius:{control:"text",description:"セル（スコアエリア）の角丸"},onSelectionChange:{action:"onSelectionChange",description:"選択変更ハンドラ"},onClick:{action:"onClick",description:"カードクリックハンドラ"}}},i={id:"1",name:"山田 太郎",subtitle:"エンジニア部",scores:[{label:"技術",value:4.2},{label:"コミュニケーション",value:3.8},{label:"リーダーシップ",value:3}],statuses:[{label:"進捗",value:"active",definitions:{active:{shortLabel:"進行中",color:"green"},pending:{shortLabel:"保留",color:"yellow"},done:{shortLabel:"完了",color:"blue"}},defaultLabel:"未設定"}],dates:[{label:"開始日",value:"2025-04-01"},{label:"終了日",value:"2025-06-30"}]},r={args:{data:i,selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},t={name:"選択状態",args:{data:i,selected:!0},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},s={name:"アラート状態",args:{data:{...i,id:"2",name:"佐藤 花子",isAlert:!0,scores:[{label:"技術",value:1.2},{label:"コミュニケーション",value:1.5},{label:"リーダーシップ",value:1}]},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},o={name:"バッジ・メモ付き",args:{data:{...i,id:"3",name:"鈴木 一郎",badges:[{label:"形式",value:"オンライン",color:"blue"},{label:"優先度",value:"高",color:"red"}],memo:"フォローアップが必要。来週までに再確認してください。"},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},n={name:"最小データ",args:{data:{id:"4",name:"田中 次郎"},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]},l={name:"スコア未評価",args:{data:{id:"5",name:"高橋 美咲",subtitle:"新入社員",scores:[{label:"技術",value:null},{label:"コミュニケーション",value:null},{label:"リーダーシップ",value:null}]},selected:!1},decorators:[a=>e.jsx("div",{style:{width:"280px"},children:e.jsx(a,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
