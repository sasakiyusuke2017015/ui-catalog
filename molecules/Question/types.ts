/**
 * Question コンポーネント型定義
 */

export type QuestionVariant =
  | 'textbox'
  | 'textarea'
  | 'radio'
  | 'select'
  | 'checkbox'
  | 'phone'
  | 'postalcode';

export interface QuestionProps {
  /** 質問の種類 */
  variant: QuestionVariant;
  /** 質問ID */
  questionId: number;
  /** 質問タイトル */
  title: string;
  /** 質問内容 */
  content: string;
  /** 必須項目かどうか */
  required: boolean;
  /** 入力値（複数選択の場合はカンマ区切り） */
  value: string;
  /** 値変更時のハンドラ */
  onChange: (value: string) => void;
  /** 無効化状態 */
  disabled?: boolean;
  /** 選択肢の配列（radio, select, checkbox用） */
  options?: string[];
  /** エラーメッセージ */
  error?: string;
  /** 入力要素の角丸 - Layout から props で渡す */
  borderRadius?: string;
  /** フォーカスボーダー色 - Layout から props で渡す */
  focusBorderColor?: string;
  /** フォーカスリング色 - Layout から props で渡す */
  focusRingColor?: string;
  /** アクセント背景色 - Layout から props で渡す */
  accentBgColor?: string;
  /** アクセントコントラストテキスト色 - Layout から props で渡す */
  accentContrastText?: string;
  /** セカンダリ背景色（ホバー） - Layout から props で渡す */
  secondaryBgColorHover?: string;
}
