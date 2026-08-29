import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Sejarah', href: '#sejarah' },
    { name: 'Program', href: '#program' },
    { name: 'Kegiatan', href: '#kegiatan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Artikel', href: '#artikel' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Tokoh', href: '#tokoh' },
    { name: 'Relawan', href: '#relawan' },
    { name: 'Dukung Kami', href: '#donasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 dark:border-stone-800 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a 
            id="nav-logo"
            href="#beranda" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            aria-label="TBM AIUEO Komunitas Ngejah Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-emerald-600 dark:to-emerald-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-5 h-5 text-emerald-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                TBM AIUEO
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-stone-600 dark:text-stone-300 uppercase">
                Komunitas Ngejah
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200 font-semibold shadow-xs'
                      : 'text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white bg-stone-200/70 hover:bg-stone-300/70 dark:bg-stone-800/80 dark:hover:bg-stone-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-stone-700" />
              )}
            </button>

            {/* CTA Button */}
            <a
              id="cta-explore-btn"
              href="#program"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>Jelajahi Gerakan</span>
              <ArrowRight className="w-3 h-3 ml-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-white bg-stone-200/70 dark:bg-stone-800/80 hover:bg-stone-300/70 dark:hover:bg-stone-700/80 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Buka Menu Navigasi"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden fixed inset-x-0 top-[60px] bg-stone-50/98 dark:bg-stone-900/98 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 shadow-xl max-h-[85vh] overflow-y-auto transition-all animate-fadeIn"
        >
          <div className="px-5 pt-3 pb-6 space-y-1">
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 font-semibold'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
              <a
                id="mobile-cta-btn"
                href="#program"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Jelajahi Gerakan TBM AIUEO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
