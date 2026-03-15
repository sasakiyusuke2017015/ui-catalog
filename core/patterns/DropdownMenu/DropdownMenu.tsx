import { useEffect, useRef, useState, ReactNode, FC, CSSProperties } from 'react';


import { Button } from '../../components/Button';
import Icon from '../../primitives/Icon';
import { type ColorTheme, IconName } from '../../constants';
import { cn } from '../../utils/cn';

type DropdownMenuVariant = 'default' | 'outline';

interface DropdownMenuProps {
  variant?: DropdownMenuVariant; // ボタンのスタイルバリアント
  label?: string;
  icon?: ReactNode | IconName;
  iconShake?: boolean; // アイコンに shake アニメーションを適用
  menuContent: ReactNode | ((closeMenu: () => void) => ReactNode);
  className?: string;
  menuWidth?: string; // メニューの横幅 (例: 'w-72', 'w-auto', 'w-96')
  buttonClassName?: string; // ボタンのカスタムクラス
  /** カラーテーマ（未指定時はグローバルテーマを使用） - 現在は未使用 */
  colorTheme?: ColorTheme;
  /** プライマリコントラストテキスト色 - Layout から props で渡す */
  primaryContrastText?: string;
  /** プライマリオーバーレイアクティブ色 - Layout から props で渡す */
  primaryOverlayActive?: string;
  /** プライマリオーバーレイホバー色 - Layout から props で渡す */
  primaryOverlayHover?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  variant = 'default',
  label,
  icon,
  iconShake = false,
  menuWidth = 'w-72',
  menuContent,
  className = '',
  buttonClassName = '',
  primaryContrastText = '#ffffff', // デフォルト値（white）
  primaryOverlayActive = 'rgba(255, 255, 255, 0.2)', // デフォルト値
  primaryOverlayHover = 'rgba(255, 255, 255, 0.1)', // デフォルト値
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // iconが文字列の場合はIconコンポーネントに変換
  const renderIcon = (
    iconProp?: ReactNode | IconName,
    size: number = 20,
    filled: boolean = false,
    hovered: boolean = false
  ) => {
    if (!iconProp) return null;
    if (typeof iconProp === 'string') {
      return (
        <Icon
          name={iconProp as IconName}
          size={size}
          fill={filled ? 'white' : 'none'}
          shake={iconShake}
          animationTrigger="condition"
          condition={hovered}
          conditionAnimation={iconShake ? undefined : { scale: [1, 1.1] }}
        />
      );
    }
    return iconProp;
  };

  // クリック外で閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // バリアント別のインラインスタイル
  const getButtonStyle = (): CSSProperties => {
    if (variant === 'default') {
      return {
        color: primaryContrastText,
        backgroundColor: isOpen
          ? primaryOverlayActive
          : isHovered
            ? primaryOverlayHover
            : 'transparent',
      };
    }
    // outline variant uses Button component
    return {};
  };

  // ボタンのレンダリング
  const renderButton = () => {
    switch (variant) {
      case 'outline':
        return (
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            leftIcon={typeof icon === 'string' ? (icon as IconName) : undefined}
            enableHopEffect={false}
            className={buttonClassName}
          >
            {label || ''}
          </Button>
        );
      case 'default':
      default:
        return (
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              'relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-fluid-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
              buttonClassName
            )}
            style={getButtonStyle()}
          >
            <span className="relative z-10 flex items-center gap-2">
              {renderIcon(icon, 20, isOpen, isHovered)}
              {label && <span>{label}</span>}
            </span>
          </button>
        );
    }
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef} data-component="dropdown-menu">
      {renderButton()}

      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 animate-in slide-in-from-top-2 fade-in z-50 transform overflow-hidden rounded-xl border-2 border-gray-300 bg-white shadow-2xl backdrop-blur-sm transition-all duration-200 ease-out',
            menuWidth
          )}
        >
          {typeof menuContent === 'function'
            ? menuContent(() => setIsOpen(false))
            : menuContent}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
