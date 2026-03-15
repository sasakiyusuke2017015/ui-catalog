import { ReactNode } from 'react';

import { Button } from '../../components/Button';
import Icon from '../../primitives/Icon';


export type LoginButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';
export type LoginButtonSize = 'sm' | 'md' | 'lg';

// ログインボタンの状態を明確に定義
export type LoginButtonState =
  | 'ready'
  | 'authenticating'
  | 'authenticated'
  | 'logout';

export interface LoginButtonStateConfig {
  ready: {
    disabled: boolean;
    showShimmer: boolean;
    variant?: LoginButtonVariant;
  };
  authenticating: {
    disabled: boolean;
    showShimmer: boolean;
    variant?: LoginButtonVariant;
  };
  authenticated: {
    disabled: boolean;
    showShimmer: boolean;
    variant?: LoginButtonVariant;
  };
  logout: {
    disabled: boolean;
    showShimmer: boolean;
    variant?: LoginButtonVariant;
  };
}

interface LoginButtonProps {
  // 基本プロパティ
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;

  // スタイル設定
  variant?: LoginButtonVariant;
  size?: LoginButtonSize;
  fullWidth?: boolean;

  // 新しい状態管理システム
  state?: LoginButtonState;

  // レガシー互換性(既存コードとの互換性のため)
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  successState?: boolean;
}

const LoginButton = ({
  children,
  className = '',
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,

  // 新しい状態管理システム
  state = 'ready',

  // レガシー互換性(既存コードとの互換性のため)
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  successState = false,
}: LoginButtonProps) => {
  // 状態別設定を取得
  const getStateSettings = () => {
    switch (state) {
      case 'authenticating':
        return {
          disabled: true,
          showShimmer: false,
          variant: undefined, // グレー
        };
      case 'authenticated':
        return {
          disabled: true,
          showShimmer: false,
          variant: undefined, // グレー
        };
      case 'logout':
        return {
          disabled: true,
          showShimmer: false,
          variant: 'danger' as LoginButtonVariant,
        };
      default: // ready
        return {
          disabled: false,
          showShimmer: false,
          variant: 'success' as LoginButtonVariant, // 緑
        };
    }
  };

  // バリアント変換(atoms/Buttonのvariantにマッピング)
  const getAtomButtonVariant = (variant: LoginButtonVariant) => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'danger':
        return 'danger';
      case 'success':
        return 'success'; // 緑色の gradient ボタン
      case 'warning':
        return 'secondary'; // atoms/Buttonにはwarningがないのでsecondary
      default:
        return 'primary';
    }
  };

  // サイズ変換(atoms/Buttonのsizeにマッピング)
  const getAtomButtonSize = (size: LoginButtonSize) => {
    switch (size) {
      case 'sm':
        return 'small';
      case 'md':
        return 'medium';
      case 'lg':
        return 'large';
      default:
        return 'medium';
    }
  };

  // 状態別レンダリング関数
  const renderReadyState = () => {
    return (
      <div className="relative flex items-center justify-center px-12">
        {/* 左アイコン - 固定位置 */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform">
          <Icon name={'lock'} className="h-5 w-5" />
        </div>

        {/* 中央テキスト */}
        <span>{children}</span>
      </div>
    );
  };

  const renderAuthenticatingState = () => {
    return (
      <div className="relative flex items-center justify-center px-12">
        {/* 左アイコン - 固定位置 */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform">
          <Icon name={'lock'} className="h-5 w-5" />
        </div>

        {/* 中央テキスト */}
        <span>{loadingText}</span>

        {/* 右アイコン - 固定位置 */}
        <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform">
          <Icon preset="interview" className="h-5 w-5" />
        </div>
      </div>
    );
  };

  const renderAuthenticatedState = () => {
    return (
      <div className="relative flex items-center justify-center px-12">
        {/* 左アイコン - 固定位置(アニメーション付き) */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform">
          <Icon
            name={'unlock'}
            className="h-5 w-5"
            animationTrigger="condition"
            condition={true}
            ease="easeOut"
            duration={1.2}
            repeat={1}
          />
        </div>

        {/* 中央テキスト */}
        <span>認証完了</span>
      </div>
    );
  };

  // 表示内容を決定(破壊的再構築版)
  const getContent = () => {
    // 新しい状態システム優先
    if (state === 'authenticating' || loading) {
      return renderAuthenticatingState();
    }

    if (state === 'authenticated' || successState) {
      return renderAuthenticatedState();
    }

    // デフォルト(ready状態)
    return renderReadyState();
  };

  // 最終的な状態を決定(破壊的再構築版)
  const stateSettings = getStateSettings();
  const finalDisabled = state ? stateSettings.disabled : disabled || loading;
  const shimmerClass =
    state === 'authenticated' && stateSettings.showShimmer
      ? 'login-button-shimmer'
      : '';
  const authenticatedClass =
    state === 'authenticated' ? 'login-button-authenticated' : '';

  // 状態に応じたvariantを決定(状態のvariantが優先、次にpropsのvariant)
  const finalVariant = stateSettings.variant || variant;

  return (
    <Button
      data-component="login-button"
      type={type}
      disabled={finalDisabled}
      onClick={onClick}
      variant={getAtomButtonVariant(finalVariant)}
      size={getAtomButtonSize(size)}
      className={`relative ${fullWidth ? 'w-full' : ''} ${shimmerClass} ${authenticatedClass} ${className}`}
      enableHopEffect={false}
    >
      {getContent()}
    </Button>
  );
};

export default LoginButton;

export const shimmerCSS = `
.login-button-shimmer {
  position: relative;
  overflow: hidden;
}

.login-button-shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: login-shimmer 0.8s ease-out;
  pointer-events: none;
}

@keyframes login-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

`;
