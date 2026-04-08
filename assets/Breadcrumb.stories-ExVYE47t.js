import{j as p}from"./iframe-Dr-9ywM0.js";import{B as d}from"./Breadcrumb-DJMUcmia.js";import"./preload-helper-PPVm8Dsz.js";import"./InternalLink-Drux8FmS.js";import"./useOperationLog-0HvfpEDm.js";import"./Icon-B4-Rqhyi.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";const O={title:"ナビゲーション/パンくず/Breadcrumb",component:d,tags:["autodocs"],decorators:[m=>p.jsx("div",{className:"p-4",children:p.jsx(m,{})})],parameters:{layout:"padded"},argTypes:{items:{description:"パンくずの項目（label, href, tooltip, size）",control:"object"},separator:{description:"セパレータ文字",control:"text"},className:{description:"カスタムクラス（breadcrumb-in-headerでヘッダー内スタイル）",control:"text"},colorTheme:{description:"カラーテーマ（現在は未使用）",control:"text"},primaryContrastText:{description:"プライマリコントラストテキスト色（ヘッダー内で使用）",control:"color"}}},e={args:{items:[{label:"HOME",href:"/"},{label:"カテゴリ",href:"/category"},{label:"現在のページ",href:"/category/current"}]}},r={args:{items:[{label:"HOME",href:"/"},{label:"アンケート一覧",href:"/surveys"}]}},a={args:{items:[{label:"HOME",href:"/"},{label:"カテゴリ1",href:"/category1"},{label:"カテゴリ2",href:"/category1/category2"},{label:"カテゴリ3",href:"/category1/category2/category3"},{label:"現在のページ",href:"/category1/category2/category3/current"}]}},s={args:{items:[{label:"HOME",href:"/",tooltip:"トップページに戻る"},{label:"配下メンバー一覧",href:"/employees",tooltip:"配下メンバーの一覧ページ"},{label:"田中太郎",href:"/employees/123",tooltip:"田中太郎さんの詳細ページ"}]}},o={args:{items:[{label:"HOME",href:"/"},{label:"カテゴリ",href:"/category"},{label:"現在のページ",href:"/category/current"}],separator:"/"}},t={args:{items:[{label:"HOME",href:"/"},{label:"アンケート一覧",href:"/surveys"},{label:"アンケート回答",href:"/surveys/123"}],className:"breadcrumb-in-header"},decorators:[m=>p.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 p-4",children:p.jsx(m,{})})]},n={args:{items:[{label:"HOME",href:"/"},{label:"非常に長いカテゴリ名が表示される場合のテスト",href:"/category"},{label:"現在の非常に長いページ名が表示される場合のテスト",href:"/category/current"}]}},l={args:{items:[{label:"HOME",href:"/"}]}},c={args:{items:[{label:"HOME",href:"/"},{label:"配下メンバー一覧",href:"/employees"},{label:"田中太郎",href:"/employees/123"}]}},i={args:{items:[{label:"HOME",href:"/"},{label:"アンケート一覧",href:"/surveys"},{label:"2024年度 メンバー満足度調査",href:"/surveys/456"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'カテゴリ',
      href: '/category'
    }, {
      label: '現在のページ',
      href: '/category/current'
    }]
  }
}`,...e.parameters?.docs?.source},description:{story:"デフォルトのパンくずリスト",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'アンケート一覧',
      href: '/surveys'
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:"2階層のパンくずリスト",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'カテゴリ1',
      href: '/category1'
    }, {
      label: 'カテゴリ2',
      href: '/category1/category2'
    }, {
      label: 'カテゴリ3',
      href: '/category1/category2/category3'
    }, {
      label: '現在のページ',
      href: '/category1/category2/category3/current'
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"深い階層のパンくずリスト",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/',
      tooltip: 'トップページに戻る'
    }, {
      label: '配下メンバー一覧',
      href: '/employees',
      tooltip: '配下メンバーの一覧ページ'
    }, {
      label: '田中太郎',
      href: '/employees/123',
      tooltip: '田中太郎さんの詳細ページ'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"ツールチップ付き",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'カテゴリ',
      href: '/category'
    }, {
      label: '現在のページ',
      href: '/category/current'
    }],
    separator: '/'
  }
}`,...o.parameters?.docs?.source},description:{story:"カスタムセパレータ",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'アンケート一覧',
      href: '/surveys'
    }, {
      label: 'アンケート回答',
      href: '/surveys/123'
    }],
    className: 'breadcrumb-in-header'
  },
  decorators: [(Story: StoryFn) => <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
        <Story />
      </div>]
}`,...t.parameters?.docs?.source},description:{story:"ヘッダー内での表示（白色テーマ）",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: '非常に長いカテゴリ名が表示される場合のテスト',
      href: '/category'
    }, {
      label: '現在の非常に長いページ名が表示される場合のテスト',
      href: '/category/current'
    }]
  }
}`,...n.parameters?.docs?.source},description:{story:"長いラベル名",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:"単一項目（HOMEのみ）",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: '配下メンバー一覧',
      href: '/employees'
    }, {
      label: '田中太郎',
      href: '/employees/123'
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:"実際の使用例：回答詳細",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'HOME',
      href: '/'
    }, {
      label: 'アンケート一覧',
      href: '/surveys'
    }, {
      label: '2024年度 メンバー満足度調査',
      href: '/surveys/456'
    }]
  }
}`,...i.parameters?.docs?.source},description:{story:"実際の使用例：アンケート回答",...i.parameters?.docs?.description}}};const M=["Default","TwoLevels","DeepHierarchy","WithTooltips","CustomSeparator","InHeader","LongLabels","SingleItem","EmployeeDetailExample","SurveyInputExample"];export{o as CustomSeparator,a as DeepHierarchy,e as Default,c as EmployeeDetailExample,t as InHeader,n as LongLabels,l as SingleItem,i as SurveyInputExample,r as TwoLevels,s as WithTooltips,M as __namedExportsOrder,O as default};
