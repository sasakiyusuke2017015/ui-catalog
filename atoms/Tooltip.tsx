import React from 'react';

export interface TooltipProps {
  /** ツールチップのテキスト */
  content: string;
  /** 表示位置 */
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

/**
 * CSS のみの即時ツールチップ
 * ホバーで遅延なく表示される
 */
export default function Tooltip({ content, position = 'bottom', children }: TooltipProps) {
  const positionStyles: Record<string, React.CSSProperties> = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 4 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 4 },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 4 },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 4 },
  };

  return (
    <span className="relative inline-flex group" data-component="tooltip">
      {children}
      <span
        className="absolute z-50 px-2 py-1 text-[11px] font-medium whitespace-nowrap rounded bg-gray-800 text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-100"
        style={positionStyles[position]}
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
}
