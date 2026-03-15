// src/components/common/molecules/StatisticList.tsx
import React from 'react';

import { type StatisticItemProps } from '../StatisticItem/StatisticItem';

export interface StatisticListProps {
  /** 統計項目のリスト */
  items: StatisticItemProps[];
  /** 合計のラベル（例: "全"）（オプション） */
  totalLabel?: string;
  /** 合計の値（オプション） */
  totalValue?: number;
  /** 合計の単位（例: "名", "件"）（オプション） */
  totalUnit?: string;
}

/**
 * 統計情報のリストを表示するコンポーネント
 * StatisticItem を複数並べ、オプションで合計も表示
 */
const StatisticList: React.FC<StatisticListProps> = ({
  items,
  totalLabel,
  totalValue,
  totalUnit,
}) => {
  return (
    <div className="flex items-end gap-3" data-component="statistic-list">
      {/* 左側: 統計項目をグリッドで並べる */}
      <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-1 gap-y-0.5 text-fluid-xs">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className={`inline-block h-2 w-2 rounded-full ${item.dotColor}`}></span>
            <span className={`font-semibold ${item.labelColor}`}>{item.label}</span>
            <span className="text-right tabular-nums text-gray-800">{item.value}</span>
            <span className="text-gray-800">{item.unit}</span>
          </React.Fragment>
        ))}
      </div>

      {/* 合計表示 */}
      {totalLabel !== undefined && totalValue !== undefined && (
        <>
          {items.length > 0 && <span className="text-gray-300">|</span>}
          <span className="flex items-center gap-1 text-fluid-sm">
            <span className="font-semibold text-gray-700">{totalLabel}</span>
            <span className="text-gray-800">
              {totalValue}
              {totalUnit}
            </span>
          </span>
        </>
      )}
    </div>
  );
};

export default StatisticList;
