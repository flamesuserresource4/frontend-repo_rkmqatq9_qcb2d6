import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Scale, MessageSquare, Cpu, Sparkles } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Document Intelligence',
    desc: 'Upload PDFs or DOCX and let AI extract text, clauses, and key terms with OCR fallback.'
  },
  {
    icon: MessageSquare,
    title: 'RAG Chat',
    desc: 'Ask natural language questions and get grounded answers with source highlights and confidence.'
  },
  {
    icon: Scale,
    title: 'Clause Comparison',
    desc: 'Compare two documents clause-by-clause with similarity scoring and visual diffs.'
  },
  {
    icon: Cpu,
    title: 'Gemini + GPT',
    desc: 'Primary Gemini models with automatic fallback to GPT for resilient AI pipelines.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & RBAC',
    desc: 'JWT auth, role-based access, audit logs, and encryption-in-transit + at-rest.'
  },
  {
    icon: Sparkles,
    title: 'Analytics',
    desc: 'Interactive charts for usage, accuracy, and clause insights for your workspace.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Built for modern legal teams</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Precision results with a refined, law-firm-grade experience.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 text-white grid place-items-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
