// src/components/project/molecules/QACardList.tsx
import { FC } from 'react';

import Icon from '../atoms/Icon';
import { ICON_NAMES } from '../constants';

export interface QACardItem {
  question: string;
  answer: string;
}

export interface QACardListProps {
  /** Q&Aアイテムの配列 */
  items: QACardItem[];
  /** カラーバリエーション: blue（確認画面）、green（振り返り画面） */
  variant?: 'blue' | 'green';
  /** 情報メッセージ（オプション） */
  infoMessage?: string;
  /** AIコメント（リスト先頭に表示） */
  aiComment?: string;
  /** AIコメントがストリーミング中かどうか */
  aiCommentStreaming?: boolean;
}

/**
 * Q&Aカードリストコンポーネント
 * アンケートの質問と回答をスタイリッシュなカード形式で表示
 */
const QACardList: FC<QACardListProps> = ({
  items,
  variant = 'green',
  infoMessage,
  aiComment,
  aiCommentStreaming = false,
}) => {
  // バリエーションに応じたグラデーションクラス
  const badgeGradient = variant === 'blue'
    ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
    : 'bg-gradient-to-br from-emerald-500 to-teal-600';

  // インフォボックスのスタイル
  const infoBoxStyle = variant === 'blue'
    ? 'border-blue-200 bg-blue-50 text-blue-700'
    : 'border-theme-secondary-border bg-theme-secondary-bg text-theme-secondary-text';

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 情報バナー（先頭に表示） */}
      {infoMessage && (
        <div className={`rounded-lg border p-3 ${infoBoxStyle}`}>
          <p className="text-fluid-sm">
            <Icon name={ICON_NAMES.REGULAR.INFO_CIRCLE} size={16} className="mr-1 inline" />
            {infoMessage}
          </p>
        </div>
      )}

      {/* AIコメント */}
      {aiComment && (
        <div className="rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 p-4 shadow-sm border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <Icon
              name={aiCommentStreaming ? ICON_NAMES.LOADING.DNA : ICON_NAMES.REGULAR.DIAMOND}
              size={20}
              stroke="purple"
              className={aiCommentStreaming ? 'animate-spin' : ''}
            />
            <span className="font-semibold text-purple-700">
              {aiCommentStreaming ? 'AIが分析中...' : 'AIからのコメント'}
            </span>
          </div>
          <div className="bg-white rounded-lg p-3 border border-purple-100">
            <p className="text-gray-700 whitespace-pre-wrap">
              {aiComment}
              {aiCommentStreaming && <span className="animate-pulse">▌</span>}
            </p>
          </div>
        </div>
      )}

      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl bg-gradient-to-r from-gray-50 to-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full ${badgeGradient} flex items-center justify-center text-white font-bold text-fluid-sm shadow-sm`}>
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 mb-2">
                {String(item.question || '').replace(/\.\n\s*/g, '')}
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="text-gray-700 whitespace-pre-wrap break-words">
                  {String(item.answer || '（未回答）')}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QACardList;
