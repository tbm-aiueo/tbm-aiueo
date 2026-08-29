import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { impactChainSteps } from '../data/communityData';

export const ImpactChain: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 dark:bg-stone-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Alur Perubahan Sosial</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
            "Dari Saung Kecil, Tumbuh Gerakan Besar."
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-300">
            Mata rantai transformasi sosial dari pelosok desa Sukawangi hingga melahirkan dampak nyata bagi generasi masa depan.
          </p>
        </div>

        {/* Impact Chain Grid / Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {impactChainSteps.map((item, index) => {
            const isLast = index === impactChainSteps.length - 1;
            return (
              <div
                key={item.word}
                id={`impact-step-${item.step}`}
                className={`relative p-4 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group ${
                  isLast 
                    ? 'bg-gradient-to-b from-emerald-700 to-emerald-900 border-2 border-emerald-400/80 shadow-lg shadow-emerald-900/40 text-white'
                    : 'bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 text-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isLast ? 'bg-white/20 text-white' : 'bg-emerald-950 text-emerald-400'
                    }`}>
                      {item.step}
                    </span>
                    {!isLast && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>
                  <div className={`font-serif text-base sm:text-lg font-extrabold tracking-wide mb-1.5 ${
                    isLast ? 'text-amber-300' : 'text-white'
                  }`}>
                    {item.word}
                  </div>
                </div>

                <p className="text-[11px] leading-relaxed text-stone-300/90 mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800/60 border border-stone-700 text-xs text-stone-300 font-medium">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>KAMPUNG → BUKU → MEMBACA → BELAJAR → BERKARYA → BERBAGI → BERGERAK → BERDAMPAK</span>
          </div>
        </div>

      </div>
    </section>
  );
};
