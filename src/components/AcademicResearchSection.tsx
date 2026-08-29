import React from 'react';
import { 
  GraduationCap, 
  BookMarked, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { academicResearchData } from '../data/communityData';

export const AcademicResearchSection: React.FC = () => {
  return (
    <section id="kajian-akademik" className="py-16 sm:py-20 bg-stone-100/70 dark:bg-stone-950/70 border-y border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Validasi Riset Ilmiah</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            TBM AIUEO dalam Kajian Akademik
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400">
            Penelitian ilmiah perguruan tinggi yang menelaah efektivitas model pemberdayaan literasi Komunitas Ngejah.
          </p>
        </div>

        {/* Paper Spotlight Box */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md p-6 sm:p-8 space-y-6">
          
          {/* Header of Paper */}
          <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-1 rounded-md">
                {academicResearchData.journal}
              </span>
              <span className="text-stone-500 dark:text-stone-400 font-medium">
                {academicResearchData.volume} • Tahun {academicResearchData.year}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              "{academicResearchData.title}"
            </h3>

            <div className="text-xs text-stone-600 dark:text-stone-300 flex flex-wrap gap-y-1 gap-x-4">
              <span><strong>Penulis:</strong> {academicResearchData.authors.join(', ')}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Abstrak Penelitian</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed italic bg-stone-50 dark:bg-stone-950 p-4 rounded-xl border border-stone-200/80 dark:border-stone-800">
              "{academicResearchData.abstract}"
            </p>
          </div>

          {/* Key Findings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Temuan & Kesimpulan Utama Kajian
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {academicResearchData.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{insight.title}</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology & Link */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200 dark:border-stone-800 text-xs">
            <span className="text-stone-500 dark:text-stone-400">
              <strong>Metodologi:</strong> {academicResearchData.methodology}
            </span>
            <a
              id="btn-external-academic-research"
              href={academicResearchData.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-xs transition-colors shrink-0"
            >
              <span>Kunjungi Jurnal Asli</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
