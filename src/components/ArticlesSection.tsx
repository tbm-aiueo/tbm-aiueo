import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ExternalLink, 
  X, 
  ChevronRight, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { articlesData } from '../data/communityData';
import { Article, ArticleCategory } from '../types';

const articleCategories: ArticleCategory[] = [
  'Semua',
  'Komunitas',
  'Literasi',
  'Budaya',
  'Digital',
  'Pendidikan',
  'Lingkungan'
];

export const ArticlesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('Semua');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !query || 
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query));

      return matchCategory && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('Semua');
  };

  return (
    <section id="artikel" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Warta & Narasi Literasi</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Artikel, Opini, & Catatan Lapangan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Kumpulan refleksi, gagasan pendidikan alternatif, dan kisah inspiratif gerakan membaca pedesaan.
          </p>
        </div>

        {/* Realtime Search & Category Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="article-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel berdasarkan judul, topik, atau penulis..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                aria-label="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                id={`article-filter-${cat.toLowerCase()}`}
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

        {/* Articles List / Cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                id={`article-card-${art.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-3 text-stone-600 dark:text-stone-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        {art.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        {art.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 pt-1">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Penulis: <strong>{art.author}</strong></span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-4 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] text-stone-600 dark:text-stone-300">
                    Sumber: {art.externalSourceName}
                  </span>
                  <button
                    id={`btn-read-article-${art.id}`}
                    onClick={() => setActiveArticle(art)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                  >
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12 px-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Tidak ada artikel ditemukan
            </h4>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 mb-4">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Pencarian</span>
            </button>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          id="article-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-stone-900 max-w-2xl w-full rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-stone-200 dark:border-stone-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs mb-1.5">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    {activeArticle.category}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400">
                    {activeArticle.date} • {activeArticle.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                  {activeArticle.title}
                </h3>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Ditulis oleh: <strong>{activeArticle.author}</strong>
                </div>
              </div>

              <button
                id="close-article-modal-btn"
                onClick={() => setActiveArticle(null)}
                className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {activeArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-3 flex flex-wrap gap-1.5">
                {activeArticle.tags.map(tag => (
                  <span key={tag} className="text-[11px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2.5 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Sumber asli: {activeArticle.externalSourceName}
              </span>
              <a
                href={activeArticle.externalSourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>Buka Tautan Asli</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
