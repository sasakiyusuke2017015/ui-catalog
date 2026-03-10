# ui-catalog 開発コマンド

ui-catalog は Atomic Design ベースの汎用 UI コンポーネントライブラリ。
各プロジェクトに `packages/ui-catalog/` として clone し、`project/<name>` ブランチで開発する。
詳細は `packages/ui-catalog/DEVELOPMENT.md` を参照。

## 使い方

```
/ui-catalog <サブコマンド>
```

## ブランチ判定

すべてのコマンドは実行前に `packages/ui-catalog/` 内で `git branch --show-current` を実行し、
現在のブランチを判定する。ブランチによって利用可能なコマンドが異なる。

| ブランチ | 利用可能コマンド |
|---------|----------------|
| `project/*` | `absorb`, `refine`, `status` |
| `main` | `merge`, `distribute`, `status` |

該当しないコマンドを実行した場合は、現在のブランチと利用可能なコマンドを表示して終了する。

---

## project/* ブランチ用コマンド

### `absorb` — アプリ固有コンポーネントを ui-catalog に昇格

アプリ内で作り込んだコンポーネントからビジネスロジックを排除し、
汎用コンポーネントとして ui-catalog に昇格させる。

**処理フロー:**

1. 対象コンポーネントを特定
   - ユーザーが指定したコンポーネント（例: `src/components/UserCard`）
   - または、アプリの `src/components/` を走査して昇格候補を提案
2. ビジネスロジックの分離
   - API 呼び出し、ルーティング、認証など固有のロジックを除去
   - props で外部から注入する形に変更
   - ハードコードされた文字列・URL・パスを props 化
3. 既存コンポーネントとの重複・差分を確認
   - 既存コンポーネントで代替可能なら、拡張を提案
4. 依存関係を整理（`atoms ← molecules ← organisms ← templates` の方向を守る）
5. 適切なディレクトリに配置
6. バレルエクスポート（`index.ts`）に追加
7. `VERSION_REGISTRY` に `'1.0.0'` で登録
8. アプリ側の `ui-catalog.versions.json` にも追加
9. アプリ側のインポートを `@ui-catalog/core/<layer>` に書き換え
10. 変更サマリーを報告

---

### `refine` — 不要コード削除・整合性修正

コードベースをクリーンアップし、整合性を確保する。

**処理フロー:**

1. **未使用コードの検出**
   - `packages/ui-catalog/` 内で未使用のコンポーネント・型定義・ユーティリティを検索
   - アプリ側（`src/`）からのインポート状況を確認
   - 後方互換の残骸（deprecated、不要な再エクスポート）を検出
2. **整合性チェック**
   - `VERSION_REGISTRY`（version.ts）に登録されているが、実体がないコンポーネント
   - 実体があるが `VERSION_REGISTRY` に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの `index.ts`）に未登録のコンポーネント
   - アプリ側の `ui-catalog.versions.json` と `VERSION_REGISTRY` の差分
   - `data-component` 属性が付いていないコンポーネント
   - `.stories.tsx` が存在しないコンポーネント
   - `.test.tsx` が存在しないコンポーネント
   - 依存方向の違反（atoms が molecules に依存している等）
3. **削除・修正の実行**
   - 使用状況を確認し、削除可能か判断（ユーザーに確認）
   - 不要なコードを削除
   - 整合性の不一致を修正
4. **検証**
   - `tsc --noEmit`（ui-catalog 内に tsconfig があれば）でコンパイルエラーがないことを確認
   - アプリ側のビルドに影響がないことを確認
5. 変更サマリーを報告

---

### `status`（project/* ブランチ） — 診断 + 推奨アクション

現在のブランチの状態を診断し、次に何をすべきか提案する。

**処理フロー:**

1. `packages/ui-catalog/` で以下の git コマンドを実行:
   ```bash
   # 現在のブランチ確認
   git branch --show-current
   # リモートの最新を取得
   git fetch origin main
   # main に対する未 push のコミット
   git log --oneline origin/project/<name>..HEAD
   # main から未取り込みのコミット
   git log --oneline HEAD..origin/main
   ```
2. **VERSION_REGISTRY 整合性チェック**
   - `VERSION_REGISTRY` と `ui-catalog.versions.json` の差分
   - バレルエクスポートの漏れ
3. **結果を表形式で表示**

出力イメージ:
```
📊 ui-catalog status (project/pleasync)

【Git 同期状況】
┌──────────────────────────────────┬───────┐
│ 項目                             │ 件数  │
├──────────────────────────────────┼───────┤
│ 未 push のコミット（→ remote）    │ 2     │
│ main からの未取り込み（← main）   │ 3     │
└──────────────────────────────────┴───────┘

【整合性】
┌──────────────────────────────────┬───────┐
│ チェック項目                      │ 結果  │
├──────────────────────────────────┼───────┤
│ VERSION_REGISTRY ↔ versions.json │ ✅ OK │
│ バレルエクスポートの漏れ           │ ⚠️ 1  │
│ 型エラー                          │ ✅ OK │
└──────────────────────────────────┴───────┘

💡 推奨アクション:
1. 未 push の 2件を push → git push origin project/pleasync
2. main の 3件は distribute で配布予定（main 側で実行）
3. atoms/index.ts に Slider のエクスポートを追加 → /ui-catalog refine
```

---

## main ブランチ用コマンド

### `merge` — project/* の変更を main に統合

各 project/* ブランチのコミットを main に取り込む。
コンポーネントの汎用性を確認しながら統合する。

**処理フロー:**

1. `packages/ui-catalog/` で以下を実行:
   ```bash
   git fetch origin
   ```
2. 各 `project/*` ブランチの未マージコミットを一覧表示:
   ```bash
   # 各 project/* ブランチについて
   git log --oneline main..origin/project/<name>
   ```
3. 結果を表形式で表示し、ユーザーに統合対象を選択させる

出力イメージ:
```
📊 ui-catalog merge — 未マージコミット一覧

┌──────────────────┬───────┬─────────────────────────────────────┐
│ ブランチ          │ 件数  │ コミット                             │
├──────────────────┼───────┼─────────────────────────────────────┤
│ project/pleasync │ 2     │ a1b2c3d feat: Button に icon 対応    │
│                  │       │ e4f5g6h fix: Dialog の z-index 修正  │
│ project/1on1     │ 1     │ i7j8k9l feat: Drawer コンポーネント   │
└──────────────────┴───────┴─────────────────────────────────────┘

どのコミットを main に取り込みますか？
```

4. ユーザーが選択したコミットについて:
   - `git checkout main`
   - `git cherry-pick <commit-hash>` で取り込み
   - コンフリクトがあればユーザーに報告し、解決方法を提案
5. **汎用性の確認**（cherry-pick 後）
   - 取り込んだコードにアプリ固有のロジックが含まれていないか確認
   - 含まれていれば修正を提案
6. `VERSION_REGISTRY` の整合性を確認
7. 変更サマリーを報告
8. 元のブランチに戻る: `git checkout <元のブランチ>`

---

### `distribute` — main の変更を全 project/* に配布

main ブランチの変更を全 project/* ブランチに cherry-pick で配布する。

**処理フロー:**

1. `packages/ui-catalog/` で以下を実行:
   ```bash
   git fetch origin
   ```
2. 各 `project/*` ブランチへの未配布コミットを一覧表示:
   ```bash
   # 各 project/* ブランチについて
   git log --oneline origin/project/<name>..main
   ```
3. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog distribute — 配布状況

main の未配布コミット:
  a1b2c3d feat: Button に icon 対応を追加
  e4f5g6h fix: Dialog の z-index 修正

┌──────────────────┬────────────┬────────────┐
│ ブランチ          │ 未配布     │ 状態       │
├──────────────────┼────────────┼────────────┤
│ project/pleasync │ 2 commits  │ 📦 配布可能 │
│ project/1on1     │ 2 commits  │ 📦 配布可能 │
└──────────────────┴────────────┴────────────┘

全 project/* に配布しますか？（個別選択も可能）
```

4. ユーザーの確認後、各ブランチに配布:
   ```bash
   # 各 project/* ブランチについて
   git checkout project/<name>
   git cherry-pick <commit-hash1> <commit-hash2> ...
   git push origin project/<name>
   ```
5. コンフリクトが発生した場合:
   - 対象ブランチと衝突内容を報告
   - 解決方法を提案（スキップ or 手動解決）
6. 配布結果サマリーを表示

---

### `status`（main ブランチ） — 全体診断 + 推奨アクション

全 project/* ブランチとの同期状況を診断し、次に何をすべきか提案する。

**処理フロー:**

1. `packages/ui-catalog/` で以下を実行:
   ```bash
   git fetch origin
   ```
2. 各 `project/*` ブランチとの差分を収集:
   ```bash
   # 各 project/* ブランチについて
   # 未マージ（project → main）
   git log --oneline main..origin/project/<name>
   # 未配布（main → project）
   git log --oneline origin/project/<name>..main
   ```
3. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog status (main)

┌──────────────────┬────────────┬────────────┐
│ ブランチ          │ 未マージ    │ 未配布     │
├──────────────────┼────────────┼────────────┤
│ project/pleasync │ 3 commits  │ 1 commit   │
│ project/1on1     │ 0 commits  │ 1 commit   │
└──────────────────┴────────────┴────────────┘

💡 推奨アクション:
1. project/pleasync から 3件をマージ → /ui-catalog merge
2. 全 project/* に 1件を配布 → /ui-catalog distribute
```

---

## 共通ルール

### バージョン更新ルール

コンポーネント変更時は必ず同じコミット内で `VERSION_REGISTRY`（version.ts）と
アプリ側の `ui-catalog.versions.json` を更新する。

| 変更の種類 | バージョン |
|-----------|-----------|
| UI に変更なし（内部リファクタ等） | **patch** |
| UI に変更あり（props 追加、見た目変更等） | **minor** |
| 破壊的変更（props 削除/改名、API 変更） | **major** |

### 依存方向

```
atoms ← molecules ← organisms ← templates
```

逆方向の依存は禁止。

### 定数

#### SEMANTIC_COLORS

```typescript
import { SEMANTIC_COLORS, resolveSemanticColor } from '@ui-catalog/core/constants'

<Icon stroke={SEMANTIC_COLORS.primary} />
const color = resolveSemanticColor('success') // '#10B981'
```

| キー | 色 | 用途 |
|------|-----|------|
| `primary` | `#6366F1` | メインアクション |
| `info` | `#3B82F6` | 情報表示 |
| `success` | `#10B981` | 成功・完了 |
| `warning` | `#F59E0B` | 警告・注意 |
| `danger` | `#EF4444` | エラー・危険 |
| `dark` | `#1F2937` | 暗いテキスト |
| `light` | `#F3F4F6` | 明るい背景 |
| `muted` | `#9CA3AF` | 無効状態 |
