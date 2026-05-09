# ui-catalog 開発コマンド

ui-catalog は Atomic Design ベースの汎用 UI コンポーネントライブラリ。
親アプリには Git Submodule + ソース配布で取り込む。

## 配布モデルの前提

- ブランチは `main` 一本（プロジェクト別ブランチは持たない）
- 親 → ui-catalog の自動同期は提供しない（親側に absorb コマンドは置かない）
- ui-catalog の更新は ui-catalog 側で直接コミット → 親側で `pnpm ui:update`
- 親アプリでの開発は `apps/<app>/src/ui/` 規約ゾーンで行い、汎用化価値があるものは ui-catalog 作業者が ui-catalog repo で develop / absorb する

## コマンド一覧

| コマンド | やること |
|---------|---------|
| `/ui-catalog` | 状態診断（読み取り専用） |
| `/ui-catalog develop` | 新規コンポーネント作成・既存改修 |
| `/ui-catalog absorb <path>` | 別途参照可能な親アプリの src/ui/ から取り込む |
| `/ui-catalog clean` | 整合性チェック・修正・未使用コード削除 |

---

## `/ui-catalog`（状態診断）

引数なしで現在の状態を表示する。**何も変更しない。**

1. 現在のブランチを判定（基本は `main`）
2. Git 同期状況（origin/main との差分）を確認
3. VERSION_REGISTRY ↔ `ui-catalog.versions.json` の整合性をチェック
4. バレルエクスポート、`data-component` 属性、`.stories.tsx` / `.test.tsx` の漏れを検出
5. 推奨アクションを表示

---

## `/ui-catalog develop`

新規コンポーネントの作成、または既存コンポーネントの拡張・修正。

**処理フロー:**

1. 配置先を決定（atoms / molecules / organisms / templates）
2. コンポーネントを作成・改修
   - SCSS Module で実装（Tailwind 禁止）
   - ビジネスロジック禁止（API 呼び出し、認証チェック等は props 化）
   - `data-component` 属性を付与
   - 依存方向を守る（atoms ← molecules ← organisms ← templates）
3. バレルエクスポートに追加・更新
4. VERSION_REGISTRY を更新（新規: `1.0.0`、改修: バージョンアップ）
5. `ui-catalog.versions.json` を再生成（`pnpm export-versions`）
6. `.stories.tsx` を作成・更新
7. `tsc --noEmit` で型チェック

### バージョン更新ルール

| 変更の種類 | バージョン |
|-----------|-----------|
| UI に変更なし（内部リファクタ等） | **patch** |
| UI に変更あり（props 追加、見た目変更等） | **minor** |
| 破壊的変更（props 削除/改名、API 変更） | **major** |

---

## `/ui-catalog absorb <path>`

**前提**: 親アプリ repo を別途手元に clone してあること。引数で **親アプリ内の src/ui/ 配下のファイル / ディレクトリ**を指定する。

```
/ui-catalog absorb ~/work/parent-app/apps/web/src/ui/organisms/ProfileCard
```

親アプリの `src/ui/` ゾーンは ui-catalog 規約（SCSS Module、依存方向、`data-component`、ビジネスロジック禁止）で書かれている前提。**変換ゼロでコピーできるはず**。

**処理フロー:**

1. 引数のパスが ui-catalog 規約に従っているか検証
   - SCSS Module を使っているか
   - 禁止 import（fetch / axios / 親アプリ固有モジュール）が無いか
   - 依存方向違反が無いか
2. 既存コンポーネントとの重複・差分を確認
3. 配置先を決定（参照元の階層をそのまま使う）
4. ui-catalog の `core/<layer>/<Name>/` にコピー
5. バレルエクスポートに追加
6. VERSION_REGISTRY に登録（version 1.0.0）
7. `.stories.tsx` の雛形を生成（既存コピー元に story があれば取り込む）
8. `tsc --noEmit` で型チェック
9. **commit / push はしない**。ユーザーに次のアクションを案内

**規約違反が見つかった場合:**

- 警告を出して**どう対処するか確認**を求める
  - 規約に合わせて修正してから取り込む
  - そのまま取り込む（後で develop で直す前提）
  - キャンセル

---

## `/ui-catalog clean`

整合性チェックと未使用コードの削除。

**処理フロー:**

1. **整合性チェック**
   - VERSION_REGISTRY に登録されているが実体がないコンポーネント
   - 実体があるが VERSION_REGISTRY に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの `index.ts`）の漏れ
   - `ui-catalog.versions.json` との差分
   - `data-component` 属性の漏れ
   - `.stories.tsx` の漏れ
   - 依存方向の違反（atoms → molecules 等）
   - 公開 export パスと実体の整合（package.json の `exports`）
2. **未使用コードの検出**
   - 未使用のコンポーネント・型定義・ユーティリティ
3. **修正の実行**（ユーザー確認後）
4. `ui-catalog.versions.json` の自動生成（VERSION_REGISTRY から生成）
5. `tsc --noEmit` で型チェック

---

## 共通ルール

### 禁止操作

- 公開ブランチに対する `rebase`
- `force push`（`--force`, `--force-with-lease` いずれも）
- `reset --hard` で他ブランチの内容を上書き
- 自動 commit / push（diff を人間が確認してから commit する）

### 依存方向

```
atoms ← molecules ← organisms ← templates
```

逆方向の依存は禁止。

### スタイリング

- core/ 配下は **SCSS Module** で実装する
- Tailwind / CSS-in-JS は禁止
- `core/styles/tokens.css` の CSS 変数を使う

### 親アプリ → ui-catalog の関係

親アプリ側で生まれたコンポーネントを ui-catalog に上げたい場合は、**親アプリ作業者から ui-catalog 作業者へ要望を出す**形を取る（GitHub Issue, Slack 等、合意した経路で）。要望を受けた ui-catalog 作業者が `/ui-catalog develop` または `/ui-catalog absorb` で取り込む。
