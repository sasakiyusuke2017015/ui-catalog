import { useState, ReactNode } from 'react';

import { Animated } from '../atoms/Animated';
import Icon from '../atoms/Icon';
import { ICON_NAMES } from '../constants';

interface ToggleableSectionProps {
  /** タイトル文字列、またはカスタムヘッダー要素 */
  title: string | ReactNode;
  /** ボーダー色（HSL/Hex値、またはTailwindクラス） */
  borderColor: string;
  /** 初期表示状態（非制御モード用） */
  defaultOpen?: boolean;
  /** 開閉状態（制御モード用：指定するとcontrolled componentになる） */
  isOpen?: boolean;
  children: ReactNode;
  onToggle?: (isOpen: boolean) => void;
  hoverBgColor?: string;
  /** ボタン（タイトル）部分の背景色 */
  buttonBgColor?: string;
  /** コンテンツ（開いた時の中身）部分の背景色 */
  contentBgColor?: string;
  /** カードの角丸設定 */
  cardRadius?: string;
  /** セクションのマージン（デフォルト: mb-4 sm:mb-8） */
  marginClass?: string;
  /** コンテンツ部分のパディング */
  contentPadding?: string;
}

const ToggleableSection: React.FC<ToggleableSectionProps> = ({
  title,
  borderColor,
  defaultOpen = true,
  isOpen: controlledIsOpen,
  children,
  onToggle,
  hoverBgColor = 'hover:bg-blue-100/80',
  buttonBgColor = 'bg-white/80',
  contentBgColor = 'bg-white/60',
  cardRadius = '0.5rem',
  marginClass = 'mb-4 sm:mb-8',
  contentPadding = 'mx-2 px-2 py-2 sm:mx-4 sm:px-4 sm:py-4',
}) => {
  // 制御モード（isOpen prop が指定されている場合）か非制御モードかを判定
  const isControlled = controlledIsOpen !== undefined;
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  const [contentKey, setContentKey] = useState(0);

  // borderColorがTailwindクラス形式かCSS色値かを判定
  const isTailwindClass = borderColor.startsWith('border-');
  const colorValue = isTailwindClass
    ? undefined // Tailwindクラスの場合はinline styleは使わない
    : borderColor;

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (!isControlled) {
      setInternalIsOpen(newIsOpen);
    }
    if (newIsOpen) {
      setContentKey((prev) => prev + 1);
    }
    onToggle?.(newIsOpen);
  };

  // タイトルがstring型かどうかで aria-label を決定
  const ariaLabel = typeof title === 'string' ? `${title}セクションの表示を切り替える` : 'セクションの表示を切り替える';

  return (
    <section className={marginClass} data-component="toggleable-section">
      <button
        className={`border-l-4 ${buttonBgColor} ${isTailwindClass ? borderColor : ''} pl-3 text-fluid-xl font-bold text-gray-800 flex items-center cursor-pointer ${hoverBgColor} transition-colors duration-200 py-2 pr-3 w-full text-left`}
        style={{ borderLeftColor: colorValue || undefined, borderRadius: cardRadius }}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <Animated type="rotate" show={isOpen} className="mr-2 flex-shrink-0">
          <Icon
            name={ICON_NAMES.REGULAR.CHEVRON_DOWN}
            size={24}
            style={colorValue ? { color: colorValue } : undefined}
            className={isTailwindClass ? borderColor.replace('border-', 'text-') : undefined}
          />
        </Animated>
        {typeof title === 'string' ? <span>{title}</span> : title}
      </button>
      <div
        className={`overflow-hidden transition-all ${
          isOpen
            ? 'max-h-[5000px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        style={{
          transition: 'max-height 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 600ms ease-in-out',
        }}
      >
        <div
          key={contentKey}
          className={`${contentPadding} ${contentBgColor} transition-all ${
            isOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-5 scale-95 opacity-0'
          }`}
          style={{
            transition: 'transform 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 600ms ease-in-out',
            borderBottomLeftRadius: cardRadius,
            borderBottomRightRadius: cardRadius,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ToggleableSection;
