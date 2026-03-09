'use client';

/**
 * RouterContext - RouterAdapter を注入するための Context
 *
 * アプリケーションのルートで RouterProvider を使用し、
 * 適切なアダプタを注入することで、seedling-ui のコンポーネントが
 * React Router / Next.js どちらでも動作可能になる。
 *
 * @example
 * // apps/web (Next.js)
 * import { RouterProvider } from 'seedling-ui/adapters';
 * import { nextAdapter } from 'seedling-ui/adapters/next';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <RouterProvider adapter={nextAdapter}>
 *       {children}
 *     </RouterProvider>
 *   );
 * }
 *
 * @example
 * // apps/storybook (React Router)
 * import { RouterProvider } from 'seedling-ui/adapters';
 * import { reactRouterAdapter } from 'seedling-ui/adapters/react-router';
 *
 * <RouterProvider adapter={reactRouterAdapter}>
 *   <App />
 * </RouterProvider>
 */

import React, { createContext, useContext, type ReactNode } from 'react';

import type { RouterAdapter, NavigateFunction, LinkProps } from './types';

/**
 * RouterContext
 */
const RouterContext = createContext<RouterAdapter | null>(null);

/**
 * RouterProvider Props
 */
interface RouterProviderProps {
  adapter: RouterAdapter;
  children: ReactNode;
}

/**
 * RouterProvider - アダプタを注入するプロバイダー
 */
export const RouterProvider: React.FC<RouterProviderProps> = ({
  adapter,
  children,
}) => {
  return (
    <RouterContext.Provider value={adapter}>{children}</RouterContext.Provider>
  );
};

/**
 * useRouterAdapter - RouterAdapter を取得するフック
 *
 * @throws RouterProvider が設定されていない場合はエラー
 */
export const useRouterAdapter = (): RouterAdapter => {
  const adapter = useContext(RouterContext);
  if (!adapter) {
    throw new Error(
      'useRouterAdapter must be used within a RouterProvider. ' +
        'Wrap your app with <RouterProvider adapter={...}>.'
    );
  }
  return adapter;
};

/**
 * useNavigate - navigate 関数を取得するフック
 *
 * @example
 * const navigate = useNavigate();
 * navigate('/dashboard');
 * navigate('/login', { replace: true });
 */
export const useNavigate = (): NavigateFunction => {
  const adapter = useRouterAdapter();
  return adapter.useNavigate();
};

/**
 * usePathname - 現在のパスを取得するフック
 *
 * @example
 * const pathname = usePathname();
 * console.log(pathname); // '/dashboard'
 */
export const usePathname = (): string => {
  const adapter = useRouterAdapter();
  return adapter.usePathname();
};

/**
 * Link コンポーネントを取得するフック
 *
 * @example
 * const Link = useLink();
 * <Link href="/dashboard">Dashboard</Link>
 */
export const useLink = (): React.ComponentType<LinkProps> => {
  const adapter = useRouterAdapter();
  return adapter.Link;
};

/**
 * RouterLink - Context から Link を取得して使用するコンポーネント
 *
 * @example
 * <RouterLink href="/dashboard">Dashboard</RouterLink>
 */
export const RouterLink: React.FC<LinkProps> = (props) => {
  const Link = useLink();
  return <Link {...props} />;
};

export { RouterContext };
export type { RouterProviderProps };
