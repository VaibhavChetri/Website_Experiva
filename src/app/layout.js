import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Experiva Engineering — Undisputed Floor Engineers · Delhi NCR',
    template: '%s — Experiva Engineering',
  },
  description:
    'Specialist industrial flooring and structural rehabilitation contractor. 8+ years, 100+ projects across India\'s most demanding industrial facilities.',
  keywords: [
    'industrial flooring Delhi',
    'epoxy flooring Delhi NCR',
    'structural rehabilitation',
    'concrete repair',
    'waterproofing Delhi',
    'resinous flooring',
    'PU flooring',
    'polished concrete',
  ],
  openGraph: {
    title: 'Experiva Engineering — Undisputed Floor Engineers',
    description: 'Specialist industrial flooring and structural rehabilitation contractor based in Dwarka, New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
