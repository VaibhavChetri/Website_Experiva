import Link from 'next/link';

const LINKS = {
  Practice: [
    { label: 'Industrial Flooring',   href: '/flooring' },
    { label: 'Rehabilitation',         href: '/rehabilitation' },
    { label: 'Project Gallery',        href: '/projects' },
  ],
  Studio: [
    { label: 'About Us',    href: '/about' },
    { label: 'Journal',     href: '/journal' },
    { label: 'Contact',     href: '/contact' },
  ],
  Contact: [
    { label: 'Dwarka, New Delhi',                               href: '/contact' },
    { label: '+91 99530 61111',                                  href: 'tel:+919953061111' },
    { label: 'vikram.sahoo@experivaengineering.com',             href: 'mailto:vikram.sahoo@experivaengineering.com' },
    { label: 'LinkedIn ↗',                                       href: 'https://www.linkedin.com/company/experiva-engineering', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#071326] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-amber-500/50 grid place-items-center">
                <span className="font-display text-white text-sm">e</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">Experiva Engineering</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-[26ch]">
              Specialist industrial flooring and structural rehabilitation contractor.
              Headquartered in Dwarka, New Delhi.
            </p>
            <p className="text-white/20 text-[11px] tracking-wide">CIN · U93090DL2018PTC328569</p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <p className="text-white/30 text-[10px] font-semibold tracking-[0.18em] uppercase mb-4">{title}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href, external }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8">
          <p className="text-white/25 text-xs">© Experiva Engineering · MMXXVI · All rights reserved</p>
          <p className="text-white/15 text-xs italic">Set in Fraunces &amp; Inter · Built in Delhi</p>
        </div>

      </div>
    </footer>
  );
}
