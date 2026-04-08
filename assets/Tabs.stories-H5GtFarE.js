import{j as n}from"./iframe-CUmTO3gC.js";import{T as s}from"./Tabs-d6QBZp0h.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";const p={title:"ナビゲーション/タブ/Tabs",component:s,tags:["autodocs"],parameters:{layout:"padded"}},e={args:{tabs:[{id:"overview",label:"概要",content:n.jsx("p",{children:"概要コンテンツ"})},{id:"details",label:"詳細",content:n.jsx("p",{children:"詳細コンテンツ"})},{id:"settings",label:"設定",content:n.jsx("p",{children:"設定コンテンツ"})}]}},t={args:{tabs:[{id:"tab1",label:"タブ1",content:n.jsx("p",{children:"タブ1のコンテンツ"})},{id:"tab2",label:"タブ2",content:n.jsx("p",{children:"タブ2のコンテンツ"})},{id:"tab3",label:"タブ3",content:n.jsx("p",{children:"タブ3のコンテンツ"})}],defaultTab:"tab2"}},a={args:{tabs:[{id:"active",label:"有効",content:n.jsx("p",{children:"有効なアイテムの一覧"})},{id:"inactive",label:"無効",content:n.jsx("p",{children:"無効なアイテムの一覧"})}]}},l={args:{tabs:[{id:"all",label:"すべて",content:n.jsx("p",{children:"すべてのデータ"})},{id:"draft",label:"下書き",content:n.jsx("p",{children:"下書き一覧"})},{id:"review",label:"レビュー中",content:n.jsx("p",{children:"レビュー待ちの項目"})},{id:"approved",label:"承認済み",content:n.jsx("p",{children:"承認済み一覧"})},{id:"rejected",label:"却下",content:n.jsx("p",{children:"却下された項目"})},{id:"archived",label:"アーカイブ",content:n.jsx("p",{children:"アーカイブ済み"})}]}},r={args:{tabs:[{id:"profile",label:"プロフィール",content:n.jsxs("div",{style:{padding:16},children:[n.jsx("h3",{style:{margin:"0 0 8px"},children:"田中 太郎"}),n.jsx("p",{style:{color:"#6b7280",margin:0},children:"tanaka@example.com"}),n.jsx("p",{style:{color:"#6b7280",margin:"4px 0 0"},children:"営業部 / マネージャー"})]})},{id:"activity",label:"アクティビティ",content:n.jsxs("ul",{style:{padding:"16px 16px 16px 32px",margin:0},children:[n.jsx("li",{children:"レポートを提出しました (2分前)"}),n.jsx("li",{children:"コメントを追加しました (1時間前)"}),n.jsx("li",{children:"タスクを完了しました (3時間前)"})]})},{id:"settings",label:"設定",content:n.jsx("div",{style:{padding:16,color:"#6b7280"},children:"通知・セキュリティ等の設定項目がここに表示されます。"})}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'overview',
      label: '概要',
      content: <p>概要コンテンツ</p>
    }, {
      id: 'details',
      label: '詳細',
      content: <p>詳細コンテンツ</p>
    }, {
      id: 'settings',
      label: '設定',
      content: <p>設定コンテンツ</p>
    }]
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab1',
      label: 'タブ1',
      content: <p>タブ1のコンテンツ</p>
    }, {
      id: 'tab2',
      label: 'タブ2',
      content: <p>タブ2のコンテンツ</p>
    }, {
      id: 'tab3',
      label: 'タブ3',
      content: <p>タブ3のコンテンツ</p>
    }],
    defaultTab: 'tab2'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'active',
      label: '有効',
      content: <p>有効なアイテムの一覧</p>
    }, {
      id: 'inactive',
      label: '無効',
      content: <p>無効なアイテムの一覧</p>
    }]
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'all',
      label: 'すべて',
      content: <p>すべてのデータ</p>
    }, {
      id: 'draft',
      label: '下書き',
      content: <p>下書き一覧</p>
    }, {
      id: 'review',
      label: 'レビュー中',
      content: <p>レビュー待ちの項目</p>
    }, {
      id: 'approved',
      label: '承認済み',
      content: <p>承認済み一覧</p>
    }, {
      id: 'rejected',
      label: '却下',
      content: <p>却下された項目</p>
    }, {
      id: 'archived',
      label: 'アーカイブ',
      content: <p>アーカイブ済み</p>
    }]
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'profile',
      label: 'プロフィール',
      content: <div style={{
        padding: 16
      }}>
            <h3 style={{
          margin: '0 0 8px'
        }}>田中 太郎</h3>
            <p style={{
          color: '#6b7280',
          margin: 0
        }}>tanaka@example.com</p>
            <p style={{
          color: '#6b7280',
          margin: '4px 0 0'
        }}>営業部 / マネージャー</p>
          </div>
    }, {
      id: 'activity',
      label: 'アクティビティ',
      content: <ul style={{
        padding: '16px 16px 16px 32px',
        margin: 0
      }}>
            <li>レポートを提出しました (2分前)</li>
            <li>コメントを追加しました (1時間前)</li>
            <li>タスクを完了しました (3時間前)</li>
          </ul>
    }, {
      id: 'settings',
      label: '設定',
      content: <div style={{
        padding: 16,
        color: '#6b7280'
      }}>
            通知・セキュリティ等の設定項目がここに表示されます。
          </div>
    }]
  }
}`,...r.parameters?.docs?.source}}};const b=["Default","WithDefaultTab","TwoTabs","ManyTabs","WithRichContent"];export{e as Default,l as ManyTabs,a as TwoTabs,t as WithDefaultTab,r as WithRichContent,b as __namedExportsOrder,p as default};
