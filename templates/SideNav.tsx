import React from 'react';

import { cn } from '../utils/cn';

export interface SideNavProps {
  /** サイドナビの幅（px） */
  width: number;
  /** ヘッダーからのオフセット（px） */
  topOffset: number;
  /** 開閉状態 */
  isOpen?: boolean;
  /** 背景色 */
  bgColor?: string;
  /** ナビゲーションアイテム */
  children?: React.ReactNode;
  /** 追加の className */
  className?: string;
  /** 追加のスタイル */
  style?: React.CSSProperties;
}

/**
 * 汎用サイドナビコンポーネント
 *
 * 固定位置で画面左側に表示されるサイドナビゲーション。
 * isOpen で開閉状態を制御可能。
 */
export function SideNav({
  width,
  topOffset,
  isOpen = true,
  bgColor,
  children,
  className,
  style,
}: SideNavProps) {
  return (
    <div
      className={cn('fixed transition-all duration-300 ease-in-out', className)}
      style={{
        width: `${width}px`,
        top: `${topOffset}px`,
        bottom: 0,
        left: isOpen ? 0 : `-${width}px`,
        zIndex: 9999,
        backgroundColor: bgColor,
        ...style,
      }}
      data-component="SideNav"
    >
      {/* コンテンツエリア */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default SideNav;
