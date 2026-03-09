'use client';

/**
 * AuthContext - AuthAdapter を注入するための Context
 *
 * アプリケーションのルートで AuthProvider を使用し、
 * 適切なアダプタを注入することで、ui-catalog のコンポーネントが
 * localStorage / Cookie どちらの認証実装でも動作可能になる。
 *
 * @example
 * // apps/web (Next.js + Cookie)
 * import { AuthProvider } from '@ui-catalog/core/adapters';
 * import { useAuthAdapter } from '@/lib/auth/authAdapter';
 *
 * function Providers({ children }) {
 *   const authAdapter = useAuthAdapter();
 *   return (
 *     <AuthProvider adapter={authAdapter}>
 *       {children}
 *     </AuthProvider>
 *   );
 * }
 */

import React, { createContext, useContext, type ReactNode } from 'react';

import type { AuthAdapter } from './types';
import type { User } from '../types';

/**
 * AuthContext - ui-catalog で使用する User 型を持つ AuthAdapter
 */
const AuthContext = createContext<AuthAdapter<User> | null>(null);

/**
 * AuthProvider Props
 */
interface AuthProviderProps {
  adapter: AuthAdapter<User>;
  children: ReactNode;
}

/**
 * AuthProvider - アダプタを注入するプロバイダー
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({
  adapter,
  children,
}) => {
  return (
    <AuthContext.Provider value={adapter}>{children}</AuthContext.Provider>
  );
};

/**
 * useAuthAdapter - AuthAdapter を取得するフック
 *
 * @throws AuthProvider が設定されていない場合はエラー
 */
export const useAuthAdapter = (): AuthAdapter<User> => {
  const adapter = useContext(AuthContext);
  if (!adapter) {
    throw new Error(
      'useAuthAdapter must be used within an AuthProvider. ' +
        'Wrap your app with <AuthProvider adapter={...}>.'
    );
  }
  return adapter;
};

/**
 * useAuth - 認証情報を取得するフック（後方互換性のため）
 *
 * @example
 * const { isAuthenticated, user, logout } = useAuth();
 */
export const useAuth = (): AuthAdapter<User> => {
  return useAuthAdapter();
};

/**
 * useIsAuthenticated - 認証状態を取得するフック
 *
 * @example
 * const isAuthenticated = useIsAuthenticated();
 */
export const useIsAuthenticated = (): boolean => {
  const adapter = useAuthAdapter();
  return adapter.isAuthenticated;
};

/**
 * useCurrentUser - 現在のユーザーを取得するフック
 *
 * @example
 * const user = useCurrentUser();
 */
export const useCurrentUser = (): User | null => {
  const adapter = useAuthAdapter();
  return adapter.user;
};

/**
 * useLogout - ログアウト関数を取得するフック
 *
 * @example
 * const logout = useLogout();
 * <button onClick={logout}>ログアウト</button>
 */
export const useLogout = (): (() => Promise<void>) => {
  const adapter = useAuthAdapter();
  return adapter.logout;
};

export { AuthContext };
export type { AuthProviderProps };
