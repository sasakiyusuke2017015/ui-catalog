import{j as r}from"./iframe-DM_a6nxx.js";import{E as m}from"./EventModal-D67uZu_e.js";import{P as s,c as d,g as c}from"./calendar-YVAZtuSR.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-6Pjb_3Em.js";import"./Icon-DF4Bw8wy.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-DWx8Qfr8.js";import"./FormField-CpCquZnw.js";import"./Input-ByaPDiUh.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-f-Pp0SI5.js";import"./Select-ZNszdBFU.js";import"./index-DYAnbN2j.js";import"./index-BM82MMPn.js";import"./Checkbox-CAnjZxVd.js";import"./DatePicker-35iCj4o5.js";import"./Calendar-COhFGBq0.js";import"./Breadcrumb-DB_ckfHG.js";import"./InternalLink-DPaUemLX.js";import"./ActionBreadcrumb-B1l9s6w3.js";import"./NavItem-DjfMZmAZ.js";import"./Animated-BMUee4rA.js";import"./animations-BTPozNpH.js";import"./proxy-BsJSIX6K.js";import"./Box-DRhooCAy.js";import"./Stack-bXPOuHYl.js";import"./Text-DuQtDyC4.js";import"./TextArea-DmKo8TL8.js";import"./Radio-DqS5TBeh.js";import"./Toggle-CgUyw4lD.js";import"./Slider-exE4m62S.js";import"./Badge-Dc7mBWaG.js";import"./Progress-B8GtlAlN.js";import"./StatisticItem-Bp6UzDgZ.js";import"./Tooltip-CjUCHIl-.js";import"./FileLink-rhY7HWwy.js";import"./BackgroundImage-B2NOpbKb.js";import"./Media-CzLvIFRM.js";import"./ResponsiveContainer-nBuWrix0.js";import"./CountdownRing-yCON4psc.js";import"./MathView-COnWTUnx.js";import"./TimeSlotRow-DuJ_5IFM.js";import"./NumberTicker-DJ8ODXyR.js";import"./use-in-view-BjKXu7hy.js";import"./MenuItem-mJNutxAu.js";import"./TabBar-Dd6t6pjb.js";import"./IconButton-Cpe8Z2Qw.js";import"./Tabs-C2n_W2r9.js";import"./StarRating-Bak9kC61.js";import"./StepIndicator-C8toJbAT.js";import"./ViewModeToggle-D48dkPO0.js";import"./index-BP3Unbov.js";import"./DataCountDisplay-Bd9d3kJh.js";import"./TreeView-DqOAPn_i.js";import"./AdjustmentBanner-BZ8cRWuY.js";import"./DevelopmentBanner-C3VO7950.js";import"./StatusBar-DJ9Crmq4.js";import"./QACardList-Cj04lxn-.js";import"./StatisticList-CA9Y1Kwy.js";import"./ChatFab-BphbHYfG.js";import"./SurveyCard-DQwBbYyG.js";import"./Button-BE5_20mz.js";import"./Question-B87ncgpp.js";import"./PWAInstallPrompt-BFuwZb-1.js";import"./ColorPicker-DEI51WU0.js";import"./DayOfWeekPicker-Ct7hu4ed.js";import"./colors-BOlDkFam.js";import"./EventPopover-B7c0_wAz.js";import"./IconLabel-DcdHBR2Z.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-btq9nLHg.js";import"./MonthDayCell-cU8bS7De.js";import"./MonthEventCard-CbV0XvmH.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-Df6mzEY5.js";import"./SpanningBar-muL4ALBT.js";import"./TimeSelect-BJQdrkOZ.js";import"./CalendarEventCard-CXcbwpBe.js";import"./BackButton-HrT-Bl7F.js";import"./ExternalLink-NuKwuj64.js";import"./ReplayButton-BDVjcRp9.js";import"./ResetButton-BSfNzCJM.js";import"./ScoreBadge-DSzMghZC.js";import"./Segment-Dt2CqlTH.js";import"./repeatUtils-DcqmxUp3.js";const Ut={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithModal();
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const existingEvent: CalendarEvent = {
      id: '1',
      title: 'チームミーティング',
      startTime: new Date(2026, 2, 20, 10, 0),
      endTime: new Date(2026, 2, 20, 11, 0),
      color: '#4f46e5',
      description: 'スプリントの振り返りと次の計画を話し合います。'
    };
    const store = createStoreWithModal({
      date: new Date(2026, 2, 20),
      hour: 10,
      editingEvent: existingEvent
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithModal({
      hour: 14,
      endHour: 16
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};const Vt=["CreateNew","EditExisting","WithTimeRange"];export{i as CreateNew,n as EditExisting,p as WithTimeRange,Vt as __namedExportsOrder,Ut as default};
