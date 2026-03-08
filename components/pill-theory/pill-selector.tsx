'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { PILLS } from '@/lib/pill-data'
import PillModal from './pill-modal'
import type { Pill } from '@/lib/pill-data'

export const PILL_COLORS: Record<string, string> = {
  blue:   '#1C4BFF',
  red:    '#D81E1E',
  black:  '#444444',
  white:  '#F5F5F5',
  purple: '#7C3AED',
  orange: '#FF8C00',
  pump:   '#39C37A',
}

const PILL_IMAGES: Record<string, string> = {
  blue:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-5isIfK68CpBB7VjBeDBLtKBXr1RiDV.png',
  red:    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-6oD6ykPlve8o6Zt3BnpCzZzZyCrpNt.png',
  black:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-k1z7b5hRMQRuRabV1dNkRfGSUi1Sj4.png',
  white:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-VNazsF6iVh2pgvuOauKiBYHokQkdpB.png',
  orange: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orange-gd8BWGcro9MbqpXy7TTtbniNYXkEHs.png',
  purple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple-aeqfSkKIwjyHl41Hwbq84t5Eqd9Qsj.png',
  pump:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-LX18KwT0WCGURCOX4apyu3BSMGunPm.png',
}

interface PillSelectorProps {
  activePill: string
  setActivePill: (id: string) => void
}

export default function PillSelector({ activePill, setActivePill }: PillSelectorProps) {
  const [selectedModal, setSelectedModal] = useState<Pill | null>(null)
  const [floating, setFloating] = useState(false)
  const [floatExpanded, setFloatExpanded] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Detect when section scrolls out of view → go floating
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFloating(!entry.isIntersecting)
        if (entry.isIntersecting) setFloatExpanded(false)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleSelect(id: string) {
    if (id === activePill) return
    setActivePill(id)
    // Glitch flash
    setGlitch(true)
    setTimeout(() => setGlitch(false), 200)
    // Collapse floating panel after selection
    if (floating) setTimeout(() => setFloatExpanded(false), 300)
  }

  return (
    <>
      {/* ── Main section ─────────────────────────────────────────── */}
      <section
        id="pharmacy"
        ref={sectionRef}
        className="relative py-24 px-4 md:px-8"
        aria-label="Select Your Pill"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#22c55e] tracking-[0.3em] uppercase mb-4">
              Selection
            </p>
            <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
              Select Your Pill
            </h2>
            <p className="font-mono text-sm text-white/40 mt-4 max-w-md leading-relaxed">
              Choose your awakening. Each pill is a different interpretation of reality.
            </p>
          </div>

          {/* Single horizontal pill row — nowrap, scroll on small screens */}
          <div className="flex flex-nowrap gap-6 md:gap-10 overflow-x-auto pb-2 no-scrollbar">
            {PILLS.map(pill => (
              <PillButton
                key={pill.id}
                pill={pill}
                image={PILL_IMAGES[pill.id]}
                active={activePill === pill.id}
                onSelect={() => handleSelect(pill.id)}
                onOpenModal={() => setSelectedModal(pill)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Floating panel ───────────────────────────────────────── */}
      <div
        className="fixed left-5 z-40 flex flex-col items-start pointer-events-none"
        style={{
          top: 120,
          opacity: floating ? 1 : 0,
          transform: floating ? 'translateX(0) scale(1)' : 'translateX(-60px) scale(0.9)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          pointerEvents: floating ? 'auto' : 'none',
        }}
        aria-hidden={!floating}
      >
        {/* Collapsed tab */}
        <button
          onClick={() => setFloatExpanded(v => !v)}
          className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-2 bg-[#0a0a0a] border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all mb-2 w-full text-left"
          aria-label="Toggle pill selector panel"
        >
          {floatExpanded ? '✕ Close' : 'PILL'}
        </button>

        {/* Expanded panel */}
        <div
          className="bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300"
          style={{
            maxHeight: floatExpanded ? '500px' : '0px',
            opacity: floatExpanded ? 1 : 0,
            width: '200px',
          }}
        >
          <div className="px-3 pt-3 pb-1">
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/30 mb-2">Reality Channel</p>
          </div>
          <div className="px-3 pb-3 flex flex-col gap-2">
            {PILLS.map(pill => (
              <button
                key={pill.id}
                onClick={() => handleSelect(pill.id)}
                className="flex items-center gap-2 w-full text-left px-2 py-1.5 transition-colors hover:bg-white/5"
                style={{
                  borderLeft: `2px solid ${activePill === pill.id ? pill.color : 'transparent'}`,
                  paddingLeft: '8px',
                }}
              >
                {PILL_IMAGES[pill.id] && (
                  <Image
                    src={PILL_IMAGES[pill.id]}
                    alt={pill.name}
                    width={40}
                    height={18}
                    className="object-contain shrink-0"
                    style={{ height: '18px', width: 'auto' }}
                  />
                )}
                <span
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: activePill === pill.id ? pill.color : 'rgba(255,255,255,0.4)' }}
                >
                  {pill.id}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Glitch flash overlay ──────────────────────────────────── */}
      {glitch && (
        <div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', mixBlendMode: 'overlay' }}
          aria-hidden="true"
        />
      )}

      <PillModal pill={selectedModal} onClose={() => setSelectedModal(null)} />
    </>
  )
}

// ── Individual pill button ────────────────────────────────────────────────────
function PillButton({
  pill,
  image,
  active,
  onSelect,
  onOpenModal,
}: {
  pill: Pill
  image: string
  active: boolean
  onSelect: () => void
  onOpenModal: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onSelect}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-pressed={active}
        aria-label={`Select ${pill.name}`}
        className="relative flex flex-col items-center focus:outline-none group"
        style={{ transition: 'transform 0.25s ease', transform: hovered || active ? 'scale(1.08)' : 'scale(1)' }}
      >
        {/* Active indicator bar */}
        <div
          className="absolute -top-2 left-0 right-0 h-px transition-all duration-300"
          style={{
            backgroundColor: pill.color,
            opacity: active ? 1 : 0,
            boxShadow: active ? `0 0 8px ${pill.color}` : 'none',
          }}
          aria-hidden="true"
        />

        <Image
          src={image}
          alt={pill.name}
          width={120}
          height={50}
          className="object-contain"
          style={{ height: '50px', width: 'auto', opacity: active ? 1 : hovered ? 0.85 : 0.5 }}
        />

        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase mt-1 transition-colors duration-200"
          style={{ color: active ? pill.color : 'rgba(255,255,255,0.3)' }}
        >
          {pill.id}
        </span>
      </button>

      {/* Info link */}
      <button
        onClick={onOpenModal}
        className="font-mono text-[9px] tracking-widest uppercase text-white/20 hover:text-white/60 transition-colors"
      >
        Info
      </button>
    </div>
  )
}
