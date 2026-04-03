#!/usr/bin/env node

/**
 * pnpm install 時に自動実行される ui-catalog セットアップスクリプト。
 *
 * package.json の "ui-catalog" フィールドを読み、
 * 指定されたリポ・ブランチ・コミットで packages/ui-catalog を用意する。
 *
 * {
 *   "ui-catalog": {
 *     "repo": "https://github.com/xxx/ui-catalog.git",
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
    console.log('[ui-catalog] package.json が見つかりません。スキップ。')
    return
  }

  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf-8'))
  const config = pkg['ui-catalog']

  if (!config) {
    console.log('[ui-catalog] package.json に "ui-catalog" 設定がありません。スキップ。')
    return
  }

  const { repo, branch, commit } = config

  if (!repo || !branch || !commit) {
    console.error('[ui-catalog] repo, branch, commit は全て必須です。')
    process.exit(1)
  }

  console.log(`[ui-catalog] セットアップ開始`)
  console.log(`  repo:   ${repo}`)
  console.log(`  branch: ${branch}`)
  console.log(`  commit: ${commit}`)

  if (!fs.existsSync(TARGET)) {
    // 初回: clone
    console.log('[ui-catalog] clone 中...')
    fs.mkdirSync(path.join(ROOT, 'packages'), { recursive: true })
    run(`git clone -b ${branch} ${repo} ${TARGET}`)
  } else {
    // 既にある: fetch
    console.log('[ui-catalog] fetch 中...')
    run('git fetch origin', { cwd: TARGET })
  }

  // 指定コミットに checkout
  const currentCommit = execSync('git rev-parse HEAD', { cwd: TARGET })
    .toString()
    .trim()

  if (currentCommit.startsWith(commit)) {
    console.log(`[ui-catalog] 既に ${commit} です。変更なし。`)
  } else {
    console.log(`[ui-catalog] ${commit} に checkout 中...`)
    run(`git checkout ${branch}`, { cwd: TARGET })
    run(`git reset --hard ${commit}`, { cwd: TARGET })
  }

  console.log('[ui-catalog] セットアップ完了')
}

main()
