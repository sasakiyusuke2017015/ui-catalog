/**
 * コンポーネントテーマ設定
 *
 * コンポーネントごとに使用するテーマを一元管理
 * - 'global': グローバル設定（Jotai atom）を使用
 * - 具体的な値: 固定値を使用
 */

import { atom } from 'jotai'

import type { ColorTheme, ShapeTheme } from '../../core/constants'
import { atomWithStorageSync } from './storage'

// ============================================
// 型定義
// ============================================

/**
 * テーマ設定値
 * - 'global': グローバル設定を使用
 * - ColorTheme/ShapeTheme: 固定値を使用
 */
export type ThemeValue<T> = 'global' | T

/**
 * コンポーネントのテーマ設定
 */
export interface ComponentThemeConfig {
  /** カラーテーマ設定 */
  color?: ThemeValue<ColorTheme>
  /** 形状テーマ設定 */
  shape?: ThemeValue<ShapeTheme>
}

/**
 * コンポーネントが使用するテーマ項目の定義
 */
export interface ComponentThemeUsage {
  /** カラーを使用するか */
  usesColor: boolean
  /** 形状を使用するか */
  usesShape: boolean
  /** 背景を使用するか */
  usesBackground: boolean
  /** テーブル行アニメーションを使用するか */
  usesTableRowAnimation: boolean
  /** カードアニメーションを使用するか */
  usesCardAnimation: boolean
  /** ドロップメニューアニメーションを使用するか */
  usesDropMenuAnimation: boolean
}

/**
 * 登録可能なコンポーネント名（Union Type）
 * 型安全性のためリテラル型で定義
 */
export type ThemeableComponent =
  // グローバルレイアウト
  | 'AppLayout'
  | 'SlideNavi'
  | 'Header'
  | 'SubHeader'
  | 'FloatingMenuButton'
  | 'BottomTabBar'
  // ページレイアウト
  | 'AnswerList'
  | 'AnswerCardList'
  | 'AnswerDetail'
  | 'Dashboard'
  | 'Attendance'
  | 'Chat'
  | 'Schedule'
  | 'SurveyList'
  // 設定パネル
  | 'DesignSettingsPanel'
  | 'AnimationSettingsPanel'
  | 'ThemeSettingsModal'

/**
 * コンポーネントテーマ設定のマップ型
 */
export type ComponentThemesMap = {
  [K in ThemeableComponent]?: ComponentThemeConfig
}

// ============================================
// コンポーネント一覧（UI表示用）
// ============================================

/** コンポーネントのカテゴリ分け */
export const COMPONENT_CATEGORIES = {
  layout: {
    label: 'レイアウト',
    components: ['AppLayout', 'SlideNavi', 'Header', 'SubHeader', 'FloatingMenuButton', 'BottomTabBar'] as ThemeableComponent[],
  },
  pages: {
    label: 'ページ',
    components: ['AnswerList', 'AnswerCardList', 'AnswerDetail', 'Dashboard', 'Attendance', 'Chat', 'Schedule', 'SurveyList'] as ThemeableComponent[],
  },
  settings: {
    label: '設定',
    components: ['DesignSettingsPanel', 'AnimationSettingsPanel', 'ThemeSettingsModal'] as ThemeableComponent[],
  },
} as const

/** コンポーネント名の日本語ラベル */
export const COMPONENT_LABELS: Record<ThemeableComponent, string> = {
  // レイアウト
  AppLayout: 'アプリレイアウト',
  SlideNavi: 'スライドナビ',
  Header: 'ヘッダー',
  SubHeader: 'サブヘッダー',
  FloatingMenuButton: 'メニューボタン',
  BottomTabBar: '下部タブバー',
  // ページ
  AnswerList: '回答一覧',
  AnswerCardList: '回答カード',
  AnswerDetail: '回答詳細',
  Dashboard: 'ダッシュボード',
  Attendance: '勤怠管理',
  Chat: 'チャット',
  Schedule: 'スケジュール',
  SurveyList: 'アンケート一覧',
  // 設定
  DesignSettingsPanel: 'デザイン設定',
  AnimationSettingsPanel: 'アニメーション設定',
  ThemeSettingsModal: 'テーマ設定',
}

/**
 * コンポーネントが使用するテーマ項目
 * 実際のコード使用状況に基づいて定義
 */
export const COMPONENT_THEME_USAGE: Record<ThemeableComponent, ComponentThemeUsage> = {
  // レイアウト
  // AppLayout: 全体コンテナのため設定不要（背景は基本テーマで管理）
  AppLayout: {
    usesColor: false, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  SlideNavi: {
    usesColor: true, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  Header: {
    usesColor: true, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  SubHeader: {
    usesColor: false, usesShape: true, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  FloatingMenuButton: {
    usesColor: true, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  BottomTabBar: {
    usesColor: true, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  // ページ
  AnswerList: {
    usesColor: true, usesShape: true, usesBackground: false,
    usesTableRowAnimation: true, usesCardAnimation: true, usesDropMenuAnimation: false,
  },
  AnswerCardList: {
    usesColor: true, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: true, usesDropMenuAnimation: false,
  },
  AnswerDetail: {
    usesColor: true, usesShape: true, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  Dashboard: {
    usesColor: true, usesShape: true, usesBackground: false,
    usesTableRowAnimation: true, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  Attendance: {
    usesColor: true, usesShape: true, usesBackground: false,
    usesTableRowAnimation: true, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  Chat: {
    usesColor: false, usesShape: true, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  Schedule: {
    usesColor: false, usesShape: true, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  SurveyList: {
    usesColor: true, usesShape: true, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: true, usesDropMenuAnimation: false,
  },
  // 設定（UI自体はテーマ設定不要）
  DesignSettingsPanel: {
    usesColor: false, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  AnimationSettingsPanel: {
    usesColor: false, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
  ThemeSettingsModal: {
    usesColor: false, usesShape: false, usesBackground: false,
    usesTableRowAnimation: false, usesCardAnimation: false, usesDropMenuAnimation: false,
  },
}

// ============================================
// デフォルト設定
// ============================================

/** デフォルトのコンポーネントテーマ設定（全てグローバル） */
export const DEFAULT_COMPONENT_THEMES: ComponentThemesMap = {
  AppLayout: { color: 'global', shape: 'global' },
  SlideNavi: { color: 'global', shape: 'global' },
  Header: { color: 'global', shape: 'global' },
  SubHeader: { color: 'global', shape: 'global' },
  FloatingMenuButton: { color: 'global', shape: 'global' },
  BottomTabBar: { color: 'global', shape: 'global' },
  AnswerList: { color: 'global', shape: 'global' },
  AnswerCardList: { color: 'global', shape: 'global' },
  AnswerDetail: { color: 'global', shape: 'global' },
  Dashboard: { color: 'global', shape: 'global' },
  Attendance: { color: 'global', shape: 'global' },
  Chat: { color: 'global', shape: 'global' },
  Schedule: { color: 'global', shape: 'global' },
  SurveyList: { color: 'global', shape: 'global' },
  DesignSettingsPanel: { color: 'global', shape: 'global' },
  AnimationSettingsPanel: { color: 'global', shape: 'global' },
  ThemeSettingsModal: { color: 'global', shape: 'global' },
}

// ============================================
// ストレージキー（アプリ側で上書き可能）
// ============================================

/** コンポーネントテーマのストレージキー */
export const COMPONENT_THEMES_STORAGE_KEY = 'componentThemes'

// ============================================
// Jotai Atoms
// ============================================

/**
 * コンポーネントテーマ設定 Atom（localStorage永続化）
 * atomWithStorageSync を使用してフラッシュを防止
 */
export const componentThemesAtom = atomWithStorageSync<ComponentThemesMap>(
  COMPONENT_THEMES_STORAGE_KEY,
  DEFAULT_COMPONENT_THEMES
)
componentThemesAtom.debugLabel = 'componentThemes'

/**
 * コンポーネントテーマをリセット（write-only）
 */
export const resetComponentThemesAtom = atom(null, (_get, set) => {
  set(componentThemesAtom, DEFAULT_COMPONENT_THEMES)
})
resetComponentThemesAtom.debugLabel = 'resetComponentThemes'

/**
 * 特定コンポーネントのテーマを更新（write-only）
 */
export const updateComponentThemeAtom = atom(
  null,
  (get, set, update: { component: ThemeableComponent; config: Partial<ComponentThemeConfig> }) => {
    const current = get(componentThemesAtom)
    const currentConfig = current[update.component] ?? { color: 'global', shape: 'global' }
    set(componentThemesAtom, {
      ...current,
      [update.component]: {
        ...currentConfig,
        ...update.config,
      },
    })
  }
)
updateComponentThemeAtom.debugLabel = 'updateComponentTheme'

// ============================================
// ユーティリティ関数
// ============================================

/**
 * コンポーネントのテーマ設定を取得
 */
export function getComponentThemeConfig(
  themes: ComponentThemesMap,
  component: ThemeableComponent
): ComponentThemeConfig {
  return themes[component] ?? { color: 'global', shape: 'global' }
}

/**
 * コンポーネントの解決済みテーマ値を計算
 *
 * @param themes コンポーネントテーマ設定マップ
 * @param component コンポーネント名
 * @param globalColor グローバルカラーテーマ
 * @param globalShape グローバル形状テーマ
 * @returns 解決済みのテーマ値
 */
export function resolveComponentTheme(
  themes: ComponentThemesMap,
  component: ThemeableComponent,
  globalColor: ColorTheme,
  globalShape: ShapeTheme
): { colorTheme: ColorTheme; shapeTheme: ShapeTheme } {
  const config = getComponentThemeConfig(themes, component)

  return {
    colorTheme:
      config.color === 'global' || config.color === undefined
        ? globalColor
        : config.color,
    shapeTheme:
      config.shape === 'global' || config.shape === undefined
        ? globalShape
        : config.shape,
  }
}
