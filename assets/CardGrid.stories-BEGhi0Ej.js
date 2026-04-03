import{j as r}from"./iframe-BMSfDgIj.js";import{C as e}from"./CardGrid-CVUJnruS.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-aChiamjf.js";import"./animations-BTPozNpH.js";import"./proxy-C00ARwc7.js";const x={title:"レイアウト/CardGrid",component:e,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{animated:{description:"アニメーションを有効にする",control:"boolean"},cols:{description:"カラム数（レスポンシブ対応）",control:"select",options:[1,2,3,4,5,6]},gap:{description:"カード間のギャップ（Tailwindの数値）",control:"number"},enableAnimation:{description:"アニメーションを許可する",control:"boolean"},animationVariant:{description:"アニメーションのバリアント",control:"select",options:["slideRight","slideLeft","slideUp","slideDown","fadeIn","zoomIn"]}}},t=({title:a,color:s})=>r.jsxs("div",{className:`${s} rounded-lg p-6 shadow-lg`,children:[r.jsx("h3",{className:"text-fluid-xl font-bold text-white mb-2",children:a}),r.jsx("p",{className:"text-white/80",children:"サンプルカードコンテンツ"})]}),d={args:{animated:!0,cols:4,gap:4},render:a=>r.jsxs(e,{...a,children:[r.jsx(e.Item,{children:r.jsx(t,{title:"カード 1",color:"bg-blue-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 2",color:"bg-green-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 3",color:"bg-purple-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 4",color:"bg-red-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 5",color:"bg-yellow-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 6",color:"bg-pink-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 7",color:"bg-indigo-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 8",color:"bg-orange-500"})})]})},n={args:{animated:!1,cols:4,gap:4},render:a=>r.jsxs(e,{...a,children:[r.jsx(e.Item,{children:r.jsx(t,{title:"カード 1",color:"bg-blue-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 2",color:"bg-green-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 3",color:"bg-purple-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 4",color:"bg-red-500"})})]})},l={args:{animated:!0,cols:2,gap:4},render:a=>r.jsxs(e,{...a,children:[r.jsx(e.Item,{children:r.jsx(t,{title:"カード 1",color:"bg-blue-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 2",color:"bg-green-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 3",color:"bg-purple-500"})}),r.jsx(e.Item,{children:r.jsx(t,{title:"カード 4",color:"bg-red-500"})})]})},o={args:{animated:!0,cols:4,gap:4},render:a=>r.jsx(e,{...a,children:Array.from({length:12},(s,i)=>r.jsx(e.Item,{children:r.jsx(t,{title:`カード ${i+1}`,color:`bg-${["blue","green","purple","red","yellow","pink"][i%6]}-500`})},i))})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    animated: true,
    cols: 4,
    gap: 4
  },
  render: args => <CardGrid {...args}>
      <CardGrid.Item>
        <SampleCard title="カード 1" color="bg-blue-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 2" color="bg-green-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 3" color="bg-purple-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 4" color="bg-red-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 5" color="bg-yellow-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 6" color="bg-pink-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 7" color="bg-indigo-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 8" color="bg-orange-500" />
      </CardGrid.Item>
    </CardGrid>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    animated: false,
    cols: 4,
    gap: 4
  },
  render: args => <CardGrid {...args}>
      <CardGrid.Item>
        <SampleCard title="カード 1" color="bg-blue-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 2" color="bg-green-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 3" color="bg-purple-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 4" color="bg-red-500" />
      </CardGrid.Item>
    </CardGrid>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    animated: true,
    cols: 2,
    gap: 4
  },
  render: args => <CardGrid {...args}>
      <CardGrid.Item>
        <SampleCard title="カード 1" color="bg-blue-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 2" color="bg-green-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 3" color="bg-purple-500" />
      </CardGrid.Item>
      <CardGrid.Item>
        <SampleCard title="カード 4" color="bg-red-500" />
      </CardGrid.Item>
    </CardGrid>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    animated: true,
    cols: 4,
    gap: 4
  },
  render: args => <CardGrid {...args}>
      {Array.from({
      length: 12
    }, (_, i) => <CardGrid.Item key={i}>
          <SampleCard title={\`カード \${i + 1}\`} color={\`bg-\${['blue', 'green', 'purple', 'red', 'yellow', 'pink'][i % 6]}-500\`} />
        </CardGrid.Item>)}
    </CardGrid>
}`,...o.parameters?.docs?.source}}};const b=["AnimatedCards","NoAnimation","TwoColumns","ManyCards"];export{d as AnimatedCards,o as ManyCards,n as NoAnimation,l as TwoColumns,b as __namedExportsOrder,x as default};
