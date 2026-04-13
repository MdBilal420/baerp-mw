import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Workflow Engine', 'Pricing', 'Changelog'],
  Solutions: ['Manufacturing', 'Mid-size Ops', 'Procurement Teams', 'QC & Warehouse', 'Finance Teams'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Processing', 'Security'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-6 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">baerp</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A workflow-driven ERP system for procurement teams that need structure, control, and complete traceability.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Mail, href: '#', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} baerp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
              All systems operational
            </span>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Status Page
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
