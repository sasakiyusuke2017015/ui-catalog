import{j as e,R as m}from"./iframe-87Bzd3j4.js";import{M as a}from"./Modal-BLnEt5qb.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-Bcw04W3l.js";import"./Icon-C2T7xtHb.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./useOperationLog-0HvfpEDm.js";const j={title:"フィードバック/ダイアログ/Modal",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
汎用モーダルコンポーネント。
• カスタマイズ可能な幅と高さ
• Escキーで閉じることが可能
• 背景クリックで閉じることが可能
• スクロール可能なコンテンツエリア`}}},argTypes:{isOpen:{control:{type:"boolean"},description:"モーダルの表示状態",table:{defaultValue:{summary:!1}}},title:{control:{type:"text"},description:"モーダルのタイトル"},maxWidth:{control:{type:"text"},description:"モーダルの最大幅（Tailwindクラス）",table:{defaultValue:{summary:"max-w-3xl"}}},maxHeight:{control:{type:"text"},description:"モーダルの最大高さ（Tailwindクラス）",table:{defaultValue:{summary:"max-h-[80vh]"}}},onClose:{action:"closed",description:"閉じるときのハンドラ"},children:{control:{type:"text"},description:"モーダル内に表示するコンテンツ"}}},r={args:{isOpen:!0,title:"基本的なモーダル",children:e.jsxs("div",{children:[e.jsx("p",{children:"これはモーダルのコンテンツです。"}),e.jsx("p",{children:"複数の段落を含めることができます。"})]})},parameters:{docs:{description:{story:"標準的なモーダルの表示例"}}}},t={args:{isOpen:!0,title:"小さいモーダル",maxWidth:"max-w-md",children:e.jsx("p",{children:"これは小さいサイズのモーダルです。"})},parameters:{docs:{description:{story:"幅を狭くした小さいモーダル"}}}},n={args:{isOpen:!0,title:"大きいモーダル",maxWidth:"max-w-6xl",children:e.jsxs("div",{children:[e.jsx("p",{children:"これは大きいサイズのモーダルです。"}),e.jsx("p",{children:"広いコンテンツを表示する場合に使用します。"})]})},parameters:{docs:{description:{story:"幅を広くした大きいモーダル"}}}},o={args:{isOpen:!0,title:"長いコンテンツを持つモーダル",children:e.jsxs("div",{children:[e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション1"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"このモーダルは長いコンテンツを含んでいます。コンテンツエリアはスクロール可能です。"}),e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション2"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション3"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション4"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション5"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("h4",{style:{fontWeight:"bold",marginBottom:"1rem"},children:"セクション6"}),e.jsx("p",{children:"これで長いコンテンツが終わります。スクロールして確認してください。"})]})},parameters:{docs:{description:{story:"長いコンテンツを持つモーダル。コンテンツエリアがスクロール可能"}}}},i={args:{isOpen:!0,title:"ユーザー情報の編集",children:e.jsxs("form",{children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.25rem",fontWeight:"500"},children:"名前"}),e.jsx("input",{type:"text",placeholder:"山田太郎",style:{width:"100%",padding:"0.5rem",border:"1px solid #d1d5db",borderRadius:"0.25rem"}})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.25rem",fontWeight:"500"},children:"メールアドレス"}),e.jsx("input",{type:"email",placeholder:"example@example.com",style:{width:"100%",padding:"0.5rem",border:"1px solid #d1d5db",borderRadius:"0.25rem"}})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.25rem",fontWeight:"500"},children:"自己紹介"}),e.jsx("textarea",{placeholder:"自己紹介を入力してください",rows:4,style:{width:"100%",padding:"0.5rem",border:"1px solid #d1d5db",borderRadius:"0.25rem"}})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"end"},children:[e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",backgroundColor:"#6b7280",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"キャンセル"}),e.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"保存"})]})]})},parameters:{docs:{description:{story:"フォームを含むモーダルの例"}}}},c=()=>{const[l,d]=m.useState(!1);return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("button",{onClick:()=>d(!0),style:{padding:"0.75rem 1.5rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer",fontSize:"1rem"},children:"モーダルを開く"}),e.jsx(a,{isOpen:l,onClose:()=>d(!1),title:"デモモーダル",children:e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"これはモーダルのデモです。以下の方法で閉じることができます："}),e.jsxs("ul",{style:{marginLeft:"1.5rem",marginBottom:"1rem"},children:[e.jsx("li",{children:"右上の×ボタンをクリック"}),e.jsx("li",{children:"Escキーを押す"}),e.jsx("li",{children:"背景（暗い部分）をクリック"})]}),e.jsx("button",{onClick:()=>d(!1),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"閉じる"})]})})]})},s={render:()=>e.jsx(c,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ボタンをクリックしてモーダルを開くインタラクティブなデモ"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '基本的なモーダル',
    children: <div>
        <p>これはモーダルのコンテンツです。</p>
        <p>複数の段落を含めることができます。</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '標準的なモーダルの表示例'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '小さいモーダル',
    maxWidth: 'max-w-md',
    children: <p>これは小さいサイズのモーダルです。</p>
  },
  parameters: {
    docs: {
      description: {
        story: '幅を狭くした小さいモーダル'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '大きいモーダル',
    maxWidth: 'max-w-6xl',
    children: <div>
        <p>これは大きいサイズのモーダルです。</p>
        <p>広いコンテンツを表示する場合に使用します。</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '幅を広くした大きいモーダル'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '長いコンテンツを持つモーダル',
    children: <div>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション1
        </h4>
        <p style={{
        marginBottom: '1rem'
      }}>
          このモーダルは長いコンテンツを含んでいます。コンテンツエリアはスクロール可能です。
        </p>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション2
        </h4>
        <p style={{
        marginBottom: '1rem'
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション3
        </h4>
        <p style={{
        marginBottom: '1rem'
      }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション4
        </h4>
        <p style={{
        marginBottom: '1rem'
      }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション5
        </h4>
        <p style={{
        marginBottom: '1rem'
      }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <h4 style={{
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
          セクション6
        </h4>
        <p>
          これで長いコンテンツが終わります。スクロールして確認してください。
        </p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '長いコンテンツを持つモーダル。コンテンツエリアがスクロール可能'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'ユーザー情報の編集',
    children: <form>
        <div style={{
        marginBottom: '1rem'
      }}>
          <label style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontWeight: '500'
        }}>
            名前
          </label>
          <input type="text" placeholder="山田太郎" style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.25rem'
        }} />
        </div>
        <div style={{
        marginBottom: '1rem'
      }}>
          <label style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontWeight: '500'
        }}>
            メールアドレス
          </label>
          <input type="email" placeholder="example@example.com" style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.25rem'
        }} />
        </div>
        <div style={{
        marginBottom: '1rem'
      }}>
          <label style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontWeight: '500'
        }}>
            自己紹介
          </label>
          <textarea placeholder="自己紹介を入力してください" rows={4} style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.25rem'
        }} />
        </div>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'end'
      }}>
          <button type="button" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#6b7280',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>
            キャンセル
          </button>
          <button type="submit" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}>
            保存
          </button>
        </div>
      </form>
  },
  parameters: {
    docs: {
      description: {
        story: 'フォームを含むモーダルの例'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ModalDemo />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ボタンをクリックしてモーダルを開くインタラクティブなデモ'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const B=["Default","Small","Large","LongContent","WithForm","InteractiveDemo"];export{r as Default,s as InteractiveDemo,n as Large,o as LongContent,t as Small,i as WithForm,B as __namedExportsOrder,j as default};
