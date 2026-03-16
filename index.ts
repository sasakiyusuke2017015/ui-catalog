/**
 * @ui-catalog/core - UIコンポーネントパッケージ
 *
 * Design System + 育成メカニズム
 *
 * 構造:
 * - core/         純粋UI（tokens, primitives, components, patterns, layouts, styles, constants, types, hooks, decorations, magicui）
 * - extensions/   プロジェクト拡張（1on1/, shared/）
 * - infra/        育成・観測（devtools, version, theme, commands, storybook）
 *
 * 推奨インポート:
 * ```typescript
 * import { Button, Input } from '@ui-catalog/core/components'
 * import { Modal, Dialog } from '@ui-catalog/core/patterns'
 * import { Header, AppShell } from '@ui-catalog/core/layouts'
 * import { InteractiveTable } from '@ui-catalog/core/extensions/shared'
 * import { Question } from '@ui-catalog/core/extensions/1on1'
 * ```
 */

// Core
export * from './core'

// Extensions
export * from './extensions'

// Infra (devtools, version, theme)
export * from './infra'
