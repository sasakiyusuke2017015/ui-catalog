// UI アプリケーション共通の型定義

/**
 * 共通の型定義
 */

// ユーザー型
// NOTE: バックエンドの User (app/models/employee.py) に対応
// LoginResponse の user フィールドが dict[str, Any] のため OpenAPI に含まれない
// そのため手動定義を維持（EmployeeListData と同じフィールド構造）
export interface User {
  ユーザーID?: string;
  ユーザーコード?: string;
  名前?: string;
  メールアドレス?: string;
  所属本部?: string;
  所属部?: string;
  所属課?: string;
  役職?: string;
  [key: string]: unknown;
}

/**
 * テーブル・フィルター関連の型定義
 */

/**
 * フィルタータイプ
 */
export type FilterType = 'status' | 'score' | 'text' | 'date' | 'dateRange';

/**
 * ステータスフィルターの選択肢
 */
export interface StatusOption {
  label: string;
  value: string;
  color?: string;
}

/**
 * フィルター設定の共通型
 */
export interface FilterConfig {
  type: FilterType;
  options?: StatusOption[];
  min?: number;
  max?: number;
  placeholder?: string;
  /** フィルタの幅（Tailwindクラス例: 'w-32'） */
  width?: string;
}

/**
 * accessor/labelを含む完全なフィルター設定
 */
export interface FilterConfigWithMeta extends FilterConfig {
  accessor: string;
  label: string;
}

/**
 * フィルター値の型定義
 */
export interface FilterValues {
  [key: string]: string[] | [number, number] | string | undefined;
}

/**
 * 認証関連の型定義
 */
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
}

export interface VerifyTokenResponse {
  valid: boolean;
  user?: User;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface ChangePasswordResponse {
  success: boolean;
  message?: string;
}

/**
 * ルーティング関連の型定義
 */

/**
 * パンくずアイテムの型定義
 */
export interface BreadcrumbItemConfig {
  label: string;
  href: string;
  tooltip?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * パンくず生成関数の型定義
 */
export type BreadcrumbGenerator = (params?: Record<string, string>) => BreadcrumbItemConfig[];

/**
 * ルート設定の型定義
 */
export interface RouteConfig {
  /** ルートパス */
  path: string;
  /** ラベル（ナビゲーション等に表示） */
  label: string;
  /** ページタイトル（省略時はlabelを使用） */
  title?: string;
  /** アイコン名 */
  icon?: unknown; // IconName型（constants/iconsで定義）
  /** ナビゲーションに表示するか */
  showInNav?: boolean;
  /** フォントサイズ（ページタイトル等に適用） */
  fontSize?: 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl';
  /** パンくずリスト生成関数 */
  breadcrumb?: BreadcrumbGenerator;
}

/**
 * テーマ関連の型定義
 */
export * from './theme';
