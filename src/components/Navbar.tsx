import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why bwork', href: '#why-bwork' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className={`text-xl font-800 tracking-tight font-extrabold text-slate-900`}>
              bwork
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors text-slate-600 hover:text-slate-900`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* <a
              href="#"
              className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg
                text-slate-600 hover:text-slate-900 hover:bg-slate-100
              }`}
            >
              Sign in
            </a> */}
            <button
              onClick={onOpenDemo}
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Book Demo
            </button>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a href="#" className="text-sm font-medium text-slate-600 px-3 py-2">Sign in</a>
            <button
              onClick={() => { setMenuOpen(false); onOpenDemo?.(); }}
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
