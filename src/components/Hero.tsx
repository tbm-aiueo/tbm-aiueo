import React from 'react';
import { 
  ArrowDown, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Users, 
  Award,
  ChevronRight,
  Compass
} from 'lucide-react';
import { communityMeta } from '../data/communityData';

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-amber-500/10 dark:from-emerald-600/10 dark:via-teal-600/5 dark:to-transparent rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[350px] bg-emerald-600/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.07]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Verified Location & Founding Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-800/80 dark:text-emerald-300 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Gerakan Literasi Sejak 15 Juli 2010</span>
              <span className="text-emerald-400 dark:text-emerald-600">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Singajaya, Garut
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-stone-900 dark:text-stone-50 leading-[1.15] tracking-tight"
            >
              Menumbuhkan Minat Baca, <br className="hidden sm:inline" />
              <span className="text-emerald-800 dark:text-emerald-400 underline decoration-emerald-300 dark:decoration-emerald-700 decoration-wavy decoration-2">
                Menghidupkan Kampung,
              </span> <br />
              Membuka Masa Depan.
            </h1>

            {/* Subtitle / Manifesto */}
            <p 
              id="hero-subtitle"
              className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {communityMeta.subTagline}
            </p>

            {/* Storytelling Quote Ribbon */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-stone-100 dark:bg-stone-900/80 border-l-4 border-emerald-600 dark:border-emerald-500 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium italic max-w-xl mx-auto lg:mx-0 shadow-xs">
              "{communityMeta.manifesto}"
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                id="hero-cta-about"
                href="#tentang"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-emerald-200" />
                <span>Kenali Komunitas</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-activities"
                href="#kegiatan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-semibold text-sm sm:text-base shadow-xs hover:shadow transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Lihat Kegiatan</span>
              </a>
            </div>

            {/* Highlights Tagline */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-stone-500 dark:text-stone-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Anugerah Peduli Pendidikan 2015
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                Juara 1 GRCC Nasional 2016
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-500" />
                Pengelola TBM Terbaik Jabar 2019
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composite & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card with Gradient Border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 bg-stone-100 dark:bg-stone-900 aspect-[4/3] sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80"
                  alt="Suasana Membaca dan Belajar di Saung TBM AIUEO Komunitas Ngejah Garut"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 px-2 py-0.5 rounded-md mb-1">
                    Saung Literasi Sukawangi
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-100 line-clamp-2">
                    Menebar benih literasi anak-anak desa di kaki perbukitan Singajaya, Garut.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Gerakan Kampung Membaca */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg border border-stone-200/80 dark:border-stone-700/80 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                    Inisiatif Unggulan
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-100">
                    Gerakan Kampung Membaca
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Rekognisi Nasional */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg border border-stone-200/80 dark:border-stone-700/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                    Penerima Apresiasi
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300">
                    Kemendikbud & Perpusnas RI
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center hidden md:block">
          <a
            href="#statistik"
            className="inline-flex flex-col items-center gap-1 text-xs text-stone-600 hover:text-emerald-800 dark:text-stone-300 dark:hover:text-emerald-300 transition-colors"
            aria-label="Gulir ke bawah untuk melihat statistik"
          >
            <span>Telusuri Jejak Literasi</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-emerald-600 dark:text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
