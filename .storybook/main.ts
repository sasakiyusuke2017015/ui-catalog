/**
 * Storybook Main 設定
 *
 * ui-catalog の Storybook 設定
 * storybook-preset の createStorybookConfig を使用
 */
import { createStorybookConfig } from '../storybook-preset'

const config = createStorybookConfig({
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
})

export default config
