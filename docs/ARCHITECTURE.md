# ui-catalog アーキテクチャ

## 思想

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**。

```
┌─────────────────────────────────────────────────────┐
│  ui-catalog = Design System + 育成メカニズム        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  【静的資産】          【動的プロセス】              │
│  core/                 absorb（外部から吸収）        │
│    tokens/             refine（洗練・整理）          │
│    primitives/         distribute（各プロジェクトへ） │
│    components/         merge（安定版へ統合）         │
│    patterns/                                        │
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
│    shared/（昇格候補）                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## ディレクトリ構造

```
ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── tokens/              #   デザイントークン
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── shadows.ts
│   │   ├── borders.ts
│   │   └── index.ts
│   │
│   ├── primitives/          #   最小単位（意味を持たないUI）
│   │   ├── Animated/
│   │   ├── Box/
│   │   ├── Icon/
│   │   ├── Stack/
│   │   └── Text/
│   │
│   ├── components/          #   意味を持つUI（汎用コンポーネント）
│   │   ├── BackButton/
│   │   ├── BackgroundImage/
│   │   ├── Badge/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── ExternalLink/
│   │   ├── Input/
│   │   ├── InternalLink/
│   │   ├── LineChart/
│   │   ├── Media/
│   │   ├── RadarChart/
│   │   ├── Radio/
│   │   ├── ReplayButton/
│   │   ├── ResetButton/
│   │   ├── ResponsiveContainer/
│   │   ├── Segment/
│   │   ├── Select/
│   │   ├── Slider/
│   │   ├── TextArea/
│   │   ├── Toggle/
│   │   └── Tooltip/
│   │
│   ├── patterns/            #   組み合わせパターン
│   │   ├── ActionBreadcrumb/
│   │   ├── AlertDialog/
│   │   ├── AuthFormCard/
│   │   ├── Breadcrumb/
│   │   ├── CardGrid/
│   │   ├── ConfirmDialog/
│   │   ├── ContentBlock/
│   │   ├── DatePicker/
│   │   ├── DetailHeader/
│   │   ├── Dialog/
│   │   ├── DropdownMenu/
│   │   ├── EmptyState/
│   │   ├── FilterField/
│   │   ├── FixedTabBar/
│   │   ├── FloatingMenuButton/
│   │   ├── FormField/
│   │   ├── KeyButton/
│   │   ├── LoadingOverlay/
│   │   ├── LoadingZone/
│   │   ├── LoginButton/
│   │   ├── MenuItem/
│   │   ├── MenuItemList/
│   │   ├── Modal/
│   │   ├── PasswordValidation/
│   │   ├── PieChart/
│   │   ├── RefreshButton/
│   │   ├── SortableToggleList/
│   │   ├── StarRating/
│   │   ├── StepIndicator/
│   │   ├── TabBar/
│   │   ├── Tabs/
│   │   ├── Toast/
│   │   └── ToggleableSection/
│   │
│   ├── layouts/             #   レイアウト
│   │   ├── AppShell/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── SideNav/
│   │   └── SubHeader/
│   │
│   ├── adapters/            #   ルーター抽象化（RouterContext等）
│   │   ├── RouterContext.tsx
│   │   ├── react-router.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── constants/           #   定数定義（アイコン名等）
│   │   ├── iconNames.ts
│   │   └── index.ts
│   │
│   ├── types/               #   共通型定義
│   │   ├── filter.ts
│   │   ├── table.ts
│   │   └── index.ts
│   │
│   ├── hooks/               #   UIフック
│   │   ├── useDevice.ts
│   │   ├── useRemountKey.ts
│   │   ├── ui/              #     UI系フック（useDisclosure等）
│   │   └── index.ts
│   │
│   ├── utils/               #   ユーティリティ
│   │   ├── cn.ts
│   │   ├── isNullish.ts
│   │   ├── debug.ts
│   │   └── index.ts
│   │
│   ├── styles/              #   グローバルスタイル
│   │   └── globals.css
│   │
│   ├── decorations/         #   背景装飾コンポーネント
│   │   ├── GradientBackground.tsx
│   │   └── index.ts
│   │
│   ├── magicui/             #   アニメーション
│   │   ├── BlurFade.tsx
│   │   ├── DotPattern.tsx
│   │   └── index.ts
│   │
│   └── index.ts             #   core/ バレルエクスポート
│
├── extensions/              # プロジェクト拡張用（absorb の受け皿）
│   ├── 1on1/                #   1on1 プロジェクト固有
│   │   ├── AdjustmentBanner/
│   │   ├── ChatFab/
│   │   ├── DataCountDisplay/
│   │   ├── DevelopmentBanner/
│   │   ├── PWAInstallPrompt/
│   │   ├── QACardList/
│   │   ├── Question/
│   │   ├── ScoreBadge/
│   │   ├── StatisticItem/
│   │   ├── StatisticList/
│   │   ├── StatisticPanel/
│   │   ├── StatusBar/
│   │   ├── SurveyCard/
│   │   └── index.ts
│   │
│   ├── shared/              #   複数プロジェクトで使えそうなもの（昇格候補）
│   │   ├── InteractiveTable/
│   │   ├── TransferList/
│   │   ├── TrendChart/
│   │   └── index.ts
│   │
│   └── index.ts             #   extensions/ バレルエクスポート
│
├── infra/                   # 育成・観測の仕組み
│   ├── commands/            #   Claude Code コマンド
│   │   └── ui-catalog.md
│   │
│   ├── devtools/            #   開発ツール
│   │   ├── useOperationLog.ts
│   │   ├── configureDevTools.ts
│   │   └── index.ts
│   │
│   ├── version/             #   バージョン管理
│   │   ├── registry.ts
│   │   └── index.ts
│   │
│   ├── theme/               #   テーマ機能
│   │   ├── provider.tsx
│   │   ├── atoms.ts
│   │   ├── hooks.ts
│   │   ├── storage.ts
│   │   └── index.ts
│   │
│   ├── storybook/           #   Storybook 設定
│   │   └── preview.tsx
│   │
│   └── index.ts             #   infra/ バレルエクスポート
│
├── docs/                    # ドキュメント
│   ├── README.md
│   ├── DEVELOPMENT.md
│   └── ARCHITECTURE.md
│
└── index.ts                 # ルートエクスポート
```

---

## 各層の責務

| 層 | 責務 | ビジネスロジック | 外部依存 |
|----|------|-----------------|---------|
| **core/tokens** | デザイン値の定義 | ❌ 禁止 | なし |
| **core/primitives** | 最小UIブロック | ❌ 禁止 | React のみ |
| **core/components** | 汎用UIコンポーネント | ❌ 禁止 | tokens, primitives |
| **core/patterns** | コンポーネントの組み合わせ | ❌ 禁止 | components |
| **core/layouts** | ページレイアウト | ❌ 禁止 | components, patterns |
| **core/adapters** | ルーター抽象化 | ❌ 禁止 | React のみ |
| **core/constants** | 定数定義 | ❌ 禁止 | なし |
| **core/types** | 共通型定義 | ❌ 禁止 | なし |
| **core/hooks** | UIフック | ❌ 禁止 | React のみ |
| **core/utils** | ユーティリティ関数 | ❌ 禁止 | なし |
| **core/styles** | グローバルCSS | ❌ 禁止 | なし |
| **core/decorations** | 背景装飾 | ❌ 禁止 | tokens |
| **core/magicui** | アニメーション | ❌ 禁止 | framer-motion |
| **extensions/** | プロジェクト固有UI | ⚠️ 最小限 | core/* |
| **infra/** | 育成・観測の仕組み | N/A | 環境依存OK |

---

## 依存関係

```
core/tokens
    ↓
core/primitives → core/components → core/patterns → core/layouts
                        ↓
                  extensions/
                        ↓
                  apps/web/src/components/
```

**ルール:**
- 下から上への依存は禁止
- core/ 内のコンポーネントは extensions/ を参照しない
- extensions/ は core/ を自由に使える

---

## 育成フロー

### 1. absorb（吸収）

アプリからコンポーネントを ui-catalog に取り込む。

```
apps/web/src/components/SurveyCard.tsx
    ↓ absorb
extensions/1on1/SurveyCard/
```

### 2. refine（洗練）

ビジネスロジックを除去し、汎用化する。

```
extensions/1on1/SurveyCard/
    ↓ refine（ビジネスロジック除去）
    ↓ 「DataCard」として昇格
core/components/DataCard/
```

### 3. distribute（配布）

安定版を各プロジェクトへ配布。

```
core/components/DataCard/
    ↓ git pull origin main
project-a, project-b, ...
```

### 4. merge（統合）

プロジェクトブランチから main への PR。

```
project/1on1 ブランチ → main（安定版）
```

---

## 移行完了状況

✅ **Phase 1-5: 完了**

### 移行済み項目

| 移行元 | 移行先 | 状態 |
|--------|--------|------|
| atoms/* | core/primitives/, core/components/ | ✅ 完了 |
| molecules/* | core/patterns/ | ✅ 完了 |
| templates/* | core/layouts/ | ✅ 完了 |
| hooks/useOperationLog | infra/devtools/ | ✅ 完了 |
| theme/ | infra/theme/ | ✅ 完了 |
| version/ | infra/version/ | ✅ 完了 |
| constants/ | core/constants/ | ✅ 完了 |
| types/ | core/types/ | ✅ 完了 |
| styles/ | core/styles/ | ✅ 完了 |
| hooks/ | core/hooks/ | ✅ 完了 |
| utils/ | core/utils/ | ✅ 完了 |
| decorations/ | core/decorations/ | ✅ 完了 |
| magicui/ | core/magicui/ | ✅ 完了 |
| adapters/ | core/adapters/ | ✅ 完了 |

### apps/web へ移動済み

| 移行元 | 移行先 | 理由 |
|--------|--------|------|
| hooks/api/ | apps/web/src/hooks/api/ | アプリ固有のAPI処理 |
| utils/api/ | apps/web/src/lib/api/ | アプリ固有のAPI処理 |

### 削除済み

| ディレクトリ | 理由 |
|-------------|------|
| config/ | 空ディレクトリ |

---

## エクスポート構成

```typescript
// @ui-catalog/core - ルートエクスポート
export * from './core'        // core/ 全体
export * from './extensions'  // extensions/ 全体
export * from './infra'       // infra/ 全体

// @ui-catalog/core/core - core/ バレルエクスポート
export * from './tokens'
export * from './primitives'
export * from './components'
export * from './patterns'
export * from './layouts'
export * from './constants'
export * from './types'
export * from './hooks'
export * from './utils'
export * from './decorations'
export * from './magicui'
export * from './adapters'

// @ui-catalog/core/extensions - extensions/ バレルエクスポート
export * from './1on1'
export * from './shared'

// @ui-catalog/core/infra - infra/ バレルエクスポート
export * from './devtools'
export * from './version'
export * from './theme'
```

### インポート例

```typescript
// 推奨: ルートからのインポート
import { Button, useDisclosure, cn, RouterProvider } from '@ui-catalog/core'

// 明示的なパス指定
import { Button } from '@ui-catalog/core/core/components'
import { useDisclosure } from '@ui-catalog/core/core/hooks/ui'
import { RouterProvider } from '@ui-catalog/core/core/adapters'

// 拡張コンポーネント
import { SurveyCard } from '@ui-catalog/core/extensions/1on1'
import { InteractiveTable } from '@ui-catalog/core/extensions/shared'

// インフラ
import { useOperationLog } from '@ui-catalog/core/infra/devtools'
import { ThemeProvider } from '@ui-catalog/core/infra/theme'
```

---

## チェックリスト

### コンポーネント追加時

- [ ] 適切な層に配置したか（tokens/primitives/components/patterns/layouts/extensions）
- [ ] ビジネスロジックが混入していないか（core/ の場合）
- [ ] 操作ログ（useOperationLog）を追加したか
- [ ] data-component 属性を追加したか
- [ ] VERSION_REGISTRY に登録したか
- [ ] Storybook story を作成したか

### absorb 時

- [ ] extensions/<project>/ に配置したか
- [ ] ビジネスロジックの量を確認したか
- [ ] 汎用化の余地を検討したか

### refine 時（昇格）

- [ ] ビジネスロジックを完全に除去したか
- [ ] Props を汎用的にしたか
- [ ] テストを追加したか
- [ ] 移行先の影響を確認したか
