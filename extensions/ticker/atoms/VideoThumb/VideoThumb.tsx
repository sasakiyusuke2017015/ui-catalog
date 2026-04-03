import { useRef, useCallback } from 'react'

export interface VideoThumbProps {
  /** 動画ファイルのURL */
  readonly src: string
  /** サムネイルのCSSクラス */
  readonly className?: string
  /** ループ再生区間の長さ（秒）。デフォルト3秒 */
  readonly clipDuration?: number
  /** 再生速度。デフォルト1.5倍速 */
  readonly playbackRate?: number
}

/**
 * VideoThumb — 動画サムネイルのGIF風ループ再生
 *
 * 動画の中央付近を短いクリップとしてループ再生する。
 * サイドバーのサムネイル表示などに使用。
 */
export function VideoThumb({
  src,
  className = 'w-full h-full object-cover',
  clipDuration = 3,
  playbackRate = 1.5,
}: VideoThumbProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const initRef = useRef(false)

  const handleLoaded = useCallback(() => {
    const v = ref.current
    if (!v || initRef.current || !isFinite(v.duration)) return
    initRef.current = true

    const mid = v.duration / 2
    const clipLen = Math.min(clipDuration, v.duration / 4)
    const start = mid - clipLen / 2
    v.currentTime = start
    v.playbackRate = playbackRate
    v.play().catch(() => {})

    const onTime = () => {
      if (v.currentTime >= start + clipLen) {
        v.currentTime = start
      }
    }
    v.addEventListener('timeupdate', onTime)
  }, [clipDuration, playbackRate])

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      preload="metadata"
      onLoadedMetadata={handleLoaded}
      data-component="video-thumb"
    />
  )
}
