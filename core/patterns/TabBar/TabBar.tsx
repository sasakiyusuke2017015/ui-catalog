/**
 * 汎用タブバーコンポーネント
 * ラベル表示 + ×で閉じれるシンプルなタブバー
 */
import { FC, Fragment } from 'react';

import { useOperationLog } from '../../../infra/devtools';
import { cn } from '../../utils/cn';

export interface TabItem {
  /** タブの一意識別子 */
  id: string;
  /** タブに表示するラベル */
  label: string;
}

interface TabBarProps {
  /** タブ一覧 */
  tabs: TabItem[];
  /** アクティブなタブID */
  activeTabId: string | null;
  /** タブ選択時のコールバック */
  onSelectTab: (id: string) => void;
  /** タブを閉じる時のコールバック（指定しない場合は×ボタン非表示） */
  onCloseTab?: (id: string) => void;
  /** カスタムクラス名 */
  className?: string;
  /** アクティブタブのカラーテーマ */
  activeColor?: 'green' | 'blue' | 'teal';
  /** ラベルの最大幅 */
  maxLabelWidth?: number;
}

const colorThemes = {
  green: {
    active: 'border-green-500 bg-green-50 text-green-700',
    closeButton: 'text-green-600',
  },
  blue: {
    active: 'border-blue-500 bg-blue-50 text-blue-700',
    closeButton: 'text-blue-600',
  },
  teal: {
    active: 'border-teal-500 bg-teal-50 text-teal-700',
    closeButton: 'text-teal-600',
  },
};

/**
 * 汎用タブバーコンポーネント
 */
const TabBar: FC<TabBarProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  onCloseTab,
  className,
  activeColor = 'green',
  maxLabelWidth = 150,
}) => {
  const log = useOperationLog('TabBar');

  if (tabs.length === 0) {
    return null;
  }

  const handleSelectTab = (id: string, label: string) => {
    log('select', { id, label });
    onSelectTab(id);
  };

  const handleCloseTab = (id: string, label: string) => {
    log('close', { id, label });
    onCloseTab?.(id);
  };

  const theme = colorThemes[activeColor];

  return (
    <div
      className={cn('flex items-center overflow-x-auto bg-white', className)}
      role="tablist"
      data-component="tab-bar"
    >
      {tabs.map((tab, index) => {
        const isActive = tab.id === activeTabId;
        return (
          <Fragment key={tab.id}>
            {/* タブ間のセパレーター */}
            {index > 0 && (
              <div className="h-4 w-px bg-gray-300" />
            )}
            <div
              className={cn(
                'group flex cursor-pointer items-center gap-2 border-b-2 px-4 py-2 transition-colors',
                isActive
                  ? theme.active
                  : 'border-transparent hover:border-gray-300 hover:bg-gray-50'
              )}
            onClick={() => handleSelectTab(tab.id, tab.label)}
            role="tab"
            aria-selected={isActive}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSelectTab(tab.id, tab.label);
              }
            }}
          >
            <span
              className="truncate text-fluid-sm font-medium"
              style={{ maxWidth: `${maxLabelWidth}px` }}
            >
              {tab.label}
            </span>
            {onCloseTab && (
              <button
                className={cn(
                  'ml-1 rounded p-0.5 transition-colors hover:bg-gray-200',
                  isActive
                    ? theme.closeButton
                    : 'text-gray-400 opacity-0 group-hover:opacity-100'
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseTab(tab.id, tab.label);
                }}
                aria-label={`${tab.label}のタブを閉じる`}
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TabBar;
