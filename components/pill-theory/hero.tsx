'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import { initSharedAudio } from './music-player'

const WHITE_PILL_SRC = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-VNazsF6iVh2pgvuOauKiBYHokQkdpB.png'

export default function Hero({ onMusicStart }: { onMusicStart?: () => void }) {
  const [clicked, setClicked] = useState(false)

  const handleExplore = useCallback(() => {
    if (!clicked) {
      initSharedAudio() // unlock AudioContext on user gesture
      setClicked(true)
      onMusicStart?.() // parent sets playing=true → MusicPlayer calls audio.play()
    }
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })
  }, [clicked, onMusicStart])

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ height: '100svh', marginTop: '56px', marginBottom: '-56px', zIndex: 10 }}
      aria-label="Hero banner"
    >
      {/* Background video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" aria-hidden="true">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260308_162526_087c5450-ca5b-4f21-b9a3-55da5fda5ef9-f8VUkDzE0ivSeqRTXJYRgZfyMqmoZw.mp4" type="video/mp4" />
      </video>

      {/* Glitch overlay video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ mixBlendMode: 'screen', opacity: 0.35 }} aria-hidden="true">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8482781-hd_1920_1080_25fps-m7uGa5IZEcGzKW3M8hh92lkJSveGhx.mp4" type="video/mp4" />
      </video>

      {/* Edge fades */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #050505 0%, transparent 12%, transparent 78%, #050505 100%)' }} aria-hidden="true" />

      <h1 className="sr-only">Agent Pill</h1>

      {/* ── Bottom CTA ── */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6 z-10">

        {/* Explore button — pulses until clicked */}
        <button
          onClick={handleExplore}
          className="font-mono text-xs tracking-[0.3em] uppercase px-8 py-3 transition-all duration-300 focus:outline-none"
          style={{
            border: '1px solid rgba(255,255,255,0.30)',
            color: 'rgba(255,255,255,0.80)',
            animation: clicked ? 'none' : 'btn-glow 2s ease-in-out infinite',
          }}
          aria-label="Explore The Pill — starts music and scrolls to ideology section"
        >
          Explore The Pill
        </button>

        {/* Scroll prompt */}
        <button onClick={handleExplore} className="flex flex-col items-center gap-2 group focus:outline-none" aria-label="Scroll down">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30 group-hover:text-white/50 transition-colors">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/30 group-hover:text-white/50 transition-colors" aria-hidden="true" style={{ animation: 'scroll-bounce 1.6s ease-in-out infinite' }}>
            <path d="M8 0 L8 16 M2 10 L8 16 L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
        @keyframes btn-glow {
          0%, 100% {
            border-color: rgba(255,255,255,0.20);
            color: rgba(255,255,255,0.55);
            box-shadow: none;
          }
          50% {
            border-color: rgba(255,255,255,0.90);
            color: rgba(255,255,255,1);
            box-shadow: 0 0 18px 2px rgba(255,255,255,0.25), inset 0 0 12px 0 rgba(255,255,255,0.07);
          }
        }
      `}</style>
    </section>
  )
}
