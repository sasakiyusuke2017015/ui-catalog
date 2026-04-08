import{j as t}from"./iframe-BwfVzy39.js";import{E as o}from"./EventModal-CqFdNFJf.js";import{P as i,c as l,g as u}from"./calendar-B6W6wFgB.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-BGZPTLbC.js";import"./Icon-DGn345dX.js";import"./cn-0exNfmSl.js";import"./clsx-B-dksMZM.js";import"./Text-zVgKvV8g.js";import"./colors-BiHXYRGc.js";import"./Card-BRQCZByi.js";import"./FormField-BZ5a4zeb.js";import"./Input-Bqovahm6.js";import"./useOperationLog-0HvfpEDm.js";import"./FilterField-Btjr2CJ4.js";import"./Select-B6YkSm_G.js";import"./index-MInDop0f.js";import"./index-DG8aQvK0.js";import"./Checkbox-jb8ucghJ.js";import"./DatePicker-CGzCxt01.js";import"./Calendar-B8xGx41-.js";import"./Breadcrumb-IXEZrbEO.js";import"./InternalLink-Ces8NzoO.js";import"./ActionBreadcrumb-BdqyNu7g.js";import"./ContextMenu-BFfFyp9R.js";import"./MenuItem-BpjXh9yM.js";import"./ProjectItem-BiCSug4P.js";import"./Animated-BqChC8bE.js";import"./animations-BTPozNpH.js";import"./proxy-DgiibTsT.js";import"./Box-DZLoEe9z.js";import"./Stack-Bn7jZIaO.js";import"./TextArea-DI0K_rFK.js";import"./Radio-Dzz4dJmF.js";import"./Toggle-Cyy-4m5p.js";import"./Slider-DOcNGlIB.js";import"./Badge-C80qAVVi.js";import"./Progress-D_WiIQb3.js";import"./StatisticItem-yoLXxVo3.js";import"./Tooltip-DzFmH7S6.js";import"./TimeBadge-DCi6WIqb.js";import"./Spinner-Bt2LJ0PM.js";import"./ListItem-Cs4eTnL7.js";import"./FileLink-DP6MFuTQ.js";import"./BackgroundImage-B3j9eD5I.js";import"./Media-DWVwg95M.js";import"./ResponsiveContainer-Nz9WlQxu.js";import"./CountdownRing-6b3adcOl.js";import"./MathView-VS31jSXO.js";import"./TimeSlotRow-DugQfFnm.js";import"./NumberTicker-CYlb8UgO.js";import"./use-in-view-CJ22M-IE.js";import"./TabBar-BNxDIggN.js";import"./IconButton-C0_4Xkxm.js";import"./Tabs-DyWPtRAI.js";import"./TagItem-Clr9DFZ_.js";import"./StarRating-BqBphQmU.js";import"./StepIndicator-Bsfjqfxy.js";import"./ViewModeToggle-CYSXVmgu.js";import"./DataCountDisplay-DxC4YPJu.js";import"./TreeView-nv_XU0W8.js";import"./AdjustmentBanner-BIHvl6-u.js";import"./DevelopmentBanner-QZlQQ4gM.js";import"./StatusBar-B6EV_NJb.js";import"./QACardList-BRCJ6Fz9.js";import"./StatisticList-BBaqQpuL.js";import"./ChatFab-CjXVzjjP.js";import"./MemberCard-BQW3f8G4.js";import"./SurveyCard-CmzJAtXd.js";import"./Button-DghHDH7f.js";import"./PWAInstallPrompt-DqDgVYTK.js";import"./ColorPicker-DzOaiDnt.js";import"./DayOfWeekPicker-D0NTARSU.js";import"./IconPicker-WdT5mr16.js";import"./PillSelect-5QeMEcwN.js";import"./SpanningBar-0fQ9_yLI.js";import"./IconLabel-C7RoMPsB.js";import"./startOfDay-Bun0zCfR.js";import"./TimeSelect-BuQTt6Tz.js";import"./BackButton-c3PmiooL.js";import"./ExternalLink-DLm6eGZr.js";import"./MonthEventCard-DXfXSACF.js";import"./format-RPpwwwsr.js";import"./NavItem-88gmMw8E.js";import"./ReplayButton-C0SPc_Lf.js";import"./ResetButton-Dttjb2YU.js";import"./ScoreBadge-BXxcGSLK.js";import"./Segment-CyGhFYIz.js";import"./Dropdown-D0NTa7Pz.js";import"./SearchBar-CXDeuoI1.js";import"./repeatUtils-DcqmxUp3.js";const $e={title:"カレンダー/イベント/EventModal",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"イベントの作成・編集モーダル。タイトル、日時、カラー、説明、繰り返し設定に対応。"}}}},r=async()=>{};function a(e={}){const n=l();return n.set(u,{isOpen:!0,date:e.date??new Date(2026,2,20),hour:e.hour??9,endHour:e.endHour,endDate:e.endDate,editingEvent:e.editingEvent}),n}const s={render:()=>{const e=a();return t.jsx(i,{store:e,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},p={render:()=>{const e=a({hour:14,endHour:16});return t.jsx(i,{store:e,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},m={render:()=>{const e=a({date:new Date(2026,2,20),hour:0,endDate:new Date(2026,2,22),endHour:24});return t.jsx(i,{store:e,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},d={render:()=>{const e={id:"1",title:"チームミーティング",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#4f46e5",description:"スプリントの振り返りと次の計画を話し合います。"},n=a({date:new Date(2026,2,20),hour:10,editingEvent:e});return t.jsx(i,{store:n,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},c={render:()=>{const e={id:"2",title:"誕生日パーティー",startTime:new Date(2026,2,25,18,0),endTime:new Date(2026,2,25,21,0),color:"#ec4899",icon:"cake",description:"🎂 サプライズパーティー！"},n=a({date:new Date(2026,2,25),hour:18,editingEvent:e});return t.jsx(i,{store:n,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},v={render:()=>{const e={id:"3",title:"週次定例",startTime:new Date(2026,2,20,10,0),endTime:new Date(2026,2,20,11,0),color:"#059669",repeat:[1,3,5],repeatPeriodStart:new Date(2026,2,1),repeatPeriodEnd:new Date(2026,5,30)},n=a({date:new Date(2026,2,20),hour:10,editingEvent:e});return t.jsx(i,{store:n,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}},E={render:()=>{const e={id:"4",title:"休暇",startTime:new Date(2026,2,20,0,0),endTime:new Date(2026,2,22,23,59),color:"#06b6d4",allDay:!0},n=a({date:new Date(2026,2,20),hour:0,editingEvent:e});return t.jsx(i,{store:n,children:t.jsx(o,{persistEvent:r,removeEvent:r})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithModal();
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithModal({
      hour: 14,
      endHour: 16
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const store = createStoreWithModal({
      date: new Date(2026, 2, 20),
      hour: 0,
      endDate: new Date(2026, 2, 22),
      endHour: 24
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const existingEvent: CalendarEvent = {
      id: '2',
      title: '誕生日パーティー',
      startTime: new Date(2026, 2, 25, 18, 0),
      endTime: new Date(2026, 2, 25, 21, 0),
      color: '#ec4899',
      icon: 'cake',
      description: '🎂 サプライズパーティー！'
    };
    const store = createStoreWithModal({
      date: new Date(2026, 2, 25),
      hour: 18,
      editingEvent: existingEvent
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const repeatEvent: CalendarEvent = {
      id: '3',
      title: '週次定例',
      startTime: new Date(2026, 2, 20, 10, 0),
      endTime: new Date(2026, 2, 20, 11, 0),
      color: '#059669',
      repeat: [1, 3, 5] as const,
      repeatPeriodStart: new Date(2026, 2, 1),
      repeatPeriodEnd: new Date(2026, 5, 30)
    };
    const store = createStoreWithModal({
      date: new Date(2026, 2, 20),
      hour: 10,
      editingEvent: repeatEvent
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allDayEvent: CalendarEvent = {
      id: '4',
      title: '休暇',
      startTime: new Date(2026, 2, 20, 0, 0),
      endTime: new Date(2026, 2, 22, 23, 59),
      color: '#06b6d4',
      allDay: true
    };
    const store = createStoreWithModal({
      date: new Date(2026, 2, 20),
      hour: 0,
      editingEvent: allDayEvent
    });
    return <Provider store={store}>
        <EventModal persistEvent={noop} removeEvent={noop} />
      </Provider>;
  }
}`,...E.parameters?.docs?.source}}};const et=["CreateNew","CreateWithTimeRange","CreateMultiDay","EditExisting","EditWithIcon","EditRepeatEvent","EditAllDay"];export{m as CreateMultiDay,s as CreateNew,p as CreateWithTimeRange,E as EditAllDay,d as EditExisting,v as EditRepeatEvent,c as EditWithIcon,et as __namedExportsOrder,$e as default};
