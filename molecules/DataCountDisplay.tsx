import { FC } from 'react';

import { NumberTicker } from '../magicui';

interface DataCountDisplayProps {
  /** 表示件数 */
  totalCount: number;
  /** 選択件数 */
  selectedCount?: number;
  /** ローディング中 */
  loading?: boolean;
  /** NumberTickerの遅延（秒） */
  delay?: number;
}

/**
 * データ件数・選択件数の共通表示コンポーネント
 * 件数変更時にNumberTickerアニメーション付きで表示
 */
const DataCountDisplay: FC<DataCountDisplayProps> = ({
  totalCount,
  selectedCount = 0,
  loading = false,
  delay = 0.1,
}) => (
  <span data-component="data-count-display">
    <span className="text-fluid-sm text-gray-600">
      表示: <span className="font-semibold text-gray-800">
        {loading ? '...' : (
          <NumberTicker value={totalCount} suffix="件" delay={delay} />
        )}
      </span>
    </span>
    {selectedCount > 0 && (
      <span className="text-fluid-sm text-theme-accent-text">
        選択: <span className="font-semibold">
          <NumberTicker value={selectedCount} suffix="件" delay={0} />
        </span>
      </span>
    )}
  </span>
);

export default DataCountDisplay;
