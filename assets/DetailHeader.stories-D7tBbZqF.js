import{j as i}from"./iframe-BwfVzy39.js";import{D as a}from"./DetailHeader-WcQL5F2j.js";import{I as l}from"./Icon-DGn345dX.js";import{T as c}from"./Tooltip-DzFmH7S6.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DghHDH7f.js";import"./useOperationLog-0HvfpEDm.js";import"./Spinner-Bt2LJ0PM.js";import"./colors-BiHXYRGc.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const k={title:"レイアウト/DetailHeader",component:a,decorators:[d=>i.jsx("div",{style:{maxWidth:600,padding:16,background:"var(--color-bg, #f5f5f5)"},children:i.jsx(d,{})})]},t=[{label:"タイプ",value:"Issues"},{label:"サーバー",value:"http://192.168.10.64/items/18/index",onClick:()=>alert("open URL"),mono:!0},{label:"ローカル",value:"C:\\Users\\NT-210174\\Desktop\\sites\\プロトタイプ版\\掲載設定",mono:!0}],r=[{label:"取得",onClick:()=>{},variant:"primary"},{label:"反映",onClick:()=>{},variant:"default"},{label:"フォルダを開く",onClick:()=>{},variant:"outline"}],m=[{label:"",onClick:()=>{},variant:"outline",icon:i.jsx(c,{content:"サーバーから取得",children:i.jsx(l,{name:"sync-pull",size:14,stroke:"currentColor"})})},{label:"",onClick:()=>{},variant:"outline",icon:i.jsx(c,{content:"サーバーへ反映",children:i.jsx(l,{name:"sync-push",size:14,stroke:"currentColor"})})},{label:"",onClick:()=>{},variant:"outline",icon:i.jsx(c,{content:"フォルダを開く",children:i.jsx(l,{name:"folder",size:14,stroke:"currentColor"})})}],n={args:{variant:"compact",icon:"📊",title:"掲載設定",fields:t,actions:r}},e={args:{variant:"split",icon:"📊",title:"掲載設定",fields:t,actions:r}},o={args:{variant:"minimal",icon:"📊",title:"掲載設定",fields:t,actions:m}},s={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"#666"},children:"1. Compact（テキストラベル）"}),i.jsx(a,{variant:"compact",icon:"📊",title:"掲載設定",fields:t,actions:r})]}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"#666"},children:"2. Split（テキストラベル）"}),i.jsx(a,{variant:"split",icon:"📊",title:"掲載設定",fields:t,actions:r})]}),i.jsxs("div",{children:[i.jsx("h3",{style:{fontSize:13,fontWeight:600,marginBottom:8,color:"#666"},children:"3. Minimal（アイコンのみ）"}),i.jsx(a,{variant:"minimal",icon:"📊",title:"掲載設定",fields:t,actions:m})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    icon: "📊",
    title: "掲載設定",
    fields: sampleFields,
    actions: textActions
  }
}`,...n.parameters?.docs?.source},description:{story:"コンパクト: 1カード縦積み（テキストラベル）",...n.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "split",
    icon: "📊",
    title: "掲載設定",
    fields: sampleFields,
    actions: textActions
  }
}`,...e.parameters?.docs?.source},description:{story:"スプリット: 左に情報、右にアクション（テキストラベル）",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minimal",
    icon: "📊",
    title: "掲載設定",
    fields: sampleFields,
    actions: iconActions
  }
}`,...o.parameters?.docs?.source},description:{story:"ミニマル: ボーダーレス超軽量（アイコンのみ + ツールチップ）",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <h3 style={{
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 8,
        color: "#666"
      }}>1. Compact（テキストラベル）</h3>
        <DetailHeader variant="compact" icon="📊" title="掲載設定" fields={sampleFields} actions={textActions} />
      </div>
      <div>
        <h3 style={{
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 8,
        color: "#666"
      }}>2. Split（テキストラベル）</h3>
        <DetailHeader variant="split" icon="📊" title="掲載設定" fields={sampleFields} actions={textActions} />
      </div>
      <div>
        <h3 style={{
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 8,
        color: "#666"
      }}>3. Minimal（アイコンのみ）</h3>
        <DetailHeader variant="minimal" icon="📊" title="掲載設定" fields={sampleFields} actions={iconActions} />
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"3パターン比較",...s.parameters?.docs?.description}}};const b=["Compact","Split","Minimal","Comparison"];export{n as Compact,s as Comparison,o as Minimal,e as Split,b as __namedExportsOrder,k as default};
