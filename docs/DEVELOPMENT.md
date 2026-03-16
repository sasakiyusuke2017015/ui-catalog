# @ui-catalog/core 開発ガイド

## 概要

このパッケージは **VibeCoding で育てる** ことを前提に設計されています。
各プロジェクトにコピーして独自に育てることを想定しています。

導入手順・運用方針については [README.md](../README.md) を参照してください。

---

## ディレクトリ構造

```
packages/ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── tokens/              #   デザイントークン
│   ├── primitives/          #   最小単位UI（Box, Text, Stack, Icon, Animated）
│   ├── components/          #   汎用コンポーネント（Button, Input, Card 等）
│   ├── patterns/            #   組み合わせパターン（Modal, Dialog, Tabs 等）
│   ├── layouts/             #   レイアウト（Header, Footer, AppShell 等）
│   ├── adapters/            #   ルーター抽象化（RouterContext）
│   ├── constants/           #   定数定義
│   ├── types/               #   共通型定義
│   ├── hooks/               #   UIフック（useDevice, useDisclosure 等）
│   ├── utils/               #   ユーティリティ（cn, isNullish 等）
│   ├── styles/              #   グローバルCSS
│   ├── decorations/         #   背景装飾
│   └── magicui/             #   アニメーション
│
├── extensions/              # プロジェクト拡張用
│   ├── 1on1/                #   1on1 プロジェクト固有
│   └── shared/              #   複数プロジェクトで使えそうなもの（昇格候補）
│
├── infra/                   # 育成・観測の仕組み
│   ├── devtools/            #   操作ログ、デバッグツール
│   ├── version/             #   バージョン管理（VERSION_REGISTRY）
│   ├── theme/               #   テーマ機能
│   └── storybook/           #   Storybook 設定
│
├── scripts/                 # ツールスクリプト
│   └── sync-versions.ts     #   VERSION_REGISTRY → versions.json 同期
│
├── docs/                    # ドキュメント
└── index.ts                 # エントリポイント
```

---

## エクスポート構成

| パス | 内容 |
|------|------|
| `@ui-catalog/core` | ルートエクスポート（全体） |
| `@ui-catalog/core/tokens` | デザイントークン |
| `@ui-catalog/core/primitives` | 最小単位UI |
| `@ui-catalog/core/components` | 汎用コンポーネント |
| `@ui-catalog/core/patterns` | 組み合わせパターン |
| `@ui-catalog/core/layouts` | レイアウト |
| `@ui-catalog/core/adapters` | アダプター |
| `@ui-catalog/core/constants` | 定数 |
| `@ui-catalog/core/types` | 型定義 |
| `@ui-catalog/core/hooks` | カスタムフック |
| `@ui-catalog/core/utils` | ユーティリティ |
| `@ui-catalog/core/styles` | グローバルCSS |
| `@ui-catalog/core/decorations` | 装飾 |
| `@ui-catalog/core/magicui` | アニメーション |
| `@ui-catalog/core/infra` | infra/ 全体 |
| `@ui-catalog/core/infra/devtools` | 操作ログ・デバッグ |
| `@ui-catalog/core/infra/version` | バージョン管理 |
| `@ui-catalog/core/extensions` | extensions/ 全体 |
| `@ui-catalog/core/extensions/1on1` | 1on1 プロジェクト固有 |
| `@ui-catalog/core/extensions/shared` | 共有拡張（昇格候補） |
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

### アクションと絵文字マッピング

| アクション | 絵文字 | 用途 |
|-----------|-------|------|
| click | 🖱️ | ボタンクリック |
| change | ✏️ | 値の変更 |
| focus | 🎯 | フォーカス取得 |
| blur | 💨 | フォーカス喪失 |
| submit | 📤 | フォーム送信 |
| open | 📂 | 開く（モーダル、ドロップダウン） |
| close | 📁 | 閉じる |
| select | ✅ | 選択 |
| toggle | 🔄 | トグル切り替え |
| expand | 📂 | 展開 |
| collapse | 📁 | 折りたたみ |
| hover | 👆 | ホバー |
| mount | 🔌 | マウント |
| unmount | 🔌 | アンマウント |
| error | ❌ | エラー |
| success | ✅ | 成功 |

### 対応済みコンポーネント

- **atoms**: Button, Toggle, Select
- **molecules**: Modal, Dialog, Tabs, ToggleableSection, FloatingMenuButton, DatePicker

### サーバーログ出力（オプション）

Docker stdout に出力する場合、API側にエンドポイントを追加：

```typescript
// apps/api/src/routes/dev.ts
import { Hono } from 'hono'

export const devRouter = new Hono()

devRouter.post('/log', async (c) => {
  const body = await c.req.json()
  const { level, component, action, data, timestamp, prefix } = body
  console.log(`${prefix} ${component}.${action}`, data, `[${timestamp}]`)
  return c.json({ status: 'ok' })
})
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

### バージョン更新時

- [ ] 後方互換性は保たれているか
- [ ] VERSION_REGISTRY のバージョンを上げたか
- [ ] `pnpm sync:versions` を実行したか
