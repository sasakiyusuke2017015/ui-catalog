import { FC } from 'react';

import Icon from '../../atoms/Icon';
import styles from './QACardList.module.scss';

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
  const bannerClass = variant === 'blue'
    ? styles['infoBanner--blue']
    : styles['infoBanner--green'];

  const badgeClass = variant === 'blue'
    ? styles['badge--blue']
    : styles['badge--green'];

  return (
    <div data-component="qa-card-list" className={styles.root}>
      {/* 情報バナー（先頭に表示） */}
      {infoMessage && (
        <div className={`${styles.infoBanner} ${bannerClass}`}>
          <p className={styles.infoBannerText}>
            <Icon name={'info-circle'} size={16} className={styles.infoBannerIcon} />
            {infoMessage}
          </p>
        </div>
      )}

      {/* AIコメント */}
      {aiComment && (
        <div className={styles.aiComment}>
          <div className={styles.aiCommentHeader}>
            <Icon
              name={aiCommentStreaming ? 'loading-dna' : 'diamond'}
              size={20}
              stroke="purple"
              className={aiCommentStreaming ? styles['aiCommentIcon--spinning'] : ''}
            />
            <span className={styles.aiCommentLabel}>
              {aiCommentStreaming ? 'AIが分析中...' : 'AIからのコメント'}
            </span>
          </div>
          <div className={styles.aiCommentBody}>
            <p className={styles.aiCommentBodyText}>
              {aiComment}
              {aiCommentStreaming && <span className={styles.aiCommentCursor}>▌</span>}
            </p>
          </div>
        </div>
      )}

      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={`${styles.badge} ${badgeClass}`}>
              {index + 1}
            </div>
            <div className={styles.cardBody}>
              <p className={styles.question}>
                {String(item.question || '').replace(/\.\n\s*/g, '')}
              </p>
              <div className={styles.answerBox}>
                <p className={styles.answerText}>
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
