import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Contact',
  description: 'Reach Experiva Engineering for industrial flooring and structural rehabilitation projects across India. Based in Dwarka, New Delhi.',
};

const WHAT_HAPPENS = [
  {
    step: '01',
    title: 'We read your enquiry',
    body: 'Every submission goes directly to the design team — not a sales rep. We review it within one working day.',
    time: 'Within 1 day',
    icon: '✉',
  },
  {
    step: '02',
    title: 'We call to understand scope',
    body: 'A brief 15-minute call to clarify the facility type, rough area and timeline. No obligation to proceed.',
    time: '15-min call',
    icon: '◎',
  },
  {
    step: '03',
    title: 'Site survey scheduled',
    body: 'We dispatch an engineer to your site within 3 working days of the initial call.',
    time: 'Within 3 days',
    icon: '◈',
  },
  {
    step: '04',
    title: 'Proposal issued',
    body: 'A written specification, method statement and price within 5 working days of the survey.',
    time: 'Within 5 days',
    icon: '◉',
  },
];

const FAQ = [
  {
    q: 'What is the minimum project size you take on?',
    a: 'We generally work on projects of 500 sqm and above for flooring, or any structural rehabilitation that warrants a condition survey. Smaller scopes may be considered based on complexity and location.',
  },
  {
    q: 'Do you work outside Delhi NCR?',
    a: 'Yes. A significant portion of our portfolio is in Haryana, Uttar Pradesh, Himachal Pradesh, Maharashtra and Rajasthan. Mobilisation cost is included transparently in our quotations.',
  },
  {
    q: 'How long does the survey take?',
    a: 'A flooring survey is typically half a day. A structural condition assessment is 2–3 days depending on structure size and defect complexity.',
  },
  {
    q: 'Is the survey fee refundable?',
    a: 'The structural condition survey is a paid service. The fee is deducted from the contract value if Experiva is awarded the repair works. Flooring surveys are generally complimentary for projects above 1,000 sqm.',
  },
  {
    q: 'Do you provide a warranty?',
    a: 'Yes. Flooring systems carry 1–5 year warranties depending on the system. Waterproofing and rehabilitation works carry up to 10-year warranties. All warranties are documented at handover.',
  },
  {
    q: 'Can I see a completed project?',
    a: 'We can arrange site visits to reference projects with the permission of the facility owner. Contact us and we\'ll see what we can arrange near you.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ═══ HERO */}
      <section className="bg-[#071326] pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h1 className="font-display text-5xl lg:text-7xl font-light text-white leading-none mb-6">
              Let's talk<br />
              <em className="text-amber-400 not-italic">about your project.</em>
            </h1>
            <p className="text-white/55 text-lg max-w-[50ch] leading-relaxed">
              We respond to all enquiries within one working day. If your timeline is urgent, call directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FORM + CONTACT INFO */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">

            {/* FORM */}
            <ScrollReveal>
              <form className="space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="firstName">First name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="Arjun"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="lastName">Last name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-widests uppercase mb-2" htmlFor="company">Company / Organisation *</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="practice">Practice area *</label>
                  <select
                    id="practice"
                    name="practice"
                    required
                    className="w-full bg-[#071326] border border-white/15 text-white/70 text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled defaultValue>Select a practice area</option>
                    <option value="flooring">Industrial Flooring</option>
                    <option value="rehab">Structural Rehabilitation</option>
                    <option value="waterproofing">Waterproofing</option>
                    <option value="both">Flooring + Rehabilitation</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="area">Approximate area (sqm)</label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="e.g. 5,000 sqm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="location">Facility location</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20"
                      placeholder="City / district"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-2" htmlFor="message">Tell us about the project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-transparent border border-white/15 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-amber-500/60 transition-colors duration-200 placeholder:text-white/20 resize-none"
                    placeholder="Facility type, current floor condition, any specific requirements or constraints..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm tracking-wide px-10 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  Send Enquiry →
                </button>

                <p className="text-white/20 text-xs">We'll respond within one working day. Your data is used solely to respond to this enquiry.</p>
              </form>
            </ScrollReveal>

            {/* CONTACT INFO */}
            <div className="space-y-10">
              <ScrollReveal delay={100}>
                <div className="border border-white/8 p-8">
                  <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-5">Get in touch directly</p>
                  <div className="space-y-5">
                    <div>
                      <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1.5">Phone</p>
                      <a href="tel:+919953061111" className="text-white font-semibold hover:text-amber-400 transition-colors duration-200">+91 99530 61111</a>
                    </div>
                    <div>
                      <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1.5">Email</p>
                      <a href="mailto:vikram.sahoo@experivaengineering.com" className="text-white/70 text-sm hover:text-white transition-colors duration-200 break-all">
                        vikram.sahoo@experivaengineering.com
                      </a>
                    </div>
                    <div>
                      <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1.5">Office</p>
                      <p className="text-white/60 text-sm leading-relaxed">Dwarka, New Delhi — 110078<br />India</p>
                    </div>
                    <div>
                      <p className="text-white/25 text-[10px] uppercase tracking-widest mb-1.5">CIN</p>
                      <p className="text-white/30 text-xs font-mono">U93090DL2018PTC328569</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <div>
                  <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">Practice areas</p>
                  <div className="space-y-2">
                    <Link href="/flooring" className="flex items-center justify-between py-3 border-b border-white/5 text-white/55 hover:text-white transition-colors group text-sm">
                      <span>Industrial Flooring</span>
                      <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">→</span>
                    </Link>
                    <Link href="/rehabilitation" className="flex items-center justify-between py-3 border-b border-white/5 text-white/55 hover:text-white transition-colors group text-sm">
                      <span>Structural Rehabilitation</span>
                      <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">→</span>
                    </Link>
                    <Link href="/projects" className="flex items-center justify-between py-3 text-white/55 hover:text-white transition-colors group text-sm">
                      <span>View completed projects</span>
                      <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT HAPPENS NEXT — horizontal timeline */}
      <section className="bg-[#071326] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">Process</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              What happens<br /><em className="text-white/50 not-italic">after you enquire.</em>
            </h2>
          </ScrollReveal>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-white/8 z-0" />
              <div className="grid grid-cols-4 gap-6">
                {WHAT_HAPPENS.map((wh, i) => (
                  <ScrollReveal key={wh.step} delay={i * 90}>
                    <div className="relative flex flex-col pt-0">
                      {/* Step circle */}
                      <div className="relative z-10 w-11 h-11 rounded-full border-2 border-amber-500/40 bg-[#071326] grid place-items-center mb-8 group hover:border-amber-400 transition-colors duration-300">
                        <span className="text-amber-400 font-mono text-sm font-bold">{wh.step}</span>
                        {/* Active dot */}
                        <span className="absolute inset-0 rounded-full bg-amber-500/10" />
                      </div>
                      {/* Time badge */}
                      <span className="text-amber-400/50 text-[10px] font-mono tracking-widest uppercase mb-3">
                        {wh.time}
                      </span>
                      <h3 className="text-white font-semibold text-base mb-3 leading-snug">{wh.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed flex-1">{wh.body}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline — vertical */}
          <div className="lg:hidden relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-white/8 z-0" />
            <div className="space-y-10">
              {WHAT_HAPPENS.map((wh, i) => (
                <ScrollReveal key={wh.step} delay={i * 80} className="relative flex gap-8">
                  {/* Circle */}
                  <div className="relative z-10 w-11 h-11 rounded-full border-2 border-amber-500/40 bg-[#071326] grid place-items-center shrink-0">
                    <span className="text-amber-400 font-mono text-sm font-bold">{wh.step}</span>
                  </div>
                  <div className="pt-1.5">
                    <span className="text-amber-400/50 text-[10px] font-mono tracking-widest uppercase block mb-2">{wh.time}</span>
                    <h3 className="text-white font-semibold text-base mb-2">{wh.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{wh.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ */}
      <section className="bg-[#040d1a] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-14">
            <p className="text-amber-400 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
              Common<br /><em className="text-white/50 not-italic">questions.</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {FAQ.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60} className="bg-[#040d1a] p-8 hover:bg-white/[0.015] transition-colors duration-300">
                <p className="text-white font-semibold text-sm mb-3 leading-snug">{f.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{f.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
