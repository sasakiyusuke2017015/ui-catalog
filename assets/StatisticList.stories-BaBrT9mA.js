import{S as n}from"./StatisticList-BTI4wzd5.js";import"./iframe-LfAIox-3.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"データ表示/統計/StatisticList",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
統計情報のリストを表示するコンポーネント。
• StatisticItem を複数並べて表示
• オプションで合計値も表示可能`}}},argTypes:{items:{control:{type:"object"},description:"統計項目のリスト"},totalLabel:{control:{type:"text"},description:"合計のラベル"},totalValue:{control:{type:"number"},description:"合計の値"},totalUnit:{control:{type:"text"},description:"合計の単位"}}},e={args:{items:[{dotColor:"bg-blue-500",label:"男性",labelColor:"text-blue-600",value:120,unit:"名"},{dotColor:"bg-pink-500",label:"女性",labelColor:"text-pink-600",value:95,unit:"名"}],totalLabel:"全",totalValue:215,totalUnit:"名"},parameters:{docs:{description:{story:"基本的な統計リストの表示例"}}}},l={args:{items:[{dotColor:"bg-green-500",label:"完了",labelColor:"text-green-600",value:85,unit:"件"},{dotColor:"bg-yellow-500",label:"処理中",labelColor:"text-yellow-600",value:15,unit:"件"},{dotColor:"bg-red-500",label:"エラー",labelColor:"text-red-600",value:3,unit:"件"}]},parameters:{docs:{description:{story:"合計を表示しない例"}}}},t={args:{items:[{dotColor:"bg-blue-500",label:"新規",labelColor:"text-blue-600",value:45,unit:"件"},{dotColor:"bg-cyan-500",label:"受付済",labelColor:"text-cyan-600",value:30,unit:"件"},{dotColor:"bg-green-500",label:"処理中",labelColor:"text-green-600",value:20,unit:"件"},{dotColor:"bg-yellow-500",label:"保留",labelColor:"text-yellow-600",value:12,unit:"件"},{dotColor:"bg-orange-500",label:"確認待ち",labelColor:"text-orange-600",value:8,unit:"件"},{dotColor:"bg-red-500",label:"キャンセル",labelColor:"text-red-600",value:5,unit:"件"}],totalLabel:"全",totalValue:120,totalUnit:"件"},parameters:{docs:{description:{story:"多数の統計項目を含む例"}}}},o={args:{items:[{dotColor:"bg-purple-500",label:"10代",labelColor:"text-purple-600",value:25,unit:"名"},{dotColor:"bg-blue-500",label:"20代",labelColor:"text-blue-600",value:78,unit:"名"},{dotColor:"bg-green-500",label:"30代",labelColor:"text-green-600",value:92,unit:"名"},{dotColor:"bg-yellow-500",label:"40代",labelColor:"text-yellow-600",value:65,unit:"名"},{dotColor:"bg-orange-500",label:"50代",labelColor:"text-orange-600",value:43,unit:"名"},{dotColor:"bg-red-500",label:"60代以上",labelColor:"text-red-600",value:27,unit:"名"}],totalLabel:"全",totalValue:330,totalUnit:"名"},parameters:{docs:{description:{story:"年代別の統計情報を表示する例"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      dotColor: 'bg-blue-500',
      label: '男性',
      labelColor: 'text-blue-600',
      value: 120,
      unit: '名'
    }, {
      dotColor: 'bg-pink-500',
      label: '女性',
      labelColor: 'text-pink-600',
      value: 95,
      unit: '名'
    }],
    totalLabel: '全',
    totalValue: 215,
    totalUnit: '名'
  },
  parameters: {
    docs: {
      description: {
        story: '基本的な統計リストの表示例'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      dotColor: 'bg-green-500',
      label: '完了',
      labelColor: 'text-green-600',
      value: 85,
      unit: '件'
    }, {
      dotColor: 'bg-yellow-500',
      label: '処理中',
      labelColor: 'text-yellow-600',
      value: 15,
      unit: '件'
    }, {
      dotColor: 'bg-red-500',
      label: 'エラー',
      labelColor: 'text-red-600',
      value: 3,
      unit: '件'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: '合計を表示しない例'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      dotColor: 'bg-blue-500',
      label: '新規',
      labelColor: 'text-blue-600',
      value: 45,
      unit: '件'
    }, {
      dotColor: 'bg-cyan-500',
      label: '受付済',
      labelColor: 'text-cyan-600',
      value: 30,
      unit: '件'
    }, {
      dotColor: 'bg-green-500',
      label: '処理中',
      labelColor: 'text-green-600',
      value: 20,
      unit: '件'
    }, {
      dotColor: 'bg-yellow-500',
      label: '保留',
      labelColor: 'text-yellow-600',
      value: 12,
      unit: '件'
    }, {
      dotColor: 'bg-orange-500',
      label: '確認待ち',
      labelColor: 'text-orange-600',
      value: 8,
      unit: '件'
    }, {
      dotColor: 'bg-red-500',
      label: 'キャンセル',
      labelColor: 'text-red-600',
      value: 5,
      unit: '件'
    }],
    totalLabel: '全',
    totalValue: 120,
    totalUnit: '件'
  },
  parameters: {
    docs: {
      description: {
        story: '多数の統計項目を含む例'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      dotColor: 'bg-purple-500',
      label: '10代',
      labelColor: 'text-purple-600',
      value: 25,
      unit: '名'
    }, {
      dotColor: 'bg-blue-500',
      label: '20代',
      labelColor: 'text-blue-600',
      value: 78,
      unit: '名'
    }, {
      dotColor: 'bg-green-500',
      label: '30代',
      labelColor: 'text-green-600',
      value: 92,
      unit: '名'
    }, {
      dotColor: 'bg-yellow-500',
      label: '40代',
      labelColor: 'text-yellow-600',
      value: 65,
      unit: '名'
    }, {
      dotColor: 'bg-orange-500',
      label: '50代',
      labelColor: 'text-orange-600',
      value: 43,
      unit: '名'
    }, {
      dotColor: 'bg-red-500',
      label: '60代以上',
      labelColor: 'text-red-600',
      value: 27,
      unit: '名'
    }],
    totalLabel: '全',
    totalValue: 330,
    totalUnit: '名'
  },
  parameters: {
    docs: {
      description: {
        story: '年代別の統計情報を表示する例'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","WithoutTotal","ManyItems","AgeStatistics"];export{o as AgeStatistics,e as Default,t as ManyItems,l as WithoutTotal,u as __namedExportsOrder,s as default};
