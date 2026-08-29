import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  User, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { achievementsData } from '../data/communityData';
import { AchievementCategory } from '../types';

export const AchievementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory | 'all'>('all');

  const filteredAchievements = achievementsData.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="prestasi" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Jejak Apresiasi & Pengakuan</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Penghargaan & Apresiasi Terverifikasi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Bukti nyata dedikasi konsisten dalam membudayakan minat baca dan memberdayakan pemuda pedesaan Garut.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          <button
            id="tab-prestasi-all"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            Semua Apresiasi
          </button>

          <button
            id="tab-prestasi-komunitas"
            onClick={() => setActiveCategory('komunitas')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeCategory === 'komunitas'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Penghargaan Komunitas</span>
          </button>

          <button
            id="tab-prestasi-individu"
            onClick={() => setActiveCategory('individu')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeCategory === 'individu'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Penghargaan Individu Tokoh</span>
          </button>

          <button
            id="tab-prestasi-pengelola"
            onClick={() => setActiveCategory('pengelola')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeCategory === 'pengelola'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Penghargaan Pengelola TBM</span>
          </button>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
                    Tahun {item.year}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Issuer & Recipient */}
                <div className="space-y-1 text-xs text-stone-600 dark:text-stone-400 mb-3">
                  <div>
                    <strong className="text-stone-700 dark:text-stone-300">Pemberi:</strong> {item.issuer}
                  </div>
                  <div>
                    <strong className="text-stone-700 dark:text-stone-300">Penerima:</strong> {item.recipient}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Verified Source Footer */}
              <div className="mt-4 pt-3 border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sumber: {item.verifiedSource}</span>
                </span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">VALID</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
