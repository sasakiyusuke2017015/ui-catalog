import{j as r}from"./iframe-TXWPROLT.js";import{E as m}from"./EventModal-4I3m1n2b.js";import{P as s,c as d,g as c}from"./calendar-DvnAj4vC.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-6QgDhZhe.js";import"./Icon-BAgtC89S.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-DYWS8_Wv.js";import"./FormField-B202xaRN.js";import"./Input-COUADsKy.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-ere6pV79.js";import"./Select-CGZTtdve.js";import"./index-1YYzXfN0.js";import"./index-ChO323oZ.js";import"./Checkbox-BYmoe__E.js";import"./DatePicker-DTB6DELT.js";import"./Calendar-Dvg0Yzvl.js";import"./Breadcrumb-DVTFU7M-.js";import"./InternalLink-CpqQujuu.js";import"./ActionBreadcrumb-BET5d_xt.js";import"./Dropdown-CyjPGL4y.js";import"./Animated-BwLJOKdZ.js";import"./animations-BTPozNpH.js";import"./proxy-DqMlivr5.js";import"./Box-Cv0h_QA8.js";import"./Stack-8fCC3NL3.js";import"./Text-BCWcrxL8.js";import"./colors-BiHXYRGc.js";import"./TextArea-DgjJ2mZM.js";import"./Radio-Ci2ELWs7.js";import"./Toggle-fv4RrgL4.js";import"./Slider-De3DlAEc.js";import"./Badge-8Ko0ZfF5.js";import"./Progress-DyJr8mRe.js";import"./StatisticItem-ImxaGc_X.js";import"./Tooltip-DtfOgDBs.js";import"./CountdownRing-B6Dlm06e.js";import"./FileLink-Cb60qrKb.js";import"./BackgroundImage-DmreIbxb.js";import"./Media-D58eFTNW.js";import"./ResponsiveContainer-CyDAtJ0z.js";import"./MathView-BMSpTPON.js";import"./TimeSlotRow-DwfbN_VV.js";import"./NumberTicker-K6BoeYbs.js";import"./use-in-view-Cs8NelHd.js";import"./MenuItem-CP1u9HH6.js";import"./TabBar-j-kDTSqW.js";import"./IconButton-B4LZ7B4G.js";import"./Tabs-CWodjJTj.js";import"./StarRating-DLzRK-Nt.js";import"./StepIndicator-HBQVeshK.js";import"./ViewModeToggle-Cnu13aQQ.js";import"./DataCountDisplay-DsaCRcIm.js";import"./TreeView-BFCDZyS8.js";import"./AdjustmentBanner-CtNMFde6.js";import"./DevelopmentBanner-Dr2f-Z3h.js";import"./StatusBar-mgdKzm0f.js";import"./QACardList-CSUhVS7l.js";import"./StatisticList-Yyxip1Wm.js";import"./ChatFab-ClGhZU6g.js";import"./SurveyCard-Oox2XvuI.js";import"./Button-DxjadS22.js";import"./Question-Cbef3Y_v.js";import"./PWAInstallPrompt-Dwk3soG1.js";import"./ColorPicker-L03h8zJi.js";import"./DayOfWeekPicker-YxaimJxH.js";import"./EventPopover-Di6tLzmW.js";import"./IconLabel-BvR4x20W.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-BVKrVawV.js";import"./MonthDayCell-DmtYePyf.js";import"./MonthEventCard-ziAjaM6O.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-CgLXC8xF.js";import"./SpanningBar-CfqvkGme.js";import"./TimeSelect-Bo8-lHgg.js";import"./CalendarEventCard-DiTxQQcM.js";import"./BackButton-C6zc44MS.js";import"./ExternalLink-BOmv3fFi.js";import"./ReplayButton-Corsvhux.js";import"./ResetButton-EyGZIg3e.js";import"./ScoreBadge-Bz1huLCa.js";import"./Segment-QlI3-U2t.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
