import { Home, Building2, HardHat, Sofa, ShieldCheck, TrendingUp } from 'lucide-react';
import { services } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  HardHat,
  Sofa,
  ShieldCheck,
  TrendingUp,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-accent-950 to-accent-900 overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-15" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/8 blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">What We Do</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            Our <span className="text-gradient-gold italic font-semibold">Expertise</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light">
            Comprehensive real estate solutions delivered with precision, quality, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={service.title}
                className={`group glass-card-dark rounded-2xl p-8 border border-white/5 hover:border-secondary-600/30 transition-all duration-700 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-gold/15 border border-secondary-600/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-8 h-8 text-secondary-400" />
                  <div className="absolute inset-0 rounded-2xl bg-secondary-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm font-light">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
