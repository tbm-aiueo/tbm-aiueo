import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  ShieldCheck,
  ExternalLink,
  Camera,
  FileCheck
} from 'lucide-react';
import { galleryData } from '../data/communityData';
import { GalleryItem, GalleryCategory } from '../types';
import { VerificationAuditModal } from './VerificationAuditModal';

const galleryCategories: GalleryCategory[] = [
  'Semua',
  'Membaca',
  'Pojok Baca',
  'Anak',
  'Seni',
  'Literasi',
  'Komunitas',
  'Relawan'
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'Semua') return galleryData;
    return galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem: GalleryItem | null = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setZoomLevel(1);
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  }, [lightboxIndex, filteredGallery.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setZoomLevel(1);
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  }, [lightboxIndex, filteredGallery.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
    setZoomLevel(1);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Dokumentasi Visual Terverifikasi</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Galeri Saung & Kampung Literasi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Rekaman visual nyata dari aktivitas membaca anak-anak, Gerakan Kampung Membaca, dan kelas kesenian di Singajaya Garut.
          </p>

          {/* Audit & Verification Transparency Button */}
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-stone-900 border border-emerald-600/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 shadow-xs transition-all duration-200"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Buka Pusat Audit Bukti & Sumber Foto (Tanpa Rekayasa)</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 mx-auto">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                id={`galeri-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, idx) => {
            const isSpan2 = item.featured && idx === 0;
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => {
                  setLightboxIndex(idx);
                  setZoomLevel(1);
                }}
                className={`group relative rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${
                  isSpan2 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-700/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                        {item.category}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-bold bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md text-emerald-300">
                        <ShieldCheck className="w-3 h-3" />
                        Terverifikasi
                      </span>
                    </div>
                    <span className="p-1.5 rounded-full bg-black/40 text-white/80 group-hover:text-white group-hover:bg-emerald-600 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-serif font-bold text-white leading-snug mb-1 ${
                      isSpan2 ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-200/90 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-white/10 text-[10px] text-emerald-300">
                      <span className="truncate font-semibold">
                        {item.attribution}
                      </span>
                      {item.photographer && (
                        <span className="shrink-0 text-stone-300">
                          Foto: {item.photographer}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal with Zoom and Keyboard Support */}
      {activeItem && lightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4 animate-fadeIn select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-300 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-xs">
                {lightboxIndex + 1} / {filteredGallery.length} • {activeItem.category}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Dokumentasi Asli Terverifikasi
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="lightbox-zoom-in"
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.3, 2.2))}
                className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors"
                title="Perbesar Gambar"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                id="lightbox-zoom-out"
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.3, 1))}
                className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors"
                title="Perkecil Gambar"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                id="lightbox-close-btn"
                onClick={handleClose}
                className="p-2 rounded-full bg-stone-800/80 hover:bg-rose-600 text-white transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-stone-800/70 hover:bg-emerald-600 text-white transition-colors z-20"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-4xl max-h-[70vh] flex items-center justify-center overflow-hidden z-10">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg transition-transform duration-200 shadow-2xl"
            />
          </div>

          {/* Right Arrow Button */}
          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-stone-800/70 hover:bg-emerald-600 text-white transition-colors z-20"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 max-w-2xl mx-auto bg-stone-900/95 border border-stone-800 p-4 rounded-xl text-white backdrop-blur-md z-20">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-serif font-bold text-base text-emerald-300">
                  {activeItem.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <FileCheck className="w-3.5 h-3.5" />
                  Sumber: {activeItem.attribution}
                </span>
                {activeItem.photographer && (
                  <span className="flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-stone-400" />
                    Foto: {activeItem.photographer}
                  </span>
                )}
              </div>

              {activeItem.sourceUrl && (
                <a
                  href={activeItem.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold underline"
                >
                  <span>Buka Artikel Asli</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Verification Audit Modal */}
      <VerificationAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </section>
  );
};
