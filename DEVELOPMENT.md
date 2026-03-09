# @ui-catalog/core 開発ガイド

## 概要

このパッケージは **VibeCoding で育てる** ことを前提に設計されています。
各プロジェクトにコピーして独自に育てることを想定しています。

---

## 前提条件

ui-catalog は以下の構成を前提としています。

### 構成

```
project-root/
├── pnpm-workspace.yaml
├── packages/
│   └── ui-catalog/        ← この位置に配置
└── apps/
    └── web/
        └── package.json   ← "@ui-catalog/core": "workspace:*"
```

### pnpm-workspace.yaml

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### 使用側の package.json

```json
{
  "dependencies": {
    "@ui-catalog/core": "workspace:*"
  }
}
```

---

## Origin

- **Repository**: `https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git`
- **管理方式**: git subtree

> 各プロジェクトで `git subtree pull/push` を使って同期します。

---

## 複数プロジェクトでの共有（git subtree）

ui-catalog は独立リポジトリとして管理し、各プロジェクトで git subtree として取り込みます。

### 構成

```
GitHub/GitLab
├── org/ui-catalog     ← 独立リポジトリ（本家）
├── org/1on1           ← subtree で参照
├── org/pleasync       ← subtree で参照
└── org/meetscribe     ← subtree で参照
```

### 初回セットアップ（本家から切り出し）

```bash
# 1. ui-catalog リポジトリを GitHub/GitLab で新規作成

# 2. 1on1 から ui-catalog を切り出して push
cd 1on1
git subtree split -P packages/ui-catalog -b ui-catalog-split
git push https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git ui-catalog-split:main
git branch -D ui-catalog-split
```

### 新規プロジェクトへの導入

pleasync や meetscribe などの他プロジェクトで ui-catalog を導入する手順：

#### 方法 A: init スクリプトを使用（推奨）

```bash
cd new-project

# init スクリプトを実行
curl -sSL https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog/-/raw/main/scripts/init-in-project.sh | bash

# 依存関係を追加（apps/web/package.json）
# "@ui-catalog/core": "workspace:*"

# インストール
pnpm install
```

#### 方法 B: 手動で導入

```bash
cd new-project

# 1. subtree として追加
git subtree add --prefix=packages/ui-catalog \
  https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash

# 2. pnpm-workspace.yaml に追加（なければ作成）
cat >> pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF

# 3. 使用するアプリの package.json に依存関係を追加
# apps/web/package.json の dependencies に:
# "@ui-catalog/core": "workspace:*"

# 4. ルートの package.json に npm script を追加
# "scripts": {
#   "ui:push": "git subtree push --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main",
#   "ui:pull": "git subtree pull --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash"
# }

# 5. 依存関係をインストール
pnpm install
```

### 日常の同期（npm script）

```bash
# ui-catalog の更新を取り込む
pnpm ui:pull

# ローカルの変更を ui-catalog に push
pnpm ui:push
```

### 日常の同期（Git コマンド直接）

```bash
# ui-catalog の更新を取り込む
git subtree pull --prefix=packages/ui-catalog \
  https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash

# ローカルの変更を ui-catalog に push
git subtree push --prefix=packages/ui-catalog \
  https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main
```

### ブランチ戦略

**main ブランチのみ**で運用します。プロジェクトごとのブランチは作りません。

- 全プロジェクトが `main` に push/pull
- 競合は Git マージで解決
- 破壊的変更は**タグ**で管理

### タグによるバージョン管理

安定版をリリースする際はタグを打ちます：

```bash
# ui-catalog リポジトリでタグを作成
git tag -a v1.0.0 -m "安定版リリース"
git push origin v1.0.0
```

特定バージョンを取り込みたい場合：

```bash
git subtree pull --prefix=packages/ui-catalog \
  https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git v1.0.0 --squash
```

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
