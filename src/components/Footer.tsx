import React, { useState } from 'react';
import { 
  BookOpen, 
  Heart, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Youtube, 
  Facebook, 
  Globe, 
  Github, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { communityMeta, contactInfo } from '../data/communityData';
import { VerificationAuditModal } from './VerificationAuditModal';

export const Footer: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-serif font-black text-xl shadow-md">
                N
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-none">
                  TBM AIUEO
                </span>
                <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                  Komunitas Ngejah Garut
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Ruang belajar mandiri masyarakat di Kampung Sukawangi, Singajaya, Garut. Menumbuhkan minat baca, merawat budaya Sunda, dan menguatkan asa anak-anak pedesaan sejak 15 Juli 2010.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-emerald-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Komunitas Ngejah"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-emerald-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Komunitas Ngejah"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-emerald-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube Komunitas Ngejah"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.socials.blog}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-emerald-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Blog Pustaka Ngejah"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-emerald-400 border border-emerald-900/60 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Pusat Audit Dokumentasi Terverifikasi</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda & Pengantar</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-emerald-400 transition-colors">Mengenal TBM AIUEO</a>
              </li>
              <li>
                <a href="#sejarah" className="hover:text-emerald-400 transition-colors">Kronologi & Sejarah</a>
              </li>
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors">Program & Inisiatif</a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-emerald-400 transition-colors">Dokumentasi Kegiatan</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-emerald-400 transition-colors">Galeri Foto Asli</a>
              </li>
              <li>
                <a href="#artikel" className="hover:text-emerald-400 transition-colors">Artikel & Warta</a>
              </li>
              <li>
                <a href="#kajian-akademik" className="hover:text-emerald-400 transition-colors">Kajian Akademik</a>
              </li>
            </ul>
          </div>

          {/* Fast Participation Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Apresiasi & Partisipasi
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#prestasi" className="hover:text-emerald-400 transition-colors">Jejak Penghargaan & Apresiasi</a>
              </li>
              <li>
                <a href="#tokoh" className="hover:text-emerald-400 transition-colors">Tokoh & Penggerak</a>
              </li>
              <li>
                <a href="#ngejah-hari-ini" className="hover:text-emerald-400 transition-colors">Ngejah Hari Ini (2026)</a>
              </li>
              <li>
                <a href="#relawan" className="hover:text-emerald-400 transition-colors">Pendaftaran Relawan</a>
              </li>
              <li>
                <a href="#dukung" className="hover:text-emerald-400 transition-colors">Donasi Buku & Alamat Kirim</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-emerald-400 transition-colors">Alamat & Kontak Narahubung</a>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 leading-relaxed">
                <span className="text-emerald-400 font-semibold">GitHub Pages Ready:</span> Static web profile, dioptimalkan tanpa backend server.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="text-center sm:text-left">
            © 2010–{new Date().getFullYear()} <strong>TBM AIUEO Komunitas Ngejah</strong>. Dikelola untuk kemaslahatan literasi masyarakat.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Audit Modal */}
      <VerificationAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </footer>
  );
};
