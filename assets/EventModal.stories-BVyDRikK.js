import{j as r}from"./iframe-BMSfDgIj.js";import{E as m}from"./EventModal-CEcSbxll.js";import{P as s,c as d,g as c}from"./calendar-uqGAOjJp.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-D0sl3IDC.js";import"./Icon-CBudCql_.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-D14QlRPA.js";import"./FormField-YElI_JuU.js";import"./Input-D9T9KFal.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-Bul34_Ph.js";import"./Select-C_Qia4wO.js";import"./index-CrMTknHO.js";import"./index-B32KuZlo.js";import"./Checkbox-BfYe4DDD.js";import"./DatePicker-V3kgXMtQ.js";import"./Calendar-_qrQr9H3.js";import"./Breadcrumb-DoSCFJ4I.js";import"./InternalLink-Du5YnUU2.js";import"./ActionBreadcrumb-C4Nlo33b.js";import"./Dropdown-CZtOmObD.js";import"./Animated-aChiamjf.js";import"./animations-BTPozNpH.js";import"./proxy-C00ARwc7.js";import"./Box-CjB8vo9k.js";import"./Stack-DzJha-0A.js";import"./Text-DQKbO_D6.js";import"./colors-BiHXYRGc.js";import"./TextArea-CY8p577q.js";import"./Radio-DhRtfUps.js";import"./Toggle-bxlI07y3.js";import"./Slider-B9psd0IR.js";import"./Badge-BjhTKeH7.js";import"./Progress-DMpuI8FU.js";import"./StatisticItem-gv-G-jVj.js";import"./Tooltip-DfTTDb7Q.js";import"./CountdownRing-Bh2IHnqz.js";import"./FileLink-DMSanXTl.js";import"./BackgroundImage-BjAPrxfz.js";import"./Media-CAgp0CVW.js";import"./ResponsiveContainer-BZMkF7z2.js";import"./MathView-Cf3lvxIQ.js";import"./TimeSlotRow-BxzQC9-A.js";import"./NumberTicker-DdbtoAXe.js";import"./use-in-view-9pVCs3Is.js";import"./MenuItem-D4jatSsa.js";import"./TabBar-DtVc4PiQ.js";import"./IconButton-CrcRdINQ.js";import"./Tabs-BUQ34wuj.js";import"./StarRating-D_qXIHsO.js";import"./StepIndicator-BaOXU117.js";import"./ViewModeToggle-DLac19cn.js";import"./DataCountDisplay-Dj5Qq_Ar.js";import"./TreeView-AHECZ2dg.js";import"./AdjustmentBanner-6crvDbfh.js";import"./DevelopmentBanner-Iqo6ZE2k.js";import"./StatusBar-CiT2ai89.js";import"./QACardList-DMMZ_g8V.js";import"./StatisticList-DnklKH4T.js";import"./ChatFab-Dz40k7ed.js";import"./SurveyCard-BZeaoOUR.js";import"./Button-DAKq5G6-.js";import"./Question-PBZJ8XD4.js";import"./PWAInstallPrompt-3s3W7DcV.js";import"./ColorPicker-BBjpX0pg.js";import"./DayOfWeekPicker-BUpbLAdl.js";import"./EventPopover-Dbp49lux.js";import"./IconLabel-BA7HHd_K.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-CUQlShS2.js";import"./MonthDayCell-Kl6qQe2T.js";import"./MonthEventCard-o1NIapom.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-DRY5uOiN.js";import"./SpanningBar-Y4CM1Ogx.js";import"./TimeSelect-aN1Syi3u.js";import"./CalendarEventCard-C4QVJdrC.js";import"./BackButton-CSSV-ucE.js";import"./ExternalLink-nIryLqfL.js";import"./ReplayButton-B3lR-bQ9.js";import"./ResetButton-3hYgjngJ.js";import"./ScoreBadge-CRUK44XJ.js";import"./Segment-DhWWtD45.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
