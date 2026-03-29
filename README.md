# @ui-catalog/core

pnpm workspace 向け UI コンポーネントライブラリ。
**Design System + 育成メカニズム** を内包したUIカタログ。

---

## 思想

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**。

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
│                                                     │
│  【拡張領域】                                        │
│  extensions/                                        │
│    <project>/（プロジェクト固有）                    │
│    shared/（昇格候補）                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 構造

```
ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── atoms/               #   最小単位（Button, Input, Icon, Badge 等）
│   ├── molecules/           #   atoms の組み合わせ（FormField, DatePicker 等）
│   ├── organisms/           #   独立したセクション（Dialog, Modal, Select 等）
│   ├── templates/           #   ページレイアウト（Header, Footer, AppShell 等）
│   ├── hooks/               #   カスタムフック（useDevice, useDisclosure 等）
│   │   └── router/          #     ルーター抽象化（RouterContext）
│   ├── tokens/              #   デザイントークン（SCSS変数）
│   ├── constants/           #   定数定義
│   ├── types/               #   共通型定義
│   ├── utils/               #   ユーティリティ（cn, isNullish 等）
│   └── styles/              #   グローバルCSS
│
├── extensions/              # プロジェクト拡張用
│   ├── 1on1/                #   1on1 プロジェクト固有
│   └── shared/              #   複数プロジェクトで使えそうなもの（昇格候補）
│
├── infra/                   # 育成・観測の仕組み
│   ├── devtools/            #   操作ログ、デバッグツール
│   ├── version/             #   バージョン管理
│   ├── theme/               #   テーマ機能
│   ├── storybook/           #   Storybook 設定
│   └── commands/            #   育成コマンド
│
└── docs/                    # ドキュメント
```

---

## 使い方

### コンポーネントのインポート

```typescript
// 推奨: Atomic Design レイヤー指定でのインポート
import { Button, Icon, Input } from '@ui-catalog/core/atoms'
import { FormField, DatePicker } from '@ui-catalog/core/molecules'
import { Modal, Dialog, Select } from '@ui-catalog/core/organisms'
import { Header, AppShell } from '@ui-catalog/core/templates'

// フック
import { useDevice, useDisclosure } from '@ui-catalog/core/hooks'
import { cn } from '@ui-catalog/core/utils'

// 拡張コンポーネント
import { SurveyCard, ScoreBadge } from '@ui-catalog/core/extensions/1on1'
import { InteractiveTable, TrendChart } from '@ui-catalog/core/extensions/shared'

// インフラ
import { configureDevTools, useOperationLog } from '@ui-catalog/core/infra/devtools'
import { ThemeProvider, useTheme } from '@ui-catalog/core/infra/theme'
```

### テーマ機能

```tsx
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider, useTheme } from '@ui-catalog/core/infra/theme'

function App() {
  return (
    <JotaiProvider>
      <ThemeProvider>
        <YourApp />
      </ThemeProvider>
    </JotaiProvider>
  )
}

function SettingsPage() {
  const { colors } = useTheme()
  return <div style={{ backgroundColor: colors.primaryBgColor }}>...</div>
}
```

### 操作ログ（DevTools）

```tsx
// apps/web/src/main.tsx
import { configureDevTools } from '@ui-catalog/core/infra/devtools'

if (import.meta.env.DEV) {
  configureDevTools({
    enabled: true,
    logOperations: true,
    consoleOutput: true,
    uidPrefix: 'myapp',
  })
}
```

### バージョン管理

```typescript
// apps/web/src/main.tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../ui-catalog.versions.json'

initUICatalog(versions)
```

---

## 運用方針

### ブランチ戦略

```
ui-catalog リポジトリ
├── main                 ← 安定版（PR 経由のみ変更可）
├── project/1on1         ← 1on1 プロジェクト専用
├── project/calend       ← calend プロジェクト専用
└── project/<name>       ← 各プロジェクト専用
```

**重要**: project/* の変更を main に取り込む際は、必ず GitHub PR 経由で **Squash Merge** する。直接 merge/rebase は禁止。

> Squash Merge に限定する理由: sync 時に「マージ済みブランチ」を差分の内容で検出し `reset --hard main` するため。通常 Merge や Rebase Merge だと検出が困難になる。

### 運用フロー

```
【開発】project/* ブランチで作業
    ↓
【PR】/ui-catalog pr で PR 作成
    ↓
【レビュー】GitHub で確認 → Squash Merge（必須: 他のマージ方法は禁止）
    ↓
【同期】/ui-catalog sync で全ブランチを同期
```

### コマンド

| コマンド | 説明 |
|----------|------|
| `/ui-catalog` | 状態診断 + 推奨アクション |
| `/ui-catalog sync` | main ↔ project/* 同期 |
| `/ui-catalog pr` | PR 作成 |
| `/ui-catalog clean` | 整合性修正 |
| `/ui-catalog optimize` | 依存最適化 |
| `/ui-catalog absorb` | アプリ → ui-catalog 昇格 |
| `/ui-catalog apply` | ui-catalog → アプリ 適用 |

詳細は `.claude/commands/ui-catalog.md` を参照。

### 育成フロー

```
absorb（吸収）  : アプリから extensions/ に取り込み
    ↓
clean（洗練）   : 整合性確認・不要コード削除
    ↓
optimize（最適化）: 依存関係の整理
    ↓
pr（PR作成）    : main への変更を提案
    ↓
sync（同期）    : 全プロジェクトに配布
```

---

## プロジェクトへの導入

### Step 1: ブランチ作成

ui-catalog リポジトリで `project/<name>` ブランチを作成。

### Step 2: clone

```bash
mkdir -p packages
git clone -b project/<name> https://your-repo/ui-catalog.git packages/ui-catalog
```

### Step 3: .gitignore

```
packages/ui-catalog/
```

### Step 4: pnpm-workspace.yaml

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### Step 5: 依存関係追加

```bash
npm pkg set dependencies.@ui-catalog/core="workspace:*"
pnpm install
```

### Step 6: Claude Code コマンド登録

ui-catalog の育成コマンド（`/ui-catalog`）をプロジェクトで使えるようにする。
`.claude/` は ui-catalog の `.gitignore` で除外されているため、手動コピーが必要。

```bash
# プロジェクトルートの .claude/commands/ にコピー
mkdir -p .claude/commands
cp packages/ui-catalog/infra/commands/ui-catalog.md .claude/commands/
```

更新時も同様に `cp` で上書きする。

### Step 7: VSCode で packages/ui-catalog の Git を認識させる

VSCode はデフォルトでサブディレクトリの `.git` を検出しないため、
明示的に設定する。

```bash
mkdir -p .vscode
```

`.vscode/settings.json` に以下を追加:

```json
{
  "git.repositoryScanMaxDepth": 3
}
```

または、`packages/ui-catalog` を直接指定する場合:

```json
{
  "git.scanRepositories": ["packages/ui-catalog"]
}
```

---

## 各層の責務

| 層 | 責務 | ビジネスロジック |
|----|------|-----------------|
| core/atoms | 最小UIブロック | 禁止 |
| core/molecules | atoms の組み合わせ | 禁止 |
| core/organisms | 独立したセクション | 禁止 |
| core/templates | ページレイアウト | 禁止 |
| core/hooks | カスタムフック | 禁止 |
| core/tokens | デザイントークン | 禁止 |
| extensions/ | プロジェクト固有UI | 最小限 |
| infra/ | 育成・観測の仕組み | N/A |

---

## 詳細ドキュメント

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 詳細なアーキテクチャ説明
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - 開発ガイド
