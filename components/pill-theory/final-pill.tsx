import Image from 'next/image'

const LINES = [
  { text: 'Every generation believed it found the truth.', type: 'body' },
  { text: '', type: 'spacer' },
  { text: 'Blue.', type: 'pill' },
  { text: 'Red.', type: 'pill' },
  { text: 'Black.', type: 'pill' },
  { text: 'White.', type: 'pill' },
  { text: 'Orange.', type: 'pill' },
  { text: 'Purple.', type: 'pill' },
  { text: 'Green.', type: 'pill' },
  { text: '', type: 'spacer' },
  { text: 'But belief itself became the market.', type: 'body' },
]

export default function FinalPill() {
  return (
    <section
      id="final"
      className="relative py-36 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Final Pill"
    >


      {/* Green pill */}
      <div className="mb-16">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-LX18KwT0WCGURCOX4apyu3BSMGunPm.png"
          alt="Green Pump Pill"
          width={200}
          height={84}
          className="object-contain mx-auto"
          style={{ height: '84px', width: 'auto' }}
        />
      </div>

      {/* Text block */}
      <div className="max-w-2xl mx-auto mb-16">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={
              line.type === 'spacer'
                ? 'h-6'
                : line.type === 'pill'
                ? 'text-white/50 text-2xl md:text-3xl font-medium uppercase tracking-widest font-sans'
                : 'text-white/80 text-xl md:text-2xl font-light font-sans leading-relaxed'
            }
          >
            {line.text}
          </p>
        ))}
      </div>

      {/* Pump Pill callout */}
      <p
        className="font-sans font-black uppercase tracking-[0.3em] text-[#22c55e]"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}
      >
        THE PUMP PILL
      </p>
    </section>
  )
}
