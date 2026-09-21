import { useState } from 'react';
import { BedDouble, Maximize, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { properties } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const filters = ['All', 'Ready to Move', 'Under Construction', 'Booking Open'];

export default function Properties() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? properties : properties.filter((p) => p.status === filter);

  return (
    <section id="properties" className="relative py-32 bg-accent-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-secondary-500/5 blur-[140px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">Our Properties</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            Featured <span className="text-gradient-gold italic font-semibold">Listings</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light">
            Discover our handpicked portfolio of premium residential and commercial developments.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'btn-gold'
                  : 'glass-card-dark text-neutral-300 hover:text-secondary-300 border border-white/5 hover:border-white/15'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Property grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, idx) => (
            <div
              key={property.id}
              className={`group perspective-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="card-3d glass-card-dark rounded-2xl overflow-hidden border border-white/5 hover:border-secondary-600/30">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-950 via-accent-950/20 to-transparent" />
                  {property.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-gold text-accent-950 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Featured
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-card-dark text-xs font-medium text-neutral-200 border border-white/10">
                    {property.status}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-secondary-300 tracking-wider uppercase font-medium">{property.type}</span>
                    <h3 className="font-serif text-2xl font-semibold text-white mt-1">{property.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <MapPin className="w-4 h-4 text-secondary-400" />
                    {property.location}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-secondary-400" />
                      {property.beds}
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4 text-secondary-400" />
                      {property.area}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-xs text-neutral-500">Starting at</div>
                      <div className="font-serif text-lg font-semibold text-gradient-gold">{property.price}</div>
                    </div>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-secondary-300 hover:text-secondary-200 transition-colors group/btn">
                      Enquire
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card-dark border border-secondary-600/30 text-secondary-300 hover:bg-secondary-600/10 hover:border-secondary-500/50 transition-all duration-400 text-sm font-semibold"
          >
            Request Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
