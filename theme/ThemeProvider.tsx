/**
 * ThemeProvider
 *
 * テーマ機能を提供するプロバイダーコンポーネント
 * apps 側はこのコンポーネントでラップするだけでテーマ機能が有効になる
 */

import React, { createContext, useContext, useMemo } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import { getThemeConfig, getBackgroundStyle } from '../constants'
import type { ThemeConfig, BackgroundTheme } from '../constants'
import {
  colorThemeAtom,
  shapeThemeAtom,
  backgroundThemeAtom,
  tableRowAnimationAtom,
  cardAnimationAtom,
  dropMenuAnimationAtom,
  animationSpeedAtom,
  resetAllThemeAtom,
} from './atoms'
import type {
  ColorTheme,
  ShapeTheme,
  CardAnimationVariant,
  TableRowAnimationVariant,
  DropMenuAnimationVariant,
} from './types'

// ============================================
// Context 型定義
// ============================================

interface ThemeContextValue {
  // テーマ値
  colorTheme: ColorTheme
  shapeTheme: ShapeTheme
  backgroundTheme: BackgroundTheme
  // 計算済み設定
  themeConfig: ThemeConfig
  backgroundStyle: React.CSSProperties
  // アニメーション
  tableRowAnimation: TableRowAnimationVariant
  cardAnimation: CardAnimationVariant
  dropMenuAnimation: DropMenuAnimationVariant
  animationSpeed: number
  // セッター
  setColorTheme: (value: ColorTheme) => void
  setShapeTheme: (value: ShapeTheme) => void
  setBackgroundTheme: (value: BackgroundTheme) => void
  setTableRowAnimation: (value: TableRowAnimationVariant) => void
  setCardAnimation: (value: CardAnimationVariant) => void
  setDropMenuAnimation: (value: DropMenuAnimationVariant) => void
  setAnimationSpeed: (value: number) => void
  // リセット
  resetAll: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

// ============================================
// Provider コンポーネント
// ============================================

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // 値の取得
  const colorTheme = useAtomValue(colorThemeAtom)
  const shapeTheme = useAtomValue(shapeThemeAtom)
  const backgroundTheme = useAtomValue(backgroundThemeAtom)
  const tableRowAnimation = useAtomValue(tableRowAnimationAtom)
  const cardAnimation = useAtomValue(cardAnimationAtom)
  const dropMenuAnimation = useAtomValue(dropMenuAnimationAtom)
  const animationSpeed = useAtomValue(animationSpeedAtom)

  // セッターの取得
  const setColorTheme = useSetAtom(colorThemeAtom)
  const setShapeTheme = useSetAtom(shapeThemeAtom)
  const setBackgroundTheme = useSetAtom(backgroundThemeAtom)
  const setTableRowAnimation = useSetAtom(tableRowAnimationAtom)
  const setCardAnimation = useSetAtom(cardAnimationAtom)
  const setDropMenuAnimation = useSetAtom(dropMenuAnimationAtom)
  const setAnimationSpeed = useSetAtom(animationSpeedAtom)
  const resetAll = useSetAtom(resetAllThemeAtom)

  // 計算済み値
  const themeConfig = useMemo(
    () => getThemeConfig(colorTheme, shapeTheme),
    [colorTheme, shapeTheme]
  )

  const backgroundStyle = useMemo(
    () => getBackgroundStyle(backgroundTheme),
    [backgroundTheme]
  )

  // Context 値
  const value = useMemo<ThemeContextValue>(
    () => ({
      colorTheme,
      shapeTheme,
      backgroundTheme,
      themeConfig,
      backgroundStyle,
      tableRowAnimation,
      cardAnimation,
      dropMenuAnimation,
      animationSpeed,
      setColorTheme,
      setShapeTheme,
      setBackgroundTheme,
      setTableRowAnimation,
      setCardAnimation,
      setDropMenuAnimation,
      setAnimationSpeed,
      resetAll,
    }),
    [
      colorTheme,
      shapeTheme,
      backgroundTheme,
      themeConfig,
      backgroundStyle,
      tableRowAnimation,
      cardAnimation,
      dropMenuAnimation,
      animationSpeed,
      setColorTheme,
      setShapeTheme,
      setBackgroundTheme,
      setTableRowAnimation,
      setCardAnimation,
      setDropMenuAnimation,
      setAnimationSpeed,
      resetAll,
    ]
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// ============================================
// Hook
// ============================================

/**
 * テーマ Context を取得
 * ThemeProvider 内でのみ使用可能
 */
export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
