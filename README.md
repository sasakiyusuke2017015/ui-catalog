# @ui-catalog/core

Atomic Design ベースの汎用 UI コンポーネントライブラリ。
**Git Submodule + ソース配布** で各プロジェクトに取り込む。

---

## 配布モデル

ui-catalog は **submodule 専用**。`npm publish` はしない。

```
親アプリ/
└── packages/
    └── ui-catalog/        ← この repo を submodule で取り込む（ソースのまま）
```

| 観点 | この repo の方針 |
|------|-----------------|
| 配布形態 | **Git Submodule + ソース直 export**（ビルド済み `dist` なし） |
| 依存解決 | **親アプリの `node_modules` 経由**（peerDependencies で宣言） |
| 親側の install | **submodule ディレクトリ内では走らせない**（ui-catalog の devDependencies は親に持ち込まない） |
| ui-catalog 側での編集 | OK。**親 → ui-catalog 方向の同期はサポートしない**。ui-catalog 側で直接コミット |
| ブランチ運用 | **`main` 一本**。プロジェクト別ブランチは持たない |

> 親アプリで Storybook は不要。Storybook を立てたいときだけ ui-catalog 単独 repo として clone し、そこで `pnpm install` する。

---

## 構造

```
ui-catalog/
├── core/                    # 純粋UI（ビジネスロジックゼロ）
│   ├── atoms/               #   最小単位（Button, Input, Icon, Badge 等）
│   ├── molecules/           #   atoms の組み合わせ（FormField, DatePicker 等）
│   ├── organisms/           #   独立したセクション（Dialog, Modal, Select 等）
│   ├── templates/           #   ページレイアウト（Header, AppShell 等）
│   ├── hooks/               #   カスタムフック
│   ├── tokens/              #   デザイントークン
│   ├── constants/ types/ utils/ styles/
│
├── infra/                   # 観測・バージョン管理
│   ├── devtools/            #   操作ログ
│   ├── version/             #   VERSION_REGISTRY
│   ├── theme/               #   テーマ
│   ├── storybook/           #   Storybook 設定
│
└── docs/                    # 詳細ドキュメント
```

---

## 親アプリへの導入

### 1. submodule 追加

```bash
git submodule add https://github.com/sasakiyusuke2017015/ui-catalog.git packages/ui-catalog
```

> ブランチ指定は不要（main 固定）。

### 2. 親の `package.json`

```jsonc
{
  "scripts": {
    "ui:update": "git submodule update --remote packages/ui-catalog"
  },
  "dependencies": {
    "@ui-catalog/core": "link:./packages/ui-catalog"
  }
}
```

> `link:` のパスは `package.json` から見た相対。モノレポで `apps/web` 等から参照するなら `link:../../packages/ui-catalog`。

### 3. `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
# packages/ui-catalog は workspace に含めない（link: 参照、submodule 内では install しない）
```

### 4. tsconfig / Next.js

`.ts` をそのまま transpile させる：

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  transpilePackages: ['@ui-catalog/core'],
};
```

### 5. クローン手順（既存リポを取得する人向け）

```bash
git clone --recurse-submodules <your-repo>
pnpm install   # 親の node_modules だけ作られる。ui-catalog 内には作られない
```

### 6. ui-catalog を最新に

```bash
pnpm ui:update   # = git submodule update --remote packages/ui-catalog
git add packages/ui-catalog
git commit -m "chore: bump ui-catalog"
```

---

## 親アプリでのインポート

```typescript
import { Button, Icon, Input } from '@ui-catalog/core/atoms'
import { FormField, DatePicker } from '@ui-catalog/core/molecules'
import { Modal, Dialog, Select } from '@ui-catalog/core/organisms'
import { Header, AppShell } from '@ui-catalog/core/templates'

import { useDevice, useDisclosure } from '@ui-catalog/core/hooks'
import { cn } from '@ui-catalog/core/utils'
```

詳細な export 一覧は [package.json](./package.json) の `exports` を参照。

---

## ui-catalog 側での開発

ui-catalog 単独で clone して作業する：

```bash
git clone https://github.com/sasakiyusuke2017015/ui-catalog.git
cd ui-catalog
pnpm install
pnpm storybook:localhost   # http://localhost:6006
```

変更したらそのまま `main` にコミット → push。
親アプリ側は `pnpm ui:update` で取り込む。

### Claude Code コマンド

| コマンド | 場所 | やること |
|---------|------|---------|
| `/ui-catalog` | ui-catalog | 状態診断 |
| `/ui-catalog clean` | ui-catalog | 整合性チェック・修正 |
| `/ui-catalog optimize` | ui-catalog | プリミティブ HTML → atoms 置換、variant 統合 |
| `/ui-catalog absorb [path]` | **親アプリ** | 親アプリ → ui-catalog 取り込み |
| `/ui-catalog apply [path]` | **親アプリ** | ui-catalog → 親アプリ 置換 |

ui-catalog 側のコマンドは [.claude/commands/ui-catalog.md](./.claude/commands/ui-catalog.md) に同梱されている（submodule で取り込んだ親では参照されない点に注意）。

**親アプリで absorb / apply を使うには：**

```bash
mkdir -p .claude/commands
cp packages/ui-catalog/infra/commands/parent/ui-catalog.md .claude/commands/ui-catalog.md
```

> `pnpm ui:update` で submodule を更新したら、親側にコピーした定義も陳腐化する可能性がある。気になったら再 cp する。

absorb / apply の詳細は [infra/commands/parent/ui-catalog.md](./infra/commands/parent/ui-catalog.md) を参照。

> **安全ルール**：absorb は ui-catalog 側のファイル書き換えのみ、apply は親アプリ側のファイル書き換えのみ。**自動 commit / push はしない**。

---

## Docker を使う場合

`link:` 参照のため、`packages/ui-catalog` のソース全体を COPY する必要がある：

```dockerfile
COPY packages/ui-catalog ./packages/ui-catalog
RUN pnpm install --frozen-lockfile
```

`docker-compose.yml` の volumes で `/app/packages/ui-catalog/node_modules` を匿名 volume で覆い、host 側と衝突させない：

```yaml
volumes:
  - ./packages/ui-catalog:/app/packages/ui-catalog
  - /app/packages/ui-catalog/node_modules
```

---

## peerDependencies の方針

`react`, `framer-motion`, `jotai` などは **peerDependencies** で宣言。
親アプリの `node_modules` のものを使う。これが submodule + ソース配布で React 二重ロードを避ける唯一の方法。

`devDependencies`（Storybook、テストツール等）は **submodule ディレクトリ内で `pnpm install` を走らせない限り親に入らない**。よって安全。

---

## Storybook

公開: https://sasakiyusuke2017015.github.io/ui-catalog/

```bash
pnpm storybook:localhost      # ローカル（http://localhost:6006）
pnpm storybook:deploy         # GitHub Pages にデプロイ
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
| infra/ | 観測・バージョン管理 | N/A |

依存方向：

```
atoms ← molecules ← organisms ← templates
```

逆方向の依存は禁止。

---

## バージョン更新ルール

コンポーネント変更時は同じコミットで [VERSION_REGISTRY](./infra/version/) と
[ui-catalog.versions.json](./ui-catalog.versions.json) を更新。

| 変更の種類 | バージョン |
|-----------|-----------|
| UI に変更なし（内部リファクタ等） | **patch** |
| UI に変更あり（props 追加、見た目変更等） | **minor** |
| 破壊的変更（props 削除/改名、API 変更） | **major** |

---

## 詳細ドキュメント

- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - アーキテクチャ詳細
- [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) - 開発ガイド
- [docs/DESIGN.md](./docs/DESIGN.md) - デザイン方針
