'use client'

import styles from './ArticleCard.module.scss'

export interface ArticleCardBadge {
  readonly label: string
  readonly tone?: 'neutral' | 'primary' | 'accent' | 'muted'
  /** カスタム background / color を CSS variables で指定 */
  readonly bg?: string
  readonly fg?: string
}

export interface ArticleCardTag {
  readonly key: string
  readonly label: string
  readonly onClick?: (e: React.MouseEvent) => void
}

export interface ArticleCardProps {
  readonly title: string
  readonly date: string
  /** 例: 記事種別バッジ（habit, task 等） */
  readonly typeBadge?: ArticleCardBadge
  /** 例: ジャンル（クリック可能にできる） */
  readonly genre?: ArticleCardBadge
  readonly onGenreClick?: (e: React.MouseEvent) => void
  /** サブジャンル（装飾のみ） */
  readonly subgenre?: string
  readonly preview?: string
  readonly tags?: readonly ArticleCardTag[]
  /** 主アクション: カード全体クリック */
  readonly onClick?: () => void
  /** 追加フッター（トグルなど） */
  readonly footer?: React.ReactNode
  readonly className?: string
}

/**
 * 記事カード。ビジネスロジック不要、表示と振る舞いのみ。
 * カード全体クリック、バッジ個別クリックを両立（event.stopPropagation で分離）。
 */
export function ArticleCard({
  title,
  date,
  typeBadge,
  genre,
  onGenreClick,
  subgenre,
  preview,
  tags,
  onClick,
  footer,
  className,
}: ArticleCardProps) {
  const handleBodyKey = (e: React.KeyboardEvent) => {
    if (!onClick) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <li className={`${styles.card}${className ? ` ${className}` : ''}`}>
      <div
        className={styles.body}
        role={onClick ? 'link' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleBodyKey}
        style={onClick ? { cursor: 'pointer' } : undefined}
      >
        <div className={styles.metaTop}>
          <time dateTime={date}>{date}</time>
          {typeBadge && (
            <span className={styles.typeBadge} data-tone={typeBadge.tone ?? 'neutral'}>
              {typeBadge.label}
            </span>
          )}
          {genre && (
            onGenreClick ? (
              <button
                type="button"
                className={styles.badgeBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  onGenreClick(e)
                }}
                aria-label={`${genre.label} ジャンル`}
              >
                <span className={styles.genre}>{genre.label}</span>
              </button>
            ) : (
              <span className={styles.genre}>{genre.label}</span>
            )
          )}
          {subgenre && <span className={styles.subgenre}>{subgenre}</span>}
        </div>
        <h2 className={styles.title}>{title}</h2>
        {preview && <p className={styles.preview}>{preview}</p>}
        {tags && tags.length > 0 && (
          <div className={styles.metaBottom}>
            {tags.map((t) =>
              t.onClick ? (
                <button
                  key={t.key}
                  type="button"
                  className={styles.badgeBtn}
                  onClick={(e) => {
                    e.stopPropagation()
                    t.onClick?.(e)
                  }}
                  aria-label={`#${t.label} タグ`}
                >
                  <span className={styles.tag}>#{t.label}</span>
                </button>
              ) : (
                <span key={t.key} className={styles.tag}>#{t.label}</span>
              )
            )}
          </div>
        )}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </li>
  )
}

export default ArticleCard
