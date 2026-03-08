export type PillColor = 'blue' | 'red' | 'black' | 'white' | 'orange' | 'pump' | 'purple'

export interface Pill {
  id: PillColor
  name: string
  tagline: string
  year: string
  culturalMoment: string
  color: string
  glowClass: string
  tintColor: string
  tintOpacity: number
  overview: string
  history: string
  culture: string
  media: string
  research: string
  videos: string[]
  articles: string[]
}

export interface EmergingPill {
  id: string
  name: string
  tagline: string
  description: string
  signals: string[]
  impact: string
  color: string
}

export const PILLS: Pill[] = [
  {
    id: 'blue',
    name: 'Blue Pill',
    tagline: 'Comfortable ignorance. The world as it appears.',
    year: '1999',
    culturalMoment: 'The Matrix introduces a generation to the concept of constructed reality.',
    color: '#3b82f6',
    glowClass: 'pill-glow-blue',
    tintColor: '#3b82f6',
    tintOpacity: 0.04,
    overview:
      'The Blue Pill represents the choice to remain in comfortable ignorance — to accept the world as presented, without questioning the underlying systems that shape perception and reality.',
    history:
      'Popularized by the Wachowskis in The Matrix (1999), the blue pill metaphor quickly escaped cinema and entered the broader cultural lexicon as shorthand for willful blindness and societal conformity.',
    culture:
      'In online spaces, "blue pilled" is used to describe those who accept mainstream narratives. The term appears across political forums, self-improvement communities, and philosophical debates about epistemology.',
    media:
      'The Matrix (1999), Manufacturing Consent (Chomsky), The Truman Show (1998), Brave New World (Huxley). Each depicts comfortable, manufactured existence.',
    research:
      'Cognitive scientists describe "motivated reasoning" — the tendency to seek information confirming pre-existing beliefs. The blue pill instinct is not stupidity; it is the default cognitive mode of most conscious organisms. Comfort is evolutionarily advantageous.',
    videos: [
      'https://www.youtube.com/watch?v=vKQi3bBA1y8',
      'https://www.youtube.com/watch?v=2KnZac176Hs',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/The_Matrix',
      'https://en.wikipedia.org/wiki/Manufacturing_Consent',
      'https://en.wikipedia.org/wiki/Motivated_reasoning',
    ],
  },
  {
    id: 'red',
    name: 'Red Pill',
    tagline: 'Awakening to hidden structures. Reality unfiltered.',
    year: '1999 — 2012',
    culturalMoment: 'From Matrix philosophy to internet subcultures and subreddits.',
    color: '#ef4444',
    glowClass: 'pill-glow-red',
    tintColor: '#ef4444',
    tintOpacity: 0.05,
    overview:
      'The Red Pill signifies awakening — the moment a person sees through constructed realities and begins to perceive hidden systems of power, control, and social conditioning.',
    history:
      'Born in 1999 with The Matrix, the red pill metaphor was adopted by MRA communities around 2012, spawning r/TheRedPill and dozens of ideological offshoots that interpreted "awakening" through various lenses: gender dynamics, economic systems, and political theory.',
    culture:
      'The red pill spread virally through forums, YouTube rabbit holes, and podcast ecosystems. It became a badge of intellectual defiance — proof that one had "done the research." The metaphor is now politically ambiguous, claimed by ideologies across the spectrum.',
    media:
      `The Matrix (1999), r/TheRedPill (2012), Rollo Tomassi's "The Rational Male," various YouTube channels on hypergamy and gender dynamics, Joe Rogan Experience episodes on awakening.`,
    research:
      'Psychologists study "red pill" communities through the lens of radicalization pathways, epistemic bubbles, and identity formation. The appeal of the red pill is real: humans are hardwired to seek pattern and meaning. The danger lies in systems that exploit this hunger for truth.',
    videos: [
      'https://www.youtube.com/watch?v=vKQi3bBA1y8',
      'https://www.youtube.com/watch?v=lgPOsybQxgk',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Red_pill_and_blue_pill',
      'https://en.wikipedia.org/wiki/The_Red_Pill',
      'https://en.wikipedia.org/wiki/Echo_chamber_(media)',
    ],
  },
  {
    id: 'black',
    name: 'Black Pill',
    tagline: 'Determinism. The game is rigged. Exit the illusion.',
    year: '2015 — 2018',
    culturalMoment: 'Incel forums and the ideology of biological determinism go mainstream.',
    color: '#6b7280',
    glowClass: 'pill-glow-black',
    tintColor: '#1a1a1a',
    tintOpacity: 0.08,
    overview:
      'The Black Pill is the ideology of irreversibility — the belief that certain outcomes are determined by immutable biological or social factors, making individual effort futile. It is nihilism dressed as empiricism.',
    history:
      'Originating in incel communities circa 2015, the black pill extended red pill logic to its most extreme conclusion: if the system is rigged, and effort cannot change the outcome, then awakening leads only to despair. The philosophy spread beyond gender discourse into broader doomerism.',
    culture:
      'Black pill aesthetics permeate anonymous image boards and fringe communities. The visual language is deliberately ugly and despairing — a rejection of all motivational frameworks. Memes are its primary scripture.',
    media:
      'Various incel forums, anonymous image boards, doomer music playlists, nihilist philosophy texts. The black pill has no mainstream media — it exists in the margins by design.',
    research:
      "Researchers at RAND and various university sociology departments have studied black pill communities as case studies in radicalization, learned helplessness, and the internet's capacity to amplify niche ideologies into mass movements.",
    videos: [
      'https://www.youtube.com/watch?v=fD2briZ6fB0',
      'https://www.youtube.com/watch?v=2j6l9iH6h8A',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Incel',
      'https://en.wikipedia.org/wiki/Learned_helplessness',
      'https://en.wikipedia.org/wiki/Nihilism',
    ],
  },
  {
    id: 'white',
    name: 'White Pill',
    tagline: 'Hope after awareness. Agency within the void.',
    year: '2019 — present',
    culturalMoment: 'A counter-ideology emerges — aware, but not defeated.',
    color: '#e5e5e5',
    glowClass: 'pill-glow-white',
    tintColor: '#ffffff',
    tintOpacity: 0.02,
    overview:
      "The White Pill is the post-nihilist response — awareness of systemic problems combined with belief in individual or collective agency. It accepts the red pill's diagnosis but rejects the black pill's prognosis.",
    history:
      "The white pill emerged as a direct counter-movement to the black pill's despair. Popularized by elements of dissident right communities and later adopted by broader self-improvement circles, it argued that awareness without agency is just sophisticated suffering.",
    culture:
      'White pill content tends toward discipline, building, tradition, and community. Its aesthetic is cleaner and more aspirational than the ruinous imagery of black pill spaces. It is the ideological framework of the "builder" archetype.',
    media:
      'Bronze Age Mindset (BAP), various Substack writers on civilization, self-improvement podcasts, stoic philosophy revival, Building the Future content creators.',
    research:
      'Positive psychologists argue the white pill framework aligns with research on "post-traumatic growth" — the empirical finding that awareness of suffering, when coupled with agency and community, often produces more resilient and purposeful individuals.',
    videos: [
      'https://www.youtube.com/watch?v=Fz6VJK3mS08',
      'https://www.youtube.com/watch?v=Y6U7mAnPtw4',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Post-traumatic_growth',
      'https://en.wikipedia.org/wiki/Stoicism',
      'https://en.wikipedia.org/wiki/Agency_(sociology)',
    ],
  },
  {
    id: 'orange',
    name: 'Orange Pill',
    tagline: 'Monetary sovereignty. Hard money. Exit the system.',
    year: '2013 — present',
    culturalMoment: 'Bitcoin maximalism becomes a worldview, not just an investment thesis.',
    color: '#f97316',
    glowClass: 'pill-glow-orange',
    tintColor: '#f97316',
    tintOpacity: 0.04,
    overview:
      'The Orange Pill represents the Bitcoin awakening — the realization that fiat currency is a form of control, and that hard money is both economic and philosophical liberation.',
    history:
      "Coined by the Bitcoin community, the orange pill metaphor spread from Satoshi's white paper in 2009 through the 2013 price spike, Mt. Gox collapse, 2017 bull run, and into institutional adoption. Each cycle “orange pilled” a new generation.",
    culture:
      'Orange pill culture blends Austrian economics, libertarian philosophy, cypherpunk ideology, and meme warfare. Conferences, podcasts, Twitter spaces, and laser-eyed profile pictures serve as community markers. "Stack sats" is both advice and ideology.',
    media:
      'The Bitcoin Standard (Saifedean Ammous), Gradually, Then Suddenly (Parker Lewis), What is Money Show (Robert Breedlove), various Bitcoin-only podcasts and newsletters.',
    research:
      "Economists debate whether Bitcoin represents genuine monetary innovation or speculative tulip-mania. The orange pill's genius is making economic philosophy emotionally compelling — it transforms abstract monetary theory into a personal liberation narrative.",
    videos: [
      'https://www.youtube.com/watch?v=41JCpzvnn_0',
      'https://www.youtube.com/watch?v=ZKwqNgG-Sv4',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Bitcoin',
      'https://en.wikipedia.org/wiki/The_Bitcoin_Standard',
      'https://en.wikipedia.org/wiki/Cypherpunk',
    ],
  },
  {
    id: 'purple',
    name: 'Purple Pill',
    tagline: 'Power, gender, and the architecture of social control.',
    year: '2012 — present',
    culturalMoment: 'Feminist theory escapes academia and becomes a mass cultural operating system.',
    color: '#9333ea',
    glowClass: 'pill-glow-purple',
    tintColor: '#9333ea',
    tintOpacity: 0.05,
    overview:
      'The Purple Pill is the feminist awakening — the recognition that gender, social structures, and institutional power are deeply intertwined. It reframes personal experience as political, and political systems as gendered by design.',
    history:
      'Rooted in second-wave feminism of the 1960s–70s, the purple pill metaphor crystallized online in the 2010s as feminist discourse moved from academic journals to Twitter, TikTok, and mainstream media. #MeToo in 2017 was its mass awakening moment.',
    culture:
      'Purple pill culture spans academic critical theory, pop feminism, gender studies discourse, and online communities. It operates in fashion, language, media criticism, and workplace policy. Its aesthetics range from academic rigour to viral meme warfare.',
    media:
      `The Handmaid's Tale (Atwood), bell hooks' "Feminist Theory: From Margin to Center," Simone de Beauvoir's "The Second Sex," Roxane Gay's "Bad Feminist," various feminist podcasts and Substacks. #MeToo coverage 2017–present.`,
    research:
      "Gender studies, sociology, and political science departments have produced decades of empirical research on pay gaps, institutional bias, representation, and gendered violence. The purple pill's insight — that social structures encode power asymmetries — has significant empirical backing across disciplines.",
    videos: [
      'https://www.youtube.com/watch?v=fC9da6eqaqg',
      'https://www.youtube.com/watch?v=tmk47kh7fiE',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Feminist_theory',
      'https://en.wikipedia.org/wiki/Second-wave_feminism',
      'https://en.wikipedia.org/wiki/MeToo_movement',
    ],
  },
  {
    id: 'pump',
    name: 'Pump Pill',
    tagline: 'Belief itself became the market. The signal is the noise.',
    year: '2020 — present',
    culturalMoment: 'Meme stocks, influencer coins, and the financialization of ideology.',
    color: '#22c55e',
    glowClass: 'pill-glow-green',
    tintColor: '#22c55e',
    tintOpacity: 0.05,
    overview:
      'The Pump Pill is the terminal stage: when ideological awakening becomes a market event. Belief, narrative, and financial speculation collapse into one another, producing assets priced entirely on consensus rather than value.',
    history:
      'GameStop, Dogecoin, SHIB, and thousands of influencer-launched tokens mark the emergence of the pump pill. The ideology of awakening became itself a product — packaged, marketed, and sold to the newly awakened.',
    culture:
      'The pump pill is the ouroboros of ideological awakenings — the moment the system being critiqued absorbs the critique and sells it back. Every red pill becomes a product. Every orange pill spawns a thousand sh*tcoins.',
    media:
      'WallStreetBets, Crypto Twitter, influencer tokens, OnlyFans-to-crypto pipelines, celebrity meme coins, the general financialization of everything. The media is the market.',
    research:
      `Behavioral economists call this "narrative economics" — the study of how stories move markets. Robert Shiller's work documents how belief systems, independent of fundamentals, drive asset prices. The pump pill is narrative economics at maximum entropy.`,
    videos: [
      'https://www.youtube.com/watch?v=2JQ3ZpE2n7I',
      'https://www.youtube.com/watch?v=av3k_lcGm9g',
    ],
    articles: [
      'https://en.wikipedia.org/wiki/Narrative_economics',
      'https://en.wikipedia.org/wiki/GameStop_short_squeeze',
      'https://en.wikipedia.org/wiki/Dogecoin',
    ],
  },
]

export const EMERGING_PILLS: EmergingPill[] = [
  {
    id: 'ai',
    name: 'AI Pill',
    tagline: 'Intelligence decoupled from biology.',
    description:
      'The awakening that human cognitive supremacy is temporary — and that the successor intelligence is already training on our data.',
    signals: ['LLM capability curves', 'White-collar automation', 'AGI timelines narrowing'],
    impact: 'Reframes every other ideology through the lens of post-human economics and epistemology.',
    color: '#818cf8',
  },
  {
    id: 'doomer',
    name: 'Doomer Pill',
    tagline: 'Civilizational decline is already in motion.',
    description:
      'The belief that systemic collapse — ecological, social, or civilizational — is no longer preventable. The question is only how to live within the decline.',
    signals: ['Climate tipping points', 'Institutional trust collapse', 'Demographic implosion'],
    impact: 'Generates withdrawal, prepper culture, and post-growth philosophy as dominant modes.',
    color: '#78716c',
  },
  {
    id: 'zoom',
    name: 'Zoomer Pill',
    tagline: 'Speed up the contradictions. Let it collapse.',
    description:
      'The counterintuitive thesis that the fastest path through systemic collapse is through it — accelerating contradictions until the old order becomes unsustainable.',
    signals: ['e/acc movement', 'Tech accelerationism', 'Political accelerationism'],
    impact: 'Fractures reform coalitions and supercharges both techno-optimism and nihilism simultaneously.',
    color: '#f43f5e',
  },
  {
    id: 'simulation',
    name: 'Simulation Pill',
    tagline: 'If reality is rendered, then everything is negotiable.',
    description:
      'The philosophical position that we may inhabit a computed substrate — with cascading implications for meaning, ethics, death, and free will.',
    signals: ["Bostrom's simulation argument", 'Physics anomalies', 'AI-generated reality proliferation'],
    impact: 'Dissolves the distinction between the metaphysical and the political. If reality is code, who has root access?',
    color: '#22d3ee',
  },
]