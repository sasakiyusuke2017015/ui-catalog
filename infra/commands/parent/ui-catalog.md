# ui-catalog 開発コマンド（親アプリ側）

このファイルは **ui-catalog を submodule として取り込んだ親アプリ** の
`.claude/commands/ui-catalog.md` に置くためのもの。

## インストール

```bash
mkdir -p .claude/commands
cp packages/ui-catalog/infra/commands/parent/ui-catalog.md .claude/commands/ui-catalog.md
```

`pnpm ui:update` で submodule を更新したら、このコマンド定義も陳腐化する可能性がある。
気になったら再 cp する。

---

## コマンド一覧

| コマンド | やること |
|---------|---------|
| `/ui-catalog absorb [path]` | 親アプリのコンポーネントを ui-catalog に取り込む |
| `/ui-catalog apply` | 親アプリの実装を ui-catalog コンポーネントで置き換える |

> ui-catalog 単独の `clean` / `optimize` / 状態診断は ui-catalog repo 側で実行する。

---

## scan 対象パス（ヒューリスティック）

引数なしで実行した場合、以下のパスを順に試して **最初に見つかったもの** を対象にする：

1. `apps/*/src` （モノレポ）
2. `src/components`
3. `src/ui`
4. `src`

引数で明示指定した場合は、そのパス配下のみ scan：

```
/ui-catalog absorb apps/web/src/components/UserProfileCard.tsx
/ui-catalog apply  apps/web/src
```

複数候補が見つかった場合は対話的に選択。

---

## `/ui-catalog absorb [path]`

親アプリ内のコンポーネントを ui-catalog に昇格させる。

### 前提

- 現在の作業ディレクトリは **親アプリのルート**（`packages/ui-catalog/` ではない）
- `packages/ui-catalog/` が submodule として存在する
- ui-catalog 側に未コミット変更が残っていてもよいが、コンフリクトしないこと

### 処理フロー

1. 親アプリのルートにいるか確認（`packages/ui-catalog/` の存在で判定）
2. 対象コンポーネントを特定
   - 引数あり：そのファイル
   - 引数なし：scan 対象パスから候補提示 → ユーザー選択
3. 対象を分析：
   - ビジネスロジック（API 呼び出し、認証チェック、グローバル状態参照）の検出
   - Tailwind / CSS-in-JS の検出
   - 類似コンポーネントの検索（ui-catalog 既存と props/構造で類似度判定）
   - 推奨レイヤー（atoms/molecules/organisms/templates）の判定
4. ユーザーに方針を提示：
   - 新規コンポーネントとして昇格
   - 既存の variant として統合
   - キャンセル
5. 書き起こし実行（**ui-catalog 側のファイルを書き換えるのみ**）
   - `packages/ui-catalog/core/<layer>/<Name>/<Name>.tsx` を生成
   - **Tailwind → SCSS Module 変換**：`<Name>.module.scss` を生成
   - ビジネスロジックを props 化（API 呼び出しを `onSubmit` 等に外出し）
   - `index.ts` のバレルエクスポート追加
   - `infra/version/VERSION_REGISTRY` に登録（version 1.0.0）
   - `<Name>.stories.tsx` の雛形生成
6. **commit / push はしない**。ユーザーに次のアクションを案内：
   ```
   ✅ absorb 完了（ui-catalog 内のファイルを書き換えました）

   次のアクション:
     cd packages/ui-catalog
     # 内容を確認
     git diff
     # 問題なければ commit
     git add .
     git commit -m "feat: absorb ProfileCard from <親アプリ>"
     git push
     cd -
     # 親アプリ側で取り込み
     pnpm ui:update
     git add packages/ui-catalog
     git commit -m "chore: bump ui-catalog (add ProfileCard)"

   親アプリのインポート差し替えは /ui-catalog apply で実行できます。
   ```

### 出力イメージ

```
📊 ui-catalog absorb

対象: apps/web/src/components/UserProfileCard.tsx

【分析結果】
- ビジネスロジック: API 呼び出し 2箇所、認証チェック 1箇所
- スタイリング: Tailwind（class 12箇所）
- 類似コンポーネント: organisms/MemberCard（類似度: 65%）
- 推奨レイヤー: organisms

【提案】
  [1] 新規コンポーネントとして昇格（→ organisms/ProfileCard）
  [2] MemberCard の variant として統合
  [3] キャンセル

選択: 1

✅ absorb 完了（ui-catalog 内のファイルを書き換えました）

書き換え/作成したファイル:
  packages/ui-catalog/core/organisms/ProfileCard/ProfileCard.tsx        (新規)
  packages/ui-catalog/core/organisms/ProfileCard/ProfileCard.module.scss (新規)
  packages/ui-catalog/core/organisms/ProfileCard/ProfileCard.stories.tsx (新規)
  packages/ui-catalog/core/organisms/ProfileCard/index.ts                (新規)
  packages/ui-catalog/core/organisms/index.ts                           (更新)
  packages/ui-catalog/infra/version/VERSION_REGISTRY.ts                  (更新)

次のアクション: 上記コメント参照
```

---

## `/ui-catalog apply [path]`

ui-catalog のコンポーネントで親アプリの実装を置き換える。

### 前提

- 現在の作業ディレクトリは **親アプリのルート**
- `packages/ui-catalog/` が存在
- 親アプリの `package.json` に `"@ui-catalog/core": "link:./packages/ui-catalog"` が宣言されている

### 処理フロー

1. 親アプリのルートにいるか確認
2. scan 対象パスを決定（引数優先、なければヒューリスティック）
3. ui-catalog の全コンポーネントを列挙
4. 親アプリ内で：
   - ui-catalog コンポーネントと同等機能の独自実装を検出
   - プリミティブ HTML（`<button>`, `<select>` 等）の使用を検出
5. 置き換え候補を一覧表示
6. ユーザーに対応を提示（全置換 / 選択置換 / スキップ）
7. **親アプリ側のファイルのみ書き換え**（ui-catalog は触らない）
   - `import` 文の追加・削除
   - JSX の書き換え
   - 不要になったローカルコンポーネントファイルの削除確認
8. commit はしない

### 出力イメージ

```
📊 ui-catalog apply

scan 対象: apps/web/src（自動検出）

【独自実装で発見】
┌────────────────────┬───────────────────────────────────────────┐
│ ui-catalog         │ 親アプリ側で発見                            │
├────────────────────┼───────────────────────────────────────────┤
│ atoms/Button       │ src/components/CustomButton.tsx で独自実装 │
│                    │ className="btn btn-primary" 12箇所         │
│ organisms/Modal    │ src/ui/Dialog.tsx が同等機能              │
│ atoms/Icon         │ <svg> 直書き 8箇所                        │
└────────────────────┴───────────────────────────────────────────┘

置き換えを実行しますか？
  [1] 全て置き換え
  [2] 選択して置き換え
  [3] スキップ

選択: 2

書き換えたファイル:
  apps/web/src/components/UserProfileCard.tsx  (Button 3箇所 置換)
  apps/web/src/pages/Settings.tsx              (Button 2箇所 置換)
  apps/web/src/ui/Dialog.tsx                   (削除候補 — y/n 確認)

✅ apply 完了
```

---

## 共通の安全ルール

### 触っていい範囲

| コマンド | ui-catalog 側 | 親アプリ側 |
|---------|--------------|-----------|
| `absorb` | ✅ ファイル書き換え（commit はしない） | ❌ 一切触らない |
| `apply`  | ❌ 一切触らない | ✅ ファイル書き換え（commit はしない） |

absorb/apply は **同時に両側を触らない**。これは事故った時のロールバック単位を分離するため。

### 禁止操作

- ui-catalog / 親アプリ いずれの repo でも **自動 commit / push しない**
- `git reset --hard`、force push、submodule の URL 変更は行わない
- 親アプリ側でも、submodule ディレクトリ（`packages/ui-catalog/`）配下を `apply` の対象に**しない**

### 失敗時

- absorb の途中でエラー → ui-catalog 側で `git diff` を見て手動で `git checkout -- .` するなり判断
- apply の途中でエラー → 親アプリ側で同様
