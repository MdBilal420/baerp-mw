import {
  ClipboardList,
  PackageSearch,
  CheckSquare,
  ShoppingCart,
  Truck,
  FlaskConical,
  Warehouse,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    label: 'Request',
    role: 'PPC Team',
    description: 'PPC raises a material purchase request with quantity, specs, and urgency. Linked to production schedule.',
    color: 'bg-blue-600',
    border: 'border-blue-200',
    light: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    number: '02',
    icon: PackageSearch,
    label: 'Verify',
    role: 'Store Team',
    description: 'Store checks existing inventory. Confirms whether stock is truly insufficient before escalating.',
    color: 'bg-sky-500',
    border: 'border-sky-200',
    light: 'bg-sky-50',
    textColor: 'text-sky-700',
  },
  {
    number: '03',
    icon: CheckSquare,
    label: 'Approve',
    role: 'Manager',
    description: 'Request lands on the manager\'s dashboard with full context. One-click approval or rejection with reason.',
    color: 'bg-blue-700',
    border: 'border-blue-200',
    light: 'bg-blue-50',
    textColor: 'text-blue-800',
  },
  {
    number: '04',
    icon: ShoppingCart,
    label: 'Purchase',
    role: 'Purchase Team',
    description: 'Purchase team selects vendor, raises PO, and records pricing — all within budget constraints.',
    color: 'bg-cyan-600',
    border: 'border-cyan-200',
    light: 'bg-cyan-50',
    textColor: 'text-cyan-700',
  },
  {
    number: '05',
    icon: Truck,
    label: 'Receive',
    role: 'Store Team',
    description: 'Store receives goods and records actual quantities. Discrepancies are flagged immediately.',
    color: 'bg-teal-600',
    border: 'border-teal-200',
    light: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
  {
    number: '06',
    icon: FlaskConical,
    label: 'QC',
    role: 'QC Team',
    description: 'Quality team inspects materials and logs pass/fail. Results feed directly into vendor performance scores.',
    color: 'bg-orange-500',
    border: 'border-orange-200',
    light: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    number: '07',
    icon: Warehouse,
    label: 'Store',
    role: 'Warehouse',
    description: 'Approved materials are assigned bin locations and entered into inventory. Cycle complete.',
    color: 'bg-slate-700',
    border: 'border-slate-200',
    light: 'bg-slate-50',
    textColor: 'text-slate-700',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 lg:py-32" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Seven steps. Zero exceptions.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Every material purchase in your company follows this exact path — no shortcuts, no ambiguity, no exceptions. Teams always know where they stand.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-slate-200 z-0" />

          <div className="grid lg:grid-cols-7 gap-4 lg:gap-3 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex flex-col items-center text-center lg:text-center group`}
                >
                  <div className={`relative w-16 h-16 lg:w-14 lg:h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-7 h-7 lg:w-6 lg:h-6 text-white" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-slate-600">{step.number}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-3">
                    <h3 className="font-bold text-slate-900 text-sm lg:text-base">{step.label}</h3>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${step.textColor} ${step.light} ${step.border} border rounded-full px-2 py-0.5`}>
                      {step.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed hidden lg:block">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:hidden mt-8 space-y-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={`mobile-${step.label}`}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex gap-4 p-4 rounded-xl border ${step.border} ${step.light}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-sm">{step.label}</span>
                      <span className={`text-[9px] font-semibold ${step.textColor} border ${step.border} rounded-full px-1.5 py-0.5`}>
                        {step.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 reveal grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'No step can be skipped',
              desc: 'The system enforces sequence. A PO cannot be raised until approval is granted.',
              color: 'border-blue-200 bg-blue-50/50',
              dot: 'bg-blue-500',
            },
            {
              title: 'Every actor is notified',
              desc: 'As soon as a step is completed, the next responsible team gets an instant alert.',
              color: 'border-cyan-200 bg-cyan-50/50',
              dot: 'bg-cyan-500',
            },
            {
              title: 'Full trail per request',
              desc: 'Each PR has a complete timeline view — who touched it, when, and what changed.',
              color: 'border-slate-200 bg-slate-50',
              dot: 'bg-slate-600',
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
              </div>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
