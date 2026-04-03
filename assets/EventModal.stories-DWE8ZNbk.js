import{j as r}from"./iframe-DWeAzsMr.js";import{E as m}from"./EventModal-JzaVDJFh.js";import{P as s,c as d,g as c}from"./calendar-CjdiwpG-.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-CEOqqC7e.js";import"./Icon-DEMmUoH3.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Card-SKt2bfb_.js";import"./FormField-C0PzNFAX.js";import"./Input-jewHWOpm.js";import"./useOperationLog-5hpxR7Xt.js";import"./FilterField-Dam0MDty.js";import"./Select-BjiNiR3l.js";import"./index-CYwZz33A.js";import"./index-BsLbGRGr.js";import"./Checkbox-DafqBmkx.js";import"./DatePicker-Co4-xkZL.js";import"./Calendar-BqUMXyna.js";import"./Breadcrumb-BhrPkWdI.js";import"./InternalLink-CVdr-dad.js";import"./ActionBreadcrumb-VIPTgomD.js";import"./Dropdown-DNpB0KNO.js";import"./Animated-BkJiPz0l.js";import"./animations-BTPozNpH.js";import"./proxy-DEE2mFOb.js";import"./Box-8kJEtfyL.js";import"./Stack-C2sc4JqI.js";import"./Text-Ccj35-aa.js";import"./colors-BiHXYRGc.js";import"./TextArea-BOfggE9z.js";import"./Radio-CTZ16NIr.js";import"./Toggle--YIuj1MA.js";import"./Slider-CpRgr_oY.js";import"./Badge-BGCF7xBJ.js";import"./Progress-BT32-kdR.js";import"./StatisticItem-DMZhF6NE.js";import"./Tooltip-FVHUrFWK.js";import"./CountdownRing-Bym-wU5U.js";import"./FileLink-QT8EFX7I.js";import"./BackgroundImage-Fhx9xDfr.js";import"./Media-DO4l4nhs.js";import"./ResponsiveContainer-CaUgVPfM.js";import"./MathView-pYkY6qlM.js";import"./TimeSlotRow-CkEer-LY.js";import"./NumberTicker-WRIsQSfK.js";import"./use-in-view-C8cvBFLF.js";import"./MenuItem-tXoGDILP.js";import"./TabBar-DHoovvk_.js";import"./IconButton-DRav08Zr.js";import"./Tabs-BDUyYYEo.js";import"./StarRating-DvIbMYhb.js";import"./StepIndicator-DzZ2Y_Nn.js";import"./ViewModeToggle-BQf7SGC-.js";import"./DataCountDisplay-CsnlUfrU.js";import"./TreeView-CffndjYD.js";import"./AdjustmentBanner-D6lkNkJg.js";import"./DevelopmentBanner-CLt0zFQT.js";import"./StatusBar-BsZCHY5N.js";import"./QACardList-BrH8NPVd.js";import"./StatisticList-CK1CDx0a.js";import"./ChatFab-DnzXfCWr.js";import"./SurveyCard-DlG4yzVm.js";import"./Button-CRy2A372.js";import"./Question-CxVDnYyW.js";import"./PWAInstallPrompt-BU7AKeO5.js";import"./ColorPicker-CuOBc4lg.js";import"./DayOfWeekPicker-CZaJ9Cc-.js";import"./EventPopover-0S8IvGtm.js";import"./IconLabel-Bl4deThz.js";import"./dom-CznJ0sJH.js";import"./format-RPpwwwsr.js";import"./startOfDay-Bun0zCfR.js";import"./ja-C4YpDXmo.js";import"./IconPicker-YMAkeX-W.js";import"./MonthDayCell-xxBNHdoz.js";import"./MonthEventCard-Bf-1oPAw.js";import"./isToday-BV7SHyy-.js";import"./PillSelect-D9aPwUyQ.js";import"./SpanningBar-D5ferB6m.js";import"./TimeSelect-C0VQsiFj.js";import"./CalendarEventCard-jakgwZFk.js";import"./BackButton-BBhRJabk.js";import"./ExternalLink-By20f24P.js";import"./ReplayButton-DB4R7wZa.js";import"./ResetButton-CrpBab4Q.js";import"./ScoreBadge-BVW4oZUn.js";import"./Segment-Lz26nXxD.js";import"./repeatUtils-DcqmxUp3.js";const Qt={title:"カレンダー/EventModal",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},o=async()=>{};function a(t={}){const e=d();return e.set(c,{isOpen:!0,date:t.date??new Date(2026,2,20),hour:t.hour??9,endHour:t.endHour,editingEvent:t.editingEvent}),e}const i={render:()=>{const t=a();return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},n={render:()=>{const t={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},e=a({date:new Date(2026,2,20),hour:10,editingEvent:t});return r.jsx(s,{store:e,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}},p={render:()=>{const t=a({hour:14,endHour:16});return r.jsx(s,{store:t,children:r.jsx(m,{persistEvent:o,removeEvent:o})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
