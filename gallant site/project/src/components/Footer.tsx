import { Building2, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Founder', href: '#owner' },
      { label: 'Our Journey', href: '#journey' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    title: 'Properties',
    links: [
      { label: 'Residential', href: '#properties' },
      { label: 'Commercial', href: '#properties' },
      { label: 'Villas', href: '#properties' },
      { label: 'Upcoming Projects', href: '#properties' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Development', href: '#services' },
      { label: 'Infrastructure', href: '#services' },
      { label: 'Interior Design', href: '#services' },
      { label: 'Property Management', href: '#services' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-accent-950 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-secondary-500/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-950" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-gradient-gold">Gallant</div>
                <div className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">Builders & Developers</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
              Building landmark developments across India since 2008. A diversified conglomerate spanning
              real estate, infrastructure, hospitality, and renewable energy.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card-dark border border-white/5 flex items-center justify-center hover:border-secondary-500/40 hover:bg-secondary-600/10 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-secondary-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-secondary-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © 2026 Gallant Builders & Developers. All rights reserved. RERA: MahaRERA/A/518/2023
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-500 hover:text-secondary-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-secondary-300 transition-colors">Terms of Service</a>
            <a
              href="#home"
              className="w-10 h-10 rounded-xl glass-card-dark border border-white/5 flex items-center justify-center hover:border-secondary-500/40 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 text-neutral-400 group-hover:text-secondary-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
