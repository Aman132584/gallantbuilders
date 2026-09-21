import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: 'Gallant Tower, Worli, Mumbai 400018' },
    { icon: Phone, label: 'Call Us', value: '+91 22 4000 8200' },
    { icon: Mail, label: 'Email Us', value: 'info@gallantbuilders.com' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-accent-950 to-accent-900 overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-500/8 blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-secondary-400 font-semibold">Get in Touch</span>
            <div className="w-12 h-px bg-gradient-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6">
            Let's Build <span className="text-gradient-gold italic font-semibold">Together</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light">
            Whether you're looking for your dream home or a strategic investment, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card-dark rounded-2xl p-6 border border-white/5 hover:border-secondary-600/30 transition-all duration-400 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold/15 border border-secondary-600/30 flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{info.label}</div>
                  <div className="text-white font-medium">{info.value}</div>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="glass-card-dark rounded-2xl p-6 border border-white/5">
              <div className="text-sm text-neutral-400 mb-3 font-medium">Office Hours</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card-dark rounded-2xl p-8 border border-white/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mb-6 animate-pulse-glow">
                  <CheckCircle2 className="w-10 h-10 text-accent-950" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-neutral-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-neutral-300 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:border-secondary-500/50 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:border-secondary-500/50 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-300 mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:border-secondary-500/50 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-2 font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:border-secondary-500/50 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-all resize-none"
                    placeholder="I'm interested in learning more about your properties..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
