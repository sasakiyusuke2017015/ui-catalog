import{j as n}from"./iframe-CAHZyj7a.js";import{D as s,a as r,b as c}from"./Dropdown-2vxzaxc1.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";const x={title:"ナビゲーション/メニュー/Dropdown",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{width:{control:"number",description:"ドロップダウンの幅"},maxHeight:{control:"number",description:"最大高さ（スクロール時）"}}},o={args:{trigger:n.jsx("button",{style:{padding:"6px 12px",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer"},children:"メニュー"}),width:192,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},children:"項目 1"}),n.jsx(r,{onClick:()=>{},children:"項目 2"}),n.jsx(r,{onClick:()=>{},children:"項目 3"})]})}},e={name:"選択状態あり",args:{trigger:n.jsx("button",{style:{padding:"6px 12px",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer"},children:"フィルター"}),width:200,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},children:"すべて"}),n.jsx(r,{onClick:()=>{},isSelected:!0,children:"進行中"}),n.jsx(r,{onClick:()=>{},children:"完了"})]})}},d={name:"区切り線あり",args:{trigger:n.jsx("button",{style:{padding:"6px 12px",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer"},children:"操作"}),width:200,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},children:"編集"}),n.jsx(r,{onClick:()=>{},children:"複製"}),n.jsx(c,{}),n.jsx(r,{onClick:()=>{},children:"削除"})]})}},t={name:"無効項目あり",args:{trigger:n.jsx("button",{style:{padding:"6px 12px",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer"},children:"アクション"}),width:200,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},children:"保存"}),n.jsx(r,{onClick:()=>{},disabled:!0,children:"エクスポート（権限なし）"}),n.jsx(r,{onClick:()=>{},children:"共有"})]})}},i={name:"スクロールあり",args:{trigger:n.jsx("button",{style:{padding:"6px 12px",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer"},children:"長いリスト"}),width:200,maxHeight:150,children:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},children:"項目 1"}),n.jsx(r,{onClick:()=>{},children:"項目 2"}),n.jsx(r,{onClick:()=>{},children:"項目 3"}),n.jsx(r,{onClick:()=>{},children:"項目 4"}),n.jsx(r,{onClick:()=>{},children:"項目 5"}),n.jsx(r,{onClick:()=>{},children:"項目 6"}),n.jsx(r,{onClick:()=>{},children:"項目 7"}),n.jsx(r,{onClick:()=>{},children:"項目 8"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <button style={{
      padding: '6px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>メニュー</button>,
    width: 192,
    children: <>
        <DropdownItem onClick={() => {}}>項目 1</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 2</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 3</DropdownItem>
      </>
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '選択状態あり',
  args: {
    trigger: <button style={{
      padding: '6px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>フィルター</button>,
    width: 200,
    children: <>
        <DropdownItem onClick={() => {}}>すべて</DropdownItem>
        <DropdownItem onClick={() => {}} isSelected>進行中</DropdownItem>
        <DropdownItem onClick={() => {}}>完了</DropdownItem>
      </>
  }
}`,...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '区切り線あり',
  args: {
    trigger: <button style={{
      padding: '6px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>操作</button>,
    width: 200,
    children: <>
        <DropdownItem onClick={() => {}}>編集</DropdownItem>
        <DropdownItem onClick={() => {}}>複製</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => {}}>削除</DropdownItem>
      </>
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '無効項目あり',
  args: {
    trigger: <button style={{
      padding: '6px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>アクション</button>,
    width: 200,
    children: <>
        <DropdownItem onClick={() => {}}>保存</DropdownItem>
        <DropdownItem onClick={() => {}} disabled>エクスポート（権限なし）</DropdownItem>
        <DropdownItem onClick={() => {}}>共有</DropdownItem>
      </>
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'スクロールあり',
  args: {
    trigger: <button style={{
      padding: '6px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>長いリスト</button>,
    width: 200,
    maxHeight: 150,
    children: <>
        <DropdownItem onClick={() => {}}>項目 1</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 2</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 3</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 4</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 5</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 6</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 7</DropdownItem>
        <DropdownItem onClick={() => {}}>項目 8</DropdownItem>
      </>
  }
}`,...i.parameters?.docs?.source}}};const h=["Default","WithSelectedItem","WithDivider","WithDisabledItem","WithMaxHeight"];export{o as Default,t as WithDisabledItem,d as WithDivider,i as WithMaxHeight,e as WithSelectedItem,h as __namedExportsOrder,x as default};
