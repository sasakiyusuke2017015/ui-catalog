import{j as e,r}from"./iframe-Dq39NNb-.js";import{V as o}from"./ViewModeToggle-BNLAZNzA.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CkCT-6lM.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const S={title:"コントロール/ViewModeToggle",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"text",description:"現在選択されているモード"},showLabel:{control:"boolean",description:"ラベルを常に表示するか"},size:{control:"select",options:["small","medium","large"],description:"サイズ"},variant:{control:"select",options:["default","primary","teal","dark"],description:"バリアント（カラーテーマ）"}}},n=[{value:"table",label:"テーブル",icon:"list"},{value:"card",label:"カード",icon:"dashboard"}],h=[{value:"list",label:"リスト",icon:"list"},{value:"grid",label:"グリッド",icon:"dashboard"},{value:"timeline",label:"タイムライン",icon:"calendar"}],l={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{value:a,onChange:t,options:n}),e.jsxs("div",{className:"text-sm text-gray-500",children:["選択中: ",e.jsx("span",{className:"font-semibold",children:a})]})]})};return e.jsx(s,{})}},i={render:()=>{const s=()=>{const[a,t]=r.useState("card");return e.jsx(o,{value:a,onChange:t,options:n,showLabel:!0})};return e.jsx(s,{})}},c={render:()=>{const s=({size:a})=>{const[t,d]=r.useState("table");return e.jsx(o,{value:t,onChange:d,options:n,size:a,showLabel:!0})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Small"}),e.jsx(s,{size:"small"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Medium (default)"}),e.jsx(s,{size:"medium"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Large"}),e.jsx(s,{size:"large"})]})]})}},m={render:()=>{const s=({variant:a,bg:t})=>{const[d,j]=r.useState("table");return e.jsx("div",{className:"rounded-lg p-4",style:{backgroundColor:t},children:e.jsx(o,{value:d,onChange:j,options:n,variant:a,showLabel:!0})})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Default"}),e.jsx(s,{variant:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Primary"}),e.jsx(s,{variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold",children:"Teal"}),e.jsx(s,{variant:"teal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-semibold text-white",children:"Dark"}),e.jsx(s,{variant:"dark",bg:"#1a1a2e"})]})]})}},p={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsx("div",{className:"rounded-xl p-8",style:{backgroundColor:"#1a1a2e"},children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",style:{color:"rgba(255,255,255,0.5)"},children:"表示切替"}),e.jsx(o,{value:a,onChange:t,options:n,variant:"dark",size:"small"})]}),e.jsxs("div",{className:"text-sm",style:{color:"rgba(255,255,255,0.4)"},children:["選択中: ",e.jsx("span",{style:{color:"rgba(255,255,255,0.9)"},children:a==="table"?"テーブル":"カード"})]})]})})};return e.jsx(s,{})}},g={render:()=>{const s=()=>{const[a,t]=r.useState("list");return e.jsx("div",{className:"rounded-xl p-8",style:{backgroundColor:"#1a1a2e"},children:e.jsx(o,{value:a,onChange:t,options:h,variant:"dark",showLabel:!0})})};return e.jsx(s,{})}},u={render:()=>{const s=()=>{const[a,t]=r.useState("list");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{value:a,onChange:t,options:h,showLabel:!0}),e.jsxs("div",{className:"text-sm text-gray-500",children:["選択中: ",e.jsx("span",{className:"font-semibold",children:a})]})]})};return e.jsx(s,{})}},x={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsx(o,{value:a,onChange:t,options:n,showLabel:!1})};return e.jsx(s,{})}},b={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"データ一覧"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"表示切替:"}),e.jsx(o,{value:a,onChange:t,options:n,size:"small"})]})]})};return e.jsx(s,{})}},v={render:()=>{const s=()=>{const[a,t]=r.useState("table");return e.jsxs("div",{className:"w-52 rounded-lg p-4",style:{backgroundColor:"#16161e",borderRight:"1px solid rgba(255,255,255,0.1)"},children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-xs font-mono",style:{color:"rgba(255,255,255,0.4)"},children:"#42 / 509"}),e.jsx(o,{value:a,onChange:t,options:n,variant:"dark",size:"small"})]}),e.jsx("div",{className:"space-y-1",children:[1,2,3].map(d=>e.jsx("div",{className:"h-10 rounded",style:{backgroundColor:"rgba(255,255,255,0.05)"}},d))})]})};return e.jsx(s,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="space-y-4">
          <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} />
          <div className="text-sm text-gray-500">
            選択中: <span className="font-semibold">{mode}</span>
          </div>
        </div>;
    };
    return <Toggle />;
  }
}`,...l.parameters?.docs?.source},description:{story:"デフォルト（インタラクティブ）",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<ViewMode>('card');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} showLabel />;
    };
    return <Toggle />;
  }
}`,...i.parameters?.docs?.source},description:{story:"ラベル表示",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      variant,
      bg
    }: {
      variant: 'default' | 'primary' | 'teal' | 'dark';
      bg?: string;
    }) => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="rounded-lg p-4" style={{
        backgroundColor: bg
      }}>
          <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} variant={variant} showLabel />
        </div>;
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
        <div>
          <p className="mb-2 text-sm font-semibold text-white">Dark</p>
          <VariantToggle variant="dark" bg="#1a1a2e" />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"バリアントカラー（全variant比較）",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="rounded-xl p-8" style={{
        backgroundColor: '#1a1a2e'
      }}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{
              color: 'rgba(255,255,255,0.5)'
            }}>表示切替</span>
              <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} variant="dark" size="small" />
            </div>
            <div className="text-sm" style={{
            color: 'rgba(255,255,255,0.4)'
          }}>
              選択中: <span style={{
              color: 'rgba(255,255,255,0.9)'
            }}>{mode === 'table' ? 'テーブル' : 'カード'}</span>
            </div>
          </div>
        </div>;
    };
    return <Toggle />;
  }
}`,...p.parameters?.docs?.source},description:{story:"Dark variant（ダークテーマ向け）",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<DisplayMode>('list');
      return <div className="rounded-xl p-8" style={{
        backgroundColor: '#1a1a2e'
      }}>
          <ViewModeToggle value={mode} onChange={setMode} options={displayOptions} variant="dark" showLabel />
        </div>;
    };
    return <Toggle />;
  }
}`,...g.parameters?.docs?.source},description:{story:"Dark variant + 3オプション",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<DisplayMode>('list');
      return <div className="space-y-4">
          <ViewModeToggle value={mode} onChange={setMode} options={displayOptions} showLabel />
          <div className="text-sm text-gray-500">
            選択中: <span className="font-semibold">{mode}</span>
          </div>
        </div>;
    };
    return <Toggle />;
  }
}`,...u.parameters?.docs?.source},description:{story:"3つ以上の選択肢",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Toggle = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} showLabel={false} />;
    };
    return <Toggle />;
  }
}`,...x.parameters?.docs?.source},description:{story:"アイコンのみ（コンパクト）",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Example = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold">データ一覧</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">表示切替:</span>
            <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} size="small" />
          </div>
        </div>;
    };
    return <Example />;
  }
}`,...b.parameters?.docs?.source},description:{story:"実践例：ヘッダーバー内",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Example = () => {
      const [mode, setMode] = useState<ViewMode>('table');
      return <div className="w-52 rounded-lg p-4" style={{
        backgroundColor: '#16161e',
        borderRight: '1px solid rgba(255,255,255,0.1)'
      }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono" style={{
            color: 'rgba(255,255,255,0.4)'
          }}>#42 / 509</span>
            <ViewModeToggle value={mode} onChange={setMode} options={tableCardOptions} variant="dark" size="small" />
          </div>
          <div className="space-y-1">
            {[1, 2, 3].map(i => <div key={i} className="h-10 rounded" style={{
            backgroundColor: 'rgba(255,255,255,0.05)'
          }} />)}
          </div>
        </div>;
    };
    return <Example />;
  }
}`,...v.parameters?.docs?.source},description:{story:"実践例：ダークサイドバー",...v.parameters?.docs?.description}}};const C=["Default","WithLabel","Sizes","Variants","Dark","DarkThreeOptions","ThreeOptions","IconOnly","InHeaderBar","InDarkSidebar"];export{p as Dark,g as DarkThreeOptions,l as Default,x as IconOnly,v as InDarkSidebar,b as InHeaderBar,c as Sizes,u as ThreeOptions,m as Variants,i as WithLabel,C as __namedExportsOrder,S as default};
