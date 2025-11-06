import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 min-h-[80vh] overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              JuriSight: Advanced Legal AI Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-5 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              Analyze contracts, compare clauses, and chat with your documents. Built with enterprise-grade security, precision, and speed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#get-started" className="px-5 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium shadow-lg shadow-blue-700/20 transition">
                Get Started
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg bg-white/80 hover:bg-white text-slate-800 dark:text-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium transition">
                Explore Features
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex -space-x-2">
                <img alt="avatar" src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" />
                <img alt="avatar" src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" />
                <img alt="avatar" src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" />
              </div>
              <p>Trusted by legal teams for accurate, explainable AI.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'AI Summaries', value: 'Instant', color: 'from-blue-600 to-teal-500' },
                  { title: 'Clause Match', value: '98%+', color: 'from-emerald-500 to-teal-500' },
                  { title: 'Latency', value: '~1.2s', color: 'from-indigo-500 to-purple-500' },
                  { title: 'Security', value: 'AES-256', color: 'from-cyan-500 to-blue-500' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl p-4 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${card.color} text-white grid place-items-center font-semibold`}>{card.value}</div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{card.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">Benchmarks shown for demo purposes.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
