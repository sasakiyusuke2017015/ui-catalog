import{j as t}from"./iframe-CAHZyj7a.js";import{S as n}from"./ScoreBadge-Ci0pQ989.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-DOFY5tP8.js";const g={title:"データ表示/統計/ScoreBadge",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{score:4.8}},r={args:{score:3.7}},s={args:{score:2.5}},o={args:{score:1.2}},a={render:()=>t.jsx("div",{className:"flex gap-3 items-center",children:[5,4.5,3.5,2.5,1.5,1].map(c=>t.jsx(n,{score:c,size:"medium"},c))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    score: 4.8
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    score: 3.7
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    score: 2.5
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    score: 1.2
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3 items-center">
      {[5.0, 4.5, 3.5, 2.5, 1.5, 1.0].map(score => <ScoreBadge key={score} score={score} size="medium" />)}
    </div>
}`,...a.parameters?.docs?.source}}};const u=["High","Good","Average","Low","AllScores"];export{a as AllScores,s as Average,r as Good,e as High,o as Low,u as __namedExportsOrder,g as default};
