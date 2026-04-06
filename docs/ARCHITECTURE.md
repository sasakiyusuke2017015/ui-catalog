# ui-catalog アーキテクチャ

## 思想

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**。

### 段階的成熟モデル

コンポーネントは **absorb → clean → core/** の流れで成長する。
extensions/ は project/* ブランチにのみ存在し、プロジェクト固有のコンポーネントを置く。
昇格候補は absorb で core/ に取り込む。

```
┌─────────────────────────────────────────────────────────────────┐
│                    段階的成熟モデル                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  【外部アプリ】                                                  │
│  ┌──────────────────────────────────────┐                       │
│  │ apps/<project>/src/components/       │                       │
│  │ - ビジネスロジック混在                 │                       │
│  │ - Tailwind / CSS-in-JS               │                       │
│  └──────────────────────────────────────┘                       │
│                     ↓ absorb（UI抽出 + SCSS変換）                │
│                                                                 │
│  【core/】プロダクト品質                                          │
│  ┌──────────────────────────────────────┐                       │
│  │ core/atoms/molecules/organisms/      │                       │
│  │ - SCSS Module で実装                  │                       │
│  │ - ビジネスロジックゼロ                │                       │
│  │ - デザイントークンで一貫性             │                       │
│  │ - 他プロジェクトへ移植可能             │                       │
│  └──────────────────────────────────────┘                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**スタイリングの選択基準:**

| フェーズ | スタイリング | 理由 |
|---------|------------|------|
| 初期・安定 | Tailwind / CSS-in-JS | 素早い実装、試行錯誤しやすい |
| 洗練（core/） | SCSS Module | 微細な調整、トークン一貫性、移植性 |

**SCSS化は「洗練化」の象徴:**
- 単なる技術的選択ではなく、コンポーネントの成熟度を示す
- デザインの細部へのこだわりを表現できる
- デザイントークンとの統合で一貫性を確保

```
┌─────────────────────────────────────────────────────┐
│  ui-catalog = Design System + 育成メカニズム        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  【静的資産】          【動的プロセス】              │
│  core/                 absorb（外部から吸収）        │
│    atoms/              clean（洗練・整理）           │
│    molecules/          optimize（依存最適化）        │
│    organisms/          merge（安定版へ統合）         │
│    templates/          sync（各プロジェクトへ配布）   │
│    hooks/                                           │
│    types/                                           │
│    utils/                                           │
│                                                     │
│  【拡張領域】（project/* ブランチのみ）               │
│  extensions/                                        │
│    <project>/（プロジェクト固有）                    │
│                                                     │
│  【観測機構】                                        │
│  infra/                                             │
│    devtools/（操作ログ）                             │
│    version/（VERSION_REGISTRY）                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

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
│   ├── commands/            #   育成コマンド
│   └── docker/              #   Docker 設定
│
├── docs/                    # ドキュメント
│   ├── DEVELOPMENT.md
│   └── ARCHITECTURE.md
│
└── index.ts                 # ルートエクスポート
```

---

## スタイリング方針

### core/ は SCSS Module で実装

**core/ のコンポーネントは SCSS Module で実装する。**

| 方式 | 使用場所 | 理由 |
|------|---------|------|
| **SCSS Module** | core/ | 汎用性、他プロジェクトへの移植性、Tailwind 非依存 |

### absorb 時のルール

外部アプリから core/ に取り込む際、**Tailwind → SCSS への変換が必須**。

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
| **infra/** | 育成・観測の仕組み | N/A | 環境依存OK |

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

## 育成フロー

### 1. absorb（吸収）

アプリからコンポーネントを ui-catalog に**直接 core/ に**取り込む。

**absorb 時の必須作業:**
- **Tailwind → SCSS Module 変換**
- ビジネスロジックの除去
- 適切な Atomic Design 層（atoms/molecules/organisms）への配置
- VERSION_REGISTRY 登録

```
apps/web/src/components/AnswerCard.tsx
    ↓ absorb（UI抽出 + SCSS変換 + 汎用化）
core/molecules/AnswerCard/  ← SCSS Module 必須
```

**ドメイン固有の支援ファイル（hooks/types/utils）の配置:**

カレンダーのように複数コンポーネントが型・hooks・utils を共有する場合:
```
core/hooks/calend/      ← ドメインフックと state
core/types/calend.ts    ← ドメイン型定義
core/utils/calend/      ← ドメインユーティリティ
```

### 2. clean（洗練）

取り込み後にさらに品質を上げる。

- Props の汎用化・安定化
- テスト・ストーリーの充実
- デザイントークンの活用
- 整合性チェック・不要コード削除

### 3. merge（統合）

project/* ブランチの変更を main に merge で取り込む。

```
project/1on1 ブランチ → main（安定版）
```

### 4. sync（配布）

main の最新を各 project/* ブランチに merge で配布。

```
main → project/1on1, project/calend, ...
```

**重要**: 全ての反映は `git merge` のみ。rebase, force push, reset --hard は禁止。
詳細は `infra/commands/ui-catalog.md` を参照。

---

## エクスポート構成

```typescript
// @ui-catalog/core - ルートエクスポート
export * from './core'        // core/ 全体
// extensions/ は project/* ブランチにのみ存在（main には含まない）
export * from './infra'       // infra/ 全体
```

**extensions/ のインポート方針:**

extensions/ は project/* ブランチにのみ存在し、プロジェクト固有コンポーネントを含む。
ルートからの一括エクスポートは行わず、必ずサブパスで個別にインポートすること。

### インポート例

```typescript
// 推奨: レイヤー指定でのインポート
import { Button, Icon } from '@ui-catalog/core/atoms'
import { FormField } from '@ui-catalog/core/molecules'
import { Modal, Dialog } from '@ui-catalog/core/organisms'
import { AppShell } from '@ui-catalog/core/templates'

// 拡張コンポーネント（project/* ブランチのみ、必ずサブパスで指定）
import { SurveyCard } from '@ui-catalog/core/extensions/1on1'
import { VideoThumb } from '@ui-catalog/core/extensions/ticker'

// インフラ
import { useOperationLog } from '@ui-catalog/core/infra/devtools'
import { ThemeProvider } from '@ui-catalog/core/infra/theme'
```

---

## チェックリスト

### コンポーネント追加時

- [ ] 適切な層に配置したか（atoms/molecules/organisms/templates）
- [ ] ビジネスロジックが混入していないか
- [ ] **SCSS Module で実装したか**
- [ ] 操作ログ（useOperationLog）を追加したか
- [ ] data-component 属性を追加したか
- [ ] VERSION_REGISTRY に登録したか
- [ ] Storybook story を作成したか

### absorb 時（外部アプリ → core/）

- [ ] **Tailwind → SCSS Module 変換したか**
- [ ] ビジネスロジックを完全に除去したか
- [ ] Props を汎用的にしたか
- [ ] 適切な Atomic Design 層に配置したか
- [ ] ドメイン支援ファイル（hooks/types/utils）は core/ の正規構造に配置したか
- [ ] テスト・ストーリーを追加したか
- [ ] VERSION_REGISTRY に登録したか
- [ ] `tsc --noEmit` でエラーがないか確認したか
- [ ] `storybook build` が成功するか確認したか
