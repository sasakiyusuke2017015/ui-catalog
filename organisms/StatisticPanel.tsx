// src/components/common/organisms/StatisticPanel.tsx
import React, { useMemo } from 'react';

import LoadingZone from '../molecules/LoadingZone';
import PieChart from '../molecules/PieChart';
import StatisticList, {
  type StatisticListProps,
} from '../molecules/StatisticList';
import { COLOR_MAP, type LoadingIconName } from '../constants';

/** ステータス定義の型（SCHEMASのStatusItemと互換） */
export interface StatusDefinition {
  value: number;
  color: string;
  label: string;
  shortLabel: string;
}

/** 統計アイテムの型（簡易版） */
export interface StatisticItem {
  statusDef: StatusDefinition;
  value: number;
  /** ラベル上書き（指定しない場合はstatusDefのshortLabelを使用） */
  label?: string;
}

export interface StatisticPanelProps {
  /** 統計アイテム配列（新しい簡易API） */
  items?: StatisticItem[];
  /** PieChartのデータ（オプション、後方互換性のため残す） */
  pieChartData?: Array<{ name: string; value: number; color: string }>;
  /** 統計項目のリスト（後方互換性のため残す） */
  statisticsItems?: StatisticListProps['items'];
  /** 合計のラベル（例: "全"）（オプション） */
  totalLabel?: string;
  /** 合計の値（オプション） */
  totalValue?: number;
  /** 合計の単位（例: "名", "件"）（オプション） */
  totalUnit?: string;
  /** items使用時の各項目の単位（デフォルト: "名"） */
  unit?: string;
  /** ローディング状態 */
  loading?: boolean;
  /** ローディングアイコンの名前 */
  loadingIconName?: LoadingIconName;
  /** ローディングアイコンのサイズ */
  loadingIconSize?: number;
  /** ローディングアイコンの色 */
  loadingIconColor?: string;
  /** データがない場合のメッセージ */
  emptyMessage?: string;
}

/**
 * 統計情報パネルコンポーネント
 * PieChart（オプション）+ StatisticList を表示し、ローディング状態も管理
 */
const StatisticPanel: React.FC<StatisticPanelProps> = ({
  items,
  pieChartData: pieChartDataProp,
  statisticsItems: statisticsItemsProp,
  totalLabel,
  totalValue,
  totalUnit,
  unit = '名',
  loading = false,
  loadingIconName,
  loadingIconSize = 40,
  loadingIconColor,
  emptyMessage = '該当データなし',
}) => {
  // itemsが渡された場合、pieChartDataとstatisticsItemsを自動生成
  // 値が0の項目は表示しない
  const pieChartData = useMemo(() => {
    if (items) {
      return items
        .filter(({ value }) => value > 0)
        .map(({ statusDef, value, label }) => ({
          name: label ?? statusDef.shortLabel,
          value,
          color: COLOR_MAP[statusDef.color as keyof typeof COLOR_MAP]?.hex || '#cccccc',
        }));
    }
    return pieChartDataProp;
  }, [items, pieChartDataProp]);

  const statisticsItems = useMemo(() => {
    if (items) {
      return items
        .filter(({ value }) => value > 0)
        .map(({ statusDef, value, label }) => {
          const colorMap = COLOR_MAP[statusDef.color as keyof typeof COLOR_MAP] || {
            bg: 'bg-gray-100',
            text: 'text-gray-800',
          };
          return {
            dotColor: colorMap.bg,
            label: label ?? statusDef.label,
            labelColor: colorMap.text,
            value,
            unit,
          };
        });
    }
    return statisticsItemsProp;
  }, [items, statisticsItemsProp, unit]);

  const hasData = totalValue !== undefined && totalValue > 0;

  return (
    <LoadingZone
      loading={loading}
      variant="inline"
      iconName={loadingIconName}
      size={loadingIconSize}
      fill={loadingIconColor}
    >
      {hasData ? (
        <div className="flex items-end gap-4" data-component="statistic-panel" data-testid="statistics-panel">
          {pieChartData && <PieChart data={pieChartData} unit={unit} />}
          {statisticsItems && (
            <StatisticList
              items={statisticsItems}
              totalLabel={totalLabel}
              totalValue={totalValue}
              totalUnit={totalUnit}
            />
          )}
        </div>
      ) : (
        <span>{emptyMessage}</span>
      )}
    </LoadingZone>
  );
};

export default StatisticPanel;
