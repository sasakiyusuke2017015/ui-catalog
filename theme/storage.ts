/**
 * localStorage ヘルパー
 *
 * SSR 対応 + 型安全な localStorage 操作
 */

/**
 * ブラウザ環境かどうかを判定
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
}

/**
 * localStorage から同期的に値を取得
 *
 * @param key ストレージキー
 * @param defaultValue デフォルト値
 * @returns 取得した値またはデフォルト値
 */
export function getStoredValue<T>(key: string, defaultValue: T): T {
  if (!isBrowser()) return defaultValue
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return defaultValue
    return JSON.parse(raw) as T
  } catch {
    return defaultValue
  }
}

/**
 * localStorage に値を保存
 *
 * @param key ストレージキー
 * @param value 保存する値
 */
export function setStoredValue<T>(key: string, value: T): void {
  if (!isBrowser()) return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage が使えない場合は無視
  }
}

/**
 * localStorage から値を削除
 *
 * @param key ストレージキー
 */
export function removeStoredValue(key: string): void {
  if (!isBrowser()) return
  try {
    localStorage.removeItem(key)
  } catch {
    // localStorage が使えない場合は無視
  }
}
