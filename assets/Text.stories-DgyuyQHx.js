import{j as e}from"./iframe-WcLOoCbh.js";import{T as s}from"./Text-BRQ01g5x.js";import"./preload-helper-PPVm8Dsz.js";import"./colors-BiHXYRGc.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const b={title:"タイポグラフィ/Text",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","base","lg","xl","2xl","3xl","4xl"],description:"テキストサイズ"},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"フォントウェイト"},align:{control:"radio",options:["left","center","right"],description:"テキスト配置"},color:{control:"text",description:"色（Tailwind色名 or カラーコード）"},truncate:{control:"boolean",description:"切り詰め有効"},as:{control:"select",options:["span","p","h1","h2","h3","h4","h5","h6","label","div"],description:"レンダリングする要素"}}},r={args:{children:"これはテキストコンポーネントです",size:"base",weight:"normal"}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(s,{size:"xs",children:'size="xs" - 極小テキスト'})}),e.jsx("div",{children:e.jsx(s,{size:"sm",children:'size="sm" - 小さいテキスト'})}),e.jsx("div",{children:e.jsx(s,{size:"base",children:'size="base" - 基本テキスト'})}),e.jsx("div",{children:e.jsx(s,{size:"lg",children:'size="lg" - 大きいテキスト'})}),e.jsx("div",{children:e.jsx(s,{size:"xl",children:'size="xl" - 特大テキスト'})}),e.jsx("div",{children:e.jsx(s,{size:"2xl",children:'size="2xl" - 見出しレベル'})}),e.jsx("div",{children:e.jsx(s,{size:"3xl",children:'size="3xl" - 大見出し'})}),e.jsx("div",{children:e.jsx(s,{size:"4xl",children:'size="4xl" - 最大見出し'})})]})},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(s,{weight:"normal",children:'weight="normal" - 通常のテキスト'})}),e.jsx("div",{children:e.jsx(s,{weight:"medium",children:'weight="medium" - ミディアム'})}),e.jsx("div",{children:e.jsx(s,{weight:"semibold",children:'weight="semibold" - セミボールド'})}),e.jsx("div",{children:e.jsx(s,{weight:"bold",children:'weight="bold" - ボールド'})})]})},o={render:()=>e.jsxs("div",{className:"w-80 space-y-4 border p-4",children:[e.jsx(s,{as:"p",align:"left",children:'align="left" - 左寄せテキスト'}),e.jsx(s,{as:"p",align:"center",children:'align="center" - 中央寄せテキスト'}),e.jsx(s,{as:"p",align:"right",children:'align="right" - 右寄せテキスト'})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(s,{color:"gray-800",children:'color="gray-800" - グレー'})}),e.jsx("div",{children:e.jsx(s,{color:"blue-600",children:'color="blue-600" - ブルー'})}),e.jsx("div",{children:e.jsx(s,{color:"green-600",children:'color="green-600" - グリーン'})}),e.jsx("div",{children:e.jsx(s,{color:"red-600",children:'color="red-600" - レッド'})}),e.jsx("div",{children:e.jsx(s,{color:"#ff6600",children:'color="#ff6600" - カスタムHEX'})}),e.jsx("div",{children:e.jsx(s,{color:"rgb(138, 43, 226)",children:'color="rgb(138, 43, 226)" - RGB'})})]})},a={render:()=>e.jsxs("div",{className:"w-60 space-y-4",children:[e.jsx("div",{className:"border p-2",children:e.jsx(s,{truncate:!0,className:"block",children:"これは非常に長いテキストで、コンテナの幅を超えると切り詰められます"})}),e.jsx("div",{className:"border p-2",children:e.jsx(s,{className:"block",children:"これは通常のテキストで、折り返されます。これは非常に長いテキストです。"})})]})},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{as:"h1",size:"4xl",weight:"bold",children:"h1見出し"}),e.jsx(s,{as:"h2",size:"3xl",weight:"semibold",children:"h2見出し"}),e.jsx(s,{as:"h3",size:"2xl",weight:"semibold",children:"h3見出し"}),e.jsx(s,{as:"p",size:"base",children:"段落テキスト（p要素）"}),e.jsx(s,{as:"label",size:"sm",weight:"medium",children:"ラベルテキスト"})]})},l={render:()=>e.jsxs("div",{className:"max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg",children:[e.jsx(s,{as:"h2",size:"2xl",weight:"bold",color:"gray-800",children:"記事タイトル"}),e.jsx(s,{as:"p",size:"sm",color:"gray-500",children:"2024年1月15日 · 5分で読めます"}),e.jsx(s,{as:"p",size:"base",color:"gray-700",children:"これは記事の本文です。Textコンポーネントを使用することで、 一貫したタイポグラフィを実現できます。サイズ、ウェイト、 色を簡潔に指定できます。"}),e.jsx(s,{as:"p",size:"sm",color:"blue-600",weight:"medium",children:"続きを読む →"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4",children:[e.jsx("div",{className:"h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"}),e.jsxs("div",{children:[e.jsx(s,{as:"h3",size:"lg",weight:"semibold",color:"gray-800",children:"田中 太郎"}),e.jsx(s,{as:"p",size:"sm",color:"gray-500",children:"ソフトウェアエンジニア"}),e.jsx(s,{as:"p",size:"xs",color:"blue-600",children:"@tanaka_taro"})]})]})},x={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(s,{as:"div",size:"4xl",weight:"bold",color:"blue-600",children:"1,234"}),e.jsx(s,{as:"p",size:"sm",color:"gray-500",children:"ユーザー"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{as:"div",size:"4xl",weight:"bold",color:"green-600",children:"567"}),e.jsx(s,{as:"p",size:"sm",color:"gray-500",children:"プロジェクト"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(s,{as:"div",size:"4xl",weight:"bold",color:"purple-600",children:"89%"}),e.jsx(s,{as:"p",size:"sm",color:"gray-500",children:"達成率"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'これはテキストコンポーネントです',
    size: 'base',
    weight: 'normal'
  }
}`,...r.parameters?.docs?.source},description:{story:"デフォルト",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Text size="xs">size="xs" - 極小テキスト</Text>
      </div>
      <div>
        <Text size="sm">size="sm" - 小さいテキスト</Text>
      </div>
      <div>
        <Text size="base">size="base" - 基本テキスト</Text>
      </div>
      <div>
        <Text size="lg">size="lg" - 大きいテキスト</Text>
      </div>
      <div>
        <Text size="xl">size="xl" - 特大テキスト</Text>
      </div>
      <div>
        <Text size="2xl">size="2xl" - 見出しレベル</Text>
      </div>
      <div>
        <Text size="3xl">size="3xl" - 大見出し</Text>
      </div>
      <div>
        <Text size="4xl">size="4xl" - 最大見出し</Text>
      </div>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"サイズバリエーション",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Text weight="normal">weight="normal" - 通常のテキスト</Text>
      </div>
      <div>
        <Text weight="medium">weight="medium" - ミディアム</Text>
      </div>
      <div>
        <Text weight="semibold">weight="semibold" - セミボールド</Text>
      </div>
      <div>
        <Text weight="bold">weight="bold" - ボールド</Text>
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"ウェイトバリエーション",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4 border p-4">
      <Text as="p" align="left">
        align="left" - 左寄せテキスト
      </Text>
      <Text as="p" align="center">
        align="center" - 中央寄せテキスト
      </Text>
      <Text as="p" align="right">
        align="right" - 右寄せテキスト
      </Text>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"配置バリエーション",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Text color="gray-800">color="gray-800" - グレー</Text>
      </div>
      <div>
        <Text color="blue-600">color="blue-600" - ブルー</Text>
      </div>
      <div>
        <Text color="green-600">color="green-600" - グリーン</Text>
      </div>
      <div>
        <Text color="red-600">color="red-600" - レッド</Text>
      </div>
      <div>
        <Text color="#ff6600">color="#ff6600" - カスタムHEX</Text>
      </div>
      <div>
        <Text color="rgb(138, 43, 226)">color="rgb(138, 43, 226)" - RGB</Text>
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"カラーバリエーション",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-60 space-y-4">
      <div className="border p-2">
        <Text truncate className="block">
          これは非常に長いテキストで、コンテナの幅を超えると切り詰められます
        </Text>
      </div>
      <div className="border p-2">
        <Text className="block">これは通常のテキストで、折り返されます。これは非常に長いテキストです。</Text>
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"切り詰め",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Text as="h1" size="4xl" weight="bold">
        h1見出し
      </Text>
      <Text as="h2" size="3xl" weight="semibold">
        h2見出し
      </Text>
      <Text as="h3" size="2xl" weight="semibold">
        h3見出し
      </Text>
      <Text as="p" size="base">
        段落テキスト（p要素）
      </Text>
      <Text as="label" size="sm" weight="medium">
        ラベルテキスト
      </Text>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"要素の指定",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg">
      <Text as="h2" size="2xl" weight="bold" color="gray-800">
        記事タイトル
      </Text>
      <Text as="p" size="sm" color="gray-500">
        2024年1月15日 · 5分で読めます
      </Text>
      <Text as="p" size="base" color="gray-700">
        これは記事の本文です。Textコンポーネントを使用することで、
        一貫したタイポグラフィを実現できます。サイズ、ウェイト、
        色を簡潔に指定できます。
      </Text>
      <Text as="p" size="sm" color="blue-600" weight="medium">
        続きを読む →
      </Text>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"組み合わせ例",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
      <div>
        <Text as="h3" size="lg" weight="semibold" color="gray-800">
          田中 太郎
        </Text>
        <Text as="p" size="sm" color="gray-500">
          ソフトウェアエンジニア
        </Text>
        <Text as="p" size="xs" color="blue-600">
          @tanaka_taro
        </Text>
      </div>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"プロフィールカード例",...c.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <div className="text-center">
        <Text as="div" size="4xl" weight="bold" color="blue-600">
          1,234
        </Text>
        <Text as="p" size="sm" color="gray-500">
          ユーザー
        </Text>
      </div>
      <div className="text-center">
        <Text as="div" size="4xl" weight="bold" color="green-600">
          567
        </Text>
        <Text as="p" size="sm" color="gray-500">
          プロジェクト
        </Text>
      </div>
      <div className="text-center">
        <Text as="div" size="4xl" weight="bold" color="purple-600">
          89%
        </Text>
        <Text as="p" size="sm" color="gray-500">
          達成率
        </Text>
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"統計表示例",...x.parameters?.docs?.description}}};const j=["Default","Sizes","Weights","Alignment","Colors","Truncate","AsElements","Combinations","ProfileCard","Statistics"];export{o as Alignment,t as AsElements,d as Colors,l as Combinations,r as Default,c as ProfileCard,i as Sizes,x as Statistics,a as Truncate,n as Weights,j as __namedExportsOrder,b as default};
