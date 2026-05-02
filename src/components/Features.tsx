import {
  GitBranch,
  Users,
  BadgeDollarSign,
  Star,
  ScrollText,
  BellRing,
  Download,
} from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Workflow Engine',
    description:
      'Enforced step-by-step transitions. No purchase request can skip verification, approval, or any other defined stage.',
    tag: 'Core',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    iconBg: 'bg-blue-600',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description:
      'PPC, Store, Purchase, QC, and Warehouse each have defined permissions. No role can perform actions outside their scope.',
    tag: 'Security',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
    iconBg: 'bg-slate-700',
  },
  {
    icon: BadgeDollarSign,
    title: 'Budget Enforcement',
    description:
      'Purchases are automatically validated against department budgets. Overspend is blocked before it happens.',
    tag: 'Finance',
    tagColor: 'bg-green-50 text-green-700 border-green-200',
    iconBg: 'bg-green-600',
  },
  {
    icon: Star,
    title: 'Supplier Intelligence',
    description:
      'Vendor ratings built from actual QC outcomes and delivery performance - not surveys. Objective, data-driven scores.',
    tag: 'Vendors',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-500',
  },
  {
    icon: ScrollText,
    title: 'Full Audit Logs',
    description:
      'Every state change is recorded with timestamp, actor, and before/after values. Immutable, searchable, exportable.',
    tag: 'Compliance',
    tagColor: 'bg-red-50 text-red-700 border-red-200',
    iconBg: 'bg-red-500',
  },
  {
    icon: BellRing,
    title: 'Real-Time Notifications',
    description:
      'Teams are notified the moment an action is needed from them. No chasing, no delays, no manual follow-ups.',
    tag: 'Collaboration',
    tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconBg: 'bg-cyan-600',
  },
  {
    icon: Download,
    title: 'Export & Reporting',
    description:
      'One-click PDF and Excel exports for any report: PO history, vendor performance, budget utilization, audit logs.',
    tag: 'Reports',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
    iconBg: 'bg-slate-600',
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Everything your procurement team needs. Nothing it doesn't.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Built for operations teams that need structure, not flexibility for its own sake.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.slice(0, 6).map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white border border-slate-200 rounded-2xl p-6 card-hover group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider border rounded-full px-2.5 py-1 ${feature.tagColor}`}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {features[6] && (() => {
          const Feature = features[6];
          const Icon = Feature.icon;
          return (
            <div className="mt-5 reveal">
              <div className="bg-blue-600 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-white text-xl">{Feature.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider border border-white/30 text-white/80 rounded-full px-2.5 py-1">
                      {Feature.tag}
                    </span>
                  </div>
                  <p className="text-blue-100 leading-relaxed">{Feature.description}</p>
                </div>
                {/* <a
                  href="#"
                  className="bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap flex-shrink-0"
                >
                  See report types
                </a> */}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
