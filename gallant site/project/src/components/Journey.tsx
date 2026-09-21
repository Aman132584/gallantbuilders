import { milestones } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Journey() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section id="journey" className="relative py-32 bg-accent-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-500/5 blur-[120px]" />

      <div ref={ref} className={`relative max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">Our Journey</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            Milestones Through <span className="text-gradient-gold italic font-semibold">the Years</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light">
            From a single project to a diversified conglomerate — every milestone marks a step toward greater impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary-600/40 to-transparent md:-translate-x-px" />

          {milestones.map((milestone, idx) => (
            <div
              key={milestone.year}
              className={`relative flex items-start gap-8 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 mt-6">
                <div className="w-4 h-4 rounded-full bg-gradient-gold ring-4 ring-accent-900 shadow-lg shadow-secondary-900/40" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-secondary-400/40 animate-ping opacity-60" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass-card-dark rounded-2xl p-6 border border-white/5 hover:border-secondary-600/30 transition-all duration-400">
                  <div className="font-serif text-3xl font-semibold text-gradient-gold mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-white text-lg mb-2">{milestone.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{milestone.description}</p>
                </div>
              </div>

              {/* Spacer for other half */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
