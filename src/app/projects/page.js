'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

// Contextual images via loremflickr — keyword-based, lock param keeps them consistent
const F = (kw, n) => `https://loremflickr.com/800/500/${kw}?lock=${n}`;

const PROJECTS = [
  { id: 'P-001', client: 'Danisco / DuPont',               scope: 'Floor Rehabilitation',           sector: 'Food',         practice: 'flooring',  area: '4,200 sqm',   year: '2023', location: 'Haryana',            img: F('manufacturing,floor', 342) },
  { id: 'P-002', client: 'ESR Logistics Park',              scope: 'Epoxy Broadcast + Line Marking',  sector: 'Logistics',    practice: 'flooring',  area: '18,500 sqm',  year: '2024', location: 'Greater Noida',      img: F('warehouse,logistics', 2) },
  { id: 'P-003', client: 'Indospace Industrial Park',       scope: 'PU Self-Levelling Floor',        sector: 'Manufacturing', practice: 'flooring',  area: '9,800 sqm',   year: '2024', location: 'Manesar',             img: F('manufacturing,industrial', 3) },
  { id: 'P-004', client: 'Confidential Pharma Facility',    scope: 'Cleanroom Resinous Flooring',    sector: 'Pharma',       practice: 'flooring',  area: '2,400 sqm',   year: '2023', location: 'Baddi, HP',           img: F('pharmaceutical,laboratory', 4) },
  { id: 'P-005', client: 'Auto Components Manufacturer',    scope: 'Polished Concrete (DFHS)',       sector: 'Automotive',   practice: 'flooring',  area: '12,000 sqm',  year: '2022', location: 'Gurugram',            img: F('automobile,factory', 5) },
  { id: 'P-006', client: 'Amazon Fulfillment Centre',       scope: 'Epoxy + Safety Line Marking',   sector: 'Logistics',    practice: 'flooring',  area: '31,000 sqm',  year: '2024', location: 'Bhiwandi',            img: F('warehouse,fulfillment', 6) },
  { id: 'P-007', client: 'Residential Tower Complex',       scope: 'Structural Rehabilitation',      sector: 'Real Estate',  practice: 'rehab',     area: '8,400 sqm',   year: '2023', location: 'Dwarka, Delhi',       img: F('building,construction', 7) },
  { id: 'P-008', client: 'Industrial Water Treatment Plant', scope: 'Tank Lining + Waterproofing',  sector: 'Industrial',   practice: 'rehab',     area: '1,200 sqm',   year: '2024', location: 'Manesar',             img: F('water,industrial', 8) },
  { id: 'P-009', client: 'Cold Storage Facility',           scope: 'Thermal-Rated Epoxy System',    sector: 'Cold Chain',   practice: 'flooring',  area: '6,500 sqm',   year: '2023', location: 'Kundli',              img: F('cold,storage', 9) },
  { id: 'P-010', client: 'Data Centre (Confidential)',      scope: 'ESD Conductive Flooring',       sector: 'IT/Data',      practice: 'flooring',  area: '1,100 sqm',   year: '2023', location: 'Noida Sector 62',     img: F('server,datacenter', 10) },
  { id: 'P-011', client: 'Beverage Plant',                  scope: 'PU Cement — Wet Area',          sector: 'Food',         practice: 'flooring',  area: '3,200 sqm',   year: '2022', location: 'Haridwar',            img: F('industrial,production', 577) },
  { id: 'P-012', client: 'Pharmaceutical Distribution Hub', scope: 'Seamless GMP Flooring',        sector: 'Pharma',       practice: 'flooring',  area: '5,800 sqm',   year: '2022', location: 'Bhiwadi',             img: F('pharmaceutical,cleanroom', 12) },
  { id: 'P-013', client: 'RCC Frame Building',              scope: 'CFRP Strengthening',            sector: 'Real Estate',  practice: 'rehab',     area: '1,800 sqm',   year: '2023', location: 'Gurugram',            img: F('concrete,construction', 13) },
  { id: 'P-014', client: 'Dairy Processing Unit',           scope: 'PU Cement Flooring',            sector: 'Food',         practice: 'flooring',  area: '2,600 sqm',   year: '2024', location: 'Karnal',              img: F('dairy,food', 14) },
  { id: 'P-015', client: '3PL Logistics Operator',          scope: 'Epoxy Broadcast System',        sector: 'Logistics',    practice: 'flooring',  area: '22,000 sqm',  year: '2021', location: 'Bhiwandi',            img: F('logistics,warehouse', 15) },
  { id: 'P-016', client: 'Hospital Building',               scope: 'Waterproofing + Crack Repair',  sector: 'Healthcare',   practice: 'rehab',     area: '4,200 sqm',   year: '2022', location: 'Ghaziabad',           img: F('hospital,healthcare', 16) },
  { id: 'P-017', client: 'Electronics Assembly Line',       scope: 'Antistatic ESD Flooring',       sector: 'IT/Data',      practice: 'flooring',  area: '900 sqm',     year: '2024', location: 'Noida',               img: F('electronics,assembly', 17) },
  { id: 'P-018', client: 'Automobile OEM Plant',            scope: 'Epoxy Heavy Duty System',       sector: 'Automotive',   practice: 'flooring',  area: '15,400 sqm',  year: '2023', location: 'Faridabad',           img: F('automobile,manufacturing', 18) },
  { id: 'P-019', client: 'Office Tower (Commercial)',       scope: 'Polished Concrete Finish',      sector: 'Real Estate',  practice: 'flooring',  area: '7,200 sqm',   year: '2021', location: 'Cybercity, Gurgaon',  img: F('office,architecture', 19) },
  { id: 'P-020', client: 'Chemical Storage Facility',       scope: 'PU Membrane + Bund Lining',     sector: 'Industrial',   practice: 'rehab',     area: '2,800 sqm',   year: '2023', location: 'Nalagarh',            img: F('chemical,industrial', 20) },
  { id: 'P-021', client: 'Foundry & Casting Plant',         scope: 'Epoxy Mortar Heavy Duty',       sector: 'Manufacturing', practice: 'flooring', area: '4,400 sqm',   year: '2022', location: 'Faridabad',           img: F('foundry,metalwork', 21) },
  { id: 'P-022', client: 'High-Rise Podium Deck',           scope: 'Waterproofing System',          sector: 'Real Estate',  practice: 'rehab',     area: '3,600 sqm',   year: '2024', location: 'Noida Expressway',    img: F('highrise,building', 22) },
  { id: 'P-023', client: 'FMCG Distribution Centre',        scope: 'Epoxy + Dock Zone Marking',     sector: 'Logistics',    practice: 'flooring',  area: '14,200 sqm',  year: '2024', location: 'Kundli IMT',          img: F('distribution,loading', 23) },
  { id: 'P-024', client: 'Food Grade Warehouse',            scope: 'Dust-Proof Sealed Concrete',    sector: 'Food',         practice: 'flooring',  area: '8,000 sqm',   year: '2022', location: 'Ludhiana',            img: F('food,warehouse', 24) },
];

const SECTORS = ['All', 'Logistics', 'Food', 'Pharma', 'Automotive', 'Manufacturing', 'Real Estate', 'Cold Chain', 'IT/Data', 'Industrial', 'Healthcare'];
const PRACTICES = ['All', 'flooring', 'rehab'];

const STATS = [
  { value: '100+', label: 'Projects delivered' },
  { value: '1M+',  label: 'Square metres installed' },
  { value: '8+',   label: 'Years executing' },
  { value: '40',   label: 'In-house specialists' },
];

const HERO_IMG = 'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-02.jpg';

export default function ProjectsPage() {
  const [sector, setSector] = useState('All');
  const [practice, setPractice] = useState('All');

  const filtered = PROJECTS.filter(p =>
    (sector === 'All' || p.sector === sector) &&
    (practice === 'All' || p.practice === practice)
  );

  return (
    <>
      {/* ═══ HERO */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image src={HERO_IMG} alt="Experiva project portfolio" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 hero-overlay" />
        <span className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-2 border-l-2 border-amber-500/60" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Project Archive</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-4">
            100+ projects.<br />
            <em className="text-amber-400 not-italic">Zero subcontracted.</em>
          </h1>
          <p className="text-white/55 text-lg max-w-[48ch]">
            Flooring and rehabilitation commissions across logistics, pharma, food processing, automotive and real estate.
          </p>
        </div>
      </section>

      {/* ═══ STATS STRIP */}
      <div className="bg-amber-500">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl text-white font-light">{s.value}</p>
                <p className="text-white/70 text-xs tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ FILTER + GRID */}
      <section className="bg-[#071326] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Filters */}
          <div className="mb-12 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-white/20 text-[10px] tracking-widest uppercase mr-2 shrink-0 w-16">Practice</span>
              {PRACTICES.map(p => (
                <button
                  key={p}
                  onClick={() => setPractice(p)}
                  className={`text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    practice === p
                      ? 'bg-amber-500 border-amber-500 text-white'
                      : 'border-white/15 text-white/40 hover:border-white/30 hover:text-white/70'
                  }`}
                >
                  {p === 'All' ? 'All practices' : p === 'flooring' ? 'Flooring' : 'Rehabilitation'}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-white/20 text-[10px] tracking-widest uppercase mr-2 shrink-0 w-16">Sector</span>
              {SECTORS.map(s => (
                <button
                  key={s}
                  onClick={() => setSector(s)}
                  className={`text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full border transition-all duration-200 ${
                    sector === s
                      ? 'bg-amber-500 border-amber-500 text-white'
                      : 'border-white/15 text-white/40 hover:border-white/30 hover:text-white/70'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div className="flex items-center gap-4 mb-8">
            <p className="text-white/20 text-sm">
              Showing {filtered.length} of {PROJECTS.length} projects
            </p>
            {(sector !== 'All' || practice !== 'All') && (
              <button
                onClick={() => { setSector('All'); setPractice('All'); }}
                className="text-amber-400/50 hover:text-amber-400 text-xs underline transition-colors"
              >
                Clear filters ×
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {filtered.map((p) => (
              <div key={p.id} className="bg-[#071326] group hover:bg-white/[0.02] transition-colors duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.client}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 to-[#071326]/10" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono text-amber-400/60 tracking-widest">{p.id}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                      p.practice === 'flooring'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/20'
                    }`}>
                      {p.practice === 'flooring' ? 'Flooring' : 'Rehab'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{p.client}</h3>
                  <p className="text-amber-400/60 text-xs mb-3">{p.scope}</p>
                  <div className="flex items-center justify-between text-[10px] text-white/25">
                    <span>{p.area} · {p.location}</span>
                    <span className="font-mono">{p.year}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-[10px] text-white/20 tracking-widest border border-white/8 px-2 py-0.5 rounded">{p.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/25 text-sm">No projects match the selected filters.</p>
              <button
                onClick={() => { setSector('All'); setPractice('All'); }}
                className="mt-4 text-amber-400/60 hover:text-amber-400 text-sm underline transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">Similar project in mind?</h2>
            <p className="text-white/75 text-lg max-w-[44ch]">Tell us about your facility and we'll arrange a site survey within 3 working days.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold text-sm px-8 py-4 rounded hover:bg-amber-50 transition-colors duration-200">
              Get a Quote →
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
