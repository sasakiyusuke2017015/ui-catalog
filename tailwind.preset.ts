import type { Config } from 'tailwindcss'

/**
 * @ui-catalog/core Tailwind CSS Preset
 *
 * 流体タイポグラフィとスペーシングを提供
 * 使用方法: tailwind.config.ts で presets: [uiCatalogPreset] を指定
 */
const uiCatalogPreset: Partial<Config> = {
  theme: {
    extend: {
      fontSize: {
        // xs は可読性のため固定、それ以外はclamp()で流体化
        'fluid-xs': ['0.625rem', { lineHeight: '1.5' }],
        'fluid-sm': ['clamp(0.6875rem, 0.65rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(0.925rem, 0.875rem + 0.25vw, 1rem)', { lineHeight: '1.7' }],
        'fluid-lg': ['clamp(1.05rem, 1rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        'fluid-xl': ['clamp(1.15rem, 1.05rem + 0.5vw, 1.25rem)', { lineHeight: '1.5' }],
        'fluid-2xl': ['clamp(1.35rem, 1.2rem + 0.75vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-3xl': ['clamp(1.5rem, 1.4rem + 1vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-4xl': ['clamp(2rem, 1.8rem + 1.5vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-5xl': ['clamp(2.5rem, 2.2rem + 2vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        // fluid-spacing: レスポンシブな余白（clampを使用）
        'fluid-xs': 'clamp(0.25rem, 0.5vw, 0.5rem)', // 4px → 8px
        'fluid-sm': 'clamp(0.5rem, 1vw, 0.75rem)', // 8px → 12px
        'fluid-md': 'clamp(0.75rem, 1.5vw, 1rem)', // 12px → 16px
        'fluid-lg': 'clamp(1rem, 2vw, 1.5rem)', // 16px → 24px
        'fluid-xl': 'clamp(1.5rem, 3vw, 2rem)', // 24px → 32px
        'fluid-2xl': 'clamp(2rem, 4vw, 3rem)', // 32px → 48px
      },
    },
  },
}

export default uiCatalogPreset
