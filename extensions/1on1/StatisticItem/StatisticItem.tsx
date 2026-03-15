// src/components/common/molecules/StatisticItem.tsx
import React from 'react';

export interface StatisticItemProps {
  /** 丸印の背景色（Tailwindクラス、例: "bg-blue-500"） */
  dotColor: string;
  /** ラベルテキスト */
  label: string;
  /** ラベルのテキスト色（Tailwindクラス、例: "text-blue-600"） */
  labelColor: string;
  /** 表示する値 */
  value: string | number;
  /** 単位（例: "名", "件"）（オプション） */
  unit?: string;
}

/**
 * 統計情報の個別項目を表示するコンポーネント
 * 丸印 + ラベル + 値 + 単位 の形式で表示
 */
const StatisticItem: React.FC<StatisticItemProps> = ({
  dotColor,
  label,
  labelColor,
  value,
  unit,
}) => {
  return (
    <span className="flex items-center gap-1 text-fluid-xs" data-component="statistic-item">
      <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`}></span>
      <span className={`font-semibold ${labelColor}`}>{label}</span>
      <span className="text-gray-800">
        {value}
        {unit}
      </span>
    </span>
  );
};

export default StatisticItem;
