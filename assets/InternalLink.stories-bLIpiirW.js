import{j as e}from"./iframe-CEBuvpRZ.js";import{I as n}from"./InternalLink-DraAGGt0.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-5hpxR7Xt.js";import"./Icon-DDCqB1fE.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const u={title:"ナビゲーション/InternalLink",component:n,tags:["autodocs"],decorators:[c=>e.jsx("div",{className:"p-4",children:e.jsx(c,{})})],parameters:{layout:"centered",docs:{description:{component:`
React Router用の内部リンクコンポーネント。

3つのバリアント(button、text、link)と複数のサイズ・色をサポートします。
テーブル内や一般的なUI要素として使用可能です。
        `.trim()}}},argTypes:{to:{description:"React Routerのリンク先パス",control:"text"},children:{description:"リンクテキスト",control:"text"},variant:{description:"リンクの表示スタイル",control:"select",options:["button","text","link"]},size:{description:"リンクのサイズ",control:"select",options:["small","medium","large"]},color:{description:"リンクの色",control:"select",options:["primary","secondary","success","warning","danger"]},disabled:{description:"リンクの無効化",control:"boolean"}}},r={args:{to:"/dashboard",children:"ダッシュボードへ"}},a={args:{to:"/profile",children:"プロフィール編集",variant:"button",color:"primary",size:"medium"}},s={args:{to:"/settings",children:"設定を変更",variant:"text",color:"secondary",size:"medium"}},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"リンクスタイル"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{to:"/small",size:"small",children:"小さいリンク"}),e.jsx(n,{to:"/medium",size:"medium",children:"中サイズリンク"}),e.jsx(n,{to:"/large",size:"large",children:"大きいリンク"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"ボタンスタイル"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{to:"/small",variant:"button",size:"small",children:"小ボタン"}),e.jsx(n,{to:"/medium",variant:"button",size:"medium",children:"中ボタン"}),e.jsx(n,{to:"/large",variant:"button",size:"large",children:"大ボタン"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"テキストスタイル"}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{to:"/small",variant:"text",size:"small",children:"小テキスト"}),e.jsx(n,{to:"/medium",variant:"text",size:"medium",children:"中テキスト"}),e.jsx(n,{to:"/large",variant:"text",size:"large",children:"大テキスト"})]})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"リンクスタイル"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{to:"/primary",color:"primary",children:"Primary"}),e.jsx(n,{to:"/secondary",color:"secondary",children:"Secondary"}),e.jsx(n,{to:"/success",color:"success",children:"Success"}),e.jsx(n,{to:"/warning",color:"warning",children:"Warning"}),e.jsx(n,{to:"/danger",color:"danger",children:"Danger"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"ボタンスタイル"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{to:"/primary",variant:"button",color:"primary",children:"Primary"}),e.jsx(n,{to:"/secondary",variant:"button",color:"secondary",children:"Secondary"}),e.jsx(n,{to:"/success",variant:"button",color:"success",children:"Success"}),e.jsx(n,{to:"/warning",variant:"button",color:"warning",children:"Warning"}),e.jsx(n,{to:"/danger",variant:"button",color:"danger",children:"Danger"})]})]})]})},i={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"無効化されたリンク"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{to:"/disabled",disabled:!0,children:"無効なリンク"}),e.jsx(n,{to:"/disabled",variant:"button",disabled:!0,children:"無効なボタン"}),e.jsx(n,{to:"/disabled",variant:"text",disabled:!0,children:"無効なテキスト"})]})]})})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"アンダーバー付きリンク"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{to:"/link1",children:"常にアンダーライン表示"}),e.jsx(n,{to:"/link2",variant:"text",color:"success",children:"テキストリンク(緑・下線付き)"}),e.jsx(n,{to:"/link3",color:"danger",size:"large",children:"大サイズ(赤・下線付き)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"比較：通常とアンダーバー付き"}),e.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"通常(ホバー時のみ下線)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{to:"/normal1",children:"通常のリンク"}),e.jsx("br",{}),e.jsx(n,{to:"/normal2",variant:"text",color:"secondary",children:"テキストリンク"}),e.jsx("br",{}),e.jsx(n,{to:"/normal3",color:"success",children:"緑のリンク"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md mb-2 font-medium",children:"アンダーバー付き(常に下線)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{to:"/1",children:"アンダーバー付きリンク"}),e.jsx("br",{}),e.jsx(n,{to:"/2",variant:"text",color:"secondary",children:"テキストリンク"}),e.jsx("br",{}),e.jsx(n,{to:"/3",color:"success",children:"緑のリンク"})]})]})]})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold",children:"テーブル内での使用例"}),e.jsxs("table",{className:"min-w-full border border-gray-300 bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"メンバーID"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"氏名"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"部署"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2",children:"操作"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"001"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx(n,{to:"/employee/001",variant:"text",color:"primary",children:"田中太郎"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"営業部"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx(n,{to:"/employee/001/edit",variant:"button",size:"small",color:"secondary",children:"編集"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"002"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx(n,{to:"/employee/002",variant:"text",color:"primary",children:"佐藤花子"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:"人事部"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:e.jsx(n,{to:"/employee/002/edit",variant:"button",size:"small",color:"secondary",children:"編集"})})]})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    to: '/dashboard',
    children: 'ダッシュボードへ'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    to: '/profile',
    children: 'プロフィール編集',
    variant: 'button',
    color: 'primary',
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    to: '/settings',
    children: '設定を変更',
    variant: 'text',
    color: 'secondary',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">リンクスタイル</h3>
        <div className="flex items-center space-x-4">
          <InternalLink to="/small" size="small">
            小さいリンク
          </InternalLink>
          <InternalLink to="/medium" size="medium">
            中サイズリンク
          </InternalLink>
          <InternalLink to="/large" size="large">
            大きいリンク
          </InternalLink>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">ボタンスタイル</h3>
        <div className="flex items-center space-x-4">
          <InternalLink to="/small" variant="button" size="small">
            小ボタン
          </InternalLink>
          <InternalLink to="/medium" variant="button" size="medium">
            中ボタン
          </InternalLink>
          <InternalLink to="/large" variant="button" size="large">
            大ボタン
          </InternalLink>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">テキストスタイル</h3>
        <div className="flex items-center space-x-4">
          <InternalLink to="/small" variant="text" size="small">
            小テキスト
          </InternalLink>
          <InternalLink to="/medium" variant="text" size="medium">
            中テキスト
          </InternalLink>
          <InternalLink to="/large" variant="text" size="large">
            大テキスト
          </InternalLink>
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">リンクスタイル</h3>
        <div className="flex flex-wrap gap-4">
          <InternalLink to="/primary" color="primary">
            Primary
          </InternalLink>
          <InternalLink to="/secondary" color="secondary">
            Secondary
          </InternalLink>
          <InternalLink to="/success" color="success">
            Success
          </InternalLink>
          <InternalLink to="/warning" color="warning">
            Warning
          </InternalLink>
          <InternalLink to="/danger" color="danger">
            Danger
          </InternalLink>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">ボタンスタイル</h3>
        <div className="flex flex-wrap gap-4">
          <InternalLink to="/primary" variant="button" color="primary">
            Primary
          </InternalLink>
          <InternalLink to="/secondary" variant="button" color="secondary">
            Secondary
          </InternalLink>
          <InternalLink to="/success" variant="button" color="success">
            Success
          </InternalLink>
          <InternalLink to="/warning" variant="button" color="warning">
            Warning
          </InternalLink>
          <InternalLink to="/danger" variant="button" color="danger">
            Danger
          </InternalLink>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">無効化されたリンク</h3>
        <div className="flex flex-wrap gap-4">
          <InternalLink to="/disabled" disabled>
            無効なリンク
          </InternalLink>
          <InternalLink to="/disabled" variant="button" disabled>
            無効なボタン
          </InternalLink>
          <InternalLink to="/disabled" variant="text" disabled>
            無効なテキスト
          </InternalLink>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">アンダーバー付きリンク</h3>
        <div className="flex flex-wrap gap-4">
          <InternalLink to="/link1">
            常にアンダーライン表示
          </InternalLink>
          <InternalLink to="/link2" variant="text" color="success">
            テキストリンク(緑・下線付き)
          </InternalLink>
          <InternalLink to="/link3" color="danger" size="large">
            大サイズ(赤・下線付き)
          </InternalLink>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-fluid-lg font-semibold">比較：通常とアンダーバー付き</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-md mb-2 font-medium">通常(ホバー時のみ下線)</h4>
            <div className="space-y-2">
              <InternalLink to="/normal1">通常のリンク</InternalLink>
              <br />
              <InternalLink to="/normal2" variant="text" color="secondary">
                テキストリンク
              </InternalLink>
              <br />
              <InternalLink to="/normal3" color="success">
                緑のリンク
              </InternalLink>
            </div>
          </div>
          <div>
            <h4 className="text-md mb-2 font-medium">
              アンダーバー付き(常に下線)
            </h4>
            <div className="space-y-2">
              <InternalLink to="/1">
                アンダーバー付きリンク
              </InternalLink>
              <br />
              <InternalLink to="/2" variant="text" color="secondary">
                テキストリンク
              </InternalLink>
              <br />
              <InternalLink to="/3" color="success">
                緑のリンク
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h3 className="text-fluid-lg font-semibold">テーブル内での使用例</h3>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">メンバーID</th>
            <th className="border border-gray-300 px-4 py-2">氏名</th>
            <th className="border border-gray-300 px-4 py-2">部署</th>
            <th className="border border-gray-300 px-4 py-2">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">001</td>
            <td className="border border-gray-300 px-4 py-2">
              <InternalLink to="/employee/001" variant="text" color="primary">
                田中太郎
              </InternalLink>
            </td>
            <td className="border border-gray-300 px-4 py-2">営業部</td>
            <td className="border border-gray-300 px-4 py-2">
              <InternalLink to="/employee/001/edit" variant="button" size="small" color="secondary">
                編集
              </InternalLink>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">002</td>
            <td className="border border-gray-300 px-4 py-2">
              <InternalLink to="/employee/002" variant="text" color="primary">
                佐藤花子
              </InternalLink>
            </td>
            <td className="border border-gray-300 px-4 py-2">人事部</td>
            <td className="border border-gray-300 px-4 py-2">
              <InternalLink to="/employee/002/edit" variant="button" size="small" color="secondary">
                編集
              </InternalLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
}`,...d.parameters?.docs?.source}}};const v=["Default","ButtonVariant","TextVariant","Sizes","Colors","Disabled","With","TableUsage"];export{a as ButtonVariant,l as Colors,r as Default,i as Disabled,t as Sizes,d as TableUsage,s as TextVariant,o as With,v as __namedExportsOrder,u as default};
