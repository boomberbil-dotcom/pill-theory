'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { EMERGING_PILLS } from '@/lib/pill-data'

const EMERGING_IMAGES: Record<string, string> = {
  ai:         'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-Mi2pNzk9D98VPTvX39npfXNxxJY5kf.png',
  doomer:     'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doomer-LWsKjPjnZdQstYpJy9T8uCig9nsSFO.png',
  acc:        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acceleration-SGk1I75Sfqc03g2FdjUZED2pXXrHzZ.png',
  simulation: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simulation-W5VQ2IUs8ttwDHFk6ArKkTlTMcVtCx.png',
  zoom:       'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zoomer-3xCdGNcQPAT1Li70pJ1GGwLn7zaISa.png',
}

type EmergingPill = (typeof EMERGING_PILLS)[number]

function EmergingPillModal({ pill, onClose }: { pill: EmergingPill; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={pill.name}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/10 bg-[#080808]"
        style={{ boxShadow: `0 0 80px ${pill.color}22` }}
        onClick={e => e.stopPropagation()}
      >
        {/* Colour bar top */}
        <div className="h-px w-full" style={{ backgroundColor: pill.color }} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 font-mono text-xs text-white/30 hover:text-white transition-colors border border-white/10 hover:border-white/30 w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Hero pill image — large */}
        <div
          className="flex items-center justify-center py-10 px-8"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${pill.color}11 0%, transparent 70%)` }}
        >
          {EMERGING_IMAGES[pill.id] ? (
            <Image
              src={EMERGING_IMAGES[pill.id]}
              alt={pill.name}
              width={480}
              height={200}
              className="object-contain w-full"
              style={{ maxHeight: '200px', width: 'auto', maxWidth: '100%' }}
              priority
            />
          ) : (
            <div
              className="w-48 h-20 rounded-full"
              style={{ background: `linear-gradient(90deg, ${pill.color} 50%, ${pill.color}44 50%)` }}
            />
          )}
        </div>

        {/* Content */}
        <div className="px-8 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold" style={{ color: pill.color }}>
              {pill.id.toUpperCase()} PILL
            </span>
            <span className="font-mono text-[10px] text-white/20 border border-dashed border-white/10 px-2 py-0.5 tracking-widest uppercase">
              Speculative
            </span>
          </div>

          <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-white leading-none mb-3">
            {pill.name}
          </h2>
          <p className="font-mono text-sm text-white/40 italic mb-6">{'"'}{pill.tagline}{'"'}</p>

          <p className="font-sans text-base text-white/70 leading-relaxed mb-8">{pill.description}</p>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/30">Supporting Signals</span>
              <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-2">
              {pill.signals.map((signal) => (
                <div key={signal} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pill.color }} aria-hidden="true" />
                  <span className="font-mono text-sm text-white/60">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/30">Possible Impact</span>
              <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
            </div>
            <p className="font-mono text-sm text-white/50 leading-relaxed">{pill.impact}</p>
          </div>
        </div>

        {/* Colour bar bottom */}
        <div className="h-px w-full" style={{ backgroundColor: pill.color + '44' }} />
      </div>
    </div>
  )
}

export default function EmergingPills() {
  const [selected, setSelected] = useState<EmergingPill | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="emerging" className="relative py-24 px-4 md:px-8" aria-label="Emerging Pills">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.3em] uppercase mb-4">Speculative</p>
          <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
            Emerging Pills
          </h2>
          <p className="font-mono text-sm text-white/40 mt-4 max-w-lg leading-relaxed">
            Ideologies in formation. These pills have no established communities — only signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {EMERGING_PILLS.map((pill) => (
            <div
              key={pill.id}
              className="relative bg-[#050505] p-6 md:p-8 cursor-pointer"
              onClick={() => setSelected(pill)}
              onMouseEnter={() => setHovered(pill.id)}
              onMouseLeave={() => setHovered(null)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(pill)}
              aria-label={`Open ${pill.name} detail`}
            >
              {/* Dashed top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ backgroundImage: `repeating-linear-gradient(90deg, ${pill.color} 0px, ${pill.color} 8px, transparent 8px, transparent 16px)` }}
                aria-hidden="true"
              />

              <div className="absolute top-4 right-4">
                <span className="font-mono text-xs text-white/20 tracking-widest uppercase border border-dashed border-white/10 px-2 py-0.5">
                  Speculative
                </span>
              </div>

              {/* Pill image with hover scale */}
              <div className="flex items-center gap-3 mb-5 mt-4">
                {EMERGING_IMAGES[pill.id] ? (
                  <div
                    style={{
                      transform: hovered === pill.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      display: 'inline-block',
                    }}
                  >
                    <Image
                      src={EMERGING_IMAGES[pill.id]}
                      alt={pill.name}
                      width={120}
                      height={50}
                      className="object-contain"
                      style={{ height: '50px', width: 'auto' }}
                    />
                  </div>
                ) : (
                  <div
                    className="shrink-0"
                    style={{
                      width: 32, height: 16, borderRadius: 8,
                      background: `linear-gradient(90deg, ${pill.color} 50%, ${pill.color}44 50%)`,
                      border: `1px solid ${pill.color}66`,
                      transform: hovered === pill.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold" style={{ color: pill.color }}>
                  {pill.id.toUpperCase()} PILL
                </span>
              </div>

              <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-white mb-1 leading-none">
                {pill.name}
              </h3>
              <p className="font-mono text-xs text-white/30 mb-4 italic">{'"'}{pill.tagline}{'"'}</p>
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-5">{pill.description}</p>

              <div className="mb-4">
                <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-2">Supporting Signals</p>
                <div className="flex flex-col gap-1">
                  {pill.signals.map((signal) => (
                    <div key={signal} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: pill.color + '88' }} aria-hidden="true" />
                      <span className="font-mono text-xs text-white/40">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-1">Possible Impact</p>
                  <p className="font-mono text-xs text-white/40 leading-relaxed">{pill.impact}</p>
                </div>
                <span
                  className="font-mono text-xs ml-4 shrink-0 transition-colors"
                  style={{ color: hovered === pill.id ? pill.color : 'rgba(255,255,255,0.2)' }}
                >
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <EmergingPillModal pill={selected} onClose={close} />}
    </section>
  )
}
