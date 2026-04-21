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
| `/ui-catalog sync` | どこでも | main の最新を project/* に merge で配布 |
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

Git Submodule + **`link:` 参照** で導入する。

`link:` を採用する理由:
- consumer 側の `pnpm install` が ui-catalog の devDependencies（Storybook 等）を巻き込まない
- ui-catalog の `node_modules` は consumer の `node_modules` と完全に独立する
- consumer で Storybook は不要、ui-catalog 単独のリポジトリでのみ起動する運用

### 事前準備

ui-catalog リポジトリで `project/<name>` ブランチを作成しておく。

### アプリ側の設定

**package.json** に追加:

```jsonc
{
  "scripts": {
    "ui:update": "git submodule update --remote packages/ui-catalog"
  },
  "dependencies": {
    "@ui-catalog/core": "link:../../packages/ui-catalog"
  }
}
```

> `link:` のパスは、`package.json` から見た相対パス。モノレポでは `apps/web` 等からの相対にする。

**pnpm-workspace.yaml**:

```yaml
packages:
  - 'apps/*'
# packages/ui-catalog は workspace に含めない（link: 参照のため）
```

**.vscode/settings.json** に追加: `{ "git.scanRepositories": ["packages"] }`

### 新規プロジェクトに導入

```bash
git submodule add -b project/<name> https://github.com/sasakiyusuke2017015/ui-catalog.git packages/ui-catalog
pnpm install
```

### 既存プロジェクトをクローン

```bash
git clone --recurse-submodules <your-repo>
pnpm install
```

これで consumer 側は動く。ui-catalog 自身の `node_modules` は**作られない**。

### ui-catalog を更新

```bash
pnpm ui:update
```

### ui-catalog 単独で開発する（Storybook 起動など）

ui-catalog をいじりたいとき（新コンポーネント追加、Storybook で見た目確認）は、submodule ディレクトリで個別に install:

```bash
cd packages/ui-catalog
pnpm install                 # ここで初めて ui-catalog の node_modules が作られる
pnpm storybook:localhost     # http://localhost:6006
```

ui-catalog の `node_modules` は consumer の `node_modules` と独立しているので、consumer 側に影響しない。Storybook が不要なら `pnpm install` も不要。

### Next.js での利用

ui-catalog の .ts を Next.js に transpile させるため `next.config.ts` に追記:

```typescript
const nextConfig: NextConfig = {
  transpilePackages: ['@ui-catalog/core'],
};
```

### Docker を使う場合

Dockerfile 内で `packages/ui-catalog` は `package.json` だけでなくソース全体を COPY する必要がある（`link:` 参照のため）:

```dockerfile
COPY packages/ui-catalog ./packages/ui-catalog
RUN pnpm install --frozen-lockfile
```

また `docker-compose.yml` の volumes では `/app/packages/ui-catalog/node_modules` を匿名 volume で覆い、host 側の install 痕と衝突させないこと:

```yaml
volumes:
  - ./packages/ui-catalog:/app/packages/ui-catalog
  - /app/packages/ui-catalog/node_modules
```

### Claude Code コマンド登録

```bash
mkdir -p .claude/commands
cp packages/ui-catalog/infra/commands/ui-catalog.md .claude/commands/
```

`/ui-catalog sync` で自動更新される。

---

## Storybook

公開: https://sasakiyusuke2017015.github.io/ui-catalog/

```bash
# ローカルでホットリロード（http://localhost:6006）
pnpm storybook:localhost

# GitHub Pages にデプロイ
pnpm storybook:deploy
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
| extensions/ | プロジェクト固有UI（project/* のみ） | 最小限 |
| infra/ | 育成・観測の仕組み | N/A |

---

## 詳細ドキュメント

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - 詳細なアーキテクチャ説明
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - 開発ガイド
