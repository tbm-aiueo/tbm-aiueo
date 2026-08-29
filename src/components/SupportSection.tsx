import React, { useState } from 'react';
import { 
  Gift, 
  BookOpen, 
  MapPin, 
  Users, 
  Sparkles, 
  Copy, 
  Check, 
  Mail, 
  Phone,
  ChevronRight,
  HandHeart
} from 'lucide-react';
import { supportOptions, contactInfo } from '../data/communityData';

export const SupportSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contactInfo.shippingAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="dukung" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HandHeart className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Gotong Royong Kebajikan</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Dukung Ruang Belajar Anak Desa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Setiap jilid buku yang Anda kirim dan setiap waktu yang Anda luangkan menjadi lentera penerang mimpi mereka.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((opt) => (
            <div
              key={opt.id}
              id={`support-card-${opt.id}`}
              className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {opt.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  {opt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/60 dark:border-stone-800/60">
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                >
                  <span>{opt.actionLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Book Donation Address Box */}
        <div className="bg-emerald-900 dark:bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider bg-emerald-800 text-emerald-300 px-3 py-1 rounded-full">
                Alamat Pengiriman Donasi Buku & Paket Literasi
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Kirimkan Buku Layak Baca Langsung ke Saung TBM AIUEO
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Kami menerima buku cerita anak bergambar, novel inspiratif, ensiklopedia, buku sains populer, komik edukatif, dan buku keterampilan praktis.
              </p>

              {/* Address Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 text-xs sm:text-sm font-mono text-emerald-200 mt-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contactInfo.shippingAddress}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                id="copy-donation-address-btn"
                onClick={copyAddress}
                className="w-full py-3.5 px-5 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Alamat Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-emerald-800" />
                    <span>Salin Alamat Lengkap</span>
                  </>
                )}
              </button>

              <a
                href={contactInfo.socials.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm border border-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Konfirmasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
