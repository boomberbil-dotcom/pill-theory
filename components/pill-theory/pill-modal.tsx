'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import type { Pill } from '@/lib/pill-data'

const PILL_IMAGES: Record<string, string> = {
  blue:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-5isIfK68CpBB7VjBeDBLtKBXr1RiDV.png',
  red:    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-6oD6ykPlve8o6Zt3BnpCzZzZyCrpNt.png',
  black:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-k1z7b5hRMQRuRabV1dNkRfGSUi1Sj4.png',
  white:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-VNazsF6iVh2pgvuOauKiBYHokQkdpB.png',
  orange: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orange-gd8BWGcro9MbqpXy7TTtbniNYXkEHs.png',
  purple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple-aeqfSkKIwjyHl41Hwbq84t5Eqd9Qsj.png',
  pump:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-LX18KwT0WCGURCOX4apyu3BSMGunPm.png',
}

type Tab = 'overview' | 'history' | 'culture' | 'media'
const TABS: { key: Tab; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'history', label: 'History' },
  { key: 'culture', label: 'Culture' },
  { key: 'media', label: 'Media' },
]

interface Props {
  pill: Pill | null
  onClose: () => void
}

export default function PillModal({ pill, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pill) {
      setActiveTab('overview')
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [pill])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!pill) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side modal */}
      <aside
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-[#080808] border-l border-white/10 flex flex-col overflow-hidden transition-transform duration-300 ease-out"
        style={{ transform: visible ? 'translateX(0)' : 'translateX(100%)' }}
        role="dialog"
        aria-modal="true"
        aria-label={`${pill.name} research archive`}
      >
        {/* Header */}
        <div className="border-b border-white/10 p-6 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {PILL_IMAGES[pill.id] ? (
                  <Image
                    src={PILL_IMAGES[pill.id]}
                    alt={pill.name}
                    width={80}
                    height={34}
                    className="object-contain shrink-0"
                    style={{ height: '34px', width: 'auto' }}
                  />
                ) : (
                  <div
                    className="w-10 h-5 rounded-full shrink-0"
                    style={{
                      background: `linear-gradient(90deg, ${pill.color}cc 50%, ${pill.color}44 50%)`,
                      border: `1px solid ${pill.color}66`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: pill.color }}>
                  Research Archive
                </span>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-white">
                {pill.name}
              </h2>
              <p className="font-mono text-xs text-white/40 mt-1 leading-relaxed">{pill.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 p-2 text-white/40 hover:text-white transition-colors border border-white/10 hover:border-white/30"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-5 overflow-x-auto" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="shrink-0 px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-all"
                style={
                  activeTab === tab.key
                    ? { color: pill.color, borderBottom: `1px solid ${pill.color}` }
                    : { color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid transparent' }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="w-full h-px mb-6" style={{ backgroundColor: pill.color + '33' }} aria-hidden="true" />
          <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.2em] uppercase mb-4">
            {activeTab} /
          </p>
          <p className="font-sans text-base text-white/80 leading-relaxed">
            {pill[activeTab]}
          </p>

          {activeTab === 'overview' && (
            <>
              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div>
                    <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-1">Period</p>
                    <p className="font-sans font-bold text-white">{pill.year}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-1">Catalyst</p>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">{pill.culturalMoment}</p>
                  </div>
                </div>
              </div>

              {/* Video Archive */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: pill.color }}>
                  Video Archive
                </span>
                <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-4 mb-10">
                {pill.videos.map((url, i) => {
                  const videoId = url.split('v=')[1]?.split('&')[0]
                  return (
                    <div
                      key={i}
                      className="relative w-full overflow-hidden rounded-sm border"
                      style={{ paddingBottom: '56.25%', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`${pill.name} video ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 'none' }}
                      />
                    </div>
                  )
                })}
              </div>

              {/* Articles */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: pill.color }}>
                  Articles
                </span>
                <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2.5">
                {pill.articles.map((url, i) => {
                  const label = decodeURIComponent(url.split('/').pop()?.replace(/_/g, ' ') ?? url)
                  return (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 px-4 py-3 border bg-white/[0.02] transition-all group"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = pill.color + '88')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    >
                      <span className="font-mono text-xs text-white/50 group-hover:text-white truncate transition-colors">
                        {label}
                      </span>
                      <svg
                        className="shrink-0 w-3 h-3 text-white/20 group-hover:text-white transition-colors"
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-white/10 p-4">
          <div className="flex items-center gap-2">
            <span className="signal-dot w-1.5 h-1.5 rounded-full bg-[#f0f0f0] block" />
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              Pill Theory Signal Archive
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
