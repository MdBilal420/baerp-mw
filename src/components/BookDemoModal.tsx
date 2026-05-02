import { ArrowRight, CheckCircle, X, Loader2 } from 'lucide-react';
import { useState } from 'react';

const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL as string | "https://script.google.com/macros/s/AKfycbwo5h8Ws49sS0GyBdgIwPjS2wxx5leH4tKzl5YwzRVXxlwpN8s_dk9Jr9aY4QQSPN78AQ/exec";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  additionalInfo: string;
}

export default function BookDemoModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    additionalInfo: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            additionalInfo: form.additionalInfo,
            submittedAt: new Date().toISOString(),
          }),
        });
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }
      } catch {
        setError('Submission failed. Please check your connection or contact support if the issue persists.');
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Request received!</h3>
            <p className="text-slate-400 text-sm">
              Thanks! Our team will reach out within 24 hours to schedule your demo.
            </p>
            <button
              onClick={onClose}
              className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-1">Book a Demo</h2>
            <p className="text-slate-400 text-sm mb-6">
              See how bwork can streamline your procurement process. Fill in your details and we'll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="demo-name">
                  Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rajan Mehta"
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="demo-email">
                  Work Email <span className="text-blue-400">*</span>
                </label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rajan@company.com"
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="demo-company">
                  Company Name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Apex Metals Pvt. Ltd."
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="demo-phone">
                  Phone Number
                </label>
                <input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1" htmlFor="demo-additionalInfo">
                  Additional Information
                </label>
                <textarea
                  id="demo-additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={form.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us about your team size, current challenges, or anything else you'd like us to know…"
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 group mt-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Request Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
