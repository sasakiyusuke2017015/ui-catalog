/**
 * デザインシステム - アイコン関連定義
 * アプリケーション全体で使用するアイコン設定のソース・オブ・トゥルース
 */

/**
 * アイコン名定数（単一の情報源）
 * IDEの補完とタイプセーフなアイコン名参照のための定数オブジェクト
 */
export const ICON_NAMES = {
  // 通常のアイコン
  REGULAR: {
    INFO_CIRCLE: 'info-circle',
    INFO_TRIANGLE: 'info-triangle',
    X: 'x',
    HAMBURGER: 'hamburger',
    PERSON: 'person',
    EMPLOYEE: 'employee',
    MAGNIFYING_GLASS: 'magnifying-glass',
    EYE: 'eye',
    EYE_SLASHED: 'eye-slashed',
    COMMENT_CHECK: 'comment-check',
    BELL: 'bell',
    LOCK: 'lock',
    UNLOCK: 'unlock',
    EXPAND: 'expand',
    CALENDAR: 'calendar',
    CHEVRON_DOWN: 'chevron-down',
    CHEVRON_UP: 'chevron-up',
    CHEVRON_LEFT: 'chevron-left',
    CHEVRON_RIGHT: 'chevron-right',
    ARROW_UP_RIGHT: 'arrow-up-right',
    ARROW_IN: 'arrow-in',
    ARROW_ROTATE: 'arrow-rotate',
    ARROW_TURN_LEFT: 'arrow-turn-left',
    ARROW_U_TURN: 'arrow-u-turn',
    DOOR_OUT: 'door-out',
    FUNNEL: 'funnel',
    GEAR: 'gear',
    HOME: 'home',
    DASHBOARD: 'dashboard',
    CHART_BAR: 'chart-bar',
    LIST: 'list',
    FILE: 'file',
    SURVEY: 'survey',
    CHECK_CIRCLE: 'check-circle',
    KEYBOARD: 'keyboard',
    PALETTE: 'palette',
    BRUSH: 'brush',
    SLIDERS: 'sliders',
    DIAMOND: 'diamond',
    PAINT_ROLLER: 'paint-roller',
    CHAT: 'chat',
    CLOCK: 'clock',
    FOLDER: 'folder',
    USERS_GROUP: 'users-group',
    // トレンドアイコン（変化矢印）
    TREND_UP: 'trend-up',
    TREND_UP_RIGHT: 'trend-up-right',
    TREND_RIGHT: 'trend-right',
    TREND_DOWN_RIGHT: 'trend-down-right',
    TREND_DOWN: 'trend-down',
  },
  // ローディングアイコン
  LOADING: {
    SPINNER: 'spinner',
    SPINNER_THIN: 'spinner-thin',
    SPINNER_THICK: 'spinner-thick',
    DOTS: 'loading-dots',
    DOTS_FADE: 'loading-dots-fade',
    PULSE: 'loading-pulse',
    PULSE_RING: 'loading-pulse-ring',
    BARS: 'loading-bars',
    BARS_WAVE: 'loading-bars-wave',
    BOUNCE: 'loading-bounce',
    CLOCK: 'loading-clock',
    WIFI: 'loading-wifi',
    ORBIT: 'loading-orbit',
    MORPH: 'loading-morph',
    PROGRESS: 'loading-progress',
    HALF: 'loading-half',
    DASH: 'loading-dash',
    SCALE_PULSE: 'loading-scale-pulse',
    FLIP: 'loading-flip',
    SQUARE: 'loading-square',
    TRIANGLE: 'loading-triangle',
    CROSS: 'loading-cross',
    STAR: 'loading-star',
    HEXAGON: 'loading-hexagon',
    // 新デザイン
    DNA: 'loading-dna',
    RIPPLE: 'loading-ripple',
    INFINITY: 'loading-infinity',
    ATOM: 'loading-atom',
    HEARTBEAT: 'loading-heartbeat',
    HOURGLASS: 'loading-hourglass',
    GEARS: 'loading-gears',
    WAVE: 'loading-wave',
    RADAR: 'loading-radar',
    CUBE3D: 'loading-cube3d',
    RINGS: 'loading-rings',
    ECLIPSE: 'loading-eclipse',
    INTERVIEW: 'loading-interview',
  },
} as const;

// ICON_NAMESから全てのアイコン名を抽出
const REGULAR_ICONS = Object.values(ICON_NAMES.REGULAR);
const LOADING_ICONS = Object.values(ICON_NAMES.LOADING);
const ALL_ICON_VALUES = [...REGULAR_ICONS, ...LOADING_ICONS];

// 型の導出
export type LoadingIconName = (typeof LOADING_ICONS)[number];

// すべてのアイコンを結合
export const ALL_ICON_TYPES = ALL_ICON_VALUES as readonly string[];

export type IconName =
  | (typeof ICON_NAMES.REGULAR)[keyof typeof ICON_NAMES.REGULAR]
  | (typeof ICON_NAMES.LOADING)[keyof typeof ICON_NAMES.LOADING];

// ローディング系アイコンのみを再エクスポート
export const LOADING_ICON_TYPES: readonly LoadingIconName[] = LOADING_ICONS;

// 型ガード関数
export const isLoadingIcon = (iconName: IconName): boolean =>
  typeof iconName === 'string' &&
  (iconName.startsWith('loading-') || iconName.startsWith('spinner'));

export const isRegularIcon = (iconName: IconName): boolean =>
  typeof iconName === 'string' &&
  !iconName.startsWith('loading-') &&
  !iconName.startsWith('spinner');
