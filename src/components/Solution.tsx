import { ArrowRight, ShieldCheck, Workflow, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: Workflow,
    title: 'Enforced Workflow',
    description: 'Every purchase request must pass through defined stages. No stage can be skipped, bypassed, or completed out of order.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Gates',
    description: 'Each stage is owned by a specific role. PPC raises requests, Store verifies, Managers approve - no role overreach.',
  },
  {
    icon: BarChart3,
    title: 'Data at Every Step',
    description: 'Every action creates a timestamped record. You always know who did what, when, and what changed.',
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" id="why-bwork">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="reveal">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">The Solution</span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                A procurement engine that runs by the rules. Always.
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                bwork isn't a form tool or a spreadsheet replacement. It's a deterministic workflow system - every transition is controlled, every actor is accountable.
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${i + 1} flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 card-hover`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="reveal">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                See how the workflow engine works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="reveal">
            <WorkflowVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowVisualization() {
  const nodes = [
    { id: 'PPC', role: 'PPC Team', action: 'Raises purchase request', color: 'bg-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
    { id: 'Store', role: 'Store Team', action: 'Verifies stock levels', color: 'bg-sky-500', border: 'border-sky-200', light: 'bg-sky-50' },
    { id: 'Manager', role: 'Manager', action: 'Reviews and approves', color: 'bg-blue-700', border: 'border-blue-200', light: 'bg-blue-50' },
    { id: 'Purchase', role: 'Purchase Team', action: 'Creates PO & orders', color: 'bg-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
  ];

  return (
    <div className="relative bg-white rounded-3xl border border-slate-200 p-8">
      <div className="absolute top-4 right-4 bg-green-100 border border-green-200 rounded-full px-3 py-1 text-green-700 text-xs font-semibold">
        Live Workflow
      </div>

      <div className="space-y-3 mb-6">
        {nodes.map((node, i) => (
          <div key={node.id} className="relative">
            <div className={`flex items-center gap-3 p-3 rounded-xl border ${node.border} ${node.light}`}>
              <div className={`w-8 h-8 rounded-lg ${node.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-700">{node.role}</p>
                <p className="text-xs text-slate-500 truncate">{node.action}</p>
              </div>
              {i < nodes.length - 1 && (
                <span className="text-[10px] text-slate-400 bg-white border border-slate-200 rounded-full px-2 py-0.5 font-medium">
                  then
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="absolute left-7 -bottom-3 w-0.5 h-3 bg-slate-300 z-10" />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-slate-300 pt-5 grid grid-cols-2 gap-4">
        {[
          { label: 'Avg. cycle time', value: '6.2 hrs', color: 'text-blue-600' },
          { label: 'Compliance rate', value: '100%', color: 'text-green-600' },
          { label: 'Pending approvals', value: '3', color: 'text-amber-600' },
          { label: 'POs this month', value: '142', color: 'text-slate-900' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-3 border border-slate-200">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-lg font-bold ${stat.color} mt-0.5`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
