/**
 * UIコンポーネント用定数
 * レイアウトサイズ、カラーマッピング等
 */

/**
 * レイアウトサイズ定数
 */
export const LAYOUT_SIZES = {
  HEADER_HEIGHT: 48, // ヘッダーの高さ (px)
  FOOTER_HEIGHT: 48, // フッターの高さ (px)
  LEFT_PANE_WIDTH: 36, // 左ペインの幅 (px)
  BOTTOM_TAB_HEIGHT: 56, // スマホ用下部タブバーの高さ (px)
} as const;

/**
 * カラーマッピング
 * YAMLのcolor定義をTailwindクラスとHEXに変換
 */
export const COLOR_MAP = {
  gray: {
    bg: 'bg-gray-400',
    text: 'text-gray-600',
    hex: '#9CA3AF',
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-700',
    hex: '#10B981',
  },
  blue: {
    bg: 'bg-blue-600',
    text: 'text-blue-700',
    hex: '#2563EB',
  },
  yellow: {
    bg: 'bg-yellow-400',
    text: 'text-yellow-700',
    hex: '#FBBF24',
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-orange-700',
    hex: '#F97316',
  },
  red: {
    bg: 'bg-red-500',
    text: 'text-red-700',
    hex: '#EF4444',
  },
} as const;
