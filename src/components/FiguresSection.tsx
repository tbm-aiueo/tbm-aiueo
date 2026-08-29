import React from 'react';
import { Users, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { figuresData } from '../data/communityData';

export const FiguresSection: React.FC = () => {
  return (
    <section id="tokoh" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Ketulusan Penggerak</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Orang-orang di Balik Gerakan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Tokoh perintis dan pengelola yang dengan kesungguhan hati mendedikasikan waktu dan pemikiran untuk kemajuan anak-anak desa.
          </p>
        </div>

        {/* Figures Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {figuresData.map((fig) => (
            <div
              key={fig.id}
              id={`figure-card-${fig.id}`}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Avatar & Badges */}
                <div className="relative mb-5 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-emerald-600/80 shadow-md bg-stone-200 dark:bg-stone-800">
                    <img
                      src={fig.avatar}
                      alt={fig.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-block mt-3 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                    {fig.nickname}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {fig.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                    {fig.role}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {fig.bio}
                </p>

                {/* Quote Box */}
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80 text-[11px] text-stone-600 dark:text-stone-300 italic mb-4">
                  <Quote className="w-3.5 h-3.5 text-emerald-600 mb-1" />
                  "{fig.quote}"
                </div>
              </div>

              {/* Contribution Highlight */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-600 dark:text-stone-300">
                <strong className="text-stone-700 dark:text-stone-300 block mb-0.5">Kontribusi Utama:</strong>
                {fig.contribution}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-600 dark:text-stone-300 flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Profil tokoh didasarkan pada data kepengurusan dan rekam jejak resmi Komunitas Ngejah & TBM AIUEO Garut.
          </p>
        </div>

      </div>
    </section>
  );
};
