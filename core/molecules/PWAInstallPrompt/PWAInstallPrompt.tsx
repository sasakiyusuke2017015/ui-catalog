import { FC, useEffect, useState } from 'react';
import { Button } from '../../atoms/Button';

import styles from './PWAInstallPrompt.module.scss';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * PWA インストールプロンプト
 * beforeinstallprompt イベントをハンドリングしてインストールボタンを表示
 */
const PWAInstallPrompt: FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // デフォルトのインストールプロンプトを抑制
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // 既にインストール済みか確認
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // インストールプロンプトを表示
    await deferredPrompt.prompt();

    // ユーザーの選択結果を待つ
    await deferredPrompt.userChoice;

    // プロンプトをクリア
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className={styles.wrapper} data-component="pwa-install-prompt">
      <div className={styles.card}>
        <div className={styles.contentRow}>
          <div className={styles.contentBody}>
            <h3 className={styles.title}>
              アプリをインストール
            </h3>
            <p className={styles.subtitle}>
              ホーム画面に追加して、アプリのように使用できます
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className={styles.closeButton}
            aria-label="閉じる"
          >
            <svg className={styles.closeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={styles.actions}>
          <Button
            variant="primary"
            size="small"
            onClick={handleInstallClick}
            leftIcon={'check-circle'}
            enableHopEffect={false}
          >
            インストール
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={handleDismiss}
            enableHopEffect={false}
          >
            後で
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
