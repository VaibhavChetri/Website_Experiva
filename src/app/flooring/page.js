import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Industrial Flooring',
  description: 'Epoxy, PU, polished concrete and resinous flooring systems for India\'s most demanding industrial facilities. Specified, supplied and installed by Experiva.',
};

const IMG = {
  hero:     'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-02.jpg',
  flooring: 'https://experivaengineering.com/wp-content/uploads/2020/07/flooring.png',
  site1:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  site2:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  site3:    'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
};

const SYSTEMS = [
  {
    id: '01',
    name: 'Epoxy Broadcast System',
    thickness: '4 – 6 mm',
    uses: ['Warehouses', 'Automotive Plants', 'Cold Storage'],
    specs: 'Compressive strength ≥ 70 MPa · Chemical resistance to oils, fuels and solvents',
    note: 'Most specified system for heavy forklift traffic environments.',
  },
  {
    id: '02',
    name: 'PU Self-Levelling',
    thickness: '2 – 3 mm',
    uses: ['Food Processing', 'Pharmaceuticals', 'Cleanrooms'],
    specs: 'Thermal shock resistance –30°C to +120°C · Seamless, non-porous surface',
    note: 'Mandatory for GMP and FSSAI-regulated facilities.',
  },
  {
    id: '03',
    name: 'Polished Concrete (DFHS)',
    thickness: 'Substrate integrated',
    uses: ['Showrooms', 'Distribution Hubs', 'Tech Parks'],
    specs: 'Mohs hardness 7–8 · Dust-free, densified surface · DOI 70+',
    note: 'Zero ongoing maintenance cost once installed correctly.',
  },
  {
    id: '04',
    name: 'Epoxy Mortar (Heavy Duty)',
    thickness: '6 – 9 mm',
    uses: ['Foundries', 'Chemical Plants', 'Steel Works'],
    specs: 'Compressive strength ≥ 90 MPa · Resists acids, alkalis and thermal cycling',
    note: 'Suitable for environments where rubber-tired loaders operate.',
  },
  {
    id: '05',
    name: 'Antistatic / ESD Flooring',
    thickness: '2 – 4 mm',
    uses: ['Electronics Mfg.', 'Server Rooms', 'Defence'],
    specs: 'Surface resistance 10⁵ – 10⁸ Ω (ESD) or < 10⁵ Ω (Conductive)',
    note: 'IEC 61340 compliant. Earthing grid embedded during installation.',
  },
  {
    id: '06',
    name: 'PU Cement (Wet-Area)',
    thickness: '4 – 6 mm',
    uses: ['Beverage Plants', 'Slaughterhouses', 'Dairies'],
    specs: 'Moisture-tolerant application · pH resistance 1–14 · Coved skirting detail',
    note: 'Applied to damp substrates — no moisture waiting time.',
  },
];

const THICKNESS_PCT = { '01': 55, '02': 28, '03': 100, '04': 85, '05': 38, '06': 55 };

const COMPARISON = [
  { feature: 'Chemical resistance',   epoxy: '★★★★☆', pu: '★★★★★', polished: '★★☆☆☆', puCement: '★★★★★' },
  { feature: 'Thermal shock',          epoxy: '★★☆☆☆', pu: '★★★★★', polished: '★★★☆☆', puCement: '★★★★★' },
  { feature: 'Compressive strength',   epoxy: '★★★★★', pu: '★★★☆☆', polished: '★★★★☆', puCement: '★★★★☆' },
  { feature: 'Slip resistance (wet)',   epoxy: '★★★☆☆', pu: '★★★★☆', polished: '★★☆☆☆', puCement: '★★★★★' },
  { feature: 'Aesthetics',             epoxy: '★★★★☆', pu: '★★★★☆', polished: '★★★★★', puCement: '★★★☆☆' },
  { feature: 'Application time',       epoxy: 'Fast',   pu: 'Medium', polished: 'Slow',   puCement: 'Medium' },
  { feature: 'Cost index',             epoxy: '₹₹',     pu: '₹₹₹',   polished: '₹₹₹₹',   puCement: '₹₹₹' },
];

const SECTORS = [
  { name: 'Logistics & E-commerce',  note: 'Forklift-rated, line-marking, dock leveller zones' },
  { name: 'Food & Beverage',         note: 'FSSAI/FDA compliant, coved skirting, slip-rated' },
  { name: 'Pharmaceuticals',         note: 'Seamless, antistatic, GMP grade' },
  { name: 'Automotive & OEM',        note: 'Heavy vehicle, oil-resistant, demarcation marking' },
  { name: 'Cold Storage',            note: 'Thermal cycling, frost-heave-resistant specification' },
  { name: 'Data Centres & IT',       note: 'Conductive / ESD rated, zero particulate shedding' },
];

const CASE_STUDIES = [
  {
    ref: 'CS-F-001',
    client: 'ESR Logistics Park, Greater Noida',
    scope: 'Epoxy broadcast + line marking',
    area: '18,500 sqm',
    duration: '22 working days',
    challenge: 'Client required phased installation with no interruption to concurrent civil works.',
    outcome: 'Delivered in four independent phases, each handed over with pull-off test certificates.',
    img: IMG.site1,
  },
  {
    ref: 'CS-F-002',
    client: 'Confidential Pharmaceutical Facility, Baddi',
    scope: 'PU self-levelling with ESD layer',
    area: '2,400 sqm',
    duration: '12 working days',
    challenge: 'Occupied facility with 6-hour nightly installation windows only.',
    outcome: 'All GMP snagging cleared at first inspection. Qualified Person approval granted.',
    img: IMG.site2,
  },
];

export default function FlooringPage() {
  return (
    <>
      {/* ═══ HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={IMG.flooring}
          alt="Industrial epoxy flooring by Experiva Engineering"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />

        <span className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-2 border-l-2 border-amber-500/60" />
        <span className="absolute bottom-0 right-6 lg:right-12 w-12 h-12 border-b-2 border-r-2 border-amber-500/40" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Practice · Industrial Flooring</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-6">
            Floors built for<br />
            <em className="text-amber-400 not-italic">what you actually do.</em>
          </h1>
          <p className="text-white/60 text-lg max-w-[50ch] leading-relaxed mb-10">
            Resinous and mechanically prepared flooring systems for India's most demanding industrial environments. Specified, supplied and installed by our own teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30">
              Request a Site Survey →
            </Link>
            <a href="#systems" className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm px-7 py-3.5 rounded transition-all duration-200">
              View Systems ↓
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SYSTEMS — premium product spec cards */}
      <section id="systems" className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Flooring Systems</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Six systems.<br />
              <em className="text-white/40 not-italic">One specification methodology.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {SYSTEMS.map((sys, i) => (
              <ScrollReveal key={sys.id} delay={i * 55}>
                <div className="group relative bg-[#071326] hover:bg-[#0c1c30] border border-transparent hover:border-amber-500/20 transition-all duration-300 p-8 flex flex-col h-full overflow-hidden">
                  {/* Amber top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Faded background number */}
                  <span
                    className="absolute -top-3 -right-1 font-display text-white/[0.038] font-light select-none pointer-events-none leading-none"
                    style={{ fontSize: '6rem' }}
                  >
                    {sys.id}
                  </span>

                  {/* Thickness badge */}
                  <div className="mb-5 relative z-10">
                    <span className="text-[10px] font-mono text-amber-400/50 border border-amber-500/20 px-2.5 py-1 tracking-wider inline-block">
                      {sys.thickness}
                    </span>
                  </div>

                  {/* System name */}
                  <h3 className="font-display text-white font-light text-[1.3rem] group-hover:text-amber-100 transition-colors duration-200 mb-4 relative z-10 leading-snug">
                    {sys.name}
                  </h3>

                  {/* Thickness index bar */}
                  <div className="mb-5 relative z-10">
                    <div className="flex items-center justify-between text-[9px] font-mono text-white/18 mb-1.5 tracking-wider">
                      <span>Thickness index</span>
                      <span>{THICKNESS_PCT[sys.id]}%</span>
                    </div>
                    <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500/40 group-hover:bg-amber-500/65 transition-all duration-500 rounded-full"
                        style={{ width: `${THICKNESS_PCT[sys.id]}%` }}
                      />
                    </div>
                  </div>

                  {/* Use tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                    {sys.uses.map(u => (
                      <span key={u} className="text-[10px] text-white/35 border border-white/8 px-2.5 py-0.5 rounded-sm tracking-wide">
                        {u}
                      </span>
                    ))}
                  </div>

                  {/* Specs + note */}
                  <div className="mt-auto relative z-10 border-t border-white/5 pt-5">
                    <p className="text-white/22 text-[10.5px] font-mono leading-relaxed tracking-wide mb-3">
                      {sys.specs}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">{sys.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTOR APPLICATIONS — editorial horizontal list */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Sectors Served</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Industry-specific<br />
              <em className="text-white/40 not-italic">floor specifications.</em>
            </h2>
          </ScrollReveal>

          <div className="divide-y divide-white/5">
            {SECTORS.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 55}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 px-4 -mx-4 hover:bg-white/[0.02] border-l-2 border-transparent hover:border-amber-500 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-amber-400/20 font-mono text-xs w-7 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-light text-white text-2xl lg:text-3xl group-hover:text-amber-100 transition-colors duration-200 leading-none">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-white/35 text-sm sm:text-right max-w-[40ch] sm:pl-8 leading-relaxed ml-13 sm:ml-0">
                    {s.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <p className="text-white/20 text-xs leading-relaxed max-w-[52ch]">
              Every sector has specific regulatory, operational and safety requirements. We do not offer a standard floor to any environment — the specification always starts with understanding how the facility actually operates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">System Comparison</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Which system<br /><em className="text-white/50 not-italic">is right for you?</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/30 text-[10px] font-semibold tracking-widest uppercase py-4 pr-8">Feature</th>
                  <th className="text-center text-amber-400 text-[10px] font-semibold tracking-widest uppercase py-4 px-4">Epoxy</th>
                  <th className="text-center text-white/60 text-[10px] font-semibold tracking-widest uppercase py-4 px-4">PU SL</th>
                  <th className="text-center text-white/60 text-[10px] font-semibold tracking-widest uppercase py-4 px-4">Polished</th>
                  <th className="text-center text-white/60 text-[10px] font-semibold tracking-widest uppercase py-4 px-4">PU Cement</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                    <td className="text-white/60 py-4 pr-8">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-amber-400/80">{row.epoxy}</td>
                    <td className="text-center py-4 px-4 text-white/50">{row.pu}</td>
                    <td className="text-center py-4 px-4 text-white/50">{row.polished}</td>
                    <td className="text-center py-4 px-4 text-white/50">{row.puCement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
          <p className="text-white/20 text-xs mt-6">★ = relative performance within class. Final specification always follows substrate survey.</p>
        </div>
      </section>

      {/* ═══ CASE STUDIES */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Case Studies</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Selected flooring<br /><em className="text-white/50 not-italic">commissions.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <ScrollReveal key={cs.ref} delay={i * 120} className="border border-white/8 overflow-hidden group hover:border-amber-500/30 transition-colors duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={cs.img}
                    alt={cs.client}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/80 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono text-amber-400/70 tracking-widest">{cs.ref}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-semibold text-lg mb-1">{cs.client}</h3>
                  <p className="text-amber-400/70 text-sm mb-4">{cs.scope}</p>
                  <div className="flex gap-6 mb-6 text-sm">
                    <div>
                      <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Area</p>
                      <p className="text-white/70">{cs.area}</p>
                    </div>
                    <div>
                      <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Duration</p>
                      <p className="text-white/70">{cs.duration}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-6 space-y-3">
                    <p className="text-white/40 text-xs"><span className="text-white/25 uppercase tracking-widest text-[9px] block mb-1">Challenge</span>{cs.challenge}</p>
                    <p className="text-white/60 text-xs"><span className="text-amber-400/40 uppercase tracking-widest text-[9px] block mb-1">Outcome</span>{cs.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm px-8 py-3.5 rounded transition-all duration-200">
              View all projects →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PULL QUOTE */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <Image src={IMG.site3} alt="Experiva flooring installation" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#071326]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6">
            <p className="font-display text-2xl lg:text-4xl font-light text-white max-w-[36ch] leading-snug">
              "The floor is the one surface every person, product and vehicle interacts with.<br />
              <em className="text-amber-400 not-italic">It deserves an engineer, not a painter."</em>
            </p>
            <p className="text-white/40 text-sm mt-4 tracking-wide">— Vikram Sahoo, Founder</p>
          </blockquote>
        </div>
      </div>

      {/* ═══ CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">Ready to specify?</h2>
            <p className="text-white/75 text-lg max-w-[44ch]">We'll send an engineer to your site within 3 working days. No obligation, no sales call — just a proper substrate assessment.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold text-sm px-8 py-4 rounded hover:bg-amber-50 transition-colors duration-200">
              Book a Survey →
            </Link>
            <a href="tel:+919953061111" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded hover:border-white/70 transition-colors duration-200">
              +91 99530 61111
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
