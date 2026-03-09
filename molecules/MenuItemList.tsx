import { FC, ReactNode, Children, cloneElement, isValidElement, ReactElement } from 'react';

import { IconName } from '../constants';

import MenuItem from './MenuItem';

export interface MenuItemData {
  icon?: ReactNode | IconName;
  label?: string;
  onClick?: () => void;
}

interface MenuItemListProps {
  menuHeader?: ReactNode;
  menuItems?: MenuItemData[]; // 後方互換性のため
  children?: ReactNode; // 新しい方法: MenuItemList.Item を使用
  onClose?: () => void;
}

interface MenuItemListItemProps {
  children: ReactNode;
  onClick?: () => void;
  index?: number;
  preventClose?: boolean;
}

const MenuItemListItem: FC<MenuItemListItemProps> = ({
  children,
  onClick,
  index = 0,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="cursor-pointer px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
      style={{
        animation: 'menuItemSlide 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        animationDelay: `${index * 100}ms`,
        opacity: 0,
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="menuitem"
      tabIndex={0}
      data-component="menu-item-list-item"
    >
      {children}
    </div>
  );
};

interface MenuItemListComponent extends FC<MenuItemListProps> {
  Item: typeof MenuItemListItem;
}

/**
 * メニューアイテムリストコンポーネント
 * DropdownMenu内で表示されるヘッダーとメニューアイテムのリストを管理
 */
const MenuItemList: FC<MenuItemListProps> = ({
  menuHeader,
  menuItems,
  children,
  onClose,
}) => {
  // 子要素にindexを自動付与
  const processedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child) && child.type === MenuItemListItem) {
      const childElement = child as ReactElement<MenuItemListItemProps>;
      const originalOnClick = childElement.props.onClick;
      const preventClose = childElement.props.preventClose;
      return cloneElement(childElement, {
        index,
        onClick: () => {
          if (originalOnClick) {
            originalOnClick();
          }
          // preventCloseがtrueの場合はメニューを閉じない
          if (onClose && !preventClose) {
            onClose();
          }
        }
      });
    }
    return child;
  });
  return (
    <div data-component="menu-item-list">
      {/* ヘッダー部分 */}
      {menuHeader && (
        <div className="border-b border-gray-200 px-4 py-3">{menuHeader}</div>
      )}

      {/* メニューアイテム（新しい方法: children） */}
      {children && <div className="py-1">{processedChildren}</div>}

      {/* メニューアイテム（古い方法: menuItems配列、後方互換性） */}
      {menuItems && menuItems.length > 0 && (
        <div className="py-1">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Compound Component パターン
const MenuItemListWithItem = MenuItemList as MenuItemListComponent;
MenuItemListWithItem.Item = MenuItemListItem;

export default MenuItemListWithItem;
