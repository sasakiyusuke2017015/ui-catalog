import{R as e}from"./iframe-BwfVzy39.js";import{C as c}from"./ContentBlock-BgdinyTC.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DGn345dX.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Media-DWVwg95M.js";import"./Text-zVgKvV8g.js";import"./colors-BiHXYRGc.js";import"./LoadingZone-D9H7jeDy.js";const h={title:"表示/コンテンツ/ContentBlock",component:c,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text",description:"ブロックのタイトル"},loading:{control:"boolean",description:"ローディング状態"},loadingMessage:{control:"text",description:"ローディング中のメッセージ"},loadingHeight:{control:"text",description:"ローディング時の高さ"},loadingIconName:{control:"select",options:["loading-half","loading-dots","loading-pulse","loading-morph","spinner"],description:"ローディングアイコンの種類"},loadingSize:{control:"number",description:"ローディングアイコンのサイズ"},loadingColor:{control:"text",description:"ローディングアイコンの色"},className:{control:"text",description:"追加のCSSクラス"},titleClassName:{control:"text",description:"タイトル用の追加CSSクラス"}}},t={args:{title:"コンテンツブロック",loading:!1,children:e.createElement("div",{},e.createElement("p",{},"これはコンテンツブロックの内容です。"),e.createElement("p",{},"LoadingZoneと統合された再利用可能なコンテンツコンテナです。"))}},a={args:{loading:!1,children:e.createElement("div",{},e.createElement("p",{},"タイトルなしのコンテンツブロックです。"))}},r={args:{title:"データ読み込み中",loading:!0,loadingMessage:"データを読み込み中...",loadingHeight:"200px",children:e.createElement("div",{},e.createElement("p",{},"この内容はローディング中は表示されません。"))}},n={args:{title:"カスタムアイコンローディング",loading:!0,loadingMessage:"カスタムアイコンで読み込み中...",loadingHeight:"250px",loadingIconName:"loading-morph",loadingSize:48,loadingColor:"text-blue-600",children:e.createElement("div",{},e.createElement("p",{},"この内容はローディング中は表示されません。"))}},o={args:{loading:!1,className:"mb-2",children:e.createElement("div",{},e.createElement("div",{className:"flex items-center gap-4 mb-4"},e.createElement("h2",{className:"text-fluid-2xl font-bold text-gray-800"},"笹木 勇介"),e.createElement("span",{className:"text-gray-500"},"(メンバー番号: 3149)")),e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700"},e.createElement("div",{},"所属部署: ソリューションサービス本部 / 営業部, 自動化DX部 | 役職: TL"),e.createElement("div",{},"面談日: 2025/07/30"),e.createElement("div",{},"追加面談候補者: 未設定(未設定)")))}},l={args:{title:"カスタムスタイルブロック",loading:!1,className:"border-2 border-blue-300 bg-blue-50",titleClassName:"text-blue-800 border-b border-blue-200 pb-2",children:e.createElement("div",{className:"text-blue-700"},e.createElement("p",{},"カスタムスタイリングが適用されたコンテンツブロックです。"))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'コンテンツブロック',
    loading: false,
    children: React.createElement('div', {}, React.createElement('p', {}, 'これはコンテンツブロックの内容です。'), React.createElement('p', {}, 'LoadingZoneと統合された再利用可能なコンテンツコンテナです。'))
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    children: React.createElement('div', {}, React.createElement('p', {}, 'タイトルなしのコンテンツブロックです。'))
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'データ読み込み中',
    loading: true,
    loadingMessage: 'データを読み込み中...',
    loadingHeight: '200px',
    children: React.createElement('div', {}, React.createElement('p', {}, 'この内容はローディング中は表示されません。'))
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'カスタムアイコンローディング',
    loading: true,
    loadingMessage: 'カスタムアイコンで読み込み中...',
    loadingHeight: '250px',
    loadingIconName: 'loading-morph',
    loadingSize: 48,
    loadingColor: 'text-blue-600',
    children: React.createElement('div', {}, React.createElement('p', {}, 'この内容はローディング中は表示されません。'))
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    className: 'mb-2',
    children: React.createElement('div', {}, React.createElement('div', {
      className: 'flex items-center gap-4 mb-4'
    }, React.createElement('h2', {
      className: 'text-fluid-2xl font-bold text-gray-800'
    }, '笹木 勇介'), React.createElement('span', {
      className: 'text-gray-500'
    }, '(メンバー番号: 3149)')), React.createElement('div', {
      className: 'grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700'
    }, React.createElement('div', {}, '所属部署: ソリューションサービス本部 / 営業部, 自動化DX部 | 役職: TL'), React.createElement('div', {}, '面談日: 2025/07/30'), React.createElement('div', {}, '追加面談候補者: 未設定(未設定)')))
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'カスタムスタイルブロック',
    loading: false,
    className: 'border-2 border-blue-300 bg-blue-50',
    titleClassName: 'text-blue-800 border-b border-blue-200 pb-2',
    children: React.createElement('div', {
      className: 'text-blue-700'
    }, React.createElement('p', {}, 'カスタムスタイリングが適用されたコンテンツブロックです。'))
  }
}`,...l.parameters?.docs?.source}}};const f=["Default","WithoutTitle","Loading","CustomLoadingIcon","EmployeeInfo","CustomStyling"];export{n as CustomLoadingIcon,l as CustomStyling,t as Default,o as EmployeeInfo,r as Loading,a as WithoutTitle,f as __namedExportsOrder,h as default};
