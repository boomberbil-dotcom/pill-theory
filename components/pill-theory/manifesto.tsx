'use client'

export default function Manifesto() {

  function scrollNext() {
    const next = document.getElementById('timeline')
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const cards = [
    {
      id: '01',
      title: 'THE BIG SHOW',
      text:
        'Every headline is scripted. Every conflict is orchestrated. Wars, elections, crashes — narratives designed to keep you distracted from what is really happening behind closed doors.',
    },
    {
      id: '02',
      title: 'HIDDEN HANDS',
      text:
        'The same families. The same institutions. The same playbook repeating across centuries. Power funds both sides, owns the channels, and writes the rules.',
    },
    {
      id: '03',
      title: 'WAKE UP',
      text:
        'Crisis after crisis. The pattern never changes: problem, reaction, solution. And the solution always expands control.',
    },
  ]

  return (
    <section
      id="manifesto"
      className="relative py-32 px-4 md:px-8"
      aria-label="Ideological Framework"
    >
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <p className="font-mono text-xs text-[#f0f0f0] tracking-[0.35em] uppercase mb-12 text-center">
          Ideological Framework
        </p>

        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="font-mono text-sm text-white/60 leading-relaxed">
            Every era produces its own explanation for how the world really works.
            Religion. Capitalism. Nationalism. Communism.
            <br /><br />
            In the internet age those explanations became decentralised.
            Communities began forming their own interpretations of reality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card) => (
            <div
              key={card.id}
              className="group border border-white/10 bg-black/60 p-8 transition-all duration-300 hover:border-[#f0f0f0]/40 hover:bg-black/80 hover:-translate-y-1"
            >

              {/* Card index */}
              <p className="font-mono text-xs text-[#f0f0f0] tracking-widest mb-4">
                // {card.id}
              </p>

              {/* Title */}
              <h3 className="font-sans text-lg uppercase tracking-widest text-white mb-4">
                {card.title}
              </h3>

              {/* Text */}
              <p className="font-mono text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {card.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
