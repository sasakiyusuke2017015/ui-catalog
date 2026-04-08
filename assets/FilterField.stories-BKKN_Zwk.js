import{j as e,r as n}from"./iframe-LfAIox-3.js";import{F as s}from"./FilterField-GOqRXP_7.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-7mqDMu_z.js";import"./index-BfxoDBbu.js";import"./index-C1U9pztA.js";import"./useOperationLog-0HvfpEDm.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Checkbox-DojRGbgr.js";import"./Icon-CN73ewXh.js";import"./Input-C0n1hg_V.js";const Y={title:"データ操作/FilterField",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
FilterFieldコンポーネント。以下のタイプをサポート:

- **text**: テキスト検索
- **status**: 複数選択チェックボックス
- **score**: 範囲入力（min/max）
- **date**: 日付入力
- **dateRange**: 日付範囲選択（ドロップダウン）

データのフィルタリングや検索機能で使用します。
        `}}},argTypes:{type:{description:"フィルタのタイプ",control:"select",options:["text","status","score","date","dateRange"]},label:{description:"フィルタのラベル",control:"text"},value:{description:"現在の値（タイプによって型が異なる）",control:"object"},placeholder:{description:"プレースホルダー（text/dateタイプ）",control:"text"},disabled:{description:"無効化",control:"boolean"},className:{description:"カスタムクラス",control:"text"},options:{description:"選択肢（status/dateRangeタイプ）",control:"object"},min:{description:"最小値（scoreタイプ）",control:"number"},max:{description:"最大値（scoreタイプ）",control:"number"},onChange:{action:"changed"}}},h=()=>{const[t,r]=n.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(s,{type:"text",label:"名前で検索",value:t,onChange:r,placeholder:"名前を入力"})})},a={render:()=>e.jsx(h,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"テキスト検索フィルタ。キーワード検索に使用します。"}}}},F=()=>{const[t,r]=n.useState([]),o=[{value:"active",label:"アクティブ"},{value:"inactive",label:"非アクティブ"},{value:"pending",label:"保留中"}];return e.jsxs("div",{className:"w-80",children:[e.jsx(s,{type:"status",label:"ステータス",value:t,onChange:r,options:o}),e.jsxs("div",{className:"mt-2 text-fluid-xs text-gray-600",children:["選択中: ",t.length,"件"]})]})},l={render:()=>e.jsx(F,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"ステータスフィルタ。複数選択可能なチェックボックス形式。"}}}},v=()=>{const[t,r]=n.useState([1,5]);return e.jsxs("div",{className:"w-80",children:[e.jsx(s,{type:"score",label:"評価スコア",value:t,onChange:r,min:1,max:5}),e.jsxs("div",{className:"mt-2 text-fluid-xs text-gray-600",children:["範囲: ",t[0]," 〜 ",t[1]]})]})},i={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"スコア範囲フィルタ。最小値と最大値を指定できます。"}}}},y=()=>{const[t,r]=n.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(s,{type:"date",label:"登録日",value:t,onChange:r,placeholder:"YYYY-MM-DD"})})},c={render:()=>e.jsx(y,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"日付フィルタ。テキスト入力形式。"}}}},j=()=>{const[t,r]=n.useState(""),o=[{value:"today",label:"今日"},{value:"week",label:"今週"},{value:"month",label:"今月"},{value:"year",label:"今年"}];return e.jsxs("div",{className:"w-80",children:[e.jsx(s,{type:"dateRange",label:"期間",value:t,onChange:r,options:o}),e.jsxs("div",{className:"mt-2 text-fluid-xs text-gray-600",children:["選択: ",t||"未選択"]})]})},d={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"日付範囲フィルタ。ドロップダウンから選択します。"}}}},b=()=>{const[t,r]=n.useState(""),[o,m]=n.useState([]),[u,x]=n.useState([1,5]),g=[{value:"active",label:"アクティブ"},{value:"inactive",label:"非アクティブ"}];return e.jsxs("div",{className:"w-96 rounded-lg bg-gray-50 p-6",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"従業員フィルター"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{type:"text",label:"名前",value:t,onChange:r,placeholder:"検索..."}),e.jsx(s,{type:"status",label:"ステータス",value:o,onChange:m,options:g}),e.jsx(s,{type:"score",label:"評価",value:u,onChange:x,min:1,max:5})]})]})},p={render:()=>e.jsx(b,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"複数のフィルタを組み合わせた例。検索パネルとして使用できます。"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <TextFilterExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'テキスト検索フィルタ。キーワード検索に使用します。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <StatusFilterExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'ステータスフィルタ。複数選択可能なチェックボックス形式。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ScoreFilterExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'スコア範囲フィルタ。最小値と最大値を指定できます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DateFilterExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '日付フィルタ。テキスト入力形式。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <DateRangeFilterExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '日付範囲フィルタ。ドロップダウンから選択します。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleFiltersExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '複数のフィルタを組み合わせた例。検索パネルとして使用できます。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const _=["TextFilter","StatusFilter","ScoreFilter","DateFilter","DateRangeFilter","MultipleFilters"];export{c as DateFilter,d as DateRangeFilter,p as MultipleFilters,i as ScoreFilter,l as StatusFilter,a as TextFilter,_ as __namedExportsOrder,Y as default};
