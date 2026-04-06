# ui-catalog 開発コマンド

ui-catalog は Atomic Design ベースの汎用 UI コンポーネントライブラリ。
各プロジェクトに `packages/ui-catalog/` として clone し、`project/<name>` ブランチで開発する。

## 使い方

```
/ui-catalog [サブコマンド]
```

引数なしで実行すると状態診断を表示（何も変更しない）。

---

## コマンド一覧

| コマンド | 使用ブランチ | やること |
|----------|-------------|---------|
| `/ui-catalog` | どこでも | 状態表示（読み取り専用） |
| `/ui-catalog sync` | どこでも | main の最新を project/* に merge で配布 |
| `/ui-catalog merge` | どこでも | project/* の変更を main に merge で取り込む |
| `/ui-catalog clean` | project/* のみ | 整合性チェック・修正 |
| `/ui-catalog optimize` | main のみ | 依存最適化（atomize） |
| `/ui-catalog absorb` | project/* のみ | アプリ → ui-catalog 取り込み |
| `/ui-catalog apply` | project/* のみ | ui-catalog → アプリ 適用 |

### ブランチ制約

**間違ったブランチで実行したら即エラーで止める。例外なし。**（sync と状態診断はどこでも可）

```
❌ main で /ui-catalog clean は実行できません。project/* ブランチに切り替えてください。
```

### 禁止操作

以下の操作はどのコマンドでも **絶対に行わない**:

- `rebase`
- `force push`（`--force`, `--force-with-lease` いずれも）
- `reset --hard` で他ブランチの内容を上書き

全ての反映は `git merge` のみで行う。

---

## `/ui-catalog`（状態診断）

引数なしで実行。現在の状態を表示する。**何も変更しない。**

**処理フロー:**

1. 現在のブランチを判定
2. Git 同期状況を確認
3. VERSION_REGISTRY 整合性をチェック
4. 推奨アクションを表示

**出力イメージ（project/* ブランチ）:**
```
📊 ui-catalog status (project/1on1)

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
└──────────────────────────────────┴───────┘

💡 推奨アクション:
1. /ui-catalog sync で main の最新を取り込む
2. /ui-catalog clean でバレルエクスポートの漏れを修正
```

**出力イメージ（main ブランチ）:**
```
📊 ui-catalog status (main)

【project/* ブランチ】
┌──────────────────┬────────────┬──────────────┬──────────────────────────┐
│ ブランチ          │ main に対し │ 独自コミット │ 状態                     │
├──────────────────┼────────────┼──────────────┼──────────────────────────┤
│ project/1on1     │ +5 / -0    │ 5件          │ 📤 merge 可能            │
│ project/calend   │ +0 / -2    │ 0件          │ 📥 project側で sync 必要  │
│ project/ticker   │ +2 / -1    │ 2件          │ 📤 merge 可能（sync 推奨）│
└──────────────────┴────────────┴──────────────┴──────────────────────────┘

💡 推奨アクション:
1. /ui-catalog merge で project/1on1 の変更を取り込む
2. project/calend は project 側で /ui-catalog sync を実行
```

---

## `/ui-catalog sync`

**使用ブランチ: どこでも**

main の最新を project/* ブランチに merge で配布する。

### project/* ブランチでの動作

現在のブランチに main を merge する。

**処理フロー:**

1. `git fetch origin main`
2. `git merge origin/main`
3. コンフリクト発生時 → 解決方法を案内（自動解決しない）
4. `git push origin project/<name>`
5. アプリ側にコピーしているファイルを更新:
   - `cp packages/ui-catalog/infra/commands/ui-catalog.md .claude/commands/`（存在する場合）

**コンフリクト時:**
```
⚠️ merge 中にコンフリクトが発生しました

以下のファイルにコンフリクトがあります:
  - core/atoms/Button/Button.tsx
  - core/molecules/TabBar/TabBar.tsx

解決方法:
  1. コンフリクトを手動で解決
  2. git add <ファイル> && git commit
  3. git push origin project/<name>

中止する場合: git merge --abort
```

### main ブランチでの動作

全 project/* ブランチに main を一括配布する。

**処理フロー:**

1. `git fetch origin`
2. 全 project/* ブランチを一覧取得
3. 各ブランチについて:
   - `git checkout project/<name>`
   - `git reset --hard origin/project/<name>`（リモートに合わせる）
   - `git merge origin/main`
   - コンフリクト発生時 → スキップして次へ（コンフリクトがあったブランチを報告）
   - `git push origin project/<name>`
4. main に戻る

**出力イメージ:**
```
📊 ui-catalog sync (main → project/*)

┌──────────────────────┬─────────────────────────────────────┐
│ ブランチ              │ 結果                                │
├──────────────────────┼─────────────────────────────────────┤
│ project/1on1         │ ✅ main の最新を取り込んだ           │
│ project/calend       │ ✅ 既に最新、何もしない              │
│ project/ticker       │ ⚠️ コンフリクト — project側で解決   │
└──────────────────────┴─────────────────────────────────────┘
```

---

## `/ui-catalog merge`

**使用ブランチ: どこでも**

project/* ブランチの変更を main に merge で取り込む。

### main ブランチでの動作

**処理フロー:**

1. merge 可能な project/* ブランチを一覧表示（独自コミットがあるもの）
2. ユーザーが対象ブランチを選択
3. `git fetch origin project/<name>`
4. `git merge origin/project/<name>`
5. コンフリクト発生時 → 解決方法を案内（自動解決しない）
6. `git push origin main`

**出力イメージ:**
```
📊 ui-catalog merge

【merge 可能なブランチ】
┌──────────────────┬──────────────┬─────────────────────────────────────┐
│ ブランチ          │ 独自コミット │ 最新コミット                        │
├──────────────────┼──────────────┼─────────────────────────────────────┤
│ project/1on1     │ 3件          │ feat: Button に ghost variant 追加  │
│ project/ticker   │ 2件          │ refactor: ViewModeToggle 刷新       │
└──────────────────┴──────────────┴─────────────────────────────────────┘

どのブランチを merge しますか？（番号 or ブランチ名）
> 1

✅ project/1on1 を main に merge しました
```

### project/* ブランチでの動作

現在のブランチの変更を main に merge する。未コミット変更があればエラー終了。

**処理フロー:**

1. 未コミット変更がないか確認（あればエラー終了）
2. 現在のブランチ名を記録
3. `git fetch origin main`
4. `git checkout main && git pull origin main`
5. `git merge origin/project/<name>`
6. コンフリクト発生時 → `git merge --abort && git checkout project/<name>` で元に戻し、解決方法を案内
7. `git push origin main`
8. `git checkout project/<name>`（元のブランチに戻る）

**出力イメージ:**
```
📊 ui-catalog merge (project/1on1 → main)

現在のブランチ: project/1on1
独自コミット: 3件

main に merge しますか？ (y/n)
> y

✅ project/1on1 を main に merge しました
🔙 project/1on1 に戻りました
```

---

## `/ui-catalog clean`

**使用ブランチ: project/* のみ**

コードベースの整合性をチェックし、修正する。

**処理フロー:**

1. ブランチ確認（project/* でなければエラー終了）
2. **整合性チェック**
   - VERSION_REGISTRY に登録されているが実体がないコンポーネント
   - 実体があるが VERSION_REGISTRY に未登録のコンポーネント
   - バレルエクスポート（各レイヤーの index.ts）の漏れ
   - ui-catalog.versions.json との差分
   - data-component 属性の漏れ
   - .stories.tsx / .test.tsx の漏れ
   - 依存方向の違反
   - 昇格残骸（core/ と extensions/ の両方に同名コンポーネントが存在）
   - deprecation re-export の検出
3. **未使用コードの検出**
   - 未使用のコンポーネント・型定義・ユーティリティ
   - deprecated な残骸
   - 昇格済みコンポーネントの extensions/ 側残存ファイル
4. **修正の実行**（ユーザー確認後）
5. **ui-catalog.versions.json の自動生成**（VERSION_REGISTRY から生成）

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
│ 昇格残骸（消込）                │ ⚠️ 1   │ StatusBar: core/ と 1on1/ の両方に存在 │
│ deprecation re-export          │ ✅ OK  │                                      │
└────────────────────────────────┴────────┴──────────────────────────────────────┘

修正を実行しますか？
  [1] 全て修正
  [2] 選択して修正
  [3] キャンセル
```

---

## `/ui-catalog optimize`

**使用ブランチ: main のみ**

organisms/templates の依存関係を最適化する。

**検出対象:**
- 外部ライブラリ（Mantine, Radix 等）の直接インポート → atoms/molecules に置換
- プリミティブ HTML（`<button>`, `<select>` 等）の直接使用 → atoms に置換
- 同一機能の重複コンポーネント → variant/size で統合

**処理フロー:**

1. ブランチ確認（main でなければエラー終了）
2. 依存関係をスキャン
3. 置換候補を一覧表示
4. 対応方針を選択（置換/新規作成/スキップ）
5. 置換を実行
6. VERSION_REGISTRY を更新

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

## `/ui-catalog absorb`

**使用ブランチ: project/* のみ**

アプリ内のコンポーネントを ui-catalog に昇格させる。

**処理フロー:**

1. ブランチ確認（project/* でなければエラー終了）
2. 対象コンポーネントを特定（ユーザー指定 or 候補提案）
3. ビジネスロジックを分離（API呼び出し、認証等を props 化）
4. 既存コンポーネントとの統合・分割を判断
5. 適切なレイヤーに配置（atoms/molecules/organisms/templates）
6. バレルエクスポートに追加
7. VERSION_REGISTRY に登録
8. アプリ側のインポートを書き換え

**出力イメージ:**
```
📊 ui-catalog absorb

対象: src/components/UserProfileCard.tsx

【分析結果】
- ビジネスロジック: API呼び出し 2箇所、認証チェック 1箇所
- 類似コンポーネント: MemberCard (類似度: 65%)
- 推奨レイヤー: organisms

【提案】
  [1] 新規コンポーネントとして昇格（UserProfileCard → organisms/ProfileCard）
  [2] MemberCard の variant として統合
  [3] キャンセル

選択: 1

✅ absorb 完了
  - organisms/ProfileCard を作成
  - VERSION_REGISTRY に ProfileCard: '1.0.0' を登録
  - src/components/UserProfileCard.tsx → @ui-catalog/core/organisms から import
```

---

## `/ui-catalog apply`

**使用ブランチ: project/* のみ**

ui-catalog コンポーネントをアプリに適用する。

**処理フロー:**

1. ブランチ確認（project/* でなければエラー終了）
2. ui-catalog の全コンポーネントをリスト化
3. アプリ側で未活用のコンポーネントを検出
4. 置き換え対象を選択
5. 置き換えを実行
6. 不要になったローカルコンポーネントを削除

**出力イメージ:**
```
📊 ui-catalog apply

【未活用コンポーネント】
┌────────────────────┬───────────────────────────────────────────┐
│ ui-catalog         │ アプリ側で発見                             │
├────────────────────┼───────────────────────────────────────────┤
│ Button (atoms)     │ src/components/CustomButton.tsx で独自実装 │
│                    │ className="btn btn-primary" 12箇所         │
│ Modal (molecules)  │ src/ui/Dialog.tsx が同等機能              │
└────────────────────┴───────────────────────────────────────────┘

置き換えを実行しますか？
  [1] 全て置き換え
  [2] 選択して置き換え
  [3] キャンセル
```

---

## 共通ルール

### バージョン更新ルール

コンポーネント変更時は必ず同じコミット内で VERSION_REGISTRY と
ui-catalog.versions.json を更新する。

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

### Git ワークフロー

```
project/* ブランチで開発・コミット
    ↓
/ui-catalog merge で main に merge
    ↓
/ui-catalog sync で他の project/* に配布
```

**全ての反映は `git merge` のみ。rebase, force push, reset --hard は禁止。**
