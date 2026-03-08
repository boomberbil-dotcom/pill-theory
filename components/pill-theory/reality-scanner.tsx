'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    id: 'system',
    question: 'How do you see the system?',
    options: [
      { label: 'It works, mostly', value: 'a' },
      { label: "It's broken but fixable", value: 'b' },
      { label: "It's rigged by design", value: 'c' },
      { label: "It's irrelevant — build your own", value: 'd' },
    ],
  },
  {
    id: 'money',
    question: 'How do you see money?',
    options: [
      { label: 'A useful tool', value: 'a' },
      { label: 'A manipulated system', value: 'b' },
      { label: 'Debt slavery', value: 'c' },
      { label: 'Programmable energy — sound money only', value: 'd' },
    ],
  },
  {
    id: 'future',
    question: 'How do you see the future?',
    options: [
      { label: 'Better than today', value: 'a' },
      { label: 'Uncertain but navigable', value: 'b' },
      { label: 'In accelerating decline', value: 'c' },
      { label: 'To be built, not waited for', value: 'd' },
    ],
  },
  {
    id: 'power',
    question: 'Where does real power come from?',
    options: [
      { label: 'Institutions and law', value: 'a' },
      { label: 'Information and networks', value: 'b' },
      { label: 'Biology and hierarchy', value: 'c' },
      { label: 'Capital and sovereignty', value: 'd' },
      { label: 'Culture, narrative, and social consent', value: 'e' },
    ],
  },
]

const RESULT_MAP: Record<
  string,
  { pill: string; color: string; explanation: string }
> = {
  aaa: {
    pill: 'BLUE PILLED',
    color: '#3b82f6',
    explanation:
      'You trust the system and accept the world largely as presented. Comfort is your operating mode. You see reform as viable and decline as reversible.',
  },
  bbb: {
    pill: 'RED PILLED',
    color: '#ef4444',
    explanation:
      "You've seen through surface-level narratives and recognize systemic dysfunction. You seek truth behind official explanations. The veil is visible.",
  },
  ccc: {
    pill: 'BLACK PILLED',
    color: '#6b7280',
    explanation:
      "You see the game as rigged and the decline as terminal. You've absorbed the red pill's conclusions but found no agency in them. The system wins.",
  },
  ddd: {
    pill: 'ORANGE PILLED',
    color: '#f97316',
    explanation:
      'You have rejected the old systems entirely and are building alternatives. Sound money, exit, sovereignty. The architecture of a new world.',
  },
  eee: {
    pill: 'PURPLE PILLED',
    color: '#9333ea',
    explanation:
      'You see power as gendered and social structures as instruments of control. Awareness of the system is the first act of resistance.',
  },
}

function getResult(answers: string[]) {
  const counts: Record<string, number> = {}

  answers.forEach((a) => {
    counts[a] = (counts[a] || 0) + 1
  })

  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]

  const key = dominant.repeat(3)

  return RESULT_MAP[key] ?? RESULT_MAP['aaa']
}

export default function RealityScanner() {
  const [answers, setAnswers] = useState<string[]>([])
  const [current, setCurrent] = useState(0)
  const [result, setResult] = useState<ReturnType<typeof getResult> | null>(null)

  function handleAnswer(value: string) {
    const next = [...answers, value]

    if (next.length < QUESTIONS.length) {
      setAnswers(next)
      setCurrent(current + 1)
    } else {
      setAnswers(next)
      setResult(getResult(next))
    }
  }

  function reset() {
    setAnswers([])
    setCurrent(0)
    setResult(null)
  }

  const q = QUESTIONS[current]
  const progress = (answers.length / QUESTIONS.length) * 100

  return (
    <section
      id="scanner"
      className="relative py-24 px-4 md:px-8"
      aria-label="Reality Scanner"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.3em] uppercase mb-4">
            Diagnostic
          </p>

          <h2 className="font-sans font-black text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
            Reality Scanner
          </h2>

          <p className="font-mono text-sm text-white/40 mt-4 leading-relaxed">
            Answer four questions. Receive your ideological classification.
          </p>
        </div>

        {!result ? (
          <div key={`q-${current}`}>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  Query {current + 1} of {QUESTIONS.length}
                </span>

                <span className="font-mono text-xs text-[#f0f0f0]">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="h-px bg-white/10 w-full relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#f0f0f0] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">

              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f0f0f0] block shrink-0" />

                <p className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight text-white">
                  {q.question}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="text-left px-4 py-3 border border-white/10 bg-white/[0.02] font-mono text-sm text-white/60 hover:text-white hover:border-[#f0f0f0]/50 hover:bg-[#f0f0f0]/5 transition-all"
                  >
                    <span className="text-[#f0f0f0] mr-3">›</span>
                    {opt.label}
                  </button>
                ))}
              </div>

            </div>
          </div>
        ) : (
          <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center relative overflow-hidden">

            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: result.color + '08' }}
            />

            {/* Pill */}
            <div
              className="mx-auto mb-8"
              style={{
                width: 96,
                height: 40,
                borderRadius: 20,
                background: `linear-gradient(90deg, ${result.color} 50%, ${result.color}55 50%)`,
                border: `1px solid ${result.color}88`,
              }}
            />

            <p className="font-mono text-xs text-white/30 tracking-[0.4em] uppercase mb-3">
              Classification Complete
            </p>

            <h3
              className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight mb-6"
              style={{ color: result.color }}
            >
              YOU ARE
              <br />
              {result.pill}
            </h3>

            <p className="font-mono text-sm text-white/50 leading-relaxed max-w-md mx-auto mb-8">
              {result.explanation}
            </p>

            <button
              onClick={reset}
              className="font-mono text-xs tracking-widest uppercase text-white/30 hover:text-[#f0f0f0] transition-colors border border-white/10 px-4 py-2 hover:border-[#f0f0f0]/50"
            >
              Run Again
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
