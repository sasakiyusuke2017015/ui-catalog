# ui-catalog アーキテクチャ

## 思想

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**。

### 段階的成熟モデル

コンポーネントは **初期 → 安定 → 洗練** の段階を経て成長する。

```
┌─────────────────────────────────────────────────────────────────┐
│                    段階的成熟モデル                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
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
│    atoms/              refine（洗練・整理）          │
│    molecules/          distribute（各プロジェクトへ） │
│    organisms/          merge（安定版へ統合）         │
│    templates/                                       │
│                                                     │
│  【観測機構】                                        │
│  infra/                                             │
│    devtools/（操作ログ）                             │
│    version/（VERSION_REGISTRY）                     │
│    vrt/（Visual Regression Test）                   │
│                                                     │
│  【拡張領域】                                        │
│  extensions/                                        │
│    <project>/（プロジェクト固有）                    │
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
│   │   │   ├── RouterContext.tsx
│   │   │   ├── react-router.ts
│   │   │   └── types.ts
│   │   └── ui/              #     UI系フック（useDisclosure等）
│   │
│   ├── tokens/              #   デザイントークン（SCSS変数）
│   │   ├── _colors.scss
│   │   ├── _spacing.scss
│   │   ├── _typography.scss
│   │   ├── _shadows.scss
│   │   ├── _borders.scss
│   │   └── _index.scss
│   │
│   ├── constants/           #   定数定義
│   ├── types/               #   共通型定義
│   ├── utils/               #   ユーティリティ
│   ├── styles/              #   グローバルスタイル
│   └── index.ts             #   core/ バレルエクスポート
│
├── extensions/              # プロジェクト拡張用（absorb の受け皿）
│   ├── 1on1/                #   1on1 プロジェクト固有
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── index.ts
│   └── shared/              #   複数プロジェクトで使用（昇格候補）
│
├── infra/                   # 育成・観測の仕組み
│   ├── commands/            #   Claude Code コマンド
│   │   └── ui-catalog.md
│   ├── devtools/            #   開発ツール
│   ├── version/             #   バージョン管理
│   └── theme/               #   テーマ機能
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
| Tailwind/CSS-in-JS | extensions/ | プロジェクト固有、速度優先（OK） |

### 昇格時のルール

extensions/ から core/ に昇格する際、**Tailwind → SCSS への変換が必須**。

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
| **extensions/** | プロジェクト固有UI | ⚠️ 最小限 | core/* |
| **infra/** | 育成・観測の仕組み | N/A | 環境依存OK |

---

## 依存関係

```
core/tokens
    ↓
core/atoms → core/molecules → core/organisms → core/templates
                  ↓
            extensions/
                  ↓
            apps/web/src/
```

**ルール:**
- 下から上への依存は禁止
- core/ 内のコンポーネントは extensions/ を参照しない
- extensions/ は core/ を自由に使える

---

## 育成フロー

### 1. absorb（吸収）

アプリからコンポーネントを ui-catalog に取り込む。

**重要: absorb 時は extensions/<project>/ に配置**

```
apps/web/src/components/AnswerCard.tsx
    ↓ absorb（UI のみ抽出）
extensions/1on1/organisms/MemberCard/  ← Tailwind のままでOK
```

### 2. refine（洗練）+ 昇格

ビジネスロジックを除去し、汎用化する。

**昇格時の必須作業:**
- **Tailwind → SCSS Module 変換**
- ビジネスロジックの完全除去
- Props の汎用化

```
extensions/1on1/organisms/MemberCard/
    ↓ refine（SCSS 変換 + 汎用化）
core/organisms/DataCard/  ← SCSS Module 必須
```

### 3. distribute（配布）

安定版を各プロジェクトへ配布。

```
core/organisms/DataCard/
    ↓ git pull origin main
project-a, project-b, ...
```

### 4. merge（統合）

プロジェクトブランチから main への PR。

```
project/1on1 ブランチ → main（安定版）
```

---

## エクスポート構成

```typescript
// @ui-catalog/core - ルートエクスポート
export * from './core'        // core/ 全体
export * from './extensions'  // extensions/ 全体
export * from './infra'       // infra/ 全体

// @ui-catalog/core/<layer> - サブパスエクスポート
export * from './atoms'
export * from './molecules'
export * from './organisms'
export * from './templates'
export * from './hooks'
export * from './constants'
export * from './types'
export * from './tokens'
export * from './utils'

// @ui-catalog/core/extensions - extensions/ バレルエクスポート
export * from './1on1'

// @ui-catalog/core/infra - infra/ バレルエクスポート
export * from './devtools'
export * from './version'
export * from './theme'
```

### インポート例

```typescript
// 推奨: レイヤー指定でのインポート
import { Button, Icon } from '@ui-catalog/core/atoms'
import { FormField } from '@ui-catalog/core/molecules'
import { Modal, Dialog } from '@ui-catalog/core/organisms'
import { AppShell } from '@ui-catalog/core/templates'

// 拡張コンポーネント
import { SurveyCard } from '@ui-catalog/core/extensions/1on1'

// インフラ
import { useOperationLog } from '@ui-catalog/core/infra/devtools'
import { ThemeProvider } from '@ui-catalog/core/infra/theme'
```

---

## チェックリスト

### コンポーネント追加時

- [ ] 適切な層に配置したか（atoms/molecules/organisms/templates/extensions）
- [ ] ビジネスロジックが混入していないか（core/ の場合）
- [ ] **SCSS Module で実装したか**（core/ の場合）
- [ ] 操作ログ（useOperationLog）を追加したか
- [ ] data-component 属性を追加したか
- [ ] VERSION_REGISTRY に登録したか
- [ ] Storybook story を作成したか

### absorb 時

- [ ] extensions/<project>/ に配置したか
- [ ] Tailwind/CSS-in-JS のままでOK（速度優先）
- [ ] ビジネスロジックの量を確認したか

### refine 時（昇格）

- [ ] **Tailwind → SCSS Module 変換したか**
- [ ] ビジネスロジックを完全に除去したか
- [ ] Props を汎用的にしたか
- [ ] テストを追加したか
