'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PILLS, type Pill } from '@/lib/pill-data'
import PillModal from './pill-modal'

const PILL_IMAGES: Record<string, string> = {
  blue: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-5isIfK68CpBB7VjBeDBLtKBXr1RiDV.png',
  red: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-6oD6ykPlve8o6Zt3BnpCzZzZyCrpNt.png',
  black: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-k1z7b5hRMQRuRabV1dNkRfGSUi1Sj4.png',
  white: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-VNazsF6iVh2pgvuOauKiBYHokQkdpB.png',
  orange: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orange-gd8BWGcro9MbqpXy7TTtbniNYXkEHs.png',
  purple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple-aeqfSkKIwjyHl41Hwbq84t5Eqd9Qsj.png',
  pump: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-LX18KwT0WCGURCOX4apyu3BSMGunPm.png',
}

export default function AwakeningTimeline() {
  const [activePill, setActivePill] = useState<string | null>(null)
  const [selectedPill, setSelectedPill] = useState<Pill | null>(null)

  return (
    <>
      <section
        id="timeline"
        className="relative py-24 px-4 md:px-8"
        aria-label="Awakening Timeline"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.3em] uppercase mb-4">
              Chronology
            </p>
            <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
              Awakening Timeline
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />
            <div className="flex flex-col gap-0">
              {PILLS.map((pill, i) => (
                <TimelineCard
                  key={pill.id}
                  pill={pill}
                  isActive={activePill === pill.id}
                  onEnter={() => setActivePill(pill.id)}
                  onLeave={() => setActivePill(null)}
                  onSelect={() => setSelectedPill(pill)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <PillModal pill={selectedPill} onClose={() => setSelectedPill(null)} />
    </>
  )
}

function TimelineCard({
  pill,
  isActive,
  onEnter,
  onLeave,
  onSelect,
}: {
  pill: Pill
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  onSelect: () => void
}) {
  return (
    <button
      className="group relative pl-12 md:pl-20 py-8 text-left w-full border-b border-white/5 hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f0f0f0]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onSelect}
      aria-label={`Open ${pill.name} archive`}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-[14px] md:left-[26px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300"
        style={{
          borderColor: isActive ? pill.color : 'rgba(255,255,255,0.2)',
          backgroundColor: isActive ? pill.color : 'transparent',
          boxShadow: isActive ? `0 0 12px ${pill.color}88` : 'none',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <span
          className="font-mono text-xs tracking-[0.2em] shrink-0 transition-colors duration-300"
          style={{ color: isActive ? pill.color : 'rgba(255,255,255,0.3)' }}
        >
          {pill.year}
        </span>

        {PILL_IMAGES[pill.id] ? (
          <div
            className="shrink-0 hidden md:block transition-transform duration-300"
            style={{ transform: isActive ? 'scale(1.08)' : 'scale(1)', opacity: isActive ? 1 : 0.65 }}
            aria-hidden="true"
          >
            <Image
              src={PILL_IMAGES[pill.id]}
              alt={pill.name}
              width={96}
              height={40}
              className="object-contain"
              style={{ height: '40px', width: 'auto' }}
            />
          </div>
        ) : (
          <div
            className="shrink-0 w-8 h-4 rounded-full hidden md:block transition-transform duration-300"
            style={{
              background: `linear-gradient(90deg, ${pill.color} 50%, ${pill.color}44 50%)`,
              border: `1px solid ${pill.color}55`,
              transform: isActive ? 'scale(1.08)' : 'scale(1)',
            }}
            aria-hidden="true"
          />
        )}

        <div className="flex-1">
          <h3
            className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight transition-colors duration-300"
            style={{ color: isActive ? pill.color : 'rgba(255,255,255,0.9)' }}
          >
            {pill.name}
          </h3>
          <p className="font-mono text-xs text-white/40 mt-1 leading-relaxed">{pill.tagline}</p>
        </div>

        <span
          className="font-mono text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          style={{ color: pill.color }}
          aria-hidden="true"
        >
          Open Archive →
        </span>
      </div>
    </button>
  )
}
