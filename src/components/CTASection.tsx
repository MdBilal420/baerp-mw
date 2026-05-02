import { ArrowRight, Calendar, Zap } from 'lucide-react';

export default function CTASection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  return (
    <section className="bg-white py-24 lg:py-32" id="pricing">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="reveal relative bg-slate-950 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(59,130,246,0.3) 0%, transparent 65%)',
            }}
          />
          <div className="hero-grid absolute inset-0 opacity-40" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
              <Zap className="w-3 h-3" />
              Get started today
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Your procurement process shouldn't rely on hope.
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
              Book a personalized demo and see exactly how bwork maps to your company's workflow. Setup takes days, not months.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 group text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 text-lg"
              >
                Start Free Trial
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              {[
                'No credit card required',
                '14-day free trial',
                'Onboarding support included',
                'Cancel anytime',
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              step: '1',
              title: 'Book a 30-min demo',
              desc: 'We walk through your current process and show how bwork maps to it.',
            },
            {
              step: '2',
              title: 'Pilot with your team',
              desc: 'Set up a test environment with your roles, teams, and workflow stages.',
            },
            {
              step: '3',
              title: 'Go live in days',
              desc: 'We handle data migration and onboarding. Your team is operational fast.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
