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

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;

  // 右上に赤い通知ドットを表示
  dot?: boolean;

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
