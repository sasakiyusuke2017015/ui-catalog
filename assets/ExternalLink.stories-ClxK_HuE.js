import{j as f}from"./iframe-CUmTO3gC.js";import{E as u}from"./ExternalLink-MrTTspYX.js";import"./preload-helper-PPVm8Dsz.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-BESojGLS.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const P={title:"ナビゲーション/リンク/ExternalLink",component:u,parameters:{layout:"centered",docs:{description:{component:"外部リンクを新しいタブで開くためのリンクコンポーネント。アイコン付きで外部サイトへの遷移を明示的に表現します。"},source:{transform:(t,d)=>{const{args:e}=d,r=[];e.href&&r.push(`href="${e.href}"`),e.variant&&e.variant!=="default"?r.push(`className="sdt-external-link sdt-external-link--${e.variant}"`):r.push('className="sdt-external-link"');const m=r.length>0?" "+r.join(" "):"",h=e.children||"External Link";return`import ExternalLink from './components/atoms/ExternalLink/ExternalLink';

<ExternalLink${m}>${h}</ExternalLink>`}}}},tags:["autodocs"],argTypes:{href:{control:"text",description:"リンク先のURL"},children:{control:"text",description:"リンクのテキスト内容"},variant:{control:{type:"select",options:["default","wordpress","api","catalog","source","dify","pleasanter"]},description:`カラーバリエーション(修飾クラス)：
    - **default**: 青(blue-700)
    - **wordpress**: 青(blue-700)
    - **api**: アンバー(amber-600)
    - **catalog**: オレンジ(orange-600)
    - **source**: スレート(slate-600)
    - **dify**: エメラルド(emerald-600)
    - **pleasanter**: ローズ(rose-600)`,table:{defaultValue:{summary:"default"}}},className:{table:{disable:!0}}}},a=({variant:t,href:d,children:e,...r})=>{const m=t&&t!=="default"?`sdt-external-link sdt-external-link--${t}`:"sdt-external-link";return f.jsx(u,{href:d,className:m,...r,children:e})},n={args:{href:"https://example.com",children:"External Link",variant:"default"},render:a},s={args:{href:"http://192.168.10.64/wordpress",children:"WordPress",variant:"wordpress"},render:a},o={args:{href:"http://192.168.10.63:8080/docs#",children:"APIドキュメント",variant:"api"},render:a},c={args:{href:"http://192.168.10.64:7006/",children:"コンポーネントカタログ",variant:"catalog"},render:a},i={args:{href:"http://192.168.10.64:5000/",children:"ソース管理",variant:"source"},render:a},l={args:{href:"http://192.168.10.66/apps",children:"Dify",variant:"dify"},render:a},p={args:{href:"http://192.168.10.64/items/1/index",children:"Pleasanter",variant:"pleasanter"},render:a};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'External Link',
    variant: 'default'
  },
  render: Template
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.64/wordpress',
    children: 'WordPress',
    variant: 'wordpress'
  },
  render: Template
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.63:8080/docs#',
    children: 'APIドキュメント',
    variant: 'api'
  },
  render: Template
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.64:7006/',
    children: 'コンポーネントカタログ',
    variant: 'catalog'
  },
  render: Template
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.64:5000/',
    children: 'ソース管理',
    variant: 'source'
  },
  render: Template
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.66/apps',
    children: 'Dify',
    variant: 'dify'
  },
  render: Template
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'http://192.168.10.64/items/1/index',
    children: 'Pleasanter',
    variant: 'pleasanter'
  },
  render: Template
}`,...p.parameters?.docs?.source}}};const S=["Default","WordPress","APIDocument","ComponentCatalog","SourceControl","Dify","Pleasanter"];export{o as APIDocument,c as ComponentCatalog,n as Default,l as Dify,p as Pleasanter,i as SourceControl,s as WordPress,S as __namedExportsOrder,P as default};
