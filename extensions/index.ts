/**
 * @ui-catalog/core/extensions
 *
 * プロジェクト拡張用 - absorb の受け皿
 *
 * 構造:
 * - 1on1/    1on1プロジェクト固有のコンポーネント
 * - shared/  複数プロジェクトで共有するコンポーネント
 *
 * 育成フロー:
 * 1. apps/web から absorb で extensions/1on1/ に配置
 * 2. 汎用化できたら shared/ に移動
 * 3. さらに洗練されたら core/ に昇格
 */

// 1on1 プロジェクト固有
export * from './1on1'

// 複数プロジェクト共有
export * from './shared'
