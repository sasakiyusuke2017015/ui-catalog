# @ui-catalog/core

pnpm workspace 向け UI コンポーネントライブラリ。
Atomic Design パターンに基づき、汎用的な UI コンポーネントとテーマ機能を提供します。

## プロジェクトへの導入

> **Note**: 初回セットアップは手動で実行します（一度きりの操作のため npm script 化しません）。
> 日常の同期は `pnpm ui:pull` / `pnpm ui:push` を使用します。

**Linux / macOS:**
```bash
cd your-project
git subtree add --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF
cd apps/web && npm pkg set dependencies.@ui-catalog/core="workspace:*" && cd ../..
npm pkg set scripts.ui:push="git subtree push --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main"
npm pkg set scripts.ui:pull="git subtree pull --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash"
pnpm install
mkdir -p .claude/commands && cp packages/ui-catalog/commands/ui-catalog.md .claude/commands/
```

**Windows (PowerShell):**
```powershell
cd your-project
git subtree add --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash
@"
packages:
  - 'apps/*'
  - 'packages/*'
"@ | Out-File -Encoding utf8 pnpm-workspace.yaml
Push-Location apps/web; npm pkg set dependencies.@ui-catalog/core="workspace:*"; Pop-Location
npm pkg set scripts.ui:push="git subtree push --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main"
npm pkg set scripts.ui:pull="git subtree pull --prefix=packages/ui-catalog https://1on1.sdt-autolabo.com:8929/sasaki_yusuke/ui-catalog.git main --squash"
pnpm install
New-Item -ItemType Directory -Force -Path .claude/commands | Out-Null; Copy-Item packages/ui-catalog/commands/ui-catalog.md .claude/commands/
```

詳細は [DEVELOPMENT.md](./DEVELOPMENT.md) を参照。

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

## バージョン管理

コンポーネントの変更を追跡するため、`ui-catalog.versions.json` を使用します。

```typescript
// apps/web/src/main.tsx
import { initUICatalog } from '@ui-catalog/core'
import versions from '../ui-catalog.versions.json'

initUICatalog(versions)
```

詳細は [DEVELOPMENT.md](./DEVELOPMENT.md) を参照。
