# ui-catalog 開発コマンド（ui-catalog 側）

ui-catalog は **Git Submodule + ソース配布** の汎用 UI コンポーネントライブラリ。
親アプリでは `packages/ui-catalog/` として submodule で取り込む。

> **配布モデルの前提**
> - ブランチ運用は `main` 一本（`project/<name>` ブランチは廃止）
> - 親 → ui-catalog 方向の自動同期は提供しない。ただし下記の `absorb` / `apply` は **親側のコマンド**として別途用意（[infra/commands/parent/ui-catalog.md](./parent/ui-catalog.md) 参照）
> - ui-catalog の更新は ui-catalog 側で直接コミット → 親側で `git submodule update --remote`

## コマンド一覧

| コマンド | 場所 | やること |
|---------|------|---------|
| `/ui-catalog` | ui-catalog | 状態診断（読み取り専用） |
| `/ui-catalog clean` | ui-catalog | 整合性チェック・修正 |
| `/ui-catalog optimize` | ui-catalog | 依存最適化（プリミティブ HTML → atoms 等） |
| `/ui-catalog absorb` | **親アプリ** | 親アプリ → ui-catalog 取り込み |
| `/ui-catalog apply` | **親アプリ** | ui-catalog → 親アプリ 置換 |

`absorb` / `apply` は親アプリ側で呼ぶ。詳細は [infra/commands/parent/ui-catalog.md](./parent/ui-catalog.md)。

---

## `/ui-catalog`（状態診断）

引数なしで現在の状態を表示する。**何も変更しない。**

**処理フロー:**

1. 現在のブランチを判定（基本は `main`）
2. Git 同期状況（origin/main との差分）を確認
3. VERSION_REGISTRY ↔ `ui-catalog.versions.json` の整合性をチェック
4. バレルエクスポート、`data-component` 属性、`.stories.tsx` / `.test.tsx` の漏れを検出
5. 推奨アクションを表示

**出力イメージ:**

```
📊 ui-catalog status (main)

【Git 同期状況】
┌──────────────────────────────────┬───────┐
│ 項目                             │ 件数  │
├──────────────────────────────────┼───────┤
│ 未 push のコミット（→ origin）    │ 2     │
│ origin からの未取り込み           │ 0     │
└──────────────────────────────────┴───────┘

【整合性】
┌──────────────────────────────────┬───────┐
│ チェック項目                      │ 結果  │
├──────────────────────────────────┼───────┤
│ VERSION_REGISTRY ↔ versions.json │ ✅ OK │
│ バレルエクスポートの漏れ           │ ⚠️ 1  │
│ data-component 属性の漏れ        │ ✅ OK │
│ .stories.tsx の漏れ              │ ✅ OK │
└──────────────────────────────────┴───────┘

💡 推奨アクション:
1. atoms/Slider をバレルエクスポートに追加
2. git push origin main
```

---

## `/ui-catalog clean`

コードベースの整合性をチェックし、修正する。**ui-catalog 内で完結。**

**処理フロー:**

1. **整合性チェック**
   - VERSION_REGISTRY に登録されているが実体がないコンポーネント
   - 実体があるが VERSION_REGISTRY に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの `index.ts`）の漏れ
   - `ui-catalog.versions.json` との差分
   - `data-component` 属性の漏れ
   - `.stories.tsx` / `.test.tsx` の漏れ
   - 依存方向の違反（atoms → molecules 等）
   - deprecation re-export の検出
2. **未使用コードの検出**
   - 未使用のコンポーネント・型定義・ユーティリティ
   - deprecated な残骸
3. **修正の実行**（ユーザー確認後）
4. `ui-catalog.versions.json` の自動生成（VERSION_REGISTRY から生成）

**出力イメージ:**

```
📊 ui-catalog clean

【整合性チェック】
┌────────────────────────────────┬────────┬──────────────────────────────────────┐
│ チェック項目                    │ 結果   │ 詳細                                 │
├────────────────────────────────┼────────┼──────────────────────────────────────┤
│ VERSION_REGISTRY ↔ 実体        │ ⚠️ 1   │ Tooltip: 登録あり、実体なし           │
│ バレルエクスポート              │ ⚠️ 1   │ atoms/Slider が未登録                │
│ versions.json 同期             │ ✅ OK  │                                      │
│ data-component 属性            │ ⚠️ 2   │ Badge, Card                          │
│ 依存方向                        │ ✅ OK  │                                      │
│ deprecation re-export          │ ✅ OK  │                                      │
└────────────────────────────────┴────────┴──────────────────────────────────────┘

修正を実行しますか？
  [1] 全て修正
  [2] 選択して修正
  [3] キャンセル
```

---

## `/ui-catalog optimize`

`organisms` / `templates` の依存関係を最適化する。**ui-catalog 内で完結。**

**検出対象:**
- 外部ライブラリ（Mantine, Radix 等）の直接インポート → atoms/molecules に置換
- プリミティブ HTML（`<button>`, `<select>` 等）の直接使用 → atoms に置換
- 同一機能の重複コンポーネント → variant/size で統合

**処理フロー:**

1. 依存関係をスキャン
2. 置換候補を一覧表示
3. 対応方針を選択（置換 / 新規作成 / スキップ）
4. 置換を実行
5. VERSION_REGISTRY を更新

**出力イメージ:**

```
📊 ui-catalog optimize

【プリミティブ HTML】優先度: 中
┌────────────────────┬─────────────────────┬──────────────────────┐
│ ファイル            │ 検出内容             │ 置換候補              │
├────────────────────┼─────────────────────┼──────────────────────┤
│ RefreshButton.tsx  │ <button>            │ → atoms/Button       │
│ Toast.tsx          │ <button>            │ → atoms/Button       │
│ DropdownMenu.tsx   │ <button>            │ → atoms/Button       │
└────────────────────┴─────────────────────┴──────────────────────┘

【variant 統合候補】優先度: 低
┌─────────────────┬─────────────────┬──────────────────────┐
│ コンポーネント A  │ コンポーネント B  │ 統合案               │
├─────────────────┼─────────────────┼──────────────────────┤
│ ResetButton     │ ReplayButton    │ → Button variant     │
│ BackButton      │                 │ → Button variant     │
└─────────────────┴─────────────────┴──────────────────────┘

対応を選択:
  [1] プリミティブ HTML を全て置換
  [2] 選択して置換
  [3] スキップ
```

---

## 共通ルール

### 禁止操作

- 公開ブランチに対する `rebase`
- `force push`（`--force`, `--force-with-lease` いずれも）
- `reset --hard` で他ブランチの内容を上書き

### 依存方向

```
atoms ← molecules ← organisms ← templates
```

逆方向の依存は禁止。

### バージョン更新ルール

コンポーネント変更時は同じコミットで VERSION_REGISTRY と
`ui-catalog.versions.json` を更新する。

| 変更の種類 | バージョン |
|-----------|-----------|
| UI に変更なし（内部リファクタ等） | **patch** |
| UI に変更あり（props 追加、見た目変更等） | **minor** |
| 破壊的変更（props 削除/改名、API 変更） | **major** |
