#!/usr/bin/env node

/**
 * 廃止予定スクリプト（no-op）。
 *
 * 過去は package.json の "ui-catalog": { branch, commit } を読んで
 * project/<name> ブランチに reset --hard していたが、
 * project/* ブランチは廃止し main 一本に統一済み。
 * ui-catalog の取り込みは git submodule の標準フロー
 * （`git submodule update --remote` = `pnpm ui:update`）に統一。
 *
 * 親アプリ側で以下を削除してください:
 *   - package.json の "ui-catalog": { ... } フィールド
 *   - package.json の postinstall から本スクリプトの呼び出し
 *
 * 親アプリでの利用が無くなり次第、本ファイルは削除予定。
 */

console.warn('[ui-catalog] setup-ui-catalog.cjs は廃止されました（no-op）。')
console.warn('[ui-catalog] 親アプリの package.json から "ui-catalog" フィールドと postinstall 呼び出しを削除してください。')
console.warn('[ui-catalog] ui-catalog の取り込みは `git submodule update --remote` または `pnpm ui:update` を使ってください。')
process.exit(0)
