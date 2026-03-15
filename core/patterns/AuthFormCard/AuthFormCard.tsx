import type { ReactNode } from 'react';

interface AuthFormCardProps {
  children: ReactNode;
  /** コピーライトテキスト */
  copyrightText?: string;
  /** カード外側のマージン（デフォルト: mx-4 mb-4） */
  margin?: string;
  /** カード内側のパディング（デフォルト: px-5 py-6） */
  padding?: string;
}

/**
 * 認証ページ用フォームカード（モバイル版）
 * ログイン・パスワード変更などで使用
 */
const AuthFormCard: React.FC<AuthFormCardProps> = ({
  children,
  copyrightText = '© 2026 SMS DataTech',
  margin = 'mx-4 mb-4',
  padding = 'px-5 py-6',
}) => {
  return (
    <div data-component="auth-form-card" className={`${margin} rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl ${padding}`}>
      <div className="space-y-3 sm:space-y-6">
        {children}
      </div>
      <div className="text-fluid-xs text-slate-400 text-right mt-1 sm:mt-4">
        {copyrightText}
      </div>
    </div>
  );
};

export default AuthFormCard;
