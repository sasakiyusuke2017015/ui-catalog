# @ui-catalog/core 開発ガイド

## 概要

このパッケージは **VibeCoding で育てる** ことを前提に設計されています。
各プロジェクトにコピーして独自に育てることを想定しています。

導入手順・運用方針については [README.md](./README.md) を参照してください。

---

## ディレクトリ構造

```
packages/ui-catalog/
├── atoms/              # 基本UI部品（Button, Input, Icon など）
├── molecules/          # atomsの組み合わせ（DatePicker, Dialog など）
├── organisms/          # 複雑なUI（InteractiveTable, TrendChart など）
├── templates/          # ページレイアウト（Header, Footer, SideNav）
├── decorations/        # 装飾コンポーネント
├── magicui/            # アニメーションコンポーネント
├── theme/              # テーマ機能（ThemeProvider, useTheme）
├── hooks/              # カスタムフック
├── utils/              # ユーティリティ関数
├── adapters/           # 外部依存の抽象化（Router, Auth）
├── constants/          # 定数定義（icons, design, animations）
├── types/              # 型定義
├── styles/             # グローバルスタイル
├── storybook-preset/   # Storybook 設定プリセット
├── e2e/                # VRT（Visual Regression Test）
├── version.ts          # バージョン管理
└── index.ts            # エントリポイント
```

---

## エクスポート構成

| パス | 内容 |
|------|------|
| `@ui-catalog/core` | ルートエクスポート |
| `@ui-catalog/core/atoms` | 基本UI部品 |
| `@ui-catalog/core/molecules` | 複合UI部品 |
| `@ui-catalog/core/organisms` | 複雑なUI |
| `@ui-catalog/core/templates` | レイアウト |
| `@ui-catalog/core/decorations` | 装飾 |
| `@ui-catalog/core/magicui` | アニメーション |
| `@ui-catalog/core/theme` | テーマ機能 |
| `@ui-catalog/core/hooks` | カスタムフック |
| `@ui-catalog/core/utils` | ユーティリティ |
| `@ui-catalog/core/adapters` | アダプター |
| `@ui-catalog/core/constants` | 定数 |
| `@ui-catalog/core/types` | 型定義 |
| `@ui-catalog/core/storybook-preset` | Storybook main.ts 用 |
| `@ui-catalog/core/storybook-preset/preview` | Storybook preview.tsx 用 |
| `@ui-catalog/core/tailwind-preset` | Tailwind プリセット |

---

## テーマ機能

### 概要

`@ui-catalog/core/theme` は localStorage 連携付きの完全なテーマ機能を提供します。

### 主要コンポーネント

| 名前 | 説明 |
|------|------|
| `ThemeProvider` | テーマ Context を提供 |
| `useTheme()` | colors, shapes を取得 |
| `useColorTheme()` | カラーテーマの取得・設定 |
| `useShapeTheme()` | 形状テーマの取得・設定 |
| `useBackgroundTheme()` | 背景テーマの取得・設定 |
| `useBackgroundStyle()` | 背景スタイル（CSS properties） |
| `useFullTheme()` | 全テーマ設定を一括取得 |

### localStorage キー

```
ui-catalog:colorTheme
ui-catalog:shapeTheme
ui-catalog:backgroundTheme
ui-catalog:tableRowAnimation
ui-catalog:cardAnimation
ui-catalog:dropMenuAnimation
ui-catalog:animationSpeed
```

---

## 開発ワークフロー

### 1. 吸収（Absorb）

外部からコンポーネントを取り込む。

```
「apps/web の UserCard を ui-catalog に昇格して」
「shadcn/ui の Drawer を取り込みたい」
```

### 2. 発展（Develop）

コンポーネントの作成・拡張・修正を行う。

```
「ユーザー一覧を表示する UserListTable を作って」
「DatePicker に時間選択を追加して」
```

### 3. 洗練（Refine）

コードベースをクリーンアップし、整合性を確保する。

```
「コードベースをクリーンアップして」
「未使用コードを探して削除して」
```

---

## 依存関係

```
molecules → atoms      ✅ OK
organisms → molecules  ✅ OK
organisms → atoms      ✅ OK
atoms → molecules      ❌ 禁止（逆方向）
```

### peerDependencies

- react, react-dom
- jotai（テーマ機能用）
- framer-motion
- react-router-dom
- recharts
- tailwind-merge
- clsx

---

## バージョン管理

### ui-catalog.versions.json

アプリ側でライブラリのバージョン変更を検知するための仕組みです。

**配置場所:** `apps/web/ui-catalog.versions.json`

```json
{
  "Button": "1.0.0",
  "Input": "1.0.0",
  "DatePicker": "1.0.0"
}
```

### 初期化

```tsx
// apps/web/src/main.tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../ui-catalog.versions.json'

initUICatalog(versions)
```

---

## チェックリスト

### コンポーネント作成時

- [ ] 配置場所は適切か（atoms/molecules/organisms/templates）
- [ ] 命名規則に従っているか
- [ ] atoms/hooks を活用しているか
- [ ] バレルエクスポートを追加したか
- [ ] VERSION_REGISTRY に追加したか
- [ ] data-component 属性を追加したか

### バージョン更新時

- [ ] 後方互換性は保たれているか
- [ ] VERSION_REGISTRY のバージョンを上げたか
