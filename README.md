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
│    tokens/             refine（洗練・整理）          │
│    primitives/         distribute（各プロジェクトへ） │
│    components/         merge（安定版へ統合）         │
│    patterns/                                        │
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
// 推奨: ルートからのインポート
import { Button, Input, Modal, useDisclosure, cn } from '@ui-catalog/core'

// 明示的なパス指定
import { Button } from '@ui-catalog/core/components'
import { Modal, Dialog } from '@ui-catalog/core/patterns'
import { Header, AppShell } from '@ui-catalog/core/layouts'
import { useDisclosure } from '@ui-catalog/core/hooks'
import { cn } from '@ui-catalog/core/utils'

// 拡張コンポーネント
import { SurveyCard, Question } from '@ui-catalog/core/extensions/1on1'
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
import { configureDevTools } from '@ui-catalog/core'

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
├── main                 ← 安定版（リリース済み）
├── project/1on1         ← 1on1 プロジェクトからの変更
└── project/<name>       ← 各プロジェクト専用
```

### 運用フロー

```
【各プロジェクト】
1. UI を変更（開発・Vibe Coding）
       ↓
2. cd packages/ui-catalog && git push → project/<name> ブランチへ

【ui-catalog リポジトリ】
3. project/<name> → main への PR 作成
       ↓
4. VRT でレビュー・マージ
       ↓
5. タグ付け（v1.2.0）

【各プロジェクト】
6. cd packages/ui-catalog && git pull で main（安定版）を取り込む
```

### 育成フロー

```
absorb（吸収）    : アプリから extensions/ に取り込み
    ↓
refine（洗練）    : ビジネスロジック除去 → core/ へ昇格
    ↓
distribute（配布）: 安定版を各プロジェクトへ
    ↓
merge（統合）     : project ブランチ → main
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
cp packages/ui-catalog/.claude/commands/ui-catalog.md .claude/commands/
```

更新時も同様に `cp` で上書きする（ui-catalog 側の変更は `ds` で配布されるが、
プロジェクト側の `.claude/commands/` には自動反映されない）。

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

これにより VSCode のソース管理パネルで ui-catalog のブランチ切り替え・
コミット・push が可能になる。

### Step 8: バージョン管理ファイルの配置

```bash
# VERSION_REGISTRY から ui-catalog.versions.json を生成
cd packages/ui-catalog
pnpm sync:versions
```

アプリ側の `main.tsx` で初期化:

```tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../../packages/ui-catalog/ui-catalog.versions.json'

initUICatalog(versions)
```

---

## 各層の責務

| 層 | 責務 | ビジネスロジック |
|----|------|-----------------|
| core/tokens | デザイン値の定義 | ❌ 禁止 |
| core/primitives | 最小UIブロック | ❌ 禁止 |
| core/components | 汎用UIコンポーネント | ❌ 禁止 |
| core/patterns | コンポーネントの組み合わせ | ❌ 禁止 |
| core/layouts | ページレイアウト | ❌ 禁止 |
| extensions/ | プロジェクト固有UI | ⚠️ 最小限 |
| infra/ | 育成・観測の仕組み | N/A |

---

## 詳細ドキュメント

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 詳細なアーキテクチャ説明
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - 開発ガイド
