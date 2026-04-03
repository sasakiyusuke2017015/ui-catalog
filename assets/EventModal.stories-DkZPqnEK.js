import{j as r}from"./iframe-BOXgkPL4.js";import{E as m}from"./EventModal-CmDVYbTO.js";import{P as s,c as d,g as c}from"./calendar-Da7EYaVv.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-Cdr6Oe7m.js";import"./Icon-ClaZw29e.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-ClaeX-Nq.js";import"./FormField-BJRGNlsg.js";import"./Input-B59IZFqE.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-DQA0eW05.js";import"./Select-7IIT2Bn1.js";import"./index-XQ1puMiJ.js";import"./index-mZCw7rg-.js";import"./Checkbox-BuKyxA88.js";import"./DatePicker-DwnoWFzR.js";import"./Calendar-B2i02P0X.js";import"./Breadcrumb-DetvV_kv.js";import"./InternalLink-CQftOloX.js";import"./ActionBreadcrumb-DRJxz7El.js";import"./Dropdown-Cw5PjldL.js";import"./Animated-B0fPJduD.js";import"./animations-BTPozNpH.js";import"./proxy-C_C_-I8B.js";import"./Box-BXQ5VFgi.js";import"./Stack-lF-EM4ZJ.js";import"./Text-CnXMCOVn.js";import"./colors-BiHXYRGc.js";import"./TextArea-DlN6mlPm.js";import"./Radio-BLe8fZ0a.js";import"./Toggle-EcyV9_X8.js";import"./Slider-CrU0Xoz0.js";import"./Badge-DJYDUrte.js";import"./Progress-DYelChQE.js";import"./StatisticItem-gJePNlH2.js";import"./Tooltip-CNcxzlue.js";import"./CountdownRing-CdhczVC6.js";import"./FileLink-CcrjIc7S.js";import"./BackgroundImage-CIHDkYiH.js";import"./Media-BButaqnB.js";import"./ResponsiveContainer-_42WTwbJ.js";import"./MathView-BtHcwEYo.js";import"./TimeSlotRow-DA6q7_TK.js";import"./NumberTicker-DAHZtU_G.js";import"./use-in-view-BFofUGFu.js";import"./MenuItem-Dn2ty-wm.js";import"./TabBar-CGZDGU0K.js";import"./IconButton-BRP0MZm3.js";import"./Tabs-DstMHsnK.js";import"./StarRating-Bpfuz0NK.js";import"./StepIndicator-DM-SLVsv.js";import"./ViewModeToggle-C5XrChf1.js";import"./DataCountDisplay-a_1uShmq.js";import"./TreeView-DC2Zcz-D.js";import"./AdjustmentBanner-DYDjd59A.js";import"./DevelopmentBanner-ucLGNC-U.js";import"./StatusBar-D4LGepd5.js";import"./QACardList-DLbT8NOe.js";import"./StatisticList-XXGOccB9.js";import"./ChatFab-BeL0527r.js";import"./SurveyCard-CH5oAQfV.js";import"./Button-MB2eUjJ2.js";import"./Question-Bhg7az_G.js";import"./PWAInstallPrompt-rr6XI5IU.js";import"./ColorPicker-iikE46h7.js";import"./DayOfWeekPicker-PLjg_3jv.js";import"./EventPopover-BxAY2Pvq.js";import"./IconLabel-BXwjMYtl.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-CSEuNkce.js";import"./MonthDayCell-DgMLIGZz.js";import"./MonthEventCard-CewfNZ6G.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-DhATCDyx.js";import"./SpanningBar-P4tuTRSn.js";import"./TimeSelect-BsOuPEGC.js";import"./CalendarEventCard-DM6rCtuO.js";import"./BackButton-DJj47vxr.js";import"./ExternalLink-BrhbI3-W.js";import"./ReplayButton-B5IJxFU_.js";import"./ResetButton-DQ9faspW.js";import"./ScoreBadge-C1FINEqW.js";import"./Segment-MiL4qiA-.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
