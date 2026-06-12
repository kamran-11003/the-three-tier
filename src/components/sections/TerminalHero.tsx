'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TERMINAL_SCENES, LogLine, LogToken } from '@/lib/terminal-script'

// ─── Types ────────────────────────────────────────────────────
interface RenderedLine {
  id: string
  tokens: LogToken[]
}

// ─── Token renderer ───────────────────────────────────────────
const TOKEN_STYLES: Record<string, string> = {
  cmd:    'text-[#F2EDE6]',
  sys:    'text-[#5C6370]',
  ok:     'text-[#7A9A6A]',
  active: 'text-[#E3D9C6]',
  dim:    'text-[#2E2E2E]',
  cursor: 'text-[#F2EDE6] animate-blink',
}

function TokenSpan({ token }: { token: LogToken }) {
  return (
    <span className={TOKEN_STYLES[token.style] ?? TOKEN_STYLES.sys}>
      {token.text}
    </span>
  )
}

// ─── Main component ───────────────────────────────────────────
export function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState<RenderedLine[]>([])
  const [isClearing, setIsClearing] = useState(false)
  const sceneIdx = useRef(0)
  const lineIdx  = useRef(0)
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const clearTimeouts = () => {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
  }

  const runScene = (sIdx: number) => {
    const scene = TERMINAL_SCENES[sIdx % TERMINAL_SCENES.length]
    lineIdx.current = 0
    setVisibleLines([])

    let elapsed = 0

    scene.lines.forEach((line, i) => {
      elapsed += line.delay

      const t = setTimeout(() => {
        const id = `${sIdx}-${i}`

        if (line.typewriter && line.tokens.length > 0) {
          // Assemble full text from cmd tokens only
          const fullText = line.tokens.map(t => t.text).join('')
          let charIdx = 0
          const speed = line.speed ?? 38

          const typeNext = () => {
            charIdx++
            setVisibleLines(prev => {
              const existing = prev.find(l => l.id === id)
              const partialText = fullText.slice(0, charIdx)
              // Re-assemble tokens with partial text on last token
              const partialTokens: LogToken[] = [
                ...line.tokens.slice(0, -1),
                { ...line.tokens[line.tokens.length - 1], text: partialText.slice(line.tokens.slice(0,-1).map(t=>t.text).join('').length) }
              ]
              if (existing) {
                return prev.map(l => l.id === id ? { ...l, tokens: partialTokens } : l)
              } else {
                return [...prev, { id, tokens: partialTokens }]
              }
            })
            if (charIdx < fullText.length) {
              const t2 = setTimeout(typeNext, speed)
              timeouts.current.push(t2)
            }
          }
          typeNext()

        } else {
          setVisibleLines(prev => [...prev, { id, tokens: line.tokens }])
        }

        // Auto-scroll
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }

      }, elapsed)

      timeouts.current.push(t)
    })

    // Hold, then clear and run next scene
    const totalTime = elapsed + scene.holdDuration
    const clearT = setTimeout(() => {
      setIsClearing(true)
      setTimeout(() => {
        setIsClearing(false)
        sceneIdx.current = (sIdx + 1) % TERMINAL_SCENES.length
        runScene(sceneIdx.current)
      }, 600)
    }, totalTime)
    timeouts.current.push(clearT)
  }

  useEffect(() => {
    runScene(0)
    return clearTimeouts
  }, [])

  return (
    <div
      className="
        w-full rounded-[8px] overflow-hidden
        border border-[#1E1E1E]
        shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]
        font-mono text-[12px]
        select-none
      "
      style={{ background: '#0A0A0A' }}
    >
      {/* Title bar */}
      <div
        className="h-10 flex items-center justify-between px-4 border-b border-[#1E1E1E]"
        style={{ background: '#111111' }}
      >
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-[#2E2E2E]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#2E2E2E]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#2E2E2E]" />
        </div>
        <span className="text-[11px] text-[#333333] tracking-wide">
          the three tier — live infrastructure log
        </span>
        <span className="text-[10px] text-[#2A2A2A]">[F1]</span>
      </div>

      {/* Log area */}
      <div
        ref={containerRef}
        className="p-5 h-80 overflow-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <AnimatePresence mode="sync">
          {!isClearing && visibleLines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: 'easeOut' }}
              className="leading-[1.8]"
            >
              {line.tokens.length === 0 ? (
                <span className="text-[#0A0A0A]">·</span> // blank line spacer
              ) : (
                line.tokens.map((token, j) => (
                  <TokenSpan key={j} token={token} />
                ))
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
