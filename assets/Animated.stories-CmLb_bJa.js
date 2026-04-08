import{j as e}from"./iframe-BwWmhw3u.js";import{A as r}from"./Animated-rRwiQSHM.js";import{R as x}from"./ReplayButton-Y4VHK_FW.js";import{u as f}from"./useRemountKey-CLSgCJiS.js";import"./preload-helper-PPVm8Dsz.js";import"./animations-BTPozNpH.js";import"./proxy-CD9S3QMb.js";import"./Button-CHwaDt7F.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-DSv2CHnr.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Spinner-nB7SjsmH.js";import"./colors-BiHXYRGc.js";const U={title:"アニメーション/Animated",component:r,parameters:{layout:"padded"},tags:["autodocs"],args:{show:!0,children:null},argTypes:{category:{control:"select",options:["framer","card","tableRow","dropMenu"],description:"アニメーションカテゴリ（animations.ts の全バリアントに対応）"},variant:{control:"text",description:"アニメーションバリアント（カテゴリに応じて異なる: slideRight, slideRightFast, slideDownFast など）"},type:{control:"select",options:["collapse","fade","slide","scale","slideRight","slideDown"],description:"基本的なアニメーション用のシンプルAPI"},slideDirection:{control:"select",options:["left","right","up","down"]},duration:{control:{type:"range",min:.1,max:2,step:.1}},delay:{control:{type:"range",min:0,max:2,step:.1}},maxHeight:{control:{type:"number",min:100,max:1e3,step:50}}}},s=()=>e.jsxs("div",{className:"rounded border border-blue-300 bg-blue-100 p-4",children:[e.jsx("h3",{className:"font-bold text-blue-900",children:"アニメーションサンプル"}),e.jsx("p",{className:"text-blue-700",children:"これはアニメーションのデモコンテンツです。各アニメーションタイプの動きを確認できます。"})]});function i(n){const{key:t,remount:h}=f();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{onClick:h}),e.jsx(r,{...n,show:!0,children:e.jsx(s,{})},t)]})}const d={render:function(t){return e.jsx(i,{...t})},args:{type:"collapse",duration:.3,maxHeight:500}},l={render:function(t){return e.jsx(i,{...t})},args:{type:"fade",duration:.3}},c={render:function(t){return e.jsx(i,{...t})},args:{type:"slide",slideDirection:"left",duration:.3}},m={render:function(t){return e.jsx(i,{...t})},args:{type:"slide",slideDirection:"right",duration:.3}},p={render:function(t){return e.jsx(i,{...t})},args:{type:"slide",slideDirection:"up",duration:.3}},u={render:function(t){return e.jsx(i,{...t})},args:{type:"slide",slideDirection:"down",duration:.3}},y={render:function(t){return e.jsx(i,{...t})},args:{type:"scale",duration:.3}},S={render:function(t){return e.jsx(i,{...t})},args:{type:"slideRight",index:0,speed:1}},g={render:function(t){return e.jsx(i,{...t})},args:{type:"slideDown",index:0,speed:1}},o={render:function(t){return e.jsx(i,{...t})},args:{type:"collapse",duration:.3}},a={render:function(){const{key:t,remount:h}=f();return e.jsxs("div",{className:"space-y-6",children:[e.jsx(x,{onClick:h,label:"すべて再生"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Collapse"}),e.jsx(r,{show:!0,type:"collapse",duration:.3,children:e.jsx(s,{})},`collapse-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Fade"}),e.jsx(r,{show:!0,type:"fade",duration:.3,children:e.jsx(s,{})},`fade-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Slide Left"}),e.jsx(r,{show:!0,type:"slide",slideDirection:"left",duration:.3,children:e.jsx(s,{})},`slide-left-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Slide Right"}),e.jsx(r,{show:!0,type:"slide",slideDirection:"right",duration:.3,children:e.jsx(s,{})},`slide-right-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Slide Up"}),e.jsx(r,{show:!0,type:"slide",slideDirection:"up",duration:.3,children:e.jsx(s,{})},`slide-up-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Slide Down"}),e.jsx(r,{show:!0,type:"slide",slideDirection:"down",duration:.3,children:e.jsx(s,{})},`slide-down-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"Scale"}),e.jsx(r,{show:!0,type:"scale",duration:.3,children:e.jsx(s,{})},`scale-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"CSS Slide Right (Keyframes)"}),e.jsx(r,{show:!0,type:"slideRight",index:0,children:e.jsx(s,{})},`css-right-${t}`)]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-fluid-sm font-semibold text-gray-700",children:"CSS Slide Down (Keyframes)"}),e.jsx(r,{show:!0,type:"slideDown",index:0,children:e.jsx(s,{})},`css-down-${t}`)]})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function CollapseStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'collapse',
    duration: 0.3,
    maxHeight: 500
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function FadeStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'fade',
    duration: 0.3
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function SlideLeftStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slide',
    slideDirection: 'left',
    duration: 0.3
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function SlideRightStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slide',
    slideDirection: 'right',
    duration: 0.3
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function SlideUpStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slide',
    slideDirection: 'up',
    duration: 0.3
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function SlideDownStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slide',
    slideDirection: 'down',
    duration: 0.3
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function ScaleStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'scale',
    duration: 0.3
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function CSSSlideRightStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slideRight',
    index: 0,
    speed: 1.0
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function CSSSlideDownStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'slideDown',
    index: 0,
    speed: 1.0
  }
}`,...g.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function InteractiveToggleStory(args) {
    return <SimpleStory {...args} />;
  },
  args: {
    type: 'collapse',
    duration: 0.3
  }
}`,...o.parameters?.docs?.source},description:{story:"インタラクティブトグル",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function AllAnimationsStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-6">
        <ReplayButton onClick={remount} label="すべて再生" />
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Collapse</h3>
            <Animated key={\`collapse-\${key}\`} show={true} type="collapse" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Fade</h3>
            <Animated key={\`fade-\${key}\`} show={true} type="fade" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Left</h3>
            <Animated key={\`slide-left-\${key}\`} show={true} type="slide" slideDirection="left" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Right</h3>
            <Animated key={\`slide-right-\${key}\`} show={true} type="slide" slideDirection="right" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Up</h3>
            <Animated key={\`slide-up-\${key}\`} show={true} type="slide" slideDirection="up" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Slide Down</h3>
            <Animated key={\`slide-down-\${key}\`} show={true} type="slide" slideDirection="down" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">Scale</h3>
            <Animated key={\`scale-\${key}\`} show={true} type="scale" duration={0.3}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">CSS Slide Right (Keyframes)</h3>
            <Animated key={\`css-right-\${key}\`} show={true} type="slideRight" index={0}>
              <SampleContent />
            </Animated>
          </div>
          <div>
            <h3 className="mb-2 text-fluid-sm font-semibold text-gray-700">CSS Slide Down (Keyframes)</h3>
            <Animated key={\`css-down-\${key}\`} show={true} type="slideDown" index={0}>
              <SampleContent />
            </Animated>
          </div>
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:"全アニメーション一覧",...a.parameters?.docs?.description}}};const I=["Collapse","Fade","SlideLeft","SlideRight","SlideUp","SlideDown","Scale","CSSSlideRight","CSSSlideDown","InteractiveToggle","AllAnimations"];export{a as AllAnimations,g as CSSSlideDown,S as CSSSlideRight,d as Collapse,l as Fade,o as InteractiveToggle,y as Scale,u as SlideDown,c as SlideLeft,m as SlideRight,p as SlideUp,I as __namedExportsOrder,U as default};
