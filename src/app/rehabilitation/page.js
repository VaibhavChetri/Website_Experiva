import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Structural Rehabilitation',
  description: 'Concrete repair, structural strengthening, waterproofing and corrosion protection for buildings, bridges and industrial facilities.',
};

const IMG = {
  hero:  'https://experivaengineering.com/wp-content/uploads/2020/07/repair-and-rehabiliation.png',
  site1: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  site2: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  site3: 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
};

const SERVICES = [
  {
    id: '01',
    title: 'Concrete Repair & Restoration',
    items: [
      'Spall repair with polymer-modified mortars',
      'Crack injection (low-pressure epoxy / PU foam)',
      'Delamination treatment and re-bonding',
      'Carbonation neutralisation (lime washing)',
    ],
    standards: 'IS 456 · BS EN 1504 · ICRI Guideline 310',
  },
  {
    id: '02',
    title: 'Structural Strengthening',
    items: [
      'CFRP / GFRP laminate bonding',
      'Micro-concrete jacketing (columns, beams)',
      'NSM (Near Surface Mounted) rod installation',
      'Post-tensioning anchor zone restoration',
    ],
    standards: 'ACI 440 · fib TG 9.3 · IS 516',
  },
  {
    id: '03',
    title: 'Waterproofing Systems',
    items: [
      'Cementitious crystalline (basements, tanks)',
      'Polyurethane membrane (roofs, podiums)',
      'APP / SBS torch-applied membranes',
      'Injection grouting for active water ingress',
    ],
    standards: 'IS 3067 · ASTM D5957 · BIS 15396',
  },
  {
    id: '04',
    title: 'Corrosion Protection',
    items: [
      'Rebar passivation (migrating corrosion inhibitors)',
      'Cathodic protection system (impressed current)',
      'Anti-carbonation facade coatings',
      'Chloride extraction',
    ],
    standards: 'IS 13620 · BS EN 12696 · NACE SP0290',
  },
  {
    id: '05',
    title: 'Expansion Joint Systems',
    items: [
      'Preformed silicone and EPDM seals',
      'Hybrid polyurethane sealants',
      'Fire-rated joint systems',
      'Bridge deck movement joints',
    ],
    standards: 'IS 3414 · ASTM C920 · ASTM E119',
  },
  {
    id: '06',
    title: 'Protective Coatings',
    items: [
      'Epoxy barrier coatings for chemical exposure',
      'Polyurea lining (secondary containment)',
      'Thermal spray metal coatings (marine)',
      'Anti-graffiti and UV-stable topcoats',
    ],
    standards: 'SSPC PA-1 · ISO 12944 · ASTM B117',
  },
];

const SURVEY_PROCESS = [
  {
    day: 'Day 1',
    title: 'Visual Mapping & Non-Destructive Testing',
    activities: [
      'Full photographic survey of structure',
      'Hammer sounding for delamination',
      'Cover meter (rebar depth mapping)',
      'Half-cell potential mapping (corrosion risk)',
      'Crack width and pattern mapping',
    ],
    output: 'Condition survey drawings with defect zones marked',
  },
  {
    day: 'Day 2',
    title: 'Destructive Investigation & Lab Testing',
    activities: [
      'Core extraction (min. 6 cores / 100 sqm)',
      'Carbonation depth test (phenolphthalein)',
      'Chloride penetration profile (3–5 levels)',
      'Compressive strength of extracted cores',
      'Rebound hammer index at 50+ points',
    ],
    output: 'Lab test reports with interpreted results',
  },
  {
    day: 'Day 3',
    title: 'Report & Repair Strategy',
    activities: [
      'Root cause analysis (IS 456 / fib model)',
      'Repair specification (product + method)',
      'AutoCAD marked-up drawings',
      'Bill of quantities and cost estimate',
      'Programme of works',
    ],
    output: 'Condition Assessment Report + Repair Strategy Document',
  },
];

const CASE_STUDIES = [
  {
    ref: 'CS-R-001',
    client: 'High-rise Residential Complex, Dwarka',
    scope: 'Comprehensive structural rehabilitation',
    area: '8,400 sqm facade + roof',
    year: '2023',
    challenge: 'Building had severe carbonation up to 35mm depth causing rebar corrosion across all south-facing facades. Original contractor had refused scope.',
    outcome: 'Full corrosion arrest + electrochemical re-alkalisation + anti-carbonation coating. 10-year warranty issued.',
    img: IMG.site1,
  },
  {
    ref: 'CS-R-002',
    client: 'Industrial Water Treatment Plant, Manesar',
    scope: 'Tank lining + crack injection + waterproofing',
    area: '1,200 sqm of tank interiors',
    year: '2024',
    challenge: 'Active water ingress through 3mm wide cracks under hydrostatic head. Facility could not be dewatered for more than 48 hours.',
    outcome: 'Low-pressure PU injection under live load. Zero-leakage achieved on first attempt. Plant restarted on schedule.',
    img: IMG.site2,
  },
];

const WHY = [
  {
    num: '01',
    title: 'Diagnosis before prescription',
    body: 'We will not quote for repair work without a condition survey. A visible crack tells you nothing about root cause — carbonation, chloride attack, structural overload and shrinkage each require a different response.',
  },
  {
    num: '02',
    title: 'Multi-disciplinary team',
    body: 'Each project involves a structural engineer, a materials engineer and a site supervisor. The three roles are not collapsed into one person carrying a product catalogue.',
  },
  {
    num: '03',
    title: 'Product-neutral specification',
    body: 'We specify the performance class first (BS EN 1504 principle), then select the product. We are not beholden to a single manufacturer\'s range.',
  },
  {
    num: '04',
    title: 'Ten-year track record',
    body: 'Our oldest rehabilitation projects are now 7–8 years old and remain in warranty condition. We can arrange site visits to completed projects for prospective clients.',
  },
];

export default function RehabilitationPage() {
  return (
    <>
      {/* ═══ HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={IMG.hero}
          alt="Structural rehabilitation and concrete repair by Experiva Engineering"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />

        <span className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-2 border-l-2 border-amber-500/60" />
        <span className="absolute bottom-0 right-6 lg:right-12 w-12 h-12 border-b-2 border-r-2 border-amber-500/40" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Practice · Rehabilitation & Repair</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-6">
            Structures that<br />
            <em className="text-amber-400 not-italic">outlast the fix.</em>
          </h1>
          <p className="text-white/60 text-lg max-w-[50ch] leading-relaxed mb-10">
            Diagnosis-led concrete repair, structural strengthening and waterproofing. We find root cause before we specify a product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30">
              Commission a Survey →
            </Link>
            <a href="#process" className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm px-7 py-3.5 rounded transition-all duration-200">
              Our 3-day process ↓
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Scope of Services</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Six disciplines.<br /><em className="text-white/50 not-italic">One contractor of record.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.id} delay={i * 60} className="bg-[#071326] p-8 flex flex-col gap-5">
                <span className="text-amber-400/40 text-xs font-mono tracking-widest">{svc.id}</span>
                <h3 className="text-white font-semibold text-base leading-snug">{svc.title}</h3>
                <ul className="flex flex-col gap-2">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/55">
                      <span className="w-1 h-1 rounded-full bg-amber-500/50 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/20 text-[10px] font-mono mt-auto pt-4 border-t border-white/5 tracking-wide">{svc.standards}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3-DAY SURVEY PROCESS */}
      <section id="process" className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Diagnostic Process</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              A 3-day survey that<br /><em className="text-white/50 not-italic">earns its fee.</em>
            </h2>
            <p className="text-white/45 text-lg mt-6 max-w-[52ch] leading-relaxed">
              Before we recommend a single product, we invest three days understanding your structure. The result is a condition assessment report that stands up to engineering scrutiny.
            </p>
          </ScrollReveal>

          <div className="space-y-px">
            {SURVEY_PROCESS.map((day, i) => (
              <ScrollReveal key={day.day} delay={i * 100} className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-8 lg:gap-12 p-8 lg:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 border-b border-white/5">
                <div>
                  <span className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase block mb-2">{day.day}</span>
                  <h3 className="text-white font-semibold text-lg leading-snug">{day.title}</h3>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">Activities</p>
                  <ul className="flex flex-col gap-2">
                    {day.activities.map(a => (
                      <li key={a} className="flex items-start gap-3 text-sm text-white/55">
                        <span className="w-1 h-1 rounded-full bg-amber-500/50 mt-2 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:pl-8 lg:border-l border-white/5">
                  <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">Deliverable</p>
                  <p className="text-amber-400/70 text-sm leading-relaxed">{day.output}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <div className="glass border border-amber-500/15 p-8 max-w-2xl">
              <p className="text-amber-400 text-[10px] font-semibold tracking-widest uppercase mb-3">Survey Fee</p>
              <p className="text-white/70 text-sm leading-relaxed">
                The 3-day condition survey is a paid service (₹35,000 – ₹85,000 depending on structure size). The fee is deducted from the contract value if Experiva is awarded the repair works.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CASE STUDIES */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Case Studies</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Rehabilitation<br /><em className="text-white/50 not-italic">commissions.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <ScrollReveal key={cs.ref} delay={i * 120} className="border border-white/8 overflow-hidden group hover:border-amber-500/30 transition-colors duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image src={cs.img} alt={cs.client} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono text-amber-400/70 tracking-widest">{cs.ref}</span>
                  <span className="absolute top-4 right-4 text-[10px] font-mono text-white/30">{cs.year}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-semibold text-lg mb-1">{cs.client}</h3>
                  <p className="text-amber-400/70 text-sm mb-4">{cs.scope} · {cs.area}</p>
                  <div className="border-t border-white/5 pt-6 space-y-4">
                    <p className="text-white/40 text-sm"><span className="text-white/25 uppercase tracking-widest text-[9px] block mb-1.5">Challenge</span>{cs.challenge}</p>
                    <p className="text-white/65 text-sm"><span className="text-amber-400/40 uppercase tracking-widest text-[9px] block mb-1.5">Outcome</span>{cs.outcome}</p>
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

      {/* ═══ PHOTO PULL QUOTE */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <Image src={IMG.site3} alt="Experiva rehabilitation site" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#071326]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6 max-w-[50ch]">
            <p className="font-display text-2xl lg:text-4xl font-light text-white leading-snug">
              "Repair work done without diagnosis is just<br /><em className="text-amber-400 not-italic">expensive postponement."</em>
            </p>
            <p className="text-white/40 text-sm mt-4 tracking-wide">— Structural Assessment Methodology, Experiva Engineering</p>
          </blockquote>
        </div>
      </div>

      {/* ═══ WHY EXPERIVA */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Our Approach</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              The Experiva<br /><em className="text-white/50 not-italic">rehabilitation standard.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY.map((w, i) => (
              <ScrollReveal key={w.num} delay={i * 80} className="flex gap-8 p-8 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <span className="text-amber-400/30 font-mono text-3xl font-light shrink-0 leading-none pt-1">{w.num}</span>
                <div>
                  <h3 className="text-white font-semibold mb-3">{w.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{w.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">Commission a survey.</h2>
            <p className="text-white/75 text-lg max-w-[44ch]">A 3-day condition assessment with full written report. The only responsible starting point for any rehabilitation project.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold text-sm px-8 py-4 rounded hover:bg-amber-50 transition-colors duration-200">
              Get in touch →
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
