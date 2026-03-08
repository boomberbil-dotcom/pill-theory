'use client'

import Image from 'next/image'

const WHITE_PILL_SRC = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-VNazsF6iVh2pgvuOauKiBYHokQkdpB.png'

function scrollToIdeology() {
  document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ height: '100svh', marginTop: '56px', marginBottom: '-56px', zIndex: 10 }}
      aria-label="Hero banner"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260308_162526_087c5450-ca5b-4f21-b9a3-55da5fda5ef9-f8VUkDzE0ivSeqRTXJYRgZfyMqmoZw.mp4"
          type="video/mp4"
        />
      </video>

      {/* Glitch overlay video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: 'screen', opacity: 0.35 }}
        aria-hidden="true"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8482781-hd_1920_1080_25fps-m7uGa5IZEcGzKW3M8hh92lkJSveGhx.mp4"
          type="video/mp4"
        />
      </video>

      {/* Top + bottom edge fade into page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #050505 0%, transparent 12%, transparent 78%, #050505 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hidden accessible label */}
      <h1 className="sr-only">Pill Theory</h1>

      {/* ── Bottom CTA area ──────────────────────────────────── */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6 z-10">
        {/* Explore button */}
        <button
          onClick={scrollToIdeology}
          className="font-mono text-xs tracking-[0.3em] uppercase border border-white/30 text-white/80 hover:text-white hover:border-white/70 px-8 py-3 transition-all duration-300 hover:bg-white/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          Explore The Pill
        </button>

        {/* Scroll prompt */}
        <button
          onClick={scrollToIdeology}
          className="flex flex-col items-center gap-2 group focus:outline-none"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30 group-hover:text-white/50 transition-colors">
            Scroll
          </span>
          {/* Animated chevron */}
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-white/30 group-hover:text-white/50 transition-colors"
            aria-hidden="true"
            style={{ animation: 'scroll-bounce 1.6s ease-in-out infinite' }}
          >
            <path d="M8 0 L8 16 M2 10 L8 16 L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
