import React from 'react';
import { Compass, Sparkles, Trees, Laptop, BookOpen, Users, CheckCircle2 } from 'lucide-react';

export const TodaySection: React.FC = () => {
  return (
    <section id="ngejah-hari-ini" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Dinamika Kontemporer 2026</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Ngejah Hari Ini: Gerakan yang Terus Bertumbuh
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            TBM AIUEO Komunitas Ngejah bukan sekadar catatan sejarah masa lalu, melainkan gerakan hidup yang adaptif menjawab tantangan zaman.
          </p>
        </div>

        {/* 3 Pillars of Today */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1: Ekoliterasi Pedesaan */}
          <div className="p-7 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-5">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                1. Ekoliterasi & Konservasi Alam
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Menghubungkan budaya membaca dengan perlindungan lingkungan hidup. Anak-anak diajak membaca di alam terbuka, mengenali vegetasi asli Garut Selatan, dan mempraktikkan penanaman pohon di lereng Singajaya.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200/80 dark:border-stone-800 text-xs font-bold text-emerald-700 dark:text-emerald-400">
              ✓ Menjaga Hulu Air & Ekosistem Lokal
            </div>
          </div>

          {/* Pillar 2: Literasi Digital Ramah Anak */}
          <div className="p-7 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-5">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                2. Literasi Digital & Internet Sehat
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Membimbing anak-anak pedesaan menggunakan gawai dan komputer untuk memperkaya ilmu, memverifikasi berita hoaks, dan mengasah keterampilan teknologi dasar tanpa kehilangan interaksi sosial nyata.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200/80 dark:border-stone-800 text-xs font-bold text-blue-700 dark:text-blue-400">
              ✓ Inklusivitas Akses Informasi Global
            </div>
          </div>

          {/* Pillar 3: Regenerasi & Solidaritas Desa */}
          <div className="p-7 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                3. Regenerasi Relawan Muda
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Mempersiapkan kader-kader relawan penerus dari kalangan generasi muda Singajaya agar estafet kepedulian terus menyala untuk dasawarsa-dasawarsa mendatang.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200/80 dark:border-stone-800 text-xs font-bold text-amber-700 dark:text-amber-400">
              ✓ Keberlanjutan Komunitas Berakar Warga
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
