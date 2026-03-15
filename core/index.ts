/**
 * @ui-catalog/core/core
 *
 * 純粋UI層 - ビジネスロジックゼロ
 *
 * 構造:
 * - tokens/      デザイントークン（colors, spacing, typography等）
 * - primitives/  最小単位の視覚要素（Box, Text, Stack, Icon, Animated）
 * - components/  機能を持つUI部品（Button, Input, Modal等）
 * - patterns/    コンポーネントの組み合わせパターン
 * - layouts/     ページレイアウト
 * - constants/   定数定義
 * - types/       共通型定義
 * - styles/      グローバルスタイル
 * - hooks/       UIフック
 * - decorations/ 背景装飾
 * - magicui/     アニメーション
 */

// Tokens
export * from './tokens'

// Primitives
export * from './primitives'

// Components
export * from './components'

// Patterns
export * from './patterns'

// Layouts
export * from './layouts'

// Constants
export * from './constants'

// Types
export * from './types'

// Hooks (ui)
export { useDevice, useRemountKey } from './hooks'
export * from './hooks/ui'

// Decorations
export * from './decorations'

// Magic UI
export * from './magicui'

// Utils
export * from './utils'

// Adapters
export * from './adapters'
