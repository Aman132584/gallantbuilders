import { useState } from 'react';
import { Briefcase, Calendar, TrendingUp, Building2, Award, ArrowUpRight } from 'lucide-react';
import { owner } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function OwnerPortfolio() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <section id="owner" className="relative py-32 bg-gradient-to-b from-accent-950 via-accent-900 to-accent-950 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary-500/8 blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">The Visionary</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-4">
            Meet the <span className="text-gradient-gold italic font-semibold">Founder</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light">
            The driving force behind the Gallant Group and its diversified portfolio of companies.
          </p>
        </div>

        {/* Owner profile card */}
        <div className="grid lg:grid-cols-5 gap-12 mb-24 items-center">
          {/* Image */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative perspective-card">
              <div className="image-3d-frame rounded-2xl overflow-hidden">
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-950/80 via-transparent to-transparent" />
              </div>
              {/* Floating name plate */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card-dark rounded-xl px-8 py-4 shadow-2xl whitespace-nowrap">
                <div className="font-serif text-xl font-semibold text-gradient-gold">{owner.name}</div>
                <div className="text-xs text-neutral-400 text-center mt-1">{owner.title}</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-neutral-200 leading-relaxed text-lg font-light">{owner.bio}</p>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-secondary-400" />
                <h3 className="font-serif text-xl font-semibold text-white">Awards & Recognition</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {owner.achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start gap-3 glass-card-dark rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-secondary-400 mt-2 shrink-0" />
                    <span className="text-sm text-neutral-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Companies portfolio */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-secondary-400" />
            <h3 className="font-serif text-3xl font-semibold text-white">Group Companies & Holdings</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Company list */}
            <div className="lg:col-span-1 space-y-2">
              {owner.companies.map((company, idx) => (
                <button
                  key={company.name}
                  onClick={() => setActiveCompany(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-400 border ${
                    activeCompany === idx
                      ? 'glass-card-dark border-secondary-500/40 shadow-lg shadow-secondary-900/20'
                      : 'border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-semibold text-sm ${activeCompany === idx ? 'text-secondary-300' : 'text-neutral-200'}`}>
                        {company.name}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">{company.sector}</div>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-all ${activeCompany === idx ? 'text-secondary-400 rotate-0' : 'text-neutral-600 -rotate-45'}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Company detail */}
            <div className="lg:col-span-2">
              {owner.companies.map((company, idx) => (
                activeCompany === idx && (
                  <div
                    key={company.name}
                    className="glass-card-dark rounded-2xl p-8 border border-secondary-700/20 animate-fade-in"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="font-serif text-2xl font-semibold text-gradient-gold mb-2">{company.name}</h4>
                        <span className="inline-flex items-center gap-2 text-xs text-neutral-400">
                          <Calendar className="w-3.5 h-3.5" />
                          Founded {company.founded}
                        </span>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-gold/20 flex items-center justify-center border border-secondary-600/30">
                        <Building2 className="w-7 h-7 text-secondary-400" />
                      </div>
                    </div>
                    <p className="text-neutral-300 leading-relaxed mb-6 font-light">{company.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <TrendingUp className="w-5 h-5 text-secondary-400 mx-auto mb-2" />
                        <div className="font-serif text-xl font-semibold text-white">{company.valuation}</div>
                        <div className="text-xs text-neutral-500 mt-1">Valuation</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <Building2 className="w-5 h-5 text-secondary-400 mx-auto mb-2" />
                        <div className="font-serif text-xl font-semibold text-white">{company.projects}</div>
                        <div className="text-xs text-neutral-500 mt-1">Projects</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <Briefcase className="w-5 h-5 text-secondary-400 mx-auto mb-2" />
                        <div className="font-serif text-xl font-semibold text-white">{company.sector.split(' ')[0]}</div>
                        <div className="text-xs text-neutral-500 mt-1">Sector</div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
