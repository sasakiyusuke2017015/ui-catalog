import{j as a}from"./iframe-D9uhVg1b.js";import{T as n}from"./TrendChart-DtedeLN1.js";import"./preload-helper-PPVm8Dsz.js";import"./CategoricalChart-DH88BToa.js";import"./index-BGFZx00W.js";import"./index-CPJPZnbX.js";import"./clsx-B-dksMZM.js";import"./index-SbvNQNDG.js";const u={title:"データ可視化/TrendChart",component:n,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:"#f7fafc"},{name:"white",value:"#ffffff"},{name:"gradient",value:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"},{name:"dark",value:"#1a202c"}]},docs:{description:{component:`
時系列データ視覚化コンポーネント。以下の機能をサポート:

- **複数データセット**: 同一チャート上での複数系列表示
- **カスタムサイズ**: 高さの変更でレイアウトに合わせた表示
- **グラデーションスタイル**: 美しいビジュアルエフェクト
- **レスポンシブ対応**: 画面サイズに応じた自動調整
- **インタラクティブ**: ホバー時の情報表示

ダッシュボードやレポートでのデータ分析に最適です。
        `}}},argTypes:{data:{description:"チャートに表示するデータ(ラベルと複数のデータセット)",control:"object"},height:{control:{type:"number",min:200,max:600,step:50},description:"チャートの高さ(ピクセル)",table:{defaultValue:{summary:300}}}}},d={labels:["10月","11月","12月","1月","2月","3月"],datasets:[{label:"仕事満足度",data:[3.8,3.7,3.8,4,3.8,3.7],color:"#3498db"},{label:"ストレス状況",data:[2.8,3,2.6,2.5,2.55,2.7],color:"#e74c3c"},{label:"業務負荷",data:[3.1,2.9,2.8,2.9,3.2,3],color:"#2ecc71"}]},e={args:{data:d,height:300},parameters:{docs:{description:{story:"3つの指標を同時に表示する基本的なトレンドチャート。時系列データの推移を視覚的に比較"}}}},t={args:{data:{labels:["4月","5月","6月","7月","8月","9月"],datasets:[{label:"総合満足度",data:[3.2,3.5,3.7,3.9,4.1,4.2],color:"#9b59b6"}]},height:250},parameters:{docs:{description:{story:"単一の指標のみを表示するシンプルなチャート。コンパクトな表示で単一指標の推移を強調"}}}},s={args:{data:{labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:"回答率",data:[82,85,83,87,90,88,91,93,92,94,95,96],color:"#3498db"},{label:"目標値",data:[80,80,85,85,85,90,90,90,95,95,95,95],color:"#95a5a6"}]},height:350},parameters:{docs:{description:{story:"12ヶ月分の詳細なデータを表示。年間を通しての推移と目標達成率の比較"}}}},r={args:{data:{labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"営業部",data:[3.5,3.7,3.9,4.1],color:"#e74c3c"},{label:"開発部",data:[3.8,3.9,4,4.2],color:"#3498db"},{label:"人事部",data:[4.1,4,4.2,4.3],color:"#2ecc71"},{label:"総務部",data:[3.9,3.8,3.9,4],color:"#f39c12"}]},height:400},parameters:{docs:{description:{story:"部門別の四半期推移を比較。米長の増減や部門間のパフォーマンス差を可視化"}}}},o={render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"rounded-lg bg-white p-4 shadow",children:[a.jsx("h3",{className:"mb-3 text-fluid-lg font-semibold",children:"コンパクトサイズ (200px)"}),a.jsx(n,{data:d,height:200})]}),a.jsxs("div",{className:"rounded-lg bg-white p-4 shadow",children:[a.jsx("h3",{className:"mb-3 text-fluid-lg font-semibold",children:"標準サイズ (300px)"}),a.jsx(n,{data:d,height:300})]}),a.jsxs("div",{className:"rounded-lg bg-white p-4 shadow",children:[a.jsx("h3",{className:"mb-3 text-fluid-lg font-semibold",children:"大きいサイズ (400px)"}),a.jsx(n,{data:d,height:400})]})]}),parameters:{controls:{hideNoControlsWarning:!0},backgrounds:{default:"light"},docs:{description:{story:"異なる高さ設定での表示比較。レイアウトに合わせた最適なサイズの選択"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: basicData,
    height: 300
  },
  parameters: {
    docs: {
      description: {
        story: '3つの指標を同時に表示する基本的なトレンドチャート。時系列データの推移を視覚的に比較'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      labels: ['4月', '5月', '6月', '7月', '8月', '9月'],
      datasets: [{
        label: '総合満足度',
        data: [3.2, 3.5, 3.7, 3.9, 4.1, 4.2],
        color: '#9b59b6'
      }]
    },
    height: 250
  },
  parameters: {
    docs: {
      description: {
        story: '単一の指標のみを表示するシンプルなチャート。コンパクトな表示で単一指標の推移を強調'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [{
        label: '回答率',
        data: [82, 85, 83, 87, 90, 88, 91, 93, 92, 94, 95, 96],
        color: '#3498db'
      }, {
        label: '目標値',
        data: [80, 80, 85, 85, 85, 90, 90, 90, 95, 95, 95, 95],
        color: '#95a5a6'
      }]
    },
    height: 350
  },
  parameters: {
    docs: {
      description: {
        story: '12ヶ月分の詳細なデータを表示。年間を通しての推移と目標達成率の比較'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: '営業部',
        data: [3.5, 3.7, 3.9, 4.1],
        color: '#e74c3c'
      }, {
        label: '開発部',
        data: [3.8, 3.9, 4.0, 4.2],
        color: '#3498db'
      }, {
        label: '人事部',
        data: [4.1, 4.0, 4.2, 4.3],
        color: '#2ecc71'
      }, {
        label: '総務部',
        data: [3.9, 3.8, 3.9, 4.0],
        color: '#f39c12'
      }]
    },
    height: 400
  },
  parameters: {
    docs: {
      description: {
        story: '部門別の四半期推移を比較。米長の増減や部門間のパフォーマンス差を可視化'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-fluid-lg font-semibold">コンパクトサイズ (200px)</h3>
        <TrendChart data={basicData} height={200} />
      </div>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-fluid-lg font-semibold">標準サイズ (300px)</h3>
        <TrendChart data={basicData} height={300} />
      </div>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 text-fluid-lg font-semibold">大きいサイズ (400px)</h3>
        <TrendChart data={basicData} height={400} />
      </div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: '異なる高さ設定での表示比較。レイアウトに合わせた最適なサイズの選択'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","SingleDataset","ManyDataPoints","ComparisonChart","DifferentHeights"];export{r as ComparisonChart,e as Default,o as DifferentHeights,s as ManyDataPoints,t as SingleDataset,f as __namedExportsOrder,u as default};
