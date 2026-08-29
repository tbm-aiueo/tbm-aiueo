import React from 'react';
import { Calendar, Sparkles, BookOpen, MapPin, Award } from 'lucide-react';
import { verifiedStats } from '../data/communityData';

export const StatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default:
        return <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="statistik" className="py-12 sm:py-16 bg-emerald-900 dark:bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-300 dark:text-emerald-400 bg-emerald-800/60 dark:bg-emerald-900/80 px-3 py-1 rounded-full mb-2">
            Data Terverifikasi Gerakan
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Rekam Jejak 15+ Tahun di Pelosok Garut
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-2">
            Statistik nyata yang merefleksikan kerja keras relawan dan penerimaan hangat masyarakat.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {verifiedStats.map((item) => (
            <div
              key={item.id}
              id={`stat-card-${item.id}`}
              className="p-6 rounded-2xl bg-emerald-800/50 dark:bg-emerald-900/50 border border-emerald-700/50 dark:border-emerald-800/60 backdrop-blur-xs hover:bg-emerald-800/70 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-white/10 dark:bg-black/20">
                  {getIcon(item.icon)}
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 dark:text-emerald-400 uppercase tracking-wider">
                  Terverifikasi
                </span>
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                {item.number}
              </div>
              <div className="text-sm font-bold text-emerald-100 mb-1">
                {item.label}
              </div>
              <p className="text-xs text-emerald-200/80 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
