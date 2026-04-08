import{j as e}from"./iframe-WnPGq7kF.js";import{M as s}from"./Media-wP_IGF2P.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"表示/コンテンツ/Media",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text",description:"画像のパス(相対パスまたは絶対パス)"},alt:{control:"text",description:"代替テキスト"},size:{control:{type:"range",min:16,max:400,step:8},description:"正方形の場合のサイズ(width/height両方に適用)"},width:{control:{type:"range",min:16,max:400,step:8},description:"幅(sizeより優先)"},height:{control:{type:"range",min:16,max:400,step:8},description:"高さ(sizeより優先)"},objectFit:{control:{type:"select"},options:["contain","cover","fill","none","scale-down"],description:"画像の収まり方"},rounded:{control:"boolean",description:"角丸表示"},circle:{control:"boolean",description:"円形表示"},loading:{control:{type:"select"},options:["lazy","eager"],description:"読み込み方式"}}},t={args:{src:"/images/favicon.svg",alt:"App favicon",size:64}},r={render:()=>{const i=[32,48,64,96,128];return e.jsx("div",{className:"flex items-center space-x-4 p-4",children:i.map(a=>e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/images/favicon.svg",alt:`App favicon ${a}px`,size:a}),e.jsxs("span",{className:"text-fluid-sm text-gray-600",children:[a,"px"]})]},a))})}},n={render:()=>{const i=[{fit:"contain",label:"Contain"},{fit:"cover",label:"Cover"},{fit:"fill",label:"Fill"},{fit:"none",label:"None"},{fit:"scale-down",label:"Scale Down"}];return e.jsx("div",{className:"grid grid-cols-3 gap-4 p-4",children:i.map(({fit:a,label:c})=>e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/images/favicon.svg",alt:`Object fit ${a}`,width:80,height:80,objectFit:a,className:"border border-gray-300"}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:c})]},a))})}},l={render:()=>e.jsxs("div",{className:"flex items-center space-x-6 p-4",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/images/favicon.svg",alt:"Default shape",size:80}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/images/favicon.svg",alt:"Rounded shape",size:80,rounded:!0}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:"Rounded"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/images/favicon.svg",alt:"Circle shape",size:80,circle:!0}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:"Circle"})]})]})},o={render:()=>e.jsxs("div",{className:"flex items-center space-x-6 p-4",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/nonexistent-image.jpg",alt:"Broken image",size:80}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:"Broken Image"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:"/nonexistent-image.jpg",alt:"With fallback",size:80,fallbackSrc:"/images/favicon.svg"}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:"With Fallback"})]})]})},m={render:()=>{const i=[{src:"/images/favicon.svg",type:"PNG"},{src:"/images/favicon.svg",type:"SVG"}];return e.jsx("div",{className:"flex items-center space-x-6 p-4",children:i.map(({src:a,type:c})=>e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{src:a,alt:`${c} format`,size:80,fallbackSrc:"/images/favicon.svg"}),e.jsx("span",{className:"text-fluid-sm text-gray-600",children:c})]},c))})}},d={render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsx("h3",{className:"text-fluid-lg font-medium",children:"レスポンシブ画像"}),e.jsx(s,{src:"/images/favicon.svg",alt:"Responsive image",className:"h-auto w-full max-w-xs",objectFit:"contain"})]})},p={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{src:"/images/favicon.svg",alt:"Favicon",size:32}),e.jsx("span",{children:"アプリケーションのアイコン"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{src:"/images/favicon.svg",alt:"Large favicon",size:64,circle:!0}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"プロフィール画像スタイル"}),e.jsx("p",{className:"text-fluid-sm text-gray-600",children:"円形表示でアバター風に"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: '/images/favicon.svg',
    alt: 'App favicon',
    size: 64
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [32, 48, 64, 96, 128];
    return <div className="flex items-center space-x-4 p-4">
        {sizes.map(size => <div key={size} className="flex flex-col items-center space-y-2">
            <Media src="/images/favicon.svg" alt={\`App favicon \${size}px\`} size={size} />
            <span className="text-fluid-sm text-gray-600">{size}px</span>
          </div>)}
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const fitOptions: Array<{
      fit: MediaProps['objectFit'];
      label: string;
    }> = [{
      fit: 'contain',
      label: 'Contain'
    }, {
      fit: 'cover',
      label: 'Cover'
    }, {
      fit: 'fill',
      label: 'Fill'
    }, {
      fit: 'none',
      label: 'None'
    }, {
      fit: 'scale-down',
      label: 'Scale Down'
    }];
    return <div className="grid grid-cols-3 gap-4 p-4">
        {fitOptions.map(({
        fit,
        label
      }) => <div key={fit} className="flex flex-col items-center space-y-2">
            <Media src="/images/favicon.svg" alt={\`Object fit \${fit}\`} width={80} height={80} objectFit={fit} className="border border-gray-300" />
            <span className="text-fluid-sm text-gray-600">{label}</span>
          </div>)}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-6 p-4">
      <div className="flex flex-col items-center space-y-2">
        <Media src="/images/favicon.svg" alt="Default shape" size={80} />
        <span className="text-fluid-sm text-gray-600">Default</span>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Media src="/images/favicon.svg" alt="Rounded shape" size={80} rounded />
        <span className="text-fluid-sm text-gray-600">Rounded</span>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Media src="/images/favicon.svg" alt="Circle shape" size={80} circle />
        <span className="text-fluid-sm text-gray-600">Circle</span>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-6 p-4">
      <div className="flex flex-col items-center space-y-2">
        <Media src="/nonexistent-image.jpg" alt="Broken image" size={80} />
        <span className="text-fluid-sm text-gray-600">Broken Image</span>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Media src="/nonexistent-image.jpg" alt="With fallback" size={80} fallbackSrc="/images/favicon.svg" />
        <span className="text-fluid-sm text-gray-600">With Fallback</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const formats = [{
      src: '/images/favicon.svg',
      type: 'PNG'
    }, {
      src: '/images/favicon.svg',
      type: 'SVG'
    }
    // 他の形式のサンプルファイルがあれば追加
    ];
    return <div className="flex items-center space-x-6 p-4">
        {formats.map(({
        src,
        type
      }) => <div key={type} className="flex flex-col items-center space-y-2">
            <Media src={src} alt={\`\${type} format\`} size={80} fallbackSrc="/images/favicon.svg" />
            <span className="text-fluid-sm text-gray-600">{type}</span>
          </div>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <h3 className="text-fluid-lg font-medium">レスポンシブ画像</h3>
      <Media src="/images/favicon.svg" alt="Responsive image" className="h-auto w-full max-w-xs" objectFit="contain" />
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="flex items-center space-x-4">
        <Media src="/images/favicon.svg" alt="Favicon" size={32} />
        <span>アプリケーションのアイコン</span>
      </div>

      <div className="flex items-center space-x-4">
        <Media src="/images/favicon.svg" alt="Large favicon" size={64} circle />
        <div>
          <h4 className="font-medium">プロフィール画像スタイル</h4>
          <p className="text-fluid-sm text-gray-600">円形表示でアバター風に</p>
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const u=["Default","DifferentSizes","ObjectFitOptions","ShapeVariations","ErrorHandling","DifferentFormats","ResponsiveExample","Interactive"];export{t as Default,m as DifferentFormats,r as DifferentSizes,o as ErrorHandling,p as Interactive,n as ObjectFitOptions,d as ResponsiveExample,l as ShapeVariations,u as __namedExportsOrder,g as default};
