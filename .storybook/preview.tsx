/**
 * Storybook Preview 設定
 *
 * ui-catalog の Storybook 用プレビュー設定
 * storybook-preset の createPreview を使用
 */
import '../styles/globals.css'
import { createPreview } from '../storybook-preset/preview.tsx'

const preview = createPreview()

export default preview
