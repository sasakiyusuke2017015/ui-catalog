import React from 'react';

import { cn } from '../utils/cn';

export interface HeaderProps {
  /** ヘッダーの高さ（px） */
  height: number;
  /** 背景色 */
  bgColor?: string;
  /** テキスト色 */
  textColor?: string;
  /** 下部ボーダー色 */
  borderColor?: string;
  /** 左側コンテンツ（ロゴ、パンくずリストなど） */
  leftContent?: React.ReactNode;
  /** 中央コンテンツ */
  centerContent?: React.ReactNode;
  /** 右側コンテンツ（ユーザーメニューなど） */
  rightContent?: React.ReactNode;
  /** 追加の className */
  className?: string;
  /** 追加のスタイル */
  style?: React.CSSProperties;
}

/**
 * 汎用ヘッダーコンポーネント
 *
 * 固定位置で画面上部に表示されるヘッダー。
 * スロット式で左・中央・右のコンテンツを自由に配置可能。
 */
export function Header({
  height,
  bgColor,
  textColor,
  borderColor,
  leftContent,
  centerContent,
  rightContent,
  className,
  style,
}: HeaderProps) {
  return (
    <header
      className={cn('fixed left-0 right-0 top-0 z-50', className)}
      style={{
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
        borderBottom: borderColor ? `3px solid ${borderColor}` : undefined,
        ...style,
      }}
      data-component="Header"
    >
      <div className="flex h-full items-center px-1 lg:px-2">
        <div className="flex w-full items-center justify-between">
          {/* 左コンテンツ */}
          {leftContent}

          {/* 中央コンテンツ */}
          {centerContent}

          {/* 右コンテンツ */}
          {rightContent}
        </div>
      </div>
    </header>
  );
}

export default Header;
