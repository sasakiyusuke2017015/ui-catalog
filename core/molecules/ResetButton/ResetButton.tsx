import { FC } from 'react';



import { Button } from '../Button';

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
        leftIcon={'arrow-rotate'}
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
