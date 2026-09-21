import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Owner', href: '#owner' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-accent-950/90 backdrop-blur-xl py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-lg shadow-secondary-600/30 group-hover:scale-110 transition-transform duration-500">
                <Building2 className="w-6 h-6 text-accent-950" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-xl bg-secondary-400/30 blur-lg -z-10 group-hover:bg-secondary-400/50 transition-all duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-gradient-gold leading-none">
                Gallant
              </span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-300 uppercase font-medium">
                Builders & Developers
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-200 hover:text-secondary-300 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-gold group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-400 rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              Book a Consultation
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-neutral-200 p-2"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-accent-950/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-accent-900/95 border-l border-secondary-700/20 p-8 flex flex-col gap-2 transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-neutral-300 p-2 mb-4"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-neutral-200 hover:text-secondary-300 transition-colors py-3 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-6 px-6 py-3 rounded-full text-center text-sm font-semibold"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </>
  );
}
