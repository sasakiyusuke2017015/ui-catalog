/**
 * TransferList コンポーネント
 *
 * 2つのリスト間でアイテムを移動させる汎用コンポーネント
 * - 左側: 有効/閲覧可能などのアイテム
 * - 右側: 無効/閲覧不可などのアイテム
 * - チェックボックスで選択 → ボタンで移動
 */
import { useState, useCallback, useMemo } from 'react';

import { Checkbox } from '../../../core/atoms';
import type { TransferListProps, TransferListItem } from './types';

/**
 * TransferList コンポーネント
 */
function TransferList<T extends TransferListItem = TransferListItem>({
  leftItems,
  rightItems,
  leftLabel,
  rightLabel,
  toRightLabel = '→',
  toLeftLabel = '←',
  leftIcon,
  rightIcon,
  onChange,
  loading = false,
  minHeight = '300px',
}: TransferListProps<T>) {
  // 左側の選択状態
  const [leftSelected, setLeftSelected] = useState<Set<string>>(new Set());
  // 右側の選択状態
  const [rightSelected, setRightSelected] = useState<Set<string>>(new Set());

  // 左側の選択可能なアイテム数
  const leftSelectableCount = useMemo(
    () => leftItems.filter(item => !item.disabled).length,
    [leftItems]
  );

  // 右側の選択可能なアイテム数
  const rightSelectableCount = useMemo(
    () => rightItems.filter(item => !item.disabled).length,
    [rightItems]
  );

  // 左側のチェックボックス変更
  const handleLeftCheck = useCallback((id: string, checked: boolean) => {
    setLeftSelected(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }, []);

  // 右側のチェックボックス変更
  const handleRightCheck = useCallback((id: string, checked: boolean) => {
    setRightSelected(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }, []);

  // 左側の全選択/解除
  const handleLeftSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      const selectableIds = leftItems.filter(item => !item.disabled).map(item => item.id);
      setLeftSelected(new Set(selectableIds));
    } else {
      setLeftSelected(new Set());
    }
  }, [leftItems]);

  // 右側の全選択/解除
  const handleRightSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      const selectableIds = rightItems.filter(item => !item.disabled).map(item => item.id);
      setRightSelected(new Set(selectableIds));
    } else {
      setRightSelected(new Set());
    }
  }, [rightItems]);

  // 左→右に移動（無効化）
  const handleMoveToRight = useCallback(() => {
    if (leftSelected.size === 0 || loading) return;

    const itemsToMove = leftItems.filter(item => leftSelected.has(item.id) && !item.disabled);
    const remainingLeft = leftItems.filter(item => !leftSelected.has(item.id) || item.disabled);
    const newRight = [...rightItems, ...itemsToMove];

    onChange(remainingLeft, newRight);
    setLeftSelected(new Set());
  }, [leftItems, rightItems, leftSelected, onChange, loading]);

  // 右→左に移動（有効化）
  const handleMoveToLeft = useCallback(() => {
    if (rightSelected.size === 0 || loading) return;

    const itemsToMove = rightItems.filter(item => rightSelected.has(item.id) && !item.disabled);
    const remainingRight = rightItems.filter(item => !rightSelected.has(item.id) || item.disabled);
    const newLeft = [...leftItems, ...itemsToMove];

    onChange(newLeft, remainingRight);
    setRightSelected(new Set());
  }, [leftItems, rightItems, rightSelected, onChange, loading]);

  // アイテムカードのレンダリング
  const renderItem = useCallback((
    item: T,
    selected: boolean,
    onCheck: (id: string, checked: boolean) => void
  ) => {
    const isDisabled = item.disabled || loading;

    return (
      <div
        key={item.id}
        className={`
          flex items-center gap-3 p-3 rounded-lg border transition-all
          ${isDisabled ? 'cursor-not-allowed bg-gray-50' : 'cursor-pointer hover:border-blue-300 hover:shadow-sm'}
          ${selected && !isDisabled ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white'}
        `}
        onClick={() => !isDisabled && onCheck(item.id, !selected)}
      >
        <Checkbox
          checked={selected}
          disabled={isDisabled}
          onChange={(e) => onCheck(item.id, e.target.checked)}
          size="medium"
          variant="primary"
        />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-800 truncate">{item.label}</div>
          {item.subLabel && (
            <div className="text-fluid-xs text-gray-500 truncate">{item.subLabel}</div>
          )}
        </div>
        {item.disabled && item.disabledReason && (
          <div className="flex-shrink-0 text-fluid-xs text-gray-400">
            {item.disabledReason}
          </div>
        )}
      </div>
    );
  }, [loading]);

  // 左側の全選択状態
  const isLeftAllSelected = leftSelectableCount > 0 && leftSelected.size === leftSelectableCount;
  const isLeftIndeterminate = leftSelected.size > 0 && leftSelected.size < leftSelectableCount;

  // 右側の全選択状態
  const isRightAllSelected = rightSelectableCount > 0 && rightSelected.size === rightSelectableCount;
  const isRightIndeterminate = rightSelected.size > 0 && rightSelected.size < rightSelectableCount;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* 左側リスト */}
      <div className="flex-1">
        <div
          className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4"
          style={{ minHeight }}
        >
          {/* ヘッダー */}
          <div className="flex items-center gap-2 mb-3">
            {leftIcon}
            <h4 className="font-semibold text-gray-800">{leftLabel}</h4>
            <span className="text-fluid-sm text-gray-500">({leftItems.length})</span>
          </div>

          {/* 全選択 */}
          {leftSelectableCount > 0 && (
            <div className="mb-2">
              <Checkbox
                checked={isLeftAllSelected || isLeftIndeterminate}
                onChange={(e) => handleLeftSelectAll(e.target.checked)}
                disabled={loading}
                size="small"
                variant="primary"
                label="すべて選択"
              />
            </div>
          )}

          {/* アイテムリスト */}
          <div className="space-y-2">
            {leftItems.length > 0 ? (
              leftItems.map(item => renderItem(item, leftSelected.has(item.id), handleLeftCheck))
            ) : (
              <div className="text-center text-gray-400 py-8">
                アイテムがありません
              </div>
            )}
          </div>
        </div>

        {/* 無効化ボタン */}
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={handleMoveToRight}
            disabled={leftSelected.size === 0 || loading}
            className={`
              px-4 py-2 rounded-lg text-fluid-sm font-medium transition-all
              ${leftSelected.size > 0 && !loading
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            {toRightLabel}
          </button>
        </div>
      </div>

      {/* 右側リスト */}
      <div className="flex-1">
        <div
          className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4"
          style={{ minHeight }}
        >
          {/* ヘッダー */}
          <div className="flex items-center gap-2 mb-3">
            {rightIcon}
            <h4 className="font-semibold text-gray-800">{rightLabel}</h4>
            <span className="text-fluid-sm text-gray-500">({rightItems.length})</span>
          </div>

          {/* 全選択 */}
          {rightSelectableCount > 0 && (
            <div className="mb-2">
              <Checkbox
                checked={isRightAllSelected || isRightIndeterminate}
                onChange={(e) => handleRightSelectAll(e.target.checked)}
                disabled={loading}
                size="small"
                variant="primary"
                label="すべて選択"
              />
            </div>
          )}

          {/* アイテムリスト */}
          <div className="space-y-2">
            {rightItems.length > 0 ? (
              rightItems.map(item => renderItem(item, rightSelected.has(item.id), handleRightCheck))
            ) : (
              <div className="text-center text-gray-400 py-8">
                アイテムがありません
              </div>
            )}
          </div>
        </div>

        {/* 有効化ボタン */}
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={handleMoveToLeft}
            disabled={rightSelected.size === 0 || loading}
            className={`
              px-4 py-2 rounded-lg text-fluid-sm font-medium transition-all
              ${rightSelected.size > 0 && !loading
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            {toLeftLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferList;
export type { TransferListProps, TransferListItem } from './types';
