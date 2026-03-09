/**
 * API統合フック
 *
 * デモ/モック: useDemoData
 *
 * NOTE:
 * - GET/POST/PUT/DELETE は TanStack Query + fetch を使用してください
 * - SSEストリーミング用フック (useStreamingApi) は apps/web/src/hooks/api にあります
 */

// デモ/モックデータ用フック
export { useDemoData } from './useDemoData';
export type { DemoDataState, UseDemoDataOptions } from './useDemoData';
