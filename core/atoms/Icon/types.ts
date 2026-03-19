/**
 * Icon コンポーネント型定義
 */
import type React from 'react';
import type { Transition, Easing } from 'framer-motion';
import type { IconName } from '../../constants';

// framer-motion の Easing 型をエイリアス
export type AnimationEase = Easing;

export type AnimationTrigger = 'hover' | 'tap' | 'condition' | 'none';

export type AnimationDuration = number;

/**
 * ローディングプリセット
 * preset を指定すると name, stroke, fill が自動設定される
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

export interface IconProps {
  /** アイコン名（presetを使う場合は省略可） */
  name?: IconName;
  /** ローディングプリセット（指定するとnameが自動設定される） */
  preset?: LoadingPreset;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;

  // 右上に赤い通知ドットを表示
  dot?: boolean;
  /** ドットにパルスアニメーションを適用 */
  dotPing?: boolean;

  // shake アニメーション（ベルのように揺れる）
  shake?: boolean;

  // インタラクティブモード（hover/tapアニメーションを自動適用）
  interactive?: boolean;

  // アニメーション設定
  animationTrigger?: AnimationTrigger;
  condition?: boolean;

  // スケールアニメーション
  hoverScale?: number;
  tapScale?: number;
  conditionAnimation?: {
    rotate?: number[];
    scale?: number[];
    opacity?: number[];
    x?: number[];
    y?: number[];
  };

  // トランジション設定
  transition?: Transition;
  ease?: AnimationEase;
  duration?: AnimationDuration;
  repeat?: number;
  delay?: number;

  // イベントハンドラ
  onClick?: () => void;

  // ========================================
  // SCSS ベースのアニメーション（新規追加）
  // ========================================

  /** SCSS アニメーションプリセット */
  animationPreset?: AnimationPreset;

  /** ホバー時のアニメーション */
  hoverPreset?: HoverPreset;

  /** グロー効果を有効化 */
  glow?: boolean;

  /** 強いグロー効果 */
  glowStrong?: boolean;

  /** クリック可能なスタイル */
  clickable?: boolean;

  /** 無効状態 */
  disabled?: boolean;
}

// SVGレンダリングのprops型定義
export interface IconSvgProps {
  fillColor: string;
  strokeColor: string;
  fill: string;
}


// アニメーション設定型
export interface IconAnimationConfig {
  animation: {
    rotate?: number[];
    scale?: number[];
    opacity?: number[];
    x?: number[];
    y?: number[];
  };
  transition: {
    repeat?: number;
    duration?: number;
    ease?: string;
    delay?: number;
  };
}
