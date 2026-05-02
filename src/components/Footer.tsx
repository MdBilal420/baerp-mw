import { Zap } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why bwork', href: '#why-bwork' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Zap className="w-3.5 h-3.5 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">bwork</span>
          </a>
          <nav className="hidden sm:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a href="mailto:hello@bwork.io" className="hover:text-slate-300 transition-colors">
            hello@bwork.io
          </a>
          <span>&middot;</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
