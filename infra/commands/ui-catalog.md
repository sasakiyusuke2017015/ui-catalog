# ui-catalog 開発コマンド

ui-catalog は **Atomic Design** ベースの汎用 UI コンポーネントライブラリ。
各プロジェクトに `packages/ui-catalog/` として clone し、`project/<name>` ブランチで開発する。

## 段階的成熟モデル

ui-catalog は単なる Design System ではなく、**「育てる仕組み」を内包したUIカタログ**。
コンポーネントは **初期 → 安定 → 洗練** の段階を経て成長する。

```
【初期フェーズ】extensions/ ─ Tailwind/CSS-in-JS OK、スピード優先
       ↓ absorb
【安定フェーズ】extensions/ (整理後) ─ ビジネスロジック分離、Props安定化
       ↓ refine + 昇格
【洗練フェーズ】core/ ─ SCSS Module、デザインの微細なこだわり、移植可能
```

| フェーズ | スタイリング | 理由 |
|---------|------------|------|
| 初期・安定 | Tailwind / CSS-in-JS | 素早い実装、試行錯誤しやすい |
| 洗練（core/） | **SCSS Module** | 微細な調整、トークン一貫性、移植性 |

**SCSS化は「洗練化」の象徴**: 単なる技術的選択ではなく、コンポーネントの成熟度を示す。

## ディレクトリ構造

```
packages/ui-catalog/
├── core/                    # 汎用コンポーネント（全プロジェクト共通）
│   ├── atoms/               # 最小単位（Button, Input, Badge, Icon 等）
│   ├── molecules/           # atoms の組み合わせ（FormField, MenuItem 等）
│   ├── organisms/           # molecules の組み合わせ（Dialog, Modal, Card 等）
│   ├── templates/           # ページレイアウト（AppShell, Header, Footer 等）
│   ├── hooks/               # カスタムフック
│   ├── constants/           # 定数（SEMANTIC_COLORS 等）
│   ├── styles/              # グローバルスタイル
│   ├── tokens/              # デザイントークン
│   ├── types/               # 型定義
│   └── utils/               # ユーティリティ
├── extensions/              # プロジェクト固有コンポーネント
│   └── <project>/           # 各プロジェクト専用（例: 1on1/）
└── infra/                   # インフラ（コマンド、バージョン管理等）
```

### Atomic Design 階層

| 階層 | 説明 | 例 |
|------|------|-----|
| **atoms** | 最小単位、それ以上分割できない | Button, Input, Icon, Badge, Checkbox |
| **molecules** | atoms の組み合わせ | FormField, MenuItem, SearchBar |
| **organisms** | molecules の組み合わせ、独立したセクション | Dialog, Modal, Card, Header |
| **templates** | ページ全体のレイアウト構造 | AppShell, AuthLayout |

### 依存方向

```
atoms ← molecules ← organisms ← templates
         ↑              ↑           ↑
      atoms のみ    atoms +     atoms +
       依存可能    molecules   molecules +
                   依存可能    organisms
                              依存可能
```

**逆方向の依存は禁止**（atoms が molecules に依存してはならない）。

## 使い方

```
/ui-catalog <サブコマンド>
```

## ブランチ判定

すべてのコマンドは実行前に `packages/ui-catalog/` 内で `git branch --show-current` を実行し、
現在のブランチを判定する。ブランチによって利用可能なコマンドが異なる。

| ブランチ | 利用可能コマンド |
|---------|----------------|
| `project/*` | `ab`, `ap`, `pr`, `run` + 共通 |
| `main` | `pl`, `ps`, `run` + 共通 |
| **共通** | `rf`, `st`, `at` |

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
| `run` | run | ブランチに応じたフル実行 |

該当しないコマンドを実行した場合は、現在のブランチと利用可能なコマンドを表示して終了する。

---

## project/* ブランチ用コマンド

### `ab` (absorb) — アプリ固有コンポーネントを ui-catalog に昇格

アプリ内で作り込んだコンポーネントからビジネスロジックを排除し、
ui-catalog に昇格させる。

**重要: project/* ブランチでは常に `extensions/<project>/` に配置する。**
（`core/` への昇格は main ブランチの `rf` コマンドで行う）

**処理フロー:**

1. **対象コンポーネントを特定**
   - ユーザーが指定したコンポーネント（例: `src/components/UserCard`）
   - または、アプリの `src/components/` を走査して昇格候補を提案

2. **ビジネスロジックの分離**
   - API 呼び出し、ルーティング、認証など固有のロジックを除去
   - props で外部から注入する形に変更
   - ハードコードされた文字列・URL・パスを props 化

3. **Atomic Design 階層の決定**
   | 判断基準 | 階層 |
   |---------|------|
   | 分割できない最小単位 | atoms |
   | atoms を組み合わせた UI | molecules |
   | 独立したセクション/機能ブロック | organisms |
   | ページレイアウト | templates |

4. **配置先**: `extensions/<project>/<階層>/`
   ```
   extensions/1on1/atoms/ScoreBadge/
   extensions/1on1/molecules/FilterBar/
   extensions/1on1/organisms/SurveyCard/
   ```

5. バレルエクスポート（`index.ts`）に追加

6. `VERSION_REGISTRY` に `'1.0.0'` で登録

7. アプリ側のインポートを書き換え:
   ```typescript
   import { ScoreBadge } from '@ui-catalog/extensions/1on1/atoms'
   ```

8. 変更サマリーを報告

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
   │ [1] Button (core/atoms)                                     │
   │     → src/components/CustomButton.tsx で独自実装を発見       │
   │     → className="btn btn-primary" の直書き 12箇所           │
   │                                                             │
   │ [2] Icon (core/atoms)                                       │
   │     → lucide-react を直接インポート 8箇所                    │
   │     → 使用箇所: 8ファイル                                    │
   │                                                             │
   │ [3] Modal (core/organisms)                                  │
   │     → src/ui/Dialog.tsx が同等機能                          │
   │     → 使用箇所: 5ファイル                                    │
   │                                                             │
   │ [4] Card (core/organisms)                                   │
   │     → <div className="card shadow-md"> パターン 23箇所       │
   └─────────────────────────────────────────────────────────────┘
   ```

3. **置き換え対象の選択**
   - ユーザーに置き換え対象を選択させる
   - 一括適用 or 個別適用を選択可能

4. **置き換えの実行**
   - **コンポーネント置き換え:**
     - ローカルコンポーネントのインポートを `@ui-catalog/core/<階層>` に変更
     - props のマッピングを調整（必要に応じて）
     - 元のローカルコンポーネントは削除または deprecated 化
   - **HTML/CSS パターン置き換え:**
     - 直書きの HTML を ui-catalog コンポーネントに置き換え
     - className ベースのスタイリングを props ベースに変換
     - 例: `<button className="btn btn-danger">` → `<Button variant="danger">`
   - **インポートパス:**
     ```typescript
     // core コンポーネント
     import { Button, Icon } from '@ui-catalog/core/atoms'
     import { FormField } from '@ui-catalog/core/molecules'
     import { Modal, Card } from '@ui-catalog/core/organisms'
     import { AppShell } from '@ui-catalog/core/templates'

     // extensions コンポーネント
     import { ScoreBadge } from '@ui-catalog/extensions/1on1/atoms'
     ```

5. **差分プレビュー**
   ```diff
   - import { CustomButton } from '@/components/CustomButton'
   - import { ChevronRight } from 'lucide-react'
   + import { Button, Icon } from '@ui-catalog/core/atoms'

   - <CustomButton onClick={handleClick} type="primary">
   -   保存 <ChevronRight size={16} />
   - </CustomButton>
   + <Button onClick={handleClick} variant="primary">
   +   保存 <Icon name="ChevronRight" size={16} />
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

8. 変更サマリーを報告
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

## 共通コマンド

### `at` (atomize) — 依存関係の最適化と重複コンポーネントの統合

`extensions/` 内の依存関係を最適化し、`core/` コンポーネントの活用を促進する。

**重要: 構造変更の制限**
- 新ファイルの作成・既存ファイルの編集: ✅ 許可
- 既存ファイルの移動・リネーム・ディレクトリ再編成: ❌ 禁止

**対象:**
- 外部ライブラリを直接インポートしている箇所
- プリミティブ HTML を直接使用している箇所
- `core/` に同等のコンポーネントがある場合は置換を提案

**処理フロー:**

1. **検出**
   - 外部ライブラリからの直接インポート
   - プリミティブ HTML + className パターン

2. **置換候補の提示**
   - `core/` に既存のコンポーネントがあれば置換を提案
   - なければ `core/` に新規作成を検討

3. **置換の実行**
   - 既存の `core/` コンポーネントで置換
   - 必要に応じて `core/` に新規コンポーネントを追加

---

### `run` — ブランチに応じたフル実行

ブランチに応じて一連のコマンドを順番に実行する。

**project/* ブランチでの実行:**
```
st → ab → ap → at → rf → pr
   ↓     ↓     ↓     ↓     ↓     ↓
状態  → 吸収  → 適用  → 最適化 → 整理  → PR
確認   (→ext)  (置換)          (削除)   作成
```
- `ab`: アプリ → `extensions/<project>/` に昇格（常に extensions）
- `rf`: 整理のみ（昇格判断なし）
- 新ファイル作成 OK、既存構造の変更は禁止

**main ブランチでの実行:**
```
st → pl → at → rf → ps
   ↓     ↓     ↓     ↓     ↓
状態  → 取込  → 最適化 → 整理  → 配布
確認           (依存)  (昇格+削除)
```
- `rf`: **extensions → core 昇格判断** + 整理
- 昇格基準を満たすコンポーネントをユーザーに提示

各ステップで問題があれば停止し、ユーザーに確認を求める。
スキップしたいステップがあれば、その旨を伝えて次に進む。

---

### `rf` (refine) — 不要コード削除・整合性修正・昇格判断

コードベースをクリーンアップし、整合性を確保する。
**project/* ブランチと main ブランチの両方で使用可能だが、動作が異なる。**

---

#### main ブランチ専用: extensions → core 昇格判断

main ブランチでは、`extensions/` 内のコンポーネントを `core/` に昇格させるかを判断する。

**昇格基準:**
| 基準 | 説明 |
|------|------|
| 複数プロジェクトで使用 | 2つ以上の `extensions/<project>/` で同じコンポーネントが存在 |
| 汎用性が高い | プロジェクト固有のロジックが含まれていない |
| 安定している | API が安定し、頻繁な変更がない |

**昇格フロー:**
1. `extensions/` 内の重複・類似コンポーネントを検出
2. ユーザーに昇格候補を提示
3. 承認後、以下を実行:
   - `core/<階層>/` に移動
   - 各 `extensions/<project>/` のインポートを `core/` に書き換え
   - 重複コンポーネントを削除
4. バージョン管理を更新

```
📊 昇格候補

┌──────────────┬────────────────────┬──────────────────┐
│ コンポーネント │ 使用プロジェクト    │ 推奨階層          │
├──────────────┼────────────────────┼──────────────────┤
│ ScoreBadge   │ 1on1, psync        │ atoms            │
│ FilterBar    │ 1on1, psync, calend│ molecules        │
└──────────────┴────────────────────┴──────────────────┘

ScoreBadge を core/atoms/ に昇格しますか？ (y/n)
```

---

#### スタイリング方針

**core/ は SCSS Module で実装、extensions/ は Tailwind/CSS-in-JS OK**

| 方式 | 使用場所 | 理由 |
|------|---------|------|
| **SCSS Module** | core/ | 汎用性、他プロジェクトへの移植性、Tailwind 非依存 |
| Tailwind/CSS-in-JS | extensions/ | プロジェクト固有、速度優先（OK） |

**昇格時の必須作業:**
- **Tailwind → SCSS Module 変換**
- ビジネスロジックの完全除去
- Props の汎用化

```scss
// core/atoms/Button/Button.module.scss
@use '../../tokens' as *;

.button {
  padding: $spacing-2 $spacing-4;
  border-radius: $radius-md;

  &--primary {
    background-color: $color-primary;
  }
}
```

---

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

---

#### 処理フロー（共通）

1. **未使用コードの検出**
   - `packages/ui-catalog/` 内で未使用のコンポーネント・型定義・ユーティリティを検索
   - アプリ側（`src/`）からのインポート状況を確認
   - 後方互換の残骸（deprecated、不要な再エクスポート）を検出

2. **整合性チェック**
   - `VERSION_REGISTRY`（registry.ts）に登録されているが、実体がないコンポーネント
   - 実体があるが `VERSION_REGISTRY` に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの `index.ts`）に未登録のコンポーネント
   - `VERSION_REGISTRY` と `ui-catalog.versions.json` の差分を検出
     → 差分がある場合は `ui-catalog.versions.json` を自動更新
   - `data-component` 属性が付いていないコンポーネント
   - `.stories.tsx` が存在しないコンポーネント
   - `.test.tsx` が存在しないコンポーネント
   - **依存方向の違反**（atoms が molecules に依存している等）

3. **削除・修正の実行**
   - 使用状況を確認し、削除可能か判断（ユーザーに確認）
   - 不要なコードを削除
   - 整合性の不一致を修正

4. **検証**
   - `tsc --noEmit` でコンパイルエラーがないことを確認
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
   - `VERSION_REGISTRY` と `ui-catalog.versions.json` の差分を確認
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

コンポーネント変更時は `VERSION_REGISTRY`（registry.ts）を更新する。
`rf` コマンド実行時に `ui-catalog.versions.json` が自動同期される。
**`ui-catalog.versions.json` は手動編集禁止**（VERSION_REGISTRY が唯一のソースオブトゥルース）。

| 変更の種類 | バージョン |
|-----------|-----------|
| UI に変更なし（内部リファクタ等） | **patch** |
| UI に変更あり（props 追加、見た目変更等） | **minor** |
| 破壊的変更（props 削除/改名、API 変更） | **major** |

### 依存方向

上記「ディレクトリ構造」セクション参照。逆方向の依存は禁止。

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
