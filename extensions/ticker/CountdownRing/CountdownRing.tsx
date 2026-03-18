/**
 * CountdownRing
 * SVG circular countdown with CSS animation.
 * Shows a ring that depletes over `durationMs` and a numeric second counter.
 */
import { type FC, useState, useEffect } from 'react'

interface CountdownRingProps {
  /** Total duration in milliseconds */
  durationMs: number
  /** Change this value to restart the animation (e.g. timestamp or uuid) */
  startKey: string
  /** Ring radius (default 18) */
  radius?: number
  /** SVG viewBox size (default 48) */
  size?: number
  /** Stroke width (default 3) */
  strokeWidth?: number
  /** Stroke color (default "white") */
  strokeColor?: string
  /** Track opacity (default 0.2) */
  trackOpacity?: number
  /** Text class for the number display */
  numberClassName?: string
  /** Additional className for the wrapper */
  className?: string
}

const CountdownRing: FC<CountdownRingProps> = ({
  durationMs,
  startKey,
  radius = 18,
  size = 48,
  strokeWidth = 3,
  strokeColor = 'white',
  trackOpacity = 0.2,
  numberClassName = 'text-white text-sm font-mono',
  className = '',
}) => {
  const circumference = 2 * Math.PI * radius
  const center = size / 2
  const totalSec = Math.ceil(durationMs / 1000)

  return (
    <div
      className={`flex items-center justify-center relative ${className}`}
      key={startKey}
      data-component="countdown-ring"
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={trackOpacity}
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={0}
          strokeLinecap="round"
          style={{
            animation: `countdown-ring-depletion ${durationMs}ms linear forwards`,
          }}
        />
      </svg>
      <CountdownNumber totalSec={totalSec} startKey={startKey} className={numberClassName} />
      <style>{`
        @keyframes countdown-ring-depletion {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: ${circumference}; }
        }
      `}</style>
    </div>
  )
}

function CountdownNumber({
  totalSec,
  startKey,
  className,
}: {
  totalSec: number
  startKey: string
  className: string
}) {
  const [sec, setSec] = useState(totalSec)

  useEffect(() => {
    setSec(totalSec)
    if (totalSec <= 0) return
    const interval = setInterval(() => {
      setSec((p) => {
        if (p <= 1) {
          clearInterval(interval)
          return 0
        }
        return p - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [totalSec, startKey])

  return <span className={`absolute ${className}`}>{sec}</span>
}

export default CountdownRing
