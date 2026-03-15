/**
 * @ui-catalog/core/primitives
 *
 * 最小単位の視覚要素 - ビジネスロジック・機能なし
 */

// Box - レイアウトプリミティブ
export { default as Box } from './Box'
export type { BoxProps } from './Box'

// Text - テキスト表示
export { default as Text } from './Text'
export type { TextProps, TextSize, TextWeight, TextAlign } from './Text'

// Stack - Flexboxレイアウト
export { default as Stack } from './Stack'
export type { StackProps, StackDirection, StackAlign, StackJustify } from './Stack'

// Icon - アイコン表示
export { default as Icon } from './Icon'
export type {
  IconProps,
  AnimationEase,
  AnimationTrigger,
  AnimationDuration,
  IconSvgProps,
  IconAnimationConfig,
  LoadingPreset,
} from './Icon'

// Animated - アニメーションラッパー
export { Animated } from './Animated'
export type {
  AnimatedProps,
  AnimationCategory,
  FramerAnimationVariant,
  AnimationType,
  SlideDirection,
} from './Animated'
