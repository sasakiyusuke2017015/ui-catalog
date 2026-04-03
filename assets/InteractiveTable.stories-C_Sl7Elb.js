import{j as e,r as s}from"./iframe-CEBuvpRZ.js";import{i as g}from"./isNullish-DpHzKFkb.js";import{I as u}from"./InteractiveTable-DMUkLq0N.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-B-sv2F6N.js";import"./useOperationLog-5hpxR7Xt.js";import"./LoadingZone-CV14Ydle.js";import"./Icon-DDCqB1fE.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./animations-BTPozNpH.js";import"./index-BvtWZd3u.js";import"./index-CGjmC7Cz.js";import"./proxy-Cplsz-PG.js";import"./InternalLink-DraAGGt0.js";const L={title:"データ操作/InteractiveTable",component:u,tags:["autodocs"],decorators:[n=>e.jsx("div",{className:"min-h-screen bg-gray-50 p-4",children:e.jsx(n,{})})],argTypes:{columns:{description:"テーブルのカラム定義配列",control:"object"},data:{description:"表示するデータの配列",control:"object"},searchable:{description:"検索機能の有効/無効",control:"boolean"},enableRowHighlight:{description:"行フォーカス時のハイライト表示",control:"boolean"},enableKeyboardNavigation:{description:"キーボードナビゲーション機能",control:"boolean"},onCellClick:{action:"cell clicked"},onRowHover:{action:"row hovered"},onRowFocus:{action:"row focused"}},parameters:{docs:{description:{component:`
InteractiveTableコンポーネント。以下の機能をサポート:

- **rowStyleType**: 'red', 'green', 'yellow'による行の色分け
- **ホバー効果**: hover時の色変化とアニメーション
- **フォーカス管理**: 行クリック時の青い枠線表示
- **キーボードナビゲーション**: 矢印キー、Tab、Enter対応
- **リンクカラム**: 外部・内部リンクの表示
- **検索機能**: 特定列での絞り込み検索

業務システムでのデータ一覧表示に最適です。
        `}}}},h=[{accessor:"id",label:"ID",proportion:"80px"},{accessor:"name",label:"名前",proportion:"150px"},{accessor:"department",label:"部署",proportion:"120px"},{accessor:"status",label:"ステータス",proportion:"100px"}],y=[{id:"001",name:"山田太郎",department:"開発部",status:"アクティブ"},{id:"002",name:"佐藤花子",department:"デザイン部",status:"アクティブ"},{id:"003",name:"鈴木一郎",department:"営業部",status:"休暇中"},{id:"004",name:"田中美咲",department:"開発部",status:"アクティブ"},{id:"005",name:"伊藤健太",department:"企画部",status:"アクティブ"}],x=[{accessor:"month",label:"月",proportion:"15%"},{accessor:"memo",label:"メモ",proportion:"50%"},{accessor:"nextAction",label:"次回アクション",proportion:"35%"}];function b({columns:n,data:r,...o}){const[t,a]=s.useState(null);return e.jsx(u,{columns:n,data:r,focusedRow:t,setFocusedRow:a,...o})}const l={render:n=>e.jsx(b,{...n}),args:{columns:h,data:y,searchable:!0,searchColumn:"name",enableRowHighlight:!0},parameters:{docs:{description:{story:"基本的なInteractiveTable。検索機能、行ハイライト、ホバー効果を含む標準的な使用例"}}}},c={render:n=>e.jsx(b,{...n}),args:{columns:x,data:[{month:"2025/10",memo:"今月のメモです。重要な情報が含まれています。",nextAction:"来月までに対応が必要です。",rowStyleType:"red"},{month:"2025/09",memo:"先月のメモです。完了済みの項目です。",nextAction:"完了しました。",rowStyleType:"green"},{month:"2025/08",memo:"注意が必要な項目があります。",nextAction:"確認中です。",rowStyleType:"yellow"},{month:"2025/07",memo:"通常のメモです。特に問題ありません。",nextAction:"特になし。"}],searchable:!1,enableRowHighlight:!0},parameters:{docs:{description:{story:"rowStyleType機能のデモ。red/green/yellow/defaultの色分けとhover効果を確認できます。"}}}},v=n=>{const[r,o]=s.useState(null),[t,a]=s.useState(null);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 rounded-lg bg-blue-50 p-4",children:[e.jsx("p",{className:"mb-2 text-fluid-sm font-medium text-blue-800",children:"ホバー・フォーカス効果デモ"}),e.jsxs("div",{className:"space-y-1 text-fluid-xs text-blue-600",children:[e.jsxs("p",{children:["フォーカス行:"," ",g(r)?"なし":`${r+1}行目`]}),e.jsxs("p",{children:["ホバー行: ",g(t)?"なし":`${t+1}行目`]})]})]}),e.jsx(u,{...n,focusedRow:r,setFocusedRow:o,onRowHover:a,onRowFocus:o})]})},i={render:n=>e.jsx(v,{...n}),args:{columns:h,data:y,searchable:!1,enableRowHighlight:!0},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ホバー・フォーカス効果の確認。行をクリックすると青い枠線が表示され、ホバー時にアニメーション効果が発生します。"}}}},m={render:n=>e.jsx(b,{...n}),args:{columns:[{label:"ID",accessor:"id",proportion:"80px"},{label:"名前",accessor:"name",cellType:"internal",proportion:"150px"},{label:"ウェブサイト",accessor:"website",cellType:"link",proportion:"200px"},{label:"ステータス",accessor:"status",proportion:"100px"}],data:[{id:"001",name:{text:"山田太郎",to:"/employee/001",variant:"text",color:"primary"},website:{text:"Google",url:"https://www.google.com",target:"_blank"},status:"アクティブ"},{id:"002",name:{text:"佐藤花子",to:"/employee/002",variant:"text",color:"primary"},website:"https://github.com",status:"アクティブ"}],searchable:!1,onLinkClick:(n,r,o)=>{window.alert(`外部リンク: ${n.text||n.url}`)},onInternalLinkClick:(n,r,o)=>{window.alert(`内部リンク: ${n.text} → ${n.to}`)}},parameters:{docs:{description:{story:'リンクカラムの例。type="link"で外部リンク、type="internal"で内部リンクを作成できます。'}}}},T=n=>{const[r,o]=s.useState(0),[t,a]=s.useState({row:0,col:0});return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 rounded-lg bg-green-50 p-4",children:[e.jsx("p",{className:"mb-2 text-fluid-sm font-medium text-green-800",children:"キーボードナビゲーション"}),e.jsx("div",{className:"space-y-1 text-fluid-xs text-green-600",children:e.jsxs("ul",{className:"list-inside list-disc space-y-1",children:[e.jsx("li",{children:"テーブルをクリックしてフォーカス"}),e.jsx("li",{children:"矢印キーでセル移動"}),e.jsx("li",{children:"Tab/Shift+Tabで次/前のセル"}),e.jsx("li",{children:"Home/Endで行の最初/最後"}),e.jsx("li",{children:"Ctrl+Home/Endでテーブルの最初/最後"}),e.jsx("li",{children:"Enterでセルクリック"})]})})]}),e.jsx(u,{...n,focusedRow:r,setFocusedRow:o,focusedCell:t,setFocusedCell:a,enableKeyboardNavigation:!0})]})},d={render:n=>e.jsx(T,{...n}),args:{columns:h,data:y,searchable:!1},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"キーボードナビゲーション機能。矢印キーやTabキーでテーブル内を移動できます。"}}}},p={render:n=>e.jsx(b,{...n}),args:{columns:x,data:Array.from({length:100},(n,r)=>{const o=2024-Math.floor(r/12),t=r%12+1,a=["red","green","yellow",void 0],w=a[Math.floor(Math.random()*a.length)];return{month:`${o}/${String(t).padStart(2,"0")}`,memo:["重要な議題について話し合いました","プロジェクトの進捗が順調です","課題が発生しており対応が必要","チームメンバーとの連携が良好","新しい取り組みを開始しました","目標を達成することができました","改善点を見つけて対応中です","次の段階に進む準備完了"][Math.floor(Math.random()*8)]+` (${r+1}件目)`,nextAction:["レポートを提出する","進捗を報告する","チームと検討する","関係者と調整する","計画を見直す","結果を分析する","新しい目標を設定","フォローアップ継続"][Math.floor(Math.random()*8)],rowStyleType:w}}),searchable:!0,searchColumn:"memo"},parameters:{docs:{description:{story:"100件の大量データでのパフォーマンステスト。rowStyleTypeによる色分けとhover効果を確認できます。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: true,
    searchColumn: 'name',
    enableRowHighlight: true
  },
  parameters: {
    docs: {
      description: {
        story: '基本的なInteractiveTable。検索機能、行ハイライト、ホバー効果を含む標準的な使用例'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: memoColumns,
    data: [{
      month: '2025/10',
      memo: '今月のメモです。重要な情報が含まれています。',
      nextAction: '来月までに対応が必要です。',
      rowStyleType: 'red'
    }, {
      month: '2025/09',
      memo: '先月のメモです。完了済みの項目です。',
      nextAction: '完了しました。',
      rowStyleType: 'green'
    }, {
      month: '2025/08',
      memo: '注意が必要な項目があります。',
      nextAction: '確認中です。',
      rowStyleType: 'yellow'
    }, {
      month: '2025/07',
      memo: '通常のメモです。特に問題ありません。',
      nextAction: '特になし。'
    }],
    searchable: false,
    enableRowHighlight: true
  },
  parameters: {
    docs: {
      description: {
        story: 'rowStyleType機能のデモ。red/green/yellow/defaultの色分けとhover効果を確認できます。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <HoverAndFocusDemo {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: false,
    enableRowHighlight: true
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ホバー・フォーカス効果の確認。行をクリックすると青い枠線が表示され、ホバー時にアニメーション効果が発生します。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: [{
      label: 'ID',
      accessor: 'id',
      proportion: '80px'
    }, {
      label: '名前',
      accessor: 'name',
      cellType: 'internal',
      proportion: '150px'
    }, {
      label: 'ウェブサイト',
      accessor: 'website',
      cellType: 'link',
      proportion: '200px'
    }, {
      label: 'ステータス',
      accessor: 'status',
      proportion: '100px'
    }],
    data: [{
      id: '001',
      name: {
        text: '山田太郎',
        to: '/employee/001',
        variant: 'text',
        color: 'primary'
      },
      website: {
        text: 'Google',
        url: 'https://www.google.com',
        target: '_blank'
      },
      status: 'アクティブ'
    }, {
      id: '002',
      name: {
        text: '佐藤花子',
        to: '/employee/002',
        variant: 'text',
        color: 'primary'
      },
      website: 'https://github.com',
      status: 'アクティブ'
    }],
    searchable: false,
    onLinkClick: (linkData: LinkData, _rowIndex: number, _colIndex: number) => {
      window.alert(\`外部リンク: \${linkData.text || linkData.url}\`);
    },
    onInternalLinkClick: (linkData: InternalLinkData, _rowIndex: number, _colIndex: number) => {
      window.alert(\`内部リンク: \${linkData.text} → \${linkData.to}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'リンクカラムの例。type="link"で外部リンク、type="internal"で内部リンクを作成できます。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <KeyboardNavigationDemo {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: false
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'キーボードナビゲーション機能。矢印キーやTabキーでテーブル内を移動できます。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: memoColumns,
    data: Array.from({
      length: 100
    }, (_, i) => {
      const year = 2024 - Math.floor(i / 12);
      const month = i % 12 + 1;
      const rowStyleTypes = ['red', 'green', 'yellow', undefined];
      const randomStyleType = rowStyleTypes[Math.floor(Math.random() * rowStyleTypes.length)];
      return {
        month: \`\${year}/\${String(month).padStart(2, '0')}\`,
        memo: ['重要な議題について話し合いました', 'プロジェクトの進捗が順調です', '課題が発生しており対応が必要', 'チームメンバーとの連携が良好', '新しい取り組みを開始しました', '目標を達成することができました', '改善点を見つけて対応中です', '次の段階に進む準備完了'][Math.floor(Math.random() * 8)] + \` (\${i + 1}件目)\`,
        nextAction: ['レポートを提出する', '進捗を報告する', 'チームと検討する', '関係者と調整する', '計画を見直す', '結果を分析する', '新しい目標を設定', 'フォローアップ継続'][Math.floor(Math.random() * 8)],
        rowStyleType: randomStyleType
      };
    }),
    searchable: true,
    searchColumn: 'memo'
  },
  parameters: {
    docs: {
      description: {
        story: '100件の大量データでのパフォーマンステスト。rowStyleTypeによる色分けとhover効果を確認できます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const W=["Basic","RowStyleTypes","HoverAndFocus","LinkColumns","KeyboardNavigation","LargeDataset"];export{l as Basic,i as HoverAndFocus,d as KeyboardNavigation,p as LargeDataset,m as LinkColumns,c as RowStyleTypes,W as __namedExportsOrder,L as default};
