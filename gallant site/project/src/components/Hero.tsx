import { ArrowDown, Building2, MapPin, Award } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const parallax = useParallax(0.15);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallax}px) scale(1.1)`,
        }}
      >
        <img
          src="https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Luxury residential architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-950/80 via-accent-950/50 to-accent-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-950/90 via-transparent to-accent-950/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid-bg z-[1] opacity-40" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-secondary-500/10 blur-[100px] animate-float-slow z-[1]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-500/10 blur-[120px] animate-float z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark mb-8 animate-fade-in-down">
          <Award className="w-4 h-4 text-secondary-400" />
          <span className="text-xs tracking-[0.15em] uppercase text-neutral-200 font-medium">
            Est. 2008 · 16 Years of Excellence
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-white leading-[1.05] mb-6 animate-fade-in-up">
          Building <span className="text-gradient-gold font-semibold italic">Tomorrow</span>,
          <br />
          Today
        </h1>

        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Gallant Builders & Developers — crafting landmark residences, commercial spaces,
          and infrastructure that redefine luxury living across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="#properties"
            className="btn-gold px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2"
          >
            Explore Properties
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full text-sm font-semibold text-neutral-100 border border-white/20 hover:border-secondary-400/50 hover:bg-white/5 transition-all duration-400 inline-flex items-center gap-2"
          >
            Discover Our Story
          </a>
        </div>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          {[
            { icon: Building2, label: '47+ Projects Delivered' },
            { icon: MapPin, label: '3 Cities · Mumbai · Pune · Bangalore' },
            { icon: Award, label: '8.5M sq.ft Developed' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-neutral-300 text-sm">
              <item.icon className="w-4 h-4 text-secondary-400" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-400 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-neutral-500/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary-400 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
