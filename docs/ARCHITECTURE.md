# ui-catalog アーキテクチャ

## 思想

ui-catalog は **Atomic Design ベースの汎用 UI コンポーネントライブラリ**。
親アプリには **Git Submodule + ソース配布** で取り込む。

### 配布モデル

- ブランチは `main` 一本（`project/<name>` ブランチは持たない）
- 親 → ui-catalog の自動同期は提供しない。ui-catalog 側で直接コミットして更新する
- 配布は TS ソース直 export（`dist` ビルドなし）。親アプリで transpile される

```
┌─────────────────────────────────────────────────────┐
│  ui-catalog                                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  【コア資産】                                       │
│  core/                                              │
│    atoms/                                           │
│    molecules/                                       │
│    organisms/                                       │
│    templates/                                       │
│    hooks/                                           │
│    types/ utils/ tokens/                            │
│                                                     │
│  【観測機構】                                        │
│  infra/                                             │
│    devtools/（操作ログ）                             │
│    version/（VERSION_REGISTRY）                     │
│    theme/                                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### スタイリング方針

`core/` のコンポーネントは **SCSS Module** で実装する。Tailwind 非依存にすることで、
Tailwind を使っていない親アプリにも移植できる。

---

## ディレクトリ構造

```
ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── atoms/               #   最小単位（Button, Input, Icon 等）
│   │   ├── Animated/
│   │   ├── Box/
│   │   ├── Button/
│   │   ├── Icon/
│   │   ├── Input/
│   │   ├── Stack/
│   │   └── Text/
│   │
│   ├── molecules/           #   atoms の組み合わせ
│   │   ├── Banner/
│   │   ├── Breadcrumb/
│   │   ├── Card/
│   │   ├── DatePicker/
│   │   ├── FilterField/
│   │   ├── FormField/
│   │   └── MenuItem/
│   │
│   ├── organisms/           #   独立したセクション
│   │   ├── AlertDialog/
│   │   ├── Dialog/
│   │   ├── LoginButton/
│   │   ├── Modal/
│   │   ├── Select/
│   │   └── Tabs/
│   │
│   ├── templates/           #   ページレイアウト
│   │   ├── AppShell/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── SideNav/
│   │   └── SubHeader/
│   │
│   ├── hooks/               #   UIフック
│   │   ├── useDevice.ts
│   │   ├── useRemountKey.ts
│   │   ├── router/          #     ルーター抽象化
│   │   ├── ui/              #     UI系フック（useDisclosure等）
│   │   └── calend/          #     カレンダー系フック + state
│   │
│   ├── tokens/              #   デザイントークン（SCSS変数）
│   ├── constants/           #   定数定義
│   ├── types/               #   共通型定義（calend.ts 含む）
│   ├── utils/               #   ユーティリティ（calend/ 含む）
│   ├── styles/              #   グローバルスタイル
│   └── index.ts             #   core/ バレルエクスポート
│
├── infra/                   # 育成・観測の仕組み
│   ├── devtools/            #   開発ツール
│   ├── version/             #   バージョン管理
│   ├── theme/               #   テーマ機能
│   ├── storybook/           #   Storybook 設定
│   ├── scripts/             #   セットアップスクリプト
│   ├── commands/            #   状態診断コマンド
│   └── docker/              #   Docker 設定
│
├── docs/                    # ドキュメント
│   ├── DEVELOPMENT.md
│   └── ARCHITECTURE.md
│
└── index.ts                 # ルートエクスポート
```

---

## SCSS Module 実装例

```scss
// core/atoms/Button/Button.module.scss
@use '../../tokens' as *;

.button {
  padding: $spacing-2 $spacing-4;
  border-radius: $radius-md;

  &--primary {
    background-color: $color-primary;
  }
}
```

---

## Atomic Design 階層

| 階層 | 説明 | 例 |
|------|------|-----|
| **atoms** | 最小単位、それ以上分割できない | Button, Input, Icon, Badge |
| **molecules** | atoms の組み合わせ | FormField, MenuItem, DatePicker |
| **organisms** | molecules の組み合わせ、独立セクション | Dialog, Modal, LoginButton |
| **templates** | ページ全体のレイアウト構造 | AppShell, Header, Footer |

### 依存方向

```
atoms ← molecules ← organisms ← templates
```

**逆方向の依存は禁止**（atoms が molecules に依存してはならない）。

---

## 各層の責務

| 層 | 責務 | ビジネスロジック | 外部依存 |
|----|------|-----------------|---------|
| **core/atoms** | 最小UIブロック | ❌ 禁止 | React のみ |
| **core/molecules** | atoms の組み合わせ | ❌ 禁止 | atoms |
| **core/organisms** | 独立したセクション | ❌ 禁止 | atoms, molecules |
| **core/templates** | ページレイアウト | ❌ 禁止 | atoms, molecules, organisms |
| **core/hooks** | UIフック | ❌ 禁止 | React のみ |
| **core/tokens** | デザイン値の定義 | ❌ 禁止 | なし |
| **core/constants** | 定数定義 | ❌ 禁止 | なし |
| **core/types** | 共通型定義 | ❌ 禁止 | なし |
| **core/utils** | ユーティリティ関数 | ❌ 禁止 | なし |
| **core/styles** | グローバルCSS | ❌ 禁止 | なし |
| **core/hooks/calend/** | カレンダードメインフック | ❌ 禁止 | core/types, core/utils |
| **infra/** | 観測・バージョン管理 | N/A | 環境依存OK |

---

## 依存関係

```
core/tokens
    ↓
core/types, core/utils
    ↓
core/hooks
    ↓
core/atoms → core/molecules → core/organisms → core/templates
                                    ↓
                              apps/web/src/
```

**ルール:**
- 下から上への依存は禁止（atoms → molecules は ❌）
- ドメイン支援（hooks/calend/, types/calend.ts, utils/calend/）はコンポーネントから参照可能

---

## 開発フロー

### 1. ui-catalog 単独で開発

```bash
git clone https://github.com/sasakiyusuke2017015/ui-catalog.git
cd ui-catalog
pnpm install
pnpm storybook:localhost
```

新規コンポーネントは `main` に直接コミットして push。

**コンポーネント追加時の必須作業:**
- 適切な Atomic Design 層（atoms/molecules/organisms/templates）への配置
- SCSS Module で実装
- ビジネスロジックを混入させない
- VERSION_REGISTRY 登録
- Storybook story の作成

### 2. 親アプリに反映

```bash
# 親アプリで
pnpm ui:update    # = git submodule update --remote packages/ui-catalog
git add packages/ui-catalog
git commit -m "chore: bump ui-catalog"
```

**ドメイン固有の支援ファイル（hooks/types/utils）の配置:**

カレンダーのように複数コンポーネントが型・hooks・utils を共有する場合:

```
core/hooks/calend/      ← ドメインフックと state
core/types/calend.ts    ← ドメイン型定義
core/utils/calend/      ← ドメインユーティリティ
```

### 禁止操作

- 公開ブランチに対する `rebase`
- `force push`（`--force`, `--force-with-lease` いずれも）
- `reset --hard` で他ブランチの内容を上書き

---

## エクスポート構成

```typescript
// @ui-catalog/core - ルートエクスポート
export * from './core'        // core/ 全体
export * from './infra'       // infra/ 全体
```

### インポート例

```typescript
import { Button, Icon } from '@ui-catalog/core/atoms'
import { FormField } from '@ui-catalog/core/molecules'
import { Modal, Dialog } from '@ui-catalog/core/organisms'
import { AppShell } from '@ui-catalog/core/templates'

import { useOperationLog } from '@ui-catalog/core/infra/devtools'
import { ThemeProvider } from '@ui-catalog/core/infra/theme'
```

---

## チェックリスト

### コンポーネント追加時

- [ ] 適切な層に配置したか（atoms/molecules/organisms/templates）
- [ ] ビジネスロジックが混入していないか
- [ ] **SCSS Module で実装したか**
- [ ] Tailwind / CSS-in-JS に依存していないか
- [ ] Props を汎用的にしたか（特定アプリの都合を反映していないか）
- [ ] 操作ログ（useOperationLog）を追加したか
- [ ] data-component 属性を追加したか
- [ ] VERSION_REGISTRY に登録したか
- [ ] Storybook story を作成したか
- [ ] `tsc --noEmit` でエラーがないか確認したか
- [ ] `storybook build` が成功するか確認したか
