import{j as e}from"./iframe-BwWmhw3u.js";import{B as s}from"./Badge-xNuXBZwa.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"表示/コンテンツ/Badge",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"},layout:"centered",docs:{description:{component:`
統合型バッジコンポーネント。以下の4つのタイプをサポート:

- **metric**: 指標値表示用(グラデーション効果、ホバーアニメーション付き)
- **score**: スコア表示用(固定幅、中央配置)
- **status**: ステータス表示用(コンパクトなサイズ)
- **default**: 汎用表示用

各タイプは異なるサイズとスタイルオプションを持ちます。
        `.trim()},source:{transform:(a,u)=>{const{args:r}=u,l=[];return r.value&&l.push(`value="${r.value}"`),r.appearance&&r.appearance!=="default"&&l.push(`appearance="${r.appearance}"`),r.variant&&r.variant!=="solid"&&l.push(`variant="${r.variant}"`),r.color&&r.color!=="blue"&&l.push(`color="${r.color}"`),r.size&&r.size!=="medium"&&l.push(`size="${r.size}"`),r.width&&l.push(`width="${r.width}"`),r.className&&l.push(`className="${r.className}"`),`import { Badge } from './components/atoms/Badge/Badge';

<Badge${l.length>0?" "+l.join(" "):""} />`}}}},tags:["autodocs"],argTypes:{value:{description:"表示する値",control:{type:"text"}},appearance:{description:"バッジの外観モード",control:{type:"select"},options:["default","metric","score","status"]},styleVariant:{description:"スタイルバリアント（solid, gradient, compact, outline）",control:{type:"select"},options:["solid","gradient","compact","outline"]},variant:{description:"セマンティックバリアント（色を自動設定）",control:{type:"select"},options:["default","success","warning","error","secondary"]},color:{description:"バッジの色",control:{type:"select"},options:["blue","green","emerald","red","rose","yellow","amber","orange","gray"]},size:{description:"バッジのサイズ",control:{type:"select"},options:["small","medium","large"]},width:{description:"カスタム幅(Tailwindクラス)",control:{type:"text"}},className:{description:"追加のCSSクラス",control:{type:"text"}}}},t={args:{value:"デフォルト",appearance:"default",styleVariant:"solid",color:"blue",size:"medium",className:"sdt-default-badge"}},o={args:{value:"95%",appearance:"metric",styleVariant:"gradient",color:"green",size:"medium",width:"w-20",className:"sdt-metric"}},c={args:{value:"4.5",appearance:"score",styleVariant:"solid",color:"blue",size:"medium",className:"sdt-score"}},n={args:{value:"完了",appearance:"status",styleVariant:"solid",color:"green",size:"medium",className:"sdt-status"}},i={args:{},render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:["small","medium","large"].map(a=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"w-20 text-fluid-sm capitalize",children:[a,":"]}),e.jsx(s,{value:a,size:a,className:`sdt-${a}`}),e.jsx(s,{value:"90%",appearance:"metric",size:a,styleVariant:"gradient"}),e.jsx(s,{value:"4",appearance:"score",size:a}),e.jsx(s,{value:"完了",appearance:"status",size:a})]},a))})},d={args:{},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"Solid Variant"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["blue","green","red","yellow","orange","gray"].map(a=>e.jsx(s,{value:a,color:a,className:`sdt-${a}`},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"Gradient Variant"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["blue","green","red","yellow","orange","gray"].map(a=>e.jsx(s,{value:a,color:a,styleVariant:"gradient",className:`sdt-${a}-gradient`},a))})]})]})},p={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["blue","green","red","yellow","orange","gray"].map(a=>e.jsx(s,{value:a,color:a,styleVariant:"outline"},a))})},m={args:{},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"指標表示(Metric)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{value:"98.5%",appearance:"metric",styleVariant:"gradient",color:"green",width:"w-24"}),e.jsx(s,{value:"2.3秒",appearance:"metric",styleVariant:"gradient",color:"blue",width:"w-20"}),e.jsx(s,{value:"1,234",appearance:"metric",styleVariant:"gradient",color:"yellow",width:"w-20"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"スコア表示(Score)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{value:"5",appearance:"score",color:"green"}),e.jsx(s,{value:"4",appearance:"score",color:"blue"}),e.jsx(s,{value:"3",appearance:"score",color:"yellow"}),e.jsx(s,{value:"2",appearance:"score",color:"orange"}),e.jsx(s,{value:"1",appearance:"score",color:"red"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold",children:"ステータス表示(Status)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{value:"完了",appearance:"status",color:"green"}),e.jsx(s,{value:"進行中",appearance:"status",color:"blue"}),e.jsx(s,{value:"レビュー中",appearance:"status",color:"yellow"}),e.jsx(s,{value:"保留",appearance:"status",color:"gray"}),e.jsx(s,{value:"却下",appearance:"status",color:"red"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'デフォルト',
    appearance: 'default',
    styleVariant: 'solid',
    color: 'blue',
    size: 'medium',
    className: 'sdt-default-badge'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: '95%',
    appearance: 'metric',
    styleVariant: 'gradient',
    color: 'green',
    size: 'medium',
    width: 'w-20',
    className: 'sdt-metric'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: '4.5',
    appearance: 'score',
    styleVariant: 'solid',
    color: 'blue',
    size: 'medium',
    className: 'sdt-score'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: '完了',
    appearance: 'status',
    styleVariant: 'solid',
    color: 'green',
    size: 'medium',
    className: 'sdt-status'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col gap-4">
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} className="flex items-center gap-2">
          <span className="w-20 text-fluid-sm capitalize">{size}:</span>
          <Badge value={size} size={size} className={\`sdt-\${size}\`} />
          <Badge value="90%" appearance="metric" size={size} styleVariant="gradient" />
          <Badge value="4" appearance="score" size={size} />
          <Badge value="完了" appearance="status" size={size} />
        </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">Solid Variant</h3>
        <div className="flex flex-wrap gap-2">
          {(['blue', 'green', 'red', 'yellow', 'orange', 'gray'] as const).map(color => <Badge key={color} value={color} color={color} className={\`sdt-\${color}\`} />)}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">Gradient Variant</h3>
        <div className="flex flex-wrap gap-2">
          {(['blue', 'green', 'red', 'yellow', 'orange', 'gray'] as const).map(color => <Badge key={color} value={color} color={color} styleVariant="gradient" className={\`sdt-\${color}-gradient\`} />)}
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {(['blue', 'green', 'red', 'yellow', 'orange', 'gray'] as const).map(color => <Badge key={color} value={color} color={color} styleVariant="outline" />)}
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">指標表示(Metric)</h3>
        <div className="flex gap-2">
          <Badge value="98.5%" appearance="metric" styleVariant="gradient" color="green" width="w-24" />
          <Badge value="2.3秒" appearance="metric" styleVariant="gradient" color="blue" width="w-20" />
          <Badge value="1,234" appearance="metric" styleVariant="gradient" color="yellow" width="w-20" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">スコア表示(Score)</h3>
        <div className="flex gap-2">
          <Badge value="5" appearance="score" color="green" />
          <Badge value="4" appearance="score" color="blue" />
          <Badge value="3" appearance="score" color="yellow" />
          <Badge value="2" appearance="score" color="orange" />
          <Badge value="1" appearance="score" color="red" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-fluid-sm font-semibold">ステータス表示(Status)</h3>
        <div className="flex gap-2">
          <Badge value="完了" appearance="status" color="green" />
          <Badge value="進行中" appearance="status" color="blue" />
          <Badge value="レビュー中" appearance="status" color="yellow" />
          <Badge value="保留" appearance="status" color="gray" />
          <Badge value="却下" appearance="status" color="red" />
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const h=["Default","MetricType","ScoreType","StatusType","Sizes","Colors","Outline","UseCases"];export{d as Colors,t as Default,o as MetricType,p as Outline,c as ScoreType,i as Sizes,n as StatusType,m as UseCases,h as __namedExportsOrder,y as default};
