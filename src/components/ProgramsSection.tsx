import React, { useState } from 'react';
import { 
  BookOpen, 
  Compass, 
  Home, 
  Laptop, 
  Palette, 
  PenTool, 
  Trees, 
  Users, 
  Sparkles, 
  X,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { programsData } from '../data/communityData';
import { Program } from '../types';

export const ProgramsSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Home':
        return <Home className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-green-600 dark:text-green-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="program" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Pilar Gerakan Berkelanjutan</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Program Utama TBM AIUEO & Komunitas Ngejah
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Mengintegrasikan ruang baca, literasi keliling pedesaan, pelestarian seni budaya Sunda, dan advokasi lingkungan.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((prog) => (
            <div
              key={prog.id}
              id={`program-card-${prog.id}`}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950 transition-colors">
                    {getProgramIcon(prog.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                    {prog.category}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3 mb-4">
                  {prog.shortDesc}
                </p>
              </div>

              {/* Action Link */}
              <button
                id={`btn-detail-${prog.id}`}
                onClick={() => setSelectedProgram(prog)}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-stone-100 dark:border-stone-800 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 group/btn"
              >
                <span>Pelajari Detail Program</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div 
          id="program-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedProgram(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-program-title"
        >
          <div 
            className="bg-white dark:bg-stone-900 max-w-xl w-full rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950">
                  {getProgramIcon(selectedProgram.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                    {selectedProgram.category}
                  </span>
                  <h3 id="modal-program-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>
              <button
                id="close-program-modal-btn"
                onClick={() => setSelectedProgram(null)}
                className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-1">
                  Deskripsi Lengkap
                </h4>
                <p>{selectedProgram.fullDesc}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider mb-0.5">
                  Dampak Nyata
                </div>
                <p className="text-xs text-emerald-800 dark:text-emerald-200 font-medium">
                  {selectedProgram.impactHighlight}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-1.5">
                  Penerima Manfaat
                </h4>
                <p className="text-xs font-medium text-stone-700 dark:text-stone-300">
                  {selectedProgram.beneficiaries}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-2">
                  Bentuk Aktivitas
                </h4>
                <ul className="space-y-1.5">
                  {selectedProgram.activitiesList.map((act, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
