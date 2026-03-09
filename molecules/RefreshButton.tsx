import { FC } from 'react';

import Icon from '../atoms/Icon';


interface RefreshButtonProps {
  /** 更新コールバック */
  onRefresh: () => void;
  /** React Query の dataUpdatedAt（0 = 未取得） */
  dataUpdatedAt?: number;
  /** データ読み込み中 */
  loading?: boolean;
  /** リフレッシュ中（refetch実行中） */
  refreshing?: boolean;
}

/**
 * 更新ボタン + 最終更新時刻の共通コンポーネント
 *
 * - ボタン押下でデータをリフレッシュ
 * - refreshing中はアイコンが回転アニメーション
 * - dataUpdatedAt > 0 で時刻表示、0 or undefined は「...」表示
 */
const RefreshButton: FC<RefreshButtonProps> = ({
  onRefresh,
  dataUpdatedAt,
  loading = false,
  refreshing = false,
}) => (
  <div className="flex items-center gap-1.5" data-component="refresh-button">
    <button
      onClick={() => onRefresh()}
      disabled={loading || refreshing}
      className="flex items-center justify-center rounded-full p-1.5 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
      title="データを更新"
    >
      <Icon
        name={'arrow-rotate'}
        size={16}
        animationTrigger="condition"
        condition={refreshing}
        conditionAnimation={{ rotate: [0, 360] }}
        duration={1}
        repeat={9999}
        ease="linear"
      />
    </button>
    <span className="text-fluid-xs text-gray-400">
      {dataUpdatedAt && dataUpdatedAt > 0
        ? new Date(dataUpdatedAt).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })
        : '...'}
    </span>
  </div>
);

export default RefreshButton;
