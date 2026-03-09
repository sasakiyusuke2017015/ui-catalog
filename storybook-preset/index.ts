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
    // Docker環境向けHMR設定（リモートアクセス許可）
    viteConfig.server = {
      ...viteConfig.server,
      host: '0.0.0.0',
      allowedHosts: true,
      hmr: {
        host: 'localhost',
      },
    }

    // @/ エイリアスをui-catalogのルートに設定（stories/test用）
    const { resolve, dirname } = await import('path')
    const { fileURLToPath } = await import('url')
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const uiCatalogRoot = resolve(__dirname, '..')

    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: {
        ...(viteConfig.resolve?.alias as Record<string, string> | undefined),
        '@/': `${uiCatalogRoot}/`,
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
