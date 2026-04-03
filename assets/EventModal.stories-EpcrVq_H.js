import{j as r}from"./iframe-C6Pnx79y.js";import{E as m}from"./EventModal-UM1kZp-l.js";import{P as s,c as d,g as c}from"./calendar-B3PfjoGj.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-BDaQqOf5.js";import"./Icon-BgpW1Y_U.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-CdsvrfTV.js";import"./FormField-_jwbNCGv.js";import"./Input-Bl5hBXoy.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-C23XF6t6.js";import"./Select-b33FgvIV.js";import"./index-BgNVrGVO.js";import"./index-D2DJS6H9.js";import"./Checkbox-CUCP3YeN.js";import"./DatePicker-CZE6DTpV.js";import"./Calendar-CgtXqGih.js";import"./Breadcrumb-_BFUkvLr.js";import"./InternalLink-CIERJzSX.js";import"./ActionBreadcrumb-Cz7ypVBP.js";import"./Dropdown-DztrMhN4.js";import"./Animated-CSii0HvZ.js";import"./animations-BTPozNpH.js";import"./proxy-DDVW2KvN.js";import"./Box-xVPORf1-.js";import"./Stack-vHSP9bRC.js";import"./Text-Bt5ju5yX.js";import"./colors-BiHXYRGc.js";import"./TextArea-D5UY2Xix.js";import"./Radio-iYHZr8EM.js";import"./Toggle-CV7W8K6l.js";import"./Slider-BGwU1oJk.js";import"./Badge-BxP4PyCG.js";import"./Progress-BHMf8eLj.js";import"./StatisticItem-CxT5h73k.js";import"./Tooltip-D9fMqCfy.js";import"./CountdownRing-BdIH6IQj.js";import"./FileLink-pgA-Twku.js";import"./BackgroundImage-pcRHtS8s.js";import"./Media-B2uvLlgK.js";import"./ResponsiveContainer-DLWYmBEc.js";import"./MathView-CF8sSaNU.js";import"./TimeSlotRow-CRItQWQo.js";import"./NumberTicker-Bi-q7pZd.js";import"./use-in-view-BOoJYUqd.js";import"./MenuItem-B8F4gZOa.js";import"./TabBar-C-oAfb9t.js";import"./IconButton-Br3xTIjl.js";import"./Tabs-fwqSs6Op.js";import"./StarRating-B-Cj29Rb.js";import"./StepIndicator-PMrFpHXR.js";import"./ViewModeToggle-bDdkPgrV.js";import"./DataCountDisplay-D_GcgR52.js";import"./TreeView-CIdd_uw9.js";import"./AdjustmentBanner-t4pI2PTu.js";import"./DevelopmentBanner-DZSeyBC-.js";import"./StatusBar-3xldpHTO.js";import"./QACardList-D3BQmyAj.js";import"./StatisticList-BNKg5yNp.js";import"./ChatFab-BHouxoGp.js";import"./SurveyCard-CPXvNxs4.js";import"./Button-BT_mbMa8.js";import"./Question-C-VevdLx.js";import"./PWAInstallPrompt-BRLVrds7.js";import"./ColorPicker-CzxmQSB2.js";import"./DayOfWeekPicker-DaVvGhzd.js";import"./EventPopover-BF1moNFZ.js";import"./IconLabel-CERwfKfY.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-khfm56Ni.js";import"./MonthDayCell-ByvgtGwW.js";import"./MonthEventCard-wJ1uQ_pN.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-BNT87jdh.js";import"./SpanningBar-ClN3ylk4.js";import"./TimeSelect-SJiocisy.js";import"./CalendarEventCard-D2Vl_Vjl.js";import"./BackButton-BP2LJQfO.js";import"./ExternalLink-Cw79Ybwg.js";import"./ReplayButton-COtoyMGj.js";import"./ResetButton-Y-kUzNaY.js";import"./ScoreBadge-BY4TAFVA.js";import"./Segment-ZeuLyyvi.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
