'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Work',           href: '/projects' },
  { label: 'Flooring',       href: '/flooring' },
  { label: 'Rehabilitation', href: '/rehabilitation' },
  { label: 'About',          href: '/about' },
  { label: 'Journal',        href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#071326]/95 backdrop-blur-lg border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full border border-amber-500/60 grid place-items-center">
              <span className="font-display text-white text-sm font-light">e</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white text-sm font-semibold tracking-wide leading-tight">Experiva</p>
              <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase leading-tight">Engineering · Est. 2018</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 relative group ${
                  pathname === href || pathname.startsWith(href + '/')
                    ? 'text-amber-400'
                    : 'text-white/65 hover:text-white'
                }`}
              >
                {label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-amber-400 transition-all duration-300 ${
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919953061111"
              className="hidden lg:block text-white/50 text-xs tracking-wide hover:text-white transition-colors"
            >
              +91 99530 61111
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get a Quote
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            {/* Burger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#071326] z-40 flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6 mb-10">
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              className="font-display text-4xl font-light text-white/60 hover:text-white transition-colors duration-200 leading-tight"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <a href="tel:+919953061111" className="text-white/40 text-sm">+91 99530 61111</a>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 bg-amber-500 text-white text-sm font-semibold px-6 py-3 rounded"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}
