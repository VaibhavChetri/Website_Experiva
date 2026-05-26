import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSlideshow from '@/components/HeroSlideshow';

const IMG = {
  hero:     'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-02.jpg',
  flooring: 'https://experivaengineering.com/wp-content/uploads/2020/07/flooring.png',
  rehab:    'https://experivaengineering.com/wp-content/uploads/2020/07/repair-and-rehabiliation.png',
  site1:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  site2:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  site3:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
};

const SERVICES = [
  { id: '01', title: 'Epoxy Flooring & Coatings',  desc: 'Chemical-resistant, heavy-duty systems for logistics, automotive and manufacturing.',  href: '/flooring',        practice: 'Industrial Flooring' },
  { id: '02', title: 'PU Self-Levelling Systems',   desc: 'Thermal shock and hygiene-grade resin floors for food, pharma and cold storage.',     href: '/flooring',        practice: 'Industrial Flooring' },
  { id: '03', title: 'Polished Concrete',            desc: 'Mechanically densified, dust-free finishes for warehouses and showrooms.',             href: '/flooring',        practice: 'Industrial Flooring' },
  { id: '04', title: 'Concrete Repair',              desc: 'Spall, crack and delamination repair using polymer-modified mortars.',                  href: '/rehabilitation',  practice: 'Rehabilitation' },
  { id: '05', title: 'Structural Rehabilitation',    desc: 'CFRP wrapping, micro-concrete jacketing, beam and column retrofit.',                   href: '/rehabilitation',  practice: 'Rehabilitation' },
  { id: '06', title: 'Waterproofing Systems',        desc: 'Roof, basement and wet-area waterproofing with up to 10-year warranties.',             href: '/rehabilitation',  practice: 'Rehabilitation' },
];

const STATS = [
  { value: '8+',   label: 'Years executing' },
  { value: '100+', label: 'Projects delivered' },
  { value: '40',   label: 'In-house specialists' },
  { value: '0',    label: 'Subcontractors ever' },
];

const PROCESS = [
  { step: '01', title: 'Site Survey',         desc: 'Substrate condition, moisture, load and chemical exposure measured before any product is specified.' },
  { step: '02', title: 'Method Statement',    desc: 'AutoCAD drawings, MSDS and execution timeline delivered for client approval before mobilisation.' },
  { step: '03', title: 'In-house Execution',  desc: '40 trained specialists under supervision of the design engineer. Daily QA logs, no subcontracting.' },
  { step: '04', title: 'Documented Handover', desc: 'Independent pull-off testing, warranty documentation and maintenance schedule at handover.' },
];

const PROJECTS = [
  { file: '001', client: 'Danisco — DuPont',       type: 'Floor Rehabilitation',   sector: 'Food Ingredients', area: '4,200 sqm',  year: '2023' },
  { file: '002', client: 'ESR Logistics Park',      type: 'Epoxy Floor Coating',    sector: 'Logistics',         area: '18,500 sqm', year: '2024' },
  { file: '003', client: 'Indospace Industrial',    type: 'PU Self-Levelling',      sector: 'Manufacturing',     area: '9,800 sqm',  year: '2024' },
  { file: '004', client: 'Confidential Pharma',     type: 'Resinous Cleanroom',     sector: 'Pharmaceutical',    area: '2,400 sqm',  year: '2023' },
  { file: '005', client: 'Auto Components Plant',   type: 'Polished Concrete',      sector: 'Automotive',        area: '12,000 sqm', year: '2022' },
  { file: '006', client: 'Amazon Fulfillment Centre','type': 'Epoxy + Line Marking', sector: 'Logistics',        area: '31,000 sqm', year: '2024' },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — video background */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#071326]">
        <HeroSlideshow />
        <div className="hero-overlay absolute inset-0 z-[5]" />

        {/* Amber corner accents */}
        <div className="absolute top-20 left-6 lg:left-12 w-14 h-14 border-t-2 border-l-2 border-amber-400 z-10" aria-hidden="true" />
        <div className="absolute bottom-32 right-6 lg:right-12 w-14 h-14 border-b-2 border-r-2 border-amber-400 z-10" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-36 pt-36">
          <p className="text-amber-400 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
            Specialist Contractor · Delhi NCR · Est. 2018
          </p>
          <h1
            className="font-display font-light text-white leading-[0.93] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
          >
            UNDISPUTED<br />
            <em className="not-italic text-amber-400">FLOOR</em><br />
            ENGINEERS.
          </h1>
          <p className="text-white/60 text-lg max-w-[46ch] mb-10 leading-relaxed">
            Eight years of resinous flooring and structural rehabilitation across
            India&apos;s most demanding industrial environments — engineered in-house,
            executed on schedule.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-8 py-4 rounded transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Explore Services →
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white text-sm font-semibold px-7 py-4 rounded transition-all duration-200 hover:bg-white/5"
            >
              View 100+ Projects
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 glass-stats mx-4 lg:mx-12 mb-6 rounded-xl px-8 py-5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`${i < 3 ? 'sm:border-r border-white/12' : ''} pr-5 first:pl-0`}
              >
                <p className="font-display text-white font-light text-3xl sm:text-4xl leading-none mb-1">
                  {value}
                </p>
                <p className="text-white/45 text-xs tracking-[0.12em] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE */}
      <div className="bg-amber-500 py-3 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee">
          {Array.from({ length: 2 }, (_, rep) =>
            ['Industrial Flooring','Structural Rehabilitation','Epoxy Systems','Waterproofing',
             'Polished Concrete','Concrete Repair','PU Self-Levelling','Anti-Static Floors',
            ].map((t) => (
              <span key={`${rep}-${t}`} className="text-white font-semibold text-sm tracking-[0.15em] uppercase whitespace-nowrap flex items-center gap-10 mx-5">
                {t} <span className="text-white/40 text-base">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══ PHILOSOPHY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <ScrollReveal>
              <p className="text-amber-500 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
                Our philosophy
              </p>
              <h2
                className="font-display font-light text-[#0B1D3A] leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                We do two things<br />
                <span className="italic text-amber-500">exceptionally well</span>,<br />
                and we politely decline<br />everything else.
              </h2>
              <p className="text-[#718096] text-lg leading-relaxed mb-10 max-w-[46ch]">
                Industrial Flooring and Structural Rehabilitation — both practices share one
                engineering core: substrate diagnosis, engineered specification, in-house
                execution and documented handover.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/flooring"
                  className="inline-flex items-center gap-2 bg-[#0B1D3A] hover:bg-amber-500 text-white text-sm font-bold px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5">
                  Industrial Flooring →
                </Link>
                <Link href="/rehabilitation"
                  className="inline-flex items-center gap-2 border border-[#0B1D3A]/20 hover:border-amber-500 text-[#0B1D3A] text-sm font-semibold px-6 py-3.5 rounded transition-all duration-200">
                  Rehabilitation →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-amber-400 z-10" aria-hidden="true" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-amber-400 z-10" aria-hidden="true" />
                <div className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-2xl">
                  <Image
                    src={IMG.flooring}
                    alt="Experiva industrial flooring installation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0B1D3A]/15" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — split-panel practice showcase */}
      <section className="bg-[#071326] pt-24 lg:pt-32 pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-400 text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">Services</p>
            <h2
              className="font-display font-light text-white leading-none mb-14"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              What we do
            </h2>
          </ScrollReveal>

          {/* Practice I — Industrial Flooring: image left, services right */}
          <ScrollReveal delay={60}>
            <div className="grid lg:grid-cols-[5fr_7fr] border border-white/6 overflow-hidden mb-px">
              <div className="relative min-h-[260px] lg:min-h-[400px]">
                <Image src={IMG.flooring} alt="" fill className="object-cover" sizes="40vw" />
                <div className="absolute inset-0 bg-[#071326]/72" />
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <p className="text-white/18 font-mono text-[10px] tracking-[0.4em] uppercase">Practice 01</p>
                  <h3
                    className="font-display font-light text-white leading-none"
                    style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)' }}
                  >
                    Industrial<br />
                    <span className="text-amber-400/75">Flooring</span>
                  </h3>
                </div>
              </div>
              <div className="lg:border-l border-t lg:border-t-0 border-white/6 divide-y divide-white/5">
                {SERVICES.slice(0, 3).map((svc) => (
                  <Link
                    key={svc.id}
                    href={svc.href}
                    className="group flex items-start gap-4 p-6 lg:p-7 hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <span className="text-amber-400/30 font-mono text-[10px] mt-0.5 shrink-0 w-4 tabular-nums">{svc.id}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-[15px] font-semibold group-hover:text-amber-300 transition-colors duration-200 mb-1 leading-snug">
                        {svc.title}
                      </h4>
                      <p className="text-white/30 text-[13px] leading-relaxed">{svc.desc}</p>
                    </div>
                    <span className="shrink-0 text-white/15 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-200 text-base mt-0.5">→</span>
                  </Link>
                ))}
                <div className="px-7 py-4">
                  <Link href="/flooring" className="text-[10px] font-mono text-amber-400/35 hover:text-amber-400 tracking-[0.22em] uppercase transition-colors duration-200">
                    Full practice overview →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Practice II — Rehabilitation: services left, image right */}
          <ScrollReveal delay={120}>
            <div className="grid lg:grid-cols-[7fr_5fr] border border-white/6 border-t-0 overflow-hidden">
              <div className="divide-y divide-white/5 border-b lg:border-b-0 lg:border-r border-white/6 order-2 lg:order-1">
                {SERVICES.slice(3).map((svc) => (
                  <Link
                    key={svc.id}
                    href={svc.href}
                    className="group flex items-start gap-4 p-6 lg:p-7 hover:bg-white/[0.03] transition-colors duration-200"
                  >
                    <span className="text-amber-400/30 font-mono text-[10px] mt-0.5 shrink-0 w-4 tabular-nums">{svc.id}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-[15px] font-semibold group-hover:text-amber-300 transition-colors duration-200 mb-1 leading-snug">
                        {svc.title}
                      </h4>
                      <p className="text-white/30 text-[13px] leading-relaxed">{svc.desc}</p>
                    </div>
                    <span className="shrink-0 text-white/15 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all duration-200 text-base mt-0.5">→</span>
                  </Link>
                ))}
                <div className="px-7 py-4">
                  <Link href="/rehabilitation" className="text-[10px] font-mono text-amber-400/35 hover:text-amber-400 tracking-[0.22em] uppercase transition-colors duration-200">
                    Full practice overview →
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[260px] lg:min-h-0 order-1 lg:order-2">
                <Image src={IMG.rehab} alt="" fill className="object-cover" sizes="40vw" />
                <div className="absolute inset-0 bg-[#071326]/72" />
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <p className="text-white/18 font-mono text-[10px] tracking-[0.4em] uppercase">Practice 02</p>
                  <h3
                    className="font-display font-light text-white leading-none"
                    style={{ fontSize: 'clamp(1.9rem, 3vw, 3rem)' }}
                  >
                    Structural<br />
                    <span className="text-amber-400/75">Rehabilitation</span>
                  </h3>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FEATURED CASE */}
      <section className="py-24 lg:py-32 bg-[#F5F7FA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-500 text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">Featured project · 2023</p>
            <h2
              className="font-display font-light text-[#0B1D3A] leading-tight mb-14"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              A food-ingredients plant returned<br />
              to full service in{' '}
              <span className="italic text-amber-500">14 days.</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={80}>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={IMG.site1}
                  alt="DuPont Danisco floor rehabilitation project by Experiva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">File 023 / 100 · 2023</p>
                  <p className="text-white font-display font-light text-2xl">Danisco — DuPont</p>
                  <p className="text-amber-400 text-xs tracking-wide mt-1">Gurugram, Haryana</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded mb-5">
                Food Ingredients · Floor Rehab
              </span>
              <p className="text-[#1A202C] text-lg leading-relaxed mb-8">
                Delaminated flooring across 4,200 sqm of a working food-ingredients plant.
                Stripped, repaired and re-coated with a USDA-compliant PU system —
                without halting cold-side production.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 p-6 bg-white rounded-xl border border-[#E2E8F0] mb-8 shadow-sm">
                {[
                  { l: 'System',    v: 'PU Self-Levelling' },
                  { l: 'Area',      v: '4,200 m²' },
                  { l: 'Duration',  v: '14 days, phased' },
                  { l: 'Scope',     v: 'Floor Rehab' },
                  { l: 'Outcome',   v: 'Zero downtime', green: true },
                  { l: 'Standard',  v: 'USDA / FSSC' },
                ].map(({ l, v, green }) => (
                  <div key={l}>
                    <p className="text-[#718096] text-[10px] uppercase tracking-[0.15em] mb-1">{l}</p>
                    <p className={`font-semibold text-sm ${green ? 'text-green-600' : 'text-[#0B1D3A]'}`}>{v}</p>
                  </div>
                ))}
              </div>
              <Link href="/projects"
                className="inline-flex items-center gap-2 bg-[#0B1D3A] hover:bg-amber-500 text-white text-sm font-bold px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5">
                View all projects →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS */}
      <section className="py-24 lg:py-32 bg-[#0B1D3A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-400 text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">Our method</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <h2
                className="font-display font-light text-white leading-tight max-w-lg"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Every project begins on paper.<br />
                <span className="italic text-amber-400">Then in CAD. Then on site.</span>
              </h2>
              <p className="text-white/40 text-base max-w-sm leading-relaxed">
                Most callbacks happen because the wrong system was chosen on site, not
                designed in advance. Our method eliminates that gap entirely.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map(({ step, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 70}>
                <div className="glass rounded-xl p-7 h-full flex flex-col">
                  <p className="font-display text-white/8 font-light text-6xl leading-none mb-5 select-none">{step}</p>
                  <p className="text-amber-400 text-[10px] font-bold tracking-[0.18em] uppercase mb-3">Step {step}</p>
                  <h3 className="text-white font-semibold text-base mb-3">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={350}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-8 py-4 rounded transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/25 hover:-translate-y-0.5">
                Start a project →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROJECTS INDEX */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
              <div>
                <p className="text-amber-500 text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
                  Selected work · 2022 – 2024
                </p>
                <h2
                  className="font-display font-light text-[#0B1D3A] leading-tight"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  An index of recent files.
                </h2>
              </div>
              <Link href="/projects" className="text-[#0B1D3A]/40 text-sm hover:text-amber-500 transition-colors shrink-0">
                All 100 projects →
              </Link>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[#E2E8F0]">
            {PROJECTS.map(({ file, client, type, sector, area, year }, i) => (
              <ScrollReveal key={file} delay={i * 45}>
                <Link
                  href="/projects"
                  className="group flex items-center gap-5 py-5 hover:pl-3 transition-all duration-200 rounded"
                >
                  <span className="text-[#CBD5E0] text-xs font-mono w-7 shrink-0">{file}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-light text-[#0B1D3A] text-xl group-hover:text-amber-600 transition-colors leading-snug truncate">
                      {client}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span className="text-amber-600 text-xs font-medium">{sector}</span>
                      <span className="text-[#CBD5E0] text-xs">·</span>
                      <span className="text-[#718096] text-xs">{type}</span>
                      <span className="text-[#CBD5E0] text-xs">·</span>
                      <span className="text-[#718096] text-xs">{area}</span>
                      <span className="text-[#CBD5E0] text-xs">·</span>
                      <span className="text-[#718096] text-xs">{year}</span>
                    </div>
                  </div>
                  <span className="text-[#CBD5E0] text-xl group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 inline-block shrink-0">
                    ↗
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO STRIP */}
      <div className="bg-[#F5F7FA] py-4 overflow-hidden" aria-label="Project photos">
        <div className="flex gap-3 overflow-hidden">
          {[IMG.site1, IMG.site2, IMG.site3, IMG.flooring, IMG.rehab, IMG.site2, IMG.site3, IMG.flooring].map((src, i) => (
            <div key={i} className="relative shrink-0 w-60 h-40 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Experiva project ${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="240px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ REHAB BANNER */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.rehab}
            alt="Structural rehabilitation work by Experiva Engineering"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B1D3A]/88" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-400 text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">Practice II</p>
            <h2
              className="font-display font-light text-white mb-6 max-w-2xl leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              We do not replace buildings.<br />
              <span className="italic text-amber-400">We renew them.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
              Concrete repair, structural retrofit, waterproofing and protective coatings —
              engineered to extend asset life by decades.
            </p>
            <Link
              href="/rehabilitation"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 text-sm font-semibold px-7 py-4 rounded transition-all duration-200"
            >
              Explore Rehabilitation →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA */}
      <section className="bg-amber-500 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2
                className="font-display font-light text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Send us your drawings.
              </h2>
              <p className="text-white/75 text-lg">We&apos;ll send back a method statement within one working day.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-amber-600 hover:text-white hover:bg-[#0B1D3A] text-sm font-bold px-8 py-4 rounded transition-all duration-200 hover:shadow-xl"
              >
                Get a free consultation →
              </Link>
              <a
                href="tel:+919953061111"
                className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-7 py-4 rounded transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                +91 99530 61111
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
