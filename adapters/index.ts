/**
 * Router & Auth Adapters（インターフェースのみ）
 *
 * 実装はアプリケーション側で提供する
 */

export type {
  RouterAdapter,
  LinkProps,
  NavigateFunction,
  AuthAdapter,
  LoginResult,
  ChangePasswordResult,
} from './types'

export {
  RouterProvider,
  RouterContext,
  useRouterAdapter,
  useNavigate,
  usePathname,
  useLink,
  RouterLink,
} from './RouterContext'
