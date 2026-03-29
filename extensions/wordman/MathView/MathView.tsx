import React, { useState } from 'react'

export interface MathViewProps {
  latex: string
  inline?: boolean
  textColor?: string
  fontSize?: number
}

// LaTeX to Unicode plain text fallback
function latexToPlain(tex: string): string {
  return tex
    .replace(/\\displaystyle\s*/g, '')
    .replace(/\\(?:text|mathrm|mathit|mathbf|operatorname)\{([^}]*)\}/g, '$1')
    .replace(/\\frac\s*\{([^}]*)\}\s*\{([^}]*)\}/g, '($1/$2)')
    .replace(/\\over\s*/g, '/')
    .replace(/\\sqrt\{([^}]*)\}/g, '√($1)')
    .replace(/\\lfloor/g, '⌊').replace(/\\rfloor/g, '⌋')
    .replace(/\\lceil/g, '⌈').replace(/\\rceil/g, '⌉')
    .replace(/\\(?:left|right|big|Big|bigg|Bigg)[()[\]{}|.]/g, '')
    .replace(/\\angle/g, '∠')
    .replace(/\\(?:cdot|times)/g, '×')
    .replace(/\\bmod/g, 'mod').replace(/\\mod/g, 'mod')
    .replace(/\\pm/g, '±')
    .replace(/\\leq?/g, '≤').replace(/\\geq?/g, '≥')
    .replace(/\\neq?/g, '≠').replace(/\\approx/g, '≈')
    .replace(/\\infty/g, '∞')
    .replace(/\\pi/g, 'π').replace(/\\alpha/g, 'α').replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ').replace(/\\delta/g, 'δ').replace(/\\epsilon/g, 'ε')
    .replace(/\\theta/g, 'θ').replace(/\\lambda/g, 'λ').replace(/\\mu/g, 'μ')
    .replace(/\\nu/g, 'ν').replace(/\\sigma/g, 'σ').replace(/\\omega/g, 'ω')
    .replace(/\\phi/g, 'φ').replace(/\\psi/g, 'ψ').replace(/\\chi/g, 'χ')
    .replace(/\\eta/g, 'η').replace(/\\rho/g, 'ρ').replace(/\\tau/g, 'τ')
    .replace(/\\Delta/g, 'Δ').replace(/\\Sigma/g, 'Σ').replace(/\\Omega/g, 'Ω')
    .replace(/\\Chi/g, 'Χ').replace(/\\Phi/g, 'Φ').replace(/\\Psi/g, 'Ψ')
    .replace(/\\sum/g, 'Σ').replace(/\\prod/g, 'Π').replace(/\\int/g, '∫')
    .replace(/\\partial/g, '∂').replace(/\\nabla/g, '∇')
    .replace(/\\rightarrow/g, '→').replace(/\\leftarrow/g, '←')
    .replace(/\\[,;!]/g, '')
    .replace(/\^{2}/g, '²').replace(/\^2/g, '²')
    .replace(/\^{3}/g, '³').replace(/\^3/g, '³')
    .replace(/\^{n}/g, 'ⁿ').replace(/\^n/g, 'ⁿ')
    .replace(/\^{([^}]*)}/g, '^($1)')
    .replace(/_{([^}]*)}/g, '_$1')
    .replace(/[{}]/g, '')
    .replace(/\\\s/g, ' ')
    .replace(/\\/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

let katexRenderToString: ((tex: string, opts: any) => string) | null = null
let katexCssInjected = false

if (typeof window !== 'undefined') {
  try {
    const katex = require('katex')
    katexRenderToString = katex.renderToString

    if (typeof document !== 'undefined' && !katexCssInjected) {
      katexCssInjected = true
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css'
      document.head.appendChild(link)
    }
  } catch {}
}

export function MathView({ latex, inline, textColor, fontSize }: MathViewProps) {
  if (!katexRenderToString) {
    const style: React.CSSProperties = {
      fontSize: fontSize ?? 16,
      color: textColor,
      fontWeight: inline ? 600 : undefined,
      fontStyle: inline ? undefined : 'italic',
    }
    return <span style={style}>{latexToPlain(latex)}</span>
  }

  try {
    const html = katexRenderToString(latex, {
      displayMode: !inline,
      throwOnError: false,
    })

    if (inline) {
      return (
        <span
          style={{ display: 'inline', fontSize: fontSize ?? 16, color: textColor }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    }

    return (
      <div
        data-component="MathView"
        style={{ textAlign: 'center', margin: '4px 0', overflow: 'auto', color: textColor }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  } catch {
    return <span style={{ fontSize: fontSize ?? 16, color: textColor, fontStyle: 'italic' }}>{latexToPlain(latex)}</span>
  }
}

export { latexToPlain }
