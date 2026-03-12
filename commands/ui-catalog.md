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
| `project/*` | `absorb`, `apply` + 共通 |
| `main` | `merge`, `distribute`, `atomize` + 共通 |
| **共通** | `refine`, `status` |

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
3. **既存コンポーネントとの統合・分割判断**
   - 既存コンポーネントとの類似度を分析（props、見た目、振る舞い）
   - **統合判断（類似度 70% 以上）:**
     - 既存コンポーネントの variant/size 追加で対応可能か検討
     - 共通部分を抽出して基底コンポーネント化を提案
     - 例: `UserCard` と `ProfileCard` → `Card` の variant として統合
   - **分割判断（単一責任原則違反）:**
     - 1コンポーネントが複数の責務を持っていないか確認
     - 300行以上のコンポーネントは分割候補
     - 例: `FormWithValidation` → `Form` (molecules) + `ValidationMessage` (atoms)
   - **レイヤー適正の確認:**
     - atoms に昇格すべき再利用可能な部品がないか
     - organisms が肥大化していれば molecules に分解
   - ユーザーに統合/分割/そのまま昇格の選択肢を提示
4. 依存関係を整理（`atoms ← molecules ← organisms ← templates` の方向を守る）
5. 適切なディレクトリに配置
6. バレルエクスポート（`index.ts`）に追加
7. `VERSION_REGISTRY` に `'1.0.0'` で登録
8. アプリ側の `ui-catalog.versions.json` にも追加
9. アプリ側のインポートを `@ui-catalog/core/<layer>` に書き換え
10. 変更サマリーを報告

---

### `apply` — ui-catalog コンポーネントをアプリに適用（absorb の逆）

ui-catalog に存在するコンポーネントがアプリで活用されていない箇所を検出し、
置き換えを提案・実行する。`absorb` の逆方向の操作。

**処理フロー:**

1. **未活用コンポーネントの検出**
   - ui-catalog の全コンポーネントをリスト化
   - アプリ側（`src/`）で以下のパターンを検索:
     - 同名または類似名のローカルコンポーネント
     - ui-catalog コンポーネントで代替可能な HTML/CSS パターン
     - 独自実装されているが ui-catalog に同等品があるもの

2. **検出パターンの例**
   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ 未活用コンポーネント検出結果                                  │
   ├─────────────────────────────────────────────────────────────┤
   │ [1] Button (atoms)                                          │
   │     → src/components/CustomButton.tsx で独自実装を発見       │
   │     → className="btn btn-primary" の直書き 12箇所           │
   │                                                             │
   │ [2] Spinner (atoms)                                         │
   │     → src/components/LoadingIndicator.tsx が類似            │
   │     → 使用箇所: 8ファイル                                    │
   │                                                             │
   │ [3] Modal (molecules)                                       │
   │     → src/ui/Dialog.tsx が同等機能                          │
   │     → 使用箇所: 5ファイル                                    │
   │                                                             │
   │ [4] Card (atoms)                                            │
   │     → <div className="card shadow-md"> パターン 23箇所       │
   └─────────────────────────────────────────────────────────────┘
   ```

3. **置き換え対象の選択**
   - ユーザーに置き換え対象を選択させる
   - 一括適用 or 個別適用を選択可能

4. **置き換えの実行**
   - **コンポーネント置き換え:**
     - ローカルコンポーネントのインポートを `@ui-catalog/core/<layer>` に変更
     - props のマッピングを調整（必要に応じて）
     - 元のローカルコンポーネントは削除または deprecated 化
   - **HTML/CSS パターン置き換え:**
     - 直書きの HTML を ui-catalog コンポーネントに置き換え
     - className ベースのスタイリングを props ベースに変換
     - 例: `<button className="btn btn-danger">` → `<Button variant="danger">`

5. **差分プレビュー**
   ```diff
   - import { CustomButton } from '@/components/CustomButton'
   + import { Button } from '@ui-catalog/core/atoms'

   - <CustomButton onClick={handleClick} type="primary">
   -   保存
   - </CustomButton>
   + <Button onClick={handleClick} variant="primary">
   +   保存
   + </Button>
   ```

6. **検証**
   - 置き換え後に型エラーがないことを確認
   - アプリのビルドが通ることを確認
   - 見た目の差異がある場合は警告

7. **不要になったローカルコンポーネントの処理**
   - 完全に置き換えられたコンポーネントは削除を提案
   - 部分的に使われている場合は残す
   - 削除前にユーザーに確認

8. **ui-catalog.versions.json の更新**
   - 新たに使用開始したコンポーネントを追加

9. 変更サマリーを報告
   ```
   📊 apply 完了サマリー

   【置き換え実行】
   ┌────────────────────┬──────────┬────────────┐
   │ コンポーネント      │ 置換箇所  │ 削除ファイル │
   ├────────────────────┼──────────┼────────────┤
   │ Button             │ 15箇所   │ 1ファイル   │
   │ Spinner            │ 8箇所    │ 1ファイル   │
   │ Card               │ 23箇所   │ -          │
   └────────────────────┴──────────┴────────────┘

   削除されたファイル:
   - src/components/CustomButton.tsx
   - src/components/LoadingIndicator.tsx
   ```

---

## main ブランチ用コマンド

### `merge` — PR で main に統合

project/* ブランチおよびセカンダリリモートの変更を PR（Pull Request）経由で main に取り込む。

**PR を使うメリット:**
- レビュー履歴が残る
- CI/CD と連携可能
- コンフリクトを Web UI で確認できる

**処理フロー:**

1. 全リモートをフェッチ:
   ```bash
   for remote in $(git remote); do
     git fetch $remote
   done
   ```

2. 未マージの PR / ブランチを確認:
   ```bash
   # origin (Gitea) の既存 PR を確認
   # project/* ブランチの差分を確認
   git log --oneline main..origin/project/<name>
   ```

3. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog merge — PR / 未マージ一覧

【既存 PR】
┌──────────┬───────┬─────────────────────────────────────┐
│ リモート  │ PR#   │ タイトル                             │
├──────────┼───────┼─────────────────────────────────────┤
│ origin   │ #12   │ feat: Button に icon 対応            │
│ github   │ #3    │ fix: Card の padding 修正           │
└──────────┴───────┴─────────────────────────────────────┘

【PR 未作成（差分あり）】
┌──────────────────┬───────┬─────────────────────────────────────┐
│ ブランチ          │ 件数  │ 最新コミット                         │
├──────────────────┼───────┼─────────────────────────────────────┤
│ project/pleasync │ 2     │ e4f5g6h fix: Dialog の z-index 修正  │
│ project/1on1     │ 1     │ i7j8k9l feat: Drawer コンポーネント   │
└──────────────────┴───────┴─────────────────────────────────────┘

どのブランチの PR を作成しますか？
```

4. **PR を作成**（未作成のブランチについて）:
   - ユーザーが選択したブランチについて PR を作成
   - origin (Gitea) に PR を作成:
     ```bash
     # Gitea API または Web UI で PR 作成
     # base: main ← head: project/<name>
     ```
   - セカンダリリモートからの変更は、ローカルブランチを作成して origin に PR

5. **PR レビュー・マージ**:
   - Web UI で PR をレビュー
   - 汎用性を確認（アプリ固有のロジックが含まれていないか）
   - 問題なければマージ（Squash Merge 推奨）

6. **クロスプロジェクト統合・分割判断**:
   - 複数の project/* から類似の変更がないか確認
   - **統合候補**: 同じコンポーネントへの類似拡張 → 1つに統合
   - **分割候補**: 肥大化したコンポーネント → 分離
   - 判断基準:
     ```
     ┌─────────────────────────────────────────────────┐
     │ 統合・分割の検討                                  │
     ├─────────────────────────────────────────────────┤
     │ [統合候補]                                       │
     │   Button (project/A) + Button (project/B)       │
     │   → loading/spinner を統合した Button を提案     │
     │                                                 │
     │ [分割候補]                                       │
     │   DataTable (450行, props 18個)                 │
     │   → Table + TableSort + TableFilter に分割提案  │
     └─────────────────────────────────────────────────┘
     ```

7. `VERSION_REGISTRY` の整合性を確認

8. 変更サマリーを報告

---

### `distribute` — main を全ターゲットに配布

ローカル main の変更を全リモート + project/* ブランチに配布する。
取り込みは行わない（取り込みは `merge` で行う）。

**リモート構成:**
- `origin`: 全ブランチ + タグ（履歴あり）
- その他: main + タグのみ（**Squash Push = 履歴なし**）

リモートは `git remote -v` で動的検出。
セカンダリリモート（GitHub等）には履歴を持たない Squash Push で配布。

**処理フロー:**

1. 配布状況を確認:
   ```bash
   for remote in $(git remote); do
     git fetch $remote
   done
   ```

2. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog distribute — 配布状況

【リモート】
┌──────────┬─────────────┬─────────────┐
│ リモート  │ 方式        │ 状態        │
├──────────┼─────────────┼─────────────┤
│ origin   │ 通常 push   │ 📦 配布可能  │
│ github   │ Squash push │ 📦 配布可能  │
│ gitlab   │ Squash push │ 📦 配布可能  │
└──────────┴─────────────┴─────────────┘

【project/*】
┌──────────────────┬────────────┬────────────┐
│ ブランチ          │ 未配布     │ 状態       │
├──────────────────┼────────────┼────────────┤
│ project/pleasync │ 2 commits  │ 📦 配布可能 │
│ project/1on1     │ 2 commits  │ 📦 配布可能 │
└──────────────────┴────────────┴────────────┘
```

3. 各 project/* ブランチに配布:
   ```bash
   git checkout project/<name>
   git cherry-pick <commit-hash1> <commit-hash2> ...
   ```

4. コンフリクトが発生した場合:
   - 対象ブランチと衝突内容を報告
   - 解決方法を提案（スキップ or 手動解決）

5. **origin にプッシュ**（履歴あり）:
   ```bash
   git push origin --all && git push origin --tags
   ```

6. **セカンダリリモートに Squash Push**（履歴なし）:
   ```bash
   for remote in $(git remote | grep -v origin); do
     # orphan ブランチで履歴なしコミットを作成
     git checkout --orphan _temp_squash
     git add -A
     git commit -m "Release: $(git describe --tags --always)"
     git push $remote _temp_squash:main --force
     git push $remote --tags
     git checkout main
     git branch -D _temp_squash
   done
   ```

7. 配布結果サマリーを表示

---

### `atomize` — 依存関係の最適化と重複コンポーネントの統合

organisms/templates の依存関係を最適化し、コンポーネントの重複を解消する:
- **外部ライブラリ**（Mantine、Radix 等）の直接インポート → atoms/molecules に置換
- **プリミティブHTML**（`<div>`, `<button>`, `<select>` 等）の直接使用 → atoms に置換
- **同一機能の重複コンポーネント** → variant/size で統合

Atomic Design の依存方向（atoms ← molecules ← organisms ← templates）を徹底する。

**なぜ main 専用か:**
- project/* で個別に atomize すると、merge 時にコンフリクトや作業重複が発生する
- main で一元的に atomize → distribute で全 project/* に配布が安全

**処理フロー:**

1. **外部依存・プリミティブHTMLの検出**
   - organisms/ と templates/ 内のファイルをスキャン
   - 外部ライブラリからの直接インポートを検出:
     ```typescript
     // 検出対象の例（外部ライブラリ）
     import { Button } from '@mantine/core'      // → atoms/Button に置換可能
     import { Modal } from '@mantine/core'       // → molecules/Modal に置換可能
     import { Dialog } from '@radix-ui/react-dialog'
     import { Tabs } from '@headlessui/react'
     ```
   - プリミティブHTML + className パターンを検出:
     ```tsx
     // 検出対象の例（プリミティブHTML）
     <div className="card shadow-md">           // → atoms/Card に置換可能
     <button className="btn btn-primary">       // → atoms/Button に置換可能
     <select className="form-select">           // → atoms/Select に置換可能
     <input type="text" className="form-input"> // → atoms/Input に置換可能
     ```

2. **置換候補の一覧表示**
   ```
   📊 atomize — 検出結果

   【外部ライブラリ依存】
   ┌────────────────────┬─────────────────────┬──────────────────────┐
   │ ファイル            │ 外部インポート        │ 置換候補              │
   ├────────────────────┼─────────────────────┼──────────────────────┤
   │ LoginButton.tsx    │ @mantine/core       │                      │
   │                    │   └─ Button         │ → atoms/Button       │
   │                    │   └─ Loader         │ → atoms/Spinner      │
   │ StatisticPanel.tsx │ @mantine/core       │                      │
   │                    │   └─ Paper          │ → atoms/Card         │
   │                    │   └─ Text           │ → atoms/Text ⚠️ 未作成 │
   │ TransferList.tsx   │ @mantine/core       │                      │
   │                    │   └─ Checkbox       │ → atoms/Checkbox     │
   │                    │   └─ ActionIcon     │ → atoms/IconButton ⚠️ │
   └────────────────────┴─────────────────────┴──────────────────────┘

   【プリミティブHTML】
   ┌────────────────────┬─────────────────────┬──────────────────────┐
   │ ファイル            │ プリミティブHTML      │ 置換候補              │
   ├────────────────────┼─────────────────────┼──────────────────────┤
   │ AppShell.tsx       │ <div class="card">  │ → atoms/Card         │
   │                    │ <button class="...">│ → atoms/Button       │
   │ Header.tsx         │ <div class="flex">  │ → atoms/Flex ⚠️ 未作成 │
   │                    │ <nav>               │ → molecules/Nav ⚠️    │
   │ SideNav.tsx        │ <ul><li>            │ → atoms/List ⚠️ 未作成 │
   │                    │ <a href="...">      │ → atoms/Link         │
   └────────────────────┴─────────────────────┴──────────────────────┘

   ⚠️ = ui-catalog に該当コンポーネントが存在しない（作成が必要）

   【同一機能コンポーネント（variant 統合候補）】
   ┌─────────────────┬─────────────────┬──────────────────────┐
   │ コンポーネント A  │ コンポーネント B  │ 統合案               │
   ├─────────────────┼─────────────────┼──────────────────────┤
   │ PrimaryButton   │ SecondaryButton │ → Button variant     │
   │ DangerButton    │ SuccessButton   │ → Button variant     │
   │ ErrorAlert      │ SuccessAlert    │ → Alert variant      │
   │ InfoAlert       │ WarningAlert    │ → Alert variant      │
   │ SmallCard       │ LargeCard       │ → Card size          │
   │ OutlinedInput   │ FilledInput     │ → Input variant      │
   └─────────────────┴─────────────────┴──────────────────────┘

   統計:
   - 外部ライブラリ依存: 8箇所（置換可能: 5, 要作成: 3）
   - プリミティブHTML:   12箇所（置換可能: 4, 要作成: 4）
   - 統合候補:          6組（12コンポーネント → 4コンポーネント）
   ```

3. **対応方針の選択**
   - **A. 既存コンポーネントで置換**: そのまま置き換え
   - **B. 新規コンポーネント作成**: 不足している atoms/molecules を作成してから置換
   - **C. スキップ**: 外部依存を維持（複雑すぎる場合など）
   - **D. ラッパー作成**: 外部コンポーネントを atoms でラップして抽象化

4. **置換の実行**
   ```diff
   // 外部ライブラリ依存の置換例: organisms/LoginButton.tsx
   - import { Button, Loader } from '@mantine/core'
   + import { Button } from '../atoms/Button'
   + import { Spinner } from '../atoms/Spinner'

   - <Button loading={isLoading} leftSection={<Loader size="xs" />}>
   + <Button loading={isLoading} leftIcon={<Spinner size="xs" />}>
       ログイン
     </Button>
   ```

   ```diff
   // プリミティブHTMLの置換例: organisms/SomePanel.tsx
   + import { Card } from '../atoms/Card'
   + import { Button } from '../atoms/Button'

   - <div className="card shadow-md p-4">
   + <Card shadow="md" p="md">
       <h2>タイトル</h2>
   -   <button className="btn btn-primary" onClick={handleClick}>
   +   <Button variant="primary" onClick={handleClick}>
         保存
   -   </button>
   - </div>
   +   </Button>
   + </Card>
   ```

   ```diff
   // 同一機能コンポーネントの統合例
   // Before: atoms/PrimaryButton.tsx, atoms/SecondaryButton.tsx, atoms/DangerButton.tsx
   // After:  atoms/Button.tsx (variant: 'primary' | 'secondary' | 'danger')

   // 使用箇所の置換
   - import { PrimaryButton } from '../atoms/PrimaryButton'
   - import { DangerButton } from '../atoms/DangerButton'
   + import { Button } from '../atoms/Button'

   - <PrimaryButton onClick={handleSave}>保存</PrimaryButton>
   - <DangerButton onClick={handleDelete}>削除</DangerButton>
   + <Button variant="primary" onClick={handleSave}>保存</Button>
   + <Button variant="danger" onClick={handleDelete}>削除</Button>
   ```

5. **新規コンポーネント作成（必要な場合）**
   - 不足している atoms/molecules を作成
   - Mantine 等の外部コンポーネントをラップする形で実装
   - VERSION_REGISTRY に登録
   ```typescript
   // 新規作成例: atoms/Text.tsx
   import { Text as MantineText } from '@mantine/core'
   export const Text = ({ children, size, weight, ...props }) => (
     <MantineText size={size} fw={weight} data-component="Text" {...props}>
       {children}
     </MantineText>
   )
   ```

6. **依存方向の検証**
   - 置換後に依存方向が正しいことを確認
   - atoms → molecules → organisms → templates の方向のみ許可
   - 逆方向の依存があればエラー

7. **検証**
   - TypeScript の型エラーがないことを確認
   - Storybook でコンポーネントが正しく表示されることを確認

8. **変更サマリーと配布**
   ```
   📊 atomize 完了サマリー

   【外部依存の置換】
   ┌────────────────────┬─────────────────┬────────────────────┐
   │ 外部コンポーネント   │ 置換先          │ 影響ファイル数      │
   ├────────────────────┼─────────────────┼────────────────────┤
   │ @mantine/Button    │ atoms/Button    │ 3                  │
   │ @mantine/Loader    │ atoms/Spinner   │ 2                  │
   │ @mantine/Paper     │ atoms/Card      │ 1                  │
   └────────────────────┴─────────────────┴────────────────────┘

   【コンポーネント統合】
   ┌─────────────────────────────────┬─────────────────┬────────┐
   │ 統合元                          │ 統合先          │ 削減数  │
   ├─────────────────────────────────┼─────────────────┼────────┤
   │ PrimaryButton, SecondaryButton  │ Button variant  │ -1     │
   │ DangerButton                    │                 │        │
   │ ErrorAlert, SuccessAlert,       │ Alert variant   │ -3     │
   │ InfoAlert, WarningAlert         │                 │        │
   │ SmallCard, LargeCard            │ Card size       │ -1     │
   └─────────────────────────────────┴─────────────────┴────────┘

   【新規作成】
   ┌────────────────────┬────────────┐
   │ コンポーネント       │ レイヤー    │
   ├────────────────────┼────────────┤
   │ Text               │ atoms      │
   │ IconButton         │ atoms      │
   └────────────────────┴────────────┘

   【スキップ（外部依存維持）】
   - @mantine/AppShell (複雑すぎるため)

   結果:
   - 外部依存削減率: 75% (12/16 インポートを内部化)
   - コンポーネント数: 12 → 4 (8コンポーネント削減)

   💡 次のステップ: /ui-catalog distribute で全 project/* に配布
   ```

---

## 共通コマンド

### `refine` — 不要コード削除・整合性修正

コードベースをクリーンアップし、整合性を確保する。
**project/* ブランチと main ブランチの両方で使用可能。**

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

### `status` — 診断 + 推奨アクション

現在のブランチの状態を診断し、次に何をすべきか提案する。
**project/* ブランチと main ブランチの両方で使用可能。**

#### project/* ブランチでの実行

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

#### main ブランチでの実行

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
