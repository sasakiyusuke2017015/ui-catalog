// src/components/common/molecules/StepIndicator.tsx
import { FC } from 'react';

import Icon from '../atoms/Icon';
import { type IconName, type LoadingIconName } from '../constants';
import { cn } from '../utils/cn';

export type StepStatus = 'completed' | 'in_progress' | 'pending';

export interface Step {
  /** ステップのラベル */
  label: string;
  /** ステップの状態 */
  status: StepStatus;
  /** in_progress時に表示するローディングアイコン（デフォルト: loading-spinner） */
  loadingIcon?: LoadingIconName;
  /** completed時に表示するアイコン（デフォルト: チェックマーク） */
  completedIcon?: IconName;
}

export interface StepIndicatorProps {
  /** ステップの配列 */
  steps: Step[];
  /** タイトル（省略可） */
  title?: string;
  /** 完了ステップの色（デフォルト: green） */
  completedColor?: 'green' | 'blue' | 'purple' | 'teal';
  /** 進行中ステップの色（デフォルト: blue） */
  activeColor?: 'green' | 'blue' | 'purple' | 'teal' | 'orange';
  /** カスタムクラス */
  className?: string;
  /** アニメーションを有効にする（デフォルト: true） */
  animated?: boolean;
}

// 色設定
const colorConfig = {
  green: {
    bg: 'bg-green-500',
    text: 'text-green-600',
    line: 'bg-green-500',
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    line: 'bg-blue-500',
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    line: 'bg-purple-500',
  },
  teal: {
    bg: 'bg-teal-500',
    text: 'text-teal-600',
    line: 'bg-teal-500',
  },
  orange: {
    bg: 'bg-orange-500',
    text: 'text-orange-600',
    line: 'bg-orange-500',
  },
};

/**
 * StepIndicator - ステップの進捗を視覚的に表示するコンポーネント
 *
 * ユースケース:
 * - フォームウィザード
 * - オンボーディングプロセス
 * - 注文/配送状況
 * - タスク進捗
 */
const StepIndicator: FC<StepIndicatorProps> = ({
  steps,
  title,
  completedColor = 'green',
  activeColor = 'blue',
  className,
  animated = true,
}) => {
  const completedColors = colorConfig[completedColor];
  const activeColors = colorConfig[activeColor];

  // アニメーション用のトランジションクラス
  const transitionClasses = animated
    ? 'transition-all duration-500 ease-out'
    : '';

  return (
    <div className={cn('space-y-4 rounded-xl border-2 border-gray-300 bg-white p-6', className)} data-component="step-indicator">
      {title && (
        <div className="text-fluid-lg font-bold text-gray-800">{title}</div>
      )}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const loadingIcon = step.loadingIcon || 'spinner';

          // 次のステップの状態に基づいてコネクターの色を決定
          const nextStep = steps[index + 1];
          const isConnectorCompleted = step.status === 'completed' && nextStep?.status !== 'pending';

          // ラベルの色
          const getLabelColor = () => {
            switch (step.status) {
              case 'completed':
                return completedColors.text;
              case 'in_progress':
                return activeColors.text;
              default:
                return 'text-gray-400';
            }
          };

          // ステップアイコンのアニメーションクラス
          const getStepIconClasses = () => {
            const baseClasses = 'w-10 h-10 rounded-full flex items-center justify-center';
            if (!animated) return baseClasses;
            return cn(baseClasses, 'transition-all duration-500 ease-out');
          };

          return (
            <div key={index} className="contents">
              {/* ステップ */}
              <div className="flex flex-col items-center">
                {step.status === 'completed' && (
                  <div
                    className={cn(
                      getStepIconClasses(),
                      'text-white',
                      completedColors.bg
                    )}
                  >
                    {step.completedIcon ? (
                      <Icon name={step.completedIcon} size={20} stroke="white" />
                    ) : (
                      '✓'
                    )}
                  </div>
                )}
                {step.status === 'in_progress' && (
                  <div
                    className={cn(
                      getStepIconClasses(),
                      activeColors.bg
                    )}
                  >
                    <Icon name={loadingIcon} size={20} stroke="white" fill="white" />
                  </div>
                )}
                {step.status === 'pending' && (
                  <div
                    className={cn(
                      getStepIconClasses(),
                      'bg-gray-200 text-gray-400'
                    )}
                  >
                    {index + 1}
                  </div>
                )}
                <span className={cn('text-fluid-xs mt-2', transitionClasses, getLabelColor())}>
                  {step.label}
                </span>
              </div>

              {/* コネクター（侵食アニメーション付き） */}
              {!isLast && (
                <div className="relative flex-1 h-1 mx-2 bg-gray-200 overflow-hidden rounded-full">
                  <div
                    className={cn(
                      'absolute inset-y-0 left-0 rounded-full',
                      isConnectorCompleted ? completedColors.line : 'bg-transparent',
                      animated
                        ? 'transition-all duration-700 ease-out'
                        : '',
                      isConnectorCompleted ? 'w-full' : 'w-0'
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
