import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-b from-white to-sky-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-8 md:p-12 shadow-xl backdrop-blur-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Ready to modernize your legal workflows?</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Start with a secure workspace, invite your team, and let JuriSight do the heavy lifting.</p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-medium shadow-lg shadow-blue-700/20 transition">
                Launch Console <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-medium transition">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
