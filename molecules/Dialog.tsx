// src/components/common/molecules/Dialog.tsx
import { FC, useEffect } from 'react';

import { createPortal } from 'react-dom';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { ICON_NAMES } from '../constants';

export type DialogType = 'info' | 'warning' | 'error' | 'success' | 'danger';

interface DialogBaseProps {
  isOpen: boolean;
  title?: string;
  message: string;
  type?: DialogType;
  /** borderRadius（形状設定用） - Layout から props で渡す */
  borderRadius?: string;
}

interface AlertDialogProps extends DialogBaseProps {
  variant?: 'alert';
  onClose: () => void;
  confirmText?: string;
  // confirm用のpropsは不要
  onConfirm?: never;
  onCancel?: never;
  cancelText?: never;
}

interface ConfirmDialogProps extends DialogBaseProps {
  variant: 'confirm';
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  // alert用のpropsは不要
  onClose?: never;
}

export type DialogProps = AlertDialogProps | ConfirmDialogProps;

// タイプ別のアイコンと色設定
const typeConfig = {
  info: {
    icon: ICON_NAMES.REGULAR.INFO_CIRCLE,
    iconColor: 'text-blue-500',
    headerBg: 'bg-blue-50',
  },
  warning: {
    icon: ICON_NAMES.REGULAR.INFO_TRIANGLE,
    iconColor: 'text-yellow-500',
    headerBg: 'bg-yellow-50',
  },
  error: {
    icon: ICON_NAMES.REGULAR.INFO_CIRCLE,
    iconColor: 'text-red-500',
    headerBg: 'bg-red-50',
  },
  success: {
    icon: ICON_NAMES.REGULAR.CHECK_CIRCLE,
    iconColor: 'text-green-500',
    headerBg: 'bg-green-50',
  },
  danger: {
    icon: ICON_NAMES.REGULAR.INFO_TRIANGLE,
    iconColor: 'text-red-500',
    headerBg: 'bg-red-50',
  },
};

/**
 * 汎用ダイアログコンポーネント
 * variant='alert': window.alertの代替（OKボタンのみ）
 * variant='confirm': window.confirmの代替（キャンセル+確定ボタン）
 */
const Dialog: FC<DialogProps> = (props) => {
  const {
    isOpen,
    title,
    message,
    type = 'info',
    variant = 'alert',
    borderRadius = '0.5rem', // デフォルト値
  } = props;

  const isConfirm = variant === 'confirm';

  // 閉じる処理
  const handleClose = () => {
    if (isConfirm) {
      (props as ConfirmDialogProps).onCancel();
    } else {
      (props as AlertDialogProps).onClose();
    }
  };

  // 確定処理
  const handleConfirm = () => {
    if (isConfirm) {
      (props as ConfirmDialogProps).onConfirm();
    } else {
      (props as AlertDialogProps).onClose();
    }
  };

  // キーボードイベント
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
      // alertの場合のみEnterで閉じる
      if (!isConfirm && event.key === 'Enter') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isConfirm]);

  if (!isOpen) return null;

  const config = typeConfig[type];
  const confirmText = props.confirmText || (isConfirm ? '確定' : 'OK');
  const cancelText = isConfirm ? ((props as ConfirmDialogProps).cancelText || 'キャンセル') : undefined;

  // 背景クリックで閉じる
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30"
      style={{ zIndex: 10000 }}
      onClick={handleBackgroundClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      }}
      role="button"
      tabIndex={-1}
      aria-label="Close dialog"
      data-component="dialog"
      data-variant={variant}
      data-type={type}
    >
      <div className="w-full max-w-[90%] sm:max-w-md bg-white shadow-xl" style={{ borderRadius }}>
        {/* ヘッダー */}
        {title && (
          <div className={`flex items-center gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-4 ${config.headerBg}`}>
            <Icon name={config.icon} size={24} className={config.iconColor} />
            <h3 className="text-fluid-lg font-bold text-gray-800">{title}</h3>
          </div>
        )}

        {/* メッセージ */}
        <div className="px-3 py-3 sm:px-6 sm:py-4">
          {!title && (
            <div className="mb-3 flex justify-center">
              <Icon name={config.icon} size={48} className={config.iconColor} />
            </div>
          )}
          <p className="whitespace-pre-wrap text-gray-700">{message}</p>
        </div>

        {/* ボタン */}
        <div className="flex justify-end gap-2 px-3 py-3 sm:px-6 sm:py-4">
          {isConfirm && (
            <Button variant="secondary" size="small" onClick={handleClose}>
              {cancelText}
            </Button>
          )}
          <Button
            variant={type === 'danger' ? 'danger' : 'primary'}
            size="small"
            onClick={handleConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
