import { ArrowRight, CheckCircle } from 'lucide-react';

const trustBadges = [
  'Zero skipped steps',
  'Full audit trail',
  'Role-based control',
];

export default function Hero({ onOpenDemo }: { onOpenDemo?: () => void }) {

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))',
        }}
      />

      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse-slow" />
              Workflow-Driven ERP
            </div>

            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Procurement
                <br />
                <span className="gradient-text">Without</span>
                <br />
                the Chaos.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                bwork enforces every step of your procurement process — from request to storage — so nothing is skipped, lost, or unaccounted for.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-slate-600 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      <div className="relative border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-medium mb-6">
            Trusted by procurement teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['Nexora Industries', 'Steelpath Corp', 'Voltex Manufacturing', 'Arvio Group', 'Crestline Works'].map((name) => (
              <span key={name} className="text-slate-700 text-sm font-semibold tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const steps = [
    { label: 'Request', color: 'bg-blue-500', done: true },
    { label: 'Verified', color: 'bg-blue-500', done: true },
    { label: 'Approved', color: 'bg-blue-500', done: true },
    { label: 'Purchased', color: 'bg-cyan-500', done: true },
    { label: 'Received', color: 'bg-slate-600', done: false },
    { label: 'QC', color: 'bg-slate-600', done: false },
    { label: 'Stored', color: 'bg-slate-600', done: false },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl" />
      <div className="relative bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-800/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4 bg-slate-700/50 rounded-md h-5 flex items-center px-2">
            <span className="text-slate-500 text-[10px]">app.bwork.io/procurement/PR-2841</span>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white font-semibold text-sm">PR-2841 — Steel Rods (4mm)</p>
              <p className="text-slate-500 text-xs mt-0.5">Raised by PPC · 2 hours ago</p>
            </div>
            <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
              In Progress
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-slate-500 text-[10px] uppercase tracking-wider font-medium mb-2">Workflow Progress</p>
            <div className="flex items-center gap-0.5">
              {steps.map((step, i) => (
                <div key={step.label} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full h-1.5 rounded-full ${step.done ? step.color : 'bg-slate-700'} transition-all`} />
                  <span className={`text-[8px] font-medium ${step.done ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.label}
                  </span>
                  {i < steps.length - 1 && <div className="hidden" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Qty Requested', value: '2,500 kg' },
              { label: 'Budget', value: '₹1,84,000' },
              { label: 'Vendor', value: 'Apex Metals' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-800/60 rounded-lg p-2.5">
                <p className="text-slate-500 text-[9px] uppercase tracking-wider">{item.label}</p>
                <p className="text-white text-xs font-semibold mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-1.5">
            <p className="text-slate-500 text-[10px] uppercase tracking-wider font-medium">Recent Activity</p>
            {[
              { action: 'Purchase Order raised', user: 'Rajan M.', time: '1h ago', color: 'bg-cyan-500' },
              { action: 'Approved by manager', user: 'Priya S.', time: '2h ago', color: 'bg-blue-500' },
              { action: 'Store verified stock', user: 'Dev K.', time: '3h ago', color: 'bg-blue-400' },
            ].map((item) => (
              <div key={item.action} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                <span className="text-slate-400 text-[10px] flex-1">{item.action}</span>
                <span className="text-slate-600 text-[9px]">{item.user} · {item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-white/10 rounded-xl p-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Budget compliant</p>
            <p className="text-slate-500 text-[9px]">Within ₹2,00,000 limit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
