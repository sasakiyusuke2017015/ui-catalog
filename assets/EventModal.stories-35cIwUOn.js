import{j as r}from"./iframe-Cs_9Z8TU.js";import{E as m}from"./EventModal-BxXOb5Kf.js";import{P as s,c as d,g as c}from"./calendar-DESKpyLC.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-DArXNbfP.js";import"./Icon-eSRNCMeL.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-BwAXImF_.js";import"./FormField-CESO9jVU.js";import"./Input-DpmxnwV_.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-B3qiNAcl.js";import"./Select-BOSodmfH.js";import"./index-CsXJNw4o.js";import"./index-CesuvOtQ.js";import"./Checkbox-DOXuLyRI.js";import"./DatePicker-Up_K80qj.js";import"./Calendar-Diz7JNmd.js";import"./Breadcrumb-CsDTs4Ir.js";import"./InternalLink-Dntu3rro.js";import"./ActionBreadcrumb-Bq8MumTw.js";import"./Dropdown-DAMHZFRa.js";import"./Animated-BJVWfofy.js";import"./animations-BTPozNpH.js";import"./proxy-D4egVNMp.js";import"./Box-BT2czLCX.js";import"./Stack-CQmcbg1t.js";import"./Text-CRRuBWR2.js";import"./colors-BiHXYRGc.js";import"./TextArea-DzFLi3SC.js";import"./Radio-yP9kiqJR.js";import"./Toggle-BJi5Wtt_.js";import"./Slider-srNKwnT4.js";import"./Badge-CVu7uG2v.js";import"./Progress-Bl1cRs4U.js";import"./StatisticItem-B0GoF13R.js";import"./Tooltip-DOs5xAjW.js";import"./CountdownRing-BDOZokeS.js";import"./FileLink-CSAugkLO.js";import"./BackgroundImage-C94P-fRu.js";import"./Media-DepCBKNv.js";import"./ResponsiveContainer-77j-9OMu.js";import"./MathView-3kmdXuVJ.js";import"./TimeSlotRow-BDLj9vXV.js";import"./NumberTicker-BMg2M2SR.js";import"./use-in-view-DwDhjUE5.js";import"./MenuItem--DRqyjBI.js";import"./TabBar-CvGCnguF.js";import"./IconButton-Pl5B9nCD.js";import"./Tabs-BvV1In3v.js";import"./StarRating-KE9JnSEH.js";import"./StepIndicator-D8onuT8L.js";import"./ViewModeToggle-D6fRUjrl.js";import"./index-DskeSiG9.js";import"./DataCountDisplay-CwBxKnJG.js";import"./TreeView-DLSOfBdJ.js";import"./AdjustmentBanner-aISgp4wF.js";import"./DevelopmentBanner-BZqfrqB7.js";import"./StatusBar-BV4cBZB-.js";import"./QACardList-CsjtjG6r.js";import"./StatisticList-DpgO-5eJ.js";import"./ChatFab-Dh26DXAc.js";import"./SurveyCard-CasNU032.js";import"./Button-CCoJrpRC.js";import"./Question-BHl7mx4z.js";import"./PWAInstallPrompt-CrcmDeZw.js";import"./ColorPicker-C75H_qIJ.js";import"./DayOfWeekPicker-yxva0t5c.js";import"./EventPopover-G2FChWiv.js";import"./IconLabel-DqLFI7ZI.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-BSEitoke.js";import"./MonthDayCell-DWQBUw6d.js";import"./MonthEventCard-CePuqu_R.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-569eD37u.js";import"./SpanningBar-CCjtz_Fj.js";import"./TimeSelect-CEhg9a1I.js";import"./CalendarEventCard-DJFHrZdy.js";import"./BackButton-CTXefRGL.js";import"./ExternalLink-CRAL1HlI.js";import"./ReplayButton-Q4dGwU3w.js";import"./ResetButton-Ce-Xy42M.js";import"./ScoreBadge-Bg99un6o.js";import"./Segment-Db5THuWi.js";import"./repeatUtils-DcqmxUp3.js";const Ut={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
