import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Journal',
  description: 'Technical notes, specification guides and industry perspectives from the Experiva Engineering team.',
};

const IMG = {
  site1: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  site2: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  site3: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
  floor: 'https://experivaengineering.com/wp-content/uploads/2020/07/flooring.png',
  rehab: 'https://experivaengineering.com/wp-content/uploads/2020/07/repair-and-rehabiliation.png',
};

const ARTICLES = [
  {
    id: 'J-001',
    title: 'Why your epoxy floor failed in year two (and how to prevent it next time)',
    category: 'Flooring',
    date: 'March 2024',
    readTime: '6 min',
    excerpt: 'The most common cause of premature epoxy floor failure is not product quality — it\'s residual moisture in the substrate at time of application. We explain the physics, the tests, and the contractual protections you should insist on.',
    img: IMG.floor,
  },
  {
    id: 'J-002',
    title: 'Carbonation vs chloride attack: different causes, completely different repairs',
    category: 'Rehabilitation',
    date: 'February 2024',
    readTime: '8 min',
    excerpt: 'Spalling concrete looks the same whether the cause is carbonation or chloride ingress. But the repair strategies are fundamentally different. A mistaken diagnosis leads to a repair that fails within three years.',
    img: IMG.rehab,
  },
  {
    id: 'J-003',
    title: 'Specifying floors for cold storage: the four factors most consultants miss',
    category: 'Flooring',
    date: 'January 2024',
    readTime: '5 min',
    excerpt: 'Thermal cycling between –25°C and +20°C generates stresses that most standard epoxy systems cannot sustain. We walk through the correct specification approach, from primer selection to skirting detail.',
    img: IMG.site3,
  },
  {
    id: 'J-004',
    title: 'The case against tendering floor work on price alone',
    category: 'Industry',
    date: 'November 2023',
    readTime: '4 min',
    excerpt: 'A 15% saving on the initial contract price has a documented tendency to produce a 40–60% cost in repairs within 36 months. The arithmetic of false economy in industrial flooring procurement.',
    img: IMG.site1,
  },
  {
    id: 'J-005',
    title: 'CFRP strengthening: what it can and cannot do for your ageing structure',
    category: 'Rehabilitation',
    date: 'October 2023',
    readTime: '7 min',
    excerpt: 'Carbon fibre reinforced polymer laminates are extraordinarily capable — but they are not magic. Understanding the limitations is as important as understanding the applications.',
    img: IMG.rehab,
  },
  {
    id: 'J-006',
    title: 'Polished concrete: why specification matters more than machine time',
    category: 'Flooring',
    date: 'August 2023',
    readTime: '5 min',
    excerpt: 'Polished concrete has a reputation for inconsistency. That reputation is earned — but the cause is almost always an under-specified densifier programme or a floor that was never properly designed for mechanical polishing.',
    img: IMG.floor,
  },
  {
    id: 'J-007',
    title: 'Reading a condition survey report: a guide for facility managers',
    category: 'Rehabilitation',
    date: 'July 2023',
    readTime: '6 min',
    excerpt: 'Condition survey reports are dense with technical language. We explain what the key tests mean, what thresholds matter, and how to distinguish a conservative recommendation from an unnecessarily alarming one.',
    img: IMG.site2,
  },
  {
    id: 'J-008',
    title: 'PU vs epoxy for food-grade floors: what the regulations actually say',
    category: 'Flooring',
    date: 'May 2023',
    readTime: '4 min',
    excerpt: 'FSSAI and FDA guidelines are frequently cited but rarely read. We go through the actual requirements so you can push back when a contractor over-specifies (or dangerously under-specifies).',
    img: IMG.site3,
  },
  {
    id: 'J-009',
    title: 'Why the three-day survey is the cheapest line item in any rehab project',
    category: 'Rehabilitation',
    date: 'March 2023',
    readTime: '3 min',
    excerpt: 'Clients sometimes push back on paying for a condition survey before committing to repair works. This article explains why that position costs more money than the survey fee, almost every time.',
    img: IMG.rehab,
  },
];

const SPECS = [
  {
    ref: 'EXP-SPEC-001',
    title: 'Standard Specification: Epoxy Broadcast Flooring System',
    version: 'v2.1 — 2024',
    scope: 'Heavy-duty logistics, automotive and manufacturing environments. Forklift-rated. Includes primer, broadcast aggregate and topcoat specifications.',
  },
  {
    ref: 'EXP-SPEC-002',
    title: 'Standard Specification: PU Self-Levelling Floor — GMP Grade',
    version: 'v1.4 — 2023',
    scope: 'Pharmaceutical, cleanroom and food processing environments. Seamless, non-porous. Includes ESD layer option.',
  },
  {
    ref: 'EXP-SPEC-003',
    title: 'Standard Specification: Carbonation Repair — BS EN 1504 Principle 7',
    version: 'v1.2 — 2023',
    scope: 'Re-alkalisation of carbonated concrete. Includes passivation, mortar repair and anti-carbonation coating.',
  },
  {
    ref: 'EXP-SPEC-004',
    title: 'Method Statement: Crack Injection — Low Pressure Epoxy',
    version: 'v2.0 — 2024',
    scope: 'Structural cracks 0.2–2.0 mm width. Includes port spacing, injection pressure limits and QA check criteria.',
  },
];

const CATEGORIES = ['All', 'Flooring', 'Rehabilitation', 'Industry'];

export default function JournalPage() {
  return (
    <>
      {/* ═══ HERO */}
      <section className="bg-[#071326] pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Journal · Technical Notes</p>
            <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-6">
              Writing about<br />
              <em className="text-amber-400 not-italic">what we know.</em>
            </h1>
            <p className="text-white/55 text-lg max-w-[52ch] leading-relaxed">
              Technical perspectives from the Experiva team. Specification guides, failure analysis and industry commentary — written by engineers, for the people who commission them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FEATURED ARTICLE */}
      <section className="bg-[#040d1a] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/8 overflow-hidden hover:border-amber-500/25 transition-colors duration-300 group cursor-pointer">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src={ARTICLES[0].img}
                  alt={ARTICLES[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#040d1a]/20" />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[9px] font-mono text-amber-400/60 tracking-widest">{ARTICLES[0].id}</span>
                  <span className="text-[10px] text-amber-400/70 border border-amber-500/25 px-2.5 py-0.5 rounded-full">{ARTICLES[0].category}</span>
                  <span className="text-white/25 text-[10px]">Featured</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-light text-white mb-5 leading-snug group-hover:text-amber-50 transition-colors duration-200">
                  {ARTICLES[0].title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{ARTICLES[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/25 text-xs">
                    <span>{ARTICLES[0].date}</span>
                    <span>·</span>
                    <span>{ARTICLES[0].readTime} read</span>
                  </div>
                  <span className="text-amber-400/50 group-hover:text-amber-400 transition-colors text-sm">Read →</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ARTICLES GRID */}
      <section className="bg-[#040d1a] pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="text-white/25 text-[10px] font-semibold tracking-widest uppercase mb-2">All articles</p>
            <div className="flex gap-2 flex-wrap mt-4">
              {CATEGORIES.map(c => (
                <span key={c} className="text-[11px] border border-white/10 text-white/40 px-3 py-1 rounded-full cursor-pointer hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-200">
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {ARTICLES.slice(1).map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 60} className="bg-[#040d1a] group cursor-pointer hover:bg-white/[0.015] transition-colors duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/80 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] text-amber-400/70 border border-amber-500/20 px-2 py-0.5 rounded-full">{a.category}</span>
                </div>
                <div className="p-7">
                  <span className="text-[9px] font-mono text-white/20 tracking-widest">{a.id}</span>
                  <h3 className="text-white font-semibold text-sm mt-2 mb-3 leading-snug group-hover:text-amber-50 transition-colors duration-200">
                    {a.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-5 line-clamp-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-white/25">
                    <span>{a.date} · {a.readTime}</span>
                    <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPEC NOTES */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Specification Library</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Standard<br /><em className="text-white/50 not-italic">specification notes.</em>
            </h2>
            <p className="text-white/40 text-sm mt-5 max-w-[48ch]">
              Downloadable specifications available on request. Contact us with your project details and we'll send the relevant document.
            </p>
          </ScrollReveal>

          <div className="space-y-px">
            {SPECS.map((s, i) => (
              <ScrollReveal key={s.ref} delay={i * 70} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 border-b border-white/5 group hover:bg-white/[0.015] px-4 -mx-4 transition-colors duration-200 cursor-pointer">
                <span className="text-amber-400/50 font-mono text-sm shrink-0 w-32">{s.ref}</span>
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-semibold mb-1.5 group-hover:text-white transition-colors">{s.title}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{s.scope}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-white/20 text-xs font-mono">{s.version}</span>
                  <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors text-sm">Request →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Stay informed</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-5">
                Technical updates<br /><em className="text-white/50 not-italic">when they matter.</em>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-10">
                We publish 6–8 pieces per year — case studies, specification updates and industry analysis. No marketing, no newsletters about newsletters.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#" method="POST">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border border-white/15 text-white text-sm px-5 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/25"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-7 py-3.5 rounded transition-all duration-200 shrink-0"
                >
                  Subscribe →
                </button>
              </form>
              <p className="text-white/20 text-xs mt-4">Unsubscribe at any time. No spam.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
