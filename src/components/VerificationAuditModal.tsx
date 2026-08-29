import React, { useState, useMemo } from 'react';
import { 
  X, 
  ShieldCheck, 
  AlertCircle, 
  Ban, 
  Search, 
  ExternalLink, 
  Camera, 
  MapPin, 
  Calendar, 
  FileCheck, 
  BookOpen, 
  User, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { verifiedPhotosDatabase } from '../data/communityData';
import { VerifiedPhoto } from '../types';

interface VerificationAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'verified' | 'pending' | 'excluded';
}

export const VerificationAuditModal: React.FC<VerificationAuditModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'verified'
}) => {
  const [activeTab, setActiveTab] = useState<'verified' | 'pending' | 'excluded'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const { verifiedPhotos, pendingVerificationPhotos, excludedPhotos } = verifiedPhotosDatabase;

  const categories = useMemo(() => {
    const cats = new Set<string>();
    verifiedPhotos.forEach(p => cats.add(p.category));
    return ['Semua', ...Array.from(cats)];
  }, [verifiedPhotos]);

  const filteredVerified = useMemo(() => {
    return verifiedPhotos.filter(item => {
      const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchQuery = 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.sourceName.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        (item.photographer && item.photographer.toLowerCase().includes(query)) ||
        (item.articleTitle && item.articleTitle.toLowerCase().includes(query));
      return matchCategory && matchQuery;
    });
  }, [verifiedPhotos, selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-stone-900 w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200 dark:border-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Arsip Audit & Dokumentasi Terverifikasi
                </h3>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  Prinsip Tanpa Rekayasa
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Pusat data transparansi foto, sumber liputan asli, jurnalis/fotografer, dan status verifikasi TBM AIUEO Komunitas Ngejah.
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 sm:px-6 pt-4 border-b border-stone-200 dark:border-stone-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('verified')}
            className={`pb-3 px-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'verified'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Dokumentasi Terverifikasi ({verifiedPhotos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pending')}
            className={`pb-3 px-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'pending'
                ? 'border-amber-500 text-amber-700 dark:text-amber-400'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>Perlu Verifikasi ({pendingVerificationPhotos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('excluded')}
            className={`pb-3 px-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'excluded'
                ? 'border-rose-600 text-rose-700 dark:text-rose-400'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Ban className="w-4 h-4 text-rose-600" />
            <span>Dokumentasi Tidak Digunakan / Ditolak ({excludedPhotos.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Tab 1: VERIFIED PHOTOS */}
          {activeTab === 'verified' && (
            <div className="space-y-6">
              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari foto, lokasi, atau sumber..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-stone-900 dark:text-stone-100"
                  />
                </div>

                {/* Categories */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                          ? 'bg-emerald-700 text-white'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Count Bar */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <strong>Standar Keabsahan Terverifikasi:</strong> Seluruh foto di bawah ini adalah rekaman visual nyata yang bersumber dari arsip resmi Komunitas Ngejah, liputan pers nasional (Kompas, Pikiran Rakyat, Tempo), publikasi ilmiah STKIP Siliwangi/Unpad, atau lembaga pemerintah (Kemendikbud RI, Perpusnas RI, Disdik Jabar).
                </div>
              </div>

              {/* Verified Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredVerified.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex flex-col justify-between hover:border-emerald-500 transition-colors"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                          {item.category}
                        </span>
                        <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-200 dark:border-stone-700/60">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item.photographer || 'Dokumentasi Komunitas'}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item.sourceName}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 text-xs border border-stone-200 dark:border-stone-800 mt-2">
                          <strong>Bukti Verifikasi:</strong> {item.verificationProof}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between border-t border-stone-200 dark:border-stone-700/60">
                      <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Status: Terverifikasi Asli
                      </span>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 underline"
                        >
                          <span>Kunjungi Sumber</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: PENDING VERIFICATION */}
          {activeTab === 'pending' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong>Prosedur Verifikasi Ketat:</strong> Foto dalam daftar ini tidak ditampilkan sebagai dokumentasi resmi di halaman utama sampai rincian lokasi, nama kegiatan, dan tanggal liputan dicocokkan 100% dengan catatan resmi sekretariat TBM AIUEO.
                </div>
              </div>

              <div className="space-y-3">
                {pendingVerificationPhotos.map(item => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-amber-200 dark:border-amber-900/50"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-semibold">
                        Perlu Konfirmasi Lanjut
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mb-2">
                      {item.description}
                    </p>
                    <div className="text-xs text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-900 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800">
                      <strong>Catatan Audit:</strong> {item.verificationProof}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: EXCLUDED / STOCK PHOTOS */}
          {activeTab === 'excluded' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 text-xs sm:text-sm flex items-start gap-2.5">
                <Ban className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                <div>
                  <strong>Larangan Gambar Tiruan & Foto Stok:</strong> Sesuai instruksi ketat, seluruh materi visual generik, hasil kecerdasan buatan (AI), maupun foto dari komunitas lain telah diaudit dan <strong>dikeluarkan secara permanen</strong> agar tidak menimbulkan misinformasi visual.
                </div>
              </div>

              <div className="space-y-3">
                {excludedPhotos.map(item => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-rose-200 dark:border-rose-900/50"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-semibold">
                        Ditolak / Tidak Digunakan
                      </span>
                    </div>
                    <div className="text-xs text-rose-700 dark:text-rose-400 bg-rose-50/70 dark:bg-rose-950/50 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900">
                      <strong>Alasan Penolakan:</strong> {item.reasonExcluded}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-600" />
            <span>Transparansi Dokumentasi TBM AIUEO Komunitas Ngejah (Garut, Jawa Barat)</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
          >
            Tutup Audit
          </button>
        </div>
      </div>
    </div>
  );
};
