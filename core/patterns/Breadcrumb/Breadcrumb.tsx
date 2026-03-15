// src/components/common/molecules/Breadcrumb.tsx
import { FC, CSSProperties } from 'react';

import InternalLink from '../../components/InternalLink/InternalLink';
import { type ColorTheme } from '../../constants';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href: string;
  tooltip?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
  /** カラーテーマ（未指定時はグローバルテーマを使用） - 現在は未使用 */
  colorTheme?: ColorTheme;
  /** プライマリコントラストテキスト色 - Layout から props で渡す */
  primaryContrastText?: string;
}

/**
 * パンくずリストコンポーネント
 * ページの階層構造をナビゲーション可能なリンクとして表示
 */
const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  separator = '>',
  className = '',
  primaryContrastText = '#ffffff', // デフォルト値（白）
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  // ヘッダー内で使用されるかどうかを判定
  const isInHeader = className.includes('breadcrumb-in-header');

  // サイズに応じたクラスを取得
  const getSizeClasses = (size?: 'sm' | 'md' | 'lg' | 'xl') => {
    const sizeMap = {
      sm: 'text-fluid-sm',
      md: 'text-fluid-base',
      lg: 'text-fluid-lg',
      xl: 'text-fluid-xl',
    };
    return sizeMap[size || 'sm'];
  };

  // スタイルの切り替え（ヘッダー内はテーマ色を使用）
  const getLinkStyle = (): CSSProperties | undefined => {
    if (!isInHeader) return { color: '#2563eb' }; // blue-600
    return { color: primaryContrastText }; // テーマから受け取った色
  };

  const getSeparatorStyle = (): CSSProperties | undefined => {
    if (!isInHeader) return { color: '#9ca3af' }; // gray-400
    return { color: primaryContrastText }; // テーマから受け取った色
  };

  const getLastItemStyle = (): CSSProperties | undefined => {
    if (!isInHeader) return { color: '#374151' }; // gray-700
    return { color: primaryContrastText }; // テーマから受け取った色
  };

  return (
    <nav className={cn('flex items-center', className)} aria-label="breadcrumb" data-component="breadcrumb">
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <InternalLink
                    to={item.href}
                    showIcon={false}
                    className="text-fluid-sm hover:underline hover:opacity-80"
                    style={getLinkStyle()}
                  >
                    <span title={item.tooltip}>
                      {item.label}
                    </span>
                  </InternalLink>
                  <span
                    className="mx-2 text-fluid-sm"
                    style={getSeparatorStyle()}
                  >
                    {separator}
                  </span>
                </>
              ) : (
                <span
                  className={cn(getSizeClasses(item.size), "font-semibold")}
                  style={getLastItemStyle()}
                  title={item.tooltip}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
