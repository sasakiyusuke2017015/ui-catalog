# Coding Style

## Core Principles

1. **Fail Fast**: デフォルト値で隠蔽しない、必須は即エラー
2. **DRY/KISS**: 重複排除、シンプルに
3. **削除優先**: 後方互換より認知負債削減を優先

## Fail Fast (CRITICAL)

必須の値にデフォルト値を設定しない:

```typescript
// WRONG: デフォルト値で隠蔽
const SECRET_KEY = process.env.JWT_SECRET_KEY || "default"

// CORRECT: 必須は即エラー
const SECRET_KEY = process.env.JWT_SECRET_KEY
if (!SECRET_KEY) throw new Error("JWT_SECRET_KEY is not set")
```

## Deletion Over Compatibility (CRITICAL)

認知負債を避けるため、後方互換より削除を優先する:

```typescript
// WRONG: 後方互換のための残骸
export const oldFunction = () => { /* deprecated */ }
export const _unusedVar = null  // 互換性のため残す
/** @deprecated use newThing instead */
export const deprecatedThing = ...

// CORRECT: 不要なら完全削除
// 使用箇所も同時に修正し、古いコードは残さない
```

### ルール
- **使わないコードは即削除** — コメントアウトや `_` prefix で残さない
- **非推奨より削除** — `@deprecated` より完全削除を優先
- **互換層禁止** — 古い API を新しい API にマップするラッパーは作らない
- **型の二重定義禁止** — 同じ意味の型を複数箇所で定義しない

### 例外
- 外部公開 API（npm パッケージなど）
- 明示的なマイグレーション期間中

## Immutability (CRITICAL)

ALWAYS create new objects, NEVER mutate:

```javascript
// WRONG: Mutation
function updateUser(user, name) {
  user.name = name  // MUTATION!
  return user
}

// CORRECT: Immutability
function updateUser(user, name) {
  return {
    ...user,
    name
  }
}
```

## File Organization

MANY SMALL FILES > FEW LARGE FILES:
- High cohesion, low coupling
- 200-400 lines typical, 800 max
- Extract utilities from large components
- Organize by feature/domain, not by type

## Error Handling

ALWAYS handle errors comprehensively:

```typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('Detailed user-friendly message')
}
```

## Input Validation

ALWAYS validate user input (Valibot を使用):

```typescript
import * as v from 'valibot'

const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  age: v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(150))
})

const validated = v.parse(schema, input)
```

## Code Quality Checklist

Before marking work complete:
- [ ] Code is readable and well-named
- [ ] Functions are small (<50 lines)
- [ ] Files are focused (<800 lines)
- [ ] No deep nesting (>4 levels)
- [ ] Proper error handling
- [ ] No console.log statements
- [ ] No hardcoded values
- [ ] No mutation (immutable patterns used)
- [ ] No dead code or deprecation markers
