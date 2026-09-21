import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className="relative py-32 bg-accent-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary-500/5 blur-[140px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">Client Voices</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            What Our <span className="text-gradient-gold italic font-semibold">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`glass-card-dark rounded-2xl p-8 border border-white/5 hover:border-secondary-600/30 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-secondary-600/40 mb-4" />
              <p className="text-neutral-300 leading-relaxed mb-6 font-light italic">"{t.quote}"</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-neutral-500 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
