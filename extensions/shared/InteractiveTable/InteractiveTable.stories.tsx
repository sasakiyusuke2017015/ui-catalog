import { useState } from 'react';

import type { StoryFn } from '@storybook/react';

import { isNullish } from '../../../core/utils/isNullish';

import InteractiveTable from './InteractiveTable';
import type { InteractiveTableProps, Column, TableRowData, LinkData, InternalLinkData } from './types';

/**
 * インタラクティブテーブルコンポーネント
 *
 * 行選択、色分け、ホバー効果、キーボードナビゲーションなど、
 * ユーザー操作に対応したテーブルコンポーネントです。
 */
export default {
  title: 'データ操作/InteractiveTable',
  component: InteractiveTable,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <div className="min-h-screen bg-gray-50 p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    columns: {
      description: 'テーブルのカラム定義配列',
      control: 'object',
    },
    data: {
      description: '表示するデータの配列',
      control: 'object',
    },
    searchable: {
      description: '検索機能の有効/無効',
      control: 'boolean',
    },
    enableRowHighlight: {
      description: '行フォーカス時のハイライト表示',
      control: 'boolean',
    },
    enableKeyboardNavigation: {
      description: 'キーボードナビゲーション機能',
      control: 'boolean',
    },
    onCellClick: { action: 'cell clicked' },
    onRowHover: { action: 'row hovered' },
    onRowFocus: { action: 'row focused' },
  },
  parameters: {
    docs: {
      description: {
        component: `
InteractiveTableコンポーネント。以下の機能をサポート:

- **rowStyleType**: 'red', 'green', 'yellow'による行の色分け
- **ホバー効果**: hover時の色変化とアニメーション
- **フォーカス管理**: 行クリック時の青い枠線表示
- **キーボードナビゲーション**: 矢印キー、Tab、Enter対応
- **リンクカラム**: 外部・内部リンクの表示
- **検索機能**: 特定列での絞り込み検索

業務システムでのデータ一覧表示に最適です。
        `,
      },
    },
  },
};

// 基本的なカラム定義
const basicColumns = [
  { accessor: 'id', label: 'ID', proportion: '80px' },
  { accessor: 'name', label: '名前', proportion: '150px' },
  { accessor: 'department', label: '部署', proportion: '120px' },
  { accessor: 'status', label: 'ステータス', proportion: '100px' },
];

// 基本的なデータ
const basicData = [
  { id: '001', name: '山田太郎', department: '開発部', status: 'アクティブ' },
  {
    id: '002',
    name: '佐藤花子',
    department: 'デザイン部',
    status: 'アクティブ',
  },
  { id: '003', name: '鈴木一郎', department: '営業部', status: '休暇中' },
  { id: '004', name: '田中美咲', department: '開発部', status: 'アクティブ' },
  { id: '005', name: '伊藤健太', department: '企画部', status: 'アクティブ' },
];

// メモ履歴カラム定義
const memoColumns = [
  { accessor: 'month', label: '月', proportion: '15%' },
  { accessor: 'memo', label: 'メモ', proportion: '50%' },
  { accessor: 'nextAction', label: '次回アクション', proportion: '35%' },
];

// インタラクティブな例のためのラッパーコンポーネント
function InteractiveTableWrapper({
  columns,
  data,
  ...props
}: {
  columns: Column[];
  data: TableRowData[];
  [key: string]: unknown;
}) {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  return (
    <InteractiveTable
      columns={columns}
      data={data}
      focusedRow={focusedRow}
      setFocusedRow={setFocusedRow}
      {...props}
    />
  );
}

// 基本的なテーブル
export const Basic = {
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: true,
    searchColumn: 'name',
    enableRowHighlight: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '基本的なInteractiveTable。検索機能、行ハイライト、ホバー効果を含む標準的な使用例',
      },
    },
  },
};

// rowStyleType機能
export const RowStyleTypes = {
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: memoColumns,
    data: [
      {
        month: '2025/10',
        memo: '今月のメモです。重要な情報が含まれています。',
        nextAction: '来月までに対応が必要です。',
        rowStyleType: 'red',
      },
      {
        month: '2025/09',
        memo: '先月のメモです。完了済みの項目です。',
        nextAction: '完了しました。',
        rowStyleType: 'green',
      },
      {
        month: '2025/08',
        memo: '注意が必要な項目があります。',
        nextAction: '確認中です。',
        rowStyleType: 'yellow',
      },
      {
        month: '2025/07',
        memo: '通常のメモです。特に問題ありません。',
        nextAction: '特になし。',
      },
    ],
    searchable: false,
    enableRowHighlight: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'rowStyleType機能のデモ。red/green/yellow/defaultの色分けとhover効果を確認できます。',
      },
    },
  },
};

// ホバー・フォーカス効果
const HoverAndFocusDemo = (args: InteractiveTableProps) => {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-4 rounded-lg bg-blue-50 p-4">
        <p className="mb-2 text-fluid-sm font-medium text-blue-800">
          ホバー・フォーカス効果デモ
        </p>
        <div className="space-y-1 text-fluid-xs text-blue-600">
          <p>
            フォーカス行:{' '}
            {!isNullish(focusedRow) ? `${focusedRow + 1}行目` : 'なし'}
          </p>
          <p>
            ホバー行: {!isNullish(hoveredRow) ? `${hoveredRow + 1}行目` : 'なし'}
          </p>
        </div>
      </div>
      <InteractiveTable
        {...args}
        focusedRow={focusedRow}
        setFocusedRow={setFocusedRow}
        onRowHover={setHoveredRow}
        onRowFocus={setFocusedRow}
      />
    </div>
  );
};

export const HoverAndFocus = {
  render: (args: InteractiveTableProps) => <HoverAndFocusDemo {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: false,
    enableRowHighlight: true,
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'ホバー・フォーカス効果の確認。行をクリックすると青い枠線が表示され、ホバー時にアニメーション効果が発生します。',
      },
    },
  },
};

// リンクカラム
export const LinkColumns = {
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: [
      { label: 'ID', accessor: 'id', proportion: '80px' },
      {
        label: '名前',
        accessor: 'name',
        cellType: 'internal',
        proportion: '150px',
      },
      {
        label: 'ウェブサイト',
        accessor: 'website',
        cellType: 'link',
        proportion: '200px',
      },
      { label: 'ステータス', accessor: 'status', proportion: '100px' },
    ],
    data: [
      {
        id: '001',
        name: {
          text: '山田太郎',
          to: '/employee/001',
          variant: 'text',
          color: 'primary',
        },
        website: {
          text: 'Google',
          url: 'https://www.google.com',
          target: '_blank',
        },
        status: 'アクティブ',
      },
      {
        id: '002',
        name: {
          text: '佐藤花子',
          to: '/employee/002',
          variant: 'text',
          color: 'primary',
        },
        website: 'https://github.com',
        status: 'アクティブ',
      },
    ],
    searchable: false,
    onLinkClick: (linkData: LinkData, _rowIndex: number, _colIndex: number) => {
      window.alert(`外部リンク: ${linkData.text || linkData.url}`);
    },
    onInternalLinkClick: (linkData: InternalLinkData, _rowIndex: number, _colIndex: number) => {
      window.alert(`内部リンク: ${linkData.text} → ${linkData.to}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'リンクカラムの例。type="link"で外部リンク、type="internal"で内部リンクを作成できます。',
      },
    },
  },
};

// キーボードナビゲーション
const KeyboardNavigationDemo = (args: InteractiveTableProps) => {
  const [focusedRow, setFocusedRow] = useState(0);
  const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });

  return (
    <div>
      <div className="mb-4 rounded-lg bg-green-50 p-4">
        <p className="mb-2 text-fluid-sm font-medium text-green-800">
          キーボードナビゲーション
        </p>
        <div className="space-y-1 text-fluid-xs text-green-600">
          <ul className="list-inside list-disc space-y-1">
            <li>テーブルをクリックしてフォーカス</li>
            <li>矢印キーでセル移動</li>
            <li>Tab/Shift+Tabで次/前のセル</li>
            <li>Home/Endで行の最初/最後</li>
            <li>Ctrl+Home/Endでテーブルの最初/最後</li>
            <li>Enterでセルクリック</li>
          </ul>
        </div>
      </div>
      <InteractiveTable
        {...args}
        focusedRow={focusedRow}
        setFocusedRow={setFocusedRow}
        focusedCell={focusedCell}
        setFocusedCell={setFocusedCell}
        enableKeyboardNavigation={true}
      />
    </div>
  );
};

export const KeyboardNavigation = {
  render: (args: InteractiveTableProps) => <KeyboardNavigationDemo {...args} />,
  args: {
    columns: basicColumns,
    data: basicData,
    searchable: false,
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'キーボードナビゲーション機能。矢印キーやTabキーでテーブル内を移動できます。',
      },
    },
  },
};

// 検索機能
const SearchDemoComponent = (args: InteractiveTableProps) => {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-4 rounded-lg bg-purple-50 p-4">
        <p className="mb-2 text-fluid-sm font-medium text-purple-800">検索機能デモ</p>
        <div className="space-y-1 text-fluid-xs text-purple-600">
          <ul className="list-inside list-disc">
            <li>検索バーに「山田」と入力してEnter</li>
            <li>該当行にフォーカスが移動します</li>
            <li>再検索で次の該当行に移動</li>
          </ul>
        </div>
      </div>
      <InteractiveTable
        {...args}
        focusedRow={focusedRow}
        setFocusedRow={setFocusedRow}
      />
    </div>
  );
};

export const SearchDemo = {
  render: (args: InteractiveTableProps) => <SearchDemoComponent {...args} />,
  args: {
    columns: basicColumns,
    data: [
      ...basicData,
      {
        id: '006',
        name: '山田花子',
        department: '人事部',
        status: 'アクティブ',
      },
      {
        id: '007',
        name: '山田次郎',
        department: '経理部',
        status: 'アクティブ',
      },
    ],
    searchable: true,
    searchColumn: 'name',
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          '検索機能のデモンストレーション。検索バーでの絞り込みとフォーカス移動が確認できます。',
      },
    },
  },
};

// 大量データ（rowStyleType含む）
export const LargeDataset = {
  render: (args: InteractiveTableProps) => <InteractiveTableWrapper {...args} />,
  args: {
    columns: memoColumns,
    data: Array.from({ length: 100 }, (_, i) => {
      const year = 2024 - Math.floor(i / 12);
      const month = (i % 12) + 1;
      const rowStyleTypes = ['red', 'green', 'yellow', undefined];
      const randomStyleType =
        rowStyleTypes[Math.floor(Math.random() * rowStyleTypes.length)];

      return {
        month: `${year}/${String(month).padStart(2, '0')}`,
        memo:
          [
            '重要な議題について話し合いました',
            'プロジェクトの進捗が順調です',
            '課題が発生しており対応が必要',
            'チームメンバーとの連携が良好',
            '新しい取り組みを開始しました',
            '目標を達成することができました',
            '改善点を見つけて対応中です',
            '次の段階に進む準備完了',
          ][Math.floor(Math.random() * 8)] + ` (${i + 1}件目)`,
        nextAction: [
          'レポートを提出する',
          '進捗を報告する',
          'チームと検討する',
          '関係者と調整する',
          '計画を見直す',
          '結果を分析する',
          '新しい目標を設定',
          'フォローアップ継続',
        ][Math.floor(Math.random() * 8)],
        rowStyleType: randomStyleType,
      };
    }),
    searchable: true,
    searchColumn: 'memo',
  },
  parameters: {
    docs: {
      description: {
        story:
          '100件の大量データでのパフォーマンステスト。rowStyleTypeによる色分けとhover効果を確認できます。',
      },
    },
  },
};

// ダッシュボードスタイルテーブル
export const DashboardStyleTable = {
  render: () => {
    const departmentData = [
      {
        department: '営業部',
        satisfaction: 4.1,
        workload: 3.0,
        environment: 3.8,
        relationship: 4.2,
        stress: 2.9,
      },
      {
        department: '開発部',
        satisfaction: 3.6,
        workload: 2.8,
        environment: 3.5,
        relationship: 3.9,
        stress: 1.8,
      },
      {
        department: '人事部',
        satisfaction: 4.3,
        workload: 3.5,
        environment: 4.2,
        relationship: 4.5,
        stress: 3.2,
      },
      {
        department: '財務部',
        satisfaction: 3.9,
        workload: 3.4,
        environment: 3.6,
        relationship: 3.8,
        stress: 2.5,
      },
    ];

    const departmentColumns = [
      { accessor: 'department', label: '部署', proportion: '20%' },
      { accessor: 'satisfaction', label: '満足度', proportion: '16%' },
      { accessor: 'workload', label: '業務負荷', proportion: '16%' },
      { accessor: 'environment', label: '職場環境', proportion: '16%' },
      { accessor: 'relationship', label: '人間関係', proportion: '16%' },
      { accessor: 'stress', label: 'ストレス', proportion: '16%' },
    ];

    return (
      <div className="rounded-2xl border border-gray-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-sm">
        <h2 className="mb-2 flex items-center text-fluid-xl font-bold text-gray-800">
          <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 font-bold text-white shadow-lg">
            2
          </span>
          部署別サマリー
        </h2>
        <InteractiveTable
          columns={departmentColumns}
          data={departmentData}
          cellClassName={(_, __, column, row) => {
            if (
              column.accessor === 'stress' &&
              typeof row.stress === 'number' &&
              row.stress < 2.0
            ) {
              return 'bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-md px-2 py-1';
            }
            if (
              column.accessor !== 'department' &&
              typeof row[column.accessor] === 'number'
            ) {
              const value = row[column.accessor];
              if (
                typeof value === 'number' &&
                !isNullish(value)
              ) {
                if (value >= 4.0) return 'text-green-600 font-semibold';
                if (value >= 3.0) return 'text-blue-600';
                if (value >= 2.0) return 'text-amber-600';
                return 'text-red-600 font-semibold';
              }
            }
            return '';
          }}
          tableClassName="w-full"
        />
      </div>
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'ダッシュボードにおける部署別サマリー表示例。数値に応じた色分けとスタイリング',
      },
    },
  },
};

// アラートスタイルテーブル
export const AlertStyleTable = {
  render: () => {
    const alertsData = [
      {
        name: '山田太郎',
        department: '開発部',
        issue: 'ストレス高',
        duration: '3ヶ月',
        status: '未対応',
      },
      {
        name: '佐藤花子',
        department: '開発部',
        issue: '業務負荷高',
        duration: '2ヶ月',
        status: '対応中',
      },
      {
        name: '鈴木一郎',
        department: '営業部',
        issue: '満足度低下',
        duration: '1ヶ月',
        status: '対応済',
      },
    ];

    const alertColumns = [
      { accessor: 'name', label: 'メンバー名', proportion: '20%' },
      { accessor: 'department', label: '部署', proportion: '15%' },
      { accessor: 'issue', label: '異常項目', proportion: '20%' },
      { accessor: 'duration', label: '連続期間', proportion: '15%' },
      { accessor: 'status', label: '対応状況', proportion: '15%' },
    ];

    return (
      <div className="rounded-2xl border border-gray-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-sm">
        <h2 className="mb-2 flex items-center text-fluid-xl font-bold text-gray-800">
          <span className="mr-3 flex h-8 w-8 animate-pulse items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-rose-500 font-bold text-white shadow-lg">
            3
          </span>
          異常検知・アラート一覧
        </h2>
        <InteractiveTable
          columns={alertColumns}
          data={alertsData}
          cellClassName={(_, __, column, row) => {
            if (column.accessor === 'status') {
              if (row.status === '未対応') {
                return 'bg-gradient-to-r from-red-500 to-red-600 text-white text-center rounded-full px-3 py-1 text-fluid-sm font-medium';
              } else if (row.status === '対応中') {
                return 'bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center rounded-full px-3 py-1 text-fluid-sm font-medium';
              } else if (row.status === '対応済') {
                return 'bg-gradient-to-r from-emerald-500 to-green-600 text-white text-center rounded-full px-3 py-1 text-fluid-sm font-medium';
              }
            }
            if (column.accessor === 'issue') {
              if (row.issue === 'ストレス高' || row.issue === '業務負荷高') {
                return 'text-red-600 font-semibold';
              } else if (row.issue === '満足度低下') {
                return 'text-amber-600 font-semibold';
              }
            }
            return '';
          }}
          rowClassName={(_, row) => {
            if (row.status === '未対応' || row.status === '対応中') {
              return 'bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-200';
            }
            return 'hover:bg-gray-50 transition-all duration-200';
          }}
          tableClassName="w-full"
        />
      </div>
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story: 'アラート一覧表示例。状態や異常項目に応じた警告色とスタイル適用',
      },
    },
  },
};
