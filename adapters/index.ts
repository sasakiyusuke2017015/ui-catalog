/**
 * Router & Auth Adapters
 *
 * seedling-ui のコンポーネントが React Router と Next.js の
 * どちらでも動作するようにするためのアダプタ層。
 *
 * @example
 * // Next.js アプリケーション
 * import { RouterProvider, nextAdapter, AuthProvider } from 'seedling-ui/adapters';
 *
 * // React Router アプリケーション
 * import { RouterProvider, reactRouterAdapter, AuthProvider } from 'seedling-ui/adapters';
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
// NOTE: nextAdapter は Next.js アプリから直接 'seedling-ui/adapters/next' でインポートしてください
// Vite では next パッケージがバンドルされエラーになるため、ここからはエクスポートしません
