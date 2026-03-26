/**
 * Icon コンポーネント
 *
 * 設計原則:
 * - SVG は幾何学データ（Path）に徹する
 * - SCSS で魂（色・動き・状態）を吹き込む
 * - currentColor を活用し親要素の色を継承
 */
import React from 'react';
import type { IconName } from '../../constants';
import { cn } from '../../utils';
import styles from './Icon.module.scss';
import type {
  IconProps,
  AnimationPreset,
  HoverPreset,
  LoadingPreset,
  SizePreset,
  ColorVariant,
} from './types';

// ========================================
// SVG Path 定義
// ========================================

// SVG レンダリング用の内部型
interface PathRenderProps {
  className?: string;
}

// アイコンごとのSVGパス定義
const ICON_PATHS: Record<string, (props: PathRenderProps) => React.ReactElement> = {
  // ========================================
  // REGULAR アイコン
  // ========================================
  ['dot']: () => (
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  ),
  ['hamburger']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 5h20M2 12h20M2 19h20"
    />
  ),
  ['x']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20L20 4M4 4l16 16"
    />
  ),
  ['save']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 21v-8H7v8M7 3v5h8"
      />
    </g>
  ),
  ['trash']: () => (
    <>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 11v6M14 11v6"
      />
    </>
  ),
  ['person']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  ),
  ['employee']: () => (
    <>
      <circle
        className={styles.stroke}
        cx="12"
        cy="6"
        r="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20a8 8 0 0116 0"
      />
      <path
        className={cn(styles.stroke, styles.detail)}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10.5v3.5l-1 3.5h2l-1-3.5v-3.5z"
        strokeWidth="2"
      />
    </>
  ),
  ['chevron-down']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7l-9 9-9-9"
    />
  ),
  ['chevron-up']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l9-9 9 9"
    />
  ),
  ['chevron-left']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21l-9-9 9-9"
    />
  ),
  ['chevron-right']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3l9 9-9 9"
    />
  ),
  ['chevrons-left']: () => (
    <>
      <path className={styles.stroke} strokeLinecap="round" strokeLinejoin="round" d="M18 17l-5-5 5-5" />
      <path className={styles.stroke} strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5" />
    </>
  ),
  ['chevrons-right']: () => (
    <>
      <path className={styles.stroke} strokeLinecap="round" strokeLinejoin="round" d="M6 7l5 5-5 5" />
      <path className={styles.stroke} strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
    </>
  ),
  ['magnifying-glass']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  ),
  ['eye']: () => (
    <g className={styles.body}>
      <path
        className={cn(styles.stroke, styles.pupil)}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        className={cn(styles.stroke, styles.outline)}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </g>
  ),
  ['eye-slashed']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
      <circle className={styles.stroke} cx="12" cy="12" r="3" strokeWidth="2" />
      <line
        className={cn(styles.stroke, styles.slash)}
        x1="4"
        y1="4"
        x2="20"
        y2="20"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  ),
  ['arrow-up-right']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  ),
  ['arrow-in']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    />
  ),
  ['sync-pull']: () => (
    <g className={styles.body}>
      <line className={cn(styles.stroke, styles.serverLine)} x1="4" y1="4" x2="20" y2="4" />
      <line className={cn(styles.stroke, styles.arrow)} x1="12" y1="7" x2="12" y2="18" />
      <polyline className={cn(styles.stroke, styles.arrow)} points="8 14 12 18 16 14" />
      <line className={cn(styles.stroke, styles.localLine)} x1="4" y1="21" x2="20" y2="21" />
    </g>
  ),
  ['sync-push']: () => (
    <g className={styles.body}>
      <line className={cn(styles.stroke, styles.localLine)} x1="4" y1="21" x2="20" y2="21" />
      <line className={cn(styles.stroke, styles.arrow)} x1="12" y1="18" x2="12" y2="7" />
      <polyline className={cn(styles.stroke, styles.arrow)} points="8 11 12 7 16 11" />
      <line className={cn(styles.stroke, styles.serverLine)} x1="4" y1="4" x2="20" y2="4" />
    </g>
  ),
  ['arrow-rotate']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  ),
  ['arrow-turn-left']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 8v7a4 4 0 0 1-4 4H6"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 16l-3 3 3 3"
      />
    </g>
  ),
  ['arrow-u-turn']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 6H9a5 5 0 0 0 0 10h7"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 19l3-3-3-3"
      />
    </g>
  ),
  ['door-out']: () => (
    <g className={styles.body}>
      <path className={styles.stroke} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <rect className={styles.stroke} x="9" y="3" width="6" height="18" rx="1" />
      <circle className={cn(styles.fill, styles.handle)} cx="13" cy="12" r="1" />
      <path className={cn(styles.stroke, styles.arrow)} d="M16 12h6m-3-3l3 3-3 3" />
    </g>
  ),
  ['info-triangle']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  ),
  ['info-circle']: () => (
    <g className={styles.body}>
      <circle className={styles.stroke} cx="12" cy="12" r="10" />
      <path className={styles.stroke} d="M12 8v5" strokeLinecap="round" />
      <path className={styles.stroke} d="M12 15.5h.01" strokeLinecap="round" />
    </g>
  ),
  ['lock']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  ),
  ['unlock']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 11V7a5 5 0 015-5 5 5 0 015 5"
      />
      <path
        className={cn(styles.stroke, styles.indicator)}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 7l2-2"
      />
    </g>
  ),
  ['expand']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8V4a1 1 0 011-1h4M21 8V4a1 1 0 00-1-1h-4M3 16v4a1 1 0 001 1h4M21 16v4a1 1 0 01-1 1h-4"
    />
  ),
  ['calendar']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
  ['funnel']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V20l-4 4v-10.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  ),
  ['gear']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <circle className={cn(styles.stroke, styles.center)} cx="12" cy="12" r="3" strokeWidth="2" />
    </g>
  ),
  ['bell']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  ),
  ['home']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
    />
  ),
  ['dashboard']: () => (
    <g className={styles.body}>
      <rect className={styles.stroke} x="3" y="3" width="7" height="7" rx="2" />
      <rect className={styles.stroke} x="14" y="3" width="7" height="4" rx="2" />
      <rect className={styles.stroke} x="14" y="10" width="7" height="11" rx="2" />
      <rect className={styles.stroke} x="3" y="13" width="7" height="8" rx="2" />
      <circle className={cn(styles.fill, styles.accent)} cx="6.5" cy="6.5" r="1" />
    </g>
  ),
  ['chart-bar']: () => (
    <g className={styles.body}>
      <rect className={styles.stroke} x="4" y="14" width="4" height="7" rx="1" />
      <rect className={styles.stroke} x="10" y="8" width="4" height="13" rx="1" />
      <rect className={styles.stroke} x="16" y="4" width="4" height="17" rx="1" />
      <line className={styles.stroke} x1="2" y1="22" x2="22" y2="22" />
    </g>
  ),
  ['list']: () => (
    <g className={styles.body}>
      <line className={styles.stroke} x1="3" y1="4" x2="21" y2="4" strokeLinecap="square" />
      <line className={styles.stroke} x1="3" y1="12" x2="21" y2="12" strokeLinecap="square" />
      <line className={styles.stroke} x1="3" y1="20" x2="21" y2="20" strokeLinecap="square" />
      <circle className={cn(styles.fill, styles.bullet)} cx="3" cy="4" r="1.2" />
      <circle className={cn(styles.fill, styles.bullet)} cx="3" cy="12" r="1.2" />
      <circle className={cn(styles.fill, styles.bullet)} cx="3" cy="20" r="1.2" />
    </g>
  ),
  ['file']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8m8 4H8m2-8H8"
    />
  ),
  ['survey']: () => (
    <g className={styles.body}>
      <rect className={styles.stroke} x="4" y="3" width="16" height="18" rx="2" />
      <path className={cn(styles.stroke, styles.checkmark)} d="M8 12l3 3 5-6" />
    </g>
  ),
  ['comment-check']: () => (
    <g className={styles.body}>
      <rect className={styles.stroke} x="2" y="3" width="20" height="14" rx="2" />
      <path className={cn(styles.stroke, styles.tail)} d="M8 17L6 21L10 18" />
      <path className={cn(styles.stroke, styles.checkmark)} d="M7 10L10 13L17 6" strokeWidth="2.5" />
    </g>
  ),
  ['check']: () => (
    <path
      className={styles.stroke}
      d="M5 12l5 5L19 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  ['check-circle']: () => (
    <g className={styles.body}>
      <circle className={styles.stroke} cx="12" cy="12" r="10" />
      <path
        className={cn(styles.stroke, styles.checkmark)}
        d="M9 12l2 2 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  ),
  ['x-circle']: () => (
    <g className={styles.body}>
      <circle className={styles.stroke} cx="10" cy="10" r="8" />
      <path
        className={cn(styles.fill, styles.xmark)}
        d="M7.293 6.293a1 1 0 011.414 0L10 7.586l1.293-1.293a1 1 0 111.414 1.414L11.414 9l1.293 1.293a1 1 0 01-1.414 1.414L10 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 9 7.293 7.707a1 1 0 010-1.414z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </g>
  ),
  ['keyboard']: () => (
    <g className={styles.body}>
      <rect className={styles.stroke} x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
      <rect className={cn(styles.stroke, styles.key)} x="4" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="7.5" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="11" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="14.5" y="7.5" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="18" y="7.5" width="2" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="4" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="7.5" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="11" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="14.5" y="11" width="2.5" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.key)} x="18" y="11" width="2" height="2.5" rx="0.5" strokeWidth="1.2" />
      <rect className={cn(styles.stroke, styles.spacebar)} x="6" y="14.5" width="12" height="2.5" rx="0.5" strokeWidth="1.2" />
    </g>
  ),
  ['palette']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.51-.19-.99-.52-1.36-.31-.35-.48-.82-.48-1.32 0-1.1.9-2 2-2h2.36c3.03 0 5.64-2.61 5.64-5.64C22 5.48 17.52 2 12 2z"
        strokeWidth="1.5"
      />
      <circle className={cn(styles.fill, styles.paint)} cx="7.5" cy="11.5" r="1.5" />
      <circle className={cn(styles.fill, styles.paint)} cx="10.5" cy="7.5" r="1.5" />
      <circle className={cn(styles.fill, styles.paint)} cx="15" cy="7.5" r="1.5" />
      <circle className={cn(styles.fill, styles.paint)} cx="17.5" cy="11" r="1.5" />
    </g>
  ),
  ['brush']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        d="M3 21c0 0 1-2 3-4s6-4 8-6c2-2 6-8 8-10s-2 0-4 2s-8 6-10 8s-4 6-4 8s-1 2-1 2z"
        strokeWidth="1.5"
      />
      <path className={cn(styles.stroke, styles.handle)} d="M14 10l6-6" strokeWidth="2" />
    </g>
  ),
  ['sliders']: () => (
    <g className={styles.body}>
      <line className={styles.stroke} x1="4" y1="21" x2="4" y2="14" />
      <line className={styles.stroke} x1="4" y1="10" x2="4" y2="3" />
      <circle className={cn(styles.fill, styles.knob)} cx="4" cy="12" r="2" />
      <line className={styles.stroke} x1="12" y1="21" x2="12" y2="18" />
      <line className={styles.stroke} x1="12" y1="14" x2="12" y2="3" />
      <circle className={cn(styles.fill, styles.knob)} cx="12" cy="16" r="2" />
      <line className={styles.stroke} x1="20" y1="21" x2="20" y2="10" />
      <line className={styles.stroke} x1="20" y1="6" x2="20" y2="3" />
      <circle className={cn(styles.fill, styles.knob)} cx="20" cy="8" r="2" />
    </g>
  ),
  ['diamond']: () => (
    <g className={styles.body}>
      <polygon className={styles.stroke} points="12,2 2,9 12,22 22,9" strokeWidth="1.5" />
      <line className={cn(styles.stroke, styles.facet)} x1="2" y1="9" x2="22" y2="9" />
      <line className={cn(styles.stroke, styles.facet)} x1="12" y1="2" x2="8" y2="9" />
      <line className={cn(styles.stroke, styles.facet)} x1="12" y1="2" x2="16" y2="9" />
      <line className={cn(styles.stroke, styles.facet)} x1="8" y1="9" x2="12" y2="22" />
      <line className={cn(styles.stroke, styles.facet)} x1="16" y1="9" x2="12" y2="22" />
    </g>
  ),
  ['paint-roller']: () => (
    <g className={styles.body}>
      <rect className={cn(styles.stroke, styles.roller)} x="2" y="3" width="14" height="6" rx="1" strokeWidth="1.5" />
      <line className={cn(styles.stroke, styles.shaft)} x1="18" y1="6" x2="20" y2="6" strokeWidth="2" />
      <line className={cn(styles.stroke, styles.shaft)} x1="20" y1="6" x2="20" y2="12" strokeWidth="2" />
      <line className={cn(styles.stroke, styles.handle)} x1="20" y1="12" x2="12" y2="12" strokeWidth="2" />
      <line className={cn(styles.stroke, styles.handle)} x1="12" y1="12" x2="12" y2="21" strokeWidth="2" />
    </g>
  ),
  ['chat']: () => (
    <g className={styles.body}>
      <path
        className={styles.stroke}
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        strokeWidth="1.5"
      />
      <line className={cn(styles.stroke, styles.messageLine)} x1="7" y1="8" x2="17" y2="8" strokeWidth="2" />
      <line className={cn(styles.stroke, styles.messageLine)} x1="7" y1="12" x2="13" y2="12" strokeWidth="2" />
    </g>
  ),
  ['clock']: () => (
    <g className={styles.body}>
      <circle className={styles.stroke} cx="12" cy="12" r="10" />
      <line className={cn(styles.stroke, styles.hourHand)} x1="12" y1="12" x2="12" y2="7" />
      <line className={cn(styles.stroke, styles.minuteHand)} x1="12" y1="12" x2="8" y2="12" />
      <circle className={cn(styles.fill, styles.centerDot)} cx="12" cy="12" r="1" />
    </g>
  ),
  ['folder']: () => (
    <path
      className={styles.stroke}
      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    />
  ),
  ['users-group']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  ),
  ['trend-up']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v16m0-16l-4 4m4-4l4 4"
    />
  ),
  ['trend-up-right']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7m0 0H9m8 0v8"
    />
  ),
  ['trend-right']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12h16m0 0l-4-4m4 4l-4 4"
    />
  ),
  ['trend-down-right']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 7l10 10m0 0V9m0 8H9"
    />
  ),
  ['trend-down']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20V4m0 16l-4-4m4 4l4-4"
    />
  ),
  ['star']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  ),
  ['star-filled']: () => (
    <path
      className={styles.fill}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  ),
  ['cloud-upload']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  ),
  ['inbox']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  ),
  ['archive']: () => (
    <path
      className={styles.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  ),

  // ========================================
  // Meetscribe ブランドアイコン（洗練版）
  // ========================================

  // メイン: 音声波形がドキュメントに変換されるイメージ
  // シンプルで認識しやすい、24x24で映える
  ['meetscribe-brand']: () => (
    <g className={styles.body}>
      {/* 角丸ドキュメント */}
      <rect className={styles.stroke} x="5" y="2" width="14" height="20" rx="2.5" strokeWidth="1.8" />
      {/* 動的な音声波形（5本、中央が高い） */}
      <line className={styles.stroke} x1="8" y1="9" x2="8" y2="15" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="10.5" y1="7" x2="10.5" y2="17" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="13" y1="5.5" x2="13" y2="18.5" strokeWidth="2.2" strokeLinecap="round" />
      <line className={styles.stroke} x1="15.5" y1="7" x2="15.5" y2="17" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="18" y1="9" x2="18" y2="15" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // バリエーション1: M字波形（ロゴ的、ミニマル）
  ['meetscribe-brand-wave']: () => (
    <g className={styles.body}>
      {/* M字が音声波形を表現 */}
      <path
        className={styles.stroke}
        d="M2 16V10l4.5 4 5.5-10 5.5 10 4.5-4v6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* ベースライン */}
      <line className={styles.stroke} x1="2" y1="20" x2="22" y2="20" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),

  // バリエーション2: 円形マイク + テキストライン（バランス型）
  ['meetscribe-brand-mic']: () => (
    <g className={styles.body}>
      {/* マイク */}
      <rect className={styles.stroke} x="9" y="3" width="6" height="9" rx="3" strokeWidth="1.8" />
      <path className={styles.stroke} d="M6 10v1.5a6 6 0 0012 0V10" strokeWidth="1.8" />
      <line className={styles.stroke} x1="12" y1="17.5" x2="12" y2="19" strokeWidth="1.8" />
      {/* テキストライン（議事録を表現） */}
      <line className={styles.stroke} x1="6" y1="21" x2="18" y2="21" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // バリエーション3: 再生+ドキュメント（動画→文字起こし）
  ['meetscribe-brand-play']: () => (
    <g className={styles.body}>
      {/* ドキュメント */}
      <path className={styles.stroke} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeWidth="1.8" />
      <path className={styles.stroke} d="M14 2v6h6" strokeWidth="1.8" />
      {/* 再生ボタン（大きめ、中央配置） */}
      <path className={styles.fill} d="M9 10v6l6-3-6-3z" />
    </g>
  ),

  // バリエーション4: 吹き出し波形（会話→テキスト）
  ['meetscribe-brand-chat']: () => (
    <g className={styles.body}>
      {/* 吹き出し */}
      <path
        className={styles.stroke}
        d="M21 12a9 9 0 01-9 9H4l2.5-2.5A9 9 0 1121 12z"
        strokeWidth="1.8"
      />
      {/* 音声波形（3本） */}
      <line className={styles.stroke} x1="9" y1="10" x2="9" y2="14" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="12" y1="8" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="15" y1="10" x2="15" y2="14" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // バリエーション5: シールド型（信頼性・セキュリティ感）
  ['meetscribe-brand-shield']: () => (
    <g className={styles.body}>
      {/* シールド */}
      <path
        className={styles.stroke}
        d="M12 2L4 6v6c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V6l-8-4z"
        strokeWidth="1.8"
      />
      {/* 音声波形（3本） */}
      <line className={styles.stroke} x1="9" y1="10" x2="9" y2="14" strokeWidth="2" strokeLinecap="round" />
      <line className={styles.stroke} x1="12" y1="8" x2="12" y2="16" strokeWidth="2.2" strokeLinecap="round" />
      <line className={styles.stroke} x1="15" y1="10" x2="15" y2="14" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // ========================================
  // LOADING アイコン
  // ========================================
  ['spinner']: () => (
    <g className={styles.body}>
      <circle
        className={cn(styles.stroke, styles.track)}
        cx="12"
        cy="12"
        r="9"
        strokeWidth="2"
        opacity="0.25"
      />
      <path
        className={cn(styles.fill, styles.indicator)}
        d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z"
      />
    </g>
  ),
  ['spinner-thin']: () => (
    <g className={styles.body}>
      <circle
        className={cn(styles.stroke, styles.track)}
        opacity="0.1"
        cx="12"
        cy="12"
        r="11"
        strokeWidth="1"
      />
      <path
        className={cn(styles.fill, styles.indicator)}
        d="M12 1a11 11 0 0 1 11 11h-1a10 10 0 0 0-10-10V1z"
      />
    </g>
  ),
  ['spinner-thick']: () => (
    <g className={styles.body}>
      <circle
        className={cn(styles.stroke, styles.track)}
        opacity="0.3"
        cx="12"
        cy="12"
        r="8"
        strokeWidth="4"
      />
      <path
        className={cn(styles.fill, styles.indicator)}
        d="M12 3a9 9 0 0 1 9 9h-4a5 5 0 0 0-5-5V3z"
      />
    </g>
  ),
  ['loading-dots']: () => (
    <g className={styles.body}>
      <circle className={cn(styles.fill, styles.dot)} cx="4" cy="12" r="1.5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle className={cn(styles.fill, styles.dot)} cx="12" cy="12" r="1.5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle className={cn(styles.fill, styles.dot)} cx="20" cy="12" r="1.5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="1s" />
      </circle>
    </g>
  ),
  ['loading-pulse']: () => (
    <circle
      className={cn(styles.stroke, styles.pulse)}
      cx="12"
      cy="12"
      r="6"
      strokeWidth="2"
      opacity="0.5"
    />
  ),
};

// ========================================
// ローディングプリセット
// ========================================
const PRESET_MAP: Record<LoadingPreset, { name: IconName }> = {
  spinner: { name: 'spinner' },
  dots: { name: 'loading-dots' },
  pulse: { name: 'loading-pulse' },
  cube: { name: 'spinner' },
  'cube-glow': { name: 'spinner' },
  interview: { name: 'spinner' },
  dna: { name: 'spinner' },
  atom: { name: 'spinner' },
  rings: { name: 'spinner' },
  gears: { name: 'spinner' },
  hourglass: { name: 'spinner' },
  wave: { name: 'spinner' },
  radar: { name: 'spinner' },
  eclipse: { name: 'spinner' },
  clock: { name: 'spinner' },
  morph: { name: 'spinner' },
  orbit: { name: 'spinner' },
  triangle: { name: 'spinner' },
  heartbeat: { name: 'spinner' },
};

// ========================================
// サイズプリセット
// ========================================
const SIZE_VALUES: Record<SizePreset, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// ========================================
// スタイルクラスマッピング
// ========================================
const ANIMATION_CLASSES: Record<AnimationPreset, string> = {
  bounce: styles.bounce,
  'bounce-in': styles.bounceIn,
  'bounce-out': styles.bounceOut,
  'bounce-horizontal': styles.bounceHorizontal,
  ping: styles.ping,
  pulse: styles.pulse,
  'pulse-scale': styles.pulseScale,
  spin: styles.spin,
  'spin-slow': styles.spinSlow,
  'spin-fast': styles.spinFast,
  'spin-reverse': styles.spinReverse,
  wiggle: styles.wiggle,
  'wiggle-more': styles.wiggleMore,
  shake: styles.shake,
  'shake-hard': styles.shakeHard,
  float: styles.float,
  'float-rotate': styles.floatRotate,
  heartbeat: styles.heartbeat,
  tada: styles.tada,
  swing: styles.swing,
  'flip-x': styles.flipX,
  'flip-y': styles.flipY,
  'rotate-3d': styles.rotate3d,
  'flip-in': styles.flipIn,
  'flip-out': styles.flipOut,
  pop: styles.pop,
  'pop-in': styles.popIn,
  'rubber-band': styles.rubberBand,
  jello: styles.jello,
  squeeze: styles.squeeze,
  wobble: styles.wobble,
  'fade-in': styles.fadeIn,
  'fade-out': styles.fadeOut,
  'fade-in-up': styles.fadeInUp,
  'fade-in-down': styles.fadeInDown,
  'zoom-in': styles.zoomIn,
  'zoom-out': styles.zoomOut,
  'slide-in-left': styles.slideInLeft,
  'slide-in-right': styles.slideInRight,
  'slide-in-up': styles.slideInUp,
  'slide-in-down': styles.slideInDown,
  glow: styles.glow,
  'glow-strong': styles.glowStrong,
  'glow-pulse': styles.glowPulse,
  'glow-breathe': styles.glowBreathe,
  'glow-rainbow': styles.glowRainbow,
  neon: styles.neon,
  'color-shift': styles.colorShift,
  rainbow: styles.rainbow,
  flash: styles.flash,
  flicker: styles.flicker,
  sparkle: styles.sparkle,
  twinkle: styles.twinkle,
  glitch: styles.glitch,
  'blur-pulse': styles.blurPulse,
  morph: styles.morph,
  liquid: styles.liquid,
  orbit: styles.orbit,
  ripple: styles.ripple,
};

const HOVER_CLASSES: Record<HoverPreset, string> = {
  scale: styles.hoverScale,
  'scale-large': styles.hoverScaleLarge,
  rotate: styles.hoverRotate,
  'rotate-full': styles.hoverRotateFull,
  glow: styles.hoverGlow,
  neon: styles.hoverNeon,
  bounce: styles.hoverBounce,
  pop: styles.hoverPop,
  wiggle: styles.hoverWiggle,
  shake: styles.hoverShake,
  spin: styles.hoverSpin,
  flip: styles.hoverFlip,
  'flip-x': styles.hoverFlipX,
  float: styles.hoverFloat,
  'rubber-band': styles.hoverRubberBand,
  jello: styles.hoverJello,
  tada: styles.hoverTada,
  heartbeat: styles.hoverHeartbeat,
  glitch: styles.hoverGlitch,
};

const COLOR_CLASSES: Record<ColorVariant, string> = {
  current: '',
  primary: styles.colorPrimary,
  success: styles.colorSuccess,
  warning: styles.colorWarning,
  danger: styles.colorError,
  info: styles.colorInfo,
  muted: styles.colorMuted,
};

// ========================================
// Icon コンポーネント
// ========================================
const Icon: React.FC<IconProps> = ({
  name: nameProp,
  preset,
  size = 24,
  className,
  style,
  stroke,
  fill,
  strokeWidth = 2,
  dot = false,
  dotPing = false,
  disabled = false,
  active = false,
  animation,
  hover,
  animate = true,
  glow = false,
  glowStrong = false,
  clickable = false,
  onClick,
  color = 'current',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => {
  // preset から name を解決
  const presetConfig = preset ? PRESET_MAP[preset] : undefined;
  const name = (nameProp ?? presetConfig?.name ?? '') as IconName;

  // サイズを解決
  const resolvedSize = typeof size === 'string' ? SIZE_VALUES[size] : size;

  // ローディングアイコン判定
  const isLoadingIcon = name.startsWith('loading-') || name.startsWith('spinner');

  // クラス名を構築
  const iconClasses = cn(
    styles.icon,
    // アニメーション
    animate && animation && ANIMATION_CLASSES[animation],
    // ローディングアイコンは自動でスピン
    isLoadingIcon && !animation && styles.spin,
    // ホバー
    hover && HOVER_CLASSES[hover],
    // カラー
    color !== 'current' && COLOR_CLASSES[color],
    // グロー
    glow && styles.glow,
    glowStrong && styles.glowStrong,
    // 状態
    clickable && styles.clickable,
    disabled && styles.disabled,
    active && styles.active,
    // ドット
    dot && !dotPing && styles.dot,
    dotPing && styles.dotPing,
    // ユーザー指定
    className,
  );

  // SVG props
  const svgProps = {
    className: iconClasses,
    style: {
      ...style,
      // stroke/fill のカスタマイズがある場合のみ上書き
      ...(stroke && { '--icon-stroke': stroke }),
      ...(fill && { '--icon-fill': fill }),
    } as React.CSSProperties,
    width: resolvedSize,
    height: resolvedSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    onClick,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden ?? !ariaLabel,
    'data-icon': name,
  };

  // Path をレンダリング
  const renderPath = () => {
    const pathRenderer = ICON_PATHS[name];
    if (pathRenderer) {
      return pathRenderer({});
    }
    if (import.meta.env?.DEV) {
      console.warn(`Icon "${name}" not found`);
    }
    return null;
  };

  return <svg {...svgProps}>{renderPath()}</svg>;
};

export default Icon;
