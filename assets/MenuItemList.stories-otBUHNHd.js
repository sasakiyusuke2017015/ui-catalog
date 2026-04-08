import{j as e}from"./iframe-CUmTO3gC.js";import{M as s}from"./MenuItemList-C_vy00b4.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-C6oEkCLz.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-BESojGLS.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const h={title:"ナビゲーション/メニュー/MenuItemList",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light"}},decorators:[c=>e.jsx("div",{className:"w-64 rounded-lg border border-gray-200 bg-white shadow-md",children:e.jsx(c,{})})],argTypes:{menuHeader:{control:"text",description:"メニューのヘッダー部分"},menuItems:{control:"object",description:"メニュー項目の配列"},onClose:{action:"menu closed",description:"メニューを閉じる際のコールバック"}}},a={args:{menuHeader:e.jsx("div",{className:"text-fluid-sm font-semibold text-gray-700",children:"ユーザーメニュー"}),menuItems:[{icon:"user",label:"プロフィール",onClick:()=>console.log("プロフィールを開く")},{icon:"settings",label:"設定",onClick:()=>console.log("設定を開く")},{icon:"logout",label:"ログアウト",onClick:()=>console.log("ログアウトする")}]}},t={args:{menuItems:[{icon:"home",label:"HOME"},{icon:"file",label:"ドキュメント"},{icon:"folder",label:"プロジェクト"}]}},l={args:{menuHeader:e.jsx("div",{className:"text-fluid-sm font-semibold text-gray-700",children:"操作メニュー"}),menuItems:[{label:"新規作成"},{label:"編集"},{label:"削除"}]}},n={args:{menuHeader:e.jsx("div",{className:"text-fluid-sm font-semibold text-gray-700",children:"ナビゲーション"}),menuItems:[{icon:"home",label:"HOME"},{icon:"user",label:"ユーザー"},{icon:"calendar",label:"カレンダー"},{icon:"chart",label:"レポート"},{icon:"settings",label:"設定"},{icon:"notification",label:"通知"},{icon:"help",label:"ヘルプ"},{icon:"logout",label:"ログアウト"}]}},o={args:{menuHeader:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-blue-500"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-fluid-sm font-bold text-gray-800",children:"山田 太郎"}),e.jsx("div",{className:"text-fluid-xs text-gray-500",children:"yamada@example.com"})]})]}),menuItems:[{icon:"user",label:"マイページ"},{icon:"settings",label:"アカウント設定"},{icon:"logout",label:"ログアウト"}]}},i={args:{menuHeader:e.jsx("div",{className:"text-fluid-sm font-semibold text-gray-700",children:"メニュー"}),menuItems:[]}},r={render:()=>e.jsxs(s,{menuHeader:e.jsx("div",{className:"text-fluid-sm font-semibold text-gray-700",children:"メニュー（アニメーション）"}),children:[e.jsx(s.Item,{onClick:()=>console.log("項目1"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"📋"}),e.jsx("span",{children:"項目 1"})]})}),e.jsx(s.Item,{onClick:()=>console.log("項目2"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"✏️"}),e.jsx("span",{children:"項目 2"})]})}),e.jsx(s.Item,{onClick:()=>console.log("項目3"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🗑️"}),e.jsx("span",{children:"項目 3"})]})}),e.jsx(s.Item,{onClick:()=>console.log("項目4"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"}),e.jsx("span",{children:"項目 4"})]})}),e.jsx(s.Item,{onClick:()=>console.log("項目5"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🚪"}),e.jsx("span",{children:"項目 5"})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    menuHeader: <div className="text-fluid-sm font-semibold text-gray-700">
        ユーザーメニュー
      </div>,
    menuItems: [{
      icon: 'user',
      label: 'プロフィール',
      onClick: () => console.log('プロフィールを開く')
    }, {
      icon: 'settings',
      label: '設定',
      onClick: () => console.log('設定を開く')
    }, {
      icon: 'logout',
      label: 'ログアウト',
      onClick: () => console.log('ログアウトする')
    }]
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    menuItems: [{
      icon: 'home',
      label: 'HOME'
    }, {
      icon: 'file',
      label: 'ドキュメント'
    }, {
      icon: 'folder',
      label: 'プロジェクト'
    }]
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    menuHeader: <div className="text-fluid-sm font-semibold text-gray-700">操作メニュー</div>,
    menuItems: [{
      label: '新規作成'
    }, {
      label: '編集'
    }, {
      label: '削除'
    }]
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    menuHeader: <div className="text-fluid-sm font-semibold text-gray-700">ナビゲーション</div>,
    menuItems: [{
      icon: 'home',
      label: 'HOME'
    }, {
      icon: 'user',
      label: 'ユーザー'
    }, {
      icon: 'calendar',
      label: 'カレンダー'
    }, {
      icon: 'chart',
      label: 'レポート'
    }, {
      icon: 'settings',
      label: '設定'
    }, {
      icon: 'notification',
      label: '通知'
    }, {
      icon: 'help',
      label: 'ヘルプ'
    }, {
      icon: 'logout',
      label: 'ログアウト'
    }]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    menuHeader: <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-500"></div>
        <div>
          <div className="text-fluid-sm font-bold text-gray-800">山田 太郎</div>
          <div className="text-fluid-xs text-gray-500">yamada@example.com</div>
        </div>
      </div>,
    menuItems: [{
      icon: 'user',
      label: 'マイページ'
    }, {
      icon: 'settings',
      label: 'アカウント設定'
    }, {
      icon: 'logout',
      label: 'ログアウト'
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    menuHeader: <div className="text-fluid-sm font-semibold text-gray-700">メニュー</div>,
    menuItems: []
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <MenuItemList menuHeader={<div className="text-fluid-sm font-semibold text-gray-700">メニュー（アニメーション）</div>}>
      <MenuItemList.Item onClick={() => console.log('項目1')}>
        <div className="flex items-center gap-2">
          <span>📋</span>
          <span>項目 1</span>
        </div>
      </MenuItemList.Item>
      <MenuItemList.Item onClick={() => console.log('項目2')}>
        <div className="flex items-center gap-2">
          <span>✏️</span>
          <span>項目 2</span>
        </div>
      </MenuItemList.Item>
      <MenuItemList.Item onClick={() => console.log('項目3')}>
        <div className="flex items-center gap-2">
          <span>🗑️</span>
          <span>項目 3</span>
        </div>
      </MenuItemList.Item>
      <MenuItemList.Item onClick={() => console.log('項目4')}>
        <div className="flex items-center gap-2">
          <span>⚙️</span>
          <span>項目 4</span>
        </div>
      </MenuItemList.Item>
      <MenuItemList.Item onClick={() => console.log('項目5')}>
        <div className="flex items-center gap-2">
          <span>🚪</span>
          <span>項目 5</span>
        </div>
      </MenuItemList.Item>
    </MenuItemList>
}`,...r.parameters?.docs?.source}}};const I=["Default","WithoutHeader","WithoutIcons","ManyItems","CustomHeader","Empty","WithItemComponent"];export{o as CustomHeader,a as Default,i as Empty,n as ManyItems,r as WithItemComponent,t as WithoutHeader,l as WithoutIcons,I as __namedExportsOrder,h as default};
