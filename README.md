# @ui-catalog/core

pnpm workspace 向け UI コンポーネントライブラリ。
Atomic Design パターンに基づき、汎用的な UI コンポーネントとテーマ機能を提供します。

---

## 運用方針

### ブランチ戦略

```
ui-catalog リポジトリ
├── main                 ← 安定版（リリース済み）
├── project/1on1         ← 1on1 プロジェクトからの変更
├── project/tauri-app    ← Tauri アプリからの変更
└── project/go-app       ← Go アプリからの変更
```

| ブランチ | 用途 |
|----------|------|
| `main` | 安定版。各プロジェクトはここから pull |
| `project/<name>` | プロジェクト専用。変更はここに push |

### 運用フロー

```
【各プロジェクト】
1. UI を変更（開発・Vibe Coding）
       ↓
2. cd packages/ui-catalog && git push → project/<name> ブランチへ

【ui-catalog リポジトリ（Gitea）】
3. project/<name> → main への PR 作成
       ↓
4. VRT でレビュー・マージ
       ↓
5. タグ付け（v1.2.0）

【各プロジェクト】
6. cd packages/ui-catalog && git pull で main（安定版）を取り込む
```

### Semver（バージョン管理）

| 変更種類 | バージョン | 例 |
|----------|-----------|-----|
| 破壊的変更（Props 削除など） | major | v1.0.0 → v2.0.0 |
| 機能追加（新コンポーネント） | minor | v1.0.0 → v1.1.0 |
| バグ修正・スタイル微調整 | patch | v1.0.0 → v1.0.1 |

```bash
# ui-catalog リポジトリで（main マージ後）
git tag -a v1.1.0 -m "feat: Button に size prop を追加"
git push origin v1.1.0
```

---

## プロジェクトへの導入

> **重要**: 各ステップを **1つずつ実行** してください。

### Step 1: ui-catalog リポジトリでブランチ作成

ui-catalog リポジトリで専用ブランチを作成：

**Gitea UI で作成:**
1. https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog にアクセス
2. ブランチセレクタ（`main` と表示）をクリック
3. 入力欄に `project/<project-name>` と入力して Enter

### Step 2: ui-catalog を clone

プロジェクトのルートで実行：

```bash
mkdir -p packages
git clone -b project/<project-name> https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git packages/ui-catalog
```

### Step 3: 親リポジトリの .gitignore に追加

`.gitignore` に以下を追加：

```
packages/ui-catalog/
```

### Step 4: VSCode の Git 設定（推奨）

VSCode で ui-catalog を独立した Git リポジトリとして認識させるため、`.vscode/settings.json` に以下を追加：

```json
{
  "git.repositoryScanIgnoredFolders": [],
  "git.scanRepositories": [
    ".",
    "packages/ui-catalog"
  ]
}
```

これにより、VSCode のソース管理パネルで親リポジトリと ui-catalog を別々に操作できます。

### Step 5: pnpm-workspace.yaml を設定

既存の `pnpm-workspace.yaml` に `packages/*` を追加（なければファイル作成）：

```yaml
packages:
  - 'apps/*'
  - 'packages/*'   # ← これを追加
  - 'libs/*'       # 既存があれば残す
```

### Step 6: 依存関係を追加

使用するアプリの `package.json` に追加：

```bash
npm pkg set dependencies.@ui-catalog/core="workspace:*"
```

### Step 7: インストールと確認

```bash
pnpm install
```

---

## 日常の使い方

### 変更を push

```bash
cd packages/ui-catalog
git add -A
git commit -m "変更内容"
git push origin project/<project-name>
```

自分のプロジェクト専用ブランチ（`project/<name>`）に push される。

### 安定版を pull

```bash
cd packages/ui-catalog
git pull origin main
```

`main` ブランチ（安定版）から最新を取得。

---

## 構造

```
ui-catalog/
├── atoms/           基本UI部品（Button, Input, Icon, Select 等）
├── molecules/       atomsの組み合わせ（DatePicker, Dialog, Toast 等）
├── organisms/       複雑なUI（InteractiveTable, TrendChart 等）
├── templates/       ページレイアウト（Header, Footer, SideNav）
├── decorations/     装飾（BackgroundTexture, GradientOverlay）
├── magicui/         アニメーションコンポーネント
├── theme/           テーマ機能（ThemeProvider, useTheme）
├── hooks/           カスタムフック（useDevice, useToast 等）
├── utils/           ユーティリティ（cn）
├── adapters/        外部依存の抽象化（Router, Auth）
├── constants/       定数定義（design, icons, animations）
├── types/           型定義
├── styles/          スタイル（globals.css）
└── storybook-preset/ Storybook 設定プリセット
```

## 使い方

### コンポーネントのインポート

```typescript
// 推奨: パス別にインポート
import { Button, Input, Icon } from '@ui-catalog/core/atoms'
import { DatePicker, Dialog } from '@ui-catalog/core/molecules'
import { InteractiveTable } from '@ui-catalog/core/organisms'
import { Header, SideNav } from '@ui-catalog/core/templates'

// ユーティリティ
import { cn } from '@ui-catalog/core/utils'
import { useDevice } from '@ui-catalog/core/hooks'
```

### テーマ機能

```tsx
// 1. Provider でラップ
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from '@ui-catalog/core/theme'

function App() {
  return (
    <JotaiProvider>
      <ThemeProvider>
        <YourApp />
      </ThemeProvider>
    </JotaiProvider>
  )
}

// 2. コンポーネントでテーマを使用
import { useTheme, useColorTheme } from '@ui-catalog/core/theme'

function SettingsPage() {
  const { colors, shapes } = useTheme()
  const [colorTheme, setColorTheme] = useColorTheme()

  return (
    <div style={{ backgroundColor: colors.primaryBgColor }}>
      <select value={colorTheme} onChange={(e) => setColorTheme(e.target.value)}>
        <option value="emerald">エメラルド</option>
        <option value="blue">ブルー</option>
      </select>
    </div>
  )
}
```

### Storybook 設定（他プロジェクト向け）

```ts
// .storybook/main.ts
import { createStorybookConfig } from '@ui-catalog/core/storybook-preset'

export default createStorybookConfig({
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
})
```

```tsx
// .storybook/preview.tsx
import '@ui-catalog/core/styles/globals.css'
import { createPreview } from '@ui-catalog/core/storybook-preset/preview'

export default createPreview()
```

### Tailwind 設定

```ts
// tailwind.config.ts
import uiCatalogPreset from '@ui-catalog/core/tailwind-preset'

export default {
  presets: [uiCatalogPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ui-catalog/core/**/*.{js,ts,jsx,tsx}',
  ],
}
```

## バージョン管理（アプリ内）

コンポーネントの変更を追跡するため、`ui-catalog.versions.json` を使用します。

```typescript
// apps/web/src/main.tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../ui-catalog.versions.json'

initUICatalog(versions)
```

詳細は [DEVELOPMENT.md](./DEVELOPMENT.md) を参照。
