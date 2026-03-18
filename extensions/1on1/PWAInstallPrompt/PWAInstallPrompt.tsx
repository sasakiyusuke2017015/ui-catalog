import { FC, useEffect, useState } from 'react';
import { Button } from '../../../core/atoms/Button';
import { useOperationLog } from '../../../infra/devtools';


interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * PWA インストールプロンプト
 * beforeinstallprompt イベントをハンドリングしてインストールボタンを表示
 */
const PWAInstallPrompt: FC = () => {
  const log = useOperationLog('PWAInstallPrompt');
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
    log('install', {});
    if (!deferredPrompt) return;

    // インストールプロンプトを表示
    await deferredPrompt.prompt();

    // ユーザーの選択結果を待つ
    const { outcome } = await deferredPrompt.userChoice;

    log('install-outcome', { outcome });

    // プロンプトをクリア
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    log('dismiss', {});
    setShowPrompt(false);
  };

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in" data-component="pwa-install-prompt">
      <div className="rounded-lg bg-white p-4 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 className="text-fluid-sm font-semibold text-gray-900 dark:text-white">
              アプリをインストール
            </h3>
            <p className="mt-1 text-fluid-xs text-gray-600 dark:text-gray-300">
              ホーム画面に追加して、アプリのように使用できます
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="閉じる"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-3 flex gap-2">
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
