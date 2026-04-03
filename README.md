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
│    atoms/              clean（洗練・整理）            │
│    molecules/          optimize（依存最適化）         │
│    organisms/          merge（安定版へ統合）          │
│    templates/          sync（各プロジェクトへ配布）    │
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
├── extensions/              # プロジェクト拡張用（project/* ブランチのみ）
│   └── <project>/           #   プロジェクト固有コンポーネント
│
├── infra/                   # 育成・観測の仕組み
│   ├── devtools/            #   操作ログ、デバッグツール
│   ├── version/             #   バージョン管理
│   ├── theme/               #   テーマ機能
│   ├── storybook/           #   Storybook 設定
│   ├── scripts/             #   セットアップスクリプト
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

// 拡張コンポーネント（project/* ブランチのみ）
import { SurveyCard, ScoreBadge } from '@ui-catalog/core/extensions/1on1'
import { VideoThumb } from '@ui-catalog/core/extensions/ticker'

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
import versions from '../../packages/ui-catalog/ui-catalog.versions.json'

initUICatalog(versions)
```

---

## 運用方針

### ブランチ戦略

```
ui-catalog リポジトリ
├── main                 ← 安定版
├── project/1on1         ← 1on1 プロジェクト専用
├── project/calend       ← calend プロジェクト専用
└── project/<name>       ← 各プロジェクト専用
```

### 運用フロー

```
【開発】project/* ブランチで作業・コミット
    ↓
【統合】/ui-catalog merge で main に merge（main で実行）
    ↓
【配布】/ui-catalog sync で main の最新を取り込む（各 project/* で実行）
```

**全ての反映は `git merge` のみ。rebase, force push, reset --hard は禁止。**

### コマンド

| コマンド | 使用ブランチ | やること |
|----------|-------------|---------|
| `/ui-catalog` | どこでも | 状態表示（読み取り専用） |
| `/ui-catalog sync` | project/* のみ | main の最新を merge で取り込む |
| `/ui-catalog merge` | main のみ | project/* の変更を merge で取り込む |
| `/ui-catalog clean` | project/* のみ | 整合性チェック・修正 |
| `/ui-catalog optimize` | main のみ | 依存最適化 |
| `/ui-catalog absorb` | project/* のみ | アプリ → ui-catalog 昇格 |
| `/ui-catalog apply` | project/* のみ | ui-catalog → アプリ 適用 |

間違ったブランチで実行すると即エラーで止まる。詳細は `infra/commands/ui-catalog.md` を参照。

### 育成フロー

```
absorb（吸収）  : アプリから core/ に取り込み
    ↓
clean（洗練）   : 整合性確認・不要コード削除
    ↓
optimize（最適化）: 依存関係の整理
    ↓
merge（統合）   : main に merge
    ↓
sync（配布）    : 各 project/* に配布
```

---

## プロジェクトへの導入

`pnpm install` だけで ui-catalog の clone とバージョン固定が完了する仕組み。

### Step 1: ブランチ作成

ui-catalog リポジトリで `project/<name>` ブランチを作成。

```bash
# ui-catalog リポジトリで
git checkout main
git checkout -b project/<name>
git push -u origin project/<name>
```

### Step 2: package.json に ui-catalog の設定を追加

アプリ側の `package.json` に以下を追加:

```json
{
  "ui-catalog": {
    "repo": "https://github.com/sasakiyusuke2017015/ui-catalog.git",
    "branch": "project/<name>",
    "commit": "<コミットハッシュ>"
  },
  "scripts": {
    "postinstall": "node packages/ui-catalog/infra/scripts/setup-ui-catalog.js"
  },
  "dependencies": {
    "@ui-catalog/core": "workspace:*"
  }
}
```

コミットハッシュは ui-catalog リポジトリで確認:

```bash
git rev-parse --short HEAD
```

> **注意**: 初回は setup スクリプト自体がまだないので、先に手動で clone が必要。

```bash
mkdir -p packages
git clone -b project/<name> https://github.com/sasakiyusuke2017015/ui-catalog.git packages/ui-catalog
```

2回目以降は `pnpm install` だけで自動セットアップされる。

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

### Step 5: バージョン初期化

アプリのエントリポイント（例: `apps/web/src/main.tsx`）で初期化:

```typescript
import { initUICatalog } from '@ui-catalog/core'
import versions from '../../packages/ui-catalog/ui-catalog.versions.json'

initUICatalog(versions)
```

### Step 6: Claude Code コマンド登録

```bash
mkdir -p .claude/commands
cp packages/ui-catalog/infra/commands/ui-catalog.md .claude/commands/
```

### Step 7: VSCode で packages/ui-catalog の Git を認識させる

`.vscode/settings.json` に追加:

```json
{
  "git.repositoryScanMaxDepth": 3
}
```

---

## 環境の再現

### 新しいメンバーが参加したとき

```bash
git clone <アプリのリポ>
pnpm install
```

これだけ。`postinstall` が自動で:
1. `packages/ui-catalog` を clone
2. 指定ブランチ・コミットに checkout

### ui-catalog を更新したいとき

```bash
cd packages/ui-catalog
git pull  # または /ui-catalog sync
cd ../..
```

動作確認したら、アプリ側の `package.json` のコミットハッシュを更新してコミット:

```json
{
  "ui-catalog": {
    "commit": "<新しいハッシュ>"
  }
}
```

### 他のメンバーがその更新を受け取る

```bash
git pull
pnpm install
```

`postinstall` が走り、新しいコミットに自動で切り替わる

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
| extensions/ | プロジェクト固有UI（project/* のみ） | 最小限 |
| infra/ | 育成・観測の仕組み | N/A |

---

## 詳細ドキュメント

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 詳細なアーキテクチャ説明
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - 開発ガイド
