/**
 * Router & Auth Adapters
 *
 * ui-catalog のコンポーネントが React Router と Next.js の
 * どちらでも動作するようにするためのアダプタ層。
 *
 * @example
 * // Next.js アプリケーション
 * import { RouterProvider, nextAdapter, AuthProvider } from '@ui-catalog/core/adapters';
 *
 * // React Router アプリケーション
 * import { RouterProvider, reactRouterAdapter, AuthProvider } from '@ui-catalog/core/adapters';
 */

// Types
export type {
  RouterAdapter,
  LinkProps,
  NavigateFunction,
  AuthAdapter,
  LoginResult,
  ChangePasswordResult,
} from './types';

// Router Context & Hooks
export {
  RouterProvider,
  RouterContext,
  useRouterAdapter,
  useNavigate,
  usePathname,
  useLink,
  RouterLink,
} from './RouterContext';

// Auth Context & Hooks
export {
  AuthProvider,
  AuthContext,
  useAuthAdapter,
  useAuth,
  useIsAuthenticated,
  useCurrentUser,
  useLogout,
} from './AuthContext';

// Router Adapters
export { reactRouterAdapter } from './react-router';
// NOTE: nextAdapter は Next.js アプリから直接 '@ui-catalog/core/adapters/next' でインポートしてください
// Vite では next パッケージがバンドルされエラーになるため、ここからはエクスポートしません
