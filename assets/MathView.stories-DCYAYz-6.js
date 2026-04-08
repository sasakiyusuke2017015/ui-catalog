import{j as a}from"./iframe-LfAIox-3.js";import{M as e}from"./MathView-tZBzztFf.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"データ表示/その他/MathView",component:e,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{latex:"\\frac{a}{b}"}},t={args:{latex:"x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"}},s={args:{latex:"E = mc^2",inline:!0}},n={args:{latex:"\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}",textColor:"#1a73e8",fontSize:24}},o={args:{latex:"\\alpha + \\beta = \\gamma"}},c={args:{latex:"\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}"}},i={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsx(e,{latex:"a^2 + b^2 = c^2"}),a.jsx(e,{latex:"\\\\frac{d}{dx} e^x = e^x"}),a.jsx(e,{latex:"\\\\nabla \\\\times \\\\mathbf{E} = -\\\\frac{\\\\partial \\\\mathbf{B}}{\\\\partial t}"}),a.jsx(e,{latex:"\\\\lim_{n \\\\rightarrow \\\\infty} \\\\left(1 + \\\\frac{1}{n}\\\\right)^n = e"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    latex: '\\\\frac{a}{b}'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    latex: 'x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    latex: 'E = mc^2',
    inline: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    latex: '\\\\sum_{i=1}^{n} i = \\\\frac{n(n+1)}{2}',
    textColor: '#1a73e8',
    fontSize: 24
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    latex: '\\\\alpha + \\\\beta = \\\\gamma'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    latex: '\\\\int_{0}^{\\\\infty} e^{-x^2} dx = \\\\frac{\\\\sqrt{\\\\pi}}{2}'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <MathView latex="a^2 + b^2 = c^2" />
      <MathView latex="\\\\frac{d}{dx} e^x = e^x" />
      <MathView latex="\\\\nabla \\\\times \\\\mathbf{E} = -\\\\frac{\\\\partial \\\\mathbf{B}}{\\\\partial t}" />
      <MathView latex="\\\\lim_{n \\\\rightarrow \\\\infty} \\\\left(1 + \\\\frac{1}{n}\\\\right)^n = e" />
    </div>
}`,...i.parameters?.docs?.source}}};const d=["Fraction","QuadraticFormula","Inline","CustomStyle","GreekLetters","Integral","Gallery"];export{n as CustomStyle,r as Fraction,i as Gallery,o as GreekLetters,s as Inline,c as Integral,t as QuadraticFormula,d as __namedExportsOrder,x as default};
