import{j as C}from"./iframe-CUmTO3gC.js";import{c as r}from"./colors-BiHXYRGc.js";const a=({children:e,isSelected:u=!1,isActive:t=!1,onClick:o,onDoubleClick:l,className:i="",draggable:n,onDragStart:s})=>{const d=()=>u?{backgroundColor:"#eff6ff",borderLeftWidth:2,borderLeftStyle:"solid",borderLeftColor:r.semantic.info}:t?{borderLeftWidth:2,borderLeftStyle:"solid",borderLeftColor:r.gray[300]}:{borderLeftWidth:2,borderLeftStyle:"solid",borderLeftColor:"transparent"};return C.jsx("div",{className:`group px-3 py-2.5 hover:bg-gray-100 transition-colors cursor-pointer ${i}`,style:d(),onClick:o,onDoubleClick:l,draggable:n,onDragStart:s,"data-component":"list-item","data-selected":u||void 0,"data-active":t||void 0,children:e})};try{a.displayName="ListItem",a.__docgenInfo={description:`ListItem - リストアイテムの基本スタイル

- isSelected: 青背景 + 左ボーダー（選択中）
- isActive: 薄いボーダーのみ（フォーカス中）
- hover: グレー背景

Usage:
<ListItem isSelected onClick={...}>
  <div>コンテンツ</div>
</ListItem>`,displayName:"ListItem",props:{isSelected:{defaultValue:{value:"false"},description:"選択状態（青背景 + 太ボーダー）",name:"isSelected",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"アクティブ状態（薄いボーダーのみ）",name:"isActive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"ドラッグ可能",name:"draggable",required:!1,type:{name:"boolean"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: DragEvent<Element>) => void)"}}}}}catch{}export{a as L};
