/**
 * RouterAdapter - ルーティングライブラリの抽象化層
 *
 * React Router と Next.js の差分を吸収するためのインターフェース。
 * ui-catalog のコンポーネントはこのインターフェース経由でルーティング機能を使用する。
 */

import type { ComponentType, ReactNode, MouseEvent } from 'react';

/**
 * Link コンポーネントの Props
 */
export interface LinkProps {
  /** リンク先のパス */
  href: string;
  /** 子要素 */
  children: ReactNode;
  /** クラス名 */
  className?: string;
  /** インラインスタイル */
  style?: React.CSSProperties;
  /** クリックイベント */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** data 属性 */
  [key: `data-${string}`]: string | undefined;
}

/**
 * Navigate 関数の型
 * @param path - 遷移先のパス
 * @param options - オプション（replace: 履歴を置き換えるか）
 */
export type NavigateFunction = (
  path: string,
  options?: { replace?: boolean }
) => void;

/**
 * RouterAdapter インターフェース
 *
 * 各ルーティングライブラリ（React Router, Next.js）の実装を提供する。
 */
export interface RouterAdapter {
  /**
   * Link コンポーネント
   * - React Router: <Link to={href}>
   * - Next.js: <Link href={href}>
   */
  Link: ComponentType<LinkProps>;

  /**
   * useNavigate フック
   * - React Router: useNavigate()
   * - Next.js: useRouter().push/replace
   */
  useNavigate: () => NavigateFunction;

  /**
   * usePathname フック
   * - React Router: useLocation().pathname
   * - Next.js: usePathname()
   */
  usePathname: () => string;

  /**
   * useSearchParams フック（オプション）
   * - React Router: useSearchParams()
   * - Next.js: useSearchParams()
   */
  useSearchParams?: () => URLSearchParams;
}

/**
 * ログイン結果の型
 */
export interface LoginResult<TUser = unknown> {
  success: boolean;
  error?: string;
  /** ログイン成功時のユーザー情報 */
  user?: TUser;
  /** パスワード変更が必要かどうか */
  requirePasswordChange?: boolean;
}

/**
 * AuthAdapter インターフェース
 *
 * 各認証実装（localStorage, Cookie/REST API）の差分を吸収するためのインターフェース。
 * User型はアプリケーション固有なので、ジェネリックで受け入れる。
 */
/**
 * パスワード変更結果の型
 */
export interface ChangePasswordResult {
  success: boolean;
  error?: string;
}

export interface AuthAdapter<TUser = unknown> {
  /**
   * 認証済みかどうか
   */
  isAuthenticated: boolean;

  /**
   * ローディング中かどうか
   */
  loading: boolean;

  /**
   * 現在のユーザー情報（nullは未認証）
   */
  user: TUser | null;

  /**
   * アクセストークン（オプション）
   */
  token?: string | null;

  /**
   * ログイン処理
   */
  login: (username: string, password: string) => Promise<LoginResult<TUser>>;

  /**
   * ログアウト処理
   */
  logout: () => Promise<void>;

  /**
   * 認証ヘッダーを取得
   */
  getAuthHeaders: () => Record<string, string>;

  /**
   * パスワード変更処理（オプション）
   */
  changePassword?: (
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => Promise<ChangePasswordResult>;
}
