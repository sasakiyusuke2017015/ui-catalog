/**
 * ui-catalog Storybook Preset
 *
 * 他のプロジェクトで Storybook を設定する際に使用
 *
 * @example .storybook/main.ts
 * ```ts
 * import type { StorybookConfig } from "@storybook/react-vite";
 * import { storybookConfig } from "@ui-catalog/core/storybook-preset";
 *
 * const config: StorybookConfig = {
 *   ...storybookConfig,
 *   stories: ["../src/**\/*.stories.@(js|jsx|ts|tsx|mdx)"],
 * };
 *
 * export default config;
 * ```
 */

import type { StorybookConfig } from '@storybook/react-vite'

/**
 * 推奨 Storybook 設定
 */
export const storybookConfig: Partial<StorybookConfig> = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: '@storybook/react-vite',
}

/**
 * Vite 設定の拡張（Docker 環境向け）
 */
export function withDockerHmr(
  config?: StorybookConfig['viteFinal']
): StorybookConfig['viteFinal'] {
  return async (viteConfig, options) => {
    viteConfig.server = {
      ...viteConfig.server,
      host: '0.0.0.0',
      hmr: {
        host: 'localhost',
      },
    }
    if (typeof config === 'function') {
      return config(viteConfig, options)
    }
    return viteConfig
  }
}

/**
 * 完全な Storybook 設定を生成
 */
export function createStorybookConfig(
  options: {
    stories: string[]
    addons?: string[]
    viteFinal?: StorybookConfig['viteFinal']
  }
): StorybookConfig {
  return {
    ...storybookConfig,
    stories: options.stories,
    addons: [
      ...(storybookConfig.addons ?? []),
      ...(options.addons ?? []),
    ],
    viteFinal: options.viteFinal ?? withDockerHmr(undefined),
  } as StorybookConfig
}
