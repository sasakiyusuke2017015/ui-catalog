# Code Review

変更されたファイルのセキュリティ・品質・設計レビューを行い、**問題があれば修正を実行する**。

## 手順

1. 変更ファイル取得: `git diff --name-only HEAD`

2. 各ファイルを読み込み、以下をチェック:

**Security Issues (CRITICAL):**
- Hardcoded credentials, API keys, tokens
- SQL injection vulnerabilities
- XSS vulnerabilities
- Missing input validation
- Insecure dependencies
- Path traversal risks

**Design Issues (HIGH):**
- 単一責任原則（SRP）違反 — 異なる責務が1ファイルに混在
  - 例: 型定義とランタイム関数が同じファイル
  - 例: 設定値とロジックが同じファイル
- 関心の分離違反 — 静的データと動的処理の混在
- レイヤー違反 — 依存方向が逆転している
- 不適切なディレクトリ構成 — 1ファイルだけのディレクトリ

**Code Quality (HIGH):**
- Functions > 50 lines
- Files > 800 lines
- Nesting depth > 4 levels
- Missing error handling
- console.log statements（意図的なログ除く）
- TODO/FIXME comments

**Best Practices (MEDIUM):**
- Mutation patterns（immutable に変更）
- Emoji usage in code（Icon コンポーネントに置換）
- DRY違反 — 同じ値・ロジックの繰り返し

3. **問題があれば:**
   - レポートを出力
   - **ユーザーに修正の許可を求める**
   - 許可されたら修正を実行
   - 修正後に再度レビュー

4. **問題がなければ:**
   - PASS レポートを出力
   - コミット可能と報告

## 重要

- レポートを出すだけで終わらない。**修正まで責任を持つ**
- CRITICAL/HIGH は修正必須。ユーザーに確認後、必ず修正を実行
- 修正後は `pnpm check:type` で型チェックを実行
