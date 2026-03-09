/**
 * テーマ機能エクスポート
 *
 * @example
 * ```tsx
 * // Provider でラップ
 * import { ThemeProvider } from '@ui-catalog/core/theme'
 *
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * // コンポーネントで使用
 * import { useTheme, useColorTheme } from '@ui-catalog/core/theme'
 *
 * const { colors, shapes } = useTheme()
 * const [colorTheme, setColorTheme] = useColorTheme()
 * ```
 */

// ============================================
// 型
// ============================================

export type {
  ColorTheme,
  ShapeTheme,
  BackgroundTheme,
  ThemeConfig,
  CardAnimationVariant,
  TableRowAnimationVariant,
  DropMenuAnimationVariant,
  GlobalThemeSettings,
  AnimationSettings,
  FullThemeSettings,
} from './types'

export {
  DEFAULT_GLOBAL_THEME,
  DEFAULT_ANIMATION,
  DEFAULT_FULL_THEME,
  THEME_STORAGE_KEYS,
} from './types'

// ============================================
// Storage ユーティリティ
// ============================================

export {
  isBrowser,
  getStoredValue,
  setStoredValue,
  removeStoredValue,
  atomWithStorageSync,
} from './storage'

// ============================================
// Jotai Atoms
// ============================================

export {
  // 基本テーマ
  colorThemeAtom,
  shapeThemeAtom,
  backgroundThemeAtom,
  // アニメーション
  tableRowAnimationAtom,
  cardAnimationAtom,
  dropMenuAnimationAtom,
  animationSpeedAtom,
  // 派生
  themeConfigAtom,
  // リセット
  resetThemeAtom,
  resetAnimationAtom,
  resetAllThemeAtom,
} from './atoms'

// ============================================
// Provider
// ============================================

export { ThemeProvider, useThemeContext } from './ThemeProvider'

// ============================================
// Hooks
// ============================================

export {
  // 基本
  useTheme,
  useColorTheme,
  useShapeTheme,
  useBackgroundTheme,
  useBackgroundStyle,
  // アニメーション
  useTableRowAnimation,
  useCardAnimation,
  useDropMenuAnimation,
  useAnimationSpeed,
  // リセット
  useResetTheme,
  useResetAnimation,
  useResetAllTheme,
  // 複合
  useFullTheme,
} from './useTheme'

// ============================================
// コンポーネント別テーマ
// ============================================

export type {
  ThemeValue,
  ComponentThemeConfig,
  ComponentThemeUsage,
  ThemeableComponent,
  ComponentThemesMap,
} from './componentThemes'

export {
  // カテゴリ・ラベル
  COMPONENT_CATEGORIES,
  COMPONENT_LABELS,
  COMPONENT_THEME_USAGE,
  // デフォルト
  DEFAULT_COMPONENT_THEMES,
  COMPONENT_THEMES_STORAGE_KEY,
  // Atoms
  componentThemesAtom,
  resetComponentThemesAtom,
  updateComponentThemeAtom,
  // ユーティリティ
  getComponentThemeConfig,
  resolveComponentTheme,
} from './componentThemes'
