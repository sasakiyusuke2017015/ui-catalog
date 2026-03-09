import React from 'react';

import { cn } from '../utils/cn';

export interface SubHeaderProps {
  /** ヘッダーからのオフセット（px） */
  topOffset: number;
  /** 左からのオフセット（SideNav の幅など） */
  leftOffset?: number;
  /** サブヘッダーのコンテンツ */
  children?: React.ReactNode;
  /** 追加の className */
  className?: string;
  /** 追加のスタイル */
  style?: React.CSSProperties;
  /** DOM参照用のref */
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * 汎用サブヘッダーコンポーネント
 *
 * Header の下に固定位置で表示されるサブヘッダー。
 * タブやフィルター、追加のコントロールなどを配置可能。
 */
export function SubHeader({
  topOffset,
  leftOffset = 0,
  children,
  className,
  style,
  innerRef,
}: SubHeaderProps) {
  return (
    <div
      ref={innerRef}
      className={cn('fixed right-0 z-20', className)}
      style={{
        top: `${topOffset}px`,
        left: `${leftOffset}px`,
        transition: 'left 300ms ease-in-out',
        ...style,
      }}
      data-component="SubHeader"
    >
      {children}
    </div>
  );
}

export default SubHeader;
