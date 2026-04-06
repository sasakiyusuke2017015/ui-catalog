import{j as e}from"./iframe-D9uhVg1b.js";import{B as r}from"./Box-CYknVlkE.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const y={title:"レイアウト/Box",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{p:{control:"text",description:"padding（数値はpx、文字列はそのまま）"},px:{control:"text",description:"padding-x (horizontal)"},py:{control:"text",description:"padding-y (vertical)"},m:{control:"text",description:"margin（数値はpx、文字列はそのまま）"},mx:{control:"text",description:"margin-x (horizontal)"},my:{control:"text",description:"margin-y (vertical)"},display:{control:"select",options:["block","inline-block","flex","inline-flex","grid","none"],description:"display プロパティ"},as:{control:"select",options:["div","section","article","aside","main","nav","header","footer"],description:"レンダリングする要素"}}},s={args:{p:16,className:"bg-blue-100 border border-blue-300",children:"Box コンテンツ"}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{p:8,className:"bg-gray-100 border border-gray-300",children:["p=",8," (8px)"]}),e.jsxs(r,{p:16,className:"bg-gray-100 border border-gray-300",children:["p=",16," (16px)"]}),e.jsxs(r,{p:24,className:"bg-gray-100 border border-gray-300",children:["p=",24," (24px)"]}),e.jsx(r,{p:"1rem",className:"bg-gray-100 border border-gray-300",children:'p="1rem"'})]})},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{px:32,py:8,className:"bg-green-100 border border-green-300",children:["px=",32," py=",8]}),e.jsxs(r,{px:8,py:32,className:"bg-blue-100 border border-blue-300",children:["px=",8," py=",32]})]})},d={render:()=>e.jsxs("div",{className:"bg-gray-50 p-4 border",children:[e.jsxs(r,{m:0,p:8,className:"bg-red-100 border border-red-300",children:["m=",0]}),e.jsxs(r,{m:16,p:8,className:"bg-red-100 border border-red-300",children:["m=",16]}),e.jsx(r,{mx:"auto",p:8,className:"bg-red-100 border border-red-300 w-48",children:'mx="auto"'})]})},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{display:"block",p:8,className:"bg-purple-100 border border-purple-300",children:'display="block"'}),e.jsx(r,{display:"inline-block",p:8,className:"bg-purple-100 border border-purple-300",children:'display="inline-block"'}),e.jsxs(r,{display:"flex",p:8,className:"bg-purple-100 border border-purple-300 gap-2",children:[e.jsx("span",{className:"bg-purple-200 px-2",children:"Flex"}),e.jsx("span",{className:"bg-purple-200 px-2",children:"Child"}),e.jsx("span",{className:"bg-purple-200 px-2",children:"Items"})]})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{as:"section",p:16,className:"bg-yellow-100 border border-yellow-300",children:"<section> として表示"}),e.jsx(r,{as:"article",p:16,className:"bg-orange-100 border border-orange-300",children:"<article> として表示"}),e.jsx(r,{as:"aside",p:16,className:"bg-pink-100 border border-pink-300",children:"<aside> として表示"})]})},p={render:()=>e.jsxs(r,{p:24,className:"bg-gray-100 border border-gray-300",children:["外側のBox (p=24)",e.jsxs(r,{p:16,m:8,className:"bg-white border border-gray-400",children:["内側のBox (p=16, m=8)",e.jsx(r,{p:8,m:4,className:"bg-blue-50 border border-blue-300",children:"さらに内側のBox (p=8, m=4)"})]})]})},i={render:()=>e.jsxs(r,{p:24,className:"bg-white rounded-lg shadow-lg max-w-sm",children:[e.jsx(r,{py:8,className:"border-b border-gray-200",children:e.jsx("h3",{className:"text-lg font-semibold",children:"カードタイトル"})}),e.jsx(r,{py:16,children:e.jsx("p",{className:"text-gray-600",children:"Box コンポーネントを使用してカード風のレイアウトを構築できます。 padding と margin を組み合わせて使用します。"})}),e.jsx(r,{py:8,className:"border-t border-gray-200",children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800",children:"詳細を見る →"})})]})},t={render:()=>e.jsxs(r,{display:"grid",p:16,className:"gap-4 bg-gray-50",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 1"}),e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 2"}),e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 3"}),e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 4"}),e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 5"}),e.jsx(r,{p:16,className:"bg-indigo-100 border border-indigo-300 text-center",children:"Item 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    p: 16,
    className: 'bg-blue-100 border border-blue-300',
    children: 'Box コンテンツ'
  }
}`,...s.parameters?.docs?.source},description:{story:"デフォルトのBox",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Box p={8} className="bg-gray-100 border border-gray-300">
        p={8} (8px)
      </Box>
      <Box p={16} className="bg-gray-100 border border-gray-300">
        p={16} (16px)
      </Box>
      <Box p={24} className="bg-gray-100 border border-gray-300">
        p={24} (24px)
      </Box>
      <Box p="1rem" className="bg-gray-100 border border-gray-300">
        p="1rem"
      </Box>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"パディング指定",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Box px={32} py={8} className="bg-green-100 border border-green-300">
        px={32} py={8}
      </Box>
      <Box px={8} py={32} className="bg-blue-100 border border-blue-300">
        px={8} py={32}
      </Box>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"方向別パディング",...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-gray-50 p-4 border">
      <Box m={0} p={8} className="bg-red-100 border border-red-300">
        m={0}
      </Box>
      <Box m={16} p={8} className="bg-red-100 border border-red-300">
        m={16}
      </Box>
      <Box mx="auto" p={8} className="bg-red-100 border border-red-300 w-48">
        mx="auto"
      </Box>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"マージン指定",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Box display="block" p={8} className="bg-purple-100 border border-purple-300">
        display="block"
      </Box>
      <Box display="inline-block" p={8} className="bg-purple-100 border border-purple-300">
        display="inline-block"
      </Box>
      <Box display="flex" p={8} className="bg-purple-100 border border-purple-300 gap-2">
        <span className="bg-purple-200 px-2">Flex</span>
        <span className="bg-purple-200 px-2">Child</span>
        <span className="bg-purple-200 px-2">Items</span>
      </Box>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"display プロパティ",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Box as="section" p={16} className="bg-yellow-100 border border-yellow-300">
        &lt;section&gt; として表示
      </Box>
      <Box as="article" p={16} className="bg-orange-100 border border-orange-300">
        &lt;article&gt; として表示
      </Box>
      <Box as="aside" p={16} className="bg-pink-100 border border-pink-300">
        &lt;aside&gt; として表示
      </Box>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"異なる要素としてレンダリング",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box p={24} className="bg-gray-100 border border-gray-300">
      外側のBox (p=24)
      <Box p={16} m={8} className="bg-white border border-gray-400">
        内側のBox (p=16, m=8)
        <Box p={8} m={4} className="bg-blue-50 border border-blue-300">
          さらに内側のBox (p=8, m=4)
        </Box>
      </Box>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"ネスト使用例",...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box p={24} className="bg-white rounded-lg shadow-lg max-w-sm">
      <Box py={8} className="border-b border-gray-200">
        <h3 className="text-lg font-semibold">カードタイトル</h3>
      </Box>
      <Box py={16}>
        <p className="text-gray-600">
          Box コンポーネントを使用してカード風のレイアウトを構築できます。
          padding と margin を組み合わせて使用します。
        </p>
      </Box>
      <Box py={8} className="border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800">詳細を見る →</button>
      </Box>
    </Box>
}`,...i.parameters?.docs?.source},description:{story:"カード風レイアウト",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Box display="grid" p={16} className="gap-4 bg-gray-50" style={{
    gridTemplateColumns: 'repeat(3, 1fr)'
  }}>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 1
      </Box>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 2
      </Box>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 3
      </Box>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 4
      </Box>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 5
      </Box>
      <Box p={16} className="bg-indigo-100 border border-indigo-300 text-center">
        Item 6
      </Box>
    </Box>
}`,...t.parameters?.docs?.source},description:{story:"グリッドレイアウト",...t.parameters?.docs?.description}}};const u=["Default","WithPadding","DirectionalPadding","WithMargin","DisplayModes","AsElement","Nested","CardLayout","GridLayout"];export{c as AsElement,i as CardLayout,s as Default,a as DirectionalPadding,n as DisplayModes,t as GridLayout,p as Nested,d as WithMargin,o as WithPadding,u as __namedExportsOrder,y as default};
