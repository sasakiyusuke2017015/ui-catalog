/**
 * InteractiveTable - インタラクティブテーブルコンポーネント
 *
 * state管理・hooks結合・JSX組み立てを担当。
 * 各機能は専用hookに分離済み:
 *   useCellStyles       - セル色・ボーダー・マーチングアンツ計算
 *   useColumnResize     - 列リサイズロジック
 *   useCellSelection    - セル選択・ドラッグ・自動スクロール
 *   useKeyboardNavigation - キーボードナビゲーション
 *   renderCellContent   - セルコンテンツ描画
 *   VirtualizedTableBody - 仮想化テーブルボディ
 */
import { useState, useRef, useCallback, useEffect, useMemo, type FC } from 'react';

import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

import { Checkbox } from '../../../core/atoms/Checkbox';
import LoadingZone from '../../../core/organisms/LoadingZone/LoadingZone';
import { getConditionalAnimationStyle, ANIMATIONS } from '../../../core/constants';
import { cn } from '../../../core/utils/cn';

import type {
  Column,
  CellBgType,
  TableRowData,
  InteractiveTableProps,
} from './types';
import VirtualizedTableBody from './VirtualizedTableBody';
import { useCellStyles } from './useCellStyles';
import { useColumnResize } from './useColumnResize';
import { useCellSelection } from './useCellSelection';
import { useKeyboardNavigation } from './useKeyboardNavigation';
import { createRenderCellContent } from './renderCellContent';

const InteractiveTable: FC<InteractiveTableProps> = ({
  columns = [],
  data = [],
  onCellClick,
  focusedRow,
  setFocusedRow,
  focusedCell,
  setFocusedCell,
  tableClassName = '',
  rowClassName,
  cellClassName,
  headerClassName = '',
  enableRowHighlight = true,
  enableRowColors = true,
  colorField = null,
  colorMap = {},
  highlightField = null,
  highlightColor = 'text-blue-500',
  loading = false,
  loadingHeight = '360px',
  loadingMessage = 'データを読み込み中...',
  onRowHover,
  onRowFocus,
  onLinkClick,
  onInternalLinkClick,
  enableKeyboardNavigation = false,
  onKeyboardNavigation,
  heightPercent = 60,
  heightOffset = 0,
  heightOffsetCss,
  enableSelection = false,
  selectedRows,
  onSelectionChange,
  enableCellSelection = false,
  selectedCells,
  onCellSelectionChange,
  enableColumnAnimation = false,
  draggingColumn = null,
  columnWidthsResetKey = 0,
  enableRowAnimation = true,
  rowAnimationVariant = 'slideDown',
  borderRadius = '4px',
  headerBgColor,
  headerTextColor,
  backgroundHeaderBgColor,
  tableHeaderBgColor = '#64748b',
  tableHeaderTextColor = '#ffffff',
  enableVirtualization = false,
  virtualRowHeight = 48,
  virtualOverscan = 10,
}) => {
  // アニメーション設定
  const rowAnimationConfig = ANIMATIONS.tableRow[rowAnimationVariant as keyof typeof ANIMATIONS.tableRow];

  // テーマカラーから背景色・文字色を導出
  const resolvedHeaderBgColor = headerBgColor ?? tableHeaderBgColor;
  const resolvedHeaderTextColor = headerTextColor ?? tableHeaderTextColor;
  const resolvedBackgroundHeaderBgColor = backgroundHeaderBgColor ?? resolvedHeaderBgColor;

  // refs
  const tableRefs = useRef<(HTMLElement | null)[][]>([]);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // ヘッダー高さ同期用
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const mainHeaderRef = useCallback((node: HTMLTableSectionElement | null) => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }

    if (node) {
      setHeaderHeight(node.offsetHeight);
      resizeObserverRef.current = new ResizeObserver(() => {
        setHeaderHeight(node.offsetHeight);
      });
      resizeObserverRef.current.observe(node);
    }
  }, []);

  // 動的な高さを管理
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);

  useEffect(() => {
    if (heightOffsetCss) return;

    const updateHeight = () => {
      const availableHeight = window.innerHeight;
      const calculatedHeight =
        (availableHeight - heightOffset) * (heightPercent / 100);
      setDynamicHeight(calculatedHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [heightPercent, heightOffset, heightOffsetCss]);

  // --- Hooks ---

  // 列リサイズ
  const {
    handleResizeStart,
    getColumnProportion,
  } = useColumnResize({
    columns,
    enableSelection,
    columnWidthsResetKey,
  });

  // セル選択
  const {
    selectionStart,
    setSelectionStart,
    selectionEnd,
    setSelectionEnd,
    copiedRange,
    setCopiedRange,
    activeRange,
    actualFocusedRow,
    actualSetFocusedRow,
    actualFocusedCell,
    actualSetFocusedCell,
    actualSelectedRows,
    actualSetSelectedRows,
    handleSelectAll,
    handleSelectRow,
    handleCellMouseDown,
    handleCellMouseEnter,
    getSelectedRowIndices,
    skipNextScrollRef,
  } = useCellSelection({
    data,
    enableCellSelection,
    enableKeyboardNavigation,
    focusedRow,
    setFocusedRow,
    focusedCell,
    setFocusedCell,
    selectedRows,
    onSelectionChange,
    selectedCells,
    onCellSelectionChange,
    tableContainerRef,
    scrollContainerRef,
    tableRefs,
  });

  // セルスタイル
  const {
    getCellBorderStyle,
    getCellSelectionStyle,
    getMarchingAntsClass,
    getCellColorTypes,
    getCellColorStyle,
    getRowClassName,
    getCellStyle,
  } = useCellStyles({
    activeRange,
    copiedRange,
    selectionStart,
    borderRadius,
    rowClassName,
    data,
    enableRowColors,
    colorField,
    colorMap,
    highlightField,
    highlightColor,
  });

  // キーボードナビゲーション
  const {
    handleKeyDown,
    handleCellClick,
  } = useKeyboardNavigation({
    data,
    columns,
    enableKeyboardNavigation,
    enableCellSelection,
    enableSelection,
    selectionStart,
    setSelectionStart,
    selectionEnd,
    setSelectionEnd,
    copiedRange,
    setCopiedRange,
    activeRange,
    actualFocusedRow,
    actualSetFocusedRow,
    actualFocusedCell,
    actualSetFocusedCell,
    actualSelectedRows,
    actualSetSelectedRows,
    getSelectedRowIndices,
    skipNextScrollRef,
    tableContainerRef,
    tableRefs,
    onCellClick,
    onKeyboardNavigation,
    onLinkClick,
    onInternalLinkClick,
  });

  // セルコンテンツ描画関数
  const renderCellContent = useMemo(
    () => createRenderCellContent({
      actualFocusedCell,
      onLinkClick,
      onInternalLinkClick,
    }),
    [actualFocusedCell, onLinkClick, onInternalLinkClick]
  );

  // --- 高さ計算 ---
  const cssHeight = heightOffsetCss
    ? `calc((100vh - (${heightOffsetCss})) * ${heightPercent / 100})`
    : undefined;
  const jsHeight = dynamicHeight > 0 ? `${dynamicHeight}px` : `${heightPercent}vh`;
  const resolvedHeight = cssHeight ?? jsHeight;

  const containerStyle: React.CSSProperties = {
    height: resolvedHeight,
    maxHeight: resolvedHeight,
    minHeight: resolvedHeight,
    flexShrink: 0,
    boxSizing: 'border-box',
    position: 'relative',
    borderTopLeftRadius: borderRadius,
  };

  // --- ヘッダー描画ヘルパー ---
  const renderCheckboxHeader = () => {
    if (!enableSelection) return null;
    return (
      <th
        className="relative border-0 border-r border-white/40 border-b-2 border-b-gray-300 p-3"
        style={{
          width: '3%',
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          backgroundColor: resolvedHeaderBgColor,
          color: resolvedHeaderTextColor,
        }}
      >
        <div className="flex justify-center items-center">
          <Checkbox
            checked={actualSelectedRows.length === data.length && data.length > 0}
            onChange={(e) => handleSelectAll(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
            size="medium"
          />
        </div>
      </th>
    );
  };

  // --- VirtualizedTableBody の共通props ---
  const virtualizedBodyProps = {
    data,
    columns,
    scrollContainerRef,
    estimateRowHeight: virtualRowHeight,
    overscan: virtualOverscan,
    enableSelection,
    selectedRows: actualSelectedRows,
    onSelectRow: handleSelectRow,
    onCellClick: handleCellClick,
    onCellMouseDown: handleCellMouseDown,
    onCellMouseEnter: handleCellMouseEnter,
    onRowHover,
    onRowFocus,
    getRowClassName,
    getColumnProportion,
    getCellStyle,
    getCellColorTypes,
    getCellColorStyle,
    getCellSelectionStyle,
    getMarchingAntsClass,
    renderCellContent,
    enableRowHighlight,
    cellClassName,
    tableRefs,
  };

  // --- 通常tbody描画ヘルパー ---
  const renderNormalTbody = (useMotion: boolean) => (
    <tbody className="border-t-0">
      {data.map((row, rowIndex) => {
        const isSelected = actualSelectedRows.includes(rowIndex);
        return (
          <tr
            key={enableRowAnimation ? `row-${rowIndex}-${data.length}` : rowIndex}
            className={cn(
              getRowClassName(rowIndex),
              rowIndex === 0 && 'border-t-0',
              'transform-gpu'
            )}
            style={getConditionalAnimationStyle(enableRowAnimation, rowAnimationConfig, rowIndex)}
            onMouseEnter={() => onRowHover?.(rowIndex)}
            onMouseLeave={() => onRowHover?.(null)}
            onClick={() => onRowFocus?.(rowIndex)}
          >
            {enableSelection && (
              <td
                className="p-3"
                style={{
                  width: '3%',
                  ...getCellBorderStyle({ top: 'normal', bottom: 'normal', left: 'normal', right: 'normal' }, rowIndex, true)
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center items-center">
                  <Checkbox
                    checked={isSelected}
                    onChange={(e) => handleSelectRow(rowIndex, e.target.checked)}
                    size="medium"
                  />
                </div>
              </td>
            )}
            {useMotion ? (
              <AnimatePresence mode="popLayout">
                {columns.map((col, colIndex) => renderMotionCell(col, colIndex, row, rowIndex))}
              </AnimatePresence>
            ) : (
              columns.map((col, colIndex) => renderNormalCell(col, colIndex, row, rowIndex))
            )}
          </tr>
        );
      })}
    </tbody>
  );

  // --- セル描画ヘルパー ---
  const renderCellCommon = (col: Column, colIndex: number, row: TableRowData, rowIndex: number) => {
    const originalCellStyles = getCellStyle(row);
    const customCellClass = cellClassName
      ? cellClassName(rowIndex, colIndex, col, row)
      : '';

    const cellColorTypes = getCellColorTypes(rowIndex, colIndex, row);
    const cellColorStyle = getCellColorStyle(cellColorTypes);
    const isFirstCol = !enableSelection && colIndex === 0;
    const cellSelectionStyle = getCellSelectionStyle(rowIndex, colIndex, isFirstCol);

    const hoverBg: CellBgType = cellColorTypes.cellBg;
    const hoverClass = hoverBg === 'default' && enableRowHighlight
      ? 'hover:bg-blue-100/50'
      : '';

    const marchingAntsClass = getMarchingAntsClass(rowIndex, colIndex);

    const mergedStyle: React.CSSProperties = {
      ...originalCellStyles,
      width: getColumnProportion(col),
      ...cellColorStyle,
      ...cellSelectionStyle,
    };

    const classes = cn(
      'cursor-pointer overflow-hidden p-3 align-top',
      hoverClass,
      col.dataFontSize ?? 'text-fluid-sm',
      col.whiteSpace === 'nowrap' ? 'whitespace-nowrap'
        : col.whiteSpace === 'pre' ? 'whitespace-pre'
        : col.whiteSpace === 'pre-wrap' ? 'whitespace-pre-wrap'
        : 'whitespace-normal',
      col.dataAlign === 'left' ? 'text-left'
        : col.dataAlign === 'right' ? 'text-right'
        : /text-(left|right|center)/.test(customCellClass) ? customCellClass
        : cn(customCellClass, 'text-center'),
      marchingAntsClass,
    );

    return { mergedStyle, classes, marchingAntsClass };
  };

  const renderMotionCell = (col: Column, colIndex: number, row: TableRowData, rowIndex: number) => {
    const { mergedStyle, classes } = renderCellCommon(col, colIndex, row, rowIndex);
    const isDragging = draggingColumn === col.accessor;

    return (
      <motion.td
        key={col.accessor}
        ref={(el: HTMLTableCellElement | null) => {
          tableRefs.current[rowIndex] ||= [];
          tableRefs.current[rowIndex][colIndex] = el;
        }}
        layoutId={`cell-${rowIndex}-${col.accessor}`}
        layout="position"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
        className={cn(classes, isDragging && 'bg-blue-50/80')}
        style={{
          ...mergedStyle,
          scale: isDragging ? 1.02 : 1,
          transformOrigin: 'left center',
        }}
        onClick={() => handleCellClick(rowIndex, colIndex, col)}
        onMouseDown={(e: React.MouseEvent) => handleCellMouseDown(rowIndex, colIndex, e)}
        onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
      >
        {renderCellContent(col, row, rowIndex, colIndex)}
      </motion.td>
    );
  };

  const renderNormalCell = (col: Column, colIndex: number, row: TableRowData, rowIndex: number) => {
    const { mergedStyle, classes } = renderCellCommon(col, colIndex, row, rowIndex);

    return (
      <td
        key={colIndex}
        ref={(el) => {
          tableRefs.current[rowIndex] ||= [];
          tableRefs.current[rowIndex][colIndex] = el;
        }}
        className={classes}
        style={mergedStyle}
        onClick={() => handleCellClick(rowIndex, colIndex, col)}
        onMouseDown={(e) => handleCellMouseDown(rowIndex, colIndex, e)}
        onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
      >
        {renderCellContent(col, row, rowIndex, colIndex)}
      </td>
    );
  };

  // --- JSX ---
  return (
    <LoadingZone
      loading={loading}
      variant="table"
      height={loadingHeight}
      message={loadingMessage}
      className="rounded-lg"
      accentTextColor={resolvedHeaderTextColor}
      primaryBgColor={resolvedHeaderBgColor}
    >
      <div
        ref={tableContainerRef}
        className={cn(
          'flex flex-col bg-white shadow-lg',
          enableKeyboardNavigation && 'focus:outline-none'
        )}
        style={containerStyle}
        tabIndex={enableKeyboardNavigation ? 0 : undefined}
        onKeyDown={enableKeyboardNavigation ? handleKeyDown : undefined}
        role={enableKeyboardNavigation ? 'region' : undefined}
        aria-label={
          enableKeyboardNavigation ? 'Interactive table container' : undefined
        }
        data-component="interactive-table"
      >
        <div
          className="relative min-h-0 flex-1 overflow-hidden"
          style={{ borderRadius }}
        >
          <div ref={scrollContainerRef} className="relative h-full overflow-auto">
            {/* ヘッダー裏の背景（角丸の下の隙間を埋める） */}
            {headerHeight > 0 && (
              <div
                className="pointer-events-none sticky left-0 right-0 top-0 z-[5]"
                style={{
                  borderRadius,
                  backgroundColor: resolvedBackgroundHeaderBgColor,
                  marginBottom: `-${headerHeight}px`,
                  height: `${headerHeight}px`,
                }}
                aria-hidden="true"
              />
            )}

            {enableColumnAnimation ? (
              <LayoutGroup>
                <table
                  className={cn('w-full border-separate', tableClassName)}
                  style={{ borderSpacing: 0, tableLayout: 'fixed' }}
                >
                  <thead
                    ref={mainHeaderRef}
                    className={cn(headerClassName, 'sticky top-0 z-10 border-0')}
                    style={{ borderRadius, color: resolvedHeaderTextColor }}
                  >
                    <tr>
                      {renderCheckboxHeader()}
                      <AnimatePresence mode="popLayout">
                        {columns.map((col, idx) => {
                          const isDragging = draggingColumn === col.accessor;
                          return (
                            <motion.th
                              key={col.accessor}
                              layoutId={`header-${col.accessor}`}
                              layout="position"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ type: 'tween', duration: 0.1, ease: 'easeOut' }}
                              className={cn(
                                'relative border-0 border-r border-white/40 border-b-2 border-b-gray-300 p-3 font-semibold tracking-wide last:border-r-0',
                                col.headAlign === 'center' ? 'text-center' : col.headAlign === 'right' ? 'text-right' : 'text-left',
                                col.headFontSize ?? 'text-fluid-xs',
                                isDragging && 'z-20'
                              )}
                              style={{
                                width: getColumnProportion(col),
                                scale: isDragging ? 1.02 : 1,
                                transformOrigin: 'left center',
                                borderBottomLeftRadius: borderRadius,
                                borderBottomRightRadius: borderRadius,
                                backgroundColor: resolvedHeaderBgColor,
                                color: resolvedHeaderTextColor,
                              }}
                            >
                              {col.label}
                              {idx < columns.length - 1 && (
                                <div
                                  className="absolute top-0 z-20 h-full w-3 cursor-col-resize transition-colors hover:bg-white/50"
                                  style={{ right: 0, transform: 'translateX(55%)' }}
                                  onMouseDown={(e) => handleResizeStart(e, idx)}
                                  title="列幅を調整"
                                />
                              )}
                            </motion.th>
                          );
                        })}
                      </AnimatePresence>
                    </tr>
                  </thead>
                  {enableVirtualization ? (
                    <VirtualizedTableBody
                      {...virtualizedBodyProps}
                      enableColumnAnimation={true}
                      draggingColumn={draggingColumn}
                    />
                  ) : (
                    renderNormalTbody(true)
                  )}
                </table>
              </LayoutGroup>
            ) : (
              <table
                className={cn('w-full border-separate', tableClassName)}
                style={{ borderSpacing: 0, tableLayout: 'fixed' }}
              >
                <thead
                  ref={mainHeaderRef}
                  className={cn(headerClassName, 'sticky top-0 z-10 border-0')}
                  style={{ borderRadius, color: resolvedHeaderTextColor }}
                >
                  <tr>
                    {renderCheckboxHeader()}
                    {columns.map((col, idx) => (
                      <th
                        key={idx}
                        className={cn(
                          'relative border-0 border-r border-white/40 border-b-2 border-b-gray-300 p-3 font-semibold tracking-wide last:border-r-0',
                          col.headAlign === 'center' ? 'text-center' : col.headAlign === 'right' ? 'text-right' : 'text-left',
                          col.headFontSize ?? 'text-fluid-xs'
                        )}
                        style={{
                          width: getColumnProportion(col),
                          borderBottomLeftRadius: borderRadius,
                          borderBottomRightRadius: borderRadius,
                          backgroundColor: resolvedHeaderBgColor,
                          color: resolvedHeaderTextColor,
                        }}
                      >
                        {col.label}
                        {idx < columns.length - 1 && (
                          <div
                            className="absolute top-0 z-20 h-full w-3 cursor-col-resize transition-colors hover:bg-white/50"
                            style={{ right: 0, transform: 'translateX(55%)' }}
                            onMouseDown={(e) => handleResizeStart(e, idx)}
                            title="列幅を調整"
                          />
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                {enableVirtualization ? (
                  <VirtualizedTableBody {...virtualizedBodyProps} />
                ) : (
                  renderNormalTbody(false)
                )}
              </table>
            )}
          </div>
        </div>
      </div>
    </LoadingZone>
  );
};

export default InteractiveTable;
