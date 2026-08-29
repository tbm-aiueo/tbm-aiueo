import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ImpactChain } from './components/ImpactChain';
import { TimelineSection } from './components/TimelineSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { ArticlesSection } from './components/ArticlesSection';
import { AcademicResearchSection } from './components/AcademicResearchSection';
import { AchievementsSection } from './components/AchievementsSection';
import { FiguresSection } from './components/FiguresSection';
import { TodaySection } from './components/TodaySection';
import { VolunteerSection } from './components/VolunteerSection';
import { SupportSection } from './components/SupportSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900 dark:selection:bg-emerald-800 dark:selection:text-emerald-100">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Hero />
          <StatsSection />
          <AboutSection />
          <ImpactChain />
          <TimelineSection />
          <ProgramsSection />
          <ActivitiesSection />
          <GallerySection />
          <ArticlesSection />
          <AcademicResearchSection />
          <AchievementsSection />
          <FiguresSection />
          <TodaySection />
          <VolunteerSection />
          <SupportSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
