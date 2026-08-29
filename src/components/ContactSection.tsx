import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Instagram, 
  Youtube, 
  Facebook, 
  ExternalLink,
  ChevronDown,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import { contactInfo, faqItems } from '../data/communityData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Ruang Silaturahmi</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Kontak, Alamat, & Informasi Kunjungan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Pintu Saung TBM AIUEO selalu terbuka lebar untuk para sahabat pegiat literasi, relawan, donatur, dan akademisi.
          </p>
        </div>

        {/* Grid: Contact Info + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                    Alamat Lengkap Saung Utama
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    TBM AIUEO Komunitas Ngejah
                  </p>
                </div>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed pl-1">
                {contactInfo.address}
              </p>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                    Surat Elektronik
                  </h4>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                    Narahubung WhatsApp
                  </h4>
                </div>
                <a
                  href={contactInfo.socials.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                Kanal Komunikasi & Media Sosial
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={contactInfo.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose-500" />
                  <span>Instagram @komunitasngejah</span>
                </a>

                <a
                  href={contactInfo.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook Komunitas</span>
                </a>

                <a
                  href={contactInfo.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>YouTube Redaksi</span>
                </a>

                <a
                  href={contactInfo.socials.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs font-semibold transition-colors"
                >
                  <Globe className="w-4 h-4 text-teal-600" />
                  <span>Blog Pustaka Ngejah</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 dark:text-amber-200">
                <strong>Jam Kunjung & Ruang Baca:</strong> Buka setiap hari untuk anak-anak dan warga. Untuk kunjungan rombongan / studi lapangan komunitas, harap konfirmasi terlebih dahulu melalui WhatsApp/Email.
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs"
                  >
                    <button
                      id={`faq-toggle-${idx}`}
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-stone-900 dark:text-stone-100 font-bold text-sm hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Directions / Location Banner */}
        <div className="p-6 rounded-3xl bg-emerald-800 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-900/80 text-emerald-300">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base">
                Menuju Lokasi Singajaya, Garut Selatan
              </h4>
              <p className="text-xs text-emerald-100">
                Berjarak sekitar 65 km ke arah selatan dari pusat kota Garut via Cikajang - Singajaya.
              </p>
            </div>
          </div>
          <a
            href={contactInfo.mapsEmbedUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs shadow-xs hover:bg-emerald-50 transition-colors shrink-0"
          >
            Buka di Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
