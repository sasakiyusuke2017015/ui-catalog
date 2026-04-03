import{j as e}from"./iframe-Cs_9Z8TU.js";import{A as d}from"./Animated-BJVWfofy.js";import{R as s}from"./ReplayButton-Q4dGwU3w.js";import{u as a}from"./useRemountKey-DQTJh6A3.js";import"./preload-helper-PPVm8Dsz.js";import"./animations-BTPozNpH.js";import"./proxy-D4egVNMp.js";import"./Button-CCoJrpRC.js";import"./useOperationLog-5hpxR7Xt.js";import"./Icon-eSRNCMeL.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const R={title:"アニメーション/Card",component:d,parameters:{layout:"padded"},tags:["autodocs"],args:{show:!0,children:null},argTypes:{speed:{control:{type:"range",min:.5,max:3,step:.1},description:"アニメーション速度倍率（1.0 = 通常、2.0 = 2倍速、0.5 = 半分速）"}}},o={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:t,label:"再生"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideRight",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-purple-200 bg-purple-100 p-6 text-center",children:[e.jsxs("div",{className:"text-fluid-2xl font-bold text-purple-700",children:["カード ",n+1]}),e.jsx("div",{className:"mt-2 text-fluid-xs text-purple-600",children:"右からスライド（バウンシー）"})]})},`${r}-${n}`))})]})}},l={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:t,label:"再生"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideDown",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-blue-200 bg-blue-100 p-6 text-center",children:[e.jsxs("div",{className:"text-fluid-2xl font-bold text-blue-700",children:["カード ",n+1]}),e.jsx("div",{className:"mt-2 text-fluid-xs text-blue-600",children:"上からスライド（バウンシー）"})]})},`${r}-${n}`))})]})}},c={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{onClick:t,label:"すべて再生"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"通常速度 (speed = 1.0)"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideRight",index:n,speed:1,children:e.jsxs("div",{className:"rounded-lg border-2 border-purple-200 bg-purple-100 p-4 text-center text-fluid-sm font-bold text-purple-700",children:["カード ",n+1]})},`normal-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"高速 (speed = 2.0)"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideRight",index:n,speed:2,children:e.jsxs("div",{className:"rounded-lg border-2 border-green-200 bg-green-100 p-4 text-center text-fluid-sm font-bold text-green-700",children:["カード ",n+1]})},`fast-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"低速 (speed = 0.5)"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideRight",index:n,speed:.5,children:e.jsxs("div",{className:"rounded-lg border-2 border-orange-200 bg-orange-100 p-4 text-center text-fluid-sm font-bold text-orange-700",children:["カード ",n+1]})},`slow-${r}-${n}`))})]})]})]})}},m={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{onClick:t,label:"すべて再生"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"SlideRight"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideRight",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-purple-200 bg-purple-100 p-4 text-center text-fluid-sm font-bold text-purple-700",children:["カード ",n+1]})},`right-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"SlideDown"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"slideDown",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-blue-200 bg-blue-100 p-4 text-center text-fluid-sm font-bold text-blue-700",children:["カード ",n+1]})},`down-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"FadeIn"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"fadeIn",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-green-200 bg-green-100 p-4 text-center text-fluid-sm font-bold text-green-700",children:["カード ",n+1]})},`fade-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"ScaleUp"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"scaleUp",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-orange-200 bg-orange-100 p-4 text-center text-fluid-sm font-bold text-orange-700",children:["カード ",n+1]})},`scale-${r}-${n}`))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-3 text-fluid-sm font-bold text-gray-700",children:"BounceIn"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"bounceIn",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-pink-200 bg-pink-100 p-4 text-center text-fluid-sm font-bold text-pink-700",children:["カード ",n+1]})},`bounce-${r}-${n}`))})]})]})]})}},x={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:t,label:"再生"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"fadeIn",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-green-200 bg-green-100 p-6 text-center",children:[e.jsxs("div",{className:"text-fluid-2xl font-bold text-green-700",children:["カード ",n+1]}),e.jsx("div",{className:"mt-2 text-fluid-xs text-green-600",children:"フェードイン"})]})},`${r}-${n}`))})]})}},p={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:t,label:"再生"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"scaleUp",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-orange-200 bg-orange-100 p-6 text-center",children:[e.jsxs("div",{className:"text-fluid-2xl font-bold text-orange-700",children:["カード ",n+1]}),e.jsx("div",{className:"mt-2 text-fluid-xs text-orange-600",children:"拡大"})]})},`${r}-${n}`))})]})}},u={render:function(){const{key:r,remount:t}=a();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:t,label:"再生"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[0,1,2].map(n=>e.jsx(d,{show:!0,category:"card",variant:"bounceIn",index:n,children:e.jsxs("div",{className:"rounded-lg border-2 border-pink-200 bg-pink-100 p-6 text-center",children:[e.jsxs("div",{className:"text-fluid-2xl font-bold text-pink-700",children:["カード ",n+1]}),e.jsx("div",{className:"mt-2 text-fluid-xs text-pink-600",children:"バウンス"})]})},`${r}-${n}`))})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function SlideRightStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-4">
        <ReplayButton onClick={remount} label="再生" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map(index => <Animated key={\`\${key}-\${index}\`} show={true} category="card" variant="slideRight" index={index}>
              <div className="rounded-lg border-2 border-purple-200 bg-purple-100 p-6 text-center">
                <div className="text-fluid-2xl font-bold text-purple-700">カード {index + 1}</div>
                <div className="mt-2 text-fluid-xs text-purple-600">右からスライド（バウンシー）</div>
              </div>
            </Animated>)}
        </div>
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Card - SlideRight（デフォルト）",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function SlideDownStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-4">
        <ReplayButton onClick={remount} label="再生" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map(index => <Animated key={\`\${key}-\${index}\`} show={true} category="card" variant="slideDown" index={index}>
              <div className="rounded-lg border-2 border-blue-200 bg-blue-100 p-6 text-center">
                <div className="text-fluid-2xl font-bold text-blue-700">カード {index + 1}</div>
                <div className="mt-2 text-fluid-xs text-blue-600">上からスライド（バウンシー）</div>
              </div>
            </Animated>)}
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Card - SlideDown",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function SpeedComparisonStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-6">
        <ReplayButton onClick={remount} label="すべて再生" />
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">通常速度 (speed = 1.0)</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`normal-\${key}-\${index}\`} show={true} category="card" variant="slideRight" index={index} speed={1.0}>
                  <div className="rounded-lg border-2 border-purple-200 bg-purple-100 p-4 text-center text-fluid-sm font-bold text-purple-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">高速 (speed = 2.0)</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`fast-\${key}-\${index}\`} show={true} category="card" variant="slideRight" index={index} speed={2.0}>
                  <div className="rounded-lg border-2 border-green-200 bg-green-100 p-4 text-center text-fluid-sm font-bold text-green-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">低速 (speed = 0.5)</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`slow-\${key}-\${index}\`} show={true} category="card" variant="slideRight" index={index} speed={0.5}>
                  <div className="rounded-lg border-2 border-orange-200 bg-orange-100 p-4 text-center text-fluid-sm font-bold text-orange-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"Card - Speed 比較",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function AllVariantsStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-6">
        <ReplayButton onClick={remount} label="すべて再生" />
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">SlideRight</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`right-\${key}-\${index}\`} show={true} category="card" variant="slideRight" index={index}>
                  <div className="rounded-lg border-2 border-purple-200 bg-purple-100 p-4 text-center text-fluid-sm font-bold text-purple-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">SlideDown</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`down-\${key}-\${index}\`} show={true} category="card" variant="slideDown" index={index}>
                  <div className="rounded-lg border-2 border-blue-200 bg-blue-100 p-4 text-center text-fluid-sm font-bold text-blue-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">FadeIn</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`fade-\${key}-\${index}\`} show={true} category="card" variant="fadeIn" index={index}>
                  <div className="rounded-lg border-2 border-green-200 bg-green-100 p-4 text-center text-fluid-sm font-bold text-green-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">ScaleUp</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`scale-\${key}-\${index}\`} show={true} category="card" variant="scaleUp" index={index}>
                  <div className="rounded-lg border-2 border-orange-200 bg-orange-100 p-4 text-center text-fluid-sm font-bold text-orange-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-fluid-sm font-bold text-gray-700">BounceIn</h3>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(index => <Animated key={\`bounce-\${key}-\${index}\`} show={true} category="card" variant="bounceIn" index={index}>
                  <div className="rounded-lg border-2 border-pink-200 bg-pink-100 p-4 text-center text-fluid-sm font-bold text-pink-700">
                    カード {index + 1}
                  </div>
                </Animated>)}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Card - 全バリアント比較",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function FadeInStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-4">
        <ReplayButton onClick={remount} label="再生" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map(index => <Animated key={\`\${key}-\${index}\`} show={true} category="card" variant="fadeIn" index={index}>
              <div className="rounded-lg border-2 border-green-200 bg-green-100 p-6 text-center">
                <div className="text-fluid-2xl font-bold text-green-700">カード {index + 1}</div>
                <div className="mt-2 text-fluid-xs text-green-600">フェードイン</div>
              </div>
            </Animated>)}
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Card - FadeIn",...x.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ScaleUpStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-4">
        <ReplayButton onClick={remount} label="再生" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map(index => <Animated key={\`\${key}-\${index}\`} show={true} category="card" variant="scaleUp" index={index}>
              <div className="rounded-lg border-2 border-orange-200 bg-orange-100 p-6 text-center">
                <div className="text-fluid-2xl font-bold text-orange-700">カード {index + 1}</div>
                <div className="mt-2 text-fluid-xs text-orange-600">拡大</div>
              </div>
            </Animated>)}
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Card - ScaleUp",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function BounceInStory() {
    const {
      key,
      remount
    } = useRemountKey();
    return <div className="space-y-4">
        <ReplayButton onClick={remount} label="再生" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map(index => <Animated key={\`\${key}-\${index}\`} show={true} category="card" variant="bounceIn" index={index}>
              <div className="rounded-lg border-2 border-pink-200 bg-pink-100 p-6 text-center">
                <div className="text-fluid-2xl font-bold text-pink-700">カード {index + 1}</div>
                <div className="mt-2 text-fluid-xs text-pink-600">バウンス</div>
              </div>
            </Animated>)}
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Card - BounceIn",...u.parameters?.docs?.description}}};const A=["SlideRight","SlideDown","SpeedComparison","AllVariants","FadeIn","ScaleUp","BounceIn"];export{m as AllVariants,u as BounceIn,x as FadeIn,p as ScaleUp,l as SlideDown,o as SlideRight,c as SpeedComparison,A as __namedExportsOrder,R as default};
