import{r as v,j as e}from"./iframe-WnPGq7kF.js";import{S as t}from"./StepIndicator-CLz5-3ru.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-EuWHROt9.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const L={title:"レイアウト/StepIndicator",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{steps:{description:"ステップの配列（label, status, loadingIcon, completedIcon）",control:"object"},title:{description:"タイトル（省略可）",control:"text"},completedColor:{description:"完了ステップの色",control:"select",options:["green","blue","purple","teal"]},activeColor:{description:"進行中ステップの色",control:"select",options:["green","blue","purple","teal","orange"]},className:{description:"カスタムクラス",control:"text"},animated:{description:"アニメーションを有効にする",control:"boolean"}}},u=[{label:"回答",status:"completed"},{label:"分析中",status:"in_progress",loadingIcon:"loading-dna"},{label:"確認",status:"pending"},{label:"完了",status:"pending"}],y=[{label:"注文受付",status:"completed"},{label:"処理中",status:"completed"},{label:"発送済",status:"completed"},{label:"配達完了",status:"completed"}],_=[{label:"入力",status:"in_progress",loadingIcon:"spinner"},{label:"確認",status:"pending"},{label:"完了",status:"pending"}],s={args:{steps:u}},a={args:{steps:u,title:"🔢 ステップインジケーター"}},l={args:{steps:y,title:"📦 配送状況"}},o={args:{steps:_,title:"📝 入力フォーム"}},r={args:{steps:u,title:"🎨 カスタムカラー",completedColor:"purple",activeColor:"orange"}},n={args:{steps:u,title:"🌊 Teal/Blue",completedColor:"teal",activeColor:"blue"}},i={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(t,{title:"🧬 DNA",steps:[{label:"完了",status:"completed"},{label:"分析中",status:"in_progress",loadingIcon:"loading-dna"},{label:"待機",status:"pending"}]}),e.jsx(t,{title:"🌀 Orbit",steps:[{label:"完了",status:"completed"},{label:"処理中",status:"in_progress",loadingIcon:"loading-orbit"},{label:"待機",status:"pending"}]}),e.jsx(t,{title:"⚛️ Atom",steps:[{label:"完了",status:"completed"},{label:"計算中",status:"in_progress",loadingIcon:"loading-atom"},{label:"待機",status:"pending"}]}),e.jsx(t,{title:"⚙️ Gears",steps:[{label:"完了",status:"completed"},{label:"構築中",status:"in_progress",loadingIcon:"loading-gears"},{label:"待機",status:"pending"}]}),e.jsx(t,{title:"📡 Ripple",steps:[{label:"完了",status:"completed"},{label:"送信中",status:"in_progress",loadingIcon:"loading-ripple"},{label:"待機",status:"pending"}]})]})},p={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(t,{title:"📦 注文状況",steps:[{label:"注文受付",status:"completed"},{label:"決済完了",status:"completed"},{label:"発送準備",status:"in_progress",loadingIcon:"loading-gears"},{label:"配送中",status:"pending"},{label:"配達完了",status:"pending"}],completedColor:"teal",activeColor:"orange"}),e.jsx(t,{title:"📝 会員登録",steps:[{label:"基本情報",status:"completed"},{label:"詳細情報",status:"in_progress",loadingIcon:"spinner"},{label:"確認",status:"pending"},{label:"完了",status:"pending"}],completedColor:"blue",activeColor:"blue"}),e.jsx(t,{title:"🔬 データ分析",steps:[{label:"データ取得",status:"completed"},{label:"前処理",status:"completed"},{label:"分析中",status:"in_progress",loadingIcon:"loading-dna"},{label:"レポート生成",status:"pending"}],completedColor:"purple",activeColor:"blue"}),e.jsx(t,{title:"📋 タスク進捗",steps:[{label:"要件定義",status:"completed"},{label:"設計",status:"completed"},{label:"実装中",status:"in_progress",loadingIcon:"loading-cube3d"},{label:"テスト",status:"pending"},{label:"リリース",status:"pending"}],completedColor:"green",activeColor:"blue"})]})},c={render:function(){const S=["データ取得","前処理","分析中","レポート生成","完了"],[C,I]=v.useState(0);v.useEffect(()=>{const g=setInterval(()=>{I(m=>(m+1)%(S.length+1))},2e3);return()=>clearInterval(g)},[]);const x=S.map((g,m)=>{let b="pending";return m<C?b="completed":m===C&&(b="in_progress"),{label:g,status:b,loadingIcon:"loading-dna"}});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-fluid-sm text-gray-600",children:"自動的にステップが進行します（2秒ごと）"}),e.jsx(t,{title:"🎬 アニメーションデモ",steps:x,completedColor:"green",activeColor:"blue",animated:!0}),e.jsx("button",{onClick:()=>I(0),className:"px-4 py-2 text-fluid-sm bg-blue-500 text-white rounded hover:bg-blue-600",children:"リセット"})]})}},d={args:{steps:u,title:"⏸️ アニメーション無効",animated:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  }
}`,...s.parameters?.docs?.source},description:{story:"基本的な使用例",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    title: '🔢 ステップインジケーター'
  }
}`,...a.parameters?.docs?.source},description:{story:"タイトル付き",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: allCompletedSteps,
    title: '📦 配送状況'
  }
}`,...l.parameters?.docs?.source},description:{story:"すべて完了",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: firstStepSteps,
    title: '📝 入力フォーム'
  }
}`,...o.parameters?.docs?.source},description:{story:"最初のステップが進行中",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    title: '🎨 カスタムカラー',
    completedColor: 'purple',
    activeColor: 'orange'
  }
}`,...r.parameters?.docs?.source},description:{story:"カスタムカラー - Purple/Orange",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    title: '🌊 Teal/Blue',
    completedColor: 'teal',
    activeColor: 'blue'
  }
}`,...n.parameters?.docs?.source},description:{story:"カスタムカラー - Teal/Blue",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <StepIndicator title="🧬 DNA" steps={[{
      label: '完了',
      status: 'completed'
    }, {
      label: '分析中',
      status: 'in_progress',
      loadingIcon: 'loading-dna'
    }, {
      label: '待機',
      status: 'pending'
    }]} />
      <StepIndicator title="🌀 Orbit" steps={[{
      label: '完了',
      status: 'completed'
    }, {
      label: '処理中',
      status: 'in_progress',
      loadingIcon: 'loading-orbit'
    }, {
      label: '待機',
      status: 'pending'
    }]} />
      <StepIndicator title="⚛️ Atom" steps={[{
      label: '完了',
      status: 'completed'
    }, {
      label: '計算中',
      status: 'in_progress',
      loadingIcon: 'loading-atom'
    }, {
      label: '待機',
      status: 'pending'
    }]} />
      <StepIndicator title="⚙️ Gears" steps={[{
      label: '完了',
      status: 'completed'
    }, {
      label: '構築中',
      status: 'in_progress',
      loadingIcon: 'loading-gears'
    }, {
      label: '待機',
      status: 'pending'
    }]} />
      <StepIndicator title="📡 Ripple" steps={[{
      label: '完了',
      status: 'completed'
    }, {
      label: '送信中',
      status: 'in_progress',
      loadingIcon: 'loading-ripple'
    }, {
      label: '待機',
      status: 'pending'
    }]} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"様々なローディングアイコン",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {/* 注文プロセス */}
      <StepIndicator title="📦 注文状況" steps={[{
      label: '注文受付',
      status: 'completed'
    }, {
      label: '決済完了',
      status: 'completed'
    }, {
      label: '発送準備',
      status: 'in_progress',
      loadingIcon: 'loading-gears'
    }, {
      label: '配送中',
      status: 'pending'
    }, {
      label: '配達完了',
      status: 'pending'
    }]} completedColor="teal" activeColor="orange" />

      {/* フォームウィザード */}
      <StepIndicator title="📝 会員登録" steps={[{
      label: '基本情報',
      status: 'completed'
    }, {
      label: '詳細情報',
      status: 'in_progress',
      loadingIcon: 'spinner'
    }, {
      label: '確認',
      status: 'pending'
    }, {
      label: '完了',
      status: 'pending'
    }]} completedColor="blue" activeColor="blue" />

      {/* データ処理 */}
      <StepIndicator title="🔬 データ分析" steps={[{
      label: 'データ取得',
      status: 'completed'
    }, {
      label: '前処理',
      status: 'completed'
    }, {
      label: '分析中',
      status: 'in_progress',
      loadingIcon: 'loading-dna'
    }, {
      label: 'レポート生成',
      status: 'pending'
    }]} completedColor="purple" activeColor="blue" />

      {/* タスク進捗 */}
      <StepIndicator title="📋 タスク進捗" steps={[{
      label: '要件定義',
      status: 'completed'
    }, {
      label: '設計',
      status: 'completed'
    }, {
      label: '実装中',
      status: 'in_progress',
      loadingIcon: 'loading-cube3d'
    }, {
      label: 'テスト',
      status: 'pending'
    }, {
      label: 'リリース',
      status: 'pending'
    }]} completedColor="green" activeColor="blue" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"実践的なユースケース",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function AnimationDemoStory() {
    const stepLabels = ['データ取得', '前処理', '分析中', 'レポート生成', '完了'];
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % (stepLabels.length + 1));
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    const steps: Step[] = stepLabels.map((label, index) => {
      let status: StepStatus = 'pending';
      if (index < currentStep) {
        status = 'completed';
      } else if (index === currentStep) {
        status = 'in_progress';
      }
      return {
        label,
        status,
        loadingIcon: 'loading-dna'
      };
    });
    return <div className="space-y-4">
        <p className="text-fluid-sm text-gray-600">
          自動的にステップが進行します（2秒ごと）
        </p>
        <StepIndicator title="🎬 アニメーションデモ" steps={steps} completedColor="green" activeColor="blue" animated={true} />
        <button onClick={() => setCurrentStep(0)} className="px-4 py-2 text-fluid-sm bg-blue-500 text-white rounded hover:bg-blue-600">
          リセット
        </button>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"アニメーションデモ - 自動進行",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    title: '⏸️ アニメーション無効',
    animated: false
  }
}`,...d.parameters?.docs?.source},description:{story:"アニメーション無効",...d.parameters?.docs?.description}}};const B=["Default","WithTitle","AllCompleted","FirstStep","CustomColors","TealBlue","VariousLoadingIcons","UseCases","AnimationDemo","NoAnimation"];export{l as AllCompleted,c as AnimationDemo,r as CustomColors,s as Default,o as FirstStep,d as NoAnimation,n as TealBlue,p as UseCases,i as VariousLoadingIcons,a as WithTitle,B as __namedExportsOrder,L as default};
