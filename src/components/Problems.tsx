import { useEffect } from 'react';
import { Mail, Clock, AlertTriangle, FileX } from 'lucide-react';

const problems = [
  {
    icon: Mail,
    title: 'Approvals buried in email threads',
    description:
      'Critical purchase decisions get stuck in inboxes. Managers miss requests, approvals expire, and teams work on outdated information.',
  },
  {
    icon: Clock,
    title: 'No one knows where a request stands',
    description:
      'Is it approved? Was it ordered? Did it arrive? Without a central system, your team wastes hours just tracking status.',
  },
  {
    icon: AlertTriangle,
    title: 'Budget surprises at month-end',
    description:
      'Purchases happen without budget checks. Finance discovers overruns only when it\'s too late to course-correct.',
  },
  {
    icon: FileX,
    title: 'Zero audit trail for decisions',
    description:
      'When something goes wrong, there\'s no record of who approved what, when, or why. Compliance audits become a nightmare.',
  },
];

export default function Problems() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">The Problem</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Procurement today is a coordination disaster.
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Most companies are running their procurement on spreadsheets, email chains, and institutional memory. When people leave, process falls apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 1} bg-white border border-slate-200 rounded-2xl p-6 card-hover`}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 reveal bg-white border border-slate-200 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                The real cost isn't just money — it's control.
              </h3>
              <p className="text-slate-500">
                Every skipped approval, every undocumented purchase, every missed delivery is a crack in your operational foundation. As you scale, those cracks become structural failures.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-10 lg:flex-shrink-0">
              {[
                { stat: '34%', label: 'of POs have no approval record' },
                { stat: '2.4x', label: 'longer cycle time without workflow' },
                { stat: '68%', label: 'of audits fail on procurement docs' },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="text-3xl font-extrabold text-red-500">{item.stat}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
