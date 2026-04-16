import { Shield, TrendingUp, Lock, Layers, Award, Globe } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Audit-Ready by Design',
    description:
      'Every field change, approval, and rejection is logged immutably. Export a full audit trail in seconds for any compliance review.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale',
    description:
      'Whether you handle 50 POs a month or 5,000, the workflow engine remains consistent. No workarounds as you grow.',
  },
  {
    icon: Lock,
    title: 'No Unauthorized Access',
    description:
      'Role-based permissions mean each user can only see and do exactly what their role requires. Zero privilege creep.',
  },
  {
    icon: Layers,
    title: 'Multi-Department Ready',
    description:
      'PPC, Store, Purchase, QC, Warehouse, and Finance all work within one system, each in their own lane.',
  },
  {
    icon: Award,
    title: 'Vendor Accountability',
    description:
      'Quality inspection results automatically update vendor scores. Bad suppliers get flagged; good ones get priority.',
  },
  {
    icon: Globe,
    title: 'Works Offline-First',
    description:
      'Warehouse and QC teams can log entries on-site even with poor connectivity. Data syncs when back online.',
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<2s', label: 'Avg. page load' },
  { value: '100%', label: 'Workflow compliance' },
  { value: 'SOC 2', label: 'Type II ready' },
];

export default function Trust() {
  return (
    <section className="bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Why Teams Trust baerp</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Reliability isn't a feature. It's the foundation.
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            We built baerp for procurement managers who are accountable for outcomes — not just for tracking inputs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <p className="text-4xl font-extrabold gradient-text">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-200 group`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 reveal border border-white/10 rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <blockquote className="text-white text-lg lg:text-xl leading-relaxed font-medium">
                "Before baerp, we had 3 people just tracking approval status over WhatsApp. Now our procurement cycle is 4x faster and we haven't had a single compliance failure in 8 months."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/30 flex items-center justify-center text-white font-bold text-sm">
                  RM
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Rohit Mehta</p>
                  <p className="text-slate-500 text-xs">Head of Procurement · Steelpath Industries</p>
                </div>
              </div>
            </div>
            <div className="lg:w-64 grid grid-cols-2 gap-3">
              {[
                { label: 'Approval cycle', before: '3–5 days', after: '4–6 hrs' },
                { label: 'Lost POs', before: '~12/month', after: '0' },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3 col-span-1">
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-2">{item.label}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-red-400 text-xs line-through">{item.before}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      <span className="text-green-400 text-xs font-semibold">{item.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
