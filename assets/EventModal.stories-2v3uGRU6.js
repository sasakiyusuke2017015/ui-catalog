import{j as r}from"./iframe-Dq39NNb-.js";import{E as m}from"./EventModal-DqvX4kQU.js";import{P as s,c as d,g as c}from"./calendar-D-CiF-pt.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-301Gz4Qo.js";import"./Icon-CkCT-6lM.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-vl6ZrXq1.js";import"./FormField-CUtEz6t6.js";import"./Input-C5i4Rus9.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-BwmAcIXi.js";import"./Select-Bn_gyufF.js";import"./index-D9nu_x0-.js";import"./index-nak_duPe.js";import"./Checkbox-BvxaBQwh.js";import"./DatePicker-cOm_m6rp.js";import"./Calendar-DyUzZPZP.js";import"./Breadcrumb-DpKR2Uuo.js";import"./InternalLink-B3XI4hr_.js";import"./ActionBreadcrumb-CeB1Xcz2.js";import"./Dropdown-ClB8SsB7.js";import"./Animated-Ber5mbk5.js";import"./animations-BTPozNpH.js";import"./proxy-DXPfaw0e.js";import"./Box-mAWrM8_0.js";import"./Stack-CcOo7IG-.js";import"./Text-CvQ7oSKz.js";import"./colors-BiHXYRGc.js";import"./TextArea-D0CAfwHN.js";import"./Radio-wBLXo441.js";import"./Toggle-CsNBqbU-.js";import"./Slider-CwE53xGx.js";import"./Badge-DGJY6HIn.js";import"./Progress-CpUE3ZYn.js";import"./StatisticItem-Di1Bm067.js";import"./Tooltip-DR0vGtRy.js";import"./CountdownRing-D45UkSbi.js";import"./FileLink-Ba1UWzMV.js";import"./BackgroundImage-Crpr9hfV.js";import"./Media-CagLxyrl.js";import"./ResponsiveContainer-DNBVjeVF.js";import"./MathView-B8jHrRw3.js";import"./TimeSlotRow-Dtt7d18Y.js";import"./NumberTicker-w8xE-bSE.js";import"./use-in-view-DoK-Ugua.js";import"./MenuItem-DkBRXHDH.js";import"./TabBar-BK5EOW6p.js";import"./IconButton-B7CTF4du.js";import"./Tabs-CjrlXZjf.js";import"./StarRating-BuG7Q4Tn.js";import"./StepIndicator-Bhb1Pj_x.js";import"./ViewModeToggle-BNLAZNzA.js";import"./DataCountDisplay-elhF25gB.js";import"./TreeView-DKE5EIMz.js";import"./AdjustmentBanner-B-wq3vic.js";import"./DevelopmentBanner-DUHVb-B2.js";import"./StatusBar-C6f4e4I3.js";import"./QACardList-0h2FPVG_.js";import"./StatisticList-BrWtCsps.js";import"./ChatFab-2QwpCROI.js";import"./SurveyCard-DPscEcQD.js";import"./Button-CL7vmwqq.js";import"./Question-ChpP-Siy.js";import"./PWAInstallPrompt-C_tOttxw.js";import"./ColorPicker-B-Gz2ZEJ.js";import"./DayOfWeekPicker-R4BrfjBH.js";import"./EventPopover-C15L68v9.js";import"./IconLabel-CkwJAnxG.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-B0lM8sdh.js";import"./MonthDayCell-Buv9X4N3.js";import"./MonthEventCard-BUh5vZFg.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-jcYMthAb.js";import"./SpanningBar-9J9rbxc0.js";import"./TimeSelect-zNAYdfCj.js";import"./CalendarEventCard-CCG92pju.js";import"./BackButton-BzR3ZwwX.js";import"./ExternalLink-Cq7CS_2y.js";import"./ReplayButton-SyITeaeA.js";import"./ResetButton-byq9dPge.js";import"./ScoreBadge-Pz6FtATh.js";import"./Segment-DiCkZroi.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
