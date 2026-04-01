import{j as e,r}from"./iframe-DM_a6nxx.js";import{V as o}from"./ViewModeToggle-D48dkPO0.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DF4Bw8wy.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./index-BP3Unbov.js";import"./proxy-BsJSIX6K.js";const V={title:"コントロール/ViewModeToggle",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"text",description:"現在選択されているモード"},showLabel:{control:"boolean",description:"ラベルを常に表示するか"},size:{control:"select",options:["small","medium","large"],description:"サイズ"},variant:{control:"select",options:["default","primary","teal"],description:"バリアント（カラーテーマ）"}}},n=[{value:"table",label:"テーブル",icon:"list"},{value:"card",label:"カード",icon:"dashboard"}],b=[{value:"list",label:"リスト",icon:"list"},{value:"grid",label:"グリッド",icon:"dashboard"},{value:"timeline",label:"タイムライン",icon:"calendar"}],h=()=>{const[s,a]=r.useState("table");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{value:s,onChange:a,options:n}),e.jsxs("div",{className:"text-sm text-gray-500",children:["選択中: ",e.jsx("span",{className:"font-semibold",children:s})]})]})},l={render:()=>e.jsx(h,{})},d={render:()=>{const s=()=>{const[a,t]=r.useState("card");return e.jsx(o,{value:a,onChange:t,options:n,showLabel:!0})};return e.jsx(s,{})}},c={render:()=>{const s=({size:a})=>{const[t,i]=r.useState("table");return e.jsx(o,{value:t,onChange:i,options:n,size:a,showLabel:!0})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Small"}),e.jsx(s,{size:"small"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Medium (default)"}),e.jsx(s,{size:"medium"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Large"}),e.jsx(s,{size:"large"})]})]})}},m={render:()=>{const s=({variant:a})=>{const[t,i]=r.useState("table");return e.jsx(o,{value:t,onChange:i,options:n,variant:a,showLabel:!0})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Default"}),e.jsx(s,{variant:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Primary"}),e.jsx(s,{variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Teal"}),e.jsx(s,{variant:"teal"})]})]})}},p={render:()=>{const s=()=>{const[a,t]=r.useState("list");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{value:a,onChange:t,options:b,showLabel:!0}),e.jsxs("div",{className:"text-sm text-gray-500",children:["選択中: ",e.jsx("span",{className:"font-semibold",children:a})]})]})};return e.jsx(s,{})}},u={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsx(o,{value:a,onChange:t,options:n,showLabel:!1})};return e.jsx(s,{})}},g={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"データ一覧"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"表示切替:"}),e.jsx(o,{value:a,onChange:t,options:n,size:"small"})]})]})};return e.jsx(s,{})}},x={render:()=>{const s=()=>{const[a,t]=r.useState("card"),[i,v]=r.useState("grid");return e.jsxs("div",{className:"w-80 space-y-6 rounded-lg bg-white p-6 shadow-lg",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"表示設定"}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-700",children:"ビューモード"}),e.jsx(o,{value:a,onChange:t,options:n,variant:"primary",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-700",children:"レイアウト"}),e.jsx(o,{value:i,onChange:v,options:b,variant:"teal",showLabel:!0})]})]})};return e.jsx(s,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveToggle />
}`,...l.parameters?.docs?.source},description:{story:"デフォルト",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const WithLabelToggle = () => {
      const [mode, setMode] = useState<ViewMode>('card');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} showLabel />;
    };
    return <WithLabelToggle />;
  }
}`,...d.parameters?.docs?.source},description:{story:"ラベル表示",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const SizeToggle = ({
      size
    }: {
      size: 'small' | 'medium' | 'large';
    }) => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} size={size} showLabel />;
    };
    return <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold">Small</p>
          <SizeToggle size="small" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Medium (default)</p>
          <SizeToggle size="medium" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Large</p>
          <SizeToggle size="large" />
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"サイズバリエーション",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const VariantToggle = ({
      variant
    }: {
      variant: 'default' | 'primary' | 'teal';
    }) => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} variant={variant} showLabel />;
    };
    return <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-semibold">Default</p>
          <VariantToggle variant="default" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Primary</p>
          <VariantToggle variant="primary" />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Teal</p>
          <VariantToggle variant="teal" />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"バリアントカラー",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ThreeOptionsToggle = () => {
      const [mode, setMode] = useState<DisplayMode>('list');
      return <div className="space-y-4">
          <ViewModeToggle value={mode} onChange={setMode} options={displayOptions} showLabel />
          <div className="text-sm text-gray-500">
            選択中: <span className="font-semibold">{mode}</span>
          </div>
        </div>;
    };
    return <ThreeOptionsToggle />;
  }
}`,...p.parameters?.docs?.source},description:{story:"3つ以上の選択肢",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const IconOnlyToggle = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} showLabel={false} />;
    };
    return <IconOnlyToggle />;
  }
}`,...u.parameters?.docs?.source},description:{story:"アイコンのみ（コンパクト）",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const HeaderExample = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold">データ一覧</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">表示切替:</span>
            <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} size="small" />
          </div>
        </div>;
    };
    return <HeaderExample />;
  }
}`,...g.parameters?.docs?.source},description:{story:"実践例：ヘッダーバー内",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const FilterPanelExample = () => {
      const [viewMode, setViewMode] = useState<ViewMode>('card');
      const [displayMode, setDisplayMode] = useState<DisplayMode>('grid');
      return <div className="w-80 space-y-6 rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold">表示設定</h3>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              ビューモード
            </label>
            <ViewModeToggle value={viewMode} onChange={setViewMode} options={tableCardOptions} variant="primary" showLabel />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              レイアウト
            </label>
            <ViewModeToggle value={displayMode} onChange={setDisplayMode} options={displayOptions} variant="teal" showLabel />
          </div>
        </div>;
    };
    return <FilterPanelExample />;
  }
}`,...x.parameters?.docs?.source},description:{story:"実践例：フィルターパネル",...x.parameters?.docs?.description}}};const C=["Default","WithLabel","Sizes","Variants","ThreeOptions","IconOnly","InHeaderBar","InFilterPanel"];export{l as Default,u as IconOnly,x as InFilterPanel,g as InHeaderBar,c as Sizes,p as ThreeOptions,m as Variants,d as WithLabel,C as __namedExportsOrder,V as default};
