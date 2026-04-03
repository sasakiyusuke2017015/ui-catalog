import{j as r}from"./iframe-CEBuvpRZ.js";import{E as m}from"./EventModal-CAJWyCpQ.js";import{P as s,c as d,g as c}from"./calendar-5KXmLTkS.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-OXkEVJj5.js";import"./Icon-DDCqB1fE.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-2t8G3oxk.js";import"./FormField-nzhYSWEQ.js";import"./Input-iyBSe8dx.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-RK80_4z8.js";import"./Select-CocRAkzQ.js";import"./index-BvtWZd3u.js";import"./index-CGjmC7Cz.js";import"./Checkbox-B-sv2F6N.js";import"./DatePicker-GpzYyQot.js";import"./Calendar-BgEVtNI1.js";import"./Breadcrumb-C_dSDJNu.js";import"./InternalLink-DraAGGt0.js";import"./ActionBreadcrumb-CgGeVXVL.js";import"./Dropdown-Dz5ouOym.js";import"./Animated--HV5nEw9.js";import"./animations-BTPozNpH.js";import"./proxy-Cplsz-PG.js";import"./Box-DGjd2Cnr.js";import"./Stack-B1En0W7i.js";import"./Text-BkWkeur6.js";import"./colors-BiHXYRGc.js";import"./TextArea-DstfiwKd.js";import"./Radio-CT34xL30.js";import"./Toggle-CONyTLTG.js";import"./Slider-Cfsmrto4.js";import"./Badge-B3htB1ji.js";import"./Progress-CgkElaus.js";import"./StatisticItem-02TPZkwC.js";import"./Tooltip-BPb1I_F1.js";import"./CountdownRing-BUtkgFcb.js";import"./FileLink-DcgCpuEe.js";import"./BackgroundImage-DYTkaYs0.js";import"./Media-CaYaL0Na.js";import"./ResponsiveContainer-BNI2pZlu.js";import"./MathView-BCCvj8no.js";import"./TimeSlotRow-CvqCSLw5.js";import"./NumberTicker-BNyvq1Tb.js";import"./use-in-view-CZZEBu7s.js";import"./MenuItem-DrPOcBgR.js";import"./TabBar-PxHok_rF.js";import"./IconButton-DUS5gmNh.js";import"./Tabs-BZjPnPi9.js";import"./StarRating-ughboWfM.js";import"./StepIndicator-DSC2Kvdl.js";import"./ViewModeToggle-BaezwvCM.js";import"./DataCountDisplay-Ceee5ZWt.js";import"./TreeView-CeMiKo8K.js";import"./AdjustmentBanner-Qm5TM9DQ.js";import"./DevelopmentBanner-B8qjuz4p.js";import"./StatusBar-jouHNGV8.js";import"./QACardList-ChzSKdRe.js";import"./StatisticList-DOpIsOfZ.js";import"./ChatFab-DG6Shf6i.js";import"./SurveyCard-tl_lscAU.js";import"./Button-Bh4T_deB.js";import"./Question-DHfxAWEk.js";import"./PWAInstallPrompt-EwS3Ucar.js";import"./ColorPicker-BrAs2kca.js";import"./DayOfWeekPicker-CebgIF6A.js";import"./EventPopover-B9cP6sjE.js";import"./IconLabel-DKeqOyYx.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-DbGyE-rg.js";import"./MonthDayCell-D5Aic0-c.js";import"./MonthEventCard-Be_CszEp.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-2zr57jl3.js";import"./SpanningBar-Ce-DeAMx.js";import"./TimeSelect-DoYWMora.js";import"./CalendarEventCard-C4A292ZS.js";import"./BackButton-BnqSGc3H.js";import"./ExternalLink-CyLAdUj_.js";import"./ReplayButton-BqBlms7M.js";import"./ResetButton-Cusv-V6e.js";import"./ScoreBadge-JD5tYzkP.js";import"./Segment-CQzbYdRv.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ut=["CreateNew","EditExisting","WithTimeRange"];export{i as CreateNew,n as EditExisting,p as WithTimeRange,Ut as __namedExportsOrder,Qt as default};
