import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/.storybook/**'],
    setupFiles: ['./vitest.setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
