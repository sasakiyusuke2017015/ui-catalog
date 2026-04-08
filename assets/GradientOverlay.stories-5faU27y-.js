import{j as a}from"./iframe-BZQgagrY.js";import{G as g}from"./GradientOverlay-BfGs7PNJ.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-B2yeVycW.js";const y={title:"背景効果/GradientOverlay",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{background:{control:"text",description:"グラデーション背景（CSSグラデーション形式）"},maxOpacity:{control:{type:"number",min:0,max:1,step:.1},description:"最大透明度"},delay:{control:"number",description:"アニメーション遅延（秒）"},duration:{control:{type:"number",min:5,max:60,step:5},description:"アニメーション持続時間（秒）"},animationType:{control:"select",options:["none","wave","randomColor"],description:"アニメーションタイプ"},animationDirection:{control:"select",options:["horizontal","diagonal-up","diagonal-down","vertical"],description:"アニメーション方向"}},decorators:[n=>a.jsx("div",{style:{width:"100vw",height:"400px",position:"relative",background:"#1a1a2e"},children:a.jsx(n,{})})]},e={args:{background:"linear-gradient(135deg, rgba(255,154,158,0.4), rgba(250,208,196,0.3), rgba(255,206,84,0.2))",maxOpacity:1,animationType:"none"}},r={args:{animationType:"wave",animationDirection:"horizontal",duration:15,animationGradient:"linear-gradient(90deg, transparent, rgba(255,215,0,0.4), rgba(255,223,0,0.6), rgba(255,215,0,0.4), transparent)"}},i={args:{animationType:"wave",animationDirection:"diagonal-up",duration:20,animationGradient:"linear-gradient(90deg, transparent, rgba(100,200,255,0.5), rgba(150,220,255,0.7), rgba(100,200,255,0.5), transparent)"}},t={args:{animationType:"wave",animationDirection:"diagonal-down",duration:18,animationGradient:"linear-gradient(90deg, transparent, rgba(255,100,150,0.5), rgba(255,150,180,0.7), rgba(255,100,150,0.5), transparent)"}},o={args:{animationType:"wave",animationDirection:"vertical",duration:25,animationGradient:"linear-gradient(90deg, transparent, rgba(150,255,150,0.4), rgba(100,255,100,0.6), rgba(150,255,150,0.4), transparent)"}},s={args:{animationType:"randomColor",duration:8,colorRanges:{r:{min:100,max:255},g:{min:100,max:255},b:{min:100,max:255},a:{min:.3,max:.6}}}},d={args:{animationType:"randomColor",duration:10,colorRanges:{r:{min:50,max:100},g:{min:100,max:200},b:{min:200,max:255},a:{min:.4,max:.7}}}},c={args:{animationType:"randomColor",duration:12,colorRanges:{r:{min:50,max:150},g:{min:180,max:255},b:{min:80,max:150},a:{min:.3,max:.5}}}},m={args:{animationType:"wave",animationDirection:"diagonal-up",duration:30,animationGradient:"linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.5), rgba(99,102,241,0.4), transparent)"},decorators:[n=>a.jsxs("div",{style:{width:"100vw",height:"500px",position:"relative",background:"linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"},children:[a.jsx(n,{}),a.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:a.jsxs("div",{className:"rounded-2xl bg-white/90 p-8 text-center shadow-2xl backdrop-blur",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"ログイン"}),a.jsx("p",{className:"mt-2 text-gray-600",children:"美しいグラデーションアニメーション背景"})]})})]})]},l={render:()=>a.jsxs("div",{className:"grid h-96 grid-cols-3",children:[a.jsxs("div",{className:"relative",children:[a.jsx(g,{background:"linear-gradient(135deg, rgba(255,0,100,0.3), rgba(255,150,200,0.2))",animationType:"none"}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("span",{className:"text-white font-medium",children:"Pink"})})]}),a.jsxs("div",{className:"relative",children:[a.jsx(g,{background:"linear-gradient(135deg, rgba(0,100,255,0.3), rgba(100,200,255,0.2))",animationType:"none"}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("span",{className:"text-white font-medium",children:"Blue"})})]}),a.jsxs("div",{className:"relative",children:[a.jsx(g,{background:"linear-gradient(135deg, rgba(100,255,100,0.3), rgba(200,255,200,0.2))",animationType:"none"}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("span",{className:"text-white font-medium",children:"Green"})})]})]}),decorators:[n=>a.jsx(n,{})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    background: 'linear-gradient(135deg, rgba(255,154,158,0.4), rgba(250,208,196,0.3), rgba(255,206,84,0.2))',
    maxOpacity: 1,
    animationType: 'none'
  }
}`,...e.parameters?.docs?.source},description:{story:"デフォルト（静的グラデーション）",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'wave',
    animationDirection: 'horizontal',
    duration: 15,
    animationGradient: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.4), rgba(255,223,0,0.6), rgba(255,215,0,0.4), transparent)'
  }
}`,...r.parameters?.docs?.source},description:{story:"波アニメーション（横方向）",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'wave',
    animationDirection: 'diagonal-up',
    duration: 20,
    animationGradient: 'linear-gradient(90deg, transparent, rgba(100,200,255,0.5), rgba(150,220,255,0.7), rgba(100,200,255,0.5), transparent)'
  }
}`,...i.parameters?.docs?.source},description:{story:"波アニメーション（斜め上）",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'wave',
    animationDirection: 'diagonal-down',
    duration: 18,
    animationGradient: 'linear-gradient(90deg, transparent, rgba(255,100,150,0.5), rgba(255,150,180,0.7), rgba(255,100,150,0.5), transparent)'
  }
}`,...t.parameters?.docs?.source},description:{story:"波アニメーション（斜め下）",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'wave',
    animationDirection: 'vertical',
    duration: 25,
    animationGradient: 'linear-gradient(90deg, transparent, rgba(150,255,150,0.4), rgba(100,255,100,0.6), rgba(150,255,150,0.4), transparent)'
  }
}`,...o.parameters?.docs?.source},description:{story:"波アニメーション（縦方向）",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'randomColor',
    duration: 8,
    colorRanges: {
      r: {
        min: 100,
        max: 255
      },
      g: {
        min: 100,
        max: 255
      },
      b: {
        min: 100,
        max: 255
      },
      a: {
        min: 0.3,
        max: 0.6
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"ランダムカラー変化",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'randomColor',
    duration: 10,
    colorRanges: {
      r: {
        min: 50,
        max: 100
      },
      g: {
        min: 100,
        max: 200
      },
      b: {
        min: 200,
        max: 255
      },
      a: {
        min: 0.4,
        max: 0.7
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"カスタムカラーレンジ（青系）",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'randomColor',
    duration: 12,
    colorRanges: {
      r: {
        min: 50,
        max: 150
      },
      g: {
        min: 180,
        max: 255
      },
      b: {
        min: 80,
        max: 150
      },
      a: {
        min: 0.3,
        max: 0.5
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"カスタムカラーレンジ（緑系）",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    animationType: 'wave',
    animationDirection: 'diagonal-up',
    duration: 30,
    animationGradient: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.5), rgba(99,102,241,0.4), transparent)'
  },
  decorators: [Story => <div style={{
    width: '100vw',
    height: '500px',
    position: 'relative',
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)'
  }}>
        <Story />
        <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }}>
          <div className="rounded-2xl bg-white/90 p-8 text-center shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-bold text-gray-800">ログイン</h2>
            <p className="mt-2 text-gray-600">美しいグラデーションアニメーション背景</p>
          </div>
        </div>
      </div>]
}`,...m.parameters?.docs?.source},description:{story:"ログイン画面風",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid h-96 grid-cols-3">
      <div className="relative">
        <GradientOverlay background="linear-gradient(135deg, rgba(255,0,100,0.3), rgba(255,150,200,0.2))" animationType="none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-medium">Pink</span>
        </div>
      </div>
      <div className="relative">
        <GradientOverlay background="linear-gradient(135deg, rgba(0,100,255,0.3), rgba(100,200,255,0.2))" animationType="none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-medium">Blue</span>
        </div>
      </div>
      <div className="relative">
        <GradientOverlay background="linear-gradient(135deg, rgba(100,255,100,0.3), rgba(200,255,200,0.2))" animationType="none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-medium">Green</span>
        </div>
      </div>
    </div>,
  decorators: [Story => <Story />]
}`,...l.parameters?.docs?.source},description:{story:"静的なグラデーション比較",...l.parameters?.docs?.description}}};const v=["Default","WaveHorizontal","WaveDiagonalUp","WaveDiagonalDown","WaveVertical","RandomColor","BlueColorRange","GreenColorRange","LoginStyle","StaticGradients"];export{d as BlueColorRange,e as Default,c as GreenColorRange,m as LoginStyle,s as RandomColor,l as StaticGradients,t as WaveDiagonalDown,i as WaveDiagonalUp,r as WaveHorizontal,o as WaveVertical,v as __namedExportsOrder,y as default};
