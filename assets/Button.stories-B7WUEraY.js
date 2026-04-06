import{j as t,R as S}from"./iframe-D9uhVg1b.js";import{B as n}from"./Button-ErRVKQo0.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-B7_qdoJ6.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const H={title:"基本入力/Button",component:n,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:"#f7fafc"},{name:"dark",value:"#1a202c"},{name:"gradient",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}]},docs:{description:{component:`
多様なスタイルとサイズに対応する Button コンポーネント。
• 6 種類のバリアント(primary, secondary, default, outline, danger, success)
• 3 種類のサイズ(small, medium, large)
• 無効化状態(disabled) もサポート
• アイコン対応(leftIcon, rightIcon)
• ホップエフェクト(enableHopEffect) - ホバー時に上に浮き上がる、元の位置もクリック可能
• シェイクエフェクト(triggerShake) - 成功通知などで左右に振動`}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","default","outline","danger","success"],description:"バリアント(色やスタイル)を指定",table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["small","medium","large"],description:"サイズ(small, medium, large)を指定",table:{defaultValue:{summary:"medium"}}},disabled:{control:{type:"boolean"},description:"無効化状態を設定",table:{defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"クリック時のハンドラ(action が動作します)"},children:{control:{type:"text"},description:"ボタン内のテキストや要素"},enableHopEffect:{control:{type:"boolean"},description:"ホバー時のホップエフェクトを有効化",table:{defaultValue:{summary:!0}}},triggerShake:{control:{type:"boolean"},description:"シェイクアニメーションをトリガー",table:{defaultValue:{summary:!1}}},leftIcon:{control:{type:"text"},description:"左側に表示するアイコン名",table:{defaultValue:{summary:void 0}}},rightIcon:{control:{type:"text"},description:"右側に表示するアイコン名",table:{defaultValue:{summary:void 0}}},iconSize:{control:{type:"number"},description:"アイコンのサイズ(px)",table:{defaultValue:{summary:"auto"}}}}},a={args:{variant:"default",children:"デフォルトボタン"},parameters:{docs:{description:{story:"variant未指定時の標準的なデフォルトボタン(グレー背景・黒文字)"},source:{code:`import { Button } from './Button/Button';

<Button variant="default">デフォルトボタン</Button>`}}}},s={args:{variant:"primary",children:"プライマリボタン"},parameters:{docs:{description:{story:"主要なアクションに使用する標準的なプライマリボタン"},source:{code:`import { Button } from './Button/Button';

<Button variant="primary">プライマリボタン</Button>`}}}},i={args:{variant:"secondary",children:"セカンダリボタン"},parameters:{docs:{description:{story:"強調したい補助的なアクションに使用するセカンダリボタン(黒背景・白文字)"},source:{code:`import { Button } from './Button/Button';

<Button variant="secondary">セカンダリボタン</Button>`}}}},c={args:{variant:"outline",children:"アウトラインボタン"},parameters:{backgrounds:{default:"light"},docs:{description:{story:"枠線のみのミニマルなデザインのボタン"},source:{code:`import { Button } from './Button/Button';

<Button variant="outline">アウトラインボタン</Button>`}}}},d={args:{variant:"danger",children:"削除する"},parameters:{docs:{description:{story:"削除などの危険な操作に使用する警告色ボタン"},source:{code:`import { Button } from './Button/Button';

<Button variant="danger">削除する</Button>`}}}},u={args:{variant:"success",children:"保存完了"},parameters:{docs:{description:{story:"成功状態や完了した操作を示す緑色ボタン"},source:{code:`import { Button } from './Button/Button';

<Button variant="success">保存完了</Button>`}}}},l={args:{},render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[t.jsx(n,{size:"small",children:"小サイズ"}),t.jsx(n,{size:"medium",children:"中サイズ"}),t.jsx(n,{size:"large",children:"大サイズ"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"3つのサイズ(small, medium, large)を並べて表示",source:{code:`
import { Button } from './Button/Button';

<Button size="small">小サイズ</Button>
<Button size="medium">中サイズ</Button>
<Button size="large">大サイズ</Button>
          `.trim()}}}}},m={args:{},render:()=>t.jsxs("div",{style:{display:"space-y-1rem"},children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem"},children:[t.jsx(n,{children:"デフォルト"}),t.jsx(n,{variant:"primary",children:"プライマリ"}),t.jsx(n,{variant:"secondary",children:"セカンダリ"}),t.jsx(n,{variant:"outline",children:"アウトライン"}),t.jsx(n,{variant:"danger",children:"危険"}),t.jsx(n,{variant:"success",children:"成功"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[t.jsx(n,{disabled:!0,children:"デフォルト(無効)"}),t.jsx(n,{variant:"primary",disabled:!0,children:"プライマリ(無効)"}),t.jsx(n,{variant:"secondary",disabled:!0,children:"セカンダリ(無効)"}),t.jsx(n,{variant:"outline",disabled:!0,children:"アウトライン(無効)"}),t.jsx(n,{variant:"danger",disabled:!0,children:"危険(無効)"}),t.jsx(n,{variant:"success",disabled:!0,children:"成功(無効)"})]})]}),parameters:{backgrounds:{default:"light"},controls:{hideNoControlsWarning:!0},docs:{description:{story:"全バリアントとその無効状態をまとめて確認",source:{code:`import { Button } from './Button/Button';

<Button>デフォルト</Button>
<Button variant="primary">プライマリ</Button>
<Button variant="secondary">セカンダリ</Button>
<Button variant="outline">アウトライン</Button>
<Button variant="danger">危険</Button>
<Button variant="success">成功</Button>

<Button disabled>デフォルト(無効)</Button>
<Button variant="primary" disabled>プライマリ(無効)</Button>
<Button variant="secondary" disabled>セカンダリ(無効)</Button>
<Button variant="outline" disabled>アウトライン(無効)</Button>
<Button variant="danger" disabled>危険(無効)</Button>
<Button variant="success" disabled>成功(無効)</Button>
          `.trim()}}}}},p={args:{disabled:!0,children:"無効ボタン"},parameters:{docs:{description:{story:"クリックできない無効化されたボタン"},source:{code:`import { Button } from './Button/Button';

<Button disabled>無効ボタン</Button>`}}}},B={args:{children:"とても長いテキストを持つボタンの例"},parameters:{docs:{description:{story:"長いテキストでも適切に表示されることを確認"},source:{code:`import { Button } from './Button/Button';

<Button>とても長いテキストを持つボタンの例</Button>`}}}},g={args:{},render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[t.jsx(n,{children:t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[t.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"追加"]})}),t.jsx(n,{variant:"danger",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[t.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:`M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
              01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1
              0 00-1 1v3M4 7h16`})}),"削除"]})})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"アイコンを含むカスタムコンテンツの例"}}}},v={args:{},render:()=>t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"rounded bg-gray-50 p-4",children:[t.jsx("h3",{className:"mb-3 text-fluid-sm font-semibold text-gray-700",children:"テスト自動化用のID付きボタン例"}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(n,{id:"save-button",variant:"primary",children:"保存"}),t.jsx(n,{id:"cancel-button",variant:"secondary",children:"キャンセル"}),t.jsx(n,{id:"delete-button",variant:"danger",children:"削除"})]})]}),t.jsxs("div",{className:"rounded bg-blue-50 p-4",children:[t.jsx("h3",{className:"mb-3 text-fluid-sm font-semibold text-blue-700",children:"埋め込み用のID付きボタン例"}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(n,{id:"widget-btn-1",size:"small",children:"Widget Button 1"}),t.jsx(n,{id:"widget-btn-2",size:"small",variant:"outline",children:"Widget Button 2"})]})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"テスト自動化や外部サイト埋め込みで使用するID付きボタンの例。E2Eテストやセレンターゲットとして活用できます。"},source:{code:`import { Button } from './components/atoms/Button';

// テスト自動化用
<Button id="save-button" variant="primary">保存</Button>
<Button id="cancel-button" variant="secondary">キャンセル</Button>
<Button id="delete-button" variant="danger">削除</Button>

// 埋め込み用(複数ウィジェット識別)
<Button id="widget-btn-1" size="small">Widget Button 1</Button>
<Button id="widget-btn-2" size="small" variant="outline">Widget Button 2</Button>

// JavaScript からの操作例：
// document.getElementById('save-button').click();
// document.querySelector('#cancel-button').disabled = true;`}}}},h={args:{},render:()=>t.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(n,{variant:"primary",enableHopEffect:!0,children:"ホップ有効"}),t.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"#666"},children:"ホバーで上に浮く"})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(n,{variant:"primary",enableHopEffect:!1,children:"ホップ無効"}),t.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"#666"},children:"通常のホバー"})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ホバー時にボタンが上に浮き上がるホップエフェクトの有無を比較。元の位置もクリック可能な設計。"}}}},w=()=>{const[e,r]=S.useState(!1),o=()=>{r(!0),setTimeout(()=>r(!1),1200)};return t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(n,{variant:"success",triggerShake:e,onClick:o,leftIcon:"unlock",children:"認証完了"}),t.jsx("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"#666"},children:"クリックするとボタンのアイコンが左右に振動します（Unlockアイコン）"})]})},y={args:{},render:()=>t.jsx(w,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"クリック時にボタンが左右に振動するシェイクエフェクト。成功通知などに使用できます。"}}}},z=()=>{const[e,r]=S.useState(!1),[o,k]=S.useState(!1),W=()=>{k(!0),setTimeout(()=>{k(!1),r(!0),setTimeout(()=>r(!1),500)},1500)};return t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(n,{variant:e?"success":"primary",triggerShake:e,onClick:W,disabled:o,leftIcon:e?"lock":void 0,children:o?"ログイン中...":e?"ログイン成功":"ログイン"}),t.jsx("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"#666"},children:"ログイン成功時にロックアイコンと振動エフェクトを表示"})]})},f={args:{},render:()=>t.jsx(z,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ログイン成功時のUXデモ。ボタンクリック → ローディング → 成功(緑色+ロックアイコン+振動)"}}}},x={args:{variant:"primary",leftIcon:"arrow-in",children:"追加"},parameters:{docs:{description:{story:"左側にアイコンを配置したボタン"},source:{code:`import { Button } from './Button/Button';


<Button variant="primary" leftIcon={'arrow-in'}>追加</Button>`}}}},b={args:{variant:"default",rightIcon:"chevron-right",children:"次へ"},parameters:{docs:{description:{story:"右側にアイコンを配置したボタン"},source:{code:`import { Button } from './Button/Button';


<Button variant="default" rightIcon={'chevron-right'}>次へ</Button>`}}}},j={args:{variant:"secondary",leftIcon:"arrow-in",rightIcon:"chevron-down",children:"ダウンロード"},parameters:{docs:{description:{story:"左右両側にアイコンを配置したボタン"},source:{code:`import { Button } from './Button/Button';


<Button variant="secondary" leftIcon={'arrow-in'} rightIcon={'chevron-down'}>ダウンロード</Button>`}}}},I={args:{},render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(n,{variant:"primary",leftIcon:"arrow-in",children:"追加"}),t.jsx(n,{variant:"danger",leftIcon:"x",children:"削除"}),t.jsx(n,{variant:"success",leftIcon:"info-circle",children:"完了"}),t.jsx(n,{variant:"default",leftIcon:"gear",children:"編集"}),t.jsx(n,{variant:"outline",leftIcon:"magnifying-glass",children:"検索"}),t.jsx(n,{variant:"primary",rightIcon:"chevron-right",children:"次へ"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"様々なアイコンとバリアントの組み合わせ例"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'デフォルトボタン'
  },
  parameters: {
    docs: {
      description: {
        story: 'variant未指定時の標準的なデフォルトボタン(グレー背景・黒文字)'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="default">デフォルトボタン</Button>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'プライマリボタン'
  },
  parameters: {
    docs: {
      description: {
        story: '主要なアクションに使用する標準的なプライマリボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="primary">プライマリボタン</Button>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'セカンダリボタン'
  },
  parameters: {
    docs: {
      description: {
        story: '強調したい補助的なアクションに使用するセカンダリボタン(黒背景・白文字)'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="secondary">セカンダリボタン</Button>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'アウトラインボタン'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '枠線のみのミニマルなデザインのボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="outline">アウトラインボタン</Button>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: '削除する'
  },
  parameters: {
    docs: {
      description: {
        story: '削除などの危険な操作に使用する警告色ボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="danger">削除する</Button>\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: '保存完了'
  },
  parameters: {
    docs: {
      description: {
        story: '成功状態や完了した操作を示す緑色ボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button variant="success">保存完了</Button>\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button size="small">小サイズ</Button>
      <Button size="medium">中サイズ</Button>
      <Button size="large">大サイズ</Button>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '3つのサイズ(small, medium, large)を並べて表示',
        // transform の対象外なので明示的に code を書く場合はここだけ例外
        source: {
          code: \`
import { Button } from './Button/Button';

<Button size="small">小サイズ</Button>
<Button size="medium">中サイズ</Button>
<Button size="large">大サイズ</Button>
          \`.trim()
        }
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'space-y-1rem'
  }}>
      <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem'
    }}>
        <Button>デフォルト</Button>
        <Button variant="primary">プライマリ</Button>
        <Button variant="secondary">セカンダリ</Button>
        <Button variant="outline">アウトライン</Button>
        <Button variant="danger">危険</Button>
        <Button variant="success">成功</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <Button disabled>デフォルト(無効)</Button>
        <Button variant="primary" disabled>
          プライマリ(無効)
        </Button>
        <Button variant="secondary" disabled>
          セカンダリ(無効)
        </Button>
        <Button variant="outline" disabled>
          アウトライン(無効)
        </Button>
        <Button variant="danger" disabled>
          危険(無効)
        </Button>
        <Button variant="success" disabled>
          成功(無効)
        </Button>
      </div>
    </div>,
  parameters: {
    backgrounds: {
      default: 'light'
    },
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '全バリアントとその無効状態をまとめて確認',
        // renderベースなので明示的 code が必要
        source: {
          code: \`import { Button } from './Button/Button';

<Button>デフォルト</Button>
<Button variant="primary">プライマリ</Button>
<Button variant="secondary">セカンダリ</Button>
<Button variant="outline">アウトライン</Button>
<Button variant="danger">危険</Button>
<Button variant="success">成功</Button>

<Button disabled>デフォルト(無効)</Button>
<Button variant="primary" disabled>プライマリ(無効)</Button>
<Button variant="secondary" disabled>セカンダリ(無効)</Button>
<Button variant="outline" disabled>アウトライン(無効)</Button>
<Button variant="danger" disabled>危険(無効)</Button>
<Button variant="success" disabled>成功(無効)</Button>
          \`.trim()
        }
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: '無効ボタン'
  },
  parameters: {
    docs: {
      description: {
        story: 'クリックできない無効化されたボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button disabled>無効ボタン</Button>\`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'とても長いテキストを持つボタンの例'
  },
  parameters: {
    docs: {
      description: {
        story: '長いテキストでも適切に表示されることを確認'
      },
      source: {
        code: \`import { Button } from './Button/Button';

<Button>とても長いテキストを持つボタンの例</Button>\`
      }
    }
  }
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Button>
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          追加
        </span>
      </Button>
      <Button variant="danger">
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
              01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1
              0 00-1 1v3M4 7h16" />
          </svg>
          削除
        </span>
      </Button>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'アイコンを含むカスタムコンテンツの例'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
      <div className="rounded bg-gray-50 p-4">
        <h3 className="mb-3 text-fluid-sm font-semibold text-gray-700">
          テスト自動化用のID付きボタン例
        </h3>
        <div className="flex gap-4">
          <Button id="save-button" variant="primary">
            保存
          </Button>
          <Button id="cancel-button" variant="secondary">
            キャンセル
          </Button>
          <Button id="delete-button" variant="danger">
            削除
          </Button>
        </div>
      </div>
      <div className="rounded bg-blue-50 p-4">
        <h3 className="mb-3 text-fluid-sm font-semibold text-blue-700">
          埋め込み用のID付きボタン例
        </h3>
        <div className="flex gap-4">
          <Button id="widget-btn-1" size="small">
            Widget Button 1
          </Button>
          <Button id="widget-btn-2" size="small" variant="outline">
            Widget Button 2
          </Button>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'テスト自動化や外部サイト埋め込みで使用するID付きボタンの例。E2Eテストやセレンターゲットとして活用できます。'
      },
      source: {
        code: \`import { Button } from './components/atoms/Button';

// テスト自動化用
<Button id="save-button" variant="primary">保存</Button>
<Button id="cancel-button" variant="secondary">キャンセル</Button>
<Button id="delete-button" variant="danger">削除</Button>

// 埋め込み用(複数ウィジェット識別)
<Button id="widget-btn-1" size="small">Widget Button 1</Button>
<Button id="widget-btn-2" size="small" variant="outline">Widget Button 2</Button>

// JavaScript からの操作例：
// document.getElementById('save-button').click();
// document.querySelector('#cancel-button').disabled = true;\`
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Button variant="primary" enableHopEffect={true}>
          ホップ有効
        </Button>
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>
          ホバーで上に浮く
        </p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Button variant="primary" enableHopEffect={false}>
          ホップ無効
        </Button>
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>
          通常のホバー
        </p>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ホバー時にボタンが上に浮き上がるホップエフェクトの有無を比較。元の位置もクリック可能な設計。'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <ShakeEffectComponent />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'クリック時にボタンが左右に振動するシェイクエフェクト。成功通知などに使用できます。'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <LoginSuccessComponent />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ログイン成功時のUXデモ。ボタンクリック → ローディング → 成功(緑色+ロックアイコン+振動)'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    leftIcon: 'arrow-in',
    children: '追加'
  },
  parameters: {
    docs: {
      description: {
        story: '左側にアイコンを配置したボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';


<Button variant="primary" leftIcon={'arrow-in'}>追加</Button>\`
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    rightIcon: 'chevron-right',
    children: '次へ'
  },
  parameters: {
    docs: {
      description: {
        story: '右側にアイコンを配置したボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';


<Button variant="default" rightIcon={'chevron-right'}>次へ</Button>\`
      }
    }
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    leftIcon: 'arrow-in',
    rightIcon: 'chevron-down',
    children: 'ダウンロード'
  },
  parameters: {
    docs: {
      description: {
        story: '左右両側にアイコンを配置したボタン'
      },
      source: {
        code: \`import { Button } from './Button/Button';


<Button variant="secondary" leftIcon={'arrow-in'} rightIcon={'chevron-down'}>ダウンロード</Button>\`
      }
    }
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" leftIcon={'arrow-in'}>
        追加
      </Button>
      <Button variant="danger" leftIcon={'x'}>
        削除
      </Button>
      <Button variant="success" leftIcon={'info-circle'}>
        完了
      </Button>
      <Button variant="default" leftIcon={'gear'}>
        編集
      </Button>
      <Button variant="outline" leftIcon={'magnifying-glass'}>
        検索
      </Button>
      <Button variant="primary" rightIcon={'chevron-right'}>
        次へ
      </Button>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '様々なアイコンとバリアントの組み合わせ例'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};const A=["Default","Primary","Secondary","Outline","Danger","Success","Sizes","AllVariants","Disabled","LongText","WithIcon","WithTestIds","HopEffect","ShakeEffect","LoginSuccess","WithLeftIcon","WithRightIcon","WithBothIcons","IconVariations"];export{m as AllVariants,d as Danger,a as Default,p as Disabled,h as HopEffect,I as IconVariations,f as LoginSuccess,B as LongText,c as Outline,s as Primary,i as Secondary,y as ShakeEffect,l as Sizes,u as Success,j as WithBothIcons,g as WithIcon,x as WithLeftIcon,b as WithRightIcon,v as WithTestIds,A as __namedExportsOrder,H as default};
