import{j as e}from"./iframe-CEBuvpRZ.js";import{R as p}from"./ResponsiveContainer-BNI2pZlu.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"レイアウト/ResponsiveContainer",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"light",value:"#f7fafc"},{name:"dark",value:"#1a202c"},{name:"gray",value:"#e2e8f0"}]},docs:{description:{component:`
高さ制限とスクロール機能を提供するレスポンシブな ResponsiveContainer コンポーネント。
• heightPercent プロパティでビューポート高さの％を指定
• 完全にレスポンシブで画面サイズに自動対応
• overflow-y-auto で縦スクロールを自動化
• キーボードナビゲーション対応(enableKeyboardNav)
• フォーカス管理とキーボードイベントハンドリング`},source:{transform:(a,s)=>{const{args:r}=s,t=[];return r.heightPercent&&r.heightPercent!==60&&t.push(`heightPercent={${r.heightPercent}}`),r.className&&t.push(`className="${r.className}"`),r.enableKeyboardNav&&t.push("enableKeyboardNav"),r.onKeyDown&&t.push("onKeyDown={handleKeyDown}"),r.tabIndex&&t.push(`tabIndex={${r.tabIndex}}`),r.disableScroll&&t.push("disableScroll"),`
import ResponsiveContainer from './ResponsiveContainer';

<ResponsiveContainer${t.length>0?" "+t.join(" "):""}>
  {/* コンテンツをここに配置 */}
</ResponsiveContainer>
          `.trim()}}}},argTypes:{heightPercent:{control:{type:"number",min:20,max:95,step:5},description:"ビューポート高さの％(20-95%)",table:{defaultValue:{summary:"60"}}},className:{control:{type:"text"},description:"追加のCSSクラス名",table:{defaultValue:{summary:"''"}}},enableKeyboardNav:{control:{type:"boolean"},description:"キーボードナビゲーションを有効化",table:{defaultValue:{summary:"false"}}},onKeyDown:{action:"keydown",description:"キーダウンイベントハンドラ"},tabIndex:{control:{type:"number"},description:"タブインデックス(enableKeyboardNav時のみ有効)"},disableScroll:{control:{type:"boolean"},description:"スクロールを無効化(内部でスクロール管理する場合)",table:{defaultValue:{summary:"false"}}},showDebugInfo:{control:{type:"boolean"},description:"デバッグ情報を表示(heightPercent値を右上に表示)",table:{defaultValue:{summary:"false"}}},children:{description:"コンテナ内に表示するコンテンツ"}}},l={args:{heightPercent:60,children:e.jsxs("div",{className:"space-y-4 p-6",children:[e.jsx("h2",{className:"text-fluid-xl font-bold text-gray-800",children:"基本的な使用例"}),e.jsx("p",{className:"text-gray-600",children:"このコンテナは高さが制限され、コンテンツが溢れる場合は自動的にスクロールします。"}),Array.from({length:20},(a,s)=>e.jsxs("div",{className:"rounded-lg border bg-blue-50 p-4",children:[e.jsxs("h3",{className:"font-semibold text-blue-800",children:["コンテンツ項目 ",s+1]}),e.jsx("p",{className:"text-blue-600",children:"これはスクロール動作を確認するためのサンプルコンテンツです。"})]},s))]})},parameters:{docs:{description:{story:"標準的な使用例。heightPercent=60%でビューポート高さの60%の高さに設定されます。"}}}},d={args:{},render:()=>e.jsxs("div",{className:"grid h-screen grid-cols-3 gap-4 p-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-bold",children:"heightPercent: 30%"}),e.jsx(p,{heightPercent:30,className:"border-2 border-red-200 bg-red-50",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,s)=>e.jsxs("div",{className:"mb-2 rounded bg-red-100 p-2",children:["項目 ",s+1]},s))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-bold",children:"heightPercent: 60% (デフォルト)"}),e.jsx(p,{heightPercent:60,className:"border-2 border-blue-200 bg-blue-50",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,s)=>e.jsxs("div",{className:"mb-2 rounded bg-blue-100 p-2",children:["項目 ",s+1]},s))})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-bold",children:"heightPercent: 80%"}),e.jsx(p,{heightPercent:80,className:"border-2 border-green-200 bg-green-50",children:e.jsx("div",{className:"p-4",children:Array.from({length:15},(a,s)=>e.jsxs("div",{className:"mb-2 rounded bg-green-100 p-2",children:["項目 ",s+1]},s))})})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"異なるheightPercent値での比較。％指定により画面サイズに完全対応します。"}}}},i={args:{heightPercent:70,className:"bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg",children:e.jsxs("div",{className:"space-y-4 p-6",children:[e.jsx("h2",{className:"text-fluid-xl font-bold text-cyan-800",children:"レスポンシブ動作テスト"}),e.jsxs("div",{className:"rounded-lg bg-white/70 p-4",children:[e.jsx("h3",{className:"mb-2 font-semibold text-cyan-700",children:"動作説明"}),e.jsxs("ul",{className:"space-y-1 text-fluid-sm text-cyan-600",children:[e.jsx("li",{children:"• デスクトップ: ビューポート高さの70%"}),e.jsx("li",{children:"• タブレット: ビューポート高さの70%"}),e.jsx("li",{children:"• モバイル: ビューポート高さの70%(最小21vh)"}),e.jsx("li",{children:"• ブラウザをリサイズして確認してください"})]})]}),e.jsx("div",{className:"rounded bg-gray-100 p-3 text-fluid-xs text-gray-500",children:"現在の設定: height=70vh, minHeight=21vh, maxHeight=70vh"}),Array.from({length:20},(a,s)=>e.jsxs("div",{className:"rounded border border-cyan-200 bg-cyan-100 p-3",children:[e.jsxs("h4",{className:"font-medium text-cyan-800",children:["テストコンテンツ ",s+1]}),e.jsx("p",{className:"text-fluid-sm text-cyan-600",children:"レスポンシブコンテナの動作確認用のコンテンツです。"})]},s))]})},parameters:{docs:{description:{story:"レスポンシブ動作の確認。ブラウザをリサイズして高さの変化を確認できます。"}}}},o={args:{enableKeyboardNav:!0,tabIndex:0,className:"border-2 border-blue-500 focus:border-blue-700 focus:outline-none",children:e.jsxs("div",{className:"space-y-4 p-6",children:[e.jsx("h2",{className:"text-fluid-xl font-bold text-gray-800",children:"キーボードナビゲーション有効"}),e.jsx("p",{className:"text-blue-600",children:"このコンテナはフォーカス可能です。クリックまたはTabキーでフォーカスし、 矢印キーでスクロールできます。"}),Array.from({length:12},(a,s)=>e.jsxs("div",{className:"rounded-lg border bg-yellow-50 p-4",children:[e.jsxs("h3",{className:"font-semibold text-yellow-800",children:["フォーカス可能項目 ",s+1]}),e.jsx("p",{className:"text-yellow-600",children:"このコンテナはキーボードでナビゲーション可能です。"})]},s))]})},parameters:{docs:{description:{story:"キーボードナビゲーションが有効な例。フォーカス可能でキーボードイベントを受け取ります。"}}}},n={args:{heightPercent:65,className:"bg-white shadow-lg rounded-lg",children:e.jsxs("div",{children:[e.jsx("div",{className:"rounded-t-lg bg-gray-800 p-4 text-white",children:e.jsx("h2",{className:"text-fluid-lg font-bold",children:"データ一覧"})}),e.jsx("div",{className:"border-b bg-gray-100",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4 p-3 font-semibold text-gray-700",children:[e.jsx("div",{children:"ID"}),e.jsx("div",{children:"名前"}),e.jsx("div",{children:"部署"}),e.jsx("div",{children:"ステータス"})]})}),e.jsx("div",{className:"divide-y divide-gray-200",children:Array.from({length:25},(a,s)=>e.jsxs("div",{className:"grid grid-cols-4 gap-4 p-3 hover:bg-gray-50",children:[e.jsxs("div",{className:"text-gray-600",children:["#",s+1]}),e.jsxs("div",{className:"font-medium",children:["ユーザー ",s+1]}),e.jsx("div",{className:"text-gray-600",children:["開発部","営業部","人事部","マーケティング部"][s%4]}),e.jsx("div",{children:e.jsx("span",{className:`rounded-full px-2 py-1 text-fluid-xs font-medium ${s%3===0?"bg-green-100 text-green-800":s%3===1?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:s%3===0?"アクティブ":s%3===1?"保留中":"非アクティブ"})})]},s))})]})},parameters:{docs:{description:{story:"実際のデータテーブルのような構造でのResponsiveContainer使用例。ヘッダーは固定され、データ部分がスクロールします。"}}}},c={args:{heightPercent:55,className:"bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl shadow-lg",children:e.jsxs("div",{className:"space-y-4 p-6",children:[e.jsx("h2",{className:"text-fluid-2xl font-bold text-purple-800",children:"カスタムスタイリング"}),e.jsx("p",{className:"text-purple-600",children:"ResponsiveContainerにカスタムクラスを適用した例です。 グラデーション背景、ボーダー、シャドウなどが適用されています。"}),Array.from({length:10},(a,s)=>e.jsxs("div",{className:"rounded-lg border border-purple-200 bg-white/70 p-4 backdrop-blur",children:[e.jsxs("h3",{className:"font-semibold text-purple-800",children:["カスタムスタイル項目 ",s+1]}),e.jsx("p",{className:"text-purple-600",children:"美しいグラデーションとガラス効果が適用されたコンテンツエリアです。"})]},s))]})},parameters:{docs:{description:{story:"カスタムCSSクラスを適用したスタイリング例。グラデーション、ボーダー、シャドウなどの装飾が可能です。"}}}},m={args:{heightPercent:40,className:"bg-gray-50 border rounded-lg",children:e.jsxs("div",{className:"p-6 text-center",children:[e.jsx("h2",{className:"mb-4 text-fluid-lg font-bold text-gray-800",children:"最小コンテンツ"}),e.jsx("p",{className:"text-gray-600",children:"このコンテンツは高さが十分に小さいため、スクロールは表示されません。"}),e.jsx("div",{className:"mt-4 rounded bg-blue-100 p-3",children:e.jsx("p",{className:"text-fluid-sm text-blue-800",children:"ResponsiveContainerは必要に応じてスクロールを表示します。"})})]})},parameters:{docs:{description:{story:"コンテンツが少ない場合の表示例。スクロールは表示されず、通常のコンテナとして動作します。"}}}},h={args:{heightPercent:45,disableScroll:!0,className:"bg-orange-50 border-2 border-orange-200 rounded-lg",children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsx("div",{className:"flex-shrink-0 bg-orange-100 p-3",children:e.jsx("h3",{className:"font-semibold text-orange-800",children:"ヘッダー(固定)"})}),e.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto p-4",children:[e.jsx("h2",{className:"mb-4 text-fluid-lg font-bold text-orange-800",children:"内部でスクロール管理"}),e.jsx("p",{className:"mb-4 text-orange-600",children:"ResponsiveContainerのスクロールを無効化し、内部の要素でスクロールを管理します。"}),Array.from({length:15},(a,s)=>e.jsxs("div",{className:"mb-2 rounded bg-orange-100 p-3",children:["内部スクロール項目 ",s+1]},s))]})]})},parameters:{docs:{description:{story:"disableScroll=trueの例。テーブルなどで内部の特定要素だけスクロールさせたい場合に使用。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 60,
    children: <div className="space-y-4 p-6">
        <h2 className="text-fluid-xl font-bold text-gray-800">基本的な使用例</h2>
        <p className="text-gray-600">
          このコンテナは高さが制限され、コンテンツが溢れる場合は自動的にスクロールします。
        </p>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="rounded-lg border bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-800">
              コンテンツ項目 {i + 1}
            </h3>
            <p className="text-blue-600">
              これはスクロール動作を確認するためのサンプルコンテンツです。
            </p>
          </div>)}
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '標準的な使用例。heightPercent=60%でビューポート高さの60%の高さに設定されます。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="grid h-screen grid-cols-3 gap-4 p-4">
      <div>
        <h3 className="mb-2 text-fluid-sm font-bold">heightPercent: 30%</h3>
        <ResponsiveContainer heightPercent={30} className="border-2 border-red-200 bg-red-50">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="mb-2 rounded bg-red-100 p-2">
                項目 {i + 1}
              </div>)}
          </div>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-bold">
          heightPercent: 60% (デフォルト)
        </h3>
        <ResponsiveContainer heightPercent={60} className="border-2 border-blue-200 bg-blue-50">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="mb-2 rounded bg-blue-100 p-2">
                項目 {i + 1}
              </div>)}
          </div>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-bold">heightPercent: 80%</h3>
        <ResponsiveContainer heightPercent={80} className="border-2 border-green-200 bg-green-50">
          <div className="p-4">
            {Array.from({
            length: 15
          }, (_, i) => <div key={i} className="mb-2 rounded bg-green-100 p-2">
                項目 {i + 1}
              </div>)}
          </div>
        </ResponsiveContainer>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '異なるheightPercent値での比較。％指定により画面サイズに完全対応します。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 70,
    className: 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg',
    children: <div className="space-y-4 p-6">
        <h2 className="text-fluid-xl font-bold text-cyan-800">
          レスポンシブ動作テスト
        </h2>
        <div className="rounded-lg bg-white/70 p-4">
          <h3 className="mb-2 font-semibold text-cyan-700">動作説明</h3>
          <ul className="space-y-1 text-fluid-sm text-cyan-600">
            <li>• デスクトップ: ビューポート高さの70%</li>
            <li>• タブレット: ビューポート高さの70%</li>
            <li>• モバイル: ビューポート高さの70%(最小21vh)</li>
            <li>• ブラウザをリサイズして確認してください</li>
          </ul>
        </div>
        <div className="rounded bg-gray-100 p-3 text-fluid-xs text-gray-500">
          現在の設定: height=70vh, minHeight=21vh, maxHeight=70vh
        </div>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="rounded border border-cyan-200 bg-cyan-100 p-3">
            <h4 className="font-medium text-cyan-800">
              テストコンテンツ {i + 1}
            </h4>
            <p className="text-fluid-sm text-cyan-600">
              レスポンシブコンテナの動作確認用のコンテンツです。
            </p>
          </div>)}
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'レスポンシブ動作の確認。ブラウザをリサイズして高さの変化を確認できます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    enableKeyboardNav: true,
    tabIndex: 0,
    className: 'border-2 border-blue-500 focus:border-blue-700 focus:outline-none',
    children: <div className="space-y-4 p-6">
        <h2 className="text-fluid-xl font-bold text-gray-800">
          キーボードナビゲーション有効
        </h2>
        <p className="text-blue-600">
          このコンテナはフォーカス可能です。クリックまたはTabキーでフォーカスし、
          矢印キーでスクロールできます。
        </p>
        {Array.from({
        length: 12
      }, (_, i) => <div key={i} className="rounded-lg border bg-yellow-50 p-4">
            <h3 className="font-semibold text-yellow-800">
              フォーカス可能項目 {i + 1}
            </h3>
            <p className="text-yellow-600">
              このコンテナはキーボードでナビゲーション可能です。
            </p>
          </div>)}
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'キーボードナビゲーションが有効な例。フォーカス可能でキーボードイベントを受け取ります。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 65,
    className: 'bg-white shadow-lg rounded-lg',
    children: <div>
        {/* ヘッダー */}
        <div className="rounded-t-lg bg-gray-800 p-4 text-white">
          <h2 className="text-fluid-lg font-bold">データ一覧</h2>
        </div>

        {/* テーブルヘッダー */}
        <div className="border-b bg-gray-100">
          <div className="grid grid-cols-4 gap-4 p-3 font-semibold text-gray-700">
            <div>ID</div>
            <div>名前</div>
            <div>部署</div>
            <div>ステータス</div>
          </div>
        </div>

        {/* テーブルボディ(スクロール対象) */}
        <div className="divide-y divide-gray-200">
          {Array.from({
          length: 25
        }, (_, i) => <div key={i} className="grid grid-cols-4 gap-4 p-3 hover:bg-gray-50">
              <div className="text-gray-600">#{i + 1}</div>
              <div className="font-medium">ユーザー {i + 1}</div>
              <div className="text-gray-600">
                {['開発部', '営業部', '人事部', 'マーケティング部'][i % 4]}
              </div>
              <div>
                <span className={\`rounded-full px-2 py-1 text-fluid-xs font-medium \${i % 3 === 0 ? 'bg-green-100 text-green-800' : i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}\`}>
                  {i % 3 === 0 ? 'アクティブ' : i % 3 === 1 ? '保留中' : '非アクティブ'}
                </span>
              </div>
            </div>)}
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '実際のデータテーブルのような構造でのResponsiveContainer使用例。ヘッダーは固定され、データ部分がスクロールします。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 55,
    className: 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl shadow-lg',
    children: <div className="space-y-4 p-6">
        <h2 className="text-fluid-2xl font-bold text-purple-800">
          カスタムスタイリング
        </h2>
        <p className="text-purple-600">
          ResponsiveContainerにカスタムクラスを適用した例です。
          グラデーション背景、ボーダー、シャドウなどが適用されています。
        </p>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} className="rounded-lg border border-purple-200 bg-white/70 p-4 backdrop-blur">
            <h3 className="font-semibold text-purple-800">
              カスタムスタイル項目 {i + 1}
            </h3>
            <p className="text-purple-600">
              美しいグラデーションとガラス効果が適用されたコンテンツエリアです。
            </p>
          </div>)}
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムCSSクラスを適用したスタイリング例。グラデーション、ボーダー、シャドウなどの装飾が可能です。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 40,
    className: 'bg-gray-50 border rounded-lg',
    children: <div className="p-6 text-center">
        <h2 className="mb-4 text-fluid-lg font-bold text-gray-800">最小コンテンツ</h2>
        <p className="text-gray-600">
          このコンテンツは高さが十分に小さいため、スクロールは表示されません。
        </p>
        <div className="mt-4 rounded bg-blue-100 p-3">
          <p className="text-fluid-sm text-blue-800">
            ResponsiveContainerは必要に応じてスクロールを表示します。
          </p>
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'コンテンツが少ない場合の表示例。スクロールは表示されず、通常のコンテナとして動作します。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    heightPercent: 45,
    disableScroll: true,
    className: 'bg-orange-50 border-2 border-orange-200 rounded-lg',
    children: <div className="flex h-full flex-col">
        <div className="flex-shrink-0 bg-orange-100 p-3">
          <h3 className="font-semibold text-orange-800">ヘッダー(固定)</h3>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <h2 className="mb-4 text-fluid-lg font-bold text-orange-800">
            内部でスクロール管理
          </h2>
          <p className="mb-4 text-orange-600">
            ResponsiveContainerのスクロールを無効化し、内部の要素でスクロールを管理します。
          </p>
          {Array.from({
          length: 15
        }, (_, i) => <div key={i} className="mb-2 rounded bg-orange-100 p-3">
              内部スクロール項目 {i + 1}
            </div>)}
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'disableScroll=trueの例。テーブルなどで内部の特定要素だけスクロールさせたい場合に使用。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const N=["Default","HeightVariations","ResponsiveBehavior","WithKeyboardNavigation","TableLikeContent","WithCustomStyling","MinimalContent","DisabledScroll"];export{l as Default,h as DisabledScroll,d as HeightVariations,m as MinimalContent,i as ResponsiveBehavior,n as TableLikeContent,c as WithCustomStyling,o as WithKeyboardNavigation,N as __namedExportsOrder,v as default};
