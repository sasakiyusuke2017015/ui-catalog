import { useState, useEffect, useRef } from 'react';

import { type ColorTheme, type IconName } from '../constants';
import Icon from '../atoms/Icon';
import type { LoadingPreset } from '../atoms/Icon/types';

interface LoadingOverlayProps {
  message?: string;
  /** @deprecated preset を使用してください */
  icon?: IconName;
  /** ローディングプリセット（iconより優先） */
  preset?: LoadingPreset;
  /** アイコンサイズ（デフォルト: 64） */
  iconSize?: number;
  /** カラーテーマ（未指定時はグローバルテーマを使用） - 現在は未使用 */
  colorTheme?: ColorTheme;
  /** 表示状態（このpropで制御する場合） */
  isVisible?: boolean;
  /** 最低表示時間(ms) - ローディングが短すぎるフラッシュを防止 */
  minDisplayTime?: number;
  /** 非表示完了時のコールバック */
  onHideComplete?: () => void;
  /** アクセント背景色 - Layout から props で渡す */
  accentBgColor?: string;
}

export default function LoadingOverlay({
  message = "データを読み込んでいます...",
  icon,
  preset,
  iconSize = 64,
  isVisible = true,
  minDisplayTime = 500,
  onHideComplete,
  accentBgColor = '#3b82f6', // デフォルト値（blue-500）
}: LoadingOverlayProps) {

  // 最低表示時間の制御
  const [showOverlay, setShowOverlay] = useState(isVisible);
  const visibleStartTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      // 表示開始
      setShowOverlay(true);
      visibleStartTimeRef.current = Date.now();
    } else if (visibleStartTimeRef.current !== null) {
      // 非表示要求 - 最低表示時間をチェック
      const elapsed = Date.now() - visibleStartTimeRef.current;
      const remaining = minDisplayTime - elapsed;

      if (remaining > 0) {
        // 最低表示時間に満たない場合は待機
        const timer = setTimeout(() => {
          setShowOverlay(false);
          visibleStartTimeRef.current = null;
          onHideComplete?.();
        }, remaining);
        return () => clearTimeout(timer);
      } else {
        // 最低表示時間を超えている場合は即座に非表示
        setShowOverlay(false);
        visibleStartTimeRef.current = null;
        onHideComplete?.();
      }
    } else {
      // 初回レンダリング時でisVisible=falseの場合
      setShowOverlay(false);
    }
  }, [isVisible, minDisplayTime, onHideComplete]);

  if (!showOverlay) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center" style={{ zIndex: 10000 }} data-component="loading-overlay">
      <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-xl">
        <div className="flex flex-col items-center">
          {preset || icon ? (
            <Icon
              preset={preset}
              name={!preset ? icon : undefined}
              size={iconSize}
              className="mb-4"
              style={{ color: accentBgColor }}
            />
          ) : (
            <div
              className="animate-spin rounded-full h-16 w-16 border-b-4 mb-4"
              style={{ borderColor: accentBgColor }}
            ></div>
          )}
          <p className="text-fluid-lg text-gray-700 font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
}