import{j as e}from"./iframe-LfAIox-3.js";import{L as s}from"./ListItem-BzddaHrb.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const m={title:"レイアウト/ListItem",component:s,parameters:{layout:"padded",docs:{description:{component:`リストアイテムコンポーネント

選択・アクティブ状態やドラッグ機能を備えたリストアイテムの基本コンポーネントです。`}}},tags:["autodocs"],argTypes:{children:{description:"リストアイテムの中身",control:{type:"text"}},isSelected:{description:"選択状態（青背景 + 太ボーダー）",control:{type:"boolean"}},isActive:{description:"アクティブ状態（薄いボーダーのみ）",control:{type:"boolean"}},draggable:{description:"ドラッグ可能",control:{type:"boolean"}},className:{description:"追加のCSSクラス",control:{type:"text"}}}},t={args:{children:"リストアイテム",isSelected:!1,isActive:!1}},a={args:{children:"選択されたアイテム",isSelected:!0}},n={args:{children:"アクティブなアイテム",isActive:!0}},r={render:()=>e.jsxs("div",{className:"w-80 border rounded-lg overflow-hidden",children:[e.jsx(s,{isSelected:!0,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:"会議メモ"}),e.jsx("span",{className:"text-xs text-gray-400",children:"10:30"})]})}),e.jsx(s,{isActive:!0,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:"タスク一覧"}),e.jsx("span",{className:"text-xs text-gray-400",children:"09:15"})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:"議事録テンプレート"}),e.jsx("span",{className:"text-xs text-gray-400",children:"昨日"})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:"プロジェクト計画"}),e.jsx("span",{className:"text-xs text-gray-400",children:"3日前"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'リストアイテム',
    isSelected: false,
    isActive: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '選択されたアイテム',
    isSelected: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'アクティブなアイテム',
    isActive: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 border rounded-lg overflow-hidden">
      <ListItem isSelected>
        <div className="flex items-center justify-between">
          <span className="font-medium">会議メモ</span>
          <span className="text-xs text-gray-400">10:30</span>
        </div>
      </ListItem>
      <ListItem isActive>
        <div className="flex items-center justify-between">
          <span className="font-medium">タスク一覧</span>
          <span className="text-xs text-gray-400">09:15</span>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center justify-between">
          <span className="font-medium">議事録テンプレート</span>
          <span className="text-xs text-gray-400">昨日</span>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center justify-between">
          <span className="font-medium">プロジェクト計画</span>
          <span className="text-xs text-gray-400">3日前</span>
        </div>
      </ListItem>
    </div>
}`,...r.parameters?.docs?.source}}};const o=["Default","Selected","Active","ListExample"];export{n as Active,t as Default,r as ListExample,a as Selected,o as __namedExportsOrder,m as default};
