import{j as e,r as a}from"./iframe-TXWPROLT.js";import{S as t}from"./Slider-De3DlAEc.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-5hpxR7Xt.js";const P={title:"基本入力/Slider",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Sliderコンポーネント。以下の機能をサポート:

- **範囲指定**: min, max, stepで値の範囲を制御
- **ラベル表示**: ラベルと現在値を表示
- **カスタムフォーマット**: formatValueで表示形式を変更
- **無効化**: disabled状態をサポート

音量調整、明るさ設定、パラメータ調整などに使用します。
        `}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"現在の値"},onChange:{action:"changed",description:"値変更時のコールバック"},min:{control:"number",description:"最小値",table:{defaultValue:{summary:0}}},max:{control:"number",description:"最大値",table:{defaultValue:{summary:100}}},step:{control:"number",description:"ステップ",table:{defaultValue:{summary:1}}},label:{control:"text",description:"ラベル"},disabled:{control:"boolean",description:"無効化",table:{defaultValue:{summary:!1}}}}},S=()=>{const[r,s]=a.useState(50);return e.jsx("div",{className:"w-80",children:e.jsx(t,{value:r,onChange:s,label:"音量"})})},l={render:()=>e.jsx(S,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"基本的なスライダー。0-100の範囲で値を選択できます。"}}}},C=()=>{const[r,s]=a.useState(75);return e.jsx("div",{className:"w-80",children:e.jsx(t,{value:r,onChange:s,label:"進捗",formatValue:n=>`${n}%`})})},c={render:()=>e.jsx(C,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"formatValueで値を%表示にカスタマイズ。"}}}},j=()=>{const[r,s]=a.useState(3);return e.jsx("div",{className:"w-80",children:e.jsx(t,{value:r,onChange:s,min:1,max:5,step:1,label:"評価",formatValue:n=>`${n} / 5`})})},i={render:()=>e.jsx(j,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"min=1, max=5のカスタム範囲。評価入力などに使用できます。"}}}},y=()=>{const[r,s]=a.useState(50);return e.jsx("div",{className:"w-80",children:e.jsx(t,{value:r,onChange:s,step:10,label:"明るさ",formatValue:n=>`${n}%`})})},d={render:()=>e.jsx(y,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"step=10で10刻みで値を変更できます。"}}}},m={args:{value:60,onChange:()=>{},label:"固定値",disabled:!0},render:r=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...r})}),parameters:{docs:{description:{story:"無効化されたスライダー。値を変更できません。"}}}},N=()=>{const[r,s]=a.useState(70),[n,x]=a.useState(80),[h,b]=a.useState(50);return e.jsxs("div",{className:"w-96 space-y-6 rounded-lg bg-white p-6 shadow",children:[e.jsx("h3",{className:"text-fluid-lg font-semibold text-gray-800",children:"表示設定"}),e.jsx(t,{value:r,onChange:s,label:"音量",formatValue:o=>`${o}%`}),e.jsx(t,{value:n,onChange:x,label:"明るさ",formatValue:o=>`${o}%`}),e.jsx(t,{value:h,onChange:b,label:"コントラスト",formatValue:o=>`${o}%`})]})},p={render:()=>e.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"複数のスライダーを組み合わせた設定画面の例。"}}}},f=()=>{const[r,s]=a.useState(5e3);return e.jsxs("div",{className:"w-96 rounded-lg bg-gray-50 p-6",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-gray-800",children:"価格フィルター"}),e.jsx(t,{value:r,onChange:s,min:0,max:1e4,step:500,label:"最大価格",formatValue:n=>`¥${n.toLocaleString()}`}),e.jsxs("div",{className:"mt-4 text-fluid-sm text-gray-600",children:[r.toLocaleString(),"円以下の商品を表示"]})]})},u={render:()=>e.jsx(f,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"価格範囲フィルターとして使用する例。"}}}},v=()=>{const[r,s]=a.useState(22);return e.jsxs("div",{className:"w-80 rounded-lg bg-blue-50 p-6",children:[e.jsx("h3",{className:"mb-4 text-fluid-lg font-semibold text-blue-800",children:"室温設定"}),e.jsx(t,{value:r,onChange:s,min:16,max:30,step:.5,label:"目標温度",formatValue:n=>`${n}°C`})]})},g={render:()=>e.jsx(v,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"温度設定の例。step=0.5で小数点以下も設定可能。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '基本的なスライダー。0-100の範囲で値を選択できます。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <PercentExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'formatValueで値を%表示にカスタマイズ。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <CustomRangeExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'min=1, max=5のカスタム範囲。評価入力などに使用できます。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <StepExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'step=10で10刻みで値を変更できます。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    onChange: () => {},
    label: '固定値',
    disabled: true
  },
  render: (args: SliderProps) => <div className="w-80">
      <Slider {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: '無効化されたスライダー。値を変更できません。'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleSliders />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '複数のスライダーを組み合わせた設定画面の例。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <PriceRangeExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '価格範囲フィルターとして使用する例。'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <TemperatureExample />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: '温度設定の例。step=0.5で小数点以下も設定可能。'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const R=["Basic","Percent","CustomRange","WithStep","Disabled","MultipleSettings","PriceRange","Temperature"];export{l as Basic,i as CustomRange,m as Disabled,p as MultipleSettings,c as Percent,u as PriceRange,g as Temperature,d as WithStep,R as __namedExportsOrder,P as default};
