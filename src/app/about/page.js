import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'About Experiva Engineering',
  description: 'Founded in 2018 in Dwarka, New Delhi. The origin of India\'s most exacting industrial flooring and structural rehabilitation practice.',
};

const IMG = {
  hero:  'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-02.jpg',
  site1: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  site2: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  site3: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
  floor: 'https://experivaengineering.com/wp-content/uploads/2020/07/flooring.png',
};

const TIMELINE = [
  { year: '2018', event: 'Incorporated in Dwarka, New Delhi. First commission: epoxy floor coating for a 1,200 sqm pharmaceutical packaging unit in Baddi.' },
  { year: '2019', event: 'First structural rehabilitation contract awarded — carbonation treatment and waterproofing of a 14-storey residential tower in Dwarka Sector 10.' },
  { year: '2020', event: 'Expanded team to 20 in-house applicators. First large-format logistics project: 12,000 sqm epoxy broadcast for a 3PL operator in Bhiwandi.' },
  { year: '2021', event: 'Established in-house materials testing capability (Schmidt hammer, half-cell, cover meter). No longer reliant on third-party labs for preliminary diagnosis.' },
  { year: '2022', event: '40 in-house specialists. First data centre commission. Cold storage and pharma cleanroom flooring practices formalized.' },
  { year: '2023', event: 'Crossed 80 delivered projects. First CFRP structural strengthening commission — retrofit of a 1990s reinforced concrete frame in Gurugram.' },
  { year: '2024', event: '100+ projects delivered. ESR Logistics and Amazon Fulfilment commissions — 31,000 sqm in a single project. Zero subcontracting maintained.' },
];

const NUMBERS = [
  { value: '8+',   unit: 'Years',       desc: 'of uninterrupted execution' },
  { value: '100+', unit: 'Projects',    desc: 'across India' },
  { value: '40',   unit: 'Specialists', desc: 'in-house, zero subcontracted' },
  { value: '0',    unit: 'Times',       desc: 'we have subcontracted work' },
];

const PRINCIPLES = [
  {
    title: 'Substrate first, product second',
    body: 'Every specification is derived from measured substrate conditions. We do not maintain preferred supplier arrangements that might bias our product choices.',
  },
  {
    title: 'Engineers on site, not salespeople',
    body: 'The person who signs the method statement is present during critical phases of execution. Client-facing roles and site supervision are not separated.',
  },
  {
    title: 'Documentation is the product',
    body: 'Pull-off test certificates, batch records, QA logs and warranty documents are as important as the work itself. They\'re what your facility manager relies on in year five.',
  },
  {
    title: 'No subcontracting, ever',
    body: 'We have never passed work to an external applicator. The quality control chain from quotation to handover stays intact because the same people are accountable throughout.',
  },
  {
    title: 'Long-term relationships only',
    body: 'We don\'t pursue single-transaction clients. Our retention rate is above 80%. When something doesn\'t go perfectly, we fix it — because we intend to be around for the next project.',
  },
  {
    title: 'Honest scoping, not competitive underbidding',
    body: 'We will tell you when a repair scope is insufficient. Being awarded a job by underbidding and then issuing variation orders is not a practice we engage in.',
  },
];

const LEADERSHIP = [
  {
    name: 'Vikram Sahoo',
    role: 'Founder & Managing Director',
    background: 'Civil & structural engineering background. 15+ years in industrial flooring and rehabilitation across India and Southeast Asia before founding Experiva.',
    contact: 'vikram.sahoo@experivaengineering.com',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <Image src={IMG.hero} alt="Experiva Engineering site operations" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 hero-overlay" />

        <span className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-2 border-l-2 border-amber-500/60" />
        <span className="absolute bottom-0 right-6 lg:right-12 w-12 h-12 border-b-2 border-r-2 border-amber-500/40" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">About · Experiva Engineering</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-6">
            Built by engineers.<br />
            <em className="text-amber-400 not-italic">Run by engineers.</em>
          </h1>
          <p className="text-white/60 text-lg max-w-[52ch] leading-relaxed">
            Incorporated in Dwarka, New Delhi in 2018. We set out to do one thing differently: never compromise on diagnosis, never subcontract, never guess.
          </p>
        </div>
      </section>

      {/* ═══ ORIGIN STORY */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Origin</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-8 leading-snug">
                The problem with<br />the industry.
              </h2>
              <div className="space-y-5 text-white/55 text-base leading-relaxed">
                <p>
                  Industrial flooring in India was, and to a large extent remains, a product-driven industry. Contractors carry product lines from one or two manufacturers and specify backwards from what they stock.
                </p>
                <p>
                  The result is floors that fail prematurely — not because the products are poor, but because no one did a proper substrate assessment before specifying them.
                </p>
                <p>
                  Experiva was founded on the conviction that the correct order is: measure the substrate → identify the performance requirement → select the system. Not the reverse.
                </p>
                <p className="text-white/75 font-medium">
                  Eight years later, that founding principle is still the reason clients specify us by name on their next project.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image src={IMG.floor} alt="Experiva flooring installation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#071326]/30 to-transparent" />
              </div>
              {/* amber accent corners */}
              <span className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-amber-500/50" />
              <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-amber-500/50" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ NUMBERS */}
      <section className="bg-amber-500 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {NUMBERS.map((n, i) => (
              <ScrollReveal key={n.unit} delay={i * 80} className="text-center">
                <p className="font-display text-5xl lg:text-6xl font-light text-white mb-1">{n.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{n.unit}</p>
                <p className="text-white/65 text-xs">{n.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">History</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Eight years.<br /><em className="text-white/50 not-italic">One commitment.</em>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[60px] lg:left-[90px] top-0 bottom-0 w-px bg-white/8" />

            <div className="space-y-0">
              {TIMELINE.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 70} className="relative flex gap-8 lg:gap-14 pb-12">
                  <div className="shrink-0 w-[60px] lg:w-[90px] text-right">
                    <span className="text-amber-400 font-mono text-sm font-semibold">{t.year}</span>
                  </div>
                  {/* dot */}
                  <div className="absolute left-[56px] lg:left-[86px] top-1.5 w-2 h-2 rounded-full bg-amber-500/60 border-2 border-[#040d1a]" />
                  <p className="text-white/55 text-sm leading-relaxed pt-0.5 max-w-[60ch]">{t.event}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Leadership</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              The person<br /><em className="text-white/50 not-italic">accountable.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LEADERSHIP.map((l) => (
              <ScrollReveal key={l.name} className="border border-white/8 p-8 hover:border-white/15 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full border border-amber-500/40 grid place-items-center mb-6">
                  <span className="font-display text-white text-xl font-light">{l.name[0]}</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-1">{l.name}</h3>
                <p className="text-amber-400/70 text-sm mb-5">{l.role}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{l.background}</p>
                <a href={`mailto:${l.contact}`} className="text-white/35 text-xs hover:text-white/70 transition-colors duration-200 font-mono">{l.contact}</a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Principles</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              What we hold<br /><em className="text-white/50 not-italic">non-negotiable.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} className="bg-[#040d1a] p-8 hover:bg-white/[0.02] transition-colors duration-300">
                <div className="w-1 h-8 bg-amber-500/60 mb-6" />
                <h3 className="text-white font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO STRIP */}
      <div className="grid grid-cols-3 h-64 lg:h-80">
        {[IMG.site1, IMG.site2, IMG.site3].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={src} alt="Experiva Engineering site" fill sizes="33vw" className="object-cover object-center hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#071326]/30" />
          </div>
        ))}
      </div>

      {/* ═══ CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">Start a conversation.</h2>
            <p className="text-white/75 text-lg max-w-[44ch]">We're based in Dwarka, New Delhi and work across India. Projects typically start with a site visit.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold text-sm px-8 py-4 rounded hover:bg-amber-50 transition-colors duration-200">
              Contact us →
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded hover:border-white/70 transition-colors duration-200">
              View our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
