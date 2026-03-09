/**
 * @ui-catalog/core - UIコンポーネントパッケージ
 *
 * Atomic Design に基づく UI コンポーネントライブラリ
 *
 * 構造:
 * - atoms/       基本コンポーネント（Button, Input, Badge など）
 * - molecules/   複合コンポーネント（FormField, DatePicker など）
 * - organisms/   高機能コンポーネント（InteractiveTable, TransferList など）
 * - templates/   レイアウト（Header, Footer, SideNav など）
 * - decorations/ 装飾（BackgroundTexture, GradientOverlay など）
 * - magicui/     アニメーションコンポーネント
 * - hooks/       カスタムフック
 * - utils/       ユーティリティ関数
 * - adapters/    外部ライブラリアダプター
 * - constants/   定数・デザイントークン
 * - types/       型定義
 *
 * 推奨インポート:
 * ```typescript
 * import { Button, Input } from '@ui-catalog/core/atoms'
 * import { FormField } from '@ui-catalog/core/molecules'
 * import { InteractiveTable } from '@ui-catalog/core/organisms'
 * ```
 */

// Atomic Design レイヤー
export * from './atoms'
export * from './molecules'
export * from './organisms'
export * from './templates'
export * from './decorations'
export * from './magicui'

// ユーティリティ
export * from './hooks'
export * from './utils'
export * from './adapters'
export * from './constants'
export * from './types'

// バージョン管理
export { VERSION_REGISTRY, checkVersions, initUICatalog, exportVersionsAsJson } from './version'
export type { ComponentName, VersionRegistry, VersionMismatch, VersionCheckResult } from './version'
