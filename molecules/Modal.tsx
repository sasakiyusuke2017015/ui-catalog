// src/components/common/molecules/Modal.tsx
import { FC, ReactNode, useEffect } from 'react';

import Icon from '../atoms/Icon';
import { useOperationLog } from '../hooks/useOperationLog';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
}

/**
 * 汎用モーダルコンポーネント
 */
const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-full sm:max-w-2xl md:max-w-3xl',
  maxHeight = 'max-h-[80vh]',
  borderRadius = '0.5rem', // デフォルト値
}) => {
  const log = useOperationLog('Modal');

  // モーダルの開閉をログ
  useEffect(() => {
    if (isOpen) {
      log('open', { title });
    }
  }, [isOpen, title, log]);

  // モーダルが開いている時に背景スクロールを無効化
  useEffect(() => {
    if (isOpen) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY;

      // bodyのスクロールを無効化
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        // 元に戻す
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        // スクロール位置を復元
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Escキーでモーダルを閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleEscapeClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // モーダルが開いていない場合は何も表示しない
  if (!isOpen) return null;

  // 背景クリックでモーダルを閉じる
  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      log('close', { title, trigger: 'backdrop' });
      onClose();
    }
  };

  // 閉じるボタンクリック
  const handleCloseClick = () => {
    log('close', { title, trigger: 'button' });
    onClose();
  };

  // Escキーで閉じる
  const handleEscapeClose = () => {
    log('close', { title, trigger: 'escape' });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 10000 }}
      onClick={handleBackgroundClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleEscapeClose();
        }
      }}
      role="button"
      tabIndex={-1}
      aria-label="Close modal"
      data-component="modal"
    >
      <div
        className={`flex ${maxHeight} w-full ${maxWidth} flex-col bg-white shadow-xl`}
        style={{ borderRadius }}
      >
        {/* 固定ヘッダー */}
        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 sm:px-6 sm:py-4">
          <h3 className="text-fluid-xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={handleCloseClick}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon name={'x'} size={24} />
          </button>
        </div>

        {/* スクロール可能なコンテンツ */}
        <div className="overflow-y-auto p-3 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
