import React from 'react';
import { 
  Calendar, 
  Award, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Home, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { timelineEvents } from '../data/communityData';

export const TimelineSection: React.FC = () => {
  const getTimelineIcon = (iconType: string) => {
    switch (iconType) {
      case 'founding':
        return <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'saung':
        return <Home className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'champion':
        return <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      case 'research':
        return <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'today':
        return <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="sejarah" className="py-16 sm:py-24 bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Rekam Jejak Historis</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Perjalanan Gerakan Literasi Komunitas Ngejah
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-400">
            Dari diskusi pemuda di saung bambu sederhana hingga menjadi inspirasi gerakan literasi tingkat nasional.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-stone-200 dark:bg-stone-800" />
          
          {/* Mobile Line */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-stone-200 dark:bg-stone-800" />

          <div className="space-y-10 sm:space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={event.year} 
                  id={`timeline-event-${index}`}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Left Column in Desktop (Alternating) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-md transition-shadow">
                      
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          {event.year}
                        </span>
                        <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                          • {event.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                        {event.title}
                      </h3>
                      
                      <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                        {event.subtitle}
                      </div>

                      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node / Icon Badge */}
                  <div className="absolute left-1.5 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-stone-900 border-2 border-emerald-600 dark:border-emerald-500 shadow-md z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  </div>

                  {/* Empty Spacer Column for Desktop Grid */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Tag */}
        <div className="mt-14 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-emerald-900 dark:text-emerald-200 flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            Seluruh data kronologi sejarah didasarkan pada arsip resmi Komunitas Ngejah dan publikasi media terpercaya.
          </p>
        </div>

      </div>
    </section>
  );
};
