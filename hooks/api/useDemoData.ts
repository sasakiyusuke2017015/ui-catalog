/**
 * デモ/モックデータ用フック
 * APIが未実装の場合にモックデータを使用する
 */
import { useState, useEffect, useCallback } from 'react';

import { debugLog, debugTimeStart, debugTimeEnd } from '../../utils/debug';

// ============================================================
// 型定義
// ============================================================

export interface DemoDataState<T> {
  /** デモデータ */
  data: T | null;
  /** ローディング状態 */
  loading: boolean;
  /** エラー（常にnull） */
  error: string | null;
  /** データの取得元（常に'demo'） */
  source: 'demo';
  /** オフライン状態（常にfalse） */
  isOffline: false;
  /** 保留中の同期数（常に0） */
  pendingSyncCount: 0;
  /** データを再取得（遅延を再実行） */
  refetch: () => Promise<void>;
}

export interface UseDemoDataOptions {
  /** 遅延時間（ms）デフォルト: 300 */
  delay?: number;
  /** デバッグラベル */
  debugLabel?: string;
}

// ============================================================
// useDemoData - デモ/モックデータ用フック
// ============================================================

/**
 * デモデータ用フック
 * APIが未実装の場合にモックデータを使用する
 *
 * @example
 * ```typescript
 * const mockUsers = [{ id: 1, name: 'John' }];
 * const { data, loading } = useDemoData(mockUsers, { delay: 500 });
 * ```
 */
export const useDemoData = <T>(
  mockData: T,
  options: UseDemoDataOptions = {}
): DemoDataState<T> => {
  const { delay = 300, debugLabel = 'DemoData' } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    debugTimeStart(debugLabel);

    await new Promise((resolve) => setTimeout(resolve, delay));

    setData(mockData);
    setLoading(false);
    debugLog(mockData, `デモデータ読込 (${debugLabel})`);
    debugTimeEnd(debugLabel);
  }, [mockData, delay, debugLabel]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    loading,
    error: null,
    source: 'demo',
    isOffline: false,
    pendingSyncCount: 0,
    refetch: loadData,
  };
};
