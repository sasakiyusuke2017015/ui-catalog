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
| `project/*` | `ab`, `ap`, `pr` + 共通 |
| `main` | `pl`, `ps`, `at` + 共通 |
| **共通** | `rf`, `st` |

### コマンド一覧

| コマンド | 元の名前 | 説明 |
|---------|---------|------|
| `ab` | absorb | アプリ → ui-catalog に昇格 |
| `ap` | apply | ui-catalog → アプリに適用 |
| `pr` | pull-request | PR 作成（project/* → main） |
| `pl` | pull | project/* → main に取り込む |
| `ps` | push | main → project/* に配布 |
| `at` | atomize | 依存最適化 |
| `rf` | refine | クリーンアップ |
| `st` | status | 状態確認 |

該当しないコマンドを実行した場合は、現在のブランチと利用可能なコマンドを表示して終了する。

---

## project/* ブランチ用コマンド

### `ab` (absorb) — アプリ固有コンポーネントを ui-catalog に昇格

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
8. `pnpm sync:versions` を実行（versions.json を自動生成）
9. アプリ側のインポートを `@ui-catalog/core/<layer>` に書き換え
10. 変更サマリーを報告

---

### `ap` (apply) — ui-catalog コンポーネントをアプリに適用（ab の逆）

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

8. `pnpm sync:versions` を実行（versions.json を自動同期）

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

### `pr` (pull-request) — main への PR を作成

project/* ブランチから main への Pull Request を作成する。
**GitHub API を直接使用**（gh CLI 不要）。

**前提:**
- リモート URL からトークンを取得: `git remote get-url origin`
- URL 形式: `https://<user>:<token>@github.com/<owner>/<repo>.git`

**処理フロー:**

1. 現在のブランチを確認（project/* であること）
2. 未コミットの変更を確認:
   ```bash
   git status --porcelain
   ```
3. 未コミットの変更がある場合:
   - 変更内容を表示し、先にコミットを促す
   - ユーザーがコミット内容を確認・承認後、コミットを実行
   - コミット後、リモートに push
4. main との差分を確認:
   ```bash
   git fetch origin main
   git log --oneline origin/main..HEAD
   ```
5. 差分がない場合は終了
6. 差分がある場合、GitHub API で PR を作成:
   ```bash
   # リモート URL からトークンを抽出
   REMOTE_URL=$(git remote get-url origin)
   TOKEN=$(echo "$REMOTE_URL" | sed -n 's/.*:\([^@]*\)@github.com.*/\1/p')
   OWNER=$(echo "$REMOTE_URL" | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')
   REPO=$(echo "$REMOTE_URL" | sed -n 's/.*\/\([^/]*\)\.git/\1/p')
   BRANCH=$(git branch --show-current)

   # PR 作成
   curl -s -X POST "https://api.github.com/repos/$OWNER/$REPO/pulls" \
     -H "Authorization: token $TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     -d '{
       "title": "<コミットメッセージから生成>",
       "head": "'"$BRANCH"'",
       "base": "main",
       "body": "## Summary\n- ...\n\n## Test plan\n- [ ] ..."
     }'
   ```
7. PR の URL を表示

出力イメージ:
```
📊 ui-catalog pr — PR 作成

ブランチ: project/1on1
main との差分: 1 commit
  a7bfd4e refactor: LoginButtonをShimmerButtonベースに刷新

PR を作成しますか？ (y/n)

✅ PR #1 を作成しました
   https://github.com/sasakiyusuke2017015/ui-catalog/pull/1
```

---

## main ブランチ用コマンド

### `pl` (pull) — project/* の変更を main に取り込む

project/* ブランチの変更を main に merge で取り込む。

**処理フロー:**

1. フェッチ:
   ```bash
   git fetch origin
   ```

2. 各 project/* ブランチの未取り込みコミットを確認:
   ```bash
   git log --oneline main..origin/project/<name>
   ```

3. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog pull — 未取り込み一覧

┌─────────────────────────────┬───────┬─────────────────────────────────────┐
│ ブランチ                     │ 件数  │ 最新コミット                         │
├─────────────────────────────┼───────┼─────────────────────────────────────┤
│ project/psync               │ 2     │ e4f5g6h fix: Dialog の z-index 修正  │
│ project/1on1                │ 1     │ i7j8k9l feat: Drawer コンポーネント   │
└─────────────────────────────┴───────┴─────────────────────────────────────┘

どのブランチを取り込みますか？
```

4. **選択したブランチを main に merge**:
   ```bash
   git merge origin/project/<name>
   ```

5. コンフリクトが発生した場合:
   - 衝突内容を報告
   - 解決方法を提案

6. **全 project/* ブランチに配布** (`ps`):
   - 取り込んだ変更を他の project/* にも反映するため `/ui-catalog ps` を実行

7. `VERSION_REGISTRY` の整合性を確認

8. main を push:
   ```bash
   git push origin main
   ```

9. 変更サマリーを報告

---

### `ps` (push) — main を project/* ブランチに配布

ローカル main の変更を project/* ブランチに merge で配布する。
リモートへは main を直接 push する。

**処理フロー:**

1. 配布状況を確認:
   ```bash
   git fetch origin
   ```

2. 結果を表形式で表示

出力イメージ:
```
📊 ui-catalog push — 配布状況

┌──────────────────┬────────────┬────────────┐
│ ブランチ          │ 未配布     │ 状態       │
├──────────────────┼────────────┼────────────┤
│ project/psync    │ 2 commits  │ 📦 配布可能 │
│ project/1on1     │ 2 commits  │ 📦 配布可能 │
│ project/calend   │ 0 commits  │ ✅ 同期済み │
└──────────────────┴────────────┴────────────┘
```

3. **project/* ブランチに merge + push**:
   ```bash
   git checkout -B project/<name> origin/project/<name>
   git merge main
   git push origin project/<name>
   ```

4. コンフリクトが発生した場合:
   - 対象ブランチと衝突内容を報告
   - 解決方法を提案（スキップ or 手動解決）

5. main に戻る:
   ```bash
   git checkout main
   ```

6. 配布結果サマリーを表示

---

### `at` (atomize) — 依存関係の最適化と重複コンポーネントの統合

organisms/templates の依存関係を最適化し、コンポーネントの重複を解消する:
- **外部ライブラリ**（Mantine、Radix 等）の直接インポート → atoms/molecules に置換
- **プリミティブHTML**（`<div>`, `<button>`, `<select>` 等）の直接使用 → atoms に置換
- **同一機能の重複コンポーネント** → variant/size で統合

Atomic Design の依存方向（atoms ← molecules ← organisms ← templates）を徹底する。

**なぜ main 専用か:**
- project/* で個別に atomize すると、merge 時にコンフリクトや作業重複が発生する
- main で一元的に atomize → push で全 project/* に配布が安全

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

   💡 次のステップ: /ui-catalog ps で全 project/* に配布
   ```

---

## 共通コマンド

### `rf` (refine) — 不要コード削除・整合性修正

コードベースをクリーンアップし、整合性を確保する。
**project/* ブランチと main ブランチの両方で使用可能。**

#### 設計思想

無駄を削ぎ落とし、本質的な良さを引き出す。

1. **ノイズの除去**
   - 余計な要素を排除し、視覚的な情報の渋滞を解消
   - 不要なprops、冗長な条件分岐を削除
   - 重複したスタイル定義を統合
   - 過剰な装飾（影、ボーダー、グラデーション）を見直す

2. **トーンの統一**
   - 色調や質感、空気感を揃えて一体感を出す
   - カラーパレットを体系化（SEMANTIC_COLORSを使用）
   - グラデーション角度を統一（推奨: 135deg）
   - 透明度の段階を揃える（0.1, 0.3, 0.5, 0.7, 0.9）

3. **ミニマリズムの追求**
   - 少ない要素で最大の効果（意図）を伝える
   - 設定をオブジェクトで一元管理（switch文よりオブジェクトルックアップ）
   - 1つのコンポーネント = 1つの責務
   - コード行数の削減（同じ機能をより少ない行で）

4. **秩序の導入**（黄金比・グリッドシステム）
   - **タイミング（黄金比 1.618 ベース）:**
     - 基準: 1000ms
     - 速い: 618ms (÷1.618)
     - 遅い: 1618ms (×1.618)
     - 超速: 382ms
     - 超遅: 2618ms
   - **スペーシング（8pxグリッド）:**
     - padding/margin: 8, 16, 24, 32, 40, 48px
     - gap: 8, 16, 24px
     - border-radius: 4, 8, 12, 16px
   - **サイズ比率:**
     - sm : md : lg = 0.75 : 1 : 1.25
     - アイコン: 16, 20, 24, 32px

**処理フロー:**

1. **未使用コードの検出**
   - `packages/ui-catalog/` 内で未使用のコンポーネント・型定義・ユーティリティを検索
   - アプリ側（`src/`）からのインポート状況を確認
   - 後方互換の残骸（deprecated、不要な再エクスポート）を検出
2. **整合性チェック**
   - `VERSION_REGISTRY`（version.ts）に登録されているが、実体がないコンポーネント
   - 実体があるが `VERSION_REGISTRY` に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの `index.ts`）に未登録のコンポーネント
   - `pnpm check:versions` で VERSION_REGISTRY と versions.json の同期を検証
     → 差分がある場合は `pnpm sync:versions` で自動修正
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

### `st` (status) — 診断 + 推奨アクション

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
   - `pnpm check:versions` で VERSION_REGISTRY と versions.json の同期を検証
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
2. main の 3件は push で配布予定（main 側で実行）
3. atoms/index.ts に Slider のエクスポートを追加 → /ui-catalog rf
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
1. project/pleasync から 3件を取り込む → /ui-catalog pl
2. 全 project/* に 1件を配布 → /ui-catalog ps
```

---

## 共通ルール

### バージョン更新ルール

コンポーネント変更時は `VERSION_REGISTRY`（registry.ts）を更新し、
`pnpm sync:versions` を実行する。**`ui-catalog.versions.json` は手動編集禁止**
（VERSION_REGISTRY が唯一のソースオブトゥルース）。

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
