// src/components/project/molecules/SurveyCard.tsx
import { FC } from 'react';

import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { type IconName } from '../constants';

export interface SurveyCardProps {
  id: string;
  title: string;
  description?: string;
  period: string;
  status: string;
  statusColor: 'blue' | 'green' | 'red' | 'yellow' | 'gray' | 'orange';
  headerColor: string;
  buttonVariant: 'primary' | 'danger' | 'outline';
  buttonText: string;
  buttonIcon?: IconName;
  onClick?: () => void;
  /** カードの角丸 - Layout から props で渡す */
  cardRadius?: string;
}

/**
 * アンケートカードコンポーネント
 * アンケート一覧で使用する再利用可能なカード
 */
const SurveyCard: FC<SurveyCardProps> = ({
  title,
  description,
  period,
  status,
  statusColor,
  headerColor,
  buttonVariant,
  buttonText,
  buttonIcon,
  onClick,
  cardRadius = '0.5rem', // デフォルト値
}) => {

  return (
    <div className="col" data-component="survey-card">
      <div className="flex h-full flex-col overflow-hidden bg-white shadow-md transition-shadow hover:shadow-xl" style={{ borderRadius: cardRadius }}>
        {/* 期間ヘッダー */}
        <div className={`p-3 text-center font-bold text-white ${headerColor}`}>
          期間: {period}
        </div>

        {/* カード本体 */}
        <div className="flex flex-1 flex-col p-4">
          {/* ステータスバッジ */}
          <div className="mb-4">
            <Badge
              value={status}
              color={statusColor}
              size="small"
              appearance="status"
            />
          </div>

          {/* タイトル */}
          <h5 className="mb-2 flex items-start gap-2 text-fluid-lg font-semibold text-gray-800">
            <Icon
              name={'file'}
              size={20}
              className="mt-1 flex-shrink-0 text-cyan-500"
            />
            <span className="line-clamp-2">{title}</span>
          </h5>

          {/* 掲載内容 */}
          {description && (
            <p className="whitespace-pre-line text-fluid-sm text-gray-600 line-clamp-3">{description}</p>
          )}
        </div>

        {/* フッター（ボタン） */}
        <div className="border-t border-gray-100 bg-gray-50 p-3 text-right">
          <Button
            variant={buttonVariant}
            size="small"
            rightIcon={buttonIcon}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
