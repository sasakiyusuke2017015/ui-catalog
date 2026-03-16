/**
 * VERSION_REGISTRY → ui-catalog.versions.json 同期スクリプト
 *
 * Usage:
 *   pnpm sync:versions          # 生成/上書き
 *   pnpm check:versions         # 差分チェックのみ (CI用, exit 1 on drift)
 */
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERSION_REGISTRY } from '../infra/version/registry.ts'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUT_PATH = resolve(ROOT, 'ui-catalog.versions.json')
const CHECK_ONLY = process.argv.includes('--check')

const output = {
  _generated:
    "DO NOT EDIT — auto-generated from VERSION_REGISTRY. Run 'pnpm sync:versions' to regenerate.",
  ...VERSION_REGISTRY,
}

const newContent = JSON.stringify(output, null, 2) + '\n'

const currentContent = existsSync(OUTPUT_PATH)
  ? readFileSync(OUTPUT_PATH, 'utf-8')
  : ''

if (currentContent === newContent) {
  console.log('✅ ui-catalog.versions.json is in sync with VERSION_REGISTRY')
  process.exit(0)
}

if (CHECK_ONLY) {
  console.error(
    '❌ ui-catalog.versions.json is OUT OF SYNC with VERSION_REGISTRY'
  )
  console.error('   Run: pnpm sync:versions')
  process.exit(1)
}

writeFileSync(OUTPUT_PATH, newContent, 'utf-8')
console.log('✅ ui-catalog.versions.json synced from VERSION_REGISTRY')
