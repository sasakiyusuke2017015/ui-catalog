import{j as e}from"./iframe-2z8Hl2jC.js";import{P as c}from"./PieChart-BX_oFXwD.js";import"./preload-helper-PPVm8Dsz.js";import"./isNullish-DpHzKFkb.js";import"./CategoricalChart-CHY6ucMf.js";import"./index-ceUOm_iH.js";import"./index-DpVMA5hu.js";import"./clsx-B-dksMZM.js";import"./index-CqDK01U0.js";const g={title:"データ可視化/チャート/PieChart",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{data:{control:"object",description:"チャートに表示するデータ配列"},size:{control:"number",description:"チャートのサイズ (幅・高さ)"},innerRadius:{control:"number",description:"内側の半径 (ドーナツ型にする場合)"},outerRadius:{control:"number",description:"外側の半径"}}},a={args:{data:[{name:"承認済み",value:45,color:"#10b981"},{name:"保留中",value:30,color:"#f59e0b"},{name:"却下",value:25,color:"#ef4444"}],size:200,innerRadius:0,outerRadius:.4}},n={args:{data:[{name:"営業部",value:120,color:"#3b82f6"},{name:"開発部",value:80,color:"#8b5cf6"},{name:"管理部",value:50,color:"#ec4899"}],size:250,innerRadius:.3,outerRadius:.5}},s={args:{data:[{name:"A",value:40,color:"#3b82f6"},{name:"B",value:30,color:"#10b981"},{name:"C",value:20,color:"#f59e0b"},{name:"D",value:10,color:"#ef4444"}],size:120,innerRadius:0,outerRadius:.4}},r={args:{data:[{name:"完了",value:65,color:"#10b981"},{name:"進行中",value:25,color:"#3b82f6"},{name:"未着手",value:10,color:"#6b7280"}],size:350,innerRadius:.2,outerRadius:.45}},o={args:{data:[{name:"Q1",value:120,color:"#3b82f6"},{name:"Q2",value:150,color:"#10b981"},{name:"Q3",value:90,color:"#f59e0b"},{name:"Q4",value:110,color:"#ef4444"},{name:"Q5",value:80,color:"#8b5cf6"},{name:"Q6",value:70,color:"#ec4899"}],size:280,innerRadius:.25,outerRadius:.45}},l={args:{data:[{name:"男性",value:52,color:"#3b82f6"},{name:"女性",value:48,color:"#ec4899"}],size:200,innerRadius:0,outerRadius:.4}},t={render:()=>e.jsxs("div",{className:"space-y-4 rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("h3",{className:"text-fluid-lg font-bold text-gray-800",children:"プロジェクト進捗状況"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(c,{data:[{name:"完了",value:45,color:"#10b981"},{name:"進行中",value:35,color:"#3b82f6"},{name:"未着手",value:20,color:"#6b7280"}],size:220,innerRadius:.25,outerRadius:.45})}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-3 w-3 rounded-full bg-[#10b981]"}),e.jsx("span",{className:"text-fluid-sm text-gray-700",children:"完了"})]}),e.jsx("span",{className:"text-fluid-sm font-semibold text-gray-800",children:"45%"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-3 w-3 rounded-full bg-[#3b82f6]"}),e.jsx("span",{className:"text-fluid-sm text-gray-700",children:"進行中"})]}),e.jsx("span",{className:"text-fluid-sm font-semibold text-gray-800",children:"35%"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-3 w-3 rounded-full bg-[#6b7280]"}),e.jsx("span",{className:"text-fluid-sm text-gray-700",children:"未着手"})]}),e.jsx("span",{className:"text-fluid-sm font-semibold text-gray-800",children:"20%"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: '承認済み',
      value: 45,
      color: '#10b981'
    }, {
      name: '保留中',
      value: 30,
      color: '#f59e0b'
    }, {
      name: '却下',
      value: 25,
      color: '#ef4444'
    }],
    size: 200,
    innerRadius: 0,
    outerRadius: 0.4
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: '営業部',
      value: 120,
      color: '#3b82f6'
    }, {
      name: '開発部',
      value: 80,
      color: '#8b5cf6'
    }, {
      name: '管理部',
      value: 50,
      color: '#ec4899'
    }],
    size: 250,
    innerRadius: 0.3,
    outerRadius: 0.5
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'A',
      value: 40,
      color: '#3b82f6'
    }, {
      name: 'B',
      value: 30,
      color: '#10b981'
    }, {
      name: 'C',
      value: 20,
      color: '#f59e0b'
    }, {
      name: 'D',
      value: 10,
      color: '#ef4444'
    }],
    size: 120,
    innerRadius: 0,
    outerRadius: 0.4
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: '完了',
      value: 65,
      color: '#10b981'
    }, {
      name: '進行中',
      value: 25,
      color: '#3b82f6'
    }, {
      name: '未着手',
      value: 10,
      color: '#6b7280'
    }],
    size: 350,
    innerRadius: 0.2,
    outerRadius: 0.45
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Q1',
      value: 120,
      color: '#3b82f6'
    }, {
      name: 'Q2',
      value: 150,
      color: '#10b981'
    }, {
      name: 'Q3',
      value: 90,
      color: '#f59e0b'
    }, {
      name: 'Q4',
      value: 110,
      color: '#ef4444'
    }, {
      name: 'Q5',
      value: 80,
      color: '#8b5cf6'
    }, {
      name: 'Q6',
      value: 70,
      color: '#ec4899'
    }],
    size: 280,
    innerRadius: 0.25,
    outerRadius: 0.45
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      name: '男性',
      value: 52,
      color: '#3b82f6'
    }, {
      name: '女性',
      value: 48,
      color: '#ec4899'
    }],
    size: 200,
    innerRadius: 0,
    outerRadius: 0.4
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="text-fluid-lg font-bold text-gray-800">プロジェクト進捗状況</h3>
      <div className="flex items-center justify-center">
        <PieChart data={[{
        name: '完了',
        value: 45,
        color: '#10b981'
      }, {
        name: '進行中',
        value: 35,
        color: '#3b82f6'
      }, {
        name: '未着手',
        value: 20,
        color: '#6b7280'
      }]} size={220} innerRadius={0.25} outerRadius={0.45} />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
            <span className="text-fluid-sm text-gray-700">完了</span>
          </div>
          <span className="text-fluid-sm font-semibold text-gray-800">45%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#3b82f6]"></div>
            <span className="text-fluid-sm text-gray-700">進行中</span>
          </div>
          <span className="text-fluid-sm font-semibold text-gray-800">35%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#6b7280]"></div>
            <span className="text-fluid-sm text-gray-700">未着手</span>
          </div>
          <span className="text-fluid-sm font-semibold text-gray-800">20%</span>
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const N=["Default","DonutChart","Small","Large","ManySegments","TwoSegments","InDashboard"];export{a as Default,n as DonutChart,t as InDashboard,r as Large,o as ManySegments,s as Small,l as TwoSegments,N as __namedExportsOrder,g as default};
