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

export default function Pharmacy() {
  const [selectedPill, setSelectedPill] = useState<Pill | null>(null)

  return (
    <>
      <section id="pharmacy" className="relative py-24 px-4 md:px-8" aria-label="The Pharmacy">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.3em] uppercase mb-4">
              Selection
            </p>
            <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
              Pharmacy
            </h2>
            <p className="font-mono text-sm text-white/40 mt-4 max-w-md leading-relaxed">
              Choose your awakening. Each pill contains a different interpretation of reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {PILLS.map((pill) => (
              <PillCard
                key={pill.id}
                pill={pill}
                onClick={() => setSelectedPill(pill)}
                fullWidth={pill.id === 'pump'}
              />
            ))}
          </div>
        </div>
      </section>

      <PillModal pill={selectedPill} onClose={() => setSelectedPill(null)} />
    </>
  )
}

function PillCard({ pill, onClick, fullWidth = false }: { pill: Pill; onClick: () => void; fullWidth?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative text-left bg-[#050505] hover:bg-[#0a0a0a] p-6 md:p-8 overflow-hidden transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f0f0f0]${fullWidth ? ' sm:col-span-2 lg:col-span-3' : ''}`}
      aria-label={`Open ${pill.name} archive`}
    >
      {/* Top color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{ backgroundColor: pill.color, opacity: hovered ? 1 : 0.3 }}
        aria-hidden="true"
      />

      {/* Pill image */}
      <div className="mb-6 flex items-center gap-3">
        {PILL_IMAGES[pill.id] ? (
          <div
            className="shrink-0 transition-transform duration-300"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
            aria-hidden="true"
          >
            <Image
              src={PILL_IMAGES[pill.id]}
              alt={pill.name}
              width={80}
              height={34}
              className="object-contain"
              style={{ height: '34px', width: 'auto' }}
            />
          </div>
        ) : (
          <div
            className="shrink-0"
            style={{
              width: 56,
              height: 24,
              borderRadius: 12,
              background: `linear-gradient(90deg, ${pill.color} 50%, ${pill.color}55 50%)`,
              border: `1px solid ${pill.color}88`,
            }}
            aria-hidden="true"
          />
        )}
        <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold" style={{ color: pill.color }}>
          {pill.id.toUpperCase()} PILL
        </span>
      </div>

      <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-white mb-2 leading-none">
        {pill.name}
      </h3>
      <p className="font-mono text-xs text-white/40 leading-relaxed mb-4">{pill.tagline}</p>

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-white/20 tracking-widest">{pill.year}</span>
        <span
          className="font-mono text-xs tracking-widest uppercase transition-colors duration-300"
          style={{ color: hovered ? pill.color : 'rgba(255,255,255,0.2)' }}
        >
          Open →
        </span>
      </div>
    </button>
  )
}
