import React from 'react';

import {
  motion,
  type SVGMotionProps,
  type Transition,
  type TargetAndTransition,
  type Easing,
} from 'framer-motion';

import { type IconName } from '../../constants';

import type { IconProps, IconSvgProps, LoadingPreset } from './types';

// ローディングアイコン判定
const isLoadingIcon = (iconName: string): boolean =>
  iconName.startsWith('loading-') || iconName.startsWith('spinner');

// アイコンごとのSVGパス定義を統合
const ICON_SVG_PATHS: Record<
  string,
  (props: IconSvgProps) => React.ReactElement
> = {
  // ========================================
  // REGULAR アイコン
  // ========================================
  ['hamburger']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M2 5h20M2 12h20M2 19h20"
    />
  ),
  ['x']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M4 20L20 4M4 4l16 16"
    />
  ),
  ['trash']: ({ fillColor, strokeColor }) => (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M10 11v6M14 11v6"
      />
    </>
  ),
  ['person']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  ),
  ['employee']: ({ fillColor, strokeColor }) => (
    <>
      {/* 頭部 - 拡大して上部余白削減 */}
      <circle
        cx="12"
        cy="6"
        r="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
      />
      {/* 身体 - 拡大して下部余白削減 */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M4 20a8 8 0 0116 0"
      />
      {/* ネクタイ */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M12 10.5v3.5l-1 3.5h2l-1-3.5v-3.5z"
        strokeWidth="2"
      />
    </>
  ),
  ['chevron-down']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M21 7l-9 9-9-9"
    />
  ),
  ['chevron-up']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M3 17l9-9 9 9"
    />
  ),
  ['chevron-left']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M17 21l-9-9 9-9"
    />
  ),
  ['chevron-right']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M7 3l9 9-9 9"
    />
  ),
  ['magnifying-glass']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  ),
  ['eye']: ({ fillColor, strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </g>
  ),
  ['eye-slashed']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 目の外形（アーモンド型） */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
      {/* 瞳 */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
      {/* 斜線 */}
      <line
        x1="4"
        y1="4"
        x2="20"
        y2="20"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  ),
  ['arrow-up-right']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  ),
  ['arrow-in']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    />
  ),
  ['sync-pull']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* サーバー（上の横線） */}
      <line x1="4" y1="4" x2="20" y2="4" />
      {/* 下向き矢印 */}
      <line x1="12" y1="7" x2="12" y2="18" />
      <polyline points="8 14 12 18 16 14" />
      {/* ローカル（下の横線） */}
      <line x1="4" y1="21" x2="20" y2="21" />
    </g>
  ),
  ['sync-push']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* ローカル（下の横線） */}
      <line x1="4" y1="21" x2="20" y2="21" />
      {/* 上向き矢印 */}
      <line x1="12" y1="18" x2="12" y2="7" />
      <polyline points="8 11 12 7 16 11" />
      {/* サーバー（上の横線） */}
      <line x1="4" y1="4" x2="20" y2="4" />
    </g>
  ),
  ['arrow-rotate']: ({ strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke={strokeColor}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  ),
  ['arrow-turn-left']: ({ strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M18 8v7a4 4 0 0 1-4 4H6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M9 16l-3 3 3 3"
      />
    </g>
  ),
  ['arrow-u-turn']: ({ strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M16 6H9a5 5 0 0 0 0 10h7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M13 19l3-3-3-3"
      />
    </g>
  ),
  ['door-out']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* ドア枠 */}
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      {/* ドア */}
      <rect x="9" y="3" width="6" height="18" rx="1" />
      {/* ドアノブ */}
      <circle cx="13" cy="12" r="1" fill={strokeColor} stroke="none" />
      {/* 矢印 */}
      <path d="M16 12h6m-3-3l3 3-3 3" />
    </g>
  ),
  ['info-triangle']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  ),
  ['info-circle']: ({ fill, fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={fill !== 'none' ? fillColor : 'none'}
        stroke={strokeColor}
      />
      <path
        d="M12 8v5"
        strokeLinecap="round"
        fill="none"
        stroke={strokeColor}
      />
      <path
        d="M12 15.5h.01"
        strokeLinecap="round"
        fill="none"
        stroke={strokeColor}
      />
    </g>
  ),
  ['lock']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  ),
  ['unlock']: ({ strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M7 11V7a5 5 0 015-5 5 5 0 015 5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M17 7l2-2"
      />
    </g>
  ),
  ['expand']: ({ strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        d="M3 8V4a1 1 0 011-1h4M21 8V4a1 1 0 00-1-1h-4M3 16v4a1 1 0 001 1h4M21 16v4a1 1 0 01-1 1h-4"
      />
    </g>
  ),
  ['calendar']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
  ['funnel']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V20l-4 4v-10.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  ),
  ['gear']: ({ fillColor, strokeColor }) => (
    <g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      {/* 中央の穴（白い円で背景色を重ねる） */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="white"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </g>
  ),
  ['bell']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  ),
  ['home']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
    />
  ),
  ['dashboard']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* メイングリッド - 非対称レイアウト */}
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="4" rx="2" />
      <rect x="14" y="10" width="7" height="11" rx="2" />
      <rect x="3" y="13" width="7" height="8" rx="2" />
      {/* アクセントドット */}
      <circle cx="6.5" cy="6.5" r="1" fill={strokeColor} stroke="none" />
    </g>
  ),
  ['chart-bar']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="1.5">
      <rect x="4" y="14" width="4" height="7" rx="1" />
      <rect x="10" y="8" width="4" height="13" rx="1" />
      <rect x="16" y="4" width="4" height="17" rx="1" />
      <line x1="2" y1="22" x2="22" y2="22" />
    </g>
  ),
  ['list']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="1.5">
      <line x1="3" y1="4" x2="21" y2="4" strokeLinecap="square" />
      <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="square" />
      <line x1="3" y1="20" x2="21" y2="20" strokeLinecap="square" />
      <circle cx="3" cy="4" r="1.2" fill={strokeColor} />
      <circle cx="3" cy="12" r="1.2" fill={strokeColor} />
      <circle cx="3" cy="20" r="1.2" fill={strokeColor} />
    </g>
  ),
  ['file']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8m8 4H8m2-8H8"
    />
  ),
  ['survey']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* 用紙 */}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      {/* チェックマーク */}
      <path d="M8 12l3 3 5-6" />
    </g>
  ),
  ['comment-check']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor}>
      {/* 吹き出し本体 */}
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 吹き出しのしっぽ */}
      <path
        d="M8 17L6 21L10 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* チェックマーク */}
      <path
        d="M7 10L10 13L17 6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  ),
  ['check-circle']: ({ fill, fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={fill !== 'none' ? fillColor : 'none'}
        stroke={strokeColor}
      />
      <path
        d="M9 12l2 2 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </g>
  ),
  ['keyboard']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor}>
      {/* キーボード本体 */}
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 上段キー */}
      <rect x="4" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="7.5" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="11" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="14.5" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="18" y="7.5" width="2" height="2.5" rx="0.5" strokeWidth="1.2" />

      {/* 中段キー */}
      <rect x="4" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="7.5" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="11" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="14.5" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect x="18" y="11" width="2" height="2.5" rx="0.5" strokeWidth="1.2" />

      {/* 下段キー（スペースバー） */}
      <rect x="6" y="14.5" width="12" height="2.5" rx="0.5" strokeWidth="1.2" />
    </g>
  ),
  ['palette']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5">
      {/* パレット本体 */}
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.51-.19-.99-.52-1.36-.31-.35-.48-.82-.48-1.32 0-1.1.9-2 2-2h2.36c3.03 0 5.64-2.61 5.64-5.64C22 5.48 17.52 2 12 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 絵の具の丸 */}
      <circle cx="7.5" cy="11.5" r="1.5" fill={strokeColor} stroke="none" />
      <circle cx="10.5" cy="7.5" r="1.5" fill={strokeColor} stroke="none" />
      <circle cx="15" cy="7.5" r="1.5" fill={strokeColor} stroke="none" />
      <circle cx="17.5" cy="11" r="1.5" fill={strokeColor} stroke="none" />
    </g>
  ),
  ['brush']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ブラシの毛先 */}
      <path d="M3 21c0 0 1-2 3-4s6-4 8-6c2-2 6-8 8-10s-2 0-4 2s-8 6-10 8s-4 6-4 8s-1 2-1 2z" />
      {/* ブラシの柄 */}
      <path d="M14 10l6-6" strokeWidth="2" />
    </g>
  ),
  ['sliders']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round">
      {/* 左のスライダー */}
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <circle cx="4" cy="12" r="2" fill={strokeColor} />
      {/* 中央のスライダー */}
      <line x1="12" y1="21" x2="12" y2="18" />
      <line x1="12" y1="14" x2="12" y2="3" />
      <circle cx="12" cy="16" r="2" fill={strokeColor} />
      {/* 右のスライダー */}
      <line x1="20" y1="21" x2="20" y2="10" />
      <line x1="20" y1="6" x2="20" y2="3" />
      <circle cx="20" cy="8" r="2" fill={strokeColor} />
    </g>
  ),
  ['diamond']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ダイヤモンドの上部 */}
      <polygon points="12,2 2,9 12,22 22,9" />
      {/* 内部のカット線 */}
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="12" y1="2" x2="8" y2="9" />
      <line x1="12" y1="2" x2="16" y2="9" />
      <line x1="8" y1="9" x2="12" y2="22" />
      <line x1="16" y1="9" x2="12" y2="22" />
    </g>
  ),
  ['paint-roller']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* ローラー本体 */}
      <rect x="2" y="3" width="14" height="6" rx="1" />
      {/* ローラーの軸 */}
      <line x1="18" y1="6" x2="20" y2="6" strokeWidth="2" />
      {/* 柄の接続部 */}
      <line x1="20" y1="6" x2="20" y2="12" strokeWidth="2" />
      {/* 柄 */}
      <line x1="20" y1="12" x2="12" y2="12" strokeWidth="2" />
      <line x1="12" y1="12" x2="12" y2="21" strokeWidth="2" />
    </g>
  ),
  ['chat']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* メインの吹き出し */}
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      {/* メッセージライン */}
      <line x1="7" y1="8" x2="17" y2="8" strokeWidth="2" />
      <line x1="7" y1="12" x2="13" y2="12" strokeWidth="2" />
    </g>
  ),
  ['clock']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* 時計の文字盤 */}
      <circle cx="12" cy="12" r="10" fill="none" />
      {/* 時針（短い） */}
      <line x1="12" y1="12" x2="12" y2="7" />
      {/* 分針（長い・左向き） */}
      <line x1="12" y1="12" x2="8" y2="12" />
      {/* 中心点 */}
      <circle cx="12" cy="12" r="1" fill={strokeColor} stroke="none" />
    </g>
  ),
  ['folder']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* フォルダ本体 */}
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </g>
  ),
  ['users-group']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  ),

  // トレンドアイコン（変化矢印）
  ['trend-up']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M12 4v16m0-16l-4 4m4-4l4 4"
    />
  ),
  ['trend-up-right']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M7 17L17 7m0 0H9m8 0v8"
    />
  ),
  ['trend-right']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M4 12h16m0 0l-4-4m4 4l-4 4"
    />
  ),
  ['trend-down-right']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M7 7l10 10m0 0V9m0 8H9"
    />
  ),
  ['trend-down']: ({ fillColor, strokeColor }) => (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fillColor}
      stroke={strokeColor}
      d="M12 20V4m0 16l-4-4m4 4l4-4"
    />
  ),

  // ========================================
  // LOADING アイコン
  // ========================================
  ['spinner']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="9"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      ></circle>
      <path
        className="opacity-75"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z"
      ></path>
    </g>
  ),
  ['spinner-thin']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        opacity="0.1"
        cx="12"
        cy="12"
        r="11"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
      />
      <path
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        d="M12 1a11 11 0 0 1 11 11h-1a10 10 0 0 0-10-10V1z"
      />
    </g>
  ),
  ['spinner-thick']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        opacity="0.3"
        cx="12"
        cy="12"
        r="8"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      />
      <path
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        d="M12 3a9 9 0 0 1 9 9h-4a5 5 0 0 0-5-5V3z"
      />
    </g>
  ),
  ['loading-dots']: ({ fillColor }) => (
    <g>
      <circle cx="4" cy="12" r="1.5" fill={fillColor}>
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle cx="12" cy="12" r="1.5" fill={fillColor}>
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>
      <circle cx="20" cy="12" r="1.5" fill={fillColor}>
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.5s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
    </g>
  ),
  ['loading-dots-fade']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        cx="4"
        cy="12"
        r="2"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0s"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.5;1;0.5"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        r="2"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0.2s"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.5;1;0.5"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>
      <circle
        cx="20"
        cy="12"
        r="2"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0.4s"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.5;1;0.5"
          dur="1.4s"
          repeatCount="indefinite"
          begin="0.4s"
        />
      </circle>
    </g>
  ),
  ['loading-pulse']: ({ strokeColor }) => (
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke={strokeColor}
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
  ),
  ['loading-pulse-ring']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      >
        <animate
          attributeName="r"
          values="8;10;8"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="r"
          values="6;4;6"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  ),
  ['loading-bars']: ({ fillColor }) => (
    <g>
      <rect x="11" y="1" width="2" height="6" fill={fillColor} rx="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 12;360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="11"
        y="17"
        width="2"
        height="6"
        fill={fillColor}
        rx="1"
        opacity="0.5"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 12;360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="17"
        y="11"
        width="6"
        height="2"
        fill={fillColor}
        rx="1"
        opacity="0.75"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 12;360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="1"
        y="11"
        width="6"
        height="2"
        fill={fillColor}
        rx="1"
        opacity="0.25"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 12;360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  ),
  ['loading-bounce']: ({ fillColor }) => (
    <g>
      <circle cx="6" cy="12" r="2" fill={fillColor}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -8; 0 0"
          dur="0.6s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle cx="12" cy="12" r="2" fill={fillColor}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -8; 0 0"
          dur="0.6s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>
      <circle cx="18" cy="12" r="2" fill={fillColor}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -8; 0 0"
          dur="0.6s"
          repeatCount="indefinite"
          begin="0.4s"
        />
      </circle>
    </g>
  ),
  ['loading-clock']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <circle
        cx="12"
        cy="12"
        r="1"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      />
    </g>
  ),
  ['loading-wifi']: ({ fillColor, strokeColor }) => (
    <g>
      <path
        d="M5 12.55a11.8 11.8 0 0 1 14 0"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0s"
        />
      </path>
      <path
        d="M8.5 16a6.5 6.5 0 0 1 7 0"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </path>
      <circle
        cx="12"
        cy="19"
        r="1"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>
    </g>
  ),
  ['loading-orbit']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        opacity="0.1"
      />
      <circle
        cx="12"
        cy="2"
        r="2"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="12" cy="22" r="1.5" fill={strokeColor} opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="-360 12 12"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  ),
  ['loading-morph']: ({ fillColor, strokeColor }) => (
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="0"
      fill={fillColor !== 'none' ? fillColor : strokeColor}
    >
      <animate
        attributeName="rx"
        values="0;6;0"
        dur="2s"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
  ),
  ['loading-progress']: ({ fillColor, strokeColor }) => (
    <g>
      <rect
        x="0"
        y="10"
        width="24"
        height="4"
        fill={strokeColor}
        opacity="0.1"
        rx="2"
      />
      <rect
        x="0"
        y="10"
        width="6"
        height="4"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        rx="2"
      >
        <animate
          attributeName="x"
          values="0;18;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  ),
  ['loading-half']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        opacity="0.15"
        cx="12"
        cy="12"
        r="10"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        d="M2 12a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0h-2z"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  ),
  ['loading-dash']: ({ strokeColor }) => (
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke={strokeColor}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="1 150"
    >
      <animate
        attributeName="stroke-dasharray"
        values="1 150;90 150;90 150"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="stroke-dashoffset"
        values="0;-35;-124"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  ),
  ['loading-scale-pulse']: ({ fillColor, strokeColor }) => (
    <g>
      <circle
        cx="12"
        cy="12"
        r="3"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      >
        <animate
          attributeName="r"
          values="3;4;3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      >
        <animate
          attributeName="r"
          values="8;10;8"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.1;0.3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        opacity="0.1"
      >
        <animate
          attributeName="r"
          values="11;13;11"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.1;0.05;0.1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  ),
  ['loading-flip']: ({ fillColor, strokeColor }) => (
    <rect
      x="8"
      y="8"
      width="8"
      height="8"
      fill={fillColor !== 'none' ? fillColor : strokeColor}
    >
      <animateTransform
        attributeName="transform"
        type="scale"
        values="1,1;0.1,1;1,1"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="1;0.5;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
  ),
  ['loading-square']: ({ strokeColor }) => (
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      stroke={strokeColor}
      strokeWidth="2"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="rx"
        values="0;4;0"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
  ),
  ['loading-triangle']: ({ fillColor, strokeColor }) => (
    <g>
      <polygon
        points="12,2 22,20 2,20"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </polygon>
      <circle
        cx="12"
        cy="12"
        r="2"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
      />
    </g>
  ),
  ['loading-cross']: ({ strokeColor }) => (
    <g>
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
    </g>
  ),
  ['loading-star']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 外側の星 - 時計回り */}
      <polygon
        points="12,2 14.5,8.5 21.5,9 16.5,13.5 18,20.5 12,17 6,20.5 7.5,13.5 2.5,9 9.5,8.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="3s" repeatCount="indefinite" />
      </polygon>
      {/* 内側の星 - 反時計回り */}
      <polygon
        points="12,5 13.5,9.5 18,10 15,12.5 16,17 12,14.5 8,17 9,12.5 6,10 10.5,9.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fillColor !== 'none' ? fillColor : 'none'}
        opacity="0.7"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="-360 12 12" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
      </polygon>
      {/* 中心点 */}
      <circle cx="12" cy="12" r="1.5" fill={fillColor !== 'none' ? fillColor : strokeColor}>
        <animate attributeName="r" values="1.5;2.5;1.5" dur="1s" repeatCount="indefinite" />
      </circle>
    </g>
  ),
  ['loading-hexagon']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 最外側の六角形 - ゆっくり回転 */}
      <polygon
        points="12,1 21,6 21,18 12,23 3,18 3,6"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
        opacity="0.2"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="4s" repeatCount="indefinite" />
      </polygon>
      {/* 中間の六角形 - 逆回転 */}
      <polygon
        points="12,4 18,8 18,16 12,20 6,16 6,8"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="-360 12 12" dur="2s" repeatCount="indefinite" />
      </polygon>
      {/* 内側の六角形 - 塗りつぶし＋パルス */}
      <polygon
        points="12,7 15,9 15,15 12,17 9,15 9,9"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinejoin="round"
        fill={fillColor !== 'none' ? fillColor : strokeColor}
        opacity="0.8"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="0.75s" repeatCount="indefinite" />
      </polygon>
    </g>
  ),
  // ========================================
  // 新デザイン ローディングアイコン
  // ========================================
  ['loading-dna']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 左のらせん */}
      <ellipse cx="8" cy="4" rx="2" ry="1.5" fill={fillColor !== 'none' ? fillColor : strokeColor}>
        <animate attributeName="cy" values="4;12;20;12;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="rx" values="2;4;2;4;2" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="16" cy="20" rx="2" ry="1.5" fill={fillColor !== 'none' ? fillColor : strokeColor}>
        <animate attributeName="cy" values="20;12;4;12;20" dur="2s" repeatCount="indefinite" />
        <animate attributeName="rx" values="2;4;2;4;2" dur="2s" repeatCount="indefinite" />
      </ellipse>
      {/* 接続線 */}
      <line x1="8" y1="8" x2="16" y2="8" stroke={strokeColor} strokeWidth="1.5" opacity="0.5">
        <animate attributeName="y1" values="8;12;16;12;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y2" values="8;12;16;12;8" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="8" y1="12" x2="16" y2="12" stroke={strokeColor} strokeWidth="1.5" opacity="0.7" />
      <line x1="8" y1="16" x2="16" y2="16" stroke={strokeColor} strokeWidth="1.5" opacity="0.5">
        <animate attributeName="y1" values="16;12;8;12;16" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y2" values="16;12;8;12;16" dur="2s" repeatCount="indefinite" />
      </line>
    </g>
  ),
  ['loading-ripple']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2">
      <circle cx="12" cy="12" r="1">
        <animate attributeName="r" values="1;10" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="12" r="1">
        <animate attributeName="r" values="1;10" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="12" cy="12" r="1">
        <animate attributeName="r" values="1;10" dur="1.5s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </g>
  ),
  ['loading-infinity']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round">
      {/* 無限マークのパス */}
      <path d="M12 12c-2-2-4-4-6-4s-4 2-4 4 2 4 4 4c2 0 4-2 6-4s4-4 6-4 4 2 4 4-2 4-4 4c-2 0-4-2-6-4" opacity="0.2" />
      {/* アニメーションするドット */}
      <circle cx="12" cy="12" r="2" fill={strokeColor}>
        <animateMotion dur="2s" repeatCount="indefinite" path="M0 0c-2-2-4-4-6-4s-4 2-4 4 2 4 4 4c2 0 4-2 6-4s4-4 6-4 4 2 4 4-2 4-4 4c-2 0-4-2-6-4" />
      </circle>
    </g>
  ),
  ['loading-atom']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 核 */}
      <circle cx="12" cy="12" r="3" fill={fillColor !== 'none' ? fillColor : strokeColor}>
        <animate attributeName="r" values="3;3.5;3" dur="1s" repeatCount="indefinite" />
      </circle>
      {/* 軌道1 - 水平 */}
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="22" cy="12" r="1.5" fill={strokeColor}>
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* 軌道2 - 斜め */}
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" transform="rotate(60 12 12)">
        <animateTransform attributeName="transform" type="rotate" from="60 12 12" to="420 12 12" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="22" cy="12" r="1.5" fill={strokeColor} transform="rotate(60 12 12)">
        <animateTransform attributeName="transform" type="rotate" from="60 12 12" to="420 12 12" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* 軌道3 - 逆斜め */}
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" transform="rotate(-60 12 12)">
        <animateTransform attributeName="transform" type="rotate" from="-60 12 12" to="300 12 12" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="22" cy="12" r="1.5" fill={strokeColor} transform="rotate(-60 12 12)">
        <animateTransform attributeName="transform" type="rotate" from="-60 12 12" to="300 12 12" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </g>
  ),
  ['loading-heartbeat']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* ベースライン */}
      <line x1="2" y1="12" x2="22" y2="12" opacity="0.2" />
      {/* 心電図パルス */}
      <polyline points="2,12 6,12 8,12 9,6 10,18 11,8 12,14 13,12 17,12 22,12">
        <animate attributeName="stroke-dasharray" values="0 100;50 100;100 100" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;-25;-50" dur="1.5s" repeatCount="indefinite" />
      </polyline>
    </g>
  ),
  ['loading-hourglass']: ({ fillColor, strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* 砂時計フレーム */}
      <path d="M5 3h14M5 21h14" />
      <path d="M6 3v3a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <path d="M6 21v-3a6 6 0 0 1 6-6 6 6 0 0 1 6 6v3" />
      {/* 砂 */}
      <path d="M12 12v3" stroke={fillColor !== 'none' ? fillColor : strokeColor} strokeWidth="3">
        <animate attributeName="d" values="M12 12v0;M12 12v3;M12 12v0" dur="2s" repeatCount="indefinite" />
      </path>
      {/* 回転アニメーション */}
      <animateTransform attributeName="transform" type="rotate" values="0 12 12;0 12 12;180 12 12;180 12 12;360 12 12" dur="4s" repeatCount="indefinite" keyTimes="0;0.4;0.5;0.9;1" />
    </g>
  ),
  ['loading-gears']: ({ fillColor, strokeColor }) => (
    <g fill={fillColor} stroke={strokeColor} strokeWidth="1">
      {/* 大歯車 */}
      <g>
        <circle cx="9" cy="12" r="5" fill="none" strokeWidth="1.5" />
        <circle cx="9" cy="12" r="2" fill={strokeColor} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect key={i} x="8" y="5" width="2" height="3" rx="0.5" fill={strokeColor} transform={`rotate(${angle} 9 12)`} />
        ))}
        <animateTransform attributeName="transform" type="rotate" from="0 9 12" to="360 9 12" dur="3s" repeatCount="indefinite" />
      </g>
      {/* 小歯車 */}
      <g>
        <circle cx="17" cy="10" r="3.5" fill="none" strokeWidth="1.5" />
        <circle cx="17" cy="10" r="1.5" fill={strokeColor} />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <rect key={i} x="16.25" y="5" width="1.5" height="2" rx="0.5" fill={strokeColor} transform={`rotate(${angle} 17 10)`} />
        ))}
        <animateTransform attributeName="transform" type="rotate" from="0 17 10" to="-360 17 10" dur="2s" repeatCount="indefinite" />
      </g>
    </g>
  ),
  ['loading-wave']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round">
      <path d="M2 12 Q 6 6, 12 12 T 22 12" opacity="0.3" />
      <path d="M2 12 Q 6 6, 12 12 T 22 12">
        <animate attributeName="d"
          values="M2 12 Q 6 6, 12 12 T 22 12;M2 12 Q 6 18, 12 12 T 22 12;M2 12 Q 6 6, 12 12 T 22 12"
          dur="1s" repeatCount="indefinite" />
      </path>
      {/* 移動するドット */}
      <circle cx="2" cy="12" r="2" fill={strokeColor}>
        <animate attributeName="cx" values="2;22;2" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="12;12;12" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  ),
  ['loading-radar']: ({ fillColor, strokeColor }) => (
    <g>
      {/* レーダー円 */}
      <circle cx="12" cy="12" r="10" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.2" />
      <circle cx="12" cy="12" r="7" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.2" />
      <circle cx="12" cy="12" r="1" fill={fillColor !== 'none' ? fillColor : strokeColor} />
      {/* スキャンライン */}
      <line x1="12" y1="12" x2="12" y2="2" stroke={strokeColor} strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="2s" repeatCount="indefinite" />
      </line>
      {/* スキャンエリア */}
      <path d="M12 12 L12 2 A10 10 0 0 1 20 8 Z" fill={strokeColor} opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
  ),
  ['loading-cube3d']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinejoin="round">
      {/* 3Dキューブ */}
      <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" opacity="0.3" />
      <line x1="12" y1="2" x2="12" y2="12" />
      <line x1="12" y1="12" x2="4" y2="17" />
      <line x1="12" y1="12" x2="20" y2="17" />
      <polygon points="12,2 20,7 12,12 4,7" fill={strokeColor} opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
      </polygon>
      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="4s" repeatCount="indefinite" />
    </g>
  ),
  ['loading-cube3d-glow']: ({ strokeColor }) => (
    <g fill="none" stroke={strokeColor} strokeWidth="1.5">
      {/* Phase 1: キューブ */}
      <g opacity="0">
        <animate attributeName="opacity" values="1;1;0;0;0;0;1" dur="6s" repeatCount="indefinite" />
        <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" strokeLinejoin="round" />
        <line x1="12" y1="2" x2="12" y2="12" />
        <line x1="12" y1="12" x2="4" y2="17" />
        <line x1="12" y1="12" x2="20" y2="17" />
        <polygon points="12,2 20,7 12,12 4,7" fill={strokeColor} opacity="0.3" strokeLinejoin="round" />
      </g>
      {/* Phase 2: 原子（軌道＋核） */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0;0;0" dur="6s" repeatCount="indefinite" />
        <ellipse cx="12" cy="12" rx="9" ry="4" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.5" fill={strokeColor} />
      </g>
      {/* Phase 3: 同心円リング */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;0;0;1;1;0" dur="6s" repeatCount="indefinite" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6" opacity="0.7" />
        <circle cx="12" cy="12" r="9" opacity="0.4" />
        <circle cx="12" cy="12" r="2" fill={strokeColor} />
      </g>
    </g>
  ),
  ['loading-rings']: ({ strokeColor }) => (
    <g fill="none" strokeWidth="2">
      {/* 外リング */}
      <circle cx="12" cy="12" r="10" stroke={strokeColor} opacity="0.2" />
      <circle cx="12" cy="12" r="10" stroke={strokeColor} strokeDasharray="15 48">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* 中リング */}
      <circle cx="12" cy="12" r="6" stroke={strokeColor} opacity="0.2" />
      <circle cx="12" cy="12" r="6" stroke={strokeColor} strokeDasharray="10 28">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="-360 12 12" dur="1s" repeatCount="indefinite" />
      </circle>
      {/* 内リング */}
      <circle cx="12" cy="12" r="2" stroke={strokeColor} strokeWidth="3">
        <animate attributeName="r" values="2;3;2" dur="0.75s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur="0.75s" repeatCount="indefinite" />
      </circle>
    </g>
  ),
  ['loading-eclipse']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 太陽本体（背景の光） */}
      <circle cx="12" cy="12" r="6" fill={fillColor !== 'none' ? fillColor : strokeColor} opacity="0.3" />
      {/* 月の影（左右に移動） */}
      <circle cx="12" cy="12" r="6" fill={strokeColor}>
        <animate attributeName="cx" values="7;12;17;12;7" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* 外輪（コロナリング） */}
      <circle cx="12" cy="12" r="8" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="8;9;8" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>
  ),
  ['loading-interview']: ({ fillColor, strokeColor }) => (
    <g>
      {/* 左の人（頭だけ上下に伸びる、足元は固定） */}
      <g>
        {/* 体（固定） */}
        <path d="M1 19a4 4 0 018 0" fill={strokeColor} opacity="0.85" />
        {/* 頭（上下に動く） */}
        <circle cx="5" cy="11" r="2.5" fill={strokeColor} opacity="0.85">
          <animate attributeName="cy" values="11;9.5;11.5;10;11" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      {/* 右の人（頭だけ上下に伸びる、足元は固定） */}
      <g>
        {/* 体（固定） */}
        <path d="M15 19a4 4 0 018 0" fill={strokeColor} opacity="0.85" />
        {/* 頭（上下に動く、タイミングずらす） */}
        <circle cx="19" cy="11" r="2.5" fill={strokeColor} opacity="0.85">
          <animate attributeName="cy" values="11;10;12;9.5;11" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </g>
      {/* 中央の吹き出し（滑らかにグネグネ） */}
      <g>
        {/* 吹き出しの上部ふくらみ1（左） */}
        <circle cx="10" cy="3" r="0.8" fill={fillColor !== 'none' ? fillColor : strokeColor} opacity="0.85">
          <animate attributeName="cy" values="3;2.3;3.2;2.6;3.4;2.8;3" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" />
          <animate attributeName="cx" values="10;9.7;10.2;9.8;10.1;9.9;10" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" />
          <animate attributeName="r" values="0.8;0.9;0.75;0.85;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* 吹き出しの上部ふくらみ2（中央） */}
        <circle cx="12" cy="2.5" r="1" fill={fillColor !== 'none' ? fillColor : strokeColor} opacity="0.9">
          <animate attributeName="cy" values="2.5;1.8;2.8;2.2;3;2.4;2.5" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" begin="0.2s" />
          <animate attributeName="cx" values="12;11.8;12.3;11.9;12.2;12" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" begin="0.1s" />
          <animate attributeName="r" values="1;1.15;0.9;1.05;1" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        {/* 吹き出しの上部ふくらみ3（右） */}
        <circle cx="14" cy="3" r="0.8" fill={fillColor !== 'none' ? fillColor : strokeColor} opacity="0.85">
          <animate attributeName="cy" values="3;2.4;3.3;2.7;3.1;2.5;3" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" begin="0.4s" />
          <animate attributeName="cx" values="14;14.3;13.8;14.2;13.9;14.1;14" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" begin="0.3s" />
          <animate attributeName="r" values="0.8;0.7;0.9;0.8;0.85;0.8" dur="2.4s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        {/* 吹き出しの下部ベース（横長） */}
        <ellipse cx="12" cy="4" rx="3.5" ry="0.8" fill={fillColor !== 'none' ? fillColor : strokeColor} opacity="0.8">
          <animate attributeName="cy" values="4;3.6;4.3;3.8;4.1;3.7;4" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" begin="0.15s" />
          <animate attributeName="rx" values="3.5;3.3;3.7;3.4;3.6;3.5" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1" />
          <animate attributeName="ry" values="0.8;0.9;0.7;0.85;0.75;0.8" dur="2.8s" repeatCount="indefinite" begin="0.2s" />
        </ellipse>
      </g>
      {/* 左から雲へ飛ぶボール（弧を描く） */}
      <circle r="0.6" fill={fillColor !== 'none' ? fillColor : strokeColor} visibility="hidden">
        <animateMotion dur="1.5s" repeatCount="indefinite" begin="0s">
          <mpath xlinkHref="#arcPathLeft" />
        </animateMotion>
        <animate attributeName="visibility" values="hidden;visible;visible;hidden" dur="1.5s" repeatCount="indefinite" begin="0s" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="1.5s" repeatCount="indefinite" begin="0s" />
      </circle>
      {/* 右から雲へ飛ぶボール（弧を描く） */}
      <circle r="0.6" fill={fillColor !== 'none' ? fillColor : strokeColor} visibility="hidden">
        <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.75s">
          <mpath xlinkHref="#arcPathRight" />
        </animateMotion>
        <animate attributeName="visibility" values="hidden;visible;visible;hidden" dur="1.5s" repeatCount="indefinite" begin="0.75s" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="1.5s" repeatCount="indefinite" begin="0.75s" />
      </circle>
      {/* 弧のパス定義（非表示） - 頭の上から雲へ弧を描く */}
      <defs>
        <path id="arcPathLeft" d="M5 8 Q 8 1, 12 3" fill="none" />
        <path id="arcPathRight" d="M19 8 Q 16 1, 12 3" fill="none" />
      </defs>
    </g>
  ),
};

// ========================================
// アイコンアニメーション設定
// ========================================
const ICON_ANIMATION_CONFIG: Record<
  string,
  { animation: TargetAndTransition; transition: Transition }
> = {
  spinner: {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
  'spinner-thin': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
  'spinner-thick': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1.2, ease: 'linear' },
  },
  'loading-dots': {
    animation: { opacity: [0.3, 1, 0.3] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
  'loading-dots-fade': {
    animation: { opacity: [0.3, 1, 0.3], scale: [0.5, 1, 0.5] },
    transition: { repeat: Infinity, duration: 1.4, ease: 'easeInOut' },
  },
  'loading-pulse': {
    animation: { scale: [1, 1.2, 1] },
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  'loading-pulse-ring': {
    animation: { scale: [1, 1.2, 1] },
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  'loading-scale-pulse': {
    animation: { scale: [1, 1.2, 1] },
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  'loading-bars': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 0.8, ease: 'linear' },
  },
  'loading-bounce': {
    animation: { y: [0, -8, 0] },
    transition: { repeat: Infinity, duration: 0.6, ease: 'easeInOut' },
  },
  'loading-clock': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
  'loading-wifi': {
    animation: { opacity: [0.2, 1, 0.2] },
    transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
  },
  'loading-orbit': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 2, ease: 'linear' },
  },
  'loading-morph': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
  'loading-progress': {
    animation: { x: [0, 18, 0] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
  'loading-half': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 0.8, ease: 'linear' },
  },
  'loading-dash': {
    animation: {},
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
  'loading-flip': {
    animation: { scaleX: [1, 0.1, 1] },
    transition: { repeat: Infinity, duration: 2, ease: 'linear' },
  },
  'loading-square': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
  'loading-triangle': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
  'loading-cross': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
  'loading-star': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1.2, ease: 'linear' },
  },
  'loading-hexagon': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'linear' },
  },
  // 新デザイン
  'loading-dna': {
    animation: { opacity: [0.8, 1, 0.8] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
  'loading-ripple': {
    animation: { scale: [1, 1.1, 1] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeOut' },
  },
  'loading-infinity': {
    animation: { opacity: [0.8, 1, 0.8] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
  'loading-atom': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 3, ease: 'linear' },
  },
  'loading-heartbeat': {
    animation: { opacity: [0.8, 1, 0.8] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
  'loading-hourglass': {
    animation: { rotate: [0, 180] },
    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
  },
  'loading-gears': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 3, ease: 'linear' },
  },
  'loading-wave': {
    animation: { opacity: [0.8, 1, 0.8] },
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  'loading-radar': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 2, ease: 'linear' },
  },
  'loading-cube3d': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 5, ease: 'linear' },
  },
  'loading-cube3d-glow': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 8, ease: 'linear' },
  },
  'loading-rings': {
    animation: { rotate: [0, 360] },
    transition: { repeat: Infinity, duration: 1.5, ease: 'linear' },
  },
  'loading-eclipse': {
    animation: { opacity: [0.8, 1, 0.8] },
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
  },
  'loading-interview': {
    animation: { opacity: [0.9, 1, 0.9] },
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
  unlock: {
    animation: { rotate: [-15, 15, -12, 12, -8, 8, -5, 5, -2, 2, 0] },
    transition: { repeat: 1, duration: 1.2, ease: 'easeOut' },
  },
};

// ========================================
// プリセットマッピング
// ========================================
const PRESET_MAP: Record<LoadingPreset, { name: IconName; useFill?: boolean }> = {
  spinner: { name: 'spinner' },
  dots: { name: 'loading-dots', useFill: true },
  pulse: { name: 'loading-pulse' },
  cube: { name: 'loading-cube3d' },
  'cube-glow': { name: 'loading-cube3d-glow' },
  interview: { name: 'loading-interview', useFill: true },
  dna: { name: 'loading-dna' },
  atom: { name: 'loading-atom' },
  rings: { name: 'loading-rings' },
  gears: { name: 'loading-gears' },
  hourglass: { name: 'loading-hourglass' },
  wave: { name: 'loading-wave' },
  radar: { name: 'loading-radar', useFill: true },
  eclipse: { name: 'loading-eclipse', useFill: true },
};

// ========================================
// Iconコンポーネント本体
// ========================================
const Icon: React.FC<IconProps> = ({
  name: nameProp,
  preset,
  size = 24,
  className = '',
  style,
  fill: fillProp,
  stroke: strokeProp = 'currentColor',
  strokeWidth = 2,
  dot = false,
  shake = false,
  interactive = false,
  animationTrigger,
  condition = false,
  hoverScale = 1.1,
  tapScale = 0.95,
  conditionAnimation,
  transition = { duration: 0.2 },
  ease,
  duration,
  repeat,
  delay,
  onClick,
}) => {
  // presetからnameとfillを解決
  const presetConfig = preset ? PRESET_MAP[preset] : undefined;
  const name = (nameProp ?? presetConfig?.name ?? '') as IconName;
  const fill = fillProp ?? (presetConfig?.useFill ? strokeProp : 'none');
  const stroke = strokeProp;
  // ========================================
  // 内部処理
  // ========================================

  // shake アニメーション設定
  const SHAKE_ANIMATION = {
    animation: { rotate: [-15, 15, -15, 15, 0] },
    transition: { repeat: 3, duration: 0.4, ease: 'easeInOut' as const },
  };

  // アニメーション設定があるアイコンかどうか
  const hasAnimationConfig = name in ICON_ANIMATION_CONFIG;
  const isLoadingIconType = isLoadingIcon(name);

  // interactiveモードの場合、animationTriggerが未指定なら'hover'を適用
  const resolvedAnimationTrigger = animationTrigger ?? (interactive ? 'hover' : 'none');

  // shake が有効な場合は condition トリガーを使用
  const effectiveAnimationTrigger = shake
    ? 'condition'
    : hasAnimationConfig
      ? 'condition'
      : resolvedAnimationTrigger;
  const effectiveCondition = shake ? condition : (isLoadingIconType ? true : condition);

  // アニメーション設定の取得
  const getAnimationSettings = () => {
    // shake が有効な場合は SHAKE_ANIMATION を使用
    if (shake) {
      return SHAKE_ANIMATION;
    }

    const config = ICON_ANIMATION_CONFIG[name];
    if (!config) {
      return { animation: conditionAnimation, transition };
    }

    const defaultTransition = config.transition as {
      repeat?: number;
      duration?: number;
      ease?: Easing;
      delay?: number;
    };

    // propsで上書きがある場合はマージ
    if (
      ease ||
      duration !== undefined ||
      repeat !== undefined ||
      delay !== undefined
    ) {
      return {
        animation: config.animation,
        transition: {
          repeat: repeat !== undefined ? repeat : defaultTransition.repeat,
          duration:
            duration !== undefined ? duration : defaultTransition.duration,
          ease: ease ?? defaultTransition.ease,
          delay: delay !== undefined ? delay : defaultTransition.delay,
        },
      };
    }

    return config;
  };

  const {
    animation: effectiveConditionAnimation,
    transition: effectiveTransition,
  } = shake || hasAnimationConfig
    ? getAnimationSettings()
    : { animation: conditionAnimation, transition };

  // 色設定を処理する関数
  const getColorValues = () => {
    // 色の値を解決する関数
    const resolveColor = (
      colorValue: string | undefined,
      defaultColor: string
    ): string => {
      if (!colorValue) return defaultColor;
      if (colorValue === 'none') return 'none';
      // 直接指定されたカラーコード等をそのまま使用
      return colorValue;
    };

    return {
      fillColor: resolveColor(fill, 'none'),
      strokeColor: resolveColor(stroke, 'currentColor'),
    };
  };

  const { fillColor, strokeColor } = getColorValues();

  // 共通のSVGプロパティ
  const svgProps = {
    className,
    style,
    width: size,
    height: size,
    fill: 'none', // SVG全体のfillは無効化し、個別要素で制御
    stroke: strokeColor,
    strokeWidth,
    viewBox: '0 0 24 24',
    onClick,
    'data-component': 'icon',
    'data-icon-name': name,
  };

  // アニメーション設定を生成
  const getAnimationProps = () => {
    const props: Partial<SVGMotionProps<SVGSVGElement>> = {
      ...svgProps,
    };

    // タップ時のバウンス（ぷるっと）効果用トランジション
    const tapBounceTransition = {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
      mass: 0.8,
    };

    switch (effectiveAnimationTrigger) {
      case 'hover':
        props.whileHover = { scale: hoverScale };
        props.whileTap = { scale: tapScale };
        props.transition = tapBounceTransition;
        break;

      case 'tap':
        props.whileTap = { scale: tapScale };
        props.transition = tapBounceTransition;
        break;

      case 'condition':
        if (effectiveCondition && effectiveConditionAnimation) {
          props.animate = effectiveConditionAnimation;
          props.transition = effectiveTransition;
        }
        break;

      case 'none':
      default:
        // アニメーションなし
        break;
    }

    return props;
  };

  const renderIconPath = () => {
    const renderer = ICON_SVG_PATHS[name];
    if (renderer) {
      return renderer({ fillColor, strokeColor, fill });
    }
    if (import.meta.env.DEV) {
      console.warn(`Icon "${name}" not found`);
    }
    return null;
  };

  // 右上の通知ドット
  const renderDot = () => {
    if (!dot) return null;
    return (
      <circle
        cx="18"
        cy="6"
        r="3"
        fill="#EF4444"
        stroke="white"
        strokeWidth="1"
      />
    );
  };

  // ========================================
  // レンダリング
  // ========================================

  if (effectiveAnimationTrigger === 'none') {
    // アニメーションなしの場合は通常のSVG
    return (
      <svg {...svgProps}>
        {renderIconPath()}
        {renderDot()}
      </svg>
    );
  }

  // アニメーションありの場合はmotion.svg
  return (
    <motion.svg {...getAnimationProps()}>
      {renderIconPath()}
      {renderDot()}
    </motion.svg>
  );
};

export default Icon;
