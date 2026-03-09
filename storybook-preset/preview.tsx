/**
 * ui-catalog Storybook Preview 設定
 *
 * 他のプロジェクトで Storybook の preview を設定する際に使用
 *
 * @example .storybook/preview.tsx
 * ```tsx
 * import { createPreview } from "@ui-catalog/core/storybook-preset/preview";
 *
 * const preview = createPreview();
 * export default preview;
 * ```
 */

import type { Preview, Decorator } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { RouterProvider } from '../adapters/RouterContext'
import { reactRouterAdapter } from '../adapters/react-router'

/**
 * Router Decorator
 * react-router-dom の MemoryRouter でラップ
 */
export const withRouter: Decorator = (Story) => (
  <MemoryRouter>
    <RouterProvider adapter={reactRouterAdapter}>
      <Story />
    </RouterProvider>
  </MemoryRouter>
)

/**
 * 基本の decorators
 */
export const baseDecorators: Decorator[] = [withRouter]

/**
 * 基本の parameters
 */
export const baseParameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

/**
 * Preview 設定を生成
 */
export function createPreview(options?: {
  decorators?: Decorator[]
  parameters?: Preview['parameters']
}): Preview {
  return {
    decorators: [
      ...baseDecorators,
      ...(options?.decorators ?? []),
    ],
    parameters: {
      ...baseParameters,
      ...options?.parameters,
    },
  }
}

/**
 * デフォルトの Preview 設定
 */
export const defaultPreview: Preview = createPreview()
