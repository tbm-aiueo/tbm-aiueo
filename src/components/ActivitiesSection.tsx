import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  MapPin, 
  Tag, 
  ExternalLink, 
  Sparkles, 
  X,
  ChevronRight,
  Filter
} from 'lucide-react';
import { activitiesData } from '../data/communityData';
import { Activity, ActivityCategory } from '../types';

const categories: ActivityCategory[] = [
  'Semua',
  'Kampung Membaca',
  'Literasi',
  'Membaca',
  'Anak',
  'Seni',
  'Digital',
  'Lingkungan',
  'Relawan'
];

export const ActivitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('Semua');
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'Semua') return activitiesData;
    return activitiesData.filter(act => 
      act.category === selectedCategory || act.tags.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="kegiatan" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Dokumentasi Dinamika Lapangan</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Kegiatan & Aksi Komunitas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Aktivitas nyata pendampingan anak-anak, workshop menulis, pagelaran seni karinding, dan aksi lingkungan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-kegiatan-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((activity) => (
            <article
              key={activity.id}
              id={`activity-card-${activity.id}`}
              className="bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200 dark:bg-stone-900">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-emerald-800/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Meta: Date & Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-stone-600 dark:text-stone-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {activity.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span className="truncate max-w-[160px]">{activity.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {activity.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {activity.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer with Details Button */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between">
                <span className="text-[11px] text-stone-600 dark:text-stone-300 truncate max-w-[180px]">
                  Sumber: {activity.source}
                </span>
                <button
                  id={`btn-view-act-${activity.id}`}
                  onClick={() => setActiveActivity(activity)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                >
                  <span>Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Activity Detail Modal */}
      {activeActivity && (
        <div 
          id="activity-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveActivity(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white dark:bg-stone-900 max-w-2xl w-full rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-stone-200 dark:bg-stone-800">
              <img
                src={activeActivity.image}
                alt={activeActivity.title}
                className="w-full h-full object-cover"
              />
              <button
                id="close-act-modal-btn"
                onClick={() => setActiveActivity(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-white bg-emerald-700 px-2.5 py-0.5 rounded-full">
                  {activeActivity.category}
                </span>
                <span className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {activeActivity.date}
                </span>
                <span className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {activeActivity.location}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                {activeActivity.title}
              </h3>

              <div className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed space-y-2">
                <p>{activeActivity.description}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeActivity.tags.map(t => (
                  <span key={t} className="text-[11px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2.5 py-1 rounded-md font-medium">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 text-xs text-stone-600 dark:text-stone-400 flex items-center justify-between">
                <span>Dokumentasi: {activeActivity.source}</span>
                {activeActivity.sourceUrl && (
                  <a
                    href={activeActivity.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    <span>Kunjungi Sumber</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
