// src/components/common/molecules/Breadcrumb.tsx
import { FC, CSSProperties } from 'react';

import InternalLink from '../../atoms/InternalLink/InternalLink';
import { type ColorTheme } from '../../constants';
import styles from './Breadcrumb.module.scss';

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
  const getSizeClass = (size?: 'sm' | 'md' | 'lg' | 'xl') => {
    const sizeMap = {
      sm: styles['breadcrumb__current--sm'],
      md: styles['breadcrumb__current--md'],
      lg: styles['breadcrumb__current--lg'],
      xl: styles['breadcrumb__current--xl'],
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

  const navClasses = [styles.breadcrumb, className].filter(Boolean).join(' ');

  return (
    <nav className={navClasses} aria-label="breadcrumb" data-component="breadcrumb">
      <ul className={styles.breadcrumb__list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.breadcrumb__item}>
              {!isLast ? (
                <>
                  <InternalLink
                    href={item.href}
                    showIcon={false}
                    className={styles.breadcrumb__link}
                    style={getLinkStyle()}
                  >
                    <span title={item.tooltip}>
                      {item.label}
                    </span>
                  </InternalLink>
                  <span
                    className={styles.breadcrumb__separator}
                    style={getSeparatorStyle()}
                  >
                    {separator}
                  </span>
                </>
              ) : (
                <span
                  className={[styles.breadcrumb__current, getSizeClass(item.size)].join(' ')}
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
