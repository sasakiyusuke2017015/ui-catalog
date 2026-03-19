/**
 * Icon コンポーネント型定義
 *
 * 設計原則:
 * - SVG は幾何学データ（Path）に徹する
 * - SCSS で魂（色・動き・状態）を吹き込む
 * - currentColor を活用し親要素の色を継承
 */
import type React from 'react';
import type { IconName } from '../../constants';

/**
 * ローディングプリセット
 * preset を指定すると name が自動設定される
 */
export type LoadingPreset =
  | 'spinner'
  | 'dots'
  | 'pulse'
  | 'cube'
  | 'cube-glow'
  | 'interview'
  | 'dna'
  | 'atom'
  | 'rings'
  | 'gears'
  | 'hourglass'
  | 'wave'
  | 'radar'
  | 'eclipse'
  | 'clock'
  | 'morph'
  | 'orbit'
  | 'triangle'
  | 'heartbeat';

/**
 * SCSS ベースのアニメーションプリセット
 * CSS アニメーションで実装（軽量・高パフォーマンス）
 */
export type AnimationPreset =
  // === 基本アニメーション ===
  | 'bounce'
  | 'bounce-in'
  | 'bounce-out'
  | 'bounce-horizontal'
  | 'ping'
  | 'pulse'
  | 'pulse-scale'
  | 'spin'
  | 'spin-slow'
  | 'spin-fast'
  | 'spin-reverse'
  | 'wiggle'
  | 'wiggle-more'
  | 'shake'
  | 'shake-hard'
  | 'float'
  | 'float-rotate'
  | 'heartbeat'
  | 'tada'
  | 'swing'
  // === 3D エフェクト ===
  | 'flip-x'
  | 'flip-y'
  | 'rotate-3d'
  | 'flip-in'
  | 'flip-out'
  // === インタラクティブ ===
  | 'pop'
  | 'pop-in'
  | 'rubber-band'
  | 'jello'
  | 'squeeze'
  | 'wobble'
  // === フェードエフェクト ===
  | 'fade-in'
  | 'fade-out'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'zoom-in'
  | 'zoom-out'
  // === スライドエフェクト ===
  | 'slide-in-left'
  | 'slide-in-right'
  | 'slide-in-up'
  | 'slide-in-down'
  // === グロー効果 ===
  | 'glow'
  | 'glow-strong'
  | 'glow-pulse'
  | 'glow-breathe'
  | 'glow-rainbow'
  | 'neon'
  | 'color-shift'
  | 'rainbow'
  | 'flash'
  | 'flicker'
  // === 特殊効果 ===
  | 'sparkle'
  | 'twinkle'
  | 'glitch'
  | 'blur-pulse'
  | 'morph'
  | 'liquid'
  | 'orbit'
  | 'ripple';

/**
 * ホバー時のアニメーションプリセット
 */
export type HoverPreset =
  // === スケール ===
  | 'scale'
  | 'scale-large'
  // === 回転 ===
  | 'rotate'
  | 'rotate-full'
  // === グロー ===
  | 'glow'
  | 'neon'
  // === バウンス系 ===
  | 'bounce'
  | 'pop'
  | 'wiggle'
  | 'shake'
  // === 回転系 ===
  | 'spin'
  | 'flip'
  | 'flip-x'
  // === 移動系 ===
  | 'float'
  // === 特殊効果 ===
  | 'rubber-band'
  | 'jello'
  | 'tada'
  | 'heartbeat'
  | 'glitch';

/**
 * カラーバリアント
 * currentColor を基本とし、セマンティックな色指定も可能
 */
export type ColorVariant =
  | 'current'    // currentColor（デフォルト）
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'muted';

/**
 * サイズプリセット
 */
export type SizePreset = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IconProps {
  /** アイコン名（presetを使う場合は省略可） */
  name?: IconName;

  /** ローディングプリセット（指定するとnameが自動設定される） */
  preset?: LoadingPreset;

  /** サイズ（数値 or プリセット） */
  size?: number | SizePreset;

  /** 追加のクラス名 */
  className?: string;

  /** インラインスタイル */
  style?: React.CSSProperties;

  /** stroke の色（デフォルト: currentColor） */
  stroke?: string;

  /** fill の色（デフォルト: none） */
  fill?: string;

  /** stroke の太さ */
  strokeWidth?: number;

  // ========================================
  // 状態
  // ========================================

  /** 右上に赤い通知ドットを表示 */
  dot?: boolean;

  /** ドットにパルスアニメーションを適用 */
  dotPing?: boolean;

  /** 無効状態 */
  disabled?: boolean;

  /** アクティブ状態（トグル等で使用） */
  active?: boolean;

  // ========================================
  // アニメーション（SCSS ベース）
  // ========================================

  /** アニメーションプリセット */
  animation?: AnimationPreset;

  /** ホバー時のアニメーション */
  hover?: HoverPreset;

  /** アニメーションを有効にする条件 */
  animate?: boolean;

  /** グロー効果 */
  glow?: boolean;

  /** 強いグロー効果 */
  glowStrong?: boolean;

  // ========================================
  // インタラクション
  // ========================================

  /** クリック可能なスタイル */
  clickable?: boolean;

  /** クリックハンドラ */
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;

  // ========================================
  // セマンティック
  // ========================================

  /** カラーバリアント */
  color?: ColorVariant;

  /** アクセシビリティラベル */
  'aria-label'?: string;

  /** アクセシビリティ非表示 */
  'aria-hidden'?: boolean;
}

/**
 * SVG Path レンダリング用 Props
 * currentColor を使用し、親要素の色を継承
 */
export interface IconPathProps {
  /** クラス名（セマンティッククラス用） */
  className?: string;
}
