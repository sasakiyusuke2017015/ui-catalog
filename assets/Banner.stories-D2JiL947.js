import{j as e}from"./iframe-BMSfDgIj.js";import{B as s}from"./Banner-D0sl3IDC.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CBudCql_.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const h={title:"表示/Banner",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Bannerコンポーネント。以下の機能をサポート:

- **4種類のバリアント**: info, warning, success, error
- **タイトル**: オプショナルなタイトル表示
- **メッセージ**: 必須のメッセージテキスト（ReactNode も可）
- **アイコン**: 各バリアントに対応したデフォルトアイコン
- **カスタマイズ可能**: classNameでスタイル拡張、アイコン非表示、カスタムアイコン

ページ上部やセクション内での通知表示に使用します。
        `}}},argTypes:{variant:{control:{type:"select"},options:["info","warning","success","error"],description:"バナーの種類"},title:{control:{type:"text"},description:"タイトル（省略可）"},message:{control:{type:"text"},description:"メッセージ（必須）"},className:{control:{type:"text"},description:"追加のクラス名"},showIcon:{control:{type:"boolean"},description:"アイコンを表示するか"},icon:{control:{type:"text"},description:"カスタムアイコン名"}}},r={args:{variant:"info",title:"お知らせ",message:"システムメンテナンスを実施します。"},parameters:{docs:{description:{story:"一般的な情報を伝える青色のバナー。"}}}},a={args:{variant:"warning",title:"注意",message:"入力内容を確認してください。"},parameters:{docs:{description:{story:"注意喚起のための黄色のバナー。"}}}},n={args:{variant:"success",title:"成功",message:"データの保存が完了しました。"},parameters:{docs:{description:{story:"成功メッセージを表示する緑色のバナー。"}}}},t={args:{variant:"error",title:"エラー",message:"データの読み込みに失敗しました。"},parameters:{docs:{description:{story:"エラーメッセージを表示する赤色のバナー。"}}}},o={args:{variant:"info",message:"タイトルなしのシンプルなメッセージです。"},parameters:{docs:{description:{story:"タイトルを省略したシンプルな表示。"}}}},i={args:{variant:"info",message:"アイコンなしのシンプルなバナーです。",showIcon:!1},parameters:{docs:{description:{story:"showIcon={false} でアイコンを非表示にできます。"}}}},c={args:{variant:"info",title:"カスタムアイコン",message:"デフォルト以外のアイコンを指定できます。",icon:"bell"},parameters:{docs:{description:{story:"icon プロパティでカスタムアイコンを指定できます。"}}}},m={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"info",title:"情報",message:"これは情報バナーです。一般的なお知らせに使用します。"}),e.jsx(s,{variant:"warning",title:"警告",message:"これは警告バナーです。注意が必要な情報を表示します。"}),e.jsx(s,{variant:"success",title:"成功",message:"これは成功バナーです。操作の完了を知らせます。"}),e.jsx(s,{variant:"error",title:"エラー",message:"これはエラーバナーです。問題が発生したことを通知します。"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"4種類のバリアントを並べて比較できます。"}}}},d={args:{variant:"warning",title:"重要なお知らせ",message:"このメッセージは非常に長いテキストを含んでいます。システムの変更により、一部の機能が影響を受ける可能性があります。詳細については管理者にお問い合わせください。"},parameters:{docs:{description:{story:"長いメッセージでも適切に表示されます。"}}}},l={args:{variant:"info",title:"カスタムスタイル",message:"カスタムクラスを適用した例です。",className:"shadow-lg border-2"},parameters:{docs:{description:{story:"classNameプロパティで追加のスタイルを適用できます。"}}}},p={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx(s,{variant:"warning",title:"メンテナンス予定",message:"2025年1月15日 22:00-24:00にシステムメンテナンスを実施します。",className:"mb-6"}),e.jsxs("div",{className:"rounded-lg bg-white p-6 shadow",children:[e.jsx("h2",{className:"mb-4 text-fluid-xl font-bold text-gray-800",children:"ページコンテンツ"}),e.jsx("p",{className:"text-gray-600",children:"バナーはページ上部に配置して重要な情報を目立たせることができます。"})]})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ページレイアウトでの使用例。上部に配置して目立たせます。"}}}},g={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-3",children:[e.jsx(s,{variant:"error",message:"エラー: ネットワーク接続に失敗しました。"}),e.jsx(s,{variant:"warning",message:"警告: 未保存の変更があります。"}),e.jsx(s,{variant:"info",message:"情報: 新しいバージョンが利用可能です。"})]}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"複数のバナーを同時に表示する例。優先度順に並べます。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'お知らせ',
    message: 'システムメンテナンスを実施します。'
  },
  parameters: {
    docs: {
      description: {
        story: '一般的な情報を伝える青色のバナー。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: '注意',
    message: '入力内容を確認してください。'
  },
  parameters: {
    docs: {
      description: {
        story: '注意喚起のための黄色のバナー。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: '成功',
    message: 'データの保存が完了しました。'
  },
  parameters: {
    docs: {
      description: {
        story: '成功メッセージを表示する緑色のバナー。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'エラー',
    message: 'データの読み込みに失敗しました。'
  },
  parameters: {
    docs: {
      description: {
        story: 'エラーメッセージを表示する赤色のバナー。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'タイトルなしのシンプルなメッセージです。'
  },
  parameters: {
    docs: {
      description: {
        story: 'タイトルを省略したシンプルな表示。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'アイコンなしのシンプルなバナーです。',
    showIcon: false
  },
  parameters: {
    docs: {
      description: {
        story: 'showIcon={false} でアイコンを非表示にできます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'カスタムアイコン',
    message: 'デフォルト以外のアイコンを指定できます。',
    icon: 'bell'
  },
  parameters: {
    docs: {
      description: {
        story: 'icon プロパティでカスタムアイコンを指定できます。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Banner variant="info" title="情報" message="これは情報バナーです。一般的なお知らせに使用します。" />
      <Banner variant="warning" title="警告" message="これは警告バナーです。注意が必要な情報を表示します。" />
      <Banner variant="success" title="成功" message="これは成功バナーです。操作の完了を知らせます。" />
      <Banner variant="error" title="エラー" message="これはエラーバナーです。問題が発生したことを通知します。" />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '4種類のバリアントを並べて比較できます。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: '重要なお知らせ',
    message: 'このメッセージは非常に長いテキストを含んでいます。システムの変更により、一部の機能が影響を受ける可能性があります。詳細については管理者にお問い合わせください。'
  },
  parameters: {
    docs: {
      description: {
        story: '長いメッセージでも適切に表示されます。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'カスタムスタイル',
    message: 'カスタムクラスを適用した例です。',
    className: 'shadow-lg border-2'
  },
  parameters: {
    docs: {
      description: {
        story: 'classNameプロパティで追加のスタイルを適用できます。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <Banner variant="warning" title="メンテナンス予定" message="2025年1月15日 22:00-24:00にシステムメンテナンスを実施します。" className="mb-6" />
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-fluid-xl font-bold text-gray-800">
          ページコンテンツ
        </h2>
        <p className="text-gray-600">
          バナーはページ上部に配置して重要な情報を目立たせることができます。
        </p>
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ページレイアウトでの使用例。上部に配置して目立たせます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-3">
      <Banner variant="error" message="エラー: ネットワーク接続に失敗しました。" />
      <Banner variant="warning" message="警告: 未保存の変更があります。" />
      <Banner variant="info" message="情報: 新しいバージョンが利用可能です。" />
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '複数のバナーを同時に表示する例。優先度順に並べます。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const N=["Info","Warning","Success","Error","WithoutTitle","WithoutIcon","CustomIcon","AllVariants","LongMessage","CustomStyle","PageLayoutExample","MultipleBanners"];export{m as AllVariants,c as CustomIcon,l as CustomStyle,t as Error,r as Info,d as LongMessage,g as MultipleBanners,p as PageLayoutExample,n as Success,a as Warning,i as WithoutIcon,o as WithoutTitle,N as __namedExportsOrder,h as default};
