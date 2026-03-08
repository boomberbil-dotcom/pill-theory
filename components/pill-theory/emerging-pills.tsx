import Image from 'next/image'
import { EMERGING_PILLS } from '@/lib/pill-data'

const EMERGING_IMAGES: Record<string, string> = {
  ai:         'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-Mi2pNzk9D98VPTvX39npfXNxxJY5kf.png',
  doomer:     'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doomer-LWsKjPjnZdQstYpJy9T8uCig9nsSFO.png',
  acc:        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acceleration-SGk1I75Sfqc03g2FdjUZED2pXXrHzZ.png',
  simulation: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simulation-W5VQ2IUs8ttwDHFk6ArKkTlTMcVtCx.png',
}

export default function EmergingPills() {
  return (
    <section id="emerging" className="relative py-24 px-4 md:px-8" aria-label="Emerging Pills">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.3em] uppercase mb-4">
            Speculative
          </p>
          <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
            Emerging Pills
          </h2>
          <p className="font-mono text-sm text-white/40 mt-4 max-w-lg leading-relaxed">
            Ideologies in formation. These pills have no established communities — only signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {EMERGING_PILLS.map((pill) => (
            <div key={pill.id} className="relative bg-[#050505] p-6 md:p-8">
              {/* Dashed top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  backgroundImage: `repeating-linear-gradient(90deg, ${pill.color} 0px, ${pill.color} 8px, transparent 8px, transparent 16px)`,
                }}
                aria-hidden="true"
              />

              <div className="absolute top-4 right-4">
                <span className="font-mono text-xs text-white/20 tracking-widest uppercase border border-dashed border-white/10 px-2 py-0.5">
                  Speculative
                </span>
              </div>

              {/* Pill visual */}
              <div className="flex items-center gap-3 mb-5 mt-4">
                {EMERGING_IMAGES[pill.id] ? (
                  <Image
                    src={EMERGING_IMAGES[pill.id]}
                    alt={pill.name}
                    width={100}
                    height={42}
                    className="object-contain shrink-0"
                    style={{ height: '42px', width: 'auto' }}
                  />
                ) : (
                  <div
                    className="shrink-0"
                    style={{
                      width: 32, height: 16, borderRadius: 8,
                      background: `linear-gradient(90deg, ${pill.color} 50%, ${pill.color}44 50%)`,
                      border: `1px solid ${pill.color}66`,
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

              <div className="border-t border-dashed border-white/10 pt-4">
                <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-1">Possible Impact</p>
                <p className="font-mono text-xs text-white/40 leading-relaxed">{pill.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
