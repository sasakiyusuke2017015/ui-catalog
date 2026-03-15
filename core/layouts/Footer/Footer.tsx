import React from 'react';

import { cn } from '../../utils/cn';

export interface FooterProps {
  /** フッターの高さ（px） */
  height: number;
  /** 下からのオフセット（BottomTabBar などがある場合） */
  bottomOffset?: number;
  /** 左からのオフセット（SideNav の幅など） */
  leftOffset?: number;
  /** フッターコンテンツ */
  children?: React.ReactNode;
  /** 追加の className */
  className?: string;
  /** 追加のスタイル */
  style?: React.CSSProperties;
}

/**
 * 汎用フッターコンポーネント
 *
 * 固定位置で画面下部に表示されるフッター。
 * leftOffset / bottomOffset で SideNav や BottomTabBar との連携が可能。
 */
export function Footer({
  height,
  bottomOffset = 0,
  leftOffset = 0,
  children,
  className,
  style,
}: FooterProps) {
  if (!children) return null;

  return (
    <footer
      className={cn(
        'fixed right-0 border-t border-gray-200 bg-gray-100 p-2 transition-all duration-300',
        className
      )}
      style={{
        height: `${height}px`,
        bottom: `${bottomOffset}px`,
        left: `${leftOffset}px`,
        zIndex: 20,
        ...style,
      }}
      data-component="Footer"
    >
      {children}
    </footer>
  );
}

export default Footer;
