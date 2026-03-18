# @ui-catalog/core 開発ガイド

## 概要

このパッケージは **VibeCoding で育てる** ことを前提に設計されています。
各プロジェクトにコピーして独自に育てることを想定しています。

導入手順・運用方針については [README.md](../README.md) を参照してください。

---

## 段階的成熟モデル

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**です。
コンポーネントは **初期 → 安定 → 洗練** の段階を経て成長します。

```
┌─────────────────────────────────────────────────────────────────┐
│  【初期フェーズ】スピード優先                                      │
│  ┌──────────────────────────────────────┐                       │
│  │ extensions/<project>/                │                       │
│  │ - Tailwind / CSS-in-JS OK            │                       │
│  │ - 素早くプロトタイプ                   │                       │
│  │ - ビジネスロジック混在もOK             │                       │
│  └──────────────────────────────────────┘                       │
│                     ↓ absorb                                    │
│                                                                 │
│  【安定フェーズ】再利用性の確保                                     │
│  ┌──────────────────────────────────────┐                       │
│  │ extensions/<project>/ (整理後)        │                       │
│  │ - ビジネスロジック分離                 │                       │
│  │ - Props 設計の安定化                  │                       │
│  │ - Tailwind のままでOK                 │                       │
│  └──────────────────────────────────────┘                       │
│                     ↓ refine + 昇格                              │
│                                                                 │
│  【洗練フェーズ】プロダクト品質                                     │
│  ┌──────────────────────────────────────┐                       │
│  │ core/                                │                       │
│  │ - SCSS Module で実装                  │                       │
│  │ - デザインの微細なこだわり             │                       │
│  │ - トークン活用で一貫性                │                       │
│  │ - 他プロジェクトへ移植可能             │                       │
│  └──────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

### スタイリングの選択基準

| フェーズ | スタイリング | 理由 |
|---------|------------|------|
| 初期・安定 | Tailwind / CSS-in-JS | 素早い実装、試行錯誤しやすい |
| 洗練（core/） | SCSS Module | 微細な調整、トークン一貫性、移植性 |

### SCSS化は「洗練化」の象徴

- 単なる技術的選択ではなく、コンポーネントの成熟度を示す
- デザインの細部へのこだわりを表現できる
- デザイントークンとの統合で一貫性を確保

---

## ディレクトリ構造

```
packages/ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── atoms/               #   最小単位（Button, Input, Badge, Icon 等）
│   ├── molecules/           #   atoms の組み合わせ（FormField, MenuItem 等）
│   ├── organisms/           #   molecules の組み合わせ（Dialog, Modal 等）
│   ├── templates/           #   ページレイアウト（AppShell, Header 等）
│   ├── hooks/               #   カスタムフック（useDevice, useDisclosure 等）
│   │   └── router/          #     ルーター抽象化（RouterContext）
│   ├── constants/           #   定数定義
│   ├── types/               #   共通型定義
│   ├── tokens/              #   デザイントークン（SCSS変数）
│   ├── styles/              #   グローバルスタイル
│   └── utils/               #   ユーティリティ（cn, isNullish 等）
│
├── extensions/              # プロジェクト拡張用
│   ├── <project>/           #   各プロジェクト固有（例: 1on1/）
│   └── shared/              #   複数プロジェクトで使用（昇格候補）
│
├── infra/                   # 育成・観測の仕組み
│   ├── commands/            #   Claude Code コマンド
│   ├── devtools/            #   操作ログ、デバッグツール
│   ├── version/             #   バージョン管理（VERSION_REGISTRY）
│   └── theme/               #   テーマ機能
│
│
├── docs/                    # ドキュメント
└── index.ts                 # エントリポイント
```

---

## Atomic Design 階層

| 階層 | 説明 | 例 |
|------|------|-----|
| **atoms** | 最小単位、それ以上分割できない | Button, Input, Icon, Badge, Checkbox |
| **molecules** | atoms の組み合わせ | FormField, MenuItem, SearchBar, DatePicker |
| **organisms** | molecules の組み合わせ、独立したセクション | Dialog, Modal, Card, LoginButton |
| **templates** | ページ全体のレイアウト構造 | AppShell, Header, Footer, SideNav |

### 依存方向

```
atoms ← molecules ← organisms ← templates
         ↑              ↑           ↑
      atoms のみ    atoms +     atoms +
       依存可能    molecules   molecules +
                  依存可能    organisms
                             依存可能
```

**逆方向の依存は禁止**（atoms が molecules に依存してはならない）。

---

## スタイリング方針

### core/ は SCSS Module で実装

**core/ のコンポーネントは SCSS Module で実装する。**

| 方式 | 使用場所 | 理由 |
|------|---------|------|
| **SCSS Module** | core/ | 汎用性、他プロジェクトへの移植性、Tailwind 非依存 |
| Tailwind/CSS-in-JS | extensions/ | プロジェクト固有、速度優先（OK） |

### core/ 昇格時のルール

extensions/ から core/ に昇格する際、**Tailwind → SCSS への変換が必須**。

```scss
// core/atoms/Button/Button.module.scss
@use '../../tokens' as *;

.button {
  padding: $spacing-2 $spacing-4;
  border-radius: $radius-md;
  font-weight: $font-weight-medium;
  transition: all $transition-fast;

  &--primary {
    background-color: $color-primary;
    color: $color-white;
  }

  &--secondary {
    background-color: $color-secondary;
    color: $color-dark;
  }
}
```

### SCSS トークンの活用

```scss
// core/tokens/_index.scss
@forward 'colors';
@forward 'spacing';
@forward 'typography';
@forward 'shadows';
@forward 'borders';
@forward 'transitions';
```

```tsx
// コンポーネントでの使用
import styles from './Button.module.scss'

export const Button: FC<ButtonProps> = ({ variant = 'primary', children }) => (
  <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
    {children}
  </button>
)
```

---

## エクスポート構成

| パス | 内容 |
|------|------|
| `@ui-catalog/core` | ルートエクスポート（全体） |
| `@ui-catalog/core/atoms` | 最小単位コンポーネント |
| `@ui-catalog/core/molecules` | atoms の組み合わせ |
| `@ui-catalog/core/organisms` | 独立したセクション |
| `@ui-catalog/core/templates` | ページレイアウト |
| `@ui-catalog/core/hooks` | カスタムフック |
| `@ui-catalog/core/constants` | 定数 |
| `@ui-catalog/core/types` | 型定義 |
| `@ui-catalog/core/tokens` | デザイントークン |
| `@ui-catalog/core/utils` | ユーティリティ |
| `@ui-catalog/core/styles` | グローバルCSS |
| `@ui-catalog/core/infra` | infra/ 全体 |
| `@ui-catalog/core/extensions/<project>` | プロジェクト固有 |

---

## テーマ機能

### 概要

`@ui-catalog/core/infra/theme` は localStorage 連携付きの完全なテーマ機能を提供します。

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

**重要**: project/* ブランチでは `extensions/<project>/` に配置。
Tailwind/CSS-in-JS のままでOK。

### 2. 発展（Develop）

コンポーネントの作成・拡張・修正を行う。

```
「ユーザー一覧を表示する UserListTable を作って」
「DatePicker に時間選択を追加して」
```

### 3. 洗練（Refine） + 昇格

コードベースをクリーンアップし、core/ に昇格させる。

```
「コードベースをクリーンアップして」
「extensions/1on1/ScoreBadge を core/atoms/ に昇格して」
```

**昇格時の必須作業**:
- Tailwind → SCSS Module 変換
- ビジネスロジックの完全除去
- Props の汎用化

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

**注意**: Tailwind は core/ の peerDependencies から削除予定。
extensions/ でのみ使用可能。

---

## バージョン管理

### VERSION_REGISTRY（唯一のソースオブトゥルース）

`infra/version/registry.ts` の `VERSION_REGISTRY` がコンポーネントバージョンの正規データ。
`ui-catalog.versions.json` は VERSION_REGISTRY から自動生成される派生ファイル（手動編集禁止）。

```bash
# versions.json を VERSION_REGISTRY から生成
pnpm sync:versions

# 同期状態を検証（CI 用、差分があれば exit 1）
pnpm check:versions
```

### 初期化

```tsx
// apps/web/src/main.tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../../packages/ui-catalog/ui-catalog.versions.json'

initUICatalog(versions)
```

---

## 操作ログ（DevTools）

開発環境でUIコンポーネントの操作を追跡するための仕組みです。

### 設定

```tsx
// apps/web/src/main.tsx
import { configureDevTools } from '@ui-catalog/core'

if (import.meta.env.DEV) {
  configureDevTools({
    enabled: true,          // ログ機能を有効化
    logOperations: true,    // 操作ログを出力
    consoleOutput: true,    // ブラウザコンソールに出力
    serverOutput: false,    // サーバー（Docker stdout）に出力
    serverEndpoint: '/api/dev/log',  // サーバーログのエンドポイント
    uidPrefix: 'myapp',     // ログのプレフィックス
  })
}
```

### コンポーネントへの組み込み

```tsx
import { useOperationLog } from '../hooks/useOperationLog'

const MyComponent: FC<Props> = ({ label, onAction }) => {
  const log = useOperationLog('MyComponent')

  const handleClick = () => {
    log('click', { label })
    onAction?.()
  }

  return <button onClick={handleClick}>{label}</button>
}
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
- [ ] 操作ログ（useOperationLog）を追加したか

### core/ 昇格時

- [ ] **SCSS Module で実装したか**（Tailwind → SCSS 変換）
- [ ] ビジネスロジックを完全に除去したか
- [ ] Props を汎用的にしたか
- [ ] テストを追加したか

### バージョン更新時

- [ ] 後方互換性は保たれているか
- [ ] VERSION_REGISTRY のバージョンを上げたか
- [ ] `pnpm sync:versions` を実行したか
