import React from 'react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MapPin,
  Calendar,
  Compass
} from 'lucide-react';
import { communityMeta } from '../data/communityData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Mengenal TBM AIUEO & Komunitas Ngejah</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Ruang Belajar Mandiri di Jantung Garut Selatan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Menghadirkan kehangatan saung bambu sebagai wahana bertemunya buku, anak-anak, pemuda, dan masa depan pedesaan.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Story Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 dark:border-stone-800 aspect-[4/5] bg-stone-200 dark:bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
                alt="Aktivitas Membaca dan Mendongeng di Saung TBM AIUEO"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kampung Sukawangi, Singajaya, Garut</span>
                </div>
                <p className="text-sm font-medium text-stone-200">
                  "Di saung ini, setiap anak berhak bermimpi setinggi langit tanpa dibatasi keterbatasan fasilitas."
                </p>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-stone-900 p-3 rounded-xl shadow-lg border border-stone-200 dark:border-stone-700 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-stone-600 dark:text-stone-300">Sejak</div>
                <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">15 Juli 2010</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-4 text-base leading-relaxed">
              <p>
                <strong className="text-stone-900 dark:text-stone-100 font-semibold">Taman Baca Masyarakat (TBM) AIUEO</strong> lahir dari denyut nadi pergerakan <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">Komunitas Ngejah</strong>. Berdiri di lereng perbukitan Kampung Sukawangi, Singajaya, Garut, inisiatif ini dirintis oleh <span className="font-semibold text-stone-900 dark:text-stone-100">Nero Taopik Abdillah</span> bersama pemuda desa yang gelisah melihat kesenjangan akses literasi.
              </p>

              <p>
                Kata <em>"Ngejah"</em> terinspirasi dari kata Sunda dan Indonesia yang berarti mengeja—proses mendasar dalam merangkai huruf menjadi makna, merangkai pemikiran menjadi tindakan nyata. Di TBM AIUEO, membaca bukan sekadar kegiatan teknis, melainkan cara membebaskan daya nalar warga, memperkuat kemandirian ekonomi, dan melestarikan warisan budaya Sunda.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Gerakan Kerelawanan Murni
                  </h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Dikelola secara gotong royong oleh relawan lokal tanpa orientasi profit komersial.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Inklusif untuk Semua Kalangan
                  </h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Melayani anak usia dini, pelajar, pemuda putus sekolah, ibu-ibu, hingga sesepuh desa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Menjemput Bola ke Dusun
                  </h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Tidak menunggu pembaca datang, tetapi mendatangi perkampungan melalui motor literasi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Berakar Tradisi & Ekologi
                  </h3>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Mengintegrasikan sastra lisan Sunda, alat musik karinding, dan konservasi alam Garut.
                </p>
              </div>
            </div>

            {/* Quick Quote Highlight */}
            <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80">
              <p className="text-xs sm:text-sm font-medium text-emerald-900 dark:text-emerald-200 italic">
                "Bukan megahnya gedung yang melahirkan kecintaan membaca, melainkan ketulusan ruang yang hangat dan penerimaan yang memerdekakan jiwa."
              </p>
              <span className="block text-[11px] font-bold text-emerald-800 dark:text-emerald-300 mt-1 uppercase tracking-wider">
                — Prinsip Dasar Penggerak Komunitas Ngejah
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
