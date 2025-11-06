import { useEffect, useState } from 'react';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white shadow">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-100 tracking-tight">JuriSight</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-slate-900 dark:hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-700" />}
            </button>
            <a href="#get-started" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-medium shadow-sm transition">
              Get started
            </a>
            <button className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Features</a>
              <a href="#how" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">How it works</a>
              <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Pricing</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
