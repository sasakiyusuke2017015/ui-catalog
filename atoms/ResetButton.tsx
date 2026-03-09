import { FC } from 'react';

import { ICON_NAMES } from '../constants';

import Button from './Button';

interface ResetButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
}

/**
 * リセットボタンコンポーネント
 * 統一されたデザインのリセットボタン
 */
const ResetButton: FC<ResetButtonProps> = ({
  onClick,
  label = 'リセット',
  disabled = false,
}) => {
  return (
    <span data-component="reset-button">
      <Button
        variant="danger"
        size="small"
        leftIcon={ICON_NAMES.REGULAR.ARROW_ROTATE}
        onClick={onClick}
        enableHopEffect={false}
        disabled={disabled}
      >
        {label}
      </Button>
    </span>
  );
};

export default ResetButton;
