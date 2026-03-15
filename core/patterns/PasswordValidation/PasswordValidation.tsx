import { FC, useMemo } from 'react';

import { cn } from '../../utils/cn';

interface PasswordValidationProps {
  password: string;
  confirmPassword?: string;
  /** バリデーション表示を開始するかどうか（入力が始まったら true） */
  showValidation?: boolean;
}

interface ValidationRule {
  label: string;
  check: (password: string, confirmPassword?: string) => boolean;
}

const RULES: ValidationRule[] = [
  { label: '8文字以上', check: (pw) => pw.length >= 8 },
  { label: '30文字以下', check: (pw) => pw.length <= 30 && pw.length > 0 },
];

const CONFIRM_RULE: ValidationRule = {
  label: 'パスワードが一致',
  check: (pw, confirm) => pw.length > 0 && confirm !== undefined && confirm.length > 0 && pw === confirm,
};

/**
 * パスワードバリデーション表示コンポーネント
 * リアルタイムで条件の達成状況を表示
 */
const PasswordValidation: FC<PasswordValidationProps> = ({
  password,
  confirmPassword,
  showValidation = false,
}) => {
  const rules = useMemo(() => {
    const allRules = [...RULES];
    if (confirmPassword !== undefined) {
      allRules.push(CONFIRM_RULE);
    }
    return allRules;
  }, [confirmPassword !== undefined]);

  if (!showValidation) return null;

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1" data-component="password-validation">
      {rules.map((rule) => {
        const passed = rule.check(password, confirmPassword);
        return (
          <span
            key={rule.label}
            className={cn(
              'text-fluid-xs transition-colors duration-200',
              passed ? 'text-green-600' : 'text-gray-400'
            )}
          >
            {passed ? '✓' : '○'} {rule.label}
          </span>
        );
      })}
    </div>
  );
};

export default PasswordValidation;
