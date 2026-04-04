#!/usr/bin/env node

/**
 * pnpm install 時に自動実行される ui-catalog セットアップスクリプト。
 *
 * package.json の "ui-catalog" フィールドを読み、
 * 指定されたブランチ・コミットに checkout する。
 * clone は postinstall のシェルコマンドで行われるため、
 * このスクリプトは branch + commit の固定のみを担当する。
 *
 * {
 *   "ui-catalog": {
 *     "branch": "project/myapp",
 *     "commit": "44a792d"
 *   }
 * }
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const PKG_PATH = path.join(ROOT, 'package.json')
const TARGET = path.join(ROOT, 'packages', 'ui-catalog')

function run(cmd, opts = {}) {
  console.log(`  $ ${cmd}`)
  execSync(cmd, { stdio: 'inherit', ...opts })
}

function main() {
  if (!fs.existsSync(PKG_PATH)) {
    return
  }

  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf-8'))
  const config = pkg['ui-catalog']

  if (!config) {
    return
  }

  const { branch, commit } = config

  if (!branch || !commit) {
    console.error('[ui-catalog] branch, commit は必須です。')
    process.exit(1)
  }

  console.log(`[ui-catalog] セットアップ: ${branch} @ ${commit}`)

  run('git fetch origin', { cwd: TARGET })

  const currentCommit = execSync('git rev-parse HEAD', { cwd: TARGET })
    .toString()
    .trim()

  if (currentCommit.startsWith(commit)) {
    console.log(`[ui-catalog] 既に ${commit} です。`)
  } else {
    run(`git checkout ${branch}`, { cwd: TARGET })
    run(`git reset --hard ${commit}`, { cwd: TARGET })
  }

  console.log('[ui-catalog] 完了')
}

main()
