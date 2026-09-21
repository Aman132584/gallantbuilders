import { useEffect, useRef, useState } from 'react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function AnimatedStat({ value, suffix, label, isDecimal }: { value: number; suffix: string; label: string; isDecimal?: boolean }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.3);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(isDecimal ? Math.round(eased * value * 10) / 10 : Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, value, isDecimal]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-semibold text-gradient-gold stat-counter">
        {isDecimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}
        <span className="text-2xl md:text-3xl ml-1">{suffix}</span>
      </div>
      <div className="text-sm text-neutral-400 mt-2 tracking-wide">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <section id="about" className="relative py-32 bg-accent-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">About Us</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            A Legacy of <span className="text-gradient-gold italic font-semibold">Excellence</span>
          </h2>
          <p className="text-neutral-300 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            {companyInfo.description}
          </p>
        </div>

        {/* Image + text grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="image-3d-frame rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                alt="Luxury interior"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card-dark rounded-2xl p-6 shadow-2xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-accent-950" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-semibold text-gradient-gold">ISO 9001</div>
                  <div className="text-xs text-neutral-400">Certified Quality</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-secondary-400" />
                <h3 className="font-serif text-2xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-neutral-300 leading-relaxed font-light">{companyInfo.mission}</p>
            </div>
            <div className="section-divider" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-secondary-400" />
                <h3 className="font-serif text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-neutral-300 leading-relaxed font-light">{companyInfo.vision}</p>
            </div>
            <div className="section-divider" />
            <div className="flex flex-wrap gap-3">
              {['RERA Registered', 'IGBC Member', 'ISO 9001:2015', 'CRISIL A+ Rated'].map((cert) => (
                <span key={cert} className="px-4 py-2 rounded-full glass-card-dark text-xs text-neutral-200 border border-secondary-700/20">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/5">
          {companyInfo.stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
