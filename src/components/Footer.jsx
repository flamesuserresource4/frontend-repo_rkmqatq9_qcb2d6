export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} JuriSight. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
